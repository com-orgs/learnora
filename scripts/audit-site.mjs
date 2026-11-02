import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const errors = [];
const warnings = [];

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
  const doubleQuoted = tag.match(new RegExp("\\b" + name + "\\s*=\\s*\"([^\"]*)\"", "i"));
  if (doubleQuoted) return doubleQuoted[1];
  const singleQuoted = tag.match(new RegExp("\\b" + name + "\\s*=\\s*'([^']*)'", "i"));
  return singleQuoted?.[1] ?? null;
}

function canonicalOf(source) {
  const tag = getTags(source, 'link').find(t => (attr(t, 'rel') || '').toLowerCase() === 'canonical');
  return tag ? attr(tag, 'href') : null;
}

function expectedUrl(origin, file) {
  if (file === 'index.html') return origin + '/';
  if (file.endsWith('/index.html')) return origin + '/' + file.slice(0, -'index.html'.length);
  return origin + '/' + file;
}

const files = walk(root);
const htmlFiles = files.filter(f => f.toLowerCase().endsWith('.html'));
const indexable = htmlFiles.filter(f => relative(f) !== '404.html');
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
  const title = source.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  const metaTags = getTags(source, 'meta');
  const descriptionTag = metaTags.find(t => (attr(t, 'name') || '').toLowerCase() === 'description');
  const description = descriptionTag ? attr(descriptionTag, 'content') : null;
  const canonical = canonicalOf(source);
  const h1Count = (source.match(/<h1\b/gi) || []).length;

  if (!title) errors.push(rel + ': missing title.');
  if (!description || description.trim().length < 50) errors.push(rel + ': missing or very short meta description.');
  if (!canonical) errors.push(rel + ': missing canonical URL.');
  else {
    canonicals.push({ file: rel, url: canonical });
    const expected = expectedUrl(origin, rel);
    if (canonical !== expected) errors.push(rel + ': canonical mismatch. Expected ' + expected + ', found ' + canonical);
  }
  if (h1Count !== 1) errors.push(rel + ': expected exactly one H1, found ' + h1Count + '.');
  if (!/name=["']viewport["']/i.test(source)) errors.push(rel + ': missing viewport meta tag.');

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

  for (const match of source.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const type = (attr('<script ' + match[1] + '>', 'type') || '').toLowerCase();
    if (type && !/(javascript|ecmascript|module)/i.test(type)) continue;
    const code = match[2].trim();
    if (!code) continue;
    try {
      new vm.Script(code, { filename: rel + ':inline-script' });
    } catch (error) {
      errors.push(rel + ': inline JavaScript syntax error: ' + error.message);
    }
  }

  for (const match of source.matchAll(/<a\b[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*>/gi)) {
    const href = match[1].trim();
    if (!href || href.startsWith('#') || /^(mailto:|tel:|javascript:|data:)/i.test(href)) continue;
    let target;
    try { target = new URL(href, origin + '/' + rel); } catch { continue; }
    if (target.origin !== origin) continue;
    let pathname;
    try { pathname = decodeURIComponent(target.pathname); } catch { pathname = target.pathname; }
    let targetPath = pathname.replace(/^\/+/, '');
    if (!targetPath || pathname.endsWith('/')) targetPath += (targetPath ? '' : '') + 'index.html';
    const targetFile = path.join(root, targetPath);
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

console.log('HTML pages checked: ' + indexable.length);
console.log('Canonical URLs checked: ' + canonicals.length);
console.log('Warnings: ' + warnings.length);
for (const warning of warnings) console.warn('WARNING: ' + warning);
if (errors.length) {
  console.error('Audit failed with ' + errors.length + ' error(s):');
  for (const error of errors) console.error('ERROR: ' + error);
  process.exitCode = 1;
} else {
  console.log('PASS: metadata, canonicals, sitemap, internal links, quiz question structure, duplicate IDs and inline JavaScript syntax.');
}
