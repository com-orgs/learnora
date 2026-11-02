import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const errors = [];
const warnings = [];
let quizFormsChecked = 0;
let externalScriptsChecked = 0;
let quizAnswerMappingsChecked = 0;
let pageScriptsSecurityChecked = 0;
let attributeParserSamplesChecked = 0;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === '.wrangler') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.isFile()) out.push(full);
  }
  return out;
}

function relative(file) {
  return path.relative(root, file).split(path.sep).join('/');
}

function getTags(source, name) {
  return [...source.matchAll(new RegExp('<' + name + '\\b[^>]*>', 'gi'))].map(m => m[0]);
}

function attr(tag, name) {
  for (const match of tag.matchAll(/([^\s=/>]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) {
    if (match[1].toLowerCase() === name.toLowerCase()) {
      return match[2] ?? match[3] ?? match[4];
    }
  }
  return null;
}


const attributeParserSamples = [
  ['<meta name = "description" content = "sample">', 'name', 'description'],
  ["<a href = '/lesson.html'>", 'href', '/lesson.html'],
  ['<input TYPE="radio" name="q1" value=2>', 'value', '2'],
  ['<a data-href="/wrong.html" href="/right.html">', 'href', '/right.html'],
  ['<meta content="sample" NAME="description">', 'name', 'description'],
  ['<div class="card">', 'href', null]
];
for (const [sampleTag, sampleName, expectedValue] of attributeParserSamples) {
  attributeParserSamplesChecked++;
  const actualValue = attr(sampleTag, sampleName);
  if (actualValue !== expectedValue) {
    errors.push('HTML attribute parser self-test failed for ' + sampleName + ': expected ' + String(expectedValue) + ', found ' + String(actualValue) + '.');
  }
}

function normalizeVisibleText(value) {
  return value
    .replace(/<input\b[^>]*>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function loadQuizAnswerKey(source, rel, origin) {
  for (const match of source.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const tag = '<script ' + match[1] + '>';
    const src = attr(tag, 'src');
    if (!src) continue;
    const url = new URL(src, origin + '/' + rel);
    if (url.origin !== origin) continue;
    const scriptPath = decodeURIComponent(url.pathname).replace(/^\/+/, '');
    const scriptFile = path.join(root, scriptPath);
    if (!fs.existsSync(scriptFile) || !fs.statSync(scriptFile).isFile()) continue;
    const code = fs.readFileSync(scriptFile, 'utf8');
    const declaration = code.match(/\bconst\s+(answers|key|A)\s*=\s*\{/);
    if (!declaration) continue;

    const openBrace = code.indexOf('{', declaration.index);
    let depth = 0;
    let quote = null;
    let escaped = false;
    let closeBrace = -1;
    for (let index = openBrace; index < code.length; index++) {
      const character = code[index];
      if (quote) {
        if (escaped) escaped = false;
        else if (character === '\\') escaped = true;
        else if (character === quote) quote = null;
        continue;
      }
      if (character === '"' || character === "'" || character.charCodeAt(0) === 96) {
        quote = character;
        continue;
      }
      if (character === '{') depth++;
      else if (character === '}') {
        depth--;
        if (depth === 0) {
          closeBrace = index;
          break;
        }
      }
    }
    if (closeBrace < 0) throw new Error('Quiz answer object has unbalanced braces in ' + scriptPath);
    const objectSource = code.slice(openBrace, closeBrace + 1);
    return vm.runInNewContext('(' + objectSource + ')', Object.create(null), { timeout: 100 });
  }
  throw new Error('No readable external quiz answer key found.');
}

function canonicalOf(source) {
  const tag = getTags(source, 'link').find(t => (attr(t, 'rel') || '').toLowerCase() === 'canonical');
  return tag ? attr(tag, 'href') : null;
}

function expectedUrl(origin, file) {
  if (file === 'index.html') return origin + '/';
  if (file.endsWith('/index.html')) return origin + '/' + file.slice(0, -'index.html'.length);
  return origin + '/' + file.replace(/\\.html$/i, '');
}

const files = walk(root);
const htmlFiles = files.filter(f => f.toLowerCase().endsWith('.html'));
const indexable = htmlFiles.filter(f => relative(f) !== '404.html');
const pageScriptFiles = files.filter(file => relative(file).startsWith('scripts/pages/') && file.toLowerCase().endsWith('.js'));
for (const file of pageScriptFiles) {
  const rel = relative(file);
  const code = fs.readFileSync(file, 'utf8');
  pageScriptsSecurityChecked++;
  if (/\beval\s*\(|\bnew\s+Function\s*\(|\bdocument\.write\s*\(|\.innerHTML\s*=|\.outerHTML\s*=|\.insertAdjacentHTML\s*\(/i.test(code)) {
    errors.push(rel + ': unsafe dynamic code or HTML injection sink detected.');
  }
}

const home = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const homeCanonical = canonicalOf(home);
if (!homeCanonical) {
  errors.push('Homepage is missing a canonical URL.');
}
const origin = homeCanonical ? new URL(homeCanonical).origin : 'https://learnora-ab2.pages.dev';

const canonicals = [];
for (const file of indexable) {
  const rel = relative(file);
  const source = fs.readFileSync(file, 'utf8');
  const titleTags = getTags(source, 'title');
  const title = source.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  if (titleTags.length !== 1) errors.push(rel + ': expected exactly one title element, found ' + titleTags.length + '.');
  const metaTags = getTags(source, 'meta');
  const descriptionTags = metaTags.filter(tag => (attr(tag, 'name') || '').toLowerCase() === 'description');
  if (descriptionTags.length > 1) errors.push(rel + ': duplicate meta description tags.');
  const canonicalTags = getTags(source, 'link').filter(tag => (attr(tag, 'rel') || '').toLowerCase().split(/\s+/).includes('canonical'));
  if (canonicalTags.length > 1) errors.push(rel + ': duplicate canonical link tags.');
  for (const link of getTags(source, 'link')) {
    const relValues = (attr(link, 'rel') || '').toLowerCase().split(/\s+/);
    if (!relValues.includes('stylesheet')) continue;
    const href = attr(link, 'href');
    if (!href) {
      errors.push(rel + ': stylesheet link is missing href.');
      continue;
    }
    let stylesheetUrl;
    try {
      stylesheetUrl = new URL(href, origin + '/' + rel);
    } catch {
      errors.push(rel + ': invalid stylesheet URL "' + href + '".');
      continue;
    }
    if (stylesheetUrl.origin !== origin) {
      errors.push(rel + ': external stylesheet is not allowed by the current Content Security Policy: ' + href);
      continue;
    }
    let stylesheetPath;
    try {
      stylesheetPath = decodeURIComponent(stylesheetUrl.pathname).replace(/^\/+/, '');
    } catch {
      stylesheetPath = stylesheetUrl.pathname.replace(/^\/+/, '');
    }
    const stylesheetFile = path.join(root, stylesheetPath);
    if (!fs.existsSync(stylesheetFile) || !fs.statSync(stylesheetFile).isFile()) {
      errors.push(rel + ': stylesheet asset not found: ' + href);
    }
  }
  if (/^(math|english|science)\/grade-[^/]+\/.+\.html$/i.test(rel) && !rel.endsWith('/index.html')) {
    const visible = normalizeVisibleText(source);
    const qualityChecks = [
      ['learning outcomes', /what you will learn|learning goals|learning objectives|by the end|you should be able to/i],
      ['explanation/examples', /worked example|worked examples|for example|examples|example/i],
      ['independent practice', /independent practice|practice exercises|practice questions|try it yourself|practice activity/i],
      ['printable worksheet', /printable worksheet|worksheet and answer key|free printable worksheet/i],
      ['lesson summary', /lesson summary|key takeaways|summary/i]
    ];
    for (const [label, pattern] of qualityChecks) {
      if (!pattern.test(visible)) warnings.push(rel + ': educational quality review — missing or unclear ' + label + ' section.');
    }
    if ((source.match(/<h2\b/gi) || []).length < 5) warnings.push(rel + ': educational quality review — fewer than five major lesson sections.');
    if ((source.match(/<fieldset\b/gi) || []).length !== 5) errors.push(rel + ': expected exactly five interactive quiz questions.');
  }
  const descriptionTag = metaTags.find(t => (attr(t, 'name') || '').toLowerCase() === 'description');
  const description = descriptionTag ? attr(descriptionTag, 'content') : null;
  const canonical = canonicalOf(source);
  const h1Count = (source.match(/<h1\b/gi) || []).length;
  for (const heading of source.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi)) {
    const headingText = normalizeVisibleText(heading[1]);
    const repeatedNumber = headingText.match(/^(\d+)\.\s*\1\./);
    if (repeatedNumber) errors.push(rel + ': section heading repeats its number: ' + headingText);
  }

  const htmlTag = getTags(source, 'html')[0] || '';
  if (!attr(htmlTag, 'lang')) errors.push(rel + ': missing html lang attribute.');

  const ogUrlTag = metaTags.find(t => (attr(t, 'property') || '').toLowerCase() === 'og:url');
  const ogUrl = ogUrlTag ? attr(ogUrlTag, 'content') : null;
  if (!ogUrl) errors.push(rel + ': missing Open Graph og:url.');
  else if (canonical && ogUrl !== canonical) errors.push(rel + ': og:url does not match canonical URL.');

  for (const property of ['og:title', 'og:description', 'og:type']) {
    const matches = metaTags.filter(tag => (attr(tag, 'property') || '').toLowerCase() === property);
    if (matches.length === 0) errors.push(rel + ': missing Open Graph ' + property + '.');
    if (matches.length > 1) errors.push(rel + ': duplicate Open Graph ' + property + ' tags.');
    if (matches.length === 1 && !attr(matches[0], 'content')?.trim()) {
      errors.push(rel + ': Open Graph ' + property + ' has empty content.');
    }
    if (property === 'og:description' && matches.length === 1 && (attr(matches[0], 'content') || '').trim().length < 50) {
      errors.push(rel + ': Open Graph description is too short.');
    }
  }
  if (metaTags.filter(t => (attr(t, 'property') || '').toLowerCase() === 'og:url').length > 1) {
    errors.push(rel + ': duplicate Open Graph og:url tags.');
  }

  for (const image of getTags(source, 'img')) {
    if (attr(image, 'alt') === null) errors.push(rel + ': image is missing an alt attribute.');
  }

  const visibleText = source
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '')
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');
  if (/<(?=\s|,|=|[0-9])/m.test(visibleText)) {
    errors.push(rel + ': suspicious unescaped less-than sign in HTML content.');
  }

  const headingLevels = [...source.matchAll(/<h([1-6])\b/gi)].map(m => Number(m[1]));
  for (let i = 1; i < headingLevels.length; i++) {
    if (headingLevels[i] > headingLevels[i - 1] + 1) {
      warnings.push(rel + ': heading level skips from H' + headingLevels[i - 1] + ' to H' + headingLevels[i] + '.');
    }
  }

  if (!title) errors.push(rel + ': missing title.');
  if (!description || description.trim().length < 50) errors.push(rel + ': missing or very short meta description.');
  if (!canonical) errors.push(rel + ': missing canonical URL.');
  else {
    canonicals.push({ file: rel, url: canonical });
    const expected = expectedUrl(origin, rel);
    if (canonical !== expected) errors.push(rel + ': canonical mismatch. Expected ' + expected + ', found ' + canonical);
  }
  if (h1Count !== 1) errors.push(rel + ': expected exactly one H1, found ' + h1Count + '.');
  const viewportTags = metaTags.filter(tag => (attr(tag, 'name') || '').toLowerCase() === 'viewport');
  if (viewportTags.length === 0) errors.push(rel + ': missing viewport meta tag.');
  if (viewportTags.length > 1) errors.push(rel + ': duplicate viewport meta tags.');
  if (viewportTags.length === 1 && !/width\s*=\s*device-width/i.test(attr(viewportTags[0], 'content') || '')) {
    errors.push(rel + ': viewport meta tag must include width=device-width.');
  }

  const footer = source.match(/<footer\b[\s\S]*?<\/footer>/i)?.[0] || source;
  if (rel !== 'contact.html' && !/href=["']\/contact\.html["']/i.test(footer)) warnings.push(rel + ': Contact link not found in footer.');
  if (rel !== 'privacy-policy.html' && !/href=["']\/privacy-policy\.html["']/i.test(footer)) warnings.push(rel + ': Privacy link not found in footer.');
  if (rel !== 'terms.html' && !/href=["']\/terms\.html["']/i.test(footer)) warnings.push(rel + ': Terms link not found in footer.');

  const ids = [...source.matchAll(/\bid=["']([^"']+)["']/gi)].map(m => m[1]);
  const duplicateIds = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
  if (duplicateIds.length) errors.push(rel + ': duplicate IDs: ' + duplicateIds.join(', '));

  const qNames = [...source.matchAll(/\bname=["'](q[1-5])["']/gi)].map(m => m[1]);
  if (qNames.length) {
    const unique = new Set(qNames);
    for (let i = 1; i <= 5; i++) if (!unique.has('q' + i)) errors.push(rel + ': quiz is missing question q' + i + '.');
  }

  const quizForms = [...source.matchAll(/<form\b[\s\S]*?<\/form>/gi)]
    .map(match => match[0])
    .filter(form => /\bname=["']q[1-5]["']/.test(form));
  for (const form of quizForms) {
    quizFormsChecked++;
    const ungroupedQuestions = form.match(/<div\b[^>]*\bclass=["'][^"']*\b(?:quiz-question|question)\b[^"']*["']/gi) || [];
    if (ungroupedQuestions.length) errors.push(rel + ': quiz questions must use fieldset groups, not div wrappers.');
    const fieldsets = [...form.matchAll(/<fieldset\b[^>]*>([\s\S]*?)<\/fieldset>/gi)];
    for (let question = 1; question <= 5; question++) {
      const group = fieldsets.find(match => [...match[1].matchAll(/<input\b[^>]*>/gi)].some(input => {
        return attr(input[0], 'name') === 'q' + question && (attr(input[0], 'type') || '').toLowerCase() === 'radio';
      }));
      if (!group) {
        errors.push(rel + ': quiz question q' + question + ' is not inside a fieldset.');
        continue;
      }
      if (!/<legend\b/i.test(group[1])) errors.push(rel + ': quiz question q' + question + ' is missing its legend.');
      const radioCount = [...group[1].matchAll(/<input\b[^>]*type=["']radio["'][^>]*>/gi)].length;
      const labelCount = (group[1].match(/<label\b/gi) || []).length;
      if (labelCount < radioCount) errors.push(rel + ': quiz question q' + question + ' has radio options without labels.');
    }

    try {
      const answerKey = loadQuizAnswerKey(source, rel, origin);
      quizAnswerMappingsChecked++;
      for (let question = 1; question <= 5; question++) {
        const name = 'q' + question;
        const entry = answerKey[name];
        const correctValue = typeof entry === 'string' ? entry : entry?.correct ?? entry?.answer ?? entry?.v ?? entry?.a;
        if (correctValue === undefined || correctValue === null) {
          errors.push(rel + ': answer key is missing a valid correct option for ' + name + '.');
          continue;
        }
        const group = fieldsets.find(match => [...match[1].matchAll(/<input\b[^>]*>/gi)].some(input => attr(input[0], 'name') === name));
        if (!group) continue;
        const options = [...group[1].matchAll(/<label\b[^>]*>([\s\S]*?)<\/label>/gi)]
          .map(match => {
            const input = match[1].match(/<input\b[^>]*>/i)?.[0];
            return input ? { value: attr(input, 'value'), text: normalizeVisibleText(match[1]) } : null;
          })
          .filter(Boolean);
        const correctOption = options.find(option => String(option.value) === String(correctValue));
        if (!correctOption) {
          errors.push(rel + ': answer key option ' + correctValue + ' does not match a labelled radio option for ' + name + '.');
          continue;
        }
        const expectedText = entry && typeof entry === 'object' ? entry.correctText ?? (typeof entry.v === 'string' ? entry.a : undefined) : undefined;
        if (expectedText) {
          if (normalizeVisibleText(expectedText) !== correctOption.text) {
            errors.push(rel + ': answer key correctText does not match the visible option for ' + name + '.');
          }
        }
      }
    } catch (error) {
      errors.push(rel + ': quiz answer-key validation failed: ' + error.message);
    }
  }

  const markupWithoutScripts = source
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '');
  if (/<[a-z][^>]*\son[a-z]+\s*=/i.test(markupWithoutScripts)) {
    errors.push(rel + ': inline event handlers are not allowed by the Content Security Policy.');
  }

  for (const match of source.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const scriptTag = '<script ' + match[1] + '>';
    const type = (attr(scriptTag, 'type') || '').toLowerCase();
    if (type && !/(javascript|ecmascript|module)/i.test(type)) continue;

    const src = attr(scriptTag, 'src');
    let code = match[2].trim();
    if (src) {
      let scriptUrl;
      try {
        scriptUrl = new URL(src, origin + '/' + rel);
      } catch {
        errors.push(rel + ': invalid script source URL "' + src + '".');
        continue;
      }
      if (scriptUrl.origin !== origin) {
        errors.push(rel + ': external script source is not allowed by the Content Security Policy: ' + src);
        continue;
      }
      let scriptPath;
      try {
        scriptPath = decodeURIComponent(scriptUrl.pathname).replace(/^\/+/, '');
      } catch {
        scriptPath = scriptUrl.pathname.replace(/^\/+/, '');
      }
      const scriptFile = path.join(root, scriptPath);
      if (!fs.existsSync(scriptFile) || !fs.statSync(scriptFile).isFile()) {
        errors.push(rel + ': script asset not found: ' + src);
        continue;
      }
      code = fs.readFileSync(scriptFile, 'utf8');
      externalScriptsChecked++;
    } else if (code) {
      errors.push(rel + ': executable inline JavaScript is not allowed by the Content Security Policy.');
      continue;
    }

    if (!code) continue;
    try {
      new vm.Script(code, { filename: rel + ':' + (src || 'inline-script') });
    } catch (error) {
      errors.push(rel + ': JavaScript syntax error: ' + error.message);
    }
  }

  for (const fullTag of getTags(source, 'a')) {
    const rawHref = attr(fullTag, 'href');
    if (rawHref === null) continue;
    const href = rawHref.trim();
    if (attr(fullTag, 'target') === '_blank') {
      const relValue = (attr(fullTag, 'rel') || '').toLowerCase().split(/\s+/);
      if (!relValue.includes('noopener') || !relValue.includes('noreferrer')) {
        warnings.push(rel + ': external new-tab link should include rel="noopener noreferrer": ' + href);
      }
    }
    if (href.startsWith('#') && href.length > 1) {
      const fragment = decodeURIComponent(href.slice(1));
      const candidates = ['id="' + fragment + '"', "id='" + fragment + "'", 'name="' + fragment + '"', "name='" + fragment + "'"];
      if (!candidates.some(value => source.includes(value))) errors.push(rel + ': broken in-page anchor "' + href + '".');
    }
    if (!href || href.startsWith('#') || /^(mailto:|tel:|javascript:|data:)/i.test(href)) continue;
    let target;
    try { target = new URL(href, origin + '/' + rel); } catch { continue; }
    if (target.origin !== origin) continue;
    let pathname;
    try { pathname = decodeURIComponent(target.pathname); } catch { pathname = target.pathname; }
    let targetPath = pathname.replace(/^\/+/, '');
    if (!targetPath || pathname.endsWith('/')) targetPath += (targetPath ? '' : '') + 'index.html';
    let targetFile = path.join(root, targetPath);
    if ((!fs.existsSync(targetFile) || !fs.statSync(targetFile).isFile()) && !path.extname(targetPath)) {
      targetFile = path.join(root, targetPath + '.html');
    }
    if (!fs.existsSync(targetFile) || !fs.statSync(targetFile).isFile()) {
      errors.push(rel + ': broken internal link "' + href + '".');
    }
  }
}

const canonicalSet = new Set(canonicals.map(x => x.url));
if (canonicalSet.size !== canonicals.length) errors.push('Duplicate canonical URLs detected.');

const sitemapPath = path.join(root, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) errors.push('sitemap.xml is missing.');
else {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1].trim());
  const sitemapSet = new Set(sitemapUrls);
  if (sitemapSet.size !== sitemapUrls.length) errors.push('Duplicate URLs found in sitemap.xml.');
  for (const item of canonicals) if (!sitemapSet.has(item.url)) errors.push('Canonical missing from sitemap: ' + item.url);
  for (const url of sitemapUrls) if (!canonicalSet.has(url)) errors.push('Sitemap URL has no matching canonical: ' + url);
}

const lessonFiles = indexable
  .map(file => relative(file))
  .filter(rel => /^(math|english|science)\/grade-[^/]+\/.+\.html$/i.test(rel) && !rel.endsWith('/index.html'));
const lessonSet = new Set(lessonFiles);
const sitemapLessonUrls = fs.existsSync(sitemapPath)
  ? [...fs.readFileSync(sitemapPath, 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)]
      .map(match => match[1].trim())
      .filter(url => {
        try {
          const parsed = new URL(url);
          return parsed.origin === origin && /\/(math|english|science)\/grade-[^/]+\/.+\.html$/i.test(parsed.pathname);
        } catch { return false; }
      })
  : [];
const sitemapLessonPaths = new Set(sitemapLessonUrls.map(url => {
  let pathname = new URL(url).pathname.replace(/^\/+/, '');
  if (!path.extname(pathname)) pathname += '.html';
  return pathname;
}));
for (const lesson of lessonFiles) {
  if (!sitemapLessonPaths.has(lesson)) errors.push('Lesson file is missing from sitemap.xml: ' + lesson);
  const expectedScript = 'scripts/pages/' + lesson.replace(/\//g, '-').replace(/\.html$/i, '.js');
  if (!fs.existsSync(path.join(root, expectedScript))) {
    errors.push(lesson + ': expected lesson quiz script is missing: ' + expectedScript);
    continue;
  }
  const source = fs.readFileSync(path.join(root, lesson), 'utf8');
  const scriptSources = getTags(source, 'script').map(tag => attr(tag, 'src')).filter(Boolean);
  const expectedScriptUrl = '/' + expectedScript;
  const hasExpectedScript = scriptSources.some(src => {
    try { return new URL(src, origin + '/' + lesson).pathname.replace(/^\/+/, '') === expectedScript; }
    catch { return false; }
  });
  if (!hasExpectedScript) errors.push(lesson + ': does not load its expected quiz script ' + expectedScriptUrl);
}
for (const lesson of sitemapLessonPaths) {
  if (!lessonSet.has(lesson)) errors.push('Sitemap contains a lesson URL with no matching lesson file: ' + lesson);
}
const lessonIndexFiles = indexable
  .map(file => relative(file))
  .filter(rel => /^(math\/grade-[^/]+|science\/grade-[^/]+|english|science)\/index\.html$/i.test(rel));
const indexedLessons = new Set();
for (const indexFile of lessonIndexFiles) {
  const source = fs.readFileSync(path.join(root, indexFile), 'utf8');
  for (const tag of getTags(source, 'a')) {
    const href = attr(tag, 'href');
    if (!href) continue;
    try {
      const target = new URL(href, origin + '/' + indexFile);
      if (target.origin !== origin) continue;
      let targetPath = decodeURIComponent(target.pathname).replace(/^\/+/, '');
      if (/^(math|english|science)\/grade-[^/]+\/.+$/i.test(targetPath) && !targetPath.endsWith('/') && !path.extname(targetPath)) targetPath += '.html';
      if (/^(math|english|science)\/grade-[^/]+\/.+\.html$/i.test(targetPath) && !targetPath.endsWith('/index.html')) {
        indexedLessons.add(targetPath);
        if (!lessonSet.has(targetPath)) errors.push(indexFile + ': lesson card points to a missing lesson file: ' + targetPath);
      }
    } catch {
      errors.push(indexFile + ': invalid lesson-card URL: ' + href);
    }
  }
}
for (const lesson of lessonFiles) {
  if (!indexedLessons.has(lesson)) errors.push('Lesson is not linked from a subject/grade index: ' + lesson);
}

const robotsPath = path.join(root, 'robots.txt');
if (!fs.existsSync(robotsPath)) errors.push('robots.txt is missing.');
else {
  const robots = fs.readFileSync(robotsPath, 'utf8');
  if (!robots.includes(origin + '/sitemap.xml')) errors.push('robots.txt does not point to the sitemap.');
  if (/disallow:\s*\/\s*$/im.test(robots)) errors.push('robots.txt blocks all crawlers.');
}
if (!fs.existsSync(path.join(root, '404.html'))) errors.push('Custom 404.html is missing.');
else {
  const notFound = fs.readFileSync(path.join(root, '404.html'), 'utf8');
  if (!/noindex/i.test(notFound)) errors.push('404.html should be noindex.');
}

const headersPath = path.join(root, '_headers');
if (!fs.existsSync(headersPath)) errors.push('_headers is missing; security headers are not configured in the Pages project.');
else {
  const headers = fs.readFileSync(headersPath, 'utf8');
  const requiredHeaders = [
    ['X-Frame-Options', /^\s*X-Frame-Options:\s*DENY\s*$/im],
    ['X-Content-Type-Options', /^\s*X-Content-Type-Options:\s*nosniff\s*$/im],
    ['Referrer-Policy', /^\s*Referrer-Policy:\s*strict-origin-when-cross-origin\s*$/im],
    ['Strict-Transport-Security', /^\s*Strict-Transport-Security:\s*max-age=31536000\s*$/im],
    ['Permissions-Policy', /^\s*Permissions-Policy:\s*.+$/im],
    ['Content-Security-Policy', /^\s*Content-Security-Policy:\s*.+$/im]
  ];
  for (const [name, pattern] of requiredHeaders) {
    if (!pattern.test(headers)) errors.push('_headers is missing or misconfigures ' + name + '.');
  }
  const csp = headers.match(/^\s*Content-Security-Policy:\s*(.+)$/im)?.[1] || '';
  for (const directive of ["default-src 'self'", "script-src 'self'", "script-src-attr 'none'", "style-src 'self' 'unsafe-inline'", "img-src 'self' data:", "connect-src 'self'", "base-uri 'self'", "form-action 'self'", "frame-ancestors 'none'", "object-src 'none'"]) {
    if (!csp.includes(directive)) errors.push('_headers Content-Security-Policy is missing directive: ' + directive);
  }
  if (csp.length > 2000) errors.push('_headers Content-Security-Policy exceeds Cloudflare Pages 2,000-character line limit.');
}
console.log('HTML attribute parser self-tests checked: ' + attributeParserSamplesChecked);
console.log('HTML pages checked: ' + indexable.length);
console.log('Curriculum lesson files checked: ' + lessonFiles.length);
console.log('Educational quality rubric checks: learning outcomes, explanations/examples, practice, worksheets, summaries and five-question quizzes.');
console.log('Sitemap lesson URLs checked: ' + sitemapLessonPaths.size);
console.log('Subject/grade index files checked: ' + lessonIndexFiles.length);
console.log('Lesson quiz script links checked: ' + lessonFiles.length);
console.log('Canonical URLs checked: ' + canonicals.length);
console.log('Accessible quiz forms checked: ' + quizFormsChecked);
console.log('Quiz answer-key mappings checked: ' + quizAnswerMappingsChecked);
console.log('Lesson JavaScript security scans checked: ' + pageScriptsSecurityChecked);
console.log('Same-origin JavaScript assets checked: ' + externalScriptsChecked);
console.log('Warnings: ' + warnings.length);
for (const warning of warnings) console.warn('WARNING: ' + warning);
if (errors.length) {
  console.error('Audit failed with ' + errors.length + ' error(s):');
  for (const error of errors) console.error('ERROR: ' + error);
  process.exitCode = 1;
} else {
  console.log('PASS: metadata, canonical/OG consistency, language, images, sitemap, lesson/index/script inventory, internal links/anchors, accessible quiz fieldsets/labels and answer-key mappings, same-origin JavaScript security sinks, CSP and JavaScript syntax.');
}
