import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

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

    const responsiveWidths = [320, 390, 768];
    for (const width of responsiveWidths) {
      await page.setViewportSize({ width, height: 844 });
      const layout = await page.evaluate(() => {
        const viewport = document.documentElement.clientWidth;
        const offenders = [...document.querySelectorAll('body *')].map(element => {
          const rect = element.getBoundingClientRect();
          const style = getComputedStyle(element);
          return {
            tag: element.tagName.toLowerCase(),
            id: element.id,
            className: typeof element.className === 'string' ? element.className : '',
            text: (element.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 90),
            left: Math.round(rect.left),
            right: Math.round(rect.right),
            width: Math.round(rect.width),
            scrollWidth: element.scrollWidth,
            clientWidth: element.clientWidth,
            minWidth: style.minWidth,
            whiteSpace: style.whiteSpace
          };
        }).filter(item => item.right > viewport + 1 || item.left < -1 || item.scrollWidth > item.clientWidth + 1).slice(0, 12);
        return {
          viewport,
          document: document.documentElement.scrollWidth,
          body: document.body.scrollWidth,
          offenders
        };
      });
      if (layout.document > layout.viewport + 1 || layout.body > layout.viewport + 1) {
        failures.push(route + ': horizontal overflow at ' + width + 'px: ' + JSON.stringify(layout));
      }
    }
    await page.setViewportSize({ width: 390, height: 844 });

    const accessibility = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    for (const violation of accessibility.violations) {
      const examples = violation.nodes.slice(0, 3).map(node => node.target.join(' ')).join('; ');
      failures.push(route + ': accessibility ' + violation.impact + ' [' + violation.id + ']: ' + violation.help + ' — ' + examples);
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
        const keyboardRadio = fieldsets.first().locator('input[type="radio"]').first();
        await keyboardRadio.focus();
        await page.keyboard.press('Space');
        if (!(await keyboardRadio.isChecked())) {
          failures.push(route + ': keyboard Space did not select the focused quiz option.');
        }
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
console.log('Pages checked at 320px, 390px, 768px and desktop widths: ' + pagesChecked);
console.log('Interactive quizzes submitted: ' + quizzesSubmitted);
console.log('Worksheet print actions checked: ' + printActionsChecked);
if (failures.length) {
  console.error('Browser smoke test failed with ' + failures.length + ' issue(s):');
  for (const failure of failures) console.error('FAIL: ' + failure);
  process.exitCode = 1;
} else {
  console.log('PASS: all sitemap pages load, no horizontal overflow, keyboard quiz selection works, quiz feedback works, print handlers work and no browser/CSP errors were detected.');
}
