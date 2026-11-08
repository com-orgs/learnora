# Learnora — Project Status & Continuation Tracker

> **Single source of truth for all future chats and development sessions.**
> Before starting work, read this file and inspect the current audit-branch HEAD/CI. After every meaningful task, update the task log and next actions. The GitHub Actions workflow automatically refreshes the CI status block below after each run on a branch (not pull-request runs). Production merge/deployment requires explicit user approval; the user authorized merge and deployment on 2026-11-02.


## Current verified state — 8 November 2026 (daily indexing & discovery refresh)

- Live production sitemap fetch succeeded: 104 unique same-host URLs, 0 duplicate entries. robots.txt allows all user agents, explicitly allows OAI-SearchBot, and declares the sitemap.
- Main latest content commit `4625c15dbe7f26fd4c5ba217f9960d21eda56b10` (7 Nov 06:49:48 UTC) changed five production lessons: Computer Science HTML/CSS and Python Basics; Financial Literacy Budgeting, Savings & Interest, and Unit Prices. All five changes were confirmed live. No production code was changed by the 8 Nov indexing routine.
- GSC tracker: 104 URLs, 1 indexed, 103 not indexed/unknown, 0 pending/errors/warnings; tracker active. Latest check at `2026-11-08T03:46:56.434+00:00` UTC (2026-11-08 08:46:56.434 PKT).
- **8 Nov Pakistan-date guard:** 39 distinct tracker URLs already have today's `lastCheckAt`; URL Inspection history has 0 rows today; union=39/10, overrun=29, remaining=0. No `inspect_url`, `bulk_inspect_urls` or `check_tracked_url_now` call was made. Exact URL/timestamp list is in [DAILY_INDEXING_LOG_2026-11-08.md](DAILY_INDEXING_LOG_2026-11-08.md).
- Full URL Inspection history: 77 rows, 42 distinct URL keys, 19 repeated URL keys (35 extra historical rows); no 8 Nov rows. Platform quota 16/2000 used, but project cap 10 is stricter.
- GSC sitemap `https://learnora-ab2.pages.dev/sitemap.xml` last submitted `2026-11-05T16:21:51.927Z`; still pending, 0 warnings/errors. Do not interpret pending as a confirmed technical block.
- GSC hourly tracker remains active. Connected GSC Wizard tools expose no pause/throttle control; owner must pause/reduce hourly checks in its UI. Do not run further GSC checks while today's union is at/above 10.
- Read-only Search Console UI attempt redirected to the public landing page because the saved Google sign-in is no longer authenticated. URL Inspection UI and Request Indexing control were not available. No manual Request Indexing request was submitted. The API does not expose a complete manual-request history; owner must skip candidates already requested manually.
- Bing site is verified; feed Success, sitemap count 104, last crawled/submitted 3 Nov; crawl issue URLs 0. Crawl statistics contain no dated rows/latest date (unavailable, not zero). Bing quota response daily=100, monthly=2300. No direct Bing URL Submission connector action exists.
- IndexNow key set (`****5d92`) and key file verified. Before today's batch: 447 rows/104 unique/373 HTTP 200/74 HTTP 202/343 repeat rows. Live sitemap/history matched 104/104, 0 new and 0 history-only URLs. 99 unchanged URLs skipped. Five materially changed live pages submitted; all five HTTP 200, key validated. After batch: 452 rows/104 unique/378 HTTP 200/74 HTTP 202/348 extra repeat rows. Acceptance is not proof of indexing. Exact submitted and skipped URLs are in the daily log.
- Ten representative live pages fetched; all ten self-canonical and `index,follow`, with internal links. Full 104-page inbound-link graph remains outstanding. Algorithms is a content-depth review candidate (323 extracted words), not a word-count violation.
- Full evidence, all 39 background-checked URLs, all 99 skipped URLs, five submitted URLs, prior notification timestamps and blockers: [DAILY_INDEXING_LOG_2026-11-08.md](DAILY_INDEXING_LOG_2026-11-08.md).

### Next actions — 8 November
1. [ ] Owner: pause/reduce GSC Wizard hourly background tracker checks in its UI. Until this is confirmed, do not make further daily inspections.
2. [ ] Reauthenticate the saved Google browser profile; then review manual Request Indexing candidates against actual UI history and skip prior requests.
3. [ ] Wait for Google sitemap processing; monitor pending/0-warning state without adding URL inspections today.
4. [ ] Complete the full 104-page internal-link/orphan graph when fetch capacity allows.
5. [ ] Continue academic/content-depth QA on Algorithms and the five recently improved Computer Science/Financial Literacy lessons; use preview QA for any new changes.
6. [ ] For Bing/IndexNow, notify only new or materially changed URLs; do not resubmit the 99 unchanged URLs.
7. [ ] Keep production metadata and robots/canonical settings unchanged absent a confirmed blocker and preview-tested fix.

## Current verified state — 6 November 2026 (daily indexing & discovery refresh)

- Production code remains at Phase 2 release commit `66d163cd9f2c4d96e65a49bcc373725c0a9fa3f1`; Cloudflare production deployment run [#42049423565](https://github.com/com-orgs/learnora/actions/runs/42049423565) succeeded. Main HEAD before today's log commit was `7b4ab3206f8bbfbfb955ad824e6bf9714074432c); comparison from production commit showed only documentation/QA files after release, with no production HTML/JS/CSS changes.
- Live sitemap: 104 unique same-host URLs, no duplicates. robots.txt allows all user agents, explicitly allows OAI-SearchBot, and declares the sitemap.
- GSC tracker: 104 URLs, 1 indexed, 103 not indexed / URL unknown to Google, 0 pending/errors/warnings; tracker active. Latest lastCheckAt `2026-11-06T03:46:07.051Z` (08:46:07 PKT).
- **6 Nov Pakistan-date daily guard:** 39 distinct URLs already have tracker lastCheckAt today; URL Inspection history has 0 rows today; union=39/10, overrun=29, remaining=0. No `inspect_url`, `bulk_inspect_urls` or `check_tracked_url_now` call was made. The 39 exact URLs and timestamps are in [DAILY_INDEXING_LOG_2026-11-06.md](DAILY_INDEXING_LOG_2026-11-06.md).
- Full URL Inspection history: 77 rows, 42 distinct URLs, 19 URL keys repeated (35 extra historical rows); no 6 Nov rows. Platform quota is 18/2,000 used (1,982 remaining), but the stricter project cap controls.
- GSC sitemap last submitted `2026-11-05T16:21:51.927Z`; still pending, 0 warnings/errors. Settled performance through 3 Nov: 0 clicks, 2 impressions, CTR 0%, reported average position 39; later data is incomplete.
- Hourly tracker background checks have already exceeded the cap. Connected GSC Wizard tools expose no pause/throttle action; owner must pause/reduce the hourly tracker in its UI. Do not run further GSC checks while the union is at/above 10.
- GSC URL Inspection API is status-only and does not submit manual Request Indexing. Browser context was unavailable; TinyFish strict UI automation could not start because strict mode is beta-only. No Request Indexing control was verified and no manual request was submitted in this run. Existing project state records 10 previous manual attempts across 9 unique URLs (Fractions submitted twice); the API does not expose the exact per-URL manual history. Owner must skip any candidate already manually requested; candidate list is recorded in the daily log.
- Bing property is listed in the connected Bing sites; feed Success, 104 URLs, submitted/last crawled 3 Nov; crawl issues 0. Crawl statistics have no dated rows/latest date, so crawling volume is unavailable, not zero. Quota: 100/day, 2,500/month. No direct Bing URL Submission action exists in the connected tools.
- IndexNow key is set (masked `****5d92`) and key file verified. Full history: 447 rows, 104 unique URLs, 373 HTTP 200 and 74 HTTP 202; 343 repeat rows. Live sitemap and history match exactly (104/104; 0 new; 0 historical-only). All 104 URLs were skipped today; no eligible new/materially changed production URLs and **0 submissions**. The latest relevant batches on 5 Nov were 25, 77 and 7 rows, all HTTP 200; the two older last-notified CS pages were not changed by the later production release. Acceptance is not proof of indexing.
- Fresh on-page audit of 25 representative URLs: 25/25 indexable, 0 critical/high/medium and 10 low notes (six long titles, one long description, three missing optional structured-data notes). No confirmed robots/canonical/noindex blocker in the sample. Eight live hub pages fetched with self-canonical and `index,follow`; their internal links were present. A full 104-page inbound-link graph was not completed because TinyFish returned its 150-URLs/min rate limit. Exact URLs, low findings and evidence are in the daily log.
- PRs #59–#62 remain draft/unmerged. PR #62's mobile-overflow fix run [#42146364198](https://github.com/com-orgs/learnora/actions/runs/42146364198) has now completed successfully. No PR was merged or production content edited in this run.
- Full evidence and exact URL inventories: [DAILY_INDEXING_LOG_2026-11-06.md](DAILY_INDEXING_LOG_2026-11-06.md).

### Next actions — 6 November
1. [ ] Owner: pause/reduce GSC Wizard hourly background tracker checks in the UI. Until this is done, do not make further daily inspections; the connector has no pause/throttle action.
2. [ ] Review the manual Request Indexing candidates in the daily log against the owner's actual Search Console request history; skip any URL already requested. Do not treat URL Inspection API rows as manual requests.
3. [ ] Wait for Google sitemap processing; keep the sitemap pending/0-warning state under observation. Do not repeat IndexNow for unchanged URLs.
4. [ ] Complete the full 104-page internal-link graph when fetch rate limits allow; the current fresh audit is a 25-page sample.
5. [ ] Review low title/description/structured-data notes in preview branches only; do not mass-edit production metadata.
6. [ ] Continue Phase 14 content QA for Computer Science Python Basics, HTML/CSS and Financial Literacy. Keep PRs #59–#62 unmerged until combined review/release gates pass.

## Current verified state — 5 November 2026 (post-PR #39 production release)

- Production: https://learnora-ab2.pages.dev/
- Latest production main commit: `4bf96bbfdb786b45a510ca794fcc841edbbc01b4`.
- PR [#39](https://github.com/com-orgs/learnora/pull/39) merged successfully. Added three supplementary references to Grade 6–7 Percentage Increase and Decrease: OpenStax Prealgebra 2e 6.2, Khan Academy Grade 6 Finding Percentage of a Change, and Illustrative Mathematics Discounted Books (7.EE.B.3). Curriculum-neutral wording retained.
- PR39 academic QA checked all six worked examples and everyday applications, six practice answer mappings, five quiz answer mappings/explanations and five worksheet keys. Percentage changes consistently use the original amount as the base; multipliers and answer mappings are correct.
- Full PR39 preview QA [#41962548017](https://github.com/com-orgs/learnora/actions/runs/41962548017) passed all steps: static audit, legal/pre-monetisation audit, exact Cloudflare preview resolution, preview headers/assets and mobile/desktop/quiz browser checks. Final PR head differed from the QA-tested commit only by CI-generated tracker commits; the lesson HTML blob was identical.
- Cloudflare production deployment [#41962847408](https://github.com/com-orgs/learnora/actions/runs/41962847408) and main static/legal audit [#41962847493](https://github.com/com-orgs/learnora/actions/runs/41962847493) completed successfully.
- Production fetch verified all three references on the Percentage Increase and Decrease lesson, plus its self-canonical, `index,follow`, title, description and Open Graph metadata.
- PR [#38](https://github.com/com-orgs/learnora/pull/38) merged/deployed. Added OpenStax Prealgebra 2e 6.1, Khan Academy 6th Grade Rates and Percentages, and Illustrative Mathematics Exam Scores to Understanding Percentages. Full preview QA [#41961960517](https://github.com/com-orgs/learnora/actions/runs/41961960517), production deployment [#41962222398](https://github.com/com-orgs/learnora/actions/runs/41962222398) and main audit [#41962222525](https://github.com/com-orgs/learnora/actions/runs/41962222525) all succeeded; production references and SEO metadata verified.
- PR [#33](https://github.com/com-orgs/learnora/pull/33) merged/deployed; filled the previously empty Common Mistakes section on Adding and Subtracting Decimals with five accurate explanations. Full preview QA [#41887703666](https://github.com/com-orgs/learnora/actions/runs/41887703666) passed.
- PR [#31](https://github.com/com-orgs/learnora/pull/31) merged/deployed; added OpenStax, Khan Academy and Illustrative Mathematics references to Adding and Subtracting Decimals.
- PR [#30](https://github.com/com-orgs/learnora/pull/30) merged; preview-dependent browser QA now runs only on pull_request events, avoiding pre-PR preview failures while preserving full PR release checks.
- Current repository tree contains 78 lesson HTML files: 46 Maths (23 Grade 6, 12 Grade 7, 11 Grade 8), 9 English, 14 Science, 3 Computer Science, 3 AI Literacy and 3 Financial Literacy. Previous source-section estimate (15/77 before PR38) is stale; PR38 and PR39 added two more source sections. Do not publish a coverage percentage until a full repo-wide source-section recount is completed.
- GSC daily indexing automation completed 5 November. Hourly background tracker checks had already checked 31 distinct URLs; URL Inspection history had 0 rows for today. Combined total 31/10, 21 above the project cap. The automation itself performed zero additional inspections. Connected GSC Wizard tools expose no pause/throttle action; owner must use the GSC Wizard UI to stop or reduce hourly tracker checks. No more GSC URL inspections on 5 November.
- Latest GSC tracker snapshot: 104 URLs, 1 indexed, 103 “URL is unknown to Google”; sitemap pending with 0 warnings/errors. This is a discovery/crawl backlog, not proof of a specific robots/canonical/noindex defect.
- Bing/IndexNow 5 November run submitted 42 materially changed URLs; 42/42 accepted with HTTP 200 and key validated. 62 unchanged URLs skipped. Full IndexNow history: 338 rows / 104 unique URLs. Acceptance does not prove indexing. Bing property verified; sitemap feed Success, 104 URLs; 0 crawl issue URLs.
- Settled GSC performance 6 October–2 November: homepage 1 impression, 0 clicks, reported average position 77. No meaningful traffic/ranking growth claim is supported.
- Ahrefs API returns `Insufficient plan`; no paid usage/upgrade. Semrush MCP has no API units; no trial/paid upgrade. Firecrawl credit balance is 0; do not use paid credits. Google Tag/GA4 remains disabled pending child/mixed-audience privacy classification and consent review. Cloudflare Speed Brain, Bot Protection and Page Shield toggles remain unchanged pending crawler/privacy compatibility review.
- Gmail review through 5 November found no new urgent platform alerts beyond GitHub PR/deployment notifications and Semrush promotional mail. Ignore paid trial/upgrade promotions under the free-only constraint.

## Next actions — 5 November
1. [ ] Owner must pause or throttle the GSC Wizard hourly Indexing Tracker checks in its UI; connected tools expose no control. Until confirmed, no manual GSC URL inspections or tracker check calls.
2. [ ] Complete the exact 78-lesson source-section inventory; previous 15/77 estimate is superseded and should not be used.
3. [ ] Continue academically verified sources on remaining Grade 6 Maths lessons after the inventory, preserving curriculum-neutral language and full preview QA.
4. [ ] Extend BreadcrumbList only to non-Maths lesson sections after confirming each visible breadcrumb path.
5. [ ] Keep GA4/Google Tag and Cloudflare feature toggles unchanged until privacy/crawler compatibility is established.
6. [ ] Continue checking relevant Gmail alerts from GitHub, Google/GSC, Bing, Cloudflare, Ahrefs and Semrush during Learnora work; do not activate paid trials or plans.


## Current verified state — 5 November 2026 (daily indexing refresh)

- Production: https://learnora-ab2.pages.dev/ ; live sitemap HTTP 200, 104 unique same-host URLs.
- Latest production code commit: `271ca6c89f26c5a562c180f758dcb0f5bb34c535`; latest main HEAD at audit time `2e96dc638b96733174ce7c95e8ffa9c893f11ece` (docs-only).
- GSC tracker: 104 URLs — 1 indexed, 103 “URL is unknown to Google”, 0 pending/errors/warnings; 1 has a crawl timestamp and 103 do not.
- Daily Pakistan-date guard: 31 distinct tracker URLs checked by hourly background activity + 0 URL Inspection history rows = 31 distinct URLs; cap 10 exceeded by 21. No manual inspection calls were made by this run. See exact URL/time list in the 5 November daily log below.
- GSC sitemap remains pending, 0 warnings/errors. Bing property verified; feed Success, 104 URLs; 0 crawl issue URLs. Bing crawl/search stats have no dated rows.
- IndexNow: 42 materially changed URLs submitted today; 42/42 HTTP 200 with key validated. 62 unchanged URLs deliberately skipped. Full history now 338 rows / 104 unique URLs.
- GSC settled sitemap performance 6 Oct–2 Nov: homepage only received 1 impression (0 clicks, reported average position 77); no meaningful traffic/ranking conclusion can be drawn.
- Main remaining discovery blocker is Google’s lack of crawl/discovery for 103 URLs; no specific robots/noindex/canonical defect is established. Full source attribution and independent educator review remain open.


## Current verified state — 4 November 2026 (post-PR #37 release)

- Production website: https://learnora-ab2.pages.dev/
- Latest production main commit: `271ca6c89f26c5a562c180f758dcb0f5bb34c535`.
- PR [#37](https://github.com/com-orgs/learnora/pull/37) merged and deployed. Grade 6 Introduction to Ratios now has a Sources and Further Reading section linking to:
  1. OpenStax Prealgebra 2e 5.6 Ratios and Rate: https://openstax.org/books/prealgebra-2e/pages/5-6-ratios-and-rate
  2. Khan Academy Grade 6 Ratios and Proportional Relationships: https://www.khanacademy.org/commoncore/grade-6-RP
  3. Illustrative Mathematics Grade 6 6.RP.A: https://tasks.illustrativemathematics.org/content-standards/6/RP/A/standards
- Lesson remains curriculum-neutral; sources are supplementary and do not imply formal alignment to a specific national curriculum.
- Academic QA checked three worked examples, six practice answers, five quiz mappings/explanations and seven worksheet answers; ratio order, simplification, equivalent ratios and scale-factor calculations are correct. Quiz script unchanged.
- Full PR37 preview QA [#41893422569](https://github.com/com-orgs/learnora/actions/runs/41893422569) passed all 10 steps. The final PR head differed from the QA-tested commit only by a CI-generated tracker commit; the lesson HTML blob was identical.
- Cloudflare Pages production deployment [#41893873486](https://github.com/com-orgs/learnora/actions/runs/41893873486) completed successfully. Main static/legal audit [#41893873619](https://github.com/com-orgs/learnora/actions/runs/41893873619) completed successfully.
- Production fetch verified all three links on the ratios lesson, plus the existing favicon, self-canonical, `index,follow`, title and Open Graph metadata.
- Latest full GSC Wizard audit of 25 Grade 6 pages after PR35 returned 25/25 HTTP 200 and indexable, zero findings. PR36 and PR37 changed only a favicon link and supplemental references; no indexability or metadata changes.
- GSC performance through 2 November still shows 0 clicks and 0 impressions; later data is incomplete. Sitemap remains pending with 0 warnings/errors. No URL Inspection API requests were made.
- Ahrefs API still returns `Insufficient plan`; no paid usage or upgrade. Semrush MCP has no API units; no trial or paid upgrade activated. Google Tag/GA4 remains disabled pending child/mixed-audience privacy classification and consent review. Cloudflare feature toggles remain unchanged pending crawler/privacy compatibility review.

## Next actions — 4 November
1. [ ] Continue academically verified references on remaining Grade 6 Maths lessons, starting with percentages and remaining decimals pages.
2. [ ] Extend BreadcrumbList to English, Science, Computer Science, AI Literacy and Financial Literacy only after confirming their actual visible breadcrumb paths.
3. [ ] Recount source-section coverage across the 77 lesson pages from the current repository tree before updating inventory percentages.
4. [ ] Keep GSC monitoring read-only; no URL inspections today due to the earlier inspection-cap overrun.
5. [ ] Keep Google Tag/GA4 and Cloudflare security/performance toggles unchanged until privacy/crawler compatibility is established.

## Current verified state — 4 November 2026 (post-PR #37 release)

- Production website: https://learnora-ab2.pages.dev/
- Latest production main commit: `271ca6c89f26c5a562c180f758dcb0f5bb34c535`.
- PR [#36](https://github.com/com-orgs/learnora/pull/36) merged and deployed. Added the existing `/favicon.svg` reference to the Grade 6 Introduction to Ratios lesson.
- PR [#37](https://github.com/com-orgs/learnora/pull/37) merged and deployed. Added three supplementary references to Grade 6 Introduction to Ratios: OpenStax Prealgebra 2e 5.6 Ratios and Rate; Khan Academy Grade 6 Ratios and Proportional Relationships; Illustrative Mathematics Grade 6 6.RP.A standards/tasks. The lesson remains curriculum-neutral and makes no formal alignment claim.
- PR37 academic QA checked three worked examples, six practice answer mappings, five quiz answer keys/explanations and seven worksheet answer keys. Ratio order, simplification, equivalent ratios and scale-factor calculations are correct; quiz script unchanged.
- PR37 full preview QA [#41893422569](https://github.com/com-orgs/learnora/actions/runs/41893422569) passed all 10 steps. The final PR head differed from the QA-tested commit only by a CI-generated tracker commit; lesson HTML blob was identical.
- Cloudflare Pages deployment [#41893873486](https://github.com/com-orgs/learnora/actions/runs/41893873486) completed successfully. Main static/legal audit [#41893873619](https://github.com/com-orgs/learnora/actions/runs/41893873619) completed successfully.
- Production fetch verified all three ratios references, existing favicon, self-canonical, `index,follow`, title and Open Graph metadata.
- Latest full GSC Wizard audit after PR35: homepage, Grade 6 hub and all 23 Grade 6 Maths lessons; 25/25 HTTP 200 and indexable, zero findings, all titles/descriptions within length checks, all favicons present after PR36.
- Gmail monitoring review: eight historical GitHub workflow-failure emails were checked. All eight runs failed only at “Resolve the exact Cloudflare PR branch preview”; static website and legal/pre-monetisation audits had passed. These were pre-PR30 trigger/timing failures, not production website defects. Since PR30 changed preview QA to run only on pull_request events, subsequent branch-push audits have succeeded with preview steps skipped, while PR35/36/37 full PR preview QA passed. No new failure email after the fix was found.
- Ahrefs Free email recommends GSC verification and Site Audit; connected Ahrefs API returns `Insufficient plan`, so no paid usage/upgrade. Semrush welcome email promotes a 7-day Pro trial; do not activate it under the free-only constraint. Google Search Console data collection began 2 November; settled performance through 2 November still 0 clicks/0 impressions, later data incomplete. Sitemap remains pending with 0 warnings/errors. No URL Inspection API requests made.
- Google Tag/GA4 remains disabled pending child/mixed-audience privacy classification and consent review. Cloudflare Speed Brain, Bot Protection/Anti-AI Bot Scraping and Page Shield remain unchanged pending crawler/privacy compatibility review.

## Next actions — 4 November
1. [ ] Continue academically verified references on remaining Grade 6 Maths lessons, prioritising percentages and remaining decimal topics.
2. [ ] Recount source-section coverage across the 77 lesson pages from the current repository tree before updating inventory percentages.
3. [ ] Extend BreadcrumbList to English, Science, Computer Science, AI Literacy and Financial Literacy only after confirming their actual visible breadcrumb paths.
4. [ ] Keep GSC monitoring read-only; no URL inspections today due to the earlier inspection-cap overrun.
5. [ ] Keep Google Tag/GA4 and Cloudflare security/performance toggles unchanged until privacy/crawler compatibility is established.
6. [ ] Continue checking relevant Gmail alerts from GitHub, Ahrefs, Semrush, Google, Bing and Cloudflare during Learnora work; ignore generic paid upgrade/trial prompts unless a genuinely free feature is available.

## Current verified state — 4 November 2026 (post-PR #36 release)

- Production website: https://learnora-ab2.pages.dev/
- Latest production main commit: `d7ef944f9e638a09e6e87e8a61dff9a627b1b2bd`.
- PR [#36](https://github.com/com-orgs/learnora/pull/36) merged and deployed. Added the existing `/favicon.svg` reference to the Grade 6 Introduction to Ratios lesson, the one remaining Grade 6 lesson without a favicon in the prior 25-URL audit.
- Full preview QA [#41892701886](https://github.com/com-orgs/learnora/actions/runs/41892701886) passed all 10 steps, including static/legal, exact Cloudflare preview, headers/assets, Playwright/Chromium and mobile/desktop/quiz browser checks.
- Cloudflare Pages deployment [#41893147938](https://github.com/com-orgs/learnora/actions/runs/41893147938) completed successfully. Production fetch of Introduction to Ratios confirmed the root favicon, self-canonical and `index,follow`.
- The last full GSC Wizard audit after PR35 showed 25/25 pages HTTP 200/indexable, zero findings and all 25 titles/descriptions within length checks. PR36 only added the missing favicon reference; no URL, content, metadata or indexing directives changed.
- PR35 BreadcrumbList JSON-LD remains live on all 23 Grade 6 Maths lessons and was structurally validated before merge.

## Next actions — 4 November
1. [ ] Add three academically appropriate references to Grade 6 Introduction to Ratios: OpenStax Prealgebra 2e 5.6, Khan Academy Grade 6 Ratios and Proportional Relationships, and Illustrative Mathematics Grade 6 6.RP.A standards/tasks. Keep the lesson curriculum-neutral; no formal alignment claim.
2. [ ] Extend BreadcrumbList to English, Science, Computer Science, AI Literacy and Financial Literacy only after confirming their actual visible breadcrumb paths.
3. [ ] Recount source-section coverage across the 77 lesson pages from the current repository tree before updating inventory percentages.
4. [ ] Continue academically verified learning references on remaining Grade 6 Maths lessons.
5. [ ] Keep GSC monitoring read-only; no URL inspections today due to the earlier inspection-cap overrun.
6. [ ] Keep Google Tag/GA4 and Cloudflare security/performance toggles unchanged until privacy/crawler compatibility is established.

## Current verified state — 4 November 2026 (post-PR #35 release)

- Production website: https://learnora-ab2.pages.dev/
- Latest production main commit: `ab38e9647e5510b0bc8e8f72b3c0672aac1ec18e`.
- PR [#35](https://github.com/com-orgs/learnora/pull/35) merged as `ab38e9647e5510b0bc8e8f72b3c0672aac1ec18e`. Added Google-supported JSON-LD `BreadcrumbList` markup to all 23 Grade 6 Maths lessons using Home → Grade 6 Mathematics → current lesson. All 23 JSON-LD blocks were parsed and structurally checked before merge.
- Full PR35 preview QA [#41891938639](https://github.com/com-orgs/learnora/actions/runs/41891938639) passed all 10 steps, including static/legal checks, exact Cloudflare preview, preview headers/assets, and mobile/desktop/quiz browser tests. The final PR head differed from the QA-tested commit only by a CI-generated tracker commit; all 23 Grade 6 lesson HTML blobs were identical.
- Cloudflare Pages production deployment [#41892391248](https://github.com/com-orgs/learnora/actions/runs/41892391248) completed successfully. Main static/legal audit [#41892391352](https://github.com/com-orgs/learnora/actions/runs/41892391352) completed successfully.
- Post-deployment GSC Wizard audit of homepage, Grade 6 hub and all 23 Grade 6 Maths lessons: all 25 returned HTTP 200 and are indexable; zero critical/high/medium/low/info findings. Titles are <=60 characters and descriptions <=160 characters. All pages have a favicon except `/math/grade-6/introduction-to-ratios`, which returned `faviconPresent=false` but no reported issue; queue a small consistency fix.
- Breadcrumb structured data follows Google's documented `BreadcrumbList` format with three ordered ListItems, two navigable parent URLs and the current page as the final item. Google permits omitting `item` for the final item; markup may make a breadcrumb rich result eligible but does not guarantee display or ranking gains.
- GSC performance through 2 November still shows 0 clicks and 0 impressions; later data is incomplete. Sitemap submitted 3 November remains pending with 0 warnings and 0 errors. No URL Inspection API requests were made.
- Ahrefs API still returns `Insufficient plan`; no paid usage or upgrade. Semrush MCP has no API units; no trial or paid upgrade activated. Google Tag/GA4 remains disabled pending child/mixed-audience privacy classification and consent review. Cloudflare feature toggles remain unchanged pending crawler/privacy compatibility review.

## Next actions — 4 November
1. [ ] Add the missing `/favicon.svg` reference to the Grade 6 Introduction to Ratios page via preview-tested PR.
2. [ ] Extend BreadcrumbList to English, Science, Computer Science, AI Literacy and Financial Literacy only after confirming their actual visible breadcrumb paths.
3. [ ] Recount source-section coverage across the 77 lesson pages from the current repository tree before updating inventory percentages.
4. [ ] Continue academically verified learning references on remaining Grade 6 Maths lessons.
5. [ ] Keep GSC monitoring read-only; no URL inspections today due to the earlier inspection-cap overrun.
6. [ ] Keep Google Tag/GA4 and Cloudflare security/performance toggles unchanged until privacy/crawler compatibility is established.

## Current verified state — 4 November 2026 (post-PR #34 release)

- Production website: https://learnora-ab2.pages.dev/
- Latest production main commit: `a33b3be4ba7a22fec717e554166a6b1ffc4cb351`.
- PR [#34](https://github.com/com-orgs/learnora/pull/34) merged as `a33b3be4ba7a22fec717e554166a6b1ffc4cb351`. Added the existing `/favicon.svg` reference to 20 audited Grade 6 Maths lesson pages, shortened 16 long meta descriptions and three titles, and aligned Open Graph titles/descriptions with the updated page metadata.
- Full PR34 preview QA [#41890469586](https://github.com/com-orgs/learnora/actions/runs/41890469586) passed all 10 steps: static audit, legal/pre-monetisation audit, exact Cloudflare preview, preview headers/assets, Playwright/Chromium and mobile/desktop/quiz browser checks. The final PR head had only a CI-generated project tracker commit after the QA-tested commit; all 20 lesson HTML blobs were identical.
- Cloudflare Pages production deployment [#41891090587](https://github.com/com-orgs/learnora/actions/runs/41891090587) completed successfully. Main static/legal audit [#41891090560](https://github.com/com-orgs/learnora/actions/runs/41891090560) completed successfully.
- Production spot checks passed for Grade 6 Multiplying and Dividing Fractions, Mixed Numbers and Improper Fractions, and Adding and Subtracting Decimals: updated title/description, matching Open Graph metadata, root favicon, self-canonical and `index,follow` all present.
- Post-deployment GSC Wizard on-page audit repeated the same 25 URLs. All 25 returned HTTP 200 and were indexable; every page now reports a favicon; all titles are at or below 60 characters and all meta descriptions at or below 160 characters. No critical/high/medium issues remain. The only 23 low-severity observations are missing structured data on the 23 lesson pages (homepage and Grade 6 hub already have schema). No URL Inspection API requests were made.
- Google Search Console performance through 2 November still shows 0 clicks and 0 impressions; 3 November onward is incomplete. Sitemap submitted 3 November remains pending with 0 warnings and 0 errors.
- Ahrefs API still returns `Insufficient plan`; no paid usage or upgrade. Semrush MCP has no API units; no trial or paid upgrade activated. Google Tag/GA4 remains disabled pending child/mixed-audience privacy classification and consent review. Cloudflare feature toggles remain unchanged pending crawler/privacy compatibility review.

## Next actions — 4 November
1. [ ] Add valid Google-supported BreadcrumbList JSON-LD to Grade 6 Maths lesson pages, using the visible user journey (Home → Grade 6 Mathematics → lesson). Validate structured data and preview QA before merging; do not claim ranking guarantees.
2. [ ] Extend the same structured-data review to English, Science, Computer Science, AI Literacy and Financial Literacy pages only after confirming their actual breadcrumb paths.
3. [ ] Recount source-section coverage across the 77 lesson pages from the current repository tree before updating any inventory percentages.
4. [ ] Continue verified learning references on remaining Grade 6 Maths lessons.
5. [ ] Keep GSC monitoring read-only; no URL inspections today due to the earlier inspection-cap overrun.
6. [ ] Keep Google Tag/GA4 and Cloudflare security/performance toggles unchanged until privacy/crawler compatibility is established.

## Current verified state — 4 November 2026 (post-PR #33 release)

- Production website: https://learnora-ab2.pages.dev/
- Latest production main commit: `b8807f157125d1e43c47be1a6d38ac99b3aa9a85`.
- PR [#30](https://github.com/com-orgs/learnora/pull/30) is merged. Preview-specific QA steps now run only for pull-request events; static and legal audits continue on pushes/main. Verified by successful main push audit [#41888208184](https://github.com/com-orgs/learnora/actions/runs/41888208184), where preview/browser steps were correctly skipped.
- PR [#31](https://github.com/com-orgs/learnora/pull/31) merged and deployed: Grade 6 Adding and Subtracting Decimals now cites OpenStax Prealgebra 2e 5.2, Khan Academy 6th Grade Arithmetic with Rational Numbers, and Illustrative Mathematics' Jayden's Snacks.
- PR [#33](https://github.com/com-orgs/learnora/pull/33) merged as `b8807f157125d1e43c47be1a6d38ac99b3aa9a85`. It fills the previously empty “7. Common Mistakes to Avoid” section in the Grade 6 Adding and Subtracting Decimals lesson with five learner-facing explanations: decimal-point alignment, placeholder zeros, answer decimal placement, regrouping and estimation.
- PR33 full preview QA [#41887703666](https://github.com/com-orgs/learnora/actions/runs/41887703666) passed all 10 steps, including static, legal, exact Cloudflare preview, headers/assets, Playwright/Chromium and mobile/desktop/quiz checks.
- Cloudflare Pages deployment [#41888208187](https://github.com/com-orgs/learnora/actions/runs/41888208187) completed successfully. Main static/legal audit [#41888208184](https://github.com/com-orgs/learnora/actions/runs/41888208184) completed successfully.
- Production page verified live: https://learnora-ab2.pages.dev/math/grade-6/adding-subtracting-decimals. The new five-point Common Mistakes section is present; title, description, self-canonical, `index,follow`, Open Graph metadata and all three learning references remain correct.
- GSC read-only on-page audit of 25 explicit URLs (homepage, Grade 6 hub, 22 lesson pages and one English page): all 25 returned HTTP 200, all 25 indexable, zero critical/high/medium issues; 42 low-severity observations. Main recurring items: lesson pages lack structured data; many long meta descriptions; a few long titles; favicon link missing on several legacy lesson pages. These are quality improvements, not indexability blockers. No URL Inspection API requests were made.
- GSC performance through 2 November remains 0 clicks and 0 impressions; 3 November onward is incomplete. Sitemap submitted 3 November remains pending with 0 warnings and 0 errors.
- Ahrefs API still returns `Insufficient plan`; use only the free account UI/GSC connection path if available, with no paid upgrade or API usage. Semrush MCP has no API units; no trial or paid upgrade activated.
- Google Tag/GA4 remains disabled pending child/mixed-audience privacy classification, legal basis and consent review. Cloudflare Speed Brain, Bot Protection/Anti-AI Bot Scraping and Page Shield remain unchanged pending feature-by-feature safety review.
- Gmail monitoring findings have been captured: Ahrefs Free onboarding, Google Search Console data-start notification, Google Tag not detected, generic Cloudflare feature suggestions, and the GitHub preview-workflow false-failure root cause. Continue checking relevant GitHub, Ahrefs, Semrush, Google, Bing and Cloudflare notifications during future Learnora sessions.

## Next actions — 4 November
1. [ ] Fix long meta descriptions (keep concise, accurate and page-specific) on the pages surfaced by the 25-page GSC audit.
2. [ ] Add a consistent root `/favicon.svg` reference to legacy lesson pages where missing; verify the asset exists and preview-test before merge.
3. [ ] Evaluate structured data for lesson pages. Do not add generic schema blindly; select a valid, useful schema type and test output before a controlled rollout.
4. [ ] Recount actual lesson inventory and source-section coverage from the current repository tree before updating coverage statistics.
5. [ ] Continue Grade 6 Maths references with academically verified sources and full preview QA.
6. [ ] Read GSC performance/sitemap reports only; no URL inspections today due to the earlier inspection-cap overrun.
7. [ ] Keep Google Tag/GA4 and Cloudflare security/performance toggles unchanged until privacy/crawler compatibility is established.

## Current verified state — 4 November 2026 (post-PR #31 release)

- Production website: https://learnora-ab2.pages.dev/
- Latest production main commit: `092293ae2115d8983e2e118bdb81ece3eb672ee8`.
- PR [#29](https://github.com/com-orgs/learnora/pull/29) merged and deployed: Grade 6 Understanding Decimals and Place Value now has curriculum-neutral Sources and Further Reading with OpenStax Prealgebra 2e 5.1, Khan Academy Grade 6 Math (WNCP), and NCETM Place Value/Estimation/Rounding.
- PR [#30](https://github.com/com-orgs/learnora/pull/30) merged as `73a5aad034a5fa7c9df7c81a8331f9c313e5b375`. It fixes noisy preview QA failures: Cloudflare preview resolution, preview headers/assets, Playwright install and browser tests now run only on `pull_request` events. Static and legal audits still run on branch pushes and main. Full PR QA run [#41885533405](https://github.com/com-orgs/learnora/actions/runs/41885533405) passed all steps. A standalone PR31 branch push run [#41886144827](https://github.com/com-orgs/learnora/actions/runs/41886144827) passed static/legal checks while preview-specific steps were correctly skipped; PR31's pull-request run then performed full preview/browser QA.
- PR [#31](https://github.com/com-orgs/learnora/pull/31) merged successfully as `092293ae2115d8983e2e118bdb81ece3eb672ee8`. Added curriculum-neutral sources to Grade 6 Adding and Subtracting Decimals: OpenStax Prealgebra 2e 5.2, Khan Academy 6th Grade Arithmetic with Rational Numbers, and Illustrative Mathematics' Jayden's Snacks task.
- Full PR31 preview QA run [#41886327137](https://github.com/com-orgs/learnora/actions/runs/41886327137) passed all 10 steps, including exact preview resolution, headers/assets and full mobile/desktop/quiz browser checks. The final PR head differed only in project-tracker content; the QA-tested lesson HTML blob was identical to the merged lesson blob.
- Cloudflare Pages production deployment [#41886791928](https://github.com/com-orgs/learnora/actions/runs/41886791928) completed successfully. Main static/legal audit [#41886791996](https://github.com/com-orgs/learnora/actions/runs/41886791996) completed successfully.
- Production lesson verified live: https://learnora-ab2.pages.dev/math/grade-6/adding-subtracting-decimals. All three outbound references are present; title, description, self-canonical, `index,follow` and Open Graph metadata verified. Production homepage also fetched successfully.
- PR29 production lesson remains live and verified: https://learnora-ab2.pages.dev/math/grade-6/understanding-decimals. OpenStax, Khan Academy and NCETM references, title, self-canonical, robots and Open Graph metadata were re-checked after the PR30 deployment.
- Google Search Console read-only snapshot: last 28 days through 2 November 2026 show 0 clicks and 0 impressions (0% CTR; average position unavailable/0). Data is settled through 2 November; 3 November onward is not yet complete. `sitemap.xml` was submitted 3 November at 15:07:21 UTC and is still pending, with 0 warnings and 0 errors. No URL inspections were performed on 4 November because the earlier automation had exceeded the intended daily inspection cap.
- Ahrefs Free onboarding email recommends connecting Google Search Console to verify the site, then running Site Audit. The connected Ahrefs API returned `Insufficient plan`; no paid usage or upgrade was made. The remaining free path is owner-side: sign in to Ahrefs Free, add the exact GSC property and authorize the GSC connection, then start the free Site Audit. The connected browser session is not available to perform this UI/OAuth approval in this chat.
- Semrush welcome email promotes a 7-day Pro trial. Semrush MCP returned `no_api_units`; no trial or paid upgrade was activated.
- Google Tag email says no Google tag was detected. Keep GA4/Google Tag disabled until child/mixed-audience privacy classification, legal basis and consent requirements are reviewed. Do not paste the suggested tag snippet into the site yet.
- Cloudflare welcome email suggests Speed Brain, Bot Protection/Anti-AI Bot Scraping and Page Shield, and promotes paid plans/add-ons. No setting was changed. Avoid enabling anti-AI bot blocking because it could obstruct search/AI crawlers; evaluate optional performance/security features separately and only if compatible with Pages and the current CSP.
- GitHub failure-email root cause was confirmed: at least one failed `seo/**` push run (for example [#41878714047](https://github.com/com-orgs/learnora/actions/runs/41878714047)) passed static/legal checks but failed while resolving a Cloudflare PR preview before the preview comment existed. PR30 fixes this trigger timing without weakening full pull-request QA.
- A source-code check of the decimals lesson confirmed the “Common Mistakes to Avoid” section is populated with four examples. The earlier text-only extraction omitted the custom `.mistake` blocks; this is not a website content defect and no change is required.
- Gmail findings reviewed on 4 November: no GitHub Dependabot/security/vulnerability notifications were returned in the 30-day search; the relevant GitHub emails were CI workflow notifications. Continue reviewing new GitHub, Ahrefs, Semrush, Google, Bing and Cloudflare emails during Learnora work sessions. This is not a continuous background inbox monitor.
- No paid service, Google Tag, GA4 tracking, Cloudflare security setting or GSC URL inspection was activated during this session.

## Next actions — 4 November
1. [ ] Continue Grade 6 Maths source attribution with `math/grade-6/multiplying-dividing-decimals.html`; academic QA before adding references.
2. [ ] Recount the real lesson inventory and existing dedicated Sources sections from the repository tree; do not reuse stale 77-page totals.
3. [ ] Monitor GSC sitemap processing and settled performance data; no repeated URL inspections today.
4. [ ] Owner-side optional step: connect GSC to Ahrefs Free and run Site Audit (no paid plan/API).
5. [ ] Keep GA4/Google Tag disabled pending child-audience privacy and consent review.
6. [ ] Review Cloudflare feature suggestions individually; do not enable anti-AI blocking or paid add-ons.

## Current verified state — 3 November 2026 (post-deployment refresh)

- Production website: https://learnora-ab2.pages.dev/
- Latest production `main` commit: `f23e955f37aa35ccdf8fb04b43b394471281fee1`. SEO metadata PR [#15](https://github.com/com-orgs/learnora/pull/15) was merged and deployed; subsequent documentation-only update also passed.
- Cloudflare Pages deployment workflow [#41684025756](https://github.com/com-orgs/learnora/actions/runs/41684025756) completed successfully. Main static/legal audit [#41684025341](https://github.com/com-orgs/learnora/actions/runs/41684025341) completed successfully.
- Full branch browser QA [#41682977213](https://github.com/com-orgs/learnora/actions/runs/41682977213) passed: 104 sitemap pages loaded; 77 quiz submissions, 77 retakes, 79 worksheet print actions and 104 performance/resource checks; no horizontal overflow, keyboard quiz failure, third-party request, CSP/runtime error or first-party performance-budget failure.
- Sitemap inventory: 104 unique HTTPS URLs on the production host; 105 HTML files including custom 404. The new root-level `/learnora-logo.svg` is used in Organization JSON-LD only; no visible layout, URL, robots, sitemap, CSP or analytics changes were made.
- Post-deployment on-page SEO audit: all 104/104 sitemap URLs fetched and indexable; **0 critical, 0 high, 0 medium and 159 low findings**. The 18 Organization-logo medium findings from the initial audit are resolved. Remaining low findings are mainly optional structured data, heuristic title/meta lengths and the concise Contact page. Details: [ONPAGE_SEO_AUDIT_2026-11-03.md](ONPAGE_SEO_AUDIT_2026-11-03.md).
- Google Search Console: `sitemap.xml` last submitted 3 November at 15:07 UTC; processing remains pending with 0 warnings and 0 errors. The sitemap contains 104 URLs.
- Latest Indexing Tracker snapshot (3 November, 16:57 UTC): 104 tracked URLs — 1 indexed, 87 marked `URL is unknown to Google`, 16 pending, 0 errors and 0 warnings. The 87 unknown URLs have no recorded Google crawl time; this is a discovery/crawl backlog, not a confirmed robots.txt/noindex defect. Do not repeatedly request indexing for recently checked URLs.
- GSC performance: 28-day SEO report window 4–31 October 2026 shows 0 clicks and 0 impressions. There are no query/page/country/device rows yet, so no country-market winner or keyword opportunity can be inferred.
- Bing Webmaster Tools: sitemap feed status **Success**, submitted and last crawled 3 November 2026, 104 URLs. Bing crawl-issues endpoint reported 0 issue URLs. Bing daily crawl and search-performance endpoints returned no dated rows, so crawl volume and search clicks/impressions are not yet available.
- IndexNow: API key is configured and the key file is verified. Submission history contains 296 records; the newest 200 returned records all show HTTP 200. Acceptance is not a guarantee of indexing.
- GA4: property `562164102` / stream `16264528436` / Measurement ID `G-0186E0KTH6` is linked in GSC Wizard. GA4 returns 0 sessions/users/events because no tracking code is installed. Live checks confirm no GA4/Google Tag Manager script on the site. Tracking remains intentionally disabled.
- Audience/privacy gate: Learnora is intended for students including under-13 learners, parents and teachers. Do not activate GA4 until child-directed/mixed-audience classification, applicable legal basis and consent requirements are assessed. Never send names, emails, student identifiers, quiz answers/scores or other personal data. Do not enable Google Signals, advertising personalisation, remarketing or User-ID. Preserve the restrictive CSP and third-party request guard.
- Core Web Vitals field data is unavailable because no CrUX API key is configured. Do not infer real-user LCP/INP/CLS from missing CrUX data.
- Phase 14 educational quality review remains in progress. Technical SEO remediation is complete, but a preliminary source-section inventory of 77 lesson pages found only 7 with a dedicated Sources/References/Further reading section; 70 legacy lessons remain in the source-attribution backlog. Full subject-by-subject factual verification and genuine independent educator review also remain open. Details: [PHASE14_SOURCE_ATTRIBUTION_AUDIT_2026-11-03.md](PHASE14_SOURCE_ATTRIBUTION_AUDIT_2026-11-03.md).
- AdSense remains disabled. Child-audience classification, actual publisher ID, certified CMP where applicable and exact ads.txt seller declaration remain separate account/legal gates.
- Search visibility, rankings and traffic are not guaranteed.

Historical session notes below are retained for continuity; use this current state as the source of truth.

## Latest verified live status — 2 November 2026 (latest checks)

- Production site: https://learnora-ab2.pages.dev/
- Production branch: `main`; latest verified main commit: `5e5d3f6da61e9f9c98464d4682f81b1ebf32c7a2`.
- Canonical URL / sitemap consistency fix: PR #5 merged. Live lesson URLs use clean extensionless paths and canonical URLs match final URLs.
- Sitemap: 82 URLs, including the international curriculum hub, US/England/Ontario/Australia guides, and UK-wide/Canada-wide orientation pages. Live sitemap returns HTTP 200. GSC accepted the latest submission with 0 warnings and 0 errors; download/processing remains pending.
- IndexNow: verified key file; all 80 sitemap URLs were submitted successfully (75 existing + 5 curriculum pages). All 80 were accepted with key validated (HTTP 200).
- GSC tracker: 82 URLs tracked; latest snapshot 1 indexed, 11 URL-unknown, 70 pending, 0 warnings. Newly added curriculum pages currently show URL unknown to Google; this is a discovery/crawl backlog, not proof of a noindex block.
- GSC configuration: branded keywords and sitemap saved; Mathematics, English and Science content groups are filterable; topic clusters for all three subjects are saved. Country report presets exist for USA, UK, Canada and Australia.
- GSC performance: last 28 days show 0 clicks and 0 impressions. Query, page and country reports have no rows, so no first-party performance evidence yet to rank the target markets.
- Firecrawl crawl: 75 pages discovered in the last available crawl; all returned HTTP 200 with no missing titles/descriptions, duplicate titles or canonical mismatches. Curriculum pages were individually verified through Firecrawl/GSC; the live sitemap now lists 82 URLs. GSC on-page audit covered all 80 pages in the previous sitemap snapshot plus the 2 newest pages: 82/82 indexable, 0 critical/high/medium issues; remaining findings are low severity (mostly optional structured data and snippet-length suggestions).
- International content: added `/curriculum/` hub and guides for US Common Core Grades 6–8, UK-wide curriculum differences, England KS3 Years 7–9, Canada-wide provincial/territorial differences, Ontario Grades 6–8 and Australian Curriculum Years 7–8. Official sources are linked; the guides avoid claiming exact grade equivalence or full formal alignment.
- SERP research completed for US, UK, Canada and Australia. Ahrefs volume/CPC unavailable because connected plan returned "Insufficient plan"; no volume or earnings estimates are being invented.
- GitHub Actions: main run [#41502283767](https://github.com/com-orgs/learnora/actions/runs/41502283767) passed static and legal/pre-monetisation audits. Non-main preview run [#41502412490](https://github.com/com-orgs/learnora/actions/runs/41502412490) also passed Cloudflare preview headers/assets, Playwright/Chromium, mobile/desktop/accessibility/quiz browser checks and tracker refresh.
- Bing Webmaster and CrUX are not configured because their API keys are not present. GA4 is also not connected to the GSC Wizard account (Analytics OAuth scope missing). No Bing traffic, GA4 engagement or field Core Web Vitals data has been audited.
- AdSense remains inactive. Audience/COPPA classification, publisher ID, Google-certified CMP and exact ads.txt seller line remain owner/account gates. No placeholder ID or ad code has been added.

## Next actions
1. [x] Run non-main preview workflow: Cloudflare preview headers/assets, Playwright/Chromium, mobile/desktop/accessibility and quiz regression all passed in run #41502412490.
2. Improve Grade 8 Science, Grade 8 Maths and English hub pages with useful study sequencing and navigation rather than filler.
3. Monitor GSC sitemap processing and indexing over the next 24–72 hours; inspect in small batches and avoid repeated requests for recently checked URLs.
4. Complete manual originality, factual accuracy, source attribution and educational-value review across lesson pages.
5. Connect GA4 in the GSC Wizard Analytics page and configure Bing Webmaster/CrUX only after their required permissions/API keys are available; Ahrefs volume/CPC requires an accessible plan or another reliable source.
6. Complete AdSense owner/account gates and keep ads/analytics disabled until the user approves a compliant setup.

## Project identity

- Repository: https://github.com/com-orgs/learnora
- Working branch: `audit/production-hardening-2026-11-02`
- Production branch: `main`
- Production site: https://learnora-ab2.pages.dev/
- Preview site used by audit workflow: https://audit-production-hardening-2.learnora-ab2.pages.dev/
- Contact email used on site: Learnora.site@gmail.com
- Deployment policy: **User explicitly authorized merge and production deployment on 2026-11-02. Merge only after the latest audit is green; verify Cloudflare production deployment afterwards.**
- User communication: Roman Urdu; beginner-friendly, direct. At the end of every `Continue` / `Next` response, include the project tree with completed, in-progress, and remaining work.

## Latest verified repository state

- Audit branch HEAD is checked at the start of each session; CI status is refreshed by the workflow after each branch run.
- Latest verified production/main commit: `e270019d3ea1f46dc4bd2683cb7a0dfe78a88613`.
- Branch drift warning: the audit branch currently contains an older `.html`-suffixed sitemap while production `main` uses clean extensionless lesson URLs and includes the five curriculum URLs. Do not merge the audit branch until it is rebased/reconciled and its sitemap/canonicals are re-audited. Earlier ahead/behind counts are stale.
- PR #5 was merged with the user's current authorization. Production canonical and sitemap changes have been verified live.

## CI status — release qualification
- Latest full workflow run: [#41562298729](https://github.com/com-orgs/learnora/actions/runs/41562298729), tested pre-fix commit `f099c06a31e4d07f0bae5665eb7f897e86d00849`.
- That run failed the static audit because the new worksheet used an inline `onclick` handler, which violates the site's Content Security Policy.
- Fixed before merge: print action now uses the same-origin external file `scripts/pages/international-middle-school-maths.js`; no inline event attributes remain in the worksheet. Added Contact, Privacy and Terms footer links.
- Post-fix static checks confirmed: 24 questions, four worked answer keys, print script reference, canonical URL, sitemap entry and worksheet internal links.
- A fresh full GitHub Actions run against the post-fix release head was not confirmed in this session. Previous full green baseline: [#41467406909](https://github.com/com-orgs/learnora/actions/runs/41467406909). Do not describe the post-fix full workflow as green until rerun.

## Production release — 3 November 2026
- Phase 11 release PR [#9](https://github.com/com-orgs/learnora/pull/9) was squash-merged to `main` as commit `5ea1c6d21ab9af936f213fc08b491bcc8400f209`.
- Verified on GitHub `main`: international worksheet HTML, external print JavaScript and sitemap entry are present.
- Cloudflare Pages is expected to deploy automatically from the connected `main` branch. A live HTTP smoke check could not be completed from this session because the connected browser context was unavailable, Firecrawl credits were exhausted, and the network fetch route could not resolve the site hostname. Treat production deployment as triggered, not independently verified.

## Completed work

### Site trust and policy
- [x] Standardize contact email to Learnora.site@gmail.com in About, Contact, Privacy Policy and Terms.
- [x] Review/fix Grade 8 Maths print answer-key visibility across 11 lesson pages.
- [x] Fix homepage resource filtering so hidden cards are actually hidden.
- [x] Improve static audit HTML attribute parsing and add parser self-tests.
- [x] Add Open Graph metadata validation (required/duplicate/empty/description-length checks).
- [x] Add duplicate section-numbering detection and fix the known Grade 7 transformations numbering issue.

### Learning content and curriculum
- [x] Maths Grades 6–8: 46 lessons (Grade 6: 23; Grade 7: 12; Grade 8: 11).
- [x] English: 7 lessons, covering grammar, reading, writing and vocabulary.
- [x] Science: 9 lessons total — 6 Grade 7 and 3 Grade 8.
- [x] Science Grade 7 Heat Transfer: lesson, quiz JS, subject index card and sitemap entry.
- [x] Science Grade 7 States of Matter: lesson, quiz JS, subject index card and sitemap entry.
- [x] Science Grade 7 Forces & Motion scientific accuracy corrections.
- [x] English reading comprehension and punctuation/capitalization content additions (verify exact current inventory before adding overlapping topics).

### Quality assurance
- [x] Latest CI run 41467406909: 72 HTML pages, 61 curriculum lessons, 61 quiz forms and 61 answer-key mappings; warnings 0.
- [x] Browser smoke coverage previously exercised mobile widths 320, 390, 768 and desktop, quiz submission/retake and print actions (historical 52-quiz run).
- [x] Latest run 41467406909 passed every step, including static audit, Cloudflare preview, Playwright, axe accessibility, responsive checks, quiz submission/retake and performance budgets.
- [x] Responsive table overflow fixes applied to Science Grade 7 States of Matter and Heat Transfer lessons.
- [x] Print styles hide worksheet answer keys where intended.

## Gmail / GitHub Actions failure investigation

- Gmail search returned 252+ matching GitHub notification threads, with many duplicate/near-duplicate failure notifications for intermediate commits and some PR runs. The main reason for volume is the workflow trigger on every push combined with many sequential one-file commits; concurrency cancels superseded runs but does not prevent already-started failure emails.
- The notification subjects reference commits such as `460f534`, `477dfe6`, `e0b100c`, `118b49a` and `9e6d646`.
- A representative failure was inspected directly: run [41441495924](https://github.com/com-orgs/learnora/actions/runs/41441495924), commit `9e6d64672bc161822c4ab5e383addb467ba1cfbb`. The static audit failed immediately at `scripts/audit-site.mjs:197` with `SyntaxError: Invalid regular expression flags`; the malformed regex contained doubled backslashes in a regex literal.
- Current audit-branch source was checked at the same section: the regex is now correctly written as `/<h2\\b[^>]*>([\\s\\S]*?)<\\/h2>/gi`, and the latest known complete run [41467406909](https://github.com/com-orgs/learnora/actions/runs/41467406909) passed all audit, preview and browser-test steps.
- Other Gmail failure notifications reference multiple intermediate commits and some PR runs. Do not assume a notification represents the current HEAD. Match each failed notification's commit SHA/run ID to the current branch and inspect its own failing step/logs if it remains relevant.
- Inspected run 41465180778 (commit 79e9f32): it failed because the newly added Grade 8 Science index URL had not yet been added to sitemap at that intermediate commit; two educational-quality warnings were also emitted. A later atomic/synchronized commit and run 41465504326 passed. Conclusion: older failure emails refer to intermediate snapshots, not current branch health. Batch related files into one Git tree commit to reduce future email noise.

## Remaining work — ordered queue

1. [x] Phase 1 — curriculum inventory and index reconciliation. Verified: Maths 46, English 7, Science 11 = 64 lessons; sitemap and HTML audit cover 75 pages total, including 64 lesson URLs. Subject/grade indexes, lesson scripts and sitemap are in parity.
2. [x] Phase 2 — English curriculum coverage expansion. Seven lessons cover grammar, reading comprehension, paragraph writing and vocabulary/context clues.
3. [x] Phase 3 — Science Grade 8 topic coverage expansion. Five Grade 8 lessons cover chemistry, human digestive/circulatory systems, electric circuits, waves/sound/light and Earth/Moon/space patterns.
4. [x] Phase 4 — educational quality review. Automated lesson rubric passed all 64 lessons with zero warnings; 64 accessible quiz forms and 64 answer-key mappings validated. Manual content review covered the existing Maths curriculum and all current English/Science lesson structures, examples and quiz stems; all five Grade 8 Science answer keys were cross-checked against their options.
5. [x] Phase 5 — automated accessibility review. axe WCAG 2.1 A/AA scan passed across all 75 pages; responsive layouts checked at 320, 390, 768 and desktop widths; keyboard quiz selection, feedback, retake and print actions passed across all 64 lessons. A final manual NVDA/VoiceOver session on real devices remains a recommended pre-launch check.
6. [x] Phase 6 — SEO and content discoverability technical review. All 75 canonical URLs, titles/descriptions, Open Graph consistency, language attributes, sitemap/index/script parity, internal links/anchors and image alt attributes passed static validation. New Grade 8 pages have unique metadata and are linked from subject/grade indexes.
7. [x] Phase 7 — performance, responsiveness and security technical review. All 75 pages passed responsive overflow checks and first-party resource budgets; no third-party page requests or browser/CSP errors were detected. Preview security headers, restrictive CSP, same-origin assets and custom 404 response passed.
8. [x] Phase 8 — pre-monetisation legal/trust baseline. Privacy Policy, Terms, About/editorial transparency, contact details and Cloudflare data-processing disclosure are in place; automated legal audit passes and confirms no active advertising/analytics scripts. User has explicitly deferred Google AdSense: CMP, publisher ID, ads.txt and ad-serving configuration are postponed until monetisation is requested. Do not claim AdSense-ready or enable ads.
9. [x] Phase 9 — final consolidated release audit. Current audit commit passed static, legal, Cloudflare preview/header/assets, and Playwright browser checks; main comparison: audit branch 316 commits ahead, 0 behind, 151 changed files. Outstanding non-blocking recommendation: manual NVDA/VoiceOver test on real devices. Production smoke test remains part of Phase 10.
10. [~] Phase 10 — user authorized merge/deploy on 2026-11-02. Merge only after verifying latest branch HEAD and green CI; then confirm Cloudflare production deployment and live-site smoke tests.

## Phase completion details

### Phase 1 — Curriculum inventory and index reconciliation
- [x] Maths: 46 lessons (Grade 6: 23; Grade 7: 12; Grade 8: 11).
- [x] English: 7 lessons.
- [x] Science: 11 lessons (Grade 7: 6; Grade 8: 5).
- [x] Total: 64 curriculum lesson pages, each with a matching quiz script and five-question quiz.
- [x] Sitemap and static audit: 75 HTML pages, 75 canonical URLs, 64 lesson URLs; all lessons linked from subject/grade indexes.
- [x] Latest full run 41469810411 passed static audit, preview headers/assets and browser suite.

### Phase 2 — English curriculum coverage
- [x] Seven lessons cover parts of speech, punctuation/capitalization, sentence structure, verb tenses/agreement, reading comprehension, paragraph writing and vocabulary skills.
- [x] Manual structure and sample-example/question-stem review completed across the seven English lessons; automated answer-key mapping checks passed.

### Phase 3 — Science Grade 8 curriculum coverage
- [x] Chemistry: Elements, Compounds and Chemical Reactions.
- [x] Biology: Human Body Systems — Digestion and Circulation.
- [x] Physics: Electric Circuits — Current, Voltage and Resistance.
- [x] Physics: Waves, Sound and Light.
- [x] Earth and Space: Earth, Moon and Space Patterns.
- [x] Grade 8 pathway, Science subject index, About page and sitemap synchronized.
- [x] Manual fact-check and quiz-option/key cross-check completed across the five Grade 8 Science lessons.

### Phase 4 — Educational quality
- [x] Automated rubric passed all 64 lessons: learning outcomes, explanations/worked examples, independent practice, printable worksheet, summary and exactly five quiz questions.
- [x] Static audit reported 0 warnings; 64 accessible quiz forms and 64 answer-key mappings passed.
- [x] Manual review of Maths curriculum was completed in earlier audit sessions; all seven English and eleven Science lesson structures, examples and quiz stems were reviewed during this continuation.
- [x] Grade 8 Science quiz answer keys were checked against their displayed options; no mismatch found in the reviewed set.

### Phase 5 — Accessibility
- [x] axe WCAG 2.1 A/AA scan ran on all 75 pages with no reported violations.
- [x] Responsive layout checks passed at 320px, 390px, 768px and desktop widths.
- [x] Keyboard quiz selection, visible feedback, retake/reset and print controls passed across all 64 lessons.
- [ ] Recommended external validation: NVDA/VoiceOver screen-reader session on real devices before public launch.

### Phase 6 — SEO and discoverability
- [x] Static audit passed titles, descriptions, canonical URLs, Open Graph fields/consistency, language attributes, sitemap URLs, lesson/index/script parity, internal links/anchors and image alt attributes.
- [x] New Grade 8 lessons have unique title/description/canonical/OG metadata and are discoverable from Science and Grade 8 Science indexes.
- [x] Sitemap and canonical inventory reconciled: 75 URLs.

### Phase 7 — Performance, responsiveness and security
- [x] Browser checks passed all 75 sitemap pages at 320/390/768/desktop widths with no horizontal overflow.
- [x] Performance/resource budgets passed on all 75 pages.
- [x] No third-party page resource requests or browser/CSP errors were detected.
- [x] Cloudflare preview security headers, CSP, same-origin assets and custom 404 checks passed.
- [x] All 64 quizzes, retake actions and worksheet print actions passed browser automation.

## Phase 8 continuation — 2 November 2026
- Added Cloudflare Pages technical-data processing disclosure to Privacy Policy and linked Cloudflare's privacy policy.
- Added `scripts/audit-legal-readiness.mjs`: checks required Privacy/Terms/About/Contact disclosures, Cloudflare hosting disclosure, and rejects active AdSense/advertising/analytics script tags across all HTML pages. It explicitly permits no ads.txt while no verified publisher ID exists.
- Wired the legal readiness guard into GitHub Actions immediately after the static site audit. Latest run for this new guard is pending/queued at time of update; do not report it green until it completes.
- Phase 8 is not signed off yet. External owner gates remain: audience classification (child-directed / mixed / general), actual AdSense account and verified publisher ID, configured and tested Google-certified TCF CMP for applicable regions, and the exact ads.txt declaration. Never fabricate any of these. Full originality/source-value review is part of the consolidated release review.
- No merge or deployment. 

## Session log

### 2026-11-02
- Added Science Grade 7 Heat Transfer lesson and synchronized its JS, Science index and sitemap.
- Confirmed workflow run 41461081003 succeeded: all audit, preview and browser-check steps green.
- Investigated Gmail failures and inspected run 41441495924 logs: confirmed malformed regex at audit-site.mjs:197 caused an early static-audit syntax error; current branch regex is corrected and run 41461081003 is green.
- Added this persistent tracker so future chats can resume without repeating completed work.
- Exact inventory reconciled and automated parity assertions added; next start Phase 2 English curriculum coverage review and Phase 3 Science Grade 8 content.

## Instructions for the next ChatGPT session

1. Open this file first: `PROJECT_STATUS.md`.
2. Check latest commit on `audit/production-hardening-2026-11-02` and read this file's CI status block.
3. Check GitHub Actions for the latest run on that exact commit; inspect Gmail notifications only as leads, not as proof of current failure.
4. Continue from the first unchecked item in **Remaining work**.
5. Update this file after each completed phase; never repeat a checked task unless new evidence requires re-audit.
6. Keep changes on the audit branch. Do not merge to `main` or deploy without explicit user approval.


### 2026-11-02 — continuation update
- Added English Grades 6–8 lesson: Vocabulary Skills — Context Clues, Prefixes, Suffixes and Roots, with worked examples, independent practice, five interactive quiz questions, feedback/retake and printable worksheet.
- Synchronized the English index, sitemap and matching quiz script in the same atomic commit.
- Corrected Science index title and Open Graph/meta descriptions to consistently identify Grades 7–8.
- Broadened the educational-quality learning-outcomes detector to recognise “By the end…” and “You should be able to…” wording, reducing false warnings.
- Latest confirmed full run before this update: 41465504326 passed all steps; 70 pages, 59 lesson files, 59 quiz submissions, 70 responsive/performance checks. One educational quality warning remained on Grade 7 Geometry outcomes and is addressed by the updated detector.
- Current continuation point: review English and Science curriculum gaps, then complete manual lesson-quality, accessibility, SEO, legal/trust and final regression reviews. Do not deploy.

- Added Science Grade 8 Biology lesson: Human Body Systems — Digestion and Circulation, with worked examples, independent practice, five-question quiz/feedback/retake and printable worksheet.
- Synchronized Grade 8 Science pathway, Science subject index, sitemap and About page curriculum description in one atomic commit.
- Inventory expected after this addition: Maths 46, English 7, Science 8 = 61 lessons; 72 sitemap URLs and 72 HTML pages. Await CI to verify exact totals.
- Current full CI baseline before this commit: run 41466567257 passed all 71 HTML pages and 60 quizzes with zero static warnings.

- Latest CI confirmation: run 41467406909 passed all 72 HTML routes, 61 lesson files/quizzes, responsive widths, axe WCAG 2.1 A/AA, print controls and performance budgets; static warnings 0.
- Phase 2 English coverage marked complete at the topic-coverage level (7 lessons); detailed academic fact-check remains in Phase 4.

- Added Science Grade 8 Physics lesson: Electric Circuits — Current, Voltage and Resistance, including safe low-voltage guidance, series/parallel circuits, Ohm's law examples, five-question quiz/retake and printable worksheet.
- Synchronized the Grade 8 Science pathway, Science index, sitemap and About page in one atomic commit. Expected inventory after this addition: 46 Maths + 7 English + 9 Science = 62 lessons; 73 sitemap URLs and 73 HTML pages. Await CI verification.


### 2026-11-02 — Grade 8 Science expansion and audit continuation
- Added Grade 8 Physics lesson: Waves, Sound and Light, with wave properties, transverse/longitudinal comparisons, sound, reflection/refraction, electromagnetic spectrum, worked examples, independent practice, five-question quiz, retake/feedback and printable worksheet.
- Added Grade 8 Earth and Space lesson: Earth, Moon and Space Patterns, covering rotation/day-night, axial tilt/seasons, lunar phases, solar/lunar eclipses, safe solar viewing, model explanations, practice, five-question quiz and worksheet.
- Added both lessons to their matching quiz scripts, Grade 8 Science pathway, Science subject index, sitemap and About curriculum description.
- Current content inventory from sitemap: Maths 46, English 7, Science 11 = 64 lessons; 75 sitemap URLs total. Latest static audit run 41469271674 passed with 64 lesson files and 64 answer-key mappings, and preview headers/assets passed; its browser stage was cancelled by a superseding push, so a clean full rerun is required.
- The preceding run 41469194026 failed at static audit on an intermediate commit because the Earth and Space page had not yet been synchronized to the sitemap and indexes. Those missing links were subsequently added. Treat this as an intermediate-snapshot failure, not a verified failure of the current tree.
- Next: run the complete static + preview + browser + axe suite against the final synchronized tree, then continue manual lesson-content, accessibility, SEO, and performance review. No merge or deployment.


### 2026-11-02 — Phases 1–7 technical audit verification
- Latest complete run: 41469810411 passed all workflow steps on tested commit 89a9fb776f59df8bef9a9e9e1baa32b686e7ad0b. Static audit: 75 HTML pages, 64 lesson files, 64 sitemap lesson URLs, 64 quiz scripts, 64 accessible quiz forms, 64 answer-key mappings, 0 warnings.
- Preview check passed security headers, CSP, same-origin lesson assets and custom 404.
- Browser suite passed all 75 routes at 320px/390px/768px/desktop, 64 quiz submissions, 64 retake actions, 64 worksheet print actions and 75 performance-budget checks. No horizontal overflow, third-party requests or browser/CSP errors.
- axe WCAG 2.1 A/AA ran on every route; no violations were returned (any violation would fail the browser workflow).
- Phase 1–7 marked complete for the automated and documented review scope. A manual NVDA/VoiceOver session remains a recommended real-device pre-launch check; Phase 8 legal/trust/AdSense readiness and Phase 9 final report remain outstanding.
- Production main remains unchanged; pull request #1 remains open and unmerged. No deployment performed.


### 2026-11-02 — Phase 8 legal and AdSense readiness
- Updated Privacy Policy: explicitly states advertising and analytics are not currently active; explains Google and third-party advertising cookies before future activation; adds Google Ads Settings, aboutads.info and Google's partner-site data disclosure links; documents certified Google CMP + IAB TCF requirement for personalised ads in EEA/UK/Switzerland; records child-directed/mixed-audience and COPPA assessment as a hard pre-advertising requirement because Grade 6–8 content may be used by under-13 learners.
- Updated About page with an editorial independence statement (not affiliated with an official board/school), transparent grade/curriculum disclaimer and a practical corrections process.
- Updated Terms to disclose that ads are not currently active and future ads/third-party services will be governed by their own policies; prohibits artificial ad clicks/traffic.
- Confirmed no AdSense code, no active analytics tag and no ads.txt currently exist. Do not create a placeholder ads.txt: Google requires the real publisher ID (pub- plus 16 digits) and account-specific seller declaration. Add it only after user supplies/authorizes the actual AdSense account ID.
- No cookie banner/CMP was installed because no advertising or analytics cookies are currently loaded. Before serving personalised ads to EEA/UK/Swiss traffic, implement a Google-certified TCF CMP; before serving any ads, determine whether the Grade 6–8 site is child-directed or mixed-audience and configure required child-directed treatment / restrictions. Do not enable ad code before this work.
- Google policy references reviewed: AdSense Required Content; Google Publisher Policies (privacy disclosures and COPPA); Google certified CMP requirements; ads.txt FAQs. AdSense approval cannot be guaranteed.
- Latest confirmed full Phase 1–7 CI baseline remains run 41469810411 (success). Legal-document edits are awaiting a fresh full CI run against the final consolidated commit.
- Next: complete final legal/trust checklist, verify all policy links and current page code, review AdSense content originality/value risks, then issue Phase 8 readiness decision. No merge/deployment.


### 2026-11-02 — Phase 8 continuation / AdSense gate review
- Verified audit branch HEAD and production/main separation; latest full CI run 41471580311 succeeded on code commit e5d440d (the current HEAD cbb6791 is only the automated CI-status tracker commit).
- Reviewed current Google publisher requirements using official documentation: certified Google CMP + IAB TCF for personalised ads in EEA/UK/Switzerland; COPPA notification and restrictions for covered child-directed sites; TFAT is the current age-treatment signal and legacy TFCD/TFUA tags are deprecated.
- Spot-checked About, Grade 6 Fractions, English Reading Comprehension and Grade 8 Science lesson pages. The sampled lessons contain substantive explanations and practice material; named author/reviewer and source attribution are not clearly visible in the sampled lesson pages. Full originality and source audit remains Phase 9 work.
- Added PHASE8_ADSENSE_READINESS.md documenting current implementation, CMP strategy, COPPA/age-treatment gate, ads.txt/publisher-ID requirements, content-value risks and explicit release holds.
- Confirmed no real AdSense publisher ID is available in repository context; no ads.txt placeholder or ad code added. No CMP is installed while advertising and analytics remain inactive.
- Phase 8 remains IN PROGRESS. Remaining external/user-dependent gates: audience classification, actual AdSense account/publisher ID, CMP configuration/testing, verified ads.txt declaration and full content originality review. Keep ads and tracking disabled until all relevant gates are met.
- No merge or deployment. Production main remains unchanged.


## Release decision — 2026-11-02

- User instruction: complete the audit, defer Google AdSense until later, then deploy.
- AdSense is intentionally not configured: no publisher ID, ads.txt seller record, CMP or advertising tags are added. The site remains pre-monetisation.
- Latest complete audit workflow: [run #41473638302](https://github.com/com-orgs/learnora/actions/runs/41473638302) — success. Static site audit, legal/pre-monetisation audit, Cloudflare preview headers/assets, Playwright browser checks and tracker refresh all passed.
- The tracker-only follow-up commit is marked `[skip ci]`; it does not change website files. Tested website commit: `fc1a75dff54972e7413f458b86a4a17e42f5e413`.
- Final compare against production main `cd3ee6e0600e56ffc9a00b1f6b8e1dc254462aec`: 316 commits ahead, 0 behind, 151 files changed.
- Phase 10 merge is authorized by the user; verify production Pages deployment and live routes after merge before declaring deployment complete.


## Sitemap verification — 2 November 2026 (production)

- Verified production URL: `https://learnora-ab2.pages.dev/sitemap.xml` returned HTTP 200 and contains exactly 80 unique `<loc>` entries, all on the verified Learnora Pages host.
- The 80 entries cover 64 learning lessons, subject/grade hubs, trust pages, contact, and the international curriculum hub plus four country guides (USA, England, Ontario/Canada, Australia).
- Production `robots.txt` returned HTTP 200, allows public crawling (`User-agent: *`, `Allow: /`) and references the exact production sitemap URL.
- GSC Sitemaps report: `sitemap.xml` submitted at 2026-11-02 18:31 UTC; `isPending=true`, warnings 0, errors 0. Pending means Google has not completed the latest fetch/processing; it is not proof that all listed pages are indexed.
- GSC Indexing Tracker: 80 URLs tracked; 1 indexed, 10 reported as “URL is unknown to Google”, 69 pending, 0 warnings. Most URLs have not yet been inspected/crawled; avoid repeatedly spending inspection quota on pending URLs.
- GSC sitemap performance for 2026-10-03 through 2026-10-30: 80 sitemap URLs parsed, 0 URLs with recorded impressions in the report, 0 clicks. Search Console data can lag; the result is not evidence of a technical noindex issue by itself.
- IndexNow key file was verified reachable. Submission history contains 80 distinct sitemap URLs among the latest 100 records; all 100 records returned HTTP 200. HTTP 200 confirms IndexNow acceptance/key validation, not indexing by Google or Bing. Several URLs were resubmitted; avoid unnecessary duplicate submissions.
- Live `/curriculum/` hub returned HTTP 200 and exposes crawlable internal links to all four market guides. Prior live crawl verified the main 75-page set; the four country guides and hub were individually fetched with HTTP 200. Firecrawl credits were exhausted during the latest attempted refresh, so no new all-site crawl is claimed for this session.
- Browser connector could not attach because the originating browser context was unavailable. GSC Wizard and GitHub API remained connected and usable.
- Critical branch consistency warning: production `main` sitemap uses clean extensionless lesson URLs; `audit/production-hardening-2026-11-02` still has the older `.html` URL format and omits the five curriculum URLs. Keep production as source of truth and do not merge that stale branch until reconciled.
- Current SEO conclusion: sitemap delivery and crawl access are technically healthy; organic visibility/indexing is still at an early discovery stage. No country-level ranking or earnings claims should be made while GSC has no meaningful search-performance rows.

## 2026-11-02 — sitemap verification continuation
- [x] Reconnected and verified GSC Wizard property access for the production URL-prefix property.
- [x] Rechecked production sitemap HTTP 200, 80 URL entries, and GSC submission state (0 errors / 0 warnings; processing pending).
- [x] Rechecked production robots.txt HTTP 200 and sitemap directive.
- [x] Reconciled tracker and sitemap performance: 80 tracked; 1 indexed, 10 URL-unknown, 69 pending; zero clicks/impressions in the reported settled window.
- [x] Reconciled IndexNow history: 80 distinct URLs in recent submission records; all returned HTTP 200 and key file is verified.
- [x] Recorded stale audit-branch sitemap mismatch as a merge blocker until branch reconciliation.
- [ ] Continue monitoring Google fetch/indexing over 24–72 hours; inspect only a small sample of pending/unknown URLs when useful.
- [ ] Run a fresh preview workflow against a rebased audit branch before any future merge.


### 2026-11-03 — Phase 11 started: international learning support
- Added a curriculum-neutral Grade 6–8 maths four-week study plan with a skills checklist, three worked examples, ten independent practice questions and expandable worked answers.
- Linked the resource to existing Learnora lessons and the USA, UK, Canada and Australia curriculum guides; clearly labels it supplementary rather than claiming formal curriculum alignment.
- Added the page to the curriculum hub and sitemap on branch `audit/phase11-international-study-plan-2026-11-03`. Production remains unchanged pending review and CI.
- Next: run static/legal/browser QA, then build equivalent guided revision resources for English and Science.


### 2026-11-03 — Phase 11 international worksheet expansion
- Added a free print-ready middle-school maths workbook with four jurisdiction-specific sets: US Common Core Grades 6–8, England KS3, Ontario Grades 6–8, and Australian Curriculum Version 9 Years 7–8.
- Workbook contains 24 original practice questions, four expandable worked answer keys, print styling, and a visible supplementary-resource disclaimer.
- Linked the workbook from the international curriculum hub and each country/region guide; added its clean extensionless URL to sitemap.xml.
- Updated the Australian Curriculum source link to the official Version 9 site.
- Static checks: 24 questions; 4 answer keys; print action present; canonical and sitemap entry present; all worksheet internal links are represented in the sitemap; all five guide pages link to the workbook.
- Firecrawl refresh could not run because the connected Firecrawl account had insufficient credits; no fresh Firecrawl crawl is claimed. Live route smoke testing and CI must be completed after the release PR preview.
- Release PR #8: https://github.com/com-orgs/learnora/pull/8. Production remains unchanged until green CI and merge.


- Release validation branch: `audit/phase11-release-2026-11-03`; run the full audit workflow on this branch before production merge.

- CSP remediation: worksheet print action now uses `scripts/pages/international-middle-school-maths.js`; inline event attributes removed; Contact, Privacy and Terms footer links added.


### 2026-11-03 — Phase 11 release merged
- [x] International curriculum guide set linked to original printable maths practice workbook.
- [x] Four regional practice sets published in the release commit: US Common Core, England KS3, Ontario Grades 6–8 and Australian Curriculum Version 9 Years 7–8.
- [x] 24 original questions and four worked answer keys added.
- [x] CSP inline print handler issue found by CI and corrected before merge.
- [x] PR #9 merged to main; production deployment is expected from the connected Cloudflare Pages main-branch integration.
- [x] Confirmed Cloudflare Pages production deployment and live HTTP smoke checks for the maths workbook, external print script and sitemap on 3 November 2026.
- [x] Full post-fix browser regression completed successfully in run [#41612754761](https://github.com/com-orgs/learnora/actions/runs/41612754761); see Phase 12 verification below.


### 2026-11-03 — Phase 11 production smoke verification
- [x] Verified live production workbook at `/worksheets/international-middle-school-maths`; page title, description, canonical URL, `index,follow` robots directive and Open Graph metadata are present.
- [x] Verified live workbook contains all four practice sets and all four worked-answer sections; content is visible in the production response.
- [x] Verified the same-origin print script `/scripts/pages/international-middle-school-maths.js` is publicly served and contains the click-to-print handler.
- [x] Verified live production sitemap lists 84 URLs and includes the new workbook URL.
- [x] Verified live curriculum hub and US, England, Ontario and Australia guide pages are accessible, have matching canonical URLs and link to the workbook.
- [x] Verified the workbook footer links Contact, Privacy and Terms; worksheet canonical/robots metadata is correct.
- [x] The earlier pending/failing Phase 11 QA run was superseded by full run [#41612754761](https://github.com/com-orgs/learnora/actions/runs/41612754761), which passed the complete browser suite across the merged 87-page release.
- [ ] Review and reconcile remaining editorial-attribution PR #4 before treating all content quality work as complete.


## Current continuation status — 3 November 2026

- Production branch head at session start: `78854ac777fa701d3a8d2f94a769e8812a1556e6`. Phase 11 maths international guides and practice workbook were live-smoke-checked in the preceding session.
- Phase 11 maths expansion is complete for US Common Core, England KS3, Ontario Grades 6–8 and Australian Curriculum Years 7–8. English and Science international expansion is tracked separately under Phase 12.
- Latest browser QA run [#41564576167](https://github.com/com-orgs/learnora/actions/runs/41564576167) failed because the four-week maths study-plan table caused horizontal page overflow at 320px and 390px. Static, legal and Cloudflare preview checks passed. Its tracker-refresh step also failed because the expected CI status heading was absent. Run [#41564569725](https://github.com/com-orgs/learnora/actions/runs/41564569725) was cancelled before browser checks completed. Neither run is a green full-browser result.
- Phase 12 remediation: wrap the study-plan table in a keyboard-focusable horizontal-scroll region; add the missing CI status section; rerun responsive, accessibility, quiz, print and performance checks.
- Firecrawl search was unavailable because the connected account reported insufficient credits. No Firecrawl crawl is claimed. Official primary curriculum sources were checked through public search and are linked directly on the new guides.
- Phase 8 remains partial: AdSense account/publisher ID, audience/COPPA assessment and any required certified CMP remain owner/account gates. No advertising code is enabled.
- Editorial-attribution issue [#4](https://github.com/com-orgs/learnora/issues/4) remains open. New curriculum guides cite official primary sources, but site-wide source attribution and real named-reviewer workflow are not yet complete.

### Phase 12 — International English and Science foundations

- [x] Published English guide covering US ELA, England KS3, Ontario Language and Australian Curriculum English.
- [x] Published Science guide covering NGSS/state adoption, England KS3, Ontario Science and Technology, and Australian Curriculum Science.
- [x] Published 20-question original English and Science practice workbook with worked answers and external print JavaScript.
- [x] Linked both guides and workbook from subject/curriculum hubs; added clean URLs to the production sitemap (87 URLs total).
- [x] Fixed maths study-plan table overflow; full browser QA passed at 320px, 390px, 768px and desktop widths.
- [x] Updated CI status tracker; full branch browser workflow and main static/legal workflow passed; PR #10 merged and Cloudflare production verified.

## CI status (automatically refreshed by GitHub Actions)
- Status: success.
- Tested commit: `f6d0ed25bc188173989e4bbbe977e71317801928`
- Workflow: Learnora Site Audit (run [#42486788556](https://github.com/com-orgs/learnora/actions/runs/42486788556))
- Last updated automatically: run #42486788556 on branch `seo/sitewalk-remediation-2026-11-08`.


### Phase 12 browser QA correction — 3 November 2026

- First full browser run [#41612460963](https://github.com/com-orgs/learnora/actions/runs/41612460963) checked 87 pages, 64 quizzes, 64 quiz retakes and 66 print actions. Responsive layout and performance checks passed; axe found two serious colour-contrast failures on the contact links inside the English and Science guide note panels.
- Corrective change: darkened and underlined note-panel links on both guides. Rerun the full browser suite; do not mark Phase 12 QA green until it passes.


### Phase 12 — merged and live in production (3 November 2026)

- [x] PR [#10](https://github.com/com-orgs/learnora/pull/10) squash-merged to `main` as `e1be1bde7abcda7679f0c507228805f0f1380151`.
- [x] Cloudflare Pages GitHub check reported **Deployed successfully** for the production merge commit; the production alias `https://learnora-ab2.pages.dev` was independently fetched after deployment.
- [x] Production English guide, Science guide, shared 20-question workbook and external print JavaScript all returned successfully with correct canonical URLs and `index,follow`.
- [x] Production sitemap now reports 87 URLs and includes both guides and the workbook.
- [x] English, Science and curriculum hubs each link to their relevant guide and the shared workbook.
- [x] Responsive table fix verified in full browser suite. Browser run [#41612754761](https://github.com/com-orgs/learnora/actions/runs/41612754761) passed 87 pages at 320/390/768/desktop, 64 quiz submissions, 64 retakes, 66 worksheet print actions, 87 performance/resource checks and axe WCAG 2.1 A/AA with no reported violations.
- [x] Main-branch static and legal workflow [#41613022618](https://github.com/com-orgs/learnora/actions/runs/41613022618) passed. Cloudflare Pages deployment check also passed for the merge commit.
- Phase 12 foundation work is complete. Future curriculum depth still needed: more English and Science lessons, additional country-specific practice, and site-wide editorial source/reviewer reconciliation.
- Phase 8 remains partial; do not enable AdSense until actual account/publisher ID, audience/COPPA assessment and any applicable certified CMP requirements are resolved.


### Phase 13 — lesson-depth expansion (3 November 2026)

- Added four full lessons: English argument writing; English text structure and author's purpose; Grade 7 weather, climate and the water cycle; Grade 8 Earth's resources, sustainability and human impact.
- Each lesson includes learning objectives, concept explanations, worked examples, five interactive questions with feedback and retake, a printable worksheet and suggested answers.
- Linked all four lessons from their subject hubs and added clean canonical URLs to the sitemap.
- [x] Static, legal and preview checks passed; full 91-page browser QA passed in run [#41614283348](https://github.com/com-orgs/learnora/actions/runs/41614283348). PR #11 merged to main and production deployment was verified.


### Phase 13 — merged and live in production (3 November 2026)

- [x] PR [#11](https://github.com/com-orgs/learnora/pull/11) squash-merged to `main` as `8da27fefe1b18f7f681cd5ceddb00062c853cfa7`.
- [x] Full browser QA run [#41614283348](https://github.com/com-orgs/learnora/actions/runs/41614283348) passed: 91 sitemap pages at 320px, 390px, 768px and desktop widths; no horizontal overflow; 68 quiz submissions; 68 retake actions; 70 worksheet print actions; 91 performance/resource checks; no third-party requests or CSP errors.
- [x] Static website audit, legal/pre-monetisation readiness audit and Cloudflare preview headers/assets checks passed on the branch.
- [x] Main workflow [#41614592612](https://github.com/com-orgs/learnora/actions/runs/41614592612) passed; Cloudflare Pages deployment check succeeded for the merge commit.
- [x] Production verified: all four lesson URLs return with canonical metadata and `index,follow`; all four pages contain the learning objectives, quiz and printable worksheet; English and Science hubs link to the two subject-specific lessons; sitemap reports 91 URLs and includes all four new lessons; external quiz/print scripts return successfully.
- Phase 13 release complete. Future depth: add more lessons and differentiated practice, strengthen source attribution and review process.
- Phase 8 remains partial; AdSense account/publisher ID, audience/COPPA assessment and any applicable certified CMP requirements remain owner/account gates. No advertising code enabled.


### Phase 14 — educational quality audit (in progress, 3 November 2026)

- [x] Started structured academic accuracy, teaching-depth, quiz, worksheet, source-attribution and reviewer-transparency checks.
- [x] Confirmed inventory from the static audit: 68 sitemap lesson URLs and 92 canonical HTML pages.
- [x] Added primary/reference sources to the four Phase 13 lessons: Common Core ELA, England curriculum, Ontario Language, Australian Curriculum English, NASA, NOAA, NGSS, US EPA and relevant curriculum frameworks.
- [x] Improved all 20 quiz answer feedback entries across those four lessons to reveal the correct answer text after incorrect or unanswered attempts.
- [x] Added a public Editorial and Corrections Policy and internal desk-audit log. No named subject expert is claimed; independent expert review remains outstanding.
- [ ] Extend explicit source attribution to the remaining legacy lessons; complete topic-by-topic accuracy checks for maths, English and science, and obtain genuine independent subject-expert review.
- [x] Verified all ten official source URLs added to the four Phase 13 lessons are reachable; static, legal, Cloudflare preview and full browser QA passed, followed by production verification.
- Phase 14 is not complete. Phase 8 AdSense readiness remains partial and separate from academic quality.


#### Phase 14 — mathematics sample desk audit (3 November 2026)

- [x] Desk-checked worked examples and quiz answer keys in six representative fraction, ratio, Pythagorean theorem, linear-equation and probability lessons. The calculations and keyed quiz answers sampled were consistent with the visible questions.
- [x] Added official mathematics curriculum reference links and scope disclaimers to three Grade 8 lessons: Pythagorean theorem, linear equations/inequalities and probability models.
- [x] Improved those three quizzes so incorrect or unanswered attempts identify the correct option text, not only a generic explanation.
- [ ] Expand calculation verification and source attribution across all remaining mathematics lessons; the sample is not a full subject audit.

- [x] Added a separate three-task independent-practice activity with suggested responses to the Grade 8 sustainability lesson; the page now explicitly supports application before the quiz.

- [x] Added independent-practice tasks and suggested responses to the two Phase 13 English lessons and Grade 7 weather/water-cycle lesson, completing the rubric's explicit practice-section requirement for the four new Phase 13 lessons.
- [x] Aligned the probability quiz's stored correct-answer text with the static audit schema; the visible option and feedback string now match.

- [x] Repaired 273 false-positive footer warnings by teaching the audit to accept Learnora's clean routes (for example `/contact`) as well as `.html` paths.
- [x] Resolved all 165 quiz-feedback audit warnings across 33 legacy lessons: 19 lessons received explicit correct-answer text and feedback for 95 quiz questions; 14 lessons already exposed answer labels and are now correctly recognized by the checker.
- [x] Added the Editorial and Corrections Policy link on About and Contact pages and included the policy URL in the sitemap.
- [x] PR [#12](https://github.com/com-orgs/learnora/pull/12) squash-merged to `main` as `97640771c2700345152c359f96c369f9ed675755`.
- [x] Cloudflare Pages reported **Deployed successfully** for the merge commit; production alias `https://learnora-ab2.pages.dev` was independently verified.
- [x] Production policy, About, Contact and all four Phase 13 lesson URLs returned with correct canonical metadata and `index,follow`; sitemap reports 92 URLs and includes `/editorial-policy`.
- [x] Production lessons expose Sources and further reading, independent practice, quizzes and worksheets; sampled deployed quiz scripts contain the correct-answer feedback.
- [x] Full branch QA [#41636282293](https://github.com/com-orgs/learnora/actions/runs/41636282293) passed with zero static warnings, 92 pages at 320/390/768/desktop widths, 68 quiz submissions, 68 retakes, 70 print actions and 92 performance checks.
- [x] Main workflow [#41636821146](https://github.com/com-orgs/learnora/actions/runs/41636821146) passed static and legal/pre-monetisation checks.
- Phase 14 first remediation batch is merged and live. The wider academic audit remains in progress: source attribution for legacy lessons, full topic-by-topic accuracy verification and genuine subject-expert review remain open.

## 4 November 2026 — Grade 6 Maths on-page preview work (PR #19)

- Baseline audit used six live Grade 6 Maths pages (grade hub, Understanding Fractions, Equivalent Fractions, Comparing and Ordering Fractions, Adding and Subtracting Fractions, Understanding Decimals). All six returned HTTP 200, self-canonical, `index,follow`, one H1, and zero critical/high/medium on-page audit findings. The GSC Wizard on-page audit reported 8 low-severity findings: 3 lesson pages missing structured data; 2 fraction descriptions longer than ~160 characters; decimals title 65 characters. No indexing or ranking claim follows from this on-page audit.
- Content review found the decimals lesson repeats the “Continue Learning” section heading; its second occurrence is now labelled “Related Measurement Topics” to make the navigation clearer.
- Targeted preview-only edits on three files: shorten the Comparing Fractions and Adding/Subtracting Fractions meta descriptions; retitle the Decimals lesson to “Grade 6 Decimals: Place Value and Rounding | Learnora”; rename the second duplicate heading. No mass metadata edit, no new URLs, no sitemap change, no content publication, and no production changes.
- New isolated PR: [#19](https://github.com/com-orgs/learnora/pull/19), branch `seo/grade6-maths-onpage-2026-11-04`, head `5ac4a632be6ac4fe295a142574c5ecf7f2115bf6`, exactly 3 intended HTML files changed (4 insertions / 4 deletions). PR remains open and unmerged.
- Cloudflare preview check for PR #19 was still reported as Building at last check; preview URL not yet provided. Candidate guessed preview host returned HTTP 404 and is not considered verified. No full static/legal/browser QA has passed yet. Do not merge until the exact preview is available and all required QA is green.
- Next: wait for Cloudflare's authoritative PR check to finish, obtain the exact preview URL from the check, verify all three changed pages (HTTP 200, updated title/description, self-canonical, index,follow), then run static/legal/accessibility/mobile/desktop/quiz/print QA. Keep production untouched.

### PR #19 preview verification update — 4 November 2026
- Cloudflare Pages deployment succeeded for code commit `5ac4a63`; exact branch preview: https://seo-grade6-maths-onpage-2026.learnora-ab2.pages.dev/
- All three changed lesson routes were fetched from that exact preview and returned HTTP 200, one H1, `index,follow`, and production self-canonical URLs:
  - Comparing and Ordering Fractions: title 59 chars; revised description 160 chars.
  - Adding and Subtracting Fractions: title 59 chars; revised description 142 chars.
  - Grade 6 Decimals: revised title 53 chars; description 159 chars; second section heading now “Related Measurement Topics”; only one “Continue Learning” heading remains.
- Preview metadata and revised content match the intended changes. The canonical URLs correctly point to the production host; preview internal navigation resolves on the preview host as expected.
- Preview HTTP/metadata smoke test passed. Full repository static/legal/browser/assistive-tech/quiz-interaction/print QA is still not verified; the repository workflow does not trigger on the current `seo/**` branch (it triggers on `main`, `audit/**`, or manual dispatch). PR #19 remains open and unmerged. Production remains unchanged.
- Next: obtain full static/legal/browser QA evidence for this code diff, then make a release decision only after all required checks pass.


### Latest PR #19 verification — 4 November 2026, 11:13 PKT
- GitHub PR #19 latest head at verification: `ad4910efa833700c358390ccbb00c0127fc0732f`. Cloudflare's PR comment confirms successful deployment for short SHA `ad4910e`; deployment preview: https://7944d8ec.learnora-ab2.pages.dev/ .
- Independently fetched all three changed lesson routes from that exact deployment preview. All returned HTTP 200, HTML content type, one page title, one H1 in the rendered HTML sample, `index,follow`, and canonical URLs pointing to their matching production URLs. The two revised fraction meta descriptions and the revised decimals title are present. No production page was changed.
- The GitHub `site-audit.yml` workflow has `workflow_dispatch`, but its non-main preview-header step is hard-coded to a different deployment (`audit-production-hardening-2.learnora-ab2.pages.dev`), and its browser smoke step targets the production URL. Therefore a manual run on PR #19 would not be a valid end-to-end test of this PR preview. The available GitHub connector has no workflow-dispatch action; no such run was started.
- Full static/legal/accessibility/mobile/desktop/quiz/retake/print QA for the current PR #19 head remains unverified. Keep PR #19 open and unmerged; do not release until a workflow is corrected or QA is run against the exact preview.
- PR #17 remains open and unmerged; documentation-only research changes. No GSC inspections or Bing/IndexNow submissions were made in this continuation. The 4 November GSC daily project cap is already exceeded; zero further inspections today.


## 4 November 2026 — PR #19 production release and current continuation state

- PR [#19](https://github.com/com-orgs/learnora/pull/19) merged as `7f351cc75a4d531e4ff0948e59aa201240d62463`. It changes three existing Grade 6 Maths HTML pages, the preview-based QA workflow and this project checkpoint.
- Cloudflare Pages production deployment [#41784777507](https://github.com/com-orgs/learnora/actions/runs/41784777507) completed successfully. Main static/legal audit [#41784777268](https://github.com/com-orgs/learnora/actions/runs/41784777268) passed with zero static warnings; 104 HTML pages, 68 lesson files, 77 accessible quiz forms and answer-key mappings were checked.
- Full preview browser QA [#41784399824](https://github.com/com-orgs/learnora/actions/runs/41784399824) passed: 104 sitemap pages at 320/390/768/desktop widths; 77 quizzes, 77 retakes, 79 print actions and 104 performance/resource checks. No horizontal overflow, keyboard quiz issue, third-party request, CSP/runtime error or performance-budget failure.
- Production fetch verified all three changed pages. HTML title tags, descriptions, canonical URLs and `index,follow` are correct. Decimals title is “Grade 6 Decimals: Place Value and Rounding | Learnora”; the page has one “Continue Learning” and one “Related Measurement Topics” heading.
- PR #19's preview workflow now resolves the authoritative Cloudflare branch preview from the Cloudflare PR comment, validates the `learnora-ab2.pages.dev` host and uses that same preview for header/asset and browser checks. The parser was tested against Cloudflare's actual comment markup.
- GSC settled 28-day performance through 1 Nov 2026: 0 clicks, 0 impressions and no query/page rows. Bing query/page/daily crawl reports returned no dated rows. Bing sitemap feed remains Success (104 URLs).
- Free Keyword Tool autocomplete produced intent ideas only, without cached metrics. Useful themes: Grade 6 worksheets, fraction questions/word problems, equivalent fractions, and multiplication/division of fractions. UK/Australia samples included mismatched MCO/ATP/Green Shoots terms; do not target without validation.
- Latest 4 Nov indexing deduplication: 36 distinct URLs across tracker and URL Inspection history, 37 records and one duplicate. This exceeds the requested 10/day project cap due to GSC Wizard's hourly background tracker; no pause/throttle action is exposed. Daily automation guard remains enabled; no further checks today.
- PR #17's original branch was behind the newly merged main and reported a merge conflict. The documentation has been reapplied on top of current main for a fresh preview/QA cycle. No production edits are part of this documentation refresh.

### Next actions
1. Complete PR #20 Grade 8 Science hub cross-link QA and merge only after all checks are green.
2. Continue source attribution and academic review for the 70 legacy lessons without dedicated references.
3. Use GSC impressions/queries when they begin appearing to prioritise on-page changes; current settled 28-day report through 1 Nov has 0 clicks and 0 impressions.
4. Continue legitimate teacher/parent discovery and community distribution; no spam link schemes.


### PR #17 refreshed documentation QA — 4 November 2026
- Rebased the documentation branch onto the current production main commit `7f351cc` after PR #19 merged; restored the three documentation files without carrying stale main history.
- Cloudflare branch preview deployment succeeded for head `91f2039`: https://research-competitor-keywords.learnora-ab2.pages.dev/ .
- Full preview QA [#41785142372](https://github.com/com-orgs/learnora/actions/runs/41785142372) passed. Static metadata/canonical/OG, sitemap, lesson/script inventory, internal links, accessible quiz form/answer-key mapping, JavaScript security/CSP/syntax checks passed. Legal/pre-monetisation disclosures and no-ad/no-tracking guardrails passed; zero static warnings.
- Preview header/asset/CSP/custom-404 checks passed. Browser QA checked 104 pages at 320/390/768/desktop widths, 77 quizzes, 77 retakes, 79 print actions and 104 performance/resource budgets. No horizontal overflow, quiz keyboard/feedback failure, print failure, third-party request, CSP/runtime error or performance-budget failure.
- PR #17 merged successfully as `14949c842ccf65cd948bf410d64255e744d5dc41`; it remains documentation-only and made no production HTML, URL, script, analytics, ad or sitemap changes.


## 4 November 2026 — PR #20 Grade 8 Science internal-link preview QA
- PR [#20](https://github.com/com-orgs/learnora/pull/20) adds a card and contextual in-text link from `/science/grade-8/` to the existing `/science/grade-8/earth-resources-sustainability-human-impact` lesson, and updates the hub meta description plus CollectionPage JSON-LD description to include environmental science and sustainability.
- The target lesson already exists in the sitemap, returns indexable self-canonical metadata and includes a “Sources and further reading” section with EPA, NGSS, England National Curriculum and Australian Curriculum references. No new URL was created.
- Exact Cloudflare preview: https://seo-grade8-science-earth-res.learnora-ab2.pages.dev/ . Independent preview fetch found the Grade 8 hub H1, updated description, production canonical, `index,follow`, the new card and two relevant internal links to the existing lesson; the target lesson also returned expected H1, self-canonical and `index,follow`.
- Full preview QA [#41785499567](https://github.com/com-orgs/learnora/actions/runs/41785499567) passed: static and legal audits, preview headers/CSP/assets/custom 404, 104 pages at 320/390/768/desktop, 77 quizzes, 77 retakes, 79 print actions and 104 performance/resource checks. No horizontal overflow, quiz keyboard/feedback failure, print failure, third-party request, CSP/runtime error or performance-budget failure.
- QA tested code commit `473ffb49cf8a65496efb06ff75427a3e66ec0eca`; later branch commits changed only documentation/checkpoint files. PR #20 merged as `892cde2c8c17d27cd95522f384338d38ae5b6a40` and deployed successfully.


## 4 November 2026 — PR #20 production release verified
- PR [#20](https://github.com/com-orgs/learnora/pull/20) merged as `892cde2c8c17d27cd95522f384338d38ae5b6a40`. Production Cloudflare Pages check-run [#126427622558](https://github.com/com-orgs/learnora/runs/126427622558) reported “Deployed successfully”.
- Live production fetch verified `/science/grade-8/`: updated description includes chemistry, biology, physics, Earth and space science, and sustainability; canonical points to the production hub; robots is `index,follow`; H1 is “Grade 8 Science Learning Resources”. The new card and contextual in-text link both point to the existing Earth Resources lesson (two links total).
- Live target `/science/grade-8/earth-resources-sustainability-human-impact` also returned the expected title/description, self-canonical and `index,follow`. No new URL or sitemap entry was created.
- PR #20 preview QA [#41785499567](https://github.com/com-orgs/learnora/actions/runs/41785499567) passed full static/legal/header/browser tests before merge: 104 pages, 77 quizzes, 77 retakes, 79 print actions and 104 performance/resource checks.
- Current main release includes PR #19 (Grade 6 Maths metadata/heading improvements), PR #17 (competitor research/keyword map/roadmap) and PR #20 (Grade 8 Science internal cross-link). Production remains unchanged except for these reviewed, preview-tested releases.

### Current next actions
1. Continue academic source attribution and factual accuracy review across the 70 legacy lessons without dedicated references, starting with the Grade 6 Maths priority cluster.
2. Use Google Search Console query/impression data once it appears; latest settled 28-day baseline through 1 November remains 0 clicks and 0 impressions.
3. Monitor Google/Bing discovery without duplicate URL inspections or IndexNow submissions; respect the 10 unique GSC URL/day project cap and avoid resending the existing 104 Bing URLs.
4. Build useful teacher/parent distribution resources and legitimate partnerships; no spam or artificial backlink schemes.


## Superseding execution update — 4 November 2026 (PR #21 merged; production verification pending)

- PR [#21](https://github.com/com-orgs/learnora/pull/21) merged successfully to `main` as `06b2c35d07244606c0a840b7cc982b8748eac7b8`.
- Added a dedicated “Sources and further reading” section to `math/grade-6/understanding-fractions.html`, with verified OpenStax, BBC Bitesize, The Math Learning Center and NRICH links. No new URL, sitemap change, quiz, worksheet, analytics or advertising change was made.
- PR preview verification passed: all four source URLs were present; lesson H1, canonical and `index,follow` were confirmed. Full CI run [#41786036094](https://github.com/com-orgs/learnora/actions/runs/41786036094) succeeded: static audit (104 HTML pages, 68 lesson files, 77 accessible quizzes, 0 warnings), legal/pre-monetisation audit, preview security headers/CSP/assets/custom 404, and browser QA across 104 pages at 320/390/768/desktop, 77 quiz submissions, 77 retakes, 79 print actions and 104 performance/resource checks.
- The PR head had two later commits affecting only `PROJECT_STATUS.md`; comparison confirmed no lesson-code changes after the tested code commit.
- Post-merge main branch now points to `06b2c35d07244606c0a840b7cc982b8748eac7b8`. A fresh production fetch still returned the previous lesson content without the new sources section, so Cloudflare production deployment is **not yet verified**. Do not claim this release is live until the deployment workflow succeeds and the production page shows the four links.
- Source-attribution inventory: 77 lesson pages; previously 7 had dedicated sources sections; this PR adds one, leaving **69 legacy lessons** in the source-attribution backlog (subject to the next full inventory refresh).
- Indexing guardrail remains unchanged: no more GSC inspections or Bing/IndexNow resubmissions on 4 November. GSC's URL Inspection API status check is not the manual Request indexing action.

### Next actions
1. Trigger/confirm the main-branch Cloudflare Pages deployment using the repository's existing deployment workflow; then verify production lesson HTML, canonical and robots metadata.
2. Refresh the main project tracker and roadmap with the deployment result.
3. Continue the source-attribution and accuracy review with the next high-priority Grade 6 Maths lesson, in an isolated branch and full preview QA.
4. On the next Pakistan calendar day, check the GSC inspection history before using any daily inspection allowance; never repeat URLs.


### PR #21 production deployment verification — 4 November 2026
- Cloudflare Pages deployment workflow [#41789314019](https://github.com/com-orgs/learnora/actions/runs/41789314019) completed successfully on main commit `241191ab043698fedbfc51131ba5190786c44418`; deployment job and content/legal preflight both passed.
- Main static/legal audit [#41789314066](https://github.com/com-orgs/learnora/actions/runs/41789314066) completed successfully.
- Fresh production fetch of `/math/grade-6/understanding-fractions` confirmed the “Sources and further reading” section and all four outbound references (OpenStax, BBC Bitesize, The Math Learning Center, NRICH). Production page remains HTTP 200; title is “Understanding Fractions - Grade 6 Maths | Learnora”; canonical is self-referential; robots is `index,follow`; all four links use `target=_blank` and `rel=noopener noreferrer`.
- PR #21 is therefore complete, merged and live. The earlier “deployment pending” note above is superseded by this verification.
- Latest main documentation/deployment commit: `241191ab043698fedbfc51131ba5190786c44418`.


## Superseding execution checkpoint — 4 November 2026 (PR #22 merged; deployment trigger recovery)

- PR [#22](https://github.com/com-orgs/learnora/pull/22) merged successfully as `b1c040330bf0903a8c4667aad9af36b52d293861`.
- Added a curriculum-neutral “Sources and further reading” section to `math/grade-6/equivalent-fractions.html` with three supporting resources: OpenStax, BBC Bitesize and The Math Learning Center. No new URL, sitemap, quiz, worksheet, analytics, advertising or metadata changes.
- Full PR QA run [#41789533003](https://github.com/com-orgs/learnora/actions/runs/41789533003) succeeded: 104 HTML pages, 68 curriculum lessons, 77 accessible quizzes, zero static warnings; legal/pre-monetisation audit passed; preview security headers/CSP/assets/custom 404 passed; browser checks passed across 104 pages at 320/390/768/desktop, 77 quiz submissions, 77 retakes, 79 print actions and 104 performance/resource checks.
- PR preview [https://seo-grade6-equivalent-fracti.learnora-ab2.pages.dev/math/grade-6/equivalent-fractions](https://seo-grade6-equivalent-fracti.learnora-ab2.pages.dev/math/grade-6/equivalent-fractions) confirmed all three sources, HTTP success, production self-canonical and `index,follow`.
- Main now points to `b1c040330bf0903a8c4667aad9af36b52d293861`. Fresh production fetch still showed the old content; no post-merge main deployment run was visible. The squash merge commit includes CI-status bot commit text containing `[skip ci]`, which likely suppressed the push workflows. This is a deployment-trigger issue, not a failed QA result.
- This documentation checkpoint intentionally uses a normal commit message (no skip-ci marker) to trigger the existing main-branch static audit and Cloudflare Pages deployment. Verify workflow completion and production content before marking PR #22 live.
- Source attribution estimate: 77 lessons total, 9 with dedicated references (7 previous + PR #21 + PR #22), leaving **68 legacy lessons** pending a refreshed inventory.
- GSC/Bing guardrail: no further inspections or duplicate submissions on 4 November. Review history before using any next-day allowance.

### Next actions
1. Confirm main static audit and Cloudflare Pages deployment for the current main commit; then verify production Equivalent Fractions page has all three sources, HTTP 200, self-canonical and `index,follow`.
2. Update this tracker and roadmap with verified deployment state.
3. Continue the highest-priority Grade 6 Maths source/accuracy review in a separate preview branch with full QA.
4. Reconcile source inventory before making further backlog-count claims.


### PR #22 production deployment confirmation — 4 November 2026
- The existing main-branch Cloudflare Pages deployment workflow ran automatically after the normal documentation checkpoint commit `0481a2115fe79bcacd4d59e6f092772d0be9c056`; no manual dispatch was necessary. Deployment run [#41819235194](https://github.com/com-orgs/learnora/actions/runs/41819235194) completed successfully. Its audit/pre-deployment verification and Cloudflare deployment steps all passed.
- Main static audit [#41819235153](https://github.com/com-orgs/learnora/actions/runs/41819235153) also completed successfully.
- Fresh production fetch of `/math/grade-6/equivalent-fractions` confirms “Sources and further reading” with all three expected outbound links: OpenStax, BBC Bitesize and The Math Learning Center. Production response returned the expected title and description, self-canonical, `index,follow`, and safe external-link attributes (`target=_blank`, `rel=noopener noreferrer`).
- PR #22 is now **merged, deployed and production-verified**. Earlier notes about pending deployment and attempted manual workflow dispatch are superseded; the browser UI dispatch attempt was not needed because the normal push workflow subsequently ran successfully.
- Latest verified main commit at this checkpoint: `0481a2115fe79bcacd4d59e6f092772d0be9c056`.
- Source-attribution estimate: 77 lessons total, 9 with dedicated sources, 68 remaining; refresh the full inventory before using this estimate as a final count.


## PR #23 — Grade 6 Mixed Numbers source and accuracy review (4 November 2026)

- Opened PR [#23](https://github.com/com-orgs/learnora/pull/23) on branch `seo/grade6-mixed-numbers-sources-2026-11-04`.
- Added a learner-facing Sources and Further Reading section to `math/grade-6/mixed-numbers-improper-fractions.html`; no new URL, sitemap, quiz, worksheet, analytics, advertising or SEO metadata change.
- Verified references: Manitoba Education Grade 6 outcome 6.N.4; Texas Instruments Education Grades 4–6 interactive mixed-numbers activity; The Open University OpenLearn conversion lesson. Text explicitly avoids claiming formal national-curriculum alignment.
- Independently checked all visible worked examples, comparison calculation, seven practice answers, worksheet answer key and five quiz answer mappings; no arithmetic/key mismatch found.
- Cloudflare branch preview deployed successfully at `https://seo-grade6-mixed-numbers-sou.learnora-ab2.pages.dev`. Fresh preview fetch confirmed the new source section, all three outbound URLs, lesson title, production self-canonical, and `index,follow`; homepage also fetched successfully. No source/metadata regression detected.
- The first GitHub push-triggered audit run [#41822873836](https://github.com/com-orgs/learnora/actions/runs/41822873836) was cancelled during PR creation and did not complete QA. A normal checkpoint commit will trigger a fresh branch audit; do not merge until the full static/legal/header/browser QA is green.
- Firecrawl balance checked: 0 credits remaining. External reference verification used public source pages instead; no paid credits were spent.

### Next actions
1. Complete full preview QA for PR #23; inspect every job and resolve any failure before merge.
2. If green, merge PR #23, verify main deployment, then fetch production page and confirm all three references and canonical/robots metadata.
3. Refresh the 77-lesson source inventory after release; current estimate before PR #23 is 9/77 with dedicated source sections.
4. Continue with the next Grade 6 Maths lesson selected from the fraction keyword cluster, without claiming autocomplete suggestions are search-volume metrics.


## PR #23 — production release confirmed (4 November 2026)

- PR [#23](https://github.com/com-orgs/learnora/pull/23) was merged successfully as `dd08771c2f672cc71c464d1793e34e8f8588c3f1`.
- Full Learnora Site Audit run [#41823111786](https://github.com/com-orgs/learnora/actions/runs/41823111786) completed successfully. Static audit, legal/pre-monetisation audit, exact Cloudflare preview headers/assets, and full mobile/desktop/quiz browser checks all passed. The CI status refresh step was skipped; the audit job itself concluded success.
- A fresh production fetch of `https://learnora-ab2.pages.dev/math/grade-6/mixed-numbers-improper-fractions` confirms the new Sources and Further Reading section and all three outbound references: Manitoba Education, Texas Instruments Education, and The Open University OpenLearn.
- Production metadata verified: expected title and description, self-canonical, `index,follow`; homepage also fetched successfully. No fetch errors. PR #23 is **merged and production content verified**.
- The earlier PR #23 note saying “do not merge until QA is green” is superseded by the successful QA and merge above.
- Source count remains provisional at 10/77 if the prior 9/77 estimate is accurate; perform the full 77-lesson inventory before treating any count as definitive.

### Next actions
1. Refresh source-attribution inventory across all 77 lessons using repository content, counting actual unique pages with relevant source sections.
2. Select the next Grade 6 Maths lesson from the researched fraction keyword cluster, verify mathematical examples and references, and use a separate preview PR.
3. On the next Pakistan calendar day, inspect GSC indexing history before using the daily 10-unique-URL operational cap; do not duplicate earlier inspections.
4. Keep search-volume, ranking and traffic claims strictly evidence-based.


## Source inventory refresh and PR #25 checkpoint — 4 November 2026

- Re-audited all **77 educational lesson HTML files** across Maths, English, Science, Computer Science, AI Literacy and Financial Literacy using the current repository tree and live lesson heading/link extraction.
- **10 of 77 lessons** currently have a dedicated “Sources and Further Reading” section; **67 lessons** do not. This supersedes the earlier provisional 9/77 and 10/77 estimates. This is a structural inventory, not a judgment that every lesson without a dedicated section lacks citations elsewhere.
- Source-section pages found: Grade 6 Understanding Fractions, Equivalent Fractions, Mixed Numbers and Improper Fractions; Grade 8 Linear Equations and Inequalities, Probability Models and Compound Events, Pythagorean Theorem; English Argument Writing, Text Structure and Author’s Purpose; Science Weather, Climate and Water Cycle, and Grade 8 Earth Resources/Sustainability.
- Opened PR [#25](https://github.com/com-orgs/learnora/pull/25), branch `seo/grade6-adding-subtracting-fractions-sources-2026-11-04`.
- Added OpenStax Prealgebra 2e sections 4.4 and 4.5, plus the Math Learning Center Bridges Intervention fraction resource, to `math/grade-6/adding-subtracting-fractions.html`.
- Corrected an academic visual defect: the unlike-denominator example previously displayed `1/3 = 4/12 + 3/12 = 7/12`, omitting the original `1/4) term and using an incorrect equality chain. It now explicitly shows `1/3 + 1/4 = 4/12 + 3/12 = 7/12`.
- Rechecked all worked examples, eight practice answer mappings, five quiz keys/explanations and eight worksheet answer keys; arithmetic is consistent. Quiz script and answer mapping are unchanged.
- Cloudflare preview deployed successfully at `https://seo-grade6-adding-subtractin.learnora-ab2.pages.dev` (commit `55cc487`). Full site audit must pass before merge; PR #25 is not merged.
- External source verification: OpenStax covers common and unlike denominators; Math Learning Center provides fraction-bar models and strategies for adding/subtracting with like and unlike denominators. No Firecrawl credits or paid services used.

### Next actions
1. Trigger and complete the full Learnora Site Audit for PR #25; verify static, legal, preview headers/assets and browser checks.
2. If all checks pass, merge PR #25, verify Cloudflare production deployment and fetch the live page.
3. Continue the source/accuracy backlog in Grade 6 Maths, prioritising the remaining fraction cluster and checking every page before edits.
4. Review GSC indexing history before any new inspections; avoid duplicate URL checks and respect the 10-unique-URL operational cap.


## PR #25 — production release and verification (4 November 2026)

- PR [#25](https://github.com/com-orgs/learnora/pull/25) was merged successfully using squash merge. Merge commit: `5fb3e5363faefe31a6d1a2999fd33f2e3f8fd3e7`.
- Both full preview audit runs [#41845431748](https://github.com/com-orgs/learnora/actions/runs/41845431748) and [#41845422303](https://github.com/com-orgs/learnora/actions/runs/41845422303) completed successfully. Static website audit, legal/pre-monetisation checks, exact Cloudflare preview resolution, preview headers/assets, Playwright/Chromium setup, and mobile/desktop/quiz browser checks all passed.
- Main-branch static/legal audit [#41848054905](https://github.com/com-orgs/learnora/actions/runs/41848054905) completed successfully. Cloudflare Pages production deployment [#41848054871](https://github.com/com-orgs/learnora/actions/runs/41848054871) completed successfully; the pre-deployment content verification and Cloudflare deploy step passed.
- Fresh production fetch of `https://learnora-ab2.pages.dev/math/grade-6/adding-subtracting-fractions` confirms the lesson is live with the corrected unlike-denominator worked example: `1/3 + 1/4 = 4/12 + 3/12 = 7/12`. It also confirms all three expected outbound references (OpenStax common denominators, OpenStax different denominators, and Math Learning Center Bridges Intervention).
- Production metadata verified: title “Adding and Subtracting Fractions | Learnora”, production self-canonical, `index,follow`, expected Open Graph URL and description. Homepage fetch also succeeded. No fetch errors.
- The lesson's quiz, worksheet and scripts were preserved; preview QA passed the full existing site browser checks. No sitemap or URL change was made.
- Source-attribution inventory remains **10 of 77 lessons** with a dedicated “Sources and Further Reading” section (67 without a dedicated section). This is a structural count, not a claim that all other pages lack citations elsewhere.
- Indexing guardrail: no additional GSC URL inspections or duplicate Bing/IndexNow submissions on 4 November. On the next Pakistan calendar day, inspect indexing history before using any remaining daily allowance; keep the 10-unique-URL operational cap.

### Current next actions
1. Continue the Grade 6 Maths source-attribution and academic accuracy backlog, prioritising the remaining fraction cluster. Each lesson must receive independent math/key review, relevant sources, an isolated preview, and full browser QA before merge.
2. Refresh and reconcile the 77-lesson source inventory after each batch; do not treat the absence of a dedicated source section as proof that a page has no citations.
3. Monitor GSC/Bing discovery using deduplicated history and evidence-based reporting; do not claim traffic, rankings or indexing without current data.
4. Review the existing GitHub Actions duplicate-trigger behaviour for `seo/**` branches and improve it only in a separate safe workflow change; current PR #25 duplicate audit runs both passed.


## PR #26 — Grade 6 Multiplying and Dividing Fractions source review (4 November 2026)

- Opened work on branch `seo/grade6-multiplying-dividing-fractions-sources-2026-11-04` for `math/grade-6/multiplying-dividing-fractions.html`.
- Added three relevant learning references: OpenStax Prealgebra 2e section 4.2; Illustrative Mathematics Grade 6 standard 6.NS.A.1; and Khan Academy's conceptual explanation of fraction division using number lines.
- Added a precision note that zero has no reciprocal and division by zero is undefined.
- Academic review checked the worked examples, eight practice answer mappings, five quiz answer keys/explanations, eight worksheet answer keys, and quiz script. Arithmetic and answer mappings were consistent; no quiz-key changes were needed.
- Existing title, description, canonical, robots directive, internal navigation, quiz, worksheet, print action, scripts and sitemap are preserved. External links use `target="_blank"` and `rel="noopener noreferrer"`; curriculum-neutral disclaimer retained.
- Source inventory baseline remains 10/77 lessons with a dedicated Sources and Further Reading section before this PR; the PR adds one more only if merged.
- Full preview/static/legal/browser QA is required before merge. Production must remain unchanged until all checks pass.

### Next actions
1. Create the PR, verify the exact Cloudflare branch preview, and complete full Learnora Site Audit (static, legal, headers/assets, mobile/desktop and quiz browser checks).
2. Merge only if all required checks pass; then verify the main deployment and live production lesson, sources, canonical and robots metadata.
3. Continue the remaining Grade 6 Maths source/accuracy backlog in isolated, fully tested batches.


## PR #26 — merged; production deployment pending verification (4 November 2026)

- PR [#26](https://github.com/com-orgs/learnora/pull/26) merged successfully; squash merge commit `983a50ce6cdc0ea54735679b7fe8d3b7793c6902`.
- Full preview audit run [#41848440731](https://github.com/com-orgs/learnora/actions/runs/41848440731) completed successfully. Static website audit, legal/pre-monetisation audit, exact Cloudflare preview resolution, preview headers/assets, Playwright/Chromium setup, and full mobile/desktop/quiz browser checks passed.
- Exact Cloudflare preview verified: three references (OpenStax 4.2; Illustrative Mathematics 6.NS.A.1; Khan Academy conceptual division explanation), zero-reciprocal note, expected title, production self-canonical, `index,follow`, and homepage availability.
- Merge created commit `983a50ce6cdc0ea54735679b7fe8d3b7793c6902`, but the latest observed main-branch deployment/audit runs still corresponded to the preceding main SHA `9813207fead92358ae47cb1c7010380d11945a27`. A fresh production fetch also showed the old lesson without the new references/note. Therefore PR #26 is merged but **not yet confirmed deployed**.
- Trigger a normal docs-only main checkpoint to start deployment; then verify the main deployment workflow and fetch production again. Do not claim release until the production page contains all expected changes.
- Source inventory baseline is 10/77 dedicated source sections; increment to 11/77 only after the live production release is confirmed.

### Next actions
1. Confirm the docs checkpoint triggers Cloudflare deployment and site audit for the merged main tree.
2. Verify production lesson contains the zero-reciprocal note and all three links, with correct canonical and robots metadata; verify homepage.
3. After confirmation, record PR #26 as live and update inventory to 11/77.
4. Continue the Grade 6 Maths source/accuracy backlog only after deployment verification.


## PR #26 — production release confirmed (4 November 2026)

- Main-branch deployment for merge commit `983a50ce6cdc0ea54735679b7fe8d3b7793c6902` completed successfully in [Cloudflare deployment run #41858083620](https://github.com/com-orgs/learnora/actions/runs/41858083620). The main static/legal audit [#41858083987](https://github.com/com-orgs/learnora/actions/runs/41858083987) also passed.
- Fresh production fetch confirms `https://learnora-ab2.pages.dev/math/grade-6/multiplying-dividing-fractions` now includes the zero-reciprocal clarification and all three outbound references: OpenStax Prealgebra 2e 4.2, Illustrative Mathematics 6.NS.A.1, and Khan Academy conceptual fraction division.
- Production title, self-canonical, `index,follow`, Open Graph URL/description and homepage fetch verified. No fetch errors.
- PR #26 preview browser audit [#41848440731](https://github.com/com-orgs/learnora/actions/runs/41848440731) passed all checks, including mobile/desktop, quizzes, retakes, print actions and performance/resource checks.
- Dedicated “Sources and Further Reading” inventory is now **11 of 77 lessons** (66 without a dedicated section). This remains a structural count, not proof that the other pages have no citations elsewhere.
- PR #26 is fully merged and live. No further action required for this release.

### Current next actions
1. Continue Grade 6 Maths cluster review with the next lesson that benefits from authoritative references and academic verification; avoid adding links without lesson-specific relevance.
2. Preserve preview-first QA and no-merge-before-green policy.
3. Keep GSC URL inspection within the 10-unique-URL daily cap; dedupe Bing/IndexNow and report only verified indexing/performance evidence.
4. Review duplicate `seo/**` workflow triggers separately, without weakening required QA.


## PR #28 — Grade 6 Comparing and Ordering Fractions (4 November 2026)

- PR [#28](https://github.com/com-orgs/learnora/pull/28) was created from the current `main` branch after the older PR #24 branch had diverged; PR #24 was closed unmerged as superseded.
- Added only a curriculum-neutral “Sources and Further Reading” section to `math/grade-6/comparing-ordering-fractions.html`, with UK Department for Education/NCETM Year 6 guidance, Khan Academy Class 6 Mathematics, and Illustrative Mathematics Lesson 15 on common denominators. Existing worked examples, practice, quiz, worksheet, metadata, URL and sitemap were preserved.
- Fresh Cloudflare PR preview verified the lesson and homepage, all three source links, production self-canonical, `index,follow`, and Open Graph metadata.
- Full preview QA run [#41878776095](https://github.com/com-orgs/learnora/actions/runs/41878776095) completed successfully: static website audit, legal/pre-monetisation audit, exact preview resolution, preview headers/assets, Playwright/Chromium and mobile/desktop/quiz browser checks all passed. Tracker refresh step was skipped; the audit job itself concluded success.
- PR #28 was squash-merged successfully as `965fc13523a93731df409e0fe8c6b5b4d607ed18`. Merge was performed against the exact QA-tested head SHA `5d9b4b464ffc0ba5b1c43b945e3aa9c3e906da47`.
- Main currently points to the merge commit. The observed latest main deployment/audit runs still target the preceding SHA `8b6eba6c4d5d8047ac6b3408078ed76741bb0f7e`; production release of PR #28 is therefore **pending verification**. A normal documentation checkpoint is being used to trigger the existing main workflows; verify deployment and production fetch before marking this change live.
- No GSC URL inspections, duplicate Bing submissions or IndexNow resubmissions were performed as part of this task.

### Next actions
1. Confirm main Cloudflare deployment and static/legal audit for the PR #28 tree.
2. Fetch the production lesson and verify all three references, expected title, self-canonical, `index,follow`, and homepage availability.
3. Refresh the dedicated source-section inventory across all 77 lesson files before updating the count; do not infer the count from the historical tracker.
4. Continue the Grade 6 Maths source/accuracy backlog only after release verification.


### PR #28 — production content verification complete (4 November 2026)
- Fresh production fetch of `https://learnora-ab2.pages.dev/math/grade-6/comparing-ordering-fractions` confirms the Sources and Further Reading section is live with all three expected outbound links: UK Department for Education/NCETM Year 6 guidance, Khan Academy Class 6 Mathematics, and Illustrative Mathematics Lesson 15.
- Production metadata verified: expected title and description, self-canonical, `index,follow`, and matching Open Graph URL/title/description. Production homepage also fetched successfully.
- This direct production fetch confirms the PR #28 content is live. The GitHub Actions run listing had not yet exposed a new main deployment run at the time of verification; do not invent a deployment run ID. Production content verification is the evidence of release.
- PR #28 is now **merged and production-content verified**. No GSC inspection or duplicate IndexNow/Bing submission was performed.
- Source inventory count remains to be refreshed across all 77 lesson HTML files before any revised total is stated.



## Daily indexing & discovery — 5 November 2026 (08:21–08:27 PKT)

### Source snapshot
- Read current `PROJECT_STATUS.md` on `main` (blob before this update: `75a2a59db04697767bae308264acc52e708b1094`) and the master roadmap on `main` (blob before this update: `d66c889d84bc9ca300a7dc0e2eb3aaa5f380ff52`).
- Latest production code commit recorded by the status file: `271ca6c89f26c5a562c180f758dcb0f5bb34c535`; later main HEAD `2e96dc638b96733174ce7c95e8ffa9c893f11ece` is a documentation checkpoint.
- Live sitemap fetched at `https://learnora-ab2.pages.dev/sitemap.xml`: HTTP 200, 104 URLs, 104 unique, all on `learnora-ab2.pages.dev`, zero duplicate entries.
- Firecrawl credit balance was 0 after the sitemap fetch. Direct web page opens were inaccessible, and the connected Browser tab list returned “Browser access requires the originating browser context.” Therefore page-level live canonical/robots/fetch verification was not repeated in this run; see limitations below.

### Google Search Console — strict Pakistan-date guard
- Full tracker read: 104/104 URLs. Current tracker summary: 1 indexed, 103 not indexed / “URL is unknown to Google”, 0 pending, 0 errors, 0 warnings. Only 1 URL has a recorded crawl; 103 have no crawl time. Latest tracker timestamp: `2026-11-05T03:18:43.202Z` = 08:18:43 PKT.
- Full URL Inspection history read: 67 rows, 41 distinct URLs; newest `2026-11-04T02:45:34.013Z`, oldest `2026-11-02T17:07:05.847Z`. Same-day 5 Nov history rows: **0**.
- Pakistan-date union before any inspection: **31 distinct URLs** (31 tracker lastCheckAt + 0 history rows), which exceeds the project cap of 10 by **21**. Remaining cap: 0. **No inspect_url, bulk_inspect_urls, or check_tracked_url_now call was made by this run.** No additional inspection is allowed on 5 Nov.
- The 31 tracker URLs already checked by the hourly background process (timestamps are UTC; all convert to 5 Nov PKT):
- `https://learnora-ab2.pages.dev/curriculum/grade-6-8-maths-study-plan` — `03:14:19.244Z` UTC
- `https://learnora-ab2.pages.dev/computer-science/` — `02:59:09.685Z` UTC
- `https://learnora-ab2.pages.dev/english/grade-6-8/argument-writing-claims-reasons-evidence` — `03:06:27.736Z` UTC
- `https://learnora-ab2.pages.dev/financial-literacy/` — `03:18:43.202Z` UTC
- `https://learnora-ab2.pages.dev/worksheets/international-middle-school-maths` — `03:07:28.904Z` UTC
- `https://learnora-ab2.pages.dev/curriculum/us-common-core-math` — `23:46:15.878Z (4 Nov UTC)` UTC
- `https://learnora-ab2.pages.dev/terms` — `22:50:57.377Z (4 Nov UTC)` UTC
- `https://learnora-ab2.pages.dev/math/grade-6/perimeter-area-shapes` — `02:33:11.276Z` UTC
- `https://learnora-ab2.pages.dev/math/grade-7/area-surface-area-volume` — `22:09:10.102Z (4 Nov UTC)` UTC
- `https://learnora-ab2.pages.dev/math/grade-6/equivalent-fractions` — `23:17:16.586Z (4 Nov UTC)` UTC
- `https://learnora-ab2.pages.dev/math/grade-7/equations-and-inequalities` — `22:07:26.971Z (4 Nov UTC)` UTC
- `https://learnora-ab2.pages.dev/math/grade-6/adding-subtracting-fractions` — `23:53:28.853Z (4 Nov UTC)` UTC
- `https://learnora-ab2.pages.dev/privacy-policy` — `22:15:14.208Z (4 Nov UTC)` UTC
- `https://learnora-ab2.pages.dev/math/grade-7/adding-subtracting-integers` — `19:49:17.679Z (4 Nov UTC)` UTC
- `https://learnora-ab2.pages.dev/math/grade-6/multiplying-dividing-decimals` — `02:28:27.604Z` UTC
- `https://learnora-ab2.pages.dev/math/grade-6/introduction-to-ratios` — `00:17:14.274Z` UTC
- `https://learnora-ab2.pages.dev/math/grade-6/metric-units-and-conversions` — `03:07:03.515Z` UTC
- `https://learnora-ab2.pages.dev/math/grade-6/percentage-increase-decrease` — `02:11:19.013Z` UTC
- `https://learnora-ab2.pages.dev/math/grade-7/rational-numbers-and-operations` — `20:54:23.307Z (4 Nov UTC)` UTC
- `https://learnora-ab2.pages.dev/math/grade-6/comparing-ordering-fractions` — `23:31:30.171Z (4 Nov UTC)` UTC
- `https://learnora-ab2.pages.dev/math/grade-6/understanding-decimals` — `01:02:07.124Z` UTC
- `https://learnora-ab2.pages.dev/math/grade-6/understanding-percentages` — `02:01:54.470Z` UTC
- `https://learnora-ab2.pages.dev/math/grade-6/multiplying-dividing-fractions` — `00:23:31.844Z` UTC
- `https://learnora-ab2.pages.dev/math/grade-6/adding-subtracting-decimals` — `01:24:02.242Z` UTC
- `https://learnora-ab2.pages.dev/math/grade-6/mixed-numbers-improper-fractions` — `00:38:14.749Z` UTC
- `https://learnora-ab2.pages.dev/about` — `22:26:05.112Z (4 Nov UTC)` UTC
- `https://learnora-ab2.pages.dev/math/grade-7/geometry-angles-scale-drawings` — `21:24:57.873Z (4 Nov UTC)` UTC
- `https://learnora-ab2.pages.dev/math/grade-7/ratios-rates-proportional-relationships` — `20:11:05.107Z (4 Nov UTC)` UTC
- `https://learnora-ab2.pages.dev/math/grade-6/volume-of-3d-shapes` — `03:10:23.463Z` UTC
- `https://learnora-ab2.pages.dev/math/grade-7/simplifying-algebraic-expressions` — `20:15:28.580Z (4 Nov UTC)` UTC
- `https://learnora-ab2.pages.dev/science/` — `19:05:53.770Z (4 Nov UTC)` UTC
- Historical repeated URL Inspection records (not duplicates today): 15 URLs / 26 extra rows:
- `https://learnora-ab2.pages.dev/math/grade-6/` — 5 history rows
- `https://learnora-ab2.pages.dev/math/grade-6/understanding-fractions` — 4 history rows
- `https://learnora-ab2.pages.dev/ai-literacy/` — 3 history rows
- `https://learnora-ab2.pages.dev/` — 6 history rows
- `https://learnora-ab2.pages.dev/financial-literacy/` — 2 history rows
- `https://learnora-ab2.pages.dev/science/` — 2 history rows
- `https://learnora-ab2.pages.dev/english/` — 2 history rows
- `https://learnora-ab2.pages.dev/computer-science/` — 2 history rows
- `https://learnora-ab2.pages.dev/curriculum/us-common-core-math` — 3 history rows
- `https://learnora-ab2.pages.dev/curriculum/` — 2 history rows
- `https://learnora-ab2.pages.dev/english/grade-6-8/parts-of-speech` — 2 history rows
- `https://learnora-ab2.pages.dev/english/grade-6-8/parts-of-speech.html` — 2 history rows
- `https://learnora-ab2.pages.dev/math/grade-8/linear-equations-and-inequalities.html` — 2 history rows
- `https://learnora-ab2.pages.dev/science/grade-7/introduction-to-cells.html` — 2 history rows
- `https://learnora-ab2.pages.dev/math/grade-6/understanding-fractions.html` — 2 history rows
- Tracker is active; the connected connector exposes no pause/throttle control for its hourly background checks. This background process has already exceeded the project's daily cap. Platform quota is 16/2,000 used (1,984 remaining), but the stricter project cap controls.
- Google sitemap: `https://learnora-ab2.pages.dev/sitemap.xml`, last submitted `2026-11-03T15:07:21.300Z`, pending=true, warnings=0, errors=0.
- Sitemap performance for settled range 6 Oct–2 Nov 2026: 104 URLs scanned without truncation; 1 URL received an impression (homepage: 1 impression, 0 clicks, reported average position 77). This is search-performance evidence only, not a count of indexed pages.
- GSC tracker’s 103 “URL is unknown to Google” states and missing crawl times indicate a discovery/crawl backlog, not proof of a robots/noindex/canonical defect. For these 103 rows, inspection fields do not establish a specific crawl blocker.
- No authenticated interactive Search Console UI control was available through the connected browser context. **No manual Request Indexing request was submitted.** The API inspection/history is not a manual-request history. Owner candidates (all pending/unknown and not checked by the tracker on 5 Nov; skip any already manually requested):
1. `https://learnora-ab2.pages.dev/math/grade-6/`
2. `https://learnora-ab2.pages.dev/math/grade-7/`
3. `https://learnora-ab2.pages.dev/math/grade-8/`
4. `https://learnora-ab2.pages.dev/english/`
5. `https://learnora-ab2.pages.dev/curriculum/`
6. `https://learnora-ab2.pages.dev/science/grade-8/`
7. `https://learnora-ab2.pages.dev/math/grade-6/understanding-fractions`
8. `https://learnora-ab2.pages.dev/math/grade-6/solving-one-step-equations`
9. `https://learnora-ab2.pages.dev/math/grade-6/rates-and-proportions`
10. `https://learnora-ab2.pages.dev/math/grade-6/factors-multiples-hcf-lcm`

### Bing Webmaster and IndexNow
- Bing property `https://learnora-ab2.pages.dev/` is verified.
- Bing sitemap feed: Success; 104 URLs; submitted and last crawled 3 Nov 2026. Crawl issues: 0 URLs. Crawl-stat and traffic endpoints returned no dated rows / no latest data date; do not interpret missing rows as zero crawling. Traffic totals currently returned 0 clicks and 0 impressions, but no dated series is available.
- Bing connector quota limits: 100 URLs/day and 2,600/month. No direct Bing Webmaster URL Submission action exists in the connected tools; IndexNow is the available notification route.
- IndexNow settings before submission: API key configured (masked `****5d92`); key file verified/reachable. Previous full history: 296 rows, 104 unique URLs; all 104 current sitemap URLs were already present. Last previous batch timestamp: `2026-11-03T15:07:18.854533Z`.
- GitHub main commit history since that last IndexNow update was compared with the current 104-URL sitemap. 42 unique sitemap URLs had material HTML/content/metadata/structured-data changes after their last submission; all 42 were eligible. No new sitemap URLs existed. The 62 remaining sitemap URLs had no material HTML changes after the last submission and were deliberately skipped (exact list below).
- IndexNow batch `9bfc98cf-5d2d-432a-ae38-04bfd64e7047`: **42/42 accepted**, 0 failed, all HTTP 200 “submitted, key validated”, timestamp `2026-11-05T03:26:52.03061Z` (08:26:52 PKT). This is accepted notification, not proof of indexing.
- Full IndexNow history after submission: 338 rows, 104 unique URLs, 103 URLs with repeats / 234 repeat rows; 264 HTTP 200 and 74 HTTP 202. All 42 rows from today are HTTP 200. HTTP 202 in older history means accepted pending key validation; neither 200 nor 202 proves indexing.
- Exact 42 URLs submitted today:
1. `https://learnora-ab2.pages.dev/math/grade-6/introduction-to-ratios`
2. `https://learnora-ab2.pages.dev/math/grade-6/adding-subtracting-decimals`
3. `https://learnora-ab2.pages.dev/math/grade-6/adding-subtracting-fractions`
4. `https://learnora-ab2.pages.dev/math/grade-6/algebraic-expressions`
5. `https://learnora-ab2.pages.dev/math/grade-6/angles-and-triangles`
6. `https://learnora-ab2.pages.dev/math/grade-6/comparing-ordering-fractions`
7. `https://learnora-ab2.pages.dev/math/grade-6/data-and-graphs`
8. `https://learnora-ab2.pages.dev/math/grade-6/equivalent-fractions`
9. `https://learnora-ab2.pages.dev/math/grade-6/factors-multiples-hcf-lcm`
10. `https://learnora-ab2.pages.dev/math/grade-6/integers-number-line`
11. `https://learnora-ab2.pages.dev/math/grade-6/metric-units-and-conversions`
12. `https://learnora-ab2.pages.dev/math/grade-6/mixed-numbers-improper-fractions`
13. `https://learnora-ab2.pages.dev/math/grade-6/multiplying-dividing-decimals`
14. `https://learnora-ab2.pages.dev/math/grade-6/multiplying-dividing-fractions`
15. `https://learnora-ab2.pages.dev/math/grade-6/order-of-operations`
16. `https://learnora-ab2.pages.dev/math/grade-6/percentage-increase-decrease`
17. `https://learnora-ab2.pages.dev/math/grade-6/perimeter-area-shapes`
18. `https://learnora-ab2.pages.dev/math/grade-6/rates-and-proportions`
19. `https://learnora-ab2.pages.dev/math/grade-6/solving-one-step-equations`
20. `https://learnora-ab2.pages.dev/math/grade-6/understanding-decimals`
21. `https://learnora-ab2.pages.dev/math/grade-6/understanding-fractions`
22. `https://learnora-ab2.pages.dev/math/grade-6/understanding-percentages`
23. `https://learnora-ab2.pages.dev/math/grade-6/volume-of-3d-shapes`
24. `https://learnora-ab2.pages.dev/science/grade-8/`
25. `https://learnora-ab2.pages.dev/ai-literacy/ai-safety`
26. `https://learnora-ab2.pages.dev/ai-literacy/how-ai-works`
27. `https://learnora-ab2.pages.dev/ai-literacy/verify-ai`
28. `https://learnora-ab2.pages.dev/computer-science/algorithms`
29. `https://learnora-ab2.pages.dev/computer-science/html-css`
30. `https://learnora-ab2.pages.dev/computer-science/python-basics`
31. `https://learnora-ab2.pages.dev/curriculum/grade-6-8-maths-study-plan`
32. `https://learnora-ab2.pages.dev/curriculum/international-english-guide`
33. `https://learnora-ab2.pages.dev/curriculum/international-science-guide`
34. `https://learnora-ab2.pages.dev/english/grade-6-8/argument-writing-claims-reasons-evidence`
35. `https://learnora-ab2.pages.dev/english/grade-6-8/text-structure-authors-purpose`
36. `https://learnora-ab2.pages.dev/financial-literacy/budgeting`
37. `https://learnora-ab2.pages.dev/financial-literacy/savings-interest`
38. `https://learnora-ab2.pages.dev/financial-literacy/unit-prices`
39. `https://learnora-ab2.pages.dev/science/grade-7/weather-climate-water-cycle`
40. `https://learnora-ab2.pages.dev/science/grade-8/earth-resources-sustainability-human-impact`
41. `https://learnora-ab2.pages.dev/worksheets/international-english-science-practice`
42. `https://learnora-ab2.pages.dev/worksheets/international-middle-school-maths`
- Exact 62 existing sitemap URLs skipped because they had no material change after their last submission:
1. `https://learnora-ab2.pages.dev/`
2. `https://learnora-ab2.pages.dev/math/grade-6/`
3. `https://learnora-ab2.pages.dev/math/grade-7/`
4. `https://learnora-ab2.pages.dev/math/grade-7/two-step-equations`
5. `https://learnora-ab2.pages.dev/math/grade-7/adding-subtracting-integers`
6. `https://learnora-ab2.pages.dev/math/grade-7/simplifying-algebraic-expressions`
7. `https://learnora-ab2.pages.dev/math/grade-7/ratios-rates-proportional-relationships`
8. `https://learnora-ab2.pages.dev/math/grade-7/rational-numbers-and-operations`
9. `https://learnora-ab2.pages.dev/math/grade-7/equations-and-inequalities`
10. `https://learnora-ab2.pages.dev/math/grade-7/geometry-angles-scale-drawings`
11. `https://learnora-ab2.pages.dev/math/grade-7/area-surface-area-volume`
12. `https://learnora-ab2.pages.dev/privacy-policy`
13. `https://learnora-ab2.pages.dev/about`
14. `https://learnora-ab2.pages.dev/terms`
15. `https://learnora-ab2.pages.dev/english/grade-6-8/parts-of-speech`
16. `https://learnora-ab2.pages.dev/science/grade-7/introduction-to-cells`
17. `https://learnora-ab2.pages.dev/math/grade-7/statistics-probability-data-interpretation`
18. `https://learnora-ab2.pages.dev/math/grade-7/transformations-and-symmetry`
19. `https://learnora-ab2.pages.dev/math/grade-7/coordinate-geometry`
20. `https://learnora-ab2.pages.dev/math/grade-7/fractions-decimals-and-percentages-in-problem-solving`
21. `https://learnora-ab2.pages.dev/math/grade-8/`
22. `https://learnora-ab2.pages.dev/math/grade-8/exponents-powers-and-scientific-notation`
23. `https://learnora-ab2.pages.dev/math/grade-8/linear-equations-and-inequalities`
24. `https://learnora-ab2.pages.dev/math/grade-8/pythagorean-theorem-and-right-triangles`
25. `https://learnora-ab2.pages.dev/math/grade-8/linear-functions-and-graphs`
26. `https://learnora-ab2.pages.dev/math/grade-8/systems-of-linear-equations`
27. `https://learnora-ab2.pages.dev/math/grade-8/transformations-congruence-and-similarity`
28. `https://learnora-ab2.pages.dev/math/grade-8/volume-of-cylinders-cones-and-spheres`
29. `https://learnora-ab2.pages.dev/math/grade-8/scatter-plots-and-data-relationships`
30. `https://learnora-ab2.pages.dev/math/grade-8/probability-models-and-compound-events`
31. `https://learnora-ab2.pages.dev/math/grade-8/square-roots-and-irrational-numbers`
32. `https://learnora-ab2.pages.dev/math/grade-8/angle-relationships-and-parallel-lines`
33. `https://learnora-ab2.pages.dev/english/`
34. `https://learnora-ab2.pages.dev/science/`
35. `https://learnora-ab2.pages.dev/contact`
36. `https://learnora-ab2.pages.dev/english/grade-6-8/sentence-types-and-structure`
37. `https://learnora-ab2.pages.dev/english/grade-6-8/verb-tenses-and-agreement`
38. `https://learnora-ab2.pages.dev/science/grade-7/forces-and-motion`
39. `https://learnora-ab2.pages.dev/science/grade-7/ecosystems-and-food-chains`
40. `https://learnora-ab2.pages.dev/english/grade-6-8/punctuation-and-capitalization`
41. `https://learnora-ab2.pages.dev/science/grade-7/states-of-matter-and-particle-model`
42. `https://learnora-ab2.pages.dev/science/grade-7/mixtures-and-separation-techniques`
43. `https://learnora-ab2.pages.dev/english/grade-6-8/reading-comprehension-main-idea-inference-evidence`
44. `https://learnora-ab2.pages.dev/science/grade-7/heat-transfer-conduction-convection-radiation`
45. `https://learnora-ab2.pages.dev/english/grade-6-8/paragraph-writing-topic-sentences-supporting-details`
46. `https://learnora-ab2.pages.dev/science/grade-8/elements-compounds-and-chemical-reactions`
47. `https://learnora-ab2.pages.dev/english/grade-6-8/vocabulary-context-clues-prefixes-suffixes-roots`
48. `https://learnora-ab2.pages.dev/science/grade-8/human-digestive-and-circulatory-systems`
49. `https://learnora-ab2.pages.dev/science/grade-8/electric-circuits-current-voltage-resistance`
50. `https://learnora-ab2.pages.dev/science/grade-8/waves-sound-and-light`
51. `https://learnora-ab2.pages.dev/science/grade-8/earth-moon-and-space-patterns`
52. `https://learnora-ab2.pages.dev/curriculum/`
53. `https://learnora-ab2.pages.dev/curriculum/us-common-core-math`
54. `https://learnora-ab2.pages.dev/curriculum/england-ks3-maths`
55. `https://learnora-ab2.pages.dev/curriculum/canada-ontario-math`
56. `https://learnora-ab2.pages.dev/curriculum/australia-year-7-8-maths`
57. `https://learnora-ab2.pages.dev/curriculum/uk-maths-curriculum`
58. `https://learnora-ab2.pages.dev/curriculum/canada-grade-6-8-math`
59. `https://learnora-ab2.pages.dev/editorial-policy`
60. `https://learnora-ab2.pages.dev/computer-science/`
61. `https://learnora-ab2.pages.dev/ai-literacy/`
62. `https://learnora-ab2.pages.dev/financial-literacy/`

### Internal links, sitemap, canonical, robots, fetch and content-quality blockers
- Sitemap inventory is clean: 104 unique same-host URLs, no duplicates. Google processing remains pending (0 warnings/errors); Bing feed is Success.
- Grade 8 Science hub’s previously missing link to the Earth Resources lesson was fixed in PR #20, merged and production-verified in the master roadmap. No unresolved internal-link blocker is recorded in the latest repository evidence.
- Repository `robots.txt` on main allows all user agents, explicitly allows OAI-SearchBot and declares the sitemap. The last live robots check recorded on 4 Nov returned HTTP 200. A fresh live robots fetch was unavailable this run (Firecrawl credits 0 / Browser context unavailable).
- Latest known on-page audit (4 Nov status) covered 104/104 sitemap URLs with 0 critical/high/medium findings and 159 low-severity findings; a 25-page Grade 6 audit returned HTTP 200/indexable with zero findings. PR #37 production verification confirmed self-canonical and `index,follow` on the ratios lesson. These are previous verified results, not a fresh full live-page crawl today.
- No known canonical/noindex/fetch defect is established by the current GSC data. 103 URLs are unknown to Google with no crawl timestamp; that is the main discovery bottleneck.
- Dedicated Sources/Further Reading inventory was 11/77 after PR #26. Four later source additions (Comparing Fractions, Understanding Decimals, Adding/Subtracting Decimals, Introduction to Ratios) make a **provisional** 15/77 estimate (62 without a dedicated section); re-count all lesson files before treating this as an exact inventory. Independent subject-expert review remains outstanding.
- GA4/Google Tag and AdSense remain disabled pending child/mixed-audience privacy, consent/CMP, publisher ID and ads.txt account gates.

### Next actions
1. Do not run any further GSC inspections on 5 Nov; the project cap is already exceeded by 21 through tracker background checks.
2. Owner should locate and pause/reduce the GSC Wizard hourly tracker cron in its UI if such a control is available; the connected connector itself exposes no pause/throttle action.
3. If using manual Request Indexing, review the 10 candidates above and skip any already requested manually; no such requests were submitted by this run.
4. Continue source attribution and factual verification in small preview-only batches; refresh the 77-lesson source inventory before updating the count.
5. Re-run page-level live robots/canonical/fetch checks when Firecrawl credits or the originating browser context are available. Keep production code unchanged until preview QA passes.
6. Continue IndexNow only for new/materially changed URLs; never resubmit the 62 unchanged URLs listed above.



## Phase 14 preview-only QA batch — Grade 6 fractions (5 Nov 2026)

- Review scope: repository HTML and linked quiz JavaScript for five Grade 6 lessons: Understanding Fractions; Comparing and Ordering Fractions; Adding and Subtracting Fractions; Equivalent Fractions; Mixed Numbers and Improper Fractions.
- Quiz consistency: **25/25** quiz answer-key mappings matched the visible question and selected option text (5 questions per lesson). This is a source-code consistency check, not a live browser interaction test and not a complete mathematical proof of every practice answer.
- Learner-facing reference sections: all 5 sampled pages contain a dedicated Sources and Further Reading section. This sample demonstrates that the prior provisional site-wide source-section estimate must not be treated as a fresh exact count; the full 77-lesson inventory remains to be re-counted before changing the total.
- External reference spot-check: OpenStax Prealgebra 2e sections 4.1 (Visualize Fractions), 4.4 (Add/Subtract with Common Denominators) and 4.5 (Add/Subtract with Different Denominators) were reachable; the Illustrative Mathematics “Lesson 15: Common Denominators to Compare” PDF was reachable and its stated learning goal matches the comparing-fractions lesson topic. These references support the relevant mathematical methods, not independent review of Learnora's complete lesson text.
- Source URLs checked: https://openstax.org/books/prealgebra-2e/pages/4-1-visualize-fractions ; https://openstax.org/books/prealgebra-2e/pages/4-4-add-and-subtract-fractions-with-common-denominators ; https://openstax.org/books/prealgebra-2e/pages/4-5-add-and-subtract-fractions-with-different-denominators ; https://cms-assets.illustrativemathematics.org/010c7ikte3p5qryp8ttfwdzaobvi
- No HTML, quiz script, production code, metadata or live content was changed. No deployment was performed. This was repository-source inspection only; no fresh live page fetch or browser QA was claimed.
- GSC daily guard remains in force for 5 Nov: tracker is active, 104 URLs are tracked, latest tracker timestamp returned 2026-11-05T03:36:29.347Z, and no pause/throttle action is exposed by the connected GSC Wizard tools. No GSC inspection was run in this QA batch.
- Next: re-count source sections across all 77 lesson HTML files; then continue with Grade 6 maths worked-example/practice-answer verification in small batches. Obtain genuine independent educator review before claiming expert endorsement.


## Additional Grade 6 preview QA — 5 Nov 2026

- Added four Grade 6 lessons to the source-code QA sample: Algebraic Expressions, Integers and the Number Line, Order of Operations, and Understanding Percentages.
- Quiz key consistency: 20/20 mappings matched the visible answer-choice letters/text across these four lessons (5 each). This is a source-code consistency check only, not a full proof of all worked examples or a live browser test.
- Dedicated Sources/References/Further Reading heading: present on Understanding Percentages; not found on Algebraic Expressions, Integers and the Number Line, or Order of Operations. These three pages need source-attribution review before content changes.
- Combined sample so far: 9 Grade 6 lesson pages inspected; 45/45 quiz answer-key mappings matched; 6/9 pages have a dedicated source heading, 3/9 do not. This is a targeted sample, not the complete 77-lesson site inventory.
- Files inspected in this batch: `math/grade-6/algebraic-expressions.html`, `scripts/pages/math-grade-6-algebraic-expressions.js`, `math/grade-6/integers-number-line.html`, `scripts/pages/math-grade-6-integers-number-line.js`, `math/grade-6/order-of-operations.html`, `scripts/pages/math-grade-6-order-of-operations.js`, `math/grade-6/understanding-percentages.html`, `scripts/pages/math-grade-6-understanding-percentages.js`.
- No production files, metadata, HTML, or scripts changed; no deployment. Firecrawl current balance checked and returned 0 credits, so no paid crawl/scrape was initiated. Repository source inspection only.
- GSC daily inspection restriction remains unchanged: no URL Inspection API call or manual Request Indexing request made.
- Next: add reliable age-appropriate references to the three flagged pages only after checking exact claims and reference suitability; then test their worked examples and worksheet keys. Do not mass-edit or deploy without preview QA.


## Algebraic Expressions source and concept QA — 5 Nov 2026

- Reviewed `math/grade-6/algebraic-expressions.html` and its quiz script. Checked lesson explanations, worked examples, all 8 practice answers, all 7 worksheet answers, and the 5 visible quiz-answer mappings; reviewed calculations and answer mappings are consistent.
- Clarified the like-terms definition to require the same variable part and exponents, and noted that constants are also like terms.
- Added two relevant OpenStax Prealgebra 2e references: sections 2.1 (Use the Language of Algebra) and 2.2 (Evaluate, Simplify, and Translate Expressions). Source links were checked through current web search.
- Proposed change is isolated to branch `qa/grade6-algebraic-expressions-sources`; Draft PR #40: https://github.com/com-orgs/learnora/pull/40. Branch file was re-fetched; source section and quiz script integrity checks passed.
- No merge, production edit, or deployment. Live browser interaction test and independent educator review remain outstanding. Do not describe this as a full independent expert validation.
- Next: audit exact mathematical claims, worked examples and worksheet answers on Integers and the Number Line; then Order of Operations. Add references only after checking their relevance, using preview branches.


## Integers and Number Line academic QA — 5 Nov 2026

- Reviewed `math/grade-6/integers-number-line.html` and its quiz script. Checked the lesson definitions, comparisons, ordering, opposites, absolute-value examples, all 7 practice answers and all 7 worksheet answer-key items; the checked answers are mathematically consistent.
- Confirmed the 5 quiz answer-key mappings match the visible answer options.
- Added a relevant OpenStax Prealgebra 2e reference for locating and ordering integers, opposites and absolute value. The source section was re-fetched and verified on preview branch `qa/grade6-integers-sources`.
- Draft PR #41: https://github.com/com-orgs/learnora/pull/41. No merge or deployment. Browser interaction QA and independent educator review remain outstanding.
- Algebraic Expressions draft PR #40 remains open and unmerged. Both changes are isolated from production.
- Next: verify Order of Operations worked examples, practice/worksheet answers and quiz mappings, then check suitable source attribution.


## Order of Operations lesson QA — 5 Nov 2026

- Reviewed Grade 6 Order of Operations lesson and its quiz script. Independently checked all 8 practice answers and 8 worksheet answer-key items; all checked calculations are correct.
- Confirmed all 5 quiz answer-key mappings match visible options.
- Found a scope ambiguity: the page referenced BIDMAS/PEMDAS but the introductory sequence omitted indices/exponents. Clarified that this lesson intentionally covers brackets and the four basic operations, with exponents deferred to a later topic.
- Added OpenStax Prealgebra 2e section 2.1 as a reference for operation priority and left-to-right rules. Re-fetched the branch and verified the source section and unchanged quiz script.
- Draft PR #42: https://github.com/com-orgs/learnora/pull/42. Not merged or deployed. Browser interaction QA and independent educator review remain outstanding.
- Draft PRs #40 (Algebraic Expressions) and #41 (Integers) remain unmerged. Production unchanged.
- Next: continue targeted source-code QA on Understanding Percentages, verifying worked examples, practice/worksheet answers, quiz key mappings and suitable reference attribution.


## Latest production release — Phase 2 Grade 6 Maths QA (5 Nov 2026)

- PR [#57](https://github.com/com-orgs/learnora/pull/57) merged to main. Production commit: `66d163cd9f2c4d96e65a49bcc373725c0a9fa3f1`.
- Production deploy workflow [#42049423565](https://github.com/com-orgs/learnora/actions/runs/42049423565) passed; Cloudflare Pages deployment check passed.
- Phase 2: all 23 Grade 6 Maths lessons received focused source-level review; 115 quiz answer mappings checked; metadata/canonical/BreadcrumbList JSON-LD and internal links checked; all 22 lesson tables have keyboard-scrollable wrappers.
- Full preview browser QA passed on the exact deployed source tree: 104 sitemap routes, 320/390/768/desktop widths, 77 quiz submissions and retakes, 79 print-handler checks, 104 performance budgets, no horizontal overflow, no axe WCAG 2.0/2.1 A/AA violations, no third-party/CSP/runtime errors.
- Preview security/HTTP checks passed. Post-deploy live fetch verified homepage, Grade 6 fractions lesson, canonical/robots metadata, 104-URL sitemap and robots.txt sitemap reference.
- Reports/checkpoint: `PHASE_2_GRADE6_RELEASE_MATRIX.md`, `PHASE_2_GRADE6_MATH_QA.md`, `PROJECT_STATE_PHASE_2.md`.
- Remaining follow-up: manual screen-reader testing, actual print-preview/PDF visual review, and independent educator review before claiming peer review. Existing GSC daily inspection cap remains in force; do not exceed it.
- Production: https://learnora-ab2.pages.dev/ .


## Current verified state — 7 November 2026 (daily indexing & discovery refresh)

- Production: https://learnora-ab2.pages.dev/. Production code baseline remains Phase 2 commit `66d163cd9f2c4d96e65a49bcc373725c0a9fa3f1`; main HEAD at audit `eb30ff69498c122d3670e15475430f4673265846`. GitHub comparison: 32 commits / 13 changed files since production baseline, all documentation/QA only; no production HTML/JS/CSS/sitemap/robots change.
- Live sitemap: HTTP 200, 104 entries / 104 unique / 0 duplicates. No `lastmod` entries. robots.txt HTTP 200, allows all user agents and OAI-SearchBot, and declares the sitemap.
- GSC tracker active: 104 URLs; 1 indexed, 103 not indexed, 0 pending, 0 errors, 0 warnings. Latest tracker check `2026-11-07T03:56:24.644Z` (08:56:24 PKT).
- **7 Nov Pakistan-date guard:** all 104 tracker rows and all 77 URL Inspection history rows were read before the guard decision. 41 distinct tracker URLs have lastCheckAt today; 0 same-day URL Inspection rows; union=41/10; overrun=31; remaining=0. No `inspect_url`, `bulk_inspect_urls` or `check_tracked_url_now` call was made. Exact 41 URLs and UTC/PKT timestamps are in [DAILY_INDEXING_LOG_2026-11-07.md](DAILY_INDEXING_LOG_2026-11-07.md).
- Full GSC URL Inspection history: 77 rows, 42 unique URLs, 19 repeated URL keys, 35 extra historical rows; no rows dated 7 Nov and no same-day duplicate URL. Platform quota snapshot 20/2,000 used, but the project cap of 10 is stricter and already exceeded.
- GSC Wizard hourly background tracker checks have already consumed/exceeded the daily cap. The connector exposes no pause/throttle control; owner must pause/reduce the hourly schedule in its UI. No further daily GSC inspections.
- Google sitemap last submitted `2026-11-05T16:21:51.927Z`; still pending; warnings=0; errors=0.
- Manual Request Indexing: read-only browser check redirected to Google Sign-in; session was unauthenticated, so no Request Indexing control was verified and no manual request was submitted. URL Inspection API is status-only and does not expose complete manual-request history. Prior record: 10 manual attempts / 9 unique URLs, Fractions twice; owner must skip any candidate already requested. Ten owner-review candidates are in the daily log.
- Bing property verified. Feed Success for 104 URLs, submitted/last crawled 3 Nov 2026. Direct Bing quota: 100/day and 2,400/month. Crawl statistics returned no dated rows; crawl issues=0. No direct Bing URL Submission action exists; IndexNow is the available notification route.
- IndexNow key set (masked `****5d92`) and key file verified. Full history: 447 rows, 104 unique URLs, 343 extra repeat rows; HTTP 200=373 and HTTP 202=74. Live sitemap matches history exactly: 104/104; new=0; historical-only=0; submissions today=0. All 104 sitemap URLs were skipped as previously submitted. Neither HTTP 200 nor 202 proves indexing.
- Fresh on-page audit: 25/25 sampled URLs HTTP 200, indexable, self-canonical, no noindex/redirect; internal links 7–47; 0 critical/high/medium and 12 low notes (7 long titles, 5 missing optional structured data). Full 104-page inbound-link graph remains incomplete; no site-wide orphan-free claim.
- Detailed evidence, exact 38 daily tracker URLs, all 104 IndexNow duplicate skips, repeated URL lists, audit rows, verification evidence and next actions: [DAILY_INDEXING_LOG_2026-11-07.md](DAILY_INDEXING_LOG_2026-11-07.md).

### Next actions — 7 November
1. [ ] Owner pauses/reduces GSC Wizard hourly background tracker checks; connector has no pause/throttle control. Keep daily GSC inspections at zero while the union is at/above 10.
2. [ ] Wait for Google sitemap processing; resume daily monitoring only when the Pakistan-date union is below 10 on a future date.
3. [ ] Owner checks manual Request Indexing history and skips previously requested URLs before any manual request.
4. [ ] Do not resubmit unchanged IndexNow URLs; all 104 current sitemap URLs are already in the complete history.
5. [ ] Complete the full internal-link graph when fetch limits permit; continue Python Basics, HTML/CSS and Financial Literacy QA on preview branches.
6. [ ] Review title/structured-data notes only through isolated preview QA; no mass metadata edits.
7. [ ] Keep PRs #59–#62 unmerged until combined content/browser review and explicit release approval.
