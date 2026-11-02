import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const baseUrl = (process.env.LEARNORA_PREVIEW_URL || 'https://audit-production-hardening-2.learnora-ab2.pages.dev').replace(/\/$/, '');
const baseOrigin = new URL(baseUrl).origin;
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 1,
  isMobile: true,
  hasTouch: true
});
const page = await context.newPage();

const failures = [];
const runtimeErrors = [];
let activePath = '/';
let pagesChecked = 0;
let quizzesSubmitted = 0;
let printActionsChecked = 0;
let performanceBudgetsChecked = 0;
let retakeActionsChecked = 0;

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
  const firstSitemapLocation = sitemap.match(/<loc>(.*?)<\/loc>/);
  let canonicalOrigin = null;
  if (firstSitemapLocation) {
    try {
      const firstUrl = new URL(firstSitemapLocation[1].trim());
      if (firstUrl.protocol === 'https:' && !firstUrl.username && !firstUrl.password) canonicalOrigin = firstUrl.origin;
    } catch {
      // Reported below as an invalid sitemap location.
    }
  }
  if (!canonicalOrigin) failures.push('Sitemap does not contain a valid HTTPS canonical URL.');
  const robotsResponse = await page.request.get(baseUrl + '/robots.txt');
  if (!robotsResponse.ok()) failures.push('robots.txt did not return HTTP 200.');
  else if (!canonicalOrigin || !(await robotsResponse.text()).includes(canonicalOrigin + '/sitemap.xml')) failures.push('robots.txt does not reference the canonical live sitemap URL.');
  const missingResponse = await page.request.get(baseUrl + '/__learnora_audit_missing_route__');
  if (missingResponse.status() !== 404) failures.push('Unknown routes should return HTTP 404; received ' + missingResponse.status() + '.');
  else if (new URL(baseUrl).hostname !== '127.0.0.1' && !/Page Not Found/i.test(await missingResponse.text())) failures.push('Custom 404 response did not contain the expected not-found page.');
  const sitemapLocations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1].trim());
  if (sitemapLocations.length === 0) throw new Error('Sitemap does not contain any routes.');
  const routes = [];
  const seenRoutes = new Set();
  for (const location of sitemapLocations) {
    let sitemapUrl;
    try {
      sitemapUrl = new URL(location);
    } catch {
      failures.push('Sitemap contains an invalid URL: ' + location);
      continue;
    }
    if (sitemapUrl.protocol !== 'https:' || sitemapUrl.origin !== canonicalOrigin || sitemapUrl.username || sitemapUrl.password) {
      failures.push('Sitemap URL must use the same HTTPS canonical origin (' + canonicalOrigin + '): ' + location);
      continue;
    }
    if (sitemapUrl.search || sitemapUrl.hash) {
      failures.push('Sitemap URL must not contain a query string or fragment: ' + location);
      continue;
    }
    const route = sitemapUrl.pathname;
    if (!route.startsWith('/') || route.startsWith('//')) {
      failures.push('Sitemap contains an invalid local route: ' + location);
      continue;
    }
    if (seenRoutes.has(route)) {
      failures.push('Sitemap contains duplicate routes: ' + route);
      continue;
    }
    seenRoutes.add(route);
    routes.push(route);
  }
  if (routes.length === 0) throw new Error('Sitemap contains no valid same-origin routes.');

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

    const performanceAudit = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0];
      const resources = performance.getEntriesByType('resource');
      const firstParty = resources.filter(resource => {
        try { return new URL(resource.name, location.href).origin === location.origin; }
        catch { return false; }
      });
      const thirdParty = resources.filter(resource => {
        try { return new URL(resource.name, location.href).origin !== location.origin; }
        catch { return true; }
      });
      const totalBytes = (navigation?.transferSize || 0) + firstParty.reduce((sum, resource) => sum + (resource.transferSize || 0), 0);
      const scriptBytes = firstParty.filter(resource => /\\.js(?:$|\\?)/i.test(resource.name)).reduce((sum, resource) => sum + (resource.transferSize || 0), 0);
      const largestResource = Math.max(0, ...firstParty.map(resource => resource.transferSize || 0));
      return {
        totalBytes,
        scriptBytes,
        largestResource,
        thirdParty: thirdParty.map(resource => resource.name).slice(0, 5)
      };
    });
    if (performanceAudit.thirdParty.length) {
      failures.push(route + ': unexpected third-party resource requests (CSP/privacy review): ' + performanceAudit.thirdParty.join(', '));
    }
    if (performanceAudit.totalBytes > 2000000) {
      failures.push(route + ': first-party page transfer exceeds 2 MB budget (' + performanceAudit.totalBytes + ' bytes).');
    }
    if (performanceAudit.scriptBytes > 500000) {
      failures.push(route + ': JavaScript transfer exceeds 500 KB budget (' + performanceAudit.scriptBytes + ' bytes).');
    }
    performanceBudgetsChecked++;
    if (performanceAudit.largestResource > 1000000) {
      failures.push(route + ': a first-party resource exceeds 1 MB (' + performanceAudit.largestResource + ' bytes).');
    }

    if (route === '/') {
      const search = page.locator('#resource-search');
      if (await search.count() !== 1) {
        failures.push(route + ': resource search input is missing.');
      } else {
        await search.fill('fractions');
        if (await page.locator('.resource-card:visible').count() === 0) {
          failures.push(route + ': resource search did not return matching cards.');
        }
        await search.fill('');
      }

      const scienceFilter = page.locator('.filter-btn[data-filter="science"]');
      if (await scienceFilter.count() !== 1) {
        failures.push(route + ': Science resource filter is missing.');
      } else {
        await scienceFilter.click();
        if (await page.locator('.resource-card:visible').count() === 0 ||
            await page.locator('.resource-card:visible:not([data-subject="science"])').count() > 0 ||
            await scienceFilter.getAttribute('aria-pressed') !== 'true') {
          failures.push(route + ': Science filter did not correctly filter and announce its selected state.');
        }
        await page.locator('.filter-btn[data-filter="all"]').click();
      }

      const homeQuiz = page.locator('#quiz-content');
      if (await homeQuiz.count() !== 1) {
        failures.push(route + ': homepage quick quiz is missing.');
      } else {
        const answers = [1, 1, 2];
        const expectedQuestions = ['What is 3/4 of 20?', 'Which fraction is equal to 1/2?', 'What is 25% of 80?'];
        for (let question = 0; question < answers.length; question++) {
          const prompt = (await page.locator('#quiz-question').textContent() || '').trim();
          if (prompt !== expectedQuestions[question]) {
            failures.push(route + ': homepage quiz question ' + (question + 1) + ' did not load as expected.');
            break;
          }
          await page.locator('#quiz-options .quiz-option').nth(answers[question]).click();
          const feedback = (await page.locator('#quiz-feedback').textContent() || '').trim();
          if (!/Correct!/i.test(feedback)) {
            failures.push(route + ': homepage quiz question ' + (question + 1) + ' did not show correct-answer feedback.');
          }
          if (question < answers.length - 1) await page.locator('#next-question').click();
        }
        await page.locator('#next-question').click();
        if ((await page.locator('#result-score').textContent() || '').trim() !== '3 / 3') {
          failures.push(route + ': homepage quick quiz calculated an incorrect final score.');
        }
        await page.locator('#restart-quiz').click();
        if (!(await homeQuiz.isVisible()) ||
            !(await page.locator('#quiz-question').textContent() || '').includes('3/4 of 20') ||
            (await page.locator('#quiz-score').textContent() || '').trim() !== 'Score: 0') {
          failures.push(route + ': homepage quick quiz did not reset correctly.');
        }
      }
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
        const retakeButton = page.getByRole('button', { name: /try again|retake|reset/i }).first();
        if (await retakeButton.count()) {
          await retakeButton.click();
          const remainingSelections = await quizForm.locator('input[type="radio"]:checked').count();
          if (remainingSelections) failures.push(route + ': retake button did not clear selected quiz answers.');
          const feedbackMessages = await quizForm.locator('.feedback, .quiz-feedback, [aria-live]').allTextContents();
          if (feedbackMessages.some(message => message.trim())) failures.push(route + ': retake button did not clear quiz feedback.');
          retakeActionsChecked++;
        } else {
          failures.push(route + ': interactive quiz is missing a retake/reset button.');
        }
      }
    }

    let printButton = page.getByRole('button', { name: /print/i }).first();
    if (!(await printButton.count())) printButton = page.locator('[data-print-worksheet]').first();
    if (!(await printButton.count()) && await page.locator('.worksheet').count() > 0) {
      failures.push(route + ': printable worksheet is missing a print control.');
    }
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
console.log('Quiz retake actions checked: ' + retakeActionsChecked);
console.log('Worksheet print actions checked: ' + printActionsChecked);\nconsole.log('Page performance/resource budgets checked: ' + performanceBudgetsChecked);
if (failures.length) {
  console.error('Browser smoke test failed with ' + failures.length + ' issue(s):');
  for (const failure of failures) console.error('FAIL: ' + failure);
  process.exitCode = 1;
} else {
  console.log('PASS: all sitemap pages load, no horizontal overflow, keyboard quiz selection works, quiz feedback works, print handlers work, first-party performance budgets pass and no third-party browser/CSP errors were detected.');
}
