# Learnora — Sitewalk SEO remediation checkpoint
Date: 8 November 2026
Production: https://learnora-ab2.pages.dev/
Repository: https://github.com/com-orgs/learnora
Working branch: seo/sitewalk-remediation-2026-11-08
Draft PR: https://github.com/com-orgs/learnora/pull/68

## Completed
- Initial Sitewalk production audit recorded 41/100; it flagged missing structured data, title/description lengths, Twitter metadata, duplicate curriculum pages, Article schema fields and other notices.
- Created an isolated remediation branch and kept production untouched.
- Added page-specific JSON-LD and social metadata across the crawled site; latest preview crawl detected structured data on 104/104 pages with no structured-data parsing/property problems.
- Normalized titles and descriptions; latest Sitewalk report no longer lists long-title, long-description, duplicate-content, missing-Twitter-card or missing-llms.txt findings.
- Added /llms.txt (Sitewalk confirms HTTP 200, 3,332 bytes, 25 links, zero broken links).
- GitHub Site Audit workflow for the metadata batch completed successfully.
- Latest Sitewalk preview audit: 104 pages crawled; health 74/100; 140/151 checks passed; 1 error, 4 warnings, 6 notices.
- Mobile Lighthouse samples: 100/100 for homepage, Contact and Grade 7 Maths; lab LCP 815 ms, 756 ms and 758 ms respectively. No real-user field data was available for those samples.
- Updated Grade 8 Pythagorean theorem meta description to a more useful 130+ character summary (branch only).

## Preview-only findings — do not treat as production defects
- Preview homepage returns X-Robots-Tag: noindex.
- Preview pages use production canonical URLs (https://learnora-ab2.pages.dev/).
- These are expected staging safeguards; do not remove noindex or rewrite canonicals based solely on the preview audit.
- Re-audit production after changes are approved and deployed.

## Remaining Sitewalk findings to review
1. Article schema missing datePublished on three curriculum pages. Do not invent publication dates; add only when a real publication date can be established.
2. Article schema missing representative image on three curriculum pages. Use only an image genuinely representing the visible article; do not substitute the brand logo.
3. Article schema missing dateModified on three pages. Add/update only when substantive content changes are documented.
4. Organization schema missing sameAs. Add only verified official profiles; none have been supplied/verified yet.
5. Contact page is 242 words. This may be appropriate for a contact page; do not add filler merely to reach 300 words.
6. CFPB youth financial education link was unreachable to Sitewalk (not confirmed broken). Manually verify before replacing.
7. Nine URLs exceed Sitewalk's 115-character heuristic. Do not rename established URLs without redirects and traffic/link review.
8. Preview canonical mismatch and preview noindex are intentional; preserve staging safeguards.

## QA and release gates
- PR #68 remains draft/unmerged; production has not been changed by this remediation branch.
- Re-run GitHub checks after the latest Pythagorean description commit.
- Confirm Cloudflare preview reflects the latest branch commit.
- Test lesson navigation, quiz feedback, worksheets, mobile and desktop interactions.
- Validate JSON-LD using Schema Markup Validator / Rich Results Test where applicable.
- Compare preview and production headers/canonicals separately.
- Only merge/deploy after checks pass and owner approves the release.

## Next action
Review the three curriculum Article objects and verify whether real publication dates and representative article images exist in the actual content/history. Resolve only fields supported by evidence; then repeat QA and Sitewalk preview audit.
