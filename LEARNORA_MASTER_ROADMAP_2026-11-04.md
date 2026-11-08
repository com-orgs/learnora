# Learnora — Master Timeline, Backlog & Earnings Roadmap

**Prepared:** 4 November 2026  
**Production:** https://learnora-ab2.pages.dev/  
**Repository:** https://github.com/com-orgs/learnora

> Traffic, rankings, indexing and revenue cannot be guaranteed. This plan prioritises measurable work, student value, search intent and safe monetisation. Do not invent keyword metrics or publish thin pages merely to increase URL count.


## Superseding daily indexing & discovery checkpoint — 8 November 2026

- Live sitemap fetched successfully: 104 unique URLs, no duplicates; robots.txt allows all and OAI-SearchBot, and declares the sitemap.
- GSC tracker: 104 tracked, 1 indexed, 103 not indexed/unknown, 0 pending/errors/warnings; active. Pakistan-date 8 Nov guard: 39 distinct tracker URLs + 0 same-day inspection-history rows = 39/10; overrun 29; no additional inspections. Exact list in [DAILY_INDEXING_LOG_2026-11-08.md](DAILY_INDEXING_LOG_2026-11-08.md).
- Full URL Inspection history: 77 rows, 42 unique URLs, 19 repeated URL keys and 35 extra rows; 0 rows today. Platform quota 16/2000, but project cap 10 controls. No inspect_url/bulk_inspect_urls/check_tracked_url_now call was made.
- Hourly GSC Wizard tracker remains active; connector exposes no pause/throttle control. Owner must pause/reduce it in the UI; do not add inspections while union >=10.
- Google sitemap still pending (last submitted 2026-11-05T16:21:51.927Z; 0 warnings/errors). No sampled robots/canonical/fetch blocker found.
- Saved Google browser profile redirected to Search Console landing page; authenticated URL Inspection/Request Indexing control unavailable. No manual request submitted; owner must reauthenticate and skip any candidate already requested manually.
- Bing property verified; feed Success, 104 URLs, last crawled 3 Nov; 0 crawl issue URLs; no dated crawl-stat rows. No direct Bing URL Submission connector action.
- IndexNow key set (****5d92) and key file verified. Pre-batch history 447 rows/104 URLs/373 HTTP 200/74 HTTP 202/343 extra rows. Compared all 104 live sitemap URLs against full history: 0 new, 0 history-only. 99 unchanged URLs skipped. Five materially changed production pages were verified live and submitted; 5/5 HTTP 200, key validated. Post-batch history 452 rows/104 unique/378 HTTP 200/74 HTTP 202/348 extra rows. Neither 200 nor 202 proves indexing. Exact lists and timestamps are in the daily log.
- Latest content commit `4625c15d` changed Computer Science HTML/CSS, Python Basics and three Financial Literacy lessons; all five were confirmed live with self-canonical and index/follow. The daily routine did not edit production code.
- Ten representative pages fetched; all had self-canonical, index/follow and internal links. Full 104-page orphan graph remains open. Algorithms is a content-depth review candidate, not a word-count violation.

### Current execution priorities
1. Owner: pause/reduce the GSC Wizard hourly tracker in its UI; no further daily GSC inspections until resolved.
2. Reauthenticate the saved Google browser profile; manually review candidates only after checking which were already requested.
3. Wait for Google sitemap processing; avoid unnecessary API inspections.
4. Finish the 104-page internal-link/orphan graph and continue content QA for Algorithms and recent lesson updates.
5. Continue IndexNow only for new or materially changed pages; never resubmit unchanged sitemap URLs just to use quota.
6. Keep production metadata/canonical/robots unchanged unless a confirmed issue is fixed and preview-tested.

## Superseding daily indexing & discovery checkpoint — 6 November 2026

- Production code commit: `66d163cd9f2c4d96e65a49bcc373725c0a9fa3f1` (Phase 2 Grade 6 Maths release; production deployment run [#42049423565](https://github.com/com-orgs/learnora/actions/runs/42049423565) succeeded). Main changes after this release are documentation/QA only; no later production HTML/JS/CSS change was found.
- Live sitemap: 104 unique same-host URLs; 0 duplicate entries. robots.txt allows all user agents and OAI-SearchBot and declares the sitemap.
- GSC tracker: 104 tracked, 1 indexed, 103 unknown to Google, 0 pending/errors/warnings; tracker active.
- Pakistan-date guard on 6 Nov: 39 distinct tracker URLs checked by background activity + 0 URL Inspection history rows = 39/10; overrun 29, remaining 0. No inspect_url, bulk_inspect_urls or check_tracked_url_now call was made. Full 39-URL/time list is in [DAILY_INDEXING_LOG_2026-11-06.md](DAILY_INDEXING_LOG_2026-11-06.md). The GSC Wizard connector exposes no pause/throttle action; owner must pause/reduce hourly checks in its UI.
- Full GSC URL Inspection history: 77 rows, 42 unique URLs, 19 repeated URL keys and 35 extra historical rows; no rows dated 6 Nov. API quota 18/2,000 used, but project cap 10 is stricter.
- Google sitemap remains pending (last submitted 5 Nov 16:21:51.927Z; 0 warnings/errors). Settled GSC performance through 3 Nov: 0 clicks, 2 impressions, average position 39; do not claim ranking/traffic growth.
- Manual GSC Request Indexing was not submitted this run. Browser context unavailable; TinyFish strict mode requires beta. Existing checkpoint records 10 manual attempts across 9 unique URLs, Fractions twice; exact per-URL manual history is not exposed by the API. Owner candidates and skip warning are in the daily log.
- Bing: property listed; sitemap feed Success, 104 URLs, last crawled 3 Nov; 0 crawl issues; no dated crawl-stat rows. Quota 100/day, 2,500/month. No direct Bing URL Submission action exists.
- IndexNow: key configured and key file verified; history 447 rows / 104 unique / 373 HTTP 200 / 74 HTTP 202 / 343 repeat rows. Current sitemap matches history exactly; 0 new URLs and 0 historical-only URLs. All 104 were deliberately skipped today; no material production change since their relevant last notification; 0 submissions. Neither HTTP 200 nor 202 proves indexing.
- Fresh on-page audit: 25/25 representative URLs indexable; 0 critical/high/medium, 10 low snippet/optional structured-data notes. Eight live hubs had self-canonicals, index/follow and internal links. Full 104-page inbound graph was not recomputed because TinyFish rate limiting stopped the expanded fetch.
- PR #62's mobile overflow fix CI run [#42146364198](https://github.com/com-orgs/learnora/actions/runs/42146364198) completed successfully. PRs #59–#62 remain draft/unmerged; no production content changes in this run.
- Exact inspected/audited URLs, all 104 IndexNow duplicate skips, repeated history URLs, candidates and evidence: [DAILY_INDEXING_LOG_2026-11-06.md](DAILY_INDEXING_LOG_2026-11-06.md).

### Current execution priorities
1. Owner pauses/reduces the GSC hourly tracker in its UI; no further inspections until the Pakistan-date union is below 10.
2. Owner checks manual Request Indexing history and skips previously requested candidates; no API call can confirm that manual history.
3. Wait for GSC sitemap processing and crawl discovery; do not repeatedly inspect unchanged unknown URLs.
4. Do not resubmit unchanged IndexNow URLs; all 104 current sitemap URLs already have history.
5. Complete the full internal-link graph when rate limits allow, then continue Python Basics, HTML/CSS and Financial Literacy preview QA.
6. Resolve low on-page notes only in preview QA; no mass production metadata edits.

## Superseding release and quality checkpoint — 5 November 2026 (post-PR #39)

- Latest production commit: `4bf96bbfdb786b45a510ca794fcc841edbbc01b4`; production URL https://learnora-ab2.pages.dev/.
- PR #38 added verified supplementary sources to Grade 6 Understanding Percentages: OpenStax Prealgebra 2e 6.1, Khan Academy Grade 6 Rates and Percentages and Illustrative Mathematics Exam Scores (6.RP.A.3.c). Academic mappings and quiz/worksheet answer keys checked; preview QA, deployment and production verification passed.
- PR #39 added verified supplementary sources to Grade 6–7 Percentage Increase and Decrease: OpenStax Prealgebra 2e 6.2, Khan Academy Finding Percentage of a Change and Illustrative Mathematics Discounted Books (7.EE.B.3). Worked examples, six practice mappings, five quiz mappings and five worksheet keys checked; full preview QA, deployment and production verification passed.
- PR #39 QA run [#41962548017](https://github.com/com-orgs/learnora/actions/runs/41962548017) passed static, legal, exact Cloudflare preview, headers/assets and mobile/desktop/quiz checks. Production deployment [#41962847408](https://github.com/com-orgs/learnora/actions/runs/41962847408) and static/legal audit [#41962847493](https://github.com/com-orgs/learnora/actions/runs/41962847493) succeeded.
- PR #33 completed the empty Common Mistakes section on Adding and Subtracting Decimals; PR #31 added its three learning references. PR #30 corrected CI trigger timing so preview-required QA runs on pull requests only.
- Repository tree contains 78 lesson HTML files: 46 Maths (23 Grade 6, 12 Grade 7, 11 Grade 8), 9 English, 14 Science, 3 Computer Science, 3 AI Literacy and 3 Financial Literacy. Previous 15/77 source estimate is stale after PR #38 and #39. Full source-section inventory is required before publishing a coverage ratio.
- GSC 5 November guard found 31 distinct URLs already checked by the hourly tracker, 0 inspection-history rows for today; total 31/10 (21 over cap). Automation made zero additional URL inspections. GSC Wizard connector exposes no pause/throttle control; owner must use its UI to pause/reduce hourly tracker checks. No more URL inspections on 5 November.
- Bing/IndexNow 5 November: 42 materially changed URLs submitted and HTTP 200/key-validated; 62 unchanged URLs skipped. History: 338 rows / 104 unique URLs. HTTP 200 confirms acceptance, not indexing.
- GSC: 104 tracked URLs, 1 indexed and 103 unknown; sitemap pending with 0 warnings/errors. Settled performance through 2 November: homepage 1 impression, 0 clicks, average position 77. Do not claim meaningful traffic/ranking growth.
- Ahrefs API returns `Insufficient plan`; Semrush has no API units; Firecrawl credits are 0. No paid plans/trials/credits used. GA4/Google Tag remains disabled pending child/mixed-audience privacy and consent review. Cloudflare Speed Brain, Bot Protection and Page Shield settings remain unchanged pending crawler/privacy review.
- Gmail review through 5 November found no new urgent alerts; continue monitoring platform notifications and ignore paid upgrade promotions under the free-only constraint.

### Current execution priorities
1. Owner: pause or reduce the GSC Wizard hourly tracker checks in its UI; no further manual/tracker inspections until the cap issue is resolved.
2. Recount Sources/Further Reading sections across all 78 lesson files before reporting source coverage.
3. Continue academically checked references on remaining Grade 6 Maths lessons using isolated preview branches and full QA.
4. Extend BreadcrumbList only where the visible breadcrumb path has been confirmed.
5. Keep tracking/ads and Cloudflare security/performance toggles unchanged pending privacy/crawler review.


## 1. Project timeline — from the beginning

### Initial foundation and launch
- Established Learnora as an international-first, English-language education resource for students, parents and teachers, with a free-budget constraint and notes/quizzes as the core identity.
- Chosen curriculum-neutral resources, with carefully scoped US, England, Ontario/Canada and Australia curriculum guidance rather than unsupported claims of equivalence or endorsement.
- Created the GitHub repository and Cloudflare Pages project; production site is https://learnora-ab2.pages.dev/.
- Built the static HTML/CSS/JavaScript site, subject and grade navigation, resource search, lessons, quizzes, worksheets and trust/legal pages.

### Phases 1–10 — initial curriculum, quality and production foundation
The repository's earlier tracker records these foundations as completed/released:
- Curriculum inventory and reconciliation across Mathematics, English and Science; subject/grade indexes, lesson scripts and sitemap brought into parity.
- Expanded English and Grade 8 Science coverage; corrected factual issues and quiz answer mappings.
- Added interactive quizzes, answer feedback, retakes and printable worksheets.
- Completed automated educational-rubric checks, accessibility scans, responsive/mobile checks, keyboard interaction and performance/resource budgets for the then-current page set.
- Implemented canonical/metadata, Open Graph, internal-link, sitemap, robots and custom-404 checks; corrected canonical and clean-URL consistency through PR #5.
- Added security headers and restrictive same-origin CSP, legal/trust pages, editorial transparency and automated pre-monetisation checks.
- Established a production release workflow and preview/browser QA gates. A manual screen-reader session on real devices remained a recommended follow-up.

### 2 November 2026 — Search Console and indexing foundation
- Verified the production GSC property and submitted the sitemap.
- Configured IndexNow and verified its key file; accepted submissions do not guarantee indexing.
- Added an indexing tracker and subject/country reporting structures.
- GSC sitemap processing was pending. Early tracker snapshots showed only the homepage indexed and most new URLs unknown/pending.
- Analytics and AdSense were kept inactive pending privacy and account/legal decisions.

### 3 November 2026 — Phase 11: international Maths resources
- Published a four-week Grade 6–8 Maths study plan.
- Published a 24-question printable international Maths workbook with worked answer keys for US Common Core, England KS3, Ontario and Australian Curriculum Version 9.
- Fixed a CSP inline-print-handler issue before release.
- PR #9 merged; production routes, sitemap and print script were verified. The later full QA run passed.

### 3 November 2026 — Phase 12: international English and Science resources
- Published English and Science curriculum orientation guides for the US, England, Ontario and Australia.
- Added a 20-question English/Science practice workbook with worked answers.
- Fixed responsive table overflow and contrast issues.
- PR #10 merged; production and full browser/accessibility checks passed.

### 3 November 2026 — Phase 13: lesson-depth expansion
- Added four complete English and Science lessons: argument writing, text structure/author's purpose, weather/climate/water cycle, and Earth's resources/sustainability.
- Added learning objectives, explanations, worked examples, quizzes with feedback/retakes, worksheets and suggested answers.
- PR #11 merged; full 91-page browser QA and production verification passed.

### 3 November 2026 — Phase 14: educational quality and trust
- Added source sections and curriculum-scope notes to new lessons, independent practice, improved quiz feedback and an Editorial and Corrections Policy.
- Desk-checked selected Maths lessons and corrected legacy quiz feedback/audit false positives.
- PR #12 merged; first remediation batch passed full QA and production checks.
- **Still open:** complete source attribution across legacy lessons, full topic-by-topic factual verification and genuine independent educator review. The latest preliminary inventory found dedicated source sections on only 7 of 77 lesson pages; 70 legacy lessons remain in the source-attribution backlog.

### 3 November 2026 — technical SEO remediation and new subject areas
- Added Computer Science, AI Literacy and Financial Literacy subject hubs and lessons; updated navigation, sitemap and OAI-SearchBot access.
- Added a Learnora logo asset to Organization structured data; PR #15 merged and deployed.
- Latest recorded production inventory: 104 sitemap URLs, 105 HTML files including custom 404.
- Post-deployment on-page audit recorded 104/104 sitemap URLs fetched/indexable, zero critical/high/medium findings and 159 low-severity findings. Low findings are not all ranking blockers; review selectively.
- Full QA recorded 104 pages, 77 quiz submissions/retakes and 79 worksheet print actions passing.

### 3–4 November 2026 — Phase 15: competitor and keyword research
- Curated 50 competitor/benchmark domains across Maths, English, Science, worksheets, quizzes, CS, AI literacy and financial literacy. This is a manual benchmark list, **not** a Semrush-confirmed top-50 organic competitor export.
- Keyword autocomplete research covered 12 seed topics. Suggestion counts are ideas, not search volumes.
- Only one cached volume datapoint was available: math worksheets, Global English, 90,500 monthly searches, trend 0%, competition 0.31. This broad term is not a ranking promise or a specific lesson target.
- A page-to-primary-keyword map and anti-cannibalisation rules were drafted.
- Semrush Competitive Research and Organic Research returned no_api_units; competitor rankings, keyword gaps, country-level volumes and keyword difficulty remain unverified.
- PR #17 is open. Its Cloudflare preview deployed successfully. The preview and production homepages both returned HTTP 200 and matching homepage content/metadata in the live fetch. PR #17 changes documentation only; production content and SEO metadata have not been altered by it.

## 2. Current verified baseline — 4 November 2026

| Area | Latest evidence | Status / meaning |
|---|---|---|
| Production site | Production URL returns HTTP 200 | Live |
| Sitemap | 104 URLs; GSC submitted 3 Nov; 0 warnings/errors; processing pending | Pending |
| GSC indexing tracker | 104 tracked: 1 indexed, 95 URL-unknown, 8 pending, 0 errors/warnings | 103/104 URLs have never been crawled; discovery backlog, not a confirmed noindex issue |
| Tracker freshness | 103/104 never crawled; homepage has the only recorded crawl (<7 days) | No broad crawl coverage yet; keep checking discovery, internal links and sitemap processing |
| GSC search performance | Last settled 28 days through 1 Nov 2026: 0 clicks, 0 impressions | No query/page/country winner can yet be inferred |
| GA4 | 0 sessions/users/events; property linked but no tracking script installed | Intentionally disabled pending child/mixed-audience privacy review |
| Bing | Verified property; sitemap Success, 104 URLs, last crawled 3 Nov; 0 crawl-issue URLs; no dated daily crawl-stat rows | Feed accepted; no crawl-volume conclusion can be drawn from missing rows |
| IndexNow | Key verified; 296 history records / 104 unique URLs; all 104 sitemap URLs present; 192 repeat records; 222 HTTP 200 and 74 HTTP 202 | No new/materially changed URL on 4 Nov; submitted 0; acceptance is not indexing |
| Technical SEO | Latest on-page audit: 104/104 fetched/indexable; 0 critical/high/medium, 159 low | Review meaningful low findings, do not chase heuristics blindly |
| Core Web Vitals | CrUX field data unavailable; no API key configured | Do not claim real-user CWV pass/fail |
| Educational quality | Phase 14 first batch complete; 70 legacy lessons still need source-section review per preliminary inventory | Open |
| AdSense | Disabled; publisher ID/CMP/audience/legal/ads.txt gates unresolved | Not monetisation-ready |

## 2A. Daily indexing and discovery run — 4 November 2026 (08:20 PKT)

### Google Search Console
- Live sitemap is HTTP 200 with 104 unique same-host URLs; GSC's sitemap submission from 3 November remains pending with 0 warnings/errors.
- Tracker: 104 total; 1 indexed, 95 URL-unknown/not indexed, 8 pending, 0 errors/warnings. The 7-day tracker report says 103/104 have never been crawled; only the homepage has a recorded crawl.
- Before this run, the union of same-day tracker timestamps and URL Inspection history contained **21 distinct URLs** and **22 inspection records**. The project's 10-distinct-URL daily cap was already exceeded by 11. The GSC platform quota was 22/2,000 used, but the 2,000 platform allowance does not replace the 10-URL project cap.
- Tracker `lastCheckAt` showed 16 distinct URLs on 4 November:
- `https://learnora-ab2.pages.dev/curriculum/grade-6-8-maths-study-plan`
- `https://learnora-ab2.pages.dev/computer-science/`
- `https://learnora-ab2.pages.dev/english/grade-6-8/argument-writing-claims-reasons-evidence`
- `https://learnora-ab2.pages.dev/financial-literacy/`
- `https://learnora-ab2.pages.dev/worksheets/international-middle-school-maths`
- `https://learnora-ab2.pages.dev/math/grade-6/perimeter-area-shapes`
- `https://learnora-ab2.pages.dev/math/grade-6/multiplying-dividing-decimals`
- `https://learnora-ab2.pages.dev/math/grade-6/introduction-to-ratios`
- `https://learnora-ab2.pages.dev/math/grade-6/metric-units-and-conversions`
- `https://learnora-ab2.pages.dev/math/grade-6/percentage-increase-decrease`
- `https://learnora-ab2.pages.dev/math/grade-6/understanding-decimals`
- `https://learnora-ab2.pages.dev/math/grade-6/understanding-percentages`
- `https://learnora-ab2.pages.dev/math/grade-6/multiplying-dividing-fractions`
- `https://learnora-ab2.pages.dev/math/grade-6/adding-subtracting-decimals`
- `https://learnora-ab2.pages.dev/math/grade-6/mixed-numbers-improper-fractions`
- `https://learnora-ab2.pages.dev/math/grade-6/volume-of-3d-shapes`
- URL Inspection history showed 5 distinct URLs in 6 rows:
- `https://learnora-ab2.pages.dev/math/grade-6/` — 2 history rows (duplicate)
- `https://learnora-ab2.pages.dev/math/grade-6/understanding-fractions`
- `https://learnora-ab2.pages.dev/ai-literacy/`
- `https://learnora-ab2.pages.dev/`
- `https://learnora-ab2.pages.dev/science/grade-8/elements-compounds-and-chemical-reactions`
- Duplicate history row: `/math/grade-6/` inspected twice, at 02:45:22.524957 and 02:45:34.013049 UTC. No additional inspections were run in this automation turn.
- The GSC Wizard tracker documentation notes an hourly background cron; no pause/throttle action is available in the connected toolset. The daily automation prompt was updated to count tracker timestamps and URL Inspection history together and stop at 10. Owner should review the tracker auto-check control in the GSC Wizard UI before further monitoring.
- No authenticated Search Console click/submit action is available; no manual Request Indexing request was submitted. The API inspection history is not a manual-request history. Candidate URLs (submit only if the owner has not already requested them):
1. `https://learnora-ab2.pages.dev/math/grade-7/`
2. `https://learnora-ab2.pages.dev/math/grade-8/`
3. `https://learnora-ab2.pages.dev/english/`
4. `https://learnora-ab2.pages.dev/science/`
5. `https://learnora-ab2.pages.dev/curriculum/`
6. `https://learnora-ab2.pages.dev/science/grade-8/`
7. `https://learnora-ab2.pages.dev/curriculum/international-science-guide`
8. `https://learnora-ab2.pages.dev/curriculum/international-english-guide`
9. `https://learnora-ab2.pages.dev/worksheets/international-english-science-practice`
10. `https://learnora-ab2.pages.dev/english/grade-6-8/text-structure-authors-purpose`

### Bing and IndexNow
- Bing property verified; sitemap feed Success, 104 URLs, last submitted/crawled 3 November 2026; 0 crawl-issue URLs; no dated crawl-stat rows. Quota allowance is 100/day and 2,700/month.
- No direct Bing Webmaster URL Submission action is available in the connected tools.
- IndexNow key and key file verified. Full history: 296 records, 104 unique URLs. All 104 live sitemap URLs are already present; 0 missing and 0 off-sitemap. 192 repeat records (94 URLs repeated); 222 HTTP 200 and 74 HTTP 202; 0 submissions today. No new/materially changed URLs qualified, so no IndexNow submission was sent.
- HTTP 202 means accepted pending key validation, not indexing. Neither 202 nor 200 proves a URL is indexed.

### Crawlability and quality findings
- `robots.txt` returns HTTP 200, allows all user agents and OAI-SearchBot, and declares the sitemap. Sampled homepage, Maths/Science/English/Curriculum hubs and a new Science lesson return HTTP 200, `index,follow`, and self-canonicals. No sampled robots, noindex, canonical or fetch blocker found.
- Same-host internal links in sampled pages: homepage 51; Grade 6 Maths 30; Science hub 21; Grade 8 Science 11; Curriculum 22; English 16. The Earth Resources Grade 8 lesson is linked from the Science hub but is absent from the Grade 8 Science hub's child links. Add the child link and improve its breadcrumb in a preview-only patch.
- Phase 14 still has a preliminary source-attribution backlog: 70 of 77 legacy lessons need dedicated source/reference sections. Treat this as an editorial trust task, not a confirmed indexing cause.
- GSC performance through 1 November: 0 clicks, 0 impressions. No ranking or traffic improvement is claimed.

### Next actions
1. Owner: inspect/pause or limit the GSC Wizard tracker's hourly auto-check schedule; the connector has no pause/throttle operation. Do not run any more inspections on 4 November.
2. Add the Earth Resources lesson to the Grade 8 Science hub and correct the breadcrumb in a preview branch; run static, mobile, accessibility and browser QA before merge.
3. Owner may use the manual Request Indexing candidates above only after checking their own manual-request history.
4. Continue the source/reference audit of the remaining 70 legacy lessons.
5. Recheck Google sitemap status and weekly indexing movement; never resend already submitted IndexNow URLs without a genuine material change.

## 3. Ordered master execution timeline

Work can overlap where safe. Do not mass-edit production pages or merge code changes until their specific QA gates pass.

### P0 — Finish and qualify PR #17 (immediate)
1. Keep the 50-domain list labelled as a curated benchmark set, not a measured ranking list.
2. Review the keyword map against the current 104-URL sitemap; check every target URL exists and the intent matches its content.
3. Run the repository static audit, legal/pre-monetisation audit, preview security/header/assets checks and browser regression on the PR head.
4. Verify representative preview routes, sitemap, robots, canonical tags, links and quiz/worksheet interactions.
5. Confirm no production files or metadata changed. Merge the documentation-only PR after required checks are green; verify main and Cloudflare production remain healthy.

**Acceptance:** PR #17 is merged with green required checks, and production remains functionally unchanged.

### P1 — Google/Bing discovery and indexing recovery (highest traffic priority)
1. Recheck GSC sitemap processing and the 104-URL tracker; compare counts over time rather than repeatedly inspecting the same URLs.
2. Sample representative URL groups: homepage, subject hubs, grade hubs, new subject lessons, worksheets, curriculum guides and policy pages.
3. For each sample, verify HTTP 200, indexable robots directive, self-consistent canonical, sitemap inclusion, crawlable internal links and no redirect chain.
4. Inspect robots.txt, sitemap XML, canonical host/URL format and internal-link reachability from homepage → hub → grade/topic → related resource.
5. Identify orphan/weakly linked URLs and add contextual internal links where they help users.
6. Ensure important pages are linked from relevant hubs; use URL Inspection selectively; do not repeatedly request indexing for URLs already checked or still pending.
7. Recheck Bing sitemap/feed and crawl/search reports; use IndexNow only for genuinely new or materially updated URLs, not as a substitute for Google indexing.
8. Record indexed/unknown/pending counts weekly and note when crawl dates change.

**Acceptance:** sitemap processing resolves or a specific blocker is identified; important hubs and representative pages are crawled; unknown/pending counts begin to move. No indexing guarantee.

### P2 — Complete keyword evidence and competitor gap
1. Treat the current 50 sites as benchmarks. Once Semrush API units are available, identify actual Learnora organic competitors by keyword overlap, not brand popularity.
2. Export competitor organic keywords, ranking positions, landing pages and estimated traffic; separate direct competitors from adjacent platforms.
3. Obtain country-specific volume, trend, keyword difficulty and SERP features for the US, UK, Canada and Australia.
4. If Semrush units remain unavailable, continue only with accessible no-cost evidence: Google autocomplete/question patterns, live SERP intent review, official curriculum terms and later first-party GSC query data. Mark missing metrics as unknown; never fabricate them.
5. Classify each keyword as existing page target, supporting subtopic, missing useful resource, cannibalisation risk or irrelevant.
6. Prioritise long-tail phrases with clear student/parent/teacher intent and an achievable content match. Volume alone is not the decision rule.

**Acceptance:** a documented evidence-backed priority list with source, country, intent, target URL, volume/KD where actually available, and confidence level.

### P3 — Safe on-page SEO implementation
1. Apply one primary intent per URL; prevent multiple pages targeting the same query intent.
2. Improve titles, H1s, opening explanations and meta descriptions only where research and content support the change.
3. Improve internal links between related lessons, grade hubs, worksheets and curriculum guides with descriptive anchors.
4. Add useful FAQs only when the page genuinely answers them; do not rely on FAQ schema for rich results.
5. Use worksheet/PDF/answer-key claims in snippets only when that exact resource exists and works.
6. Review structured data for correctness and eligibility; avoid unsupported review/rating/educator claims.
7. Implement changes in small, reviewable batches with before/after diff and preview QA.

**Acceptance:** every changed URL has a clear intent, accurate snippet, useful content and passing canonical/sitemap/browser checks.

### P4 — Complete Phase 14 educational quality backlog
1. Work through the 70 legacy lesson pages lacking a dedicated source section in the preliminary inventory.
2. Verify factual claims, worked examples, calculations, quiz answer keys and worksheet answers topic by topic.
3. Cite primary sources (official curriculum, government, university, scientific/educational institutions) and explain scope/limitations.
4. Obtain genuine independent educator/subject-expert review where possible; never invent reviewer names, qualifications or endorsements.
5. Keep corrections policy visible and record material changes.
6. Prioritise foundational Maths, Grade 7–8 Science and English pages, then use GSC performance data when it becomes available.

**Acceptance:** source and accuracy status tracked per lesson; expert review clearly distinguished from internal desk review.

### P5 — Content expansion based on gaps, not page count
1. Strengthen existing Maths clusters first: fractions, decimals, percentages, ratios, equations, geometry, data and word problems.
2. Strengthen Grade 7–8 Science and middle-school English reading/writing/grammar.
3. Develop CS, AI literacy and financial literacy as differentiators, but only with original, age-appropriate teaching materials and reliable sources.
4. Build genuinely useful resource formats where appropriate: worked examples, practice sets, printable worksheets with answers, revision plans and topic quizzes.
5. Do not publish thin AI-generated pages, duplicate country pages or pages created solely to capture keywords.
6. Check every new page's sitemap entry, canonical, title, internal links, source quality, quiz and print functionality.

**Acceptance:** each new resource solves a distinct learning need and passes editorial, SEO, accessibility and technical QA.

### P6 — Traffic acquisition beyond publishing
1. Build internal topic clusters so students can move naturally from explanation → worked example → practice → related lesson.
2. Create shareable resources for teachers and parents (printable revision packs, topic checklists and answer-supported practice).
3. Develop a consistent social/video distribution workflow that points to relevant lessons without misleading claims or spam.
4. Share resources in relevant teacher/student communities only where community rules permit and where the resource directly answers the discussion; no mass link dropping.
5. Explore legitimate educational partnerships and resource-directory inclusion; assess relevance and quality before outreach.
6. Make pages easy for search engines and AI answer systems to understand through clear headings, concise definitions, original examples, transparent sources and crawlable links. Do not promise ChatGPT/AI referrals.
7. Track referring domains and links; avoid paid link schemes, automated comments, link farms and reciprocal-link manipulation.

**Acceptance:** referral sources and qualified visits are measured where privacy-safe; outreach is relevant and non-spammy.

### P7 — Measurement and privacy-safe analytics
1. Keep GSC as the primary organic search measurement while GA4 remains disabled.
2. Resolve child-directed/mixed-audience classification and applicable privacy/consent requirements before installing analytics or advertising scripts.
3. If lawful and appropriate, configure minimal analytics with no student names, emails, identifiers, quiz answers/scores or sensitive profiling.
4. Do not enable Google Signals, personalised advertising, remarketing or User-ID for student audiences.
5. Configure Search Console reporting by query, landing page, country, device and topic cluster once data exists.
6. Add a monthly dashboard for clicks, impressions, CTR, position, indexed URLs, landing pages, referrals and revenue after monetisation.

**Acceptance:** tracking is both accurate and compliant; no privacy gate is bypassed for the sake of metrics.

### P8 — AdSense and earning readiness
1. Complete audience classification and legal review, including under-13/mixed-audience implications.
2. Confirm the actual AdSense account and publisher ID; never invent or insert a placeholder.
3. Confirm whether a Google-certified CMP is required for the intended audiences/regions and implement only a compliant choice.
4. Publish the exact authorised ads.txt seller record only after the publisher account supplies it.
5. Recheck original content, navigation, contact/about/privacy/terms, sources, functionality and policy compliance.
6. Apply for AdSense when the site and account are genuinely ready; approval and revenue are not guaranteed.
7. If approved, introduce ads conservatively, protect learning usability and Core Web Vitals, and test ad density/layout. Never place ads in ways that interfere with quizzes or student learning.

**Acceptance:** account/legal gates resolved, AdSense review submitted or approved, and any live ad implementation passes privacy, policy, UX and performance checks.

## 4. Priority scoring for every proposed task

Score each opportunity using search-intent fit, evidence quality, ranking feasibility, student value, monetisation fit and risk/cost. Do not prioritise a task merely because its keyword has a large volume. Prefer a useful, specific page with clear intent and a credible chance of being discovered.

## 5. Reporting cadence and success measures

- **Weekly:** sitemap state, tracker indexed/unknown/pending counts, new crawls, GSC clicks/impressions, technical errors and new/updated URLs.
- **Monthly:** query and landing-page trends, country/device split, CTR opportunities, content decay, referring domains, engagement/revenue only where compliant tracking exists.
- **Per release:** diff review, static/legal audit, preview deployment, mobile/desktop browser checks, quiz/print regression, sitemap/canonical verification and production smoke test.
- **Success measures:** more important URLs crawled and indexed; impressions emerging on relevant non-brand queries; clicks and qualified visits increasing; users reaching useful related resources; eventual compliant monetisation. No fixed traffic or earnings outcome is promised.

## 6. Current blockers and owner-only gates

- Semrush API units are insufficient for competitor and organic keyword reports. The account owner must obtain additional API units before those reports can run.
- AdSense publisher ID, account approval and any required CMP/ads.txt seller details must come from the actual account owner/account.
- Privacy classification and applicable legal requirements need a proper decision before GA4 or advertising is enabled.
- Independent educator review requires a real qualified reviewer; the project must not fabricate one.
- CrUX field data needs an authorised API key or another legitimate source; do not infer real-user Core Web Vitals without it.

## 7. Continuity rule

At every future session: read this roadmap and PROJECT_STATUS.md, inspect current GitHub main/PR/CI and live GSC state, then continue from the first unfinished priority. After every meaningful task, update the project tracker with exact completion, current state, next action, blockers, changed files and verification. Do not repeat completed work or claim unverified success.


## 8. Daily indexing operations (added 4 November 2026)

### Google Search Console
- Operating cap: at most 10 distinct URL checks per Pakistan calendar day, matching the owner's requested daily cadence. Never inspect the same URL twice in one local day.
- Important distinction: the connected Google URL Inspection API checks Google's recorded indexing/crawl status; it does not send the manual Request indexing command. Do not report an API inspection as a submitted indexing request.
- If authenticated interactive Search Console UI control is unavailable, prepare a ranked list of up to 10 eligible URLs for the owner to submit manually. Keep the daily list separate from API inspections.
- Prioritise important subject/grade hubs, new substantive resources and pages with meaningful updates; skip the homepage once indexed and skip pages already requested that day.
- The current tracker is 104 URLs: 1 indexed, 95 not-indexed/unknown and 8 pending after the 4 Nov inspection batch; zero errors and warnings.

### Bing Webmaster Tools and IndexNow
- Verified property: https://learnora-ab2.pages.dev/
- Sitemap feed: Success; 104 URLs; last crawled 3 Nov 2026.
- Direct Bing URL-submission quota: 100/day and 2,700/month. The connected GSC Wizard toolset exposes quota/reporting but no direct Bing URL Submission API action.
- IndexNow is configured and the key file is verified. The full history contains 296 submission records for 104 unique sitemap URLs (192 repeat records beyond the first submission per URL). All 104 current sitemap URLs already appear in IndexNow history; there are no new URLs to submit as of 4 Nov.
- Do not resubmit URLs just to use quota. Submit only new URLs or materially updated URLs, after checking the full submission history. IndexNow's HTTP 202 is acceptance pending key validation, not proof of indexing.
- The daily automation should use IndexNow for genuinely new/updated URLs (maximum 100 per batch/day) and clearly report that the separate direct Bing quota was not used when the direct API is unavailable.

### Verified crawl-discovery signals
- robots.txt returns HTTP 200 and allows all user agents; it publishes the production sitemap.
- Sampled homepage and Grade 6 hub return HTTP 200 with index,follow, canonical, title, meta description and structured data. Grade 6 hub canonical matches its URL.
- The homepage plus nine subject/grade/curriculum hubs returned HTTP 200 and collectively linked to all 104 sitemap URLs in the sampled internal-link graph. No sitemap URL was missing from that sampled graph.
- The Firecrawl URL map surfaced 84 URLs while the sitemap has 104; this is a crawler/map coverage difference, not proof that 20 URLs are orphaned, because the sampled hub-link graph found all 104.
- Current working diagnosis: the new/expanded URL set is still awaiting Google crawl/discovery. No robots/noindex blocker was identified in the sampled URLs. Continue monitoring; do not repeatedly request or resubmit the same URLs.

### Daily schedule
- Active automation: Learnora Daily Indexing, ID 6aea9f52b8108191b274eac5e9f5e8c8, flexible daily schedule, timezone Asia/Karachi.
- Automation instructions enforce the above GSC inspection cap, distinguish API checks from manual indexing requests, deduplicate all Bing/IndexNow submissions, check feed/crawl status and update this roadmap/status.

## Continuation verification — 4 November 2026 (after original research recovery)

- Recovered the original research artifact: `COMPETITOR_KEYWORD_RESEARCH_2026-11-03.md`. It contains all 50 named competitor/benchmark domains, the selected priority, the 41-URL keyword map and explicit Semrush limitations. No competitor research was recreated.
- Original selected priority confirmed: strengthen existing Grade 6–8 Maths lessons/hubs, practice questions, quizzes and worksheets first; then Grade 7–8 Science and middle-school English. Computer Science, AI Literacy and Financial Literacy are differentiators, not the first optimization batch.
- Parsed all 41 keyword-map target URLs: 41 unique paths, 0 duplicates, and 41/41 exist in the current 104-URL production sitemap. No keyword-target URL is missing from the sitemap.
- Verified PR #17 contains documentation only: `COMPETITOR_KEYWORD_RESEARCH_2026-11-03.md`, `LEARNORA_MASTER_ROADMAP_2026-11-04.md`, `PROJECT_STATUS.md`. PR remains open; latest head commit shown by GitHub is `24ad602`. Cloudflare Pages preview deployment succeeded. The PR checks page currently shows the Cloudflare Pages deployment check succeeded, but does not provide evidence of the full static/legal/browser QA suite passing; do not merge until the required QA evidence is green.
- Preview smoke checks: preview homepage, robots.txt, Computer Science hub, AI Literacy hub and Financial Literacy hub returned HTTP 200. Subject hub pages are `index,follow` and their canonical URLs point to production host (expected for a preview deployment). Preview sitemap returned HTTP 200 and lists production canonical URLs. No production site code, metadata or content was modified.
- Further production content audit: Computer Science, AI Literacy and Financial Literacy hubs all return HTTP 200, self-consistent `og:url`, `index,follow`, descriptive titles/descriptions, useful explanatory content, an external authoritative source, and links to their three child lessons. Grade 8 Science hub returns HTTP 200 and links to five lessons. The existing Earth Resources lesson is not linked from the Grade 8 Science hub, although the general Science hub links to it; retain this as a preview-only internal-link improvement.
- GSC sitemap performance for 5 Oct–1 Nov (latest settled range) reports 104 URLs, 0 URLs with impressions, 0 clicks and 0 impressions. This is a performance/impression result, not proof that all 104 URLs are unindexed. Tracker remains 1 indexed / 95 URL-unknown / 8 pending. Bing traffic returned no dated rows and inbound-link report returned no rows; absence of rows is not proof of zero crawling or no links in the wider web.
- Later same-day deduplication re-read (Asia/Karachi, 4 Nov): 31 distinct URLs with tracker lastCheckAt today plus 6 URL Inspection history rows across 5 distinct URLs; no overlap between the sources; combined 36 distinct URLs and 37 records, with 1 duplicate history record for `/math/grade-6/`. This supersedes the earlier 21-URL snapshot. No new inspection was run in this continuation. Do not inspect more URLs on 4 Nov.
- Next action: run a focused on-page/teaching-value review of the highest-priority existing Grade 6 Maths URLs from the recovered keyword map; propose changes in an isolated preview branch only, and require full static, accessibility, mobile/browser and quiz/worksheet QA before any merge. Keep Semrush-derived competitor ranking/keyword-gap metrics marked unavailable until API units return.

### 4 November 2026 — selected Grade 6 Maths on-page batch (PR #19)
- Live on-page audit of six priority Grade 6 Maths pages: all HTTP 200, indexable, self-canonical and one H1; no critical/high/medium findings. Eight low-severity items total, including two overlong fraction meta descriptions, one overlong decimals title, missing lesson structured data on three pages, and a repeated “Continue Learning” heading.
- Opened isolated code PR #19 with three HTML lesson changes: two concise meta descriptions, a Grade 6 decimals title aligned to place value/rounding, and a clearer second related-topics heading. No new URLs or broad metadata changes.
- PR #19 is open and unmerged; Cloudflare preview was still building at last check. Do not merge until exact preview URL is verified and full static/legal/accessibility/mobile/desktop/quiz/worksheet QA passes.
- PR #17 remains open and unmerged; its 50-domain benchmark list and 41-URL keyword map are recovered and all 41 targets match the live 104-URL sitemap. The full competitor organic keyword-gap analysis remains blocked by Semrush API units.
- Next execution: finish PR #19 preview QA, then work through the Grade 6 Maths priority cluster in small batches. Preserve the 10-distinct-URL Pakistan-date GSC inspection cap; 4 November's cap has already been exceeded by earlier tracker activity, so no more inspections today.

#### PR #19 preview result — 4 November 2026
- Cloudflare Pages preview succeeded: https://seo-grade6-maths-onpage-2026.learnora-ab2.pages.dev/ (code commit `5ac4a63`).
- Three changed Grade 6 Maths routes all returned HTTP 200, `index,follow`, one H1 and self-canonical production URLs. New metadata lengths are within the intended range: descriptions 160 and 142 characters; decimals title 53 characters and description 159 characters. Duplicate section heading is corrected.
- This is a preview smoke-test pass only. Full static/legal/browser/accessibility/quiz/retake/worksheet QA remains unverified because the repository workflow is not configured to trigger on the current `seo/**` branch. PR #19 remains open and unmerged; production unchanged.


## 9. Superseding execution update — 4 November 2026 (PR #19 released)

### Grade 6 Maths on-page release
- PR [#19](https://github.com/com-orgs/learnora/pull/19) merged successfully as `7f351cc75a4d531e4ff0948e59aa201240d62463`.
- Production deployment completed successfully through Cloudflare Pages workflow [#41784777507](https://github.com/com-orgs/learnora/actions/runs/41784777507). The main static/legal audit [#41784777268](https://github.com/com-orgs/learnora/actions/runs/41784777268) passed.
- PR preview full QA [#41784399824](https://github.com/com-orgs/learnora/actions/runs/41784399824) passed: 104 sitemap pages checked at 320/390/768/desktop widths; 77 quizzes, 77 retakes, 79 worksheet print actions and 104 performance/resource checks; no horizontal overflow, keyboard quiz failure, third-party request, CSP/runtime error or performance-budget failure.
- Live production fetch verified the three released pages' HTML head, updated title tags and descriptions, self-canonical URLs and `index,follow`: Comparing and Ordering Fractions; Adding and Subtracting Fractions; Grade 6 Decimals: Place Value and Rounding.
- The decimals lesson now has one “Continue Learning” section and a distinct “Related Measurement Topics” section. No new URLs or sitemap changes were introduced.

### SEO and traffic evidence
- Google Search Console's last 28 settled days ended 1 November 2026: 0 clicks, 0 impressions, no query rows and no page rows. This is an early baseline, not evidence of ranking improvement.
- Bing query, page and daily crawl-stat endpoints returned no dated rows. Bing sitemap feed remains Success for 104 URLs and the crawl-issues report previously showed 0 issue URLs; missing performance rows do not prove zero crawling.
- Free Google autocomplete sampling across US/UK/Canada/Australia returned intent themes around Grade 6 worksheets, fraction questions, worked answers and multiplication/division of fractions, but no cached metrics. Some UK/Australia suggestions contained mismatched MCO/ATP/Green Shoots terms; exclude them pending validation.
- Semrush competitor organic keyword-gap metrics remain blocked by insufficient API units. Do not invent search volume, keyword difficulty, competitor positions or traffic estimates.

### Indexing guardrail
- Latest complete 4 November deduplication snapshot: 36 distinct URLs across tracker `lastCheckAt` and URL Inspection history, 37 records, including one duplicate record for `/math/grade-6/`. This exceeds the project cap of 10 distinct URLs/day.
- The GSC Wizard tracker documents an hourly background cron; connected controls expose no pause/throttle action. The daily automation is instructed to stop at 10 and never add more checks once the cap is reached. Do not run any more inspections on 4 November.
- GSC URL Inspection API checks status only; it does not submit the manual Request Indexing command.
- Bing IndexNow history already contains all 104 current sitemap URLs; do not resubmit old URLs to consume the separate 100/day Bing quota.

### Next priorities
1. Complete QA and merge the refreshed documentation-only competitor research PR #17.
2. Fix the Grade 8 Science hub's missing child link to the existing Earth Resources lesson in an isolated preview branch.
3. Continue the 70-lesson source-attribution and academic accuracy review; do not fabricate expert review.
4. Use GSC impressions/queries when they begin appearing to prioritise on-page changes; until then, keep autocomplete as intent clues only.
5. Build legitimate external discovery through useful teacher/parent resources and relevant communities; no spam links or mass outreach.


## 10. Superseding update — 4 November 2026 (PR #17 merged; PR #20 preview QA passed)
- PR [#17](https://github.com/com-orgs/learnora/pull/17) merged as `14949c842ccf65cd948bf410d64255e744d5dc41`. The competitor/benchmark list, 41-URL keyword map, research limitations and roadmap are now available on main.
- PR [#20](https://github.com/com-orgs/learnora/pull/20) adds a hub card and contextual internal link from Grade 8 Science to the existing Earth’s Resources, Sustainability and Human Impact lesson. The target is already in the 104-URL sitemap and includes a source/further-reading section. The hub meta description and CollectionPage JSON-LD description now reflect environmental science and sustainability.
- PR #20 preview fetch confirmed the new card, two contextual internal links, correct H1, updated description, production self-canonical and `index,follow`. Full static/legal/header/browser QA [#41785499567](https://github.com/com-orgs/learnora/actions/runs/41785499567) passed: 104 pages at 320/390/768/desktop, 77 quizzes, 77 retakes, 79 print actions and 104 performance/resource checks; no horizontal overflow, quiz, print, third-party, CSP/runtime or performance-budget issues.
- PR #20 merged as `892cde2c8c17d27cd95522f384338d38ae5b6a40`; Cloudflare production deployment succeeded and live fetch verified the Grade 8 hub card, two internal links, updated description, self-canonical and `index,follow`.

### Next priorities
1. Continue the 70-lesson academic source-attribution and accuracy review, beginning with the highest-priority Grade 6 Maths cluster.
2. Wait for settled GSC query/impression data before asserting rankings; the latest 28-day report through 1 Nov has 0 clicks and 0 impressions.
3. Develop useful teacher/parent distribution resources and partnerships without spam or artificial link schemes.
4. Monitor discovery without duplicate GSC inspections or resubmitting the existing 104 Bing URLs.


## Superseding execution checkpoint — 4 November 2026 (PR #21)

- PR [#21](https://github.com/com-orgs/learnora/pull/21) merged to main as `06b2c35d07244606c0a840b7cc982b8748eac7b8` after successful full static, legal, preview-security and browser QA.
- Grade 6 Understanding Fractions now has four further-reading references: OpenStax, BBC Bitesize, The Math Learning Center and NRICH. This is a curriculum-neutral resource list, not a claim of formal curriculum alignment.
- QA evidence: 104 pages at 320/390/768/desktop, 77 quizzes, 77 retakes, 79 print actions, 104 performance/resource checks; static audit 104 HTML pages / 68 lesson files / 77 accessible quizzes / zero warnings; legal audit and preview security/CSP/custom-404 checks passed.
- Source-attribution backlog estimate reduced from 70 to 69 legacy lessons (77 total lesson pages, now 8 with dedicated sources sections). Refresh the inventory before relying on this estimate for future planning.
- Merge commit: `06b2c35d07244606c0a840b7cc982b8748eac7b8`. Main-branch documentation checkpoint commit: `8ff63c13b5dc419553b740d208f83e680b6f87d5`.
- Production page verification immediately after merge still returned the previous page without the new references section. Treat Cloudflare deployment as pending until the main deployment workflow completes and a fresh production fetch confirms the new content.

### Immediate next priorities
1. Confirm Cloudflare Pages deployment for the current main commit; production must visibly contain the four references and retain HTTP 200, self-canonical and `index,follow`.
2. Continue source attribution and academic accuracy review with the next priority Grade 6 Maths lesson; use isolated preview branches and full QA before merge.
3. Refresh the 77-lesson source inventory after each small batch; do not add generic or unverified sources just to increase coverage.
4. Do not perform additional GSC URL inspections or Bing/IndexNow resubmissions on 4 November; inspect history first on the next Pakistan calendar day.
5. Keep traffic/ranking claims evidence-based. The latest settled GSC report through 1 November remains 0 clicks and 0 impressions; source additions and technical QA do not guarantee indexing or traffic.


### PR #21 production release confirmation — 4 November 2026
- Cloudflare Pages deployment [#41789314019](https://github.com/com-orgs/learnora/actions/runs/41789314019) succeeded on main; main static/legal audit [#41789314066](https://github.com/com-orgs/learnora/actions/runs/41789314066) also succeeded.
- Production fetch confirms the Grade 6 Understanding Fractions lesson now displays all four verified references. HTTP 200, self-canonical, `index,follow`, expected title and safe external-link attributes were confirmed.
- PR #21 is merged and live. This supersedes the earlier pending-deployment note in this checkpoint.
- Next content task: continue the legacy source-attribution audit in a separate preview branch; estimate 69 lessons remain, pending full inventory refresh. Do not compromise source quality or claim formal curriculum alignment without evidence.


### PR #22 production release confirmation — 4 November 2026
- PR #22 is merged and live. Cloudflare deployment run [#41819235194](https://github.com/com-orgs/learnora/actions/runs/41819235194) succeeded on main; main static audit [#41819235153](https://github.com/com-orgs/learnora/actions/runs/41819235153) also succeeded.
- Production verification confirms the Grade 6 Equivalent Fractions lesson displays all three verified resources (OpenStax, BBC Bitesize, The Math Learning Center), with expected title/description, self-canonical and `index,follow`.
- Current estimate: 9/77 lessons have dedicated further-reading sections; 68 remain, pending full inventory refresh. Keep sources directly relevant and curriculum-neutral unless formal alignment is verified.
- Next content task: continue Grade 6 Maths source and academic accuracy audit in a separate preview branch with full QA before merging.
- Do not make indexing submissions on 4 November; inspect GSC/Bing history before using any next-day allowance.


### PR #23 production release confirmation — 4 November 2026
- PR #23 merged as `dd08771c2f672cc71c464d1793e34e8f8588c3f1`; full preview audit run [#41823111786](https://github.com/com-orgs/learnora/actions/runs/41823111786) succeeded, including static, legal, preview headers/assets and mobile/desktop/quiz browser checks.
- Production fetch now confirms all three Grade 6 Mixed Numbers references (Manitoba Education, Texas Instruments Education, Open University OpenLearn), expected page metadata, self-canonical and `index,follow`. Homepage also fetched successfully.
- Earlier note that the PR #23 release was pending is superseded.
- Next: refresh the actual source-attribution inventory across all 77 lessons, then select the next priority Grade 6 Maths page for a source and accuracy PR. Keep the 9/77 estimate provisional until inventory is complete.



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


## Grade 6 Algebraic Expressions QA update — 5 Nov 2026

- Completed source-code review of Algebraic Expressions lesson, practice set, worksheet answer key and quiz mapping. All checked arithmetic and five visible quiz mappings are consistent.
- Improved the general definition of like terms (matching variable part and exponents; constants are like terms) and added two checked OpenStax Prealgebra 2e references.
- Work is in preview branch `qa/grade6-algebraic-expressions-sources`, Draft PR #40: https://github.com/com-orgs/learnora/pull/40. Not merged or deployed.
- Release gate still requires browser interaction QA and independent educator review. Next lesson QA: Integers and the Number Line, then Order of Operations.


## Integers lesson QA update — 5 Nov 2026

- Reviewed Grade 6 Integers and the Number Line lesson, worked comparisons, practice and worksheet answer keys; all checked arithmetic is consistent. All five quiz key mappings match visible options.
- Added one relevant OpenStax Prealgebra 2e reference for integers, number-line ordering, opposites and absolute value.
- Preview branch `qa/grade6-integers-sources`; Draft PR #41: https://github.com/com-orgs/learnora/pull/41. Not merged or deployed.
- PR #40 for Algebraic Expressions also remains draft/unmerged. Continue to keep production unchanged pending preview interaction QA and educator review.


## Order of Operations QA update — 5 Nov 2026

- Checked all 8 practice answers, 8 worksheet answers and 5 quiz answer mappings; all reviewed results match.
- Clarified that exponents/indices are outside the scope of this introductory page despite mention of BIDMAS/PEMDAS, preventing a misleading incomplete order list.
- Added OpenStax Prealgebra 2e section 2.1 reference. Preview branch `qa/grade6-order-operations-sources`, Draft PR #42: https://github.com/com-orgs/learnora/pull/42.
- PR #40 (Algebraic Expressions) and #41 (Integers) also remain draft/unmerged. No production edits or deployment. Next target: Understanding Percentages.


## Superseding daily indexing & discovery checkpoint — 7 November 2026

- Production code remains at Phase 2 commit `66d163cd9f2c4d96e65a49bcc373725c0a9fa3f1`. Main HEAD `eb30ff69498c122d3670e15475430f4673265846`; 32 commits ahead / 13 changed files since production baseline, all documentation/QA only. No production HTML/JS/CSS changes and no material production URL change for IndexNow.
- Live sitemap HTTP 200: 104 unique URLs, 0 duplicate loc entries, no lastmod fields. robots.txt HTTP 200; allows all agents and OAI-SearchBot and declares sitemap.
- GSC tracker active: 104 URLs; 1 indexed, 103 not indexed, 0 pending/errors/warnings. Full tracker (104 rows) and full inspection history (77 rows) read before the daily guard.
- 7 Nov Pakistan-date guard: 41 distinct tracker URLs with lastCheckAt today + 0 same-day URL Inspection history rows = 41/10 distinct URLs; overrun 31; remaining 0. No URL Inspection API or tracker-check call was made. Exact 41 URLs and timestamps: [DAILY_INDEXING_LOG_2026-11-07.md](DAILY_INDEXING_LOG_2026-11-07.md). Historical inspection history: 77 rows, 42 unique URLs, 19 repeated URL keys, 35 extra rows.
- Tracker hourly background checks exceed the project cap; GSC Wizard exposes no pause/throttle control. Owner must pause/reduce hourly schedule; no further daily inspections while union >=10.
- Google sitemap pending since 5 Nov 16:21:51.927Z; warnings=0; errors=0.
- Manual GSC Request Indexing: authenticated browser check redirected to Google Sign-in. No manual request submitted; URL Inspection API is status-only and does not expose full manual history. Prior record: 10 attempts / 9 unique URLs, Fractions twice. Owner candidate list and skip warning are in the daily log.
- Bing property verified; sitemap feed Success for 104 URLs, last crawled 3 Nov; quota 100/day and 2,400/month; crawl issues=0; crawl stats unavailable (no dated rows). No direct Bing URL Submission action exists.
- IndexNow key set and key file verified. Complete history 447 rows / 104 unique URLs / 343 extra repeat rows; HTTP 200=373, HTTP 202=74. Sitemap/history exact match; 0 new, 0 historical-only, 0 submissions today. All 104 unchanged sitemap URLs skipped. Acceptance is not indexing.
- Fresh on-page sample: 25/25 indexable HTTP 200 with self-canonicals, no noindex or redirects; internal links 7–47; 0 critical/high/medium, 12 low notes (7 long titles, 5 missing optional structured data). Full 104-page inbound-link graph remains outstanding.
- Full evidence, exact 38 tracker URLs, all 104 IndexNow skip URLs, historical duplicates, 25-page audit and blockers: [DAILY_INDEXING_LOG_2026-11-07.md](DAILY_INDEXING_LOG_2026-11-07.md).

### Current execution priorities
1. Owner pauses/reduces GSC hourly tracker; do not inspect more URLs while Pakistan-date union is >=10.
2. Wait for Google sitemap processing; resume only when strict cap allows.
3. Owner checks manual Request Indexing history and skips previously requested URLs.
4. No IndexNow resubmission for unchanged URLs; 104/104 are already in history.
5. Complete full internal-link graph when rate limits permit; continue Computer Science and Financial Literacy QA in preview branches.
6. Resolve title/structured-data notes only via preview QA; do not mass-edit production metadata.
