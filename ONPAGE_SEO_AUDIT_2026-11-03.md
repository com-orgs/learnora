# Learnora — Full Sitemap On-page SEO Audit

**Date:** 3 November 2026  
**Production:** https://learnora-ab2.pages.dev/  
**Repository:** https://github.com/com-orgs/learnora  
**Scope:** All 104 unique URLs in `sitemap.xml`  
**Method:** GSC Wizard live on-page auditor, five explicit batches (21, 21, 21, 21, 20 URLs).

## Executive result

| Metric | Result |
|---|---:|
| URLs requested | 104 |
| URLs audited | 104 |
| Indexable pages | 104 |
| Non-indexable pages | 0 |
| Critical findings | 0 |
| High findings | 0 |
| Medium findings | 18 |
| Low findings | 159 |
| Total findings | 177 |

No sitemap page was reported non-indexable by this audit. This is a technical fetch/indexability result; it does not mean Google has already indexed all 104 pages. The separate URL Inspection tracker reports 1 indexed, 87 URL-unknown and 16 pending.

## Medium findings — all 18 are Organization logo metadata

The auditor found existing JSON-LD Organization nodes without a logo on:

- `/curriculum/grade-6-8-maths-study-plan`
- `/worksheets/international-middle-school-maths`
- `/curriculum/international-english-guide`
- `/curriculum/international-science-guide`
- `/worksheets/international-english-science-practice`
- `/english/grade-6-8/argument-writing-claims-reasons-evidence`
- `/english/grade-6-8/text-structure-authors-purpose`
- `/science/grade-7/weather-climate-water-cycle`
- `/science/grade-8/earth-resources-sustainability-human-impact`
- `/computer-science/algorithms`
- `/computer-science/python-basics`
- `/computer-science/html-css`
- `/ai-literacy/how-ai-works`
- `/ai-literacy/verify-ai`
- `/ai-literacy/ai-safety`
- `/financial-literacy/budgeting`
- `/financial-literacy/savings-interest`
- `/financial-literacy/unit-prices`

### Remediation

A low-risk patch on branch `audit/seo-ga4-safety-2026-11-03` adds `/learnora-logo.svg`, a 512×512 square SVG using the existing Learnora book-mark colours, and adds an `ImageObject` logo reference to existing `Organization` nodes in the 18 affected pages. It does not add new schema types, alter visible page layout, or change URLs, CSP, robots.txt, sitemap or analytics behaviour.

The audit must be rerun on production after the branch passes CI and is deployed. The medium findings are not considered closed until the live 18-page retest confirms them.

## Low findings — interpretation and triage

The 159 low findings are primarily:

- No structured data on some pages. This is optional; do not add schema unless it accurately describes visible page content and the intended entity.
- Titles longer than the auditor's approximate 60-character snippet heuristic.
- Meta descriptions longer than its approximate 160-character heuristic.
- The Contact page's reported word count of 242.

The title and description thresholds are heuristics, not Google ranking penalties or strict truncation limits. Do not shorten useful titles/descriptions mechanically; prioritise clarity, uniqueness and search intent. Contact content should remain concise and functional rather than being padded for word count.

## Release checks

- Preserve all 104 canonical URLs and the existing sitemap.
- Preserve the strict Content Security Policy and same-origin-only script policy.
- Keep all analytics and advertising scripts disabled.
- Run static/legal audits and the full preview/browser suite before merging.
- After production deployment, fetch the new logo URL and rerun on-page audit for the 18 affected pages.
