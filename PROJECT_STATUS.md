# Learnora — Project Status & Continuation Tracker

> **Single source of truth for all future chats and development sessions.**
> Before starting work, read this file and inspect the current audit-branch HEAD/CI. After every meaningful task, update the task log and next actions. The GitHub Actions workflow automatically refreshes the CI status block below after each run on a branch (not pull-request runs). Production merge/deployment requires explicit user approval; the user authorized merge and deployment on 2026-11-02.

## Current verified state — 4 November 2026 (post-PR #29 release)

- Production website: https://learnora-ab2.pages.dev/
- Latest production main commit: `f21f33683147938003509e077168c5d0599b2311`.
- PR [#29](https://github.com/com-orgs/learnora/pull/29) merged successfully; added curriculum-neutral Sources and Further Reading to Grade 6 Understanding Decimals and Place Value. Merge commit: `f21f33683147938003509e077168c5d0599b2311`.
- Full preview QA run [#41881452008](https://github.com/com-orgs/learnora/actions/runs/41881452008) passed all 10 steps. QA-tested lesson blob SHA was identical to the lesson blob in the final PR head; the only later change was the project tracker.
- Cloudflare Pages deployment [#41885045804](https://github.com/com-orgs/learnora/actions/runs/41885045804) completed successfully. Main static/legal audit [#41885045813](https://github.com/com-orgs/learnora/actions/runs/41885045813) completed successfully.
- Production lesson verified live: https://learnora-ab2.pages.dev/math/grade-6/understanding-decimals. All three references are present: OpenStax Prealgebra 2e 5.1, Khan Academy Grade 6 Math (WNCP) and NCETM Place Value/Estimation/Rounding. Title, description, self-canonical, `index,follow` and Open Graph metadata verified. Production homepage also fetched successfully.
- Ahrefs Free onboarding email recommends connecting Google Search Console to verify the site and run a Site Audit. The connected Ahrefs API currently returns `Insufficient plan`; no paid usage or upgrade was made. Free account verification through its UI remains a possible owner-side step.
- Google Tag email says no Google tag was detected. Keep GA4/Google Tag disabled until child/mixed-audience privacy, legal basis and consent requirements are reviewed. Do not paste the suggested tag snippet into the site yet.
- Cloudflare welcome email contains generic feature suggestions only; no security/performance setting was changed. Review settings individually before enabling, preserving Google/AI crawler access and the existing restrictive CSP.
- GitHub Actions notification investigation: run [#41878714047](https://github.com/com-orgs/learnora/actions/runs/41878714047) failed only at “Resolve the exact Cloudflare PR branch preview”; static and legal checks passed. This is a workflow timing/trigger issue, not a production-site failure. The workflow currently triggers on every `seo/**` push as well as pull_request, so pushes before Cloudflare has posted a PR preview comment can create noisy false failures. Proposed fix: stop running preview-required QA on standalone `seo/**` pushes; let pull_request opened/synchronize/reopened events run the preview QA. Keep static/legal checks on main and retain explicit workflow_dispatch.
- A content review of the production decimals lesson noticed the existing “Common Mistakes to Avoid” heading is immediately followed by the next section, with no explanatory content. This predates PR #29; queue a small educational-content correction after the CI trigger fix.
- No GSC URL inspection was performed in this session. Avoid further inspections today because the prior indexing automation exceeded the intended daily cap. Sitemap/performance reads are quota-free and may be checked separately.

## Next actions — 4 November
1. [ ] Fix noisy GitHub Actions triggers for `seo/**` branches without weakening pull-request preview QA.
2. [ ] Add concise, accurate “Common Mistakes to Avoid” content to the decimals lesson via a preview-tested PR.
3. [ ] Continue source-attribution work on remaining lessons; recalculate actual lesson inventory before updating counts.
4. [ ] Review current GSC sitemap and settled search performance using read-only reports; no URL inspection requests today.
5. [ ] Ahrefs Free UI verification only if it can be completed at no cost; do not use paid API features.
6. [ ] Keep Google tag/GA4 disabled pending child-audience privacy and consent review.

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
- Tested commit: `e1d8116617fde80dbf6245db0723869c64ca00de`
- Workflow: Learnora Site Audit (run [#41886144827](https://github.com/com-orgs/learnora/actions/runs/41886144827))
- Last updated automatically: run #41886144827 on branch `seo/grade6-adding-subtracting-decimals-sources-2026-11-04`.


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
