# Learnora

**Learn Better. Practice Smarter.**

Learnora is a lightweight, static educational website with curriculum-neutral study notes, worked examples, practice activities, quizzes and printable worksheets for middle-grade learners.

## Project structure

- `index.html` — homepage and subject navigation
- `math/grade-6/`, `math/grade-7/`, `math/grade-8/` — mathematics learning paths and lessons
- `english/` — English learning resources
- `science/` — science learning resources
- `about.html`, `contact.html`, `privacy-policy.html`, `terms.html` — site information and policies
- `404.html` — custom not-found page
- `sitemap.xml`, `robots.txt` — search-engine discovery
- `scripts/audit-site.mjs` — automated static quality checks
- `scripts/pages/` — same-origin JavaScript assets for lessons and interactive features
- `.github/workflows/site-audit.yml` — GitHub Actions workflow for the audit

## Local preview

The site is static HTML and does not currently require a build step or package installation.

With Python 3 installed, run this from the repository root:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser. Stop the server with `Ctrl+C`.

## Run the quality audit

Node.js 24 or later is used by the CI workflow.

```bash
node scripts/audit-site.mjs
```

The audit checks page metadata and canonical URLs, Open Graph consistency, HTML language attributes, image alt attributes, suspicious unescaped less-than signs in page content, heading-level jumps, internal links and in-page anchors, quiz question structure and accessible fieldset/legend groups, duplicate IDs, same-origin external JavaScript sources and syntax, Content Security Policy readiness, sitemap coverage, robots.txt and the custom 404 page.

A passing static audit does **not** replace academic review, assistive-technology testing, browser/device testing, performance testing, security review or a live HTTP status check.

## Security headers and Content Security Policy

Cloudflare Pages applies the repository's `_headers` file to static asset responses. Executable page scripts are stored as same-origin JavaScript assets; inline JavaScript and inline event handlers are blocked by the Content Security Policy. Inline CSS is currently permitted with `style-src 'unsafe-inline'` because page styles are embedded in the HTML. Revisit this allowance if styles are later moved to external stylesheets. HSTS is intentionally deferred until a custom domain and its HTTPS/redirect configuration are confirmed.

## Content and release principles

- Keep explanations accurate, age-appropriate and understandable.
- Include worked examples, independent practice and a verified answer key.
- Preserve accessible labels, keyboard focus indicators and meaningful image alternatives.
- Keep canonical URLs, Open Graph URLs and sitemap entries aligned.
- Review changes on an isolated branch and verify CI before considering a production release.
- Do not merge or deploy to production without an explicit release decision.
