# Learnora — Master Timeline, Backlog & Earnings Roadmap

**Prepared:** 4 November 2026  
**Production:** https://learnora-ab2.pages.dev/  
**Repository:** https://github.com/com-orgs/learnora

> Traffic, rankings, indexing and revenue cannot be guaranteed. This plan prioritises measurable work, student value, search intent and safe monetisation. Do not invent keyword metrics or publish thin pages merely to increase URL count.

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
