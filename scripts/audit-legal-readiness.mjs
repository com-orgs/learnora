import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const errors = [];
const warnings = [];
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

const privacy = read('privacy-policy.html');
const terms = read('terms.html');
const about = read('about.html');
const contact = read('contact.html');
const htmlFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['.git', 'node_modules', '.wrangler'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && full.toLowerCase().endsWith('.html')) htmlFiles.push(full);
  }
}
walk(root);

function requireText(source, pattern, label, file) {
  if (!pattern.test(source)) errors.push(file + ': missing required legal disclosure: ' + label);
}
requireText(privacy, /Advertising is not currently active on Learnora/i, 'advertising inactive status', 'privacy-policy.html');
requireText(privacy, /does not load Google AdSense advertising code or third-party analytics tags/i, 'no active AdSense or analytics disclosure', 'privacy-policy.html');
requireText(privacy, /European Economic Area[\s\S]{0,350}Google-certified consent management platform[\s\S]{0,160}IAB Transparency and Consent Framework/i, 'EEA/UK/Swiss certified CMP disclosure', 'privacy-policy.html');
requireText(privacy, /under 13[\s\S]{0,500}COPPA/i, 'children/COPPA disclosure', 'privacy-policy.html');
requireText(privacy, /Learnora\.site@gmail\.com/i, 'privacy contact email', 'privacy-policy.html');
requireText(privacy, /Cloudflare Pages[\s\S]{0,350}IP address[\s\S]{0,350}Privacy Policy/i, 'Cloudflare hosting and technical-data disclosure', 'privacy-policy.html');
requireText(terms, /Advertising is not currently active on Learnora/i, 'terms advertising status', 'terms.html');
requireText(terms, /Learnora\.site@gmail\.com/i, 'terms contact email', 'terms.html');
requireText(about, /Editorial independence and corrections/i, 'editorial independence and corrections section', 'about.html');
requireText(about, /Learnora\.site@gmail\.com/i, 'About contact email', 'about.html');
requireText(contact, /Learnora\.site@gmail\.com/i, 'contact page email', 'contact.html');

const adOrAnalyticsScript = /(?:pagead2\.googlesyndication\.com|googleads\.g\.doubleclick\.net|googletagservices\.com|googlesyndication\.com\/pagead|adsbygoogle|gtag\s*\(|gtag\/js|google-analytics\.com|googletagmanager\.com\/gtm|connect\.facebook\.net\/[^"'\s]*fbevents)/i;
for (const full of htmlFiles) {
  const rel = path.relative(root, full).split(path.sep).join('/');
  const source = fs.readFileSync(full, 'utf8');
  for (const match of source.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const tag = match[0];
    if (adOrAnalyticsScript.test(tag)) errors.push(rel + ': active advertising/analytics script detected; monetisation is not authorised yet.');
  }
  if (/googlesyndication\.com|doubleclick\.net|google-analytics\.com|googletagmanager\.com/i.test(source)) {
    warnings.push(rel + ': third-party advertising/analytics URL appears in page source; inspect whether it is documentation or executable integration.');
  }
}

const adsTxtPath = path.join(root, 'ads.txt');
if (fs.existsSync(adsTxtPath)) {
  const adsTxt = fs.readFileSync(adsTxtPath, 'utf8').trim();
  if (!/^google\.com,\s*pub-\d{16},\s*(DIRECT|RESELLER),\s*f08c47fec0942fa0$/m.test(adsTxt)) {
    errors.push('ads.txt exists but does not contain a correctly formatted verified Google publisher declaration.');
  } else {
    warnings.push('ads.txt has a syntactically valid publisher declaration; verify that its publisher ID exactly matches the live AdSense account before release.');
  }
}

if (errors.length) {
  console.error('FAIL: Learnora legal / monetisation safety audit');
  for (const error of errors) console.error('ERROR: ' + error);
  for (const warning of warnings) console.warn('WARN: ' + warning);
  process.exit(1);
}
console.log('PASS: Learnora pre-monetisation legal disclosures and no-ad/no-tracking guardrails.');
console.log('PASS: policy pages, editorial transparency, contact details and children/COPPA disclosures are present.');
console.log('PASS: no active AdSense or analytics script tags detected across ' + htmlFiles.length + ' HTML pages.');
console.log('INFO: CMP activation and ads.txt publisher declaration remain account-dependent release gates; do not add placeholders.');
for (const warning of warnings) console.warn('WARN: ' + warning);
