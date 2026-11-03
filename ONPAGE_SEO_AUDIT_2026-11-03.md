# Learnora — Full Sitemap On-page SEO Audit

**Date:** 3 November 2026  
**Production:** https://learnora-ab2.pages.dev/  
**Repository:** https://github.com/com-orgs/learnora  
**Scope:** All 104 unique URLs in `sitemap.xml`  
**Method:** GSC Wizard live on-page auditor, five explicit batches (21, 21, 21, 21, 20 URLs), repeated after production deployment.

## Final post-deployment result

| Metric | Initial audit | Post-deployment audit |
|---|---:|---:|
| URLs audited | 104 | 104 |
| Indexable pages | 104 | 104 |
| Non-indexable pages | 0 | 0 |
| Critical findings | 0 | 0 |
| High findings | 0 | 0 |
| Medium findings | 18 | **0** |
| Low findings | 159 | 159 |
| Total findings | 177 | **159** |

All 104 pages were fetched and reported indexable in the post-deployment audit. The 18 medium Organization-logo findings were eliminated. The 159 remaining low findings are not automatically ranking penalties.

## Remediation delivered

The initial audit found 18 existing JSON-LD `Organization` nodes without a logo. A dedicated root asset, `/learnora-logo.svg`, was added as a 512×512 square vector mark. Existing Organization nodes on the following pages now reference it as an `ImageObject`:

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

A targeted post-deployment retest of these 18 pages returned 18/18 indexable, 0 medium findings and 23 low findings. A full post-deployment rerun of all 104 sitemap URLs returned 104/104 indexable, 0 critical/high/medium and 159 low findings.

## Low findings — interpretation and triage

The 159 low findings are primarily:

- No structured data on some pages. This is optional; do not add schema unless it accurately describes visible page content and the intended entity.
- Titles longer than the auditor's approximate 60-character snippet heuristic.
- Meta descriptions longer than its approximate 160-character heuristic.
- The Contact page's reported word count of 242.
- A few Article fields such as image and datePublished are recommended but not present.

The title and description thresholds are heuristics, not Google ranking penalties or strict truncation limits. Do not shorten useful titles/descriptions mechanically; prioritise clarity, uniqueness and search intent. Contact content should remain concise and functional rather than being padded for word count.

## Release and QA evidence

- PR [#15](https://github.com/com-orgs/learnora/pull/15) merged as `4360fc43b47b5d7a0d7d13b5387e5e58320cb276`.
- Branch CI [#41682977213](https://github.com/com-orgs/learnora/actions/runs/41682977213) passed static/legal audits, preview security headers/CSP, browser tests and performance checks.
- Cloudflare deployment [#41683436307](https://github.com/com-orgs/learnora/actions/runs/41683436307) succeeded.
- Main static/legal audit [#41683436380](https://github.com/com-orgs/learnora/actions/runs/41683436380) succeeded.
- Preserve all 104 canonical URLs, the existing sitemap, strict CSP, same-origin-only script policy and disabled analytics/advertising.
