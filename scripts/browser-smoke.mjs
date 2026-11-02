import { chromium } from 'playwright';

const baseUrl = (process.env.LEARNORA_PREVIEW_URL || 'https://audit-production-hardening-2.learnora-ab2.pages.dev').replace(/\/$/, '');
const baseOrigin = new URL(baseUrl).origin;
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 1,
  isMobile: true,
  hasTouch: true
});

const failures = [];
const runtimeErrors = [];
let activePath = '/';
let pagesChecked = 0;
let quizzesSubmitted = 0;
let printActionsChecked = 0;

page.on('pageerror', error => runtimeErrors.push(activePath + ': ' + error.message));
page.on('console', message => {
  if (message.type() === 'error' && /Content Security Policy|Refused to|Uncaught|Failed to load module script/i.test(message.text())) {
    runtimeErrors.push(activePath + ': ' + message.text());
  }
});
page.on('response', response => {
  const url = new URL(response.url());
  if (url.origin === baseOrigin && response.status() >= 400 && url.pathname !== '/favicon.ico') {
    failures.push(activePath + ': same-origin resource returned HTTP ' + response.status() + ': ' + url.pathname);
  }
});

try {
  const sitemapResponse = await page.request.get(baseUrl + '/sitemap.xml');
  if (!sitemapResponse.ok()) throw new Error('Sitemap request failed with HTTP ' + sitemapResponse.status());
  const sitemap = await sitemapResponse.text();
  const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname);
  if (routes.length !== 62) throw new Error('Expected 62 sitemap URLs; found ' + routes.length);

  for (const route of routes) {
    activePath = route;
    await page.setViewportSize({ width: 390, height: 844 });
    const response = await page.goto(baseUrl + route, { waitUntil: 'load', timeout: 30000 });
    if (!response || response.status() !== 200) {
      failures.push(route + ': page did not return HTTP 200.');
      continue;
    }

    const mobile = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth,
      body: document.body.scrollWidth
    }));
    if (mobile.document > mobile.viewport + 1 || mobile.body > mobile.viewport + 1) {
      failures.push(route + ': horizontal overflow at 390px (viewport ' + mobile.viewport + ', document ' + mobile.document + ', body ' + mobile.body + ').');
    }

    const forms = page.locator('form');
    let quizForm = null;
    for (let i = 0; i < await forms.count(); i++) {
      const candidate = forms.nth(i);
      if (await candidate.locator('input[type="radio"]').count()) {
        quizForm = candidate;
        break;
      }
    }

    if (quizForm) {
      quizzesSubmitted++;
      const fieldsets = quizForm.locator('fieldset');
      const groupCount = await fieldsets.count();
      if (groupCount !== 5) {
        failures.push(route + ': expected 5 quiz fieldsets, found ' + groupCount + '.');
      } else {
        for (let i = 0; i < groupCount; i++) {
          const radio = fieldsets.nth(i).locator('input[type="radio"]').first();
          if (!(await radio.count())) {
            failures.push(route + ': quiz question ' + (i + 1) + ' has no radio option.');
          } else {
            await radio.check({ force: true });
          }
        }

        const before = await page.locator('[aria-live], [role="status"]').evaluateAll(elements => elements.map(element => element.textContent.trim()));
        let submit = quizForm.locator('button[type="submit"]').first();
        if (!(await submit.count())) submit = quizForm.locator('button').first();
        if (!(await submit.count())) {
          failures.push(route + ': quiz has no submit button.');
        } else {
          await submit.click();
          try {
            await page.waitForFunction(previous => {
              const current = [...document.querySelectorAll('[aria-live], [role="status"]')].map(element => element.textContent.trim());
              return current.some((value, index) => value.length > 0 && value !== (previous[index] || ''));
            }, before, { timeout: 5000 });
          } catch {
            failures.push(route + ': submitting the quiz did not update an accessible status or feedback region.');
          }
        }
      }
    }

    const printButton = page.locator('[data-print-worksheet]').first();
    if (await printButton.count()) {
      await page.evaluate(() => {
        window.__learnoraPrintCalled = false;
        window.print = () => { window.__learnoraPrintCalled = true; };
      });
      await printButton.click();
      if (!(await page.evaluate(() => window.__learnoraPrintCalled))) {
        failures.push(route + ': worksheet print button did not invoke the external print handler.');
      } else {
        printActionsChecked++;
      }
    }

    await page.setViewportSize({ width: 1365, height: 900 });
    const desktop = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth,
      body: document.body.scrollWidth
    }));
    if (desktop.document > desktop.viewport + 1 || desktop.body > desktop.viewport + 1) {
      failures.push(route + ': horizontal overflow at 1365px (viewport ' + desktop.viewport + ', document ' + desktop.document + ', body ' + desktop.body + ').');
    }

    pagesChecked++;
  }
} finally {
  await browser.close();
}

if (runtimeErrors.length) failures.push(...runtimeErrors);
console.log('Pages checked at mobile and desktop widths: ' + pagesChecked);
console.log('Interactive quizzes submitted: ' + quizzesSubmitted);
console.log('Worksheet print actions checked: ' + printActionsChecked);
if (failures.length) {
  console.error('Browser smoke test failed with ' + failures.length + ' issue(s):');
  for (const failure of failures) console.error('FAIL: ' + failure);
  process.exitCode = 1;
} else {
  console.log('PASS: all sitemap pages load, no horizontal overflow, quiz feedback works, print handlers work and no browser/CSP errors were detected.');
}
