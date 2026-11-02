# Learnora — Production Sitemap Verification

**Verification date:** 2 November 2026  
**Production URL:** https://learnora-ab2.pages.dev/  
**Property:** https://learnora-ab2.pages.dev/  
**Repository:** https://github.com/com-orgs/learnora  
**Branch audited:** `main`

## Executive result

The production sitemap is publicly reachable and syntactically parseable. It contains 80 unique URLs on the production host. Google Search Console has accepted the sitemap submission without warnings or errors, but its latest processing state is still pending. Technical sitemap delivery is healthy; Google indexing and organic search visibility are not yet established for most pages.

## Checks and evidence

| Check | Result | Interpretation |
|---|---|---|
| Production sitemap | HTTP 200 | Publicly reachable |
| Sitemap URL count | 80 unique URLs | Includes learning pages, hubs, trust pages and five curriculum-guide URLs |
| URL host consistency | 80/80 on `learnora-ab2.pages.dev` | No off-property sitemap URLs found |
| robots.txt | HTTP 200 | Publicly reachable |
| robots sitemap directive | Exact production sitemap URL | Correct sitemap discovery signal |
| GSC sitemap submission | Pending | Google accepted the submission; processing/fetch is not complete |
| GSC sitemap warnings/errors | 0 / 0 | No reported sitemap parse warnings or errors at the time checked |
| Indexing Tracker | 1 indexed, 10 URL-unknown, 69 pending | Most URLs are not yet confirmed indexed |
| IndexNow key | Verified reachable | Key-file prerequisite is satisfied |
| IndexNow recent history | 80 distinct URLs; latest 100 records all HTTP 200 | Accepted by IndexNow endpoint; not a guarantee of indexing |
| Sitemap performance | 80 URLs parsed; 0 impressions and 0 clicks in 2026-10-03 to 2026-10-30 report | No measurable search visibility in that reporting window |

## URL inventory

The 80 sitemap entries cover:
- 46 Maths lesson pages across Grades 6–8.
- 7 English lesson pages.
- 11 Science lesson pages.
- Subject and grade-level landing pages.
- About, Contact, Privacy Policy and Terms.
- International curriculum hub: `/curriculum/`.
- Four local-context guides:
  - USA — Common Core mathematics, Grades 6–8.
  - England — Key Stage 3 mathematics, Years 7–9.
  - Canada — Ontario mathematics, Grades 6–8.
  - Australia — Australian Curriculum mathematics, Years 7–8.

The four guides clearly state that they are independent supplementary resources and do not claim official endorsement or exact equivalence across school systems.

## Important indexing distinction

A sitemap submission, an IndexNow HTTP 200 response, a live HTTP 200 page response, and Google indexing are four different states:
1. HTTP 200 means the page or sitemap can be fetched.
2. GSC sitemap acceptance means Google accepted the sitemap submission request.
3. IndexNow HTTP 200 means the endpoint accepted the URL notification after key validation.
4. Google indexing is confirmed only by URL Inspection / the Indexing report.

Do not describe the 80 URLs as indexed. Current GSC tracker snapshot is 1 indexed, 10 URL-unknown and 69 pending. The 10 URL-unknown results are discovery/crawl signals, not proof of a robots or noindex block. The latest sitemap report has 0 warnings and 0 errors.

## Branch integrity warning

Production `main` contains the canonical extensionless URL structure and the five curriculum URLs. The separate `audit/production-hardening-2026-11-02` branch still contains older `.html`-suffixed sitemap URLs and omits the five curriculum URLs. Do not merge that branch into production until it is rebased/reconciled, then rerun static sitemap/canonical checks and the full preview/browser workflow.

## Follow-up actions

1. Allow 24–72 hours for Google to fetch/process the sitemap and discover recently submitted pages.
2. Monitor the GSC Sitemaps report and Indexing Tracker; do not repeatedly submit the same sitemap or consume inspection quota on every pending URL.
3. Inspect a small representative sample of URLs that remain “URL is unknown to Google” after discovery time has passed.
4. Reconcile the audit branch with production's extensionless canonical URL structure before any merge.
5. Re-run a clean non-main preview workflow (security headers, Playwright mobile/desktop, quizzes, accessibility and performance).
6. Keep AdSense, analytics and ad scripts disabled until the owner's audience/COPPA decision and account-specific publisher/CMP requirements are resolved.

## Tool availability during this verification

GSC Wizard and GitHub remained available. The browser connector reported that it could not access the originating browser context. Firecrawl's connected account ran out of credits during the latest refresh attempt; no new full-site crawl is claimed from that attempt.
