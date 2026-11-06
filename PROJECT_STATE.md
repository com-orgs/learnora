# Learnora Project State

Checkpoint: 5 November 2026
Production: https://learnora-ab2.pages.dev/
Repository: https://github.com/com-orgs/learnora

## Completed
- Grade 6 source-code QA sample expanded to 9 lesson pages.
- 45/45 quiz answer-key mappings match visible question answer choices.
- Dedicated source heading present on 6/9 sampled lessons; absent on Algebraic Expressions, Integers and the Number Line, and Order of Operations.
- Firecrawl current balance checked: 0 credits. No crawl/scrape or paid operation initiated.
- No GSC inspections, no manual Request Indexing, no production edits and no deployment.
- PROJECT_STATUS.md and master roadmap updated with the new findings.

## Files inspected in latest batch
- math/grade-6/algebraic-expressions.html
- scripts/pages/math-grade-6-algebraic-expressions.js
- math/grade-6/integers-number-line.html
- scripts/pages/math-grade-6-integers-number-line.js
- math/grade-6/order-of-operations.html
- scripts/pages/math-grade-6-order-of-operations.js
- math/grade-6/understanding-percentages.html
- scripts/pages/math-grade-6-understanding-percentages.js

## Blockers
- GSC tracker hourly background checks remain active; connector exposes no pause/throttle action. Daily GSC cap remains exceeded on 5 Nov.
- Complete source-section inventory across all 77 lessons is not yet recounted.
- Three sampled lessons need source-attribution review.
- Source-code key consistency does not replace mathematical validation, browser testing or independent educator review.
- Firecrawl credits are at zero; use GitHub source inspection until credits return or owner authorizes another free method.

## Next actions
1. Review exact claims and add suitable sources for the three flagged Grade 6 lessons, on a preview branch only.
2. Recalculate worked examples and worksheet answer keys for these topics.
3. Recount source headings across all 77 lesson files before reporting a site-wide percentage.
4. Run browser and live-fetch QA when an authenticated browser context or free crawl capacity is available.
5. Keep production unchanged until explicit QA and release gates pass.

## Project tree
- math/grade-6/ — lesson HTML
- scripts/pages/ — lesson quiz scripts
- PROJECT_STATUS.md
- LEARNORA_MASTER_ROADMAP_2026-11-04.md
- PROJECT_STATE.md


## Latest checkpoint — Algebraic Expressions (5 Nov 2026)

### Completed
- Reviewed `math/grade-6/algebraic-expressions.html` and `scripts/pages/math-grade-6-algebraic-expressions.js`.
- Checked lesson calculations, 8 practice answers, 7 worksheet answer-key items, and 5 quiz answer mappings; reviewed items are consistent.
- Improved like-terms definition; added two relevant OpenStax Prealgebra 2e references.
- Created preview branch `qa/grade6-algebraic-expressions-sources` and Draft PR #40: https://github.com/com-orgs/learnora/pull/40.
- Re-fetched changed branch file; confirmed source section and quiz-script mapping integrity.

### Current safety state
- PR is draft and unmerged. No production HTML/script changed, no deploy, no GSC inspection.
- Browser interaction QA and independent educator review not yet done.

### Next action
- Continue source-code academic QA on `math/grade-6/integers-number-line.html` and its script: independently verify lesson examples, practice answers and worksheet answer key; check source links and relevance before proposing any change on a separate preview branch.

### Project tree
- math/grade-6/ — lesson HTML
- scripts/pages/ — lesson quiz scripts
- qa/grade6-algebraic-expressions-sources — preview branch (PR #40)
- PROJECT_STATUS.md
- LEARNORA_MASTER_ROADMAP_2026-11-04.md
- PROJECT_STATE.md


## Checkpoint update — Integers lesson reviewed (5 Nov 2026)

### Completed since previous checkpoint
- Reviewed Grade 6 Integers and the Number Line HTML and quiz JS.
- Checked all visible lesson examples, 7 practice answers, 7 worksheet answer-key items, and 5 quiz mappings; all reviewed answers are consistent.
- Added OpenStax Prealgebra 2e section 3.1 as a source in preview branch `qa/grade6-integers-sources`.
- Created Draft PR #41: https://github.com/com-orgs/learnora/pull/41.
- Algebraic Expressions PR #40 is also draft and unmerged.

### Current production safety
- Both PRs are draft and unmerged; no production changes or deployment.
- No GSC inspections performed during these content QA tasks.
- Live browser interaction QA and independent educator review are still outstanding.

### Next action
- Continue with `math/grade-6/order-of-operations.html` and its page script. Verify the worked examples, practice and worksheet answers independently, match quiz keys to visible options, and identify an appropriate open academic reference. If a change is justified, use a separate preview branch and draft PR.

### Project tree
- math/grade-6/ — lesson HTML
- scripts/pages/ — lesson quiz scripts
- qa/grade6-algebraic-expressions-sources — Draft PR #40
- qa/grade6-integers-sources — Draft PR #41
- PROJECT_STATUS.md
- LEARNORA_MASTER_ROADMAP_2026-11-04.md
- PROJECT_STATE.md


## Checkpoint update — Order of Operations reviewed (5 Nov 2026)

### Completed since previous checkpoint
- Reviewed Grade 6 Order of Operations HTML and quiz JS.
- Independently checked 8 practice answers and 8 worksheet answer-key items; all checked arithmetic is correct.
- Confirmed 5/5 quiz answer mappings match visible options.
- Clarified lesson scope: introductory content covers brackets and four basic operations; exponents/indices are deferred. Added relevant OpenStax Prealgebra 2e reference.
- Created preview branch `qa/grade6-order-operations-sources`, Draft PR #42: https://github.com/com-orgs/learnora/pull/42.

### Open preview PRs
- #40 Algebraic Expressions — draft, unmerged.
- #41 Integers and Number Line — draft, unmerged.
- #42 Order of Operations — draft, unmerged.

### Production safety
- No production HTML/script changes and no deployment.
- Browser interaction QA and independent educator review remain outstanding.
- No GSC inspection performed during content QA.

### Next action
- Audit `math/grade-6/understanding-percentages.html` and its page script: verify definitions, worked examples, practice and worksheet answer keys, and quiz mappings. Check source relevance and only propose changes on a separate preview branch.

### Project tree
- math/grade-6/ — lesson HTML
- scripts/pages/ — lesson quiz scripts
- qa/grade6-algebraic-expressions-sources — Draft PR #40
- qa/grade6-integers-sources — Draft PR #41
- qa/grade6-order-operations-sources — Draft PR #42
- PROJECT_STATUS.md
- LEARNORA_MASTER_ROADMAP_2026-11-04.md
- PROJECT_STATE.md


## Checkpoint update — Understanding Percentages reviewed (5 Nov 2026)

### Completed since previous checkpoint
- Reviewed `math/grade-6/understanding-percentages.html` and `scripts/pages/math-grade-6-understanding-percentages.js`.
- Independently recomputed all 7 practice answers and all 7 worksheet answer-key items; all are correct.
- Confirmed all 5 quiz correct-answer mappings match the visible options and feedback.
- Checked the lesson's 3 listed references: OpenStax and Illustrative Mathematics were reachable and directly relevant; Khan Academy returned a client challenge and remains unverified.
- The page already contains a substantial explanation, multiple worked examples, everyday applications, misconception guidance, independent practice, worksheet, answer key and source section. No content edit was justified in this pass.
- Internal desk-audit estimate: 94/100 for this page only; not a Google score and not transferable to the site-wide score.
- Added `PHASE14_PERCENTAGES_QA_2026-11-05.md` as the audit record.

### Current production safety
- Read-only review only. No production HTML/JS changed, no deployment and no GSC inspection.
- No independent educator review is claimed.
- Existing Draft PRs #40, #41 and #42 remain separate preview work; do not merge them as part of this read-only audit.

### Next action
- Audit `math/grade-6/percentage-increase-decrease.html` and `scripts/pages/math-grade-6-percentage-increase-decrease.js`: verify definitions, examples, practice and worksheet answers independently, match quiz keys to visible options, and validate sources. Make changes only on a separate preview branch if a concrete issue is found.

### Project tree
- `math/grade-6/` — Grade 6 lesson HTML
- `scripts/pages/` — lesson quiz scripts
- `PHASE14_PERCENTAGES_QA_2026-11-05.md` — percentage lesson QA
- `qa/grade6-algebraic-expressions-sources` — Draft PR #40
- `qa/grade6-integers-sources` — Draft PR #41
- `qa/grade6-order-operations-sources` — Draft PR #42
- `PROJECT_STATE.md` — current resume checkpoint


## Checkpoint update — Percentage Increase and Decrease reviewed (5 Nov 2026)

### Completed since previous checkpoint
- Reviewed `math/grade-6/percentage-increase-decrease.html` and `scripts/pages/math-grade-6-percentage-increase-decrease.js`.
- Independently recomputed 6/6 practice answers and 5/5 worksheet answer-key items; all are correct.
- Confirmed all 5 quiz keys match visible answer options and feedback.
- Reviewed 7 worked/context calculations; all are consistent.
- Verified OpenStax Section 6.2 and Illustrative Mathematics Discounted Books are reachable and relevant. Khan Academy returned a client challenge and remains unverified.
- No content edit was justified. Internal desk-audit estimate: 94/100 for this page only; not a Google score or independent certification.
- Added `PHASE14_PERCENTAGE_CHANGE_QA_2026-11-05.md`.

### Current production safety
- Read-only review only. No production HTML/JS changes, no deployment and no GSC inspection.
- Independent educator review remains outstanding.
- Draft PRs #40, #41 and #42 remain separate and unmerged.

### Next action
- Prioritise thinner Computer Science, AI Literacy and Financial Literacy lessons, starting with `ai-literacy/ai-safety.html` and its quiz script. Verify safety, privacy and other update-sensitive claims against current primary sources; check practice, worksheet and quiz answers; propose edits only on a separate preview branch when evidence supports them.

### Project tree
- `math/grade-6/` — mathematics lesson HTML
- `scripts/pages/` — lesson quiz scripts
- `PHASE14_PERCENTAGES_QA_2026-11-05.md` — Understanding Percentages QA
- `PHASE14_PERCENTAGE_CHANGE_QA_2026-11-05.md` — Percentage Increase/Decrease QA
- `qa/grade6-algebraic-expressions-sources` — Draft PR #40
- `qa/grade6-integers-sources` — Draft PR #41
- `qa/grade6-order-operations-sources` — Draft PR #42
- `PROJECT_STATE.md` — current resume checkpoint


## Checkpoint update — AI Safety lesson strengthened on preview (5 Nov 2026)

### Completed since previous checkpoint
- Audited `ai-literacy/ai-safety.html` and the shared `scripts/pages/new-subject-lessons.js` quiz map.
- Confirmed all five visible quiz answer mappings match the visible options.
- Identified gaps in the original lesson: no dedicated sources section, no substantive worked scenario, limited privacy detail, thin practice, no worksheet answer key, and a recap referring to worked examples that were not present.
- Checked current primary guidance from UNICEF (2025 Version 3.0), NIST AI RMF Section 3 and UNESCO's generative-AI education guidance. All three URLs were reachable and relevant.
- Expanded the lesson on a preview branch with a classroom fairness scenario, student privacy guidance, safe/ethical study workflow, age-rule caution, worked scenarios, practice answer features, worksheet answer key and source section.
- Source-level QA passed: one H1, five quiz fieldsets, correct shared quiz-map entry, canonical/OG match, three primary sources, worksheet answer key, no invented reviewer and safe new-tab link rel attributes.
- Cloudflare preview homepage and updated AI Safety page fetched successfully.
- Created audit record `PHASE14_AI_SAFETY_QA_2026-11-05.md`.

### Current branch / release state
- Active preview branch: `qa-ai-safety-content-quality`.
- Draft PR #59: https://github.com/com-orgs/learnora/pull/59.
- Preview page: https://qa-ai-safety-content-quality.learnora-ab2.pages.dev/ai-literacy/ai-safety.
- GitHub Actions PR audit run #42051906144: static website audit and legal/pre-monetisation checks passed; preview header/assets and browser checks were still pending when checkpoint was written.
- Earlier slash-named branch PR #58 was closed because its branch name was unsuitable for the documented Cloudflare Pages preview-hostname fallback. PR #59 uses a clean branch name.
- No production HTML/JS change, merge or deployment. No GSC inspection.
- Independent educator and child-safeguarding expert review remain outstanding.

### Next action
- Finish CI for PR #59 and inspect any failures. If preview/browser checks pass, keep the change as a reviewed draft until release approval. Then audit the remaining short-form AI Literacy, Computer Science and Financial Literacy lessons, prioritising the highest-risk privacy/safety and factual claims.

### Project tree
- `ai-literacy/ai-safety.html` — updated only on preview branch
- `scripts/pages/new-subject-lessons.js` — shared quiz script; inspected, unchanged
- `PHASE14_AI_SAFETY_QA_2026-11-05.md` — audit record
- `PHASE14_PERCENTAGES_QA_2026-11-05.md` — Understanding Percentages QA
- `PHASE14_PERCENTAGE_CHANGE_QA_2026-11-05.md` — Percentage Increase/Decrease QA
- `qa-ai-safety-content-quality` — active preview branch, PR #59
- `PROJECT_STATE.md` — current resume checkpoint


## Checkpoint update — AI Safety QA passed; How AI Works preview ready (5 Nov 2026)

### Completed since previous checkpoint
- AI Safety PR #59 preview passed the full GitHub CI workflow, including static audit, legal/pre-monetisation checks, Cloudflare preview/security checks and Playwright mobile/desktop/quiz checks. Run: https://github.com/com-orgs/learnora/actions/runs/42052324235.
- Re-fetched the AI Safety preview after CI success; revised lesson content and sources were served correctly. PR #59 remains draft and unmerged.
- Audited `ai-literacy/how-ai-works.html` and the shared quiz map. Existing five quiz keys match the visible options; shared JS unchanged.
- Checked Google for Developers' current ML introduction, Microsoft Learn's ML learning path and Google Teachable Machine homepage.
- Expanded AI vs ML, datasets/features/labels, training/inference, separate testing, classification/regression/clustering/generative AI, worked school-message example, five practice explanations and worksheet answer key.
- Added sources and corrected recap. Source-level checks passed for one H1, five quiz questions, canonical/OG consistency, source links, worksheet answer key and safe external-link rel attributes.
- Created audit record `PHASE14_HOW_AI_WORKS_QA_2026-11-05.md`.
- Draft PR #60: https://github.com/com-orgs/learnora/pull/60.
- Cloudflare preview deployed and fetched: https://qa-how-ai-works-content-qual.learnora-ab2.pages.dev/ai-literacy/how-ai-works.
- GitHub Actions run #42054837940: static audit, legal-readiness, preview URL resolution, preview security headers/assets all passed. Playwright browser checks were still running at checkpoint time.
- A small CI workflow correction on PR #60 uses `github.head_ref || github.ref_name` to resolve the actual source branch name for preview fallback.

### Current release safety
- PR #59 and PR #60 are draft, unmerged, and not deployed to production.
- No production HTML/JS change and no GSC inspection.
- AI Safety and How AI Works page-level editorial estimates must not be presented as site-wide scores.

### Next action
- Confirm PR #60 browser smoke tests complete successfully. If pass, retain as reviewed draft pending release approval.
- Continue with `ai-literacy/verify-ai.html`: check source-verification claims, date handling, source hierarchy, worked examples, practice answers and worksheet. Do not add sources that are not relevant or verified.

### Project tree
- `ai-literacy/ai-safety.html` — revised on PR #59 preview branch
- `ai-literacy/how-ai-works.html` — revised on PR #60 preview branch
- `scripts/pages/new-subject-lessons.js` — shared quiz map, inspected and unchanged
- `PHASE14_AI_SAFETY_QA_2026-11-05.md` — AI Safety audit record
- `PHASE14_HOW_AI_WORKS_QA_2026-11-05.md` — How AI Works audit record
- `PHASE14_PERCENTAGES_QA_2026-11-05.md` — Understanding Percentages QA
- `PHASE14_PERCENTAGE_CHANGE_QA_2026-11-05.md` — Percentage Increase/Decrease QA
- `qa-ai-safety-content-quality` — PR #59 preview branch
- `qa-how-ai-works-content-quality` — PR #60 preview branch
- `PROJECT_STATE.md` — current resume checkpoint


### CI completion — How AI Works PR #60 (5 Nov 2026)
- Final workflow run [#42054837940](https://github.com/com-orgs/learnora/actions/runs/42054837940) completed with **success**.
- Passed static website audit, legal/pre-monetisation audit, Cloudflare preview resolution, security headers/assets checks, Playwright/Chromium installation and mobile/desktop/quiz browser smoke tests.
- PR #60 remains draft and unmerged. No production deployment.


## Checkpoint update — Verify AI lesson revised on preview (5 Nov 2026)

### Completed since previous checkpoint
- AI Safety PR #59: full CI success, including browser tests (run #42052324235); preview re-fetched successfully. Remains draft/unmerged.
- How AI Works PR #60: full CI success, including Playwright mobile/desktop/quiz browser tests (run #42054837940); preview page and homepage fetched successfully. Remains draft/unmerged.
- Audited `ai-literacy/verify-ai.html` and shared quiz script. All five existing quiz keys match visible options; shared JS unchanged.
- Verified Digital Inquiry Group / Civic Online Reasoning's lateral-reading guidance and Purdue OWL's source-evaluation guidance. Library of Congress candidate source was blocked during fetch and was not cited.
- Expanded the lesson with claim decomposition, source evaluation, primary/secondary source nuance, lateral reading, independent cross-checking and evidence status labels (supported, contradicted, partly supported, unverified).
- Added two worked examples, five practice explanations, worksheet answer key and source section.
- Source-level checks passed for one H1, five quiz fields, five correct answer mappings, canonical/OG match, two verified references, practice and worksheet answers, safe external-link rel attributes.
- Created `PHASE14_VERIFY_AI_QA_2026-11-05.md`.
- Draft PR #61: https://github.com/com-orgs/learnora/pull/61.
- CI run #42055587328 was superseded by the branch update; latest run #42055624934 was pending at checkpoint time. Cloudflare preview build was also in progress.

### Current release safety
- PR #59, #60 and #61 remain draft/unmerged. No production HTML/JS changes or deployment.
- No GSC inspections performed in this batch.
- Page-level editorial improvements do not establish site-wide 92+ score.

### Next action
- Finish PR #61 preview and CI browser checks. If successful, keep as draft pending release approval.
- Then audit Computer Science and Financial Literacy content for actual lesson depth, practice feedback, worked examples, answer keys and source relevance.

### Project tree
- `ai-literacy/ai-safety.html` — revised on PR #59
- `ai-literacy/how-ai-works.html` — revised on PR #60
- `ai-literacy/verify-ai.html` — revised on PR #61
- `scripts/pages/new-subject-lessons.js` — shared quiz map inspected, unchanged
- `PHASE14_AI_SAFETY_QA_2026-11-05.md`
- `PHASE14_HOW_AI_WORKS_QA_2026-11-05.md`
- `PHASE14_VERIFY_AI_QA_2026-11-05.md`
- `PHASE14_PERCENTAGES_QA_2026-11-05.md`
- `PHASE14_PERCENTAGE_CHANGE_QA_2026-11-05.md`
- `qa-ai-safety-content-quality` — PR #59
- `qa-how-ai-works-content-quality` — PR #60
- `qa-verify-ai-content-quality` — PR #61
- `PROJECT_STATE.md` — current resume checkpoint


### Verify AI preview update — 5 Nov 2026
- PR #61 Cloudflare branch preview deployed successfully:
  https://qa-verify-ai-content-quality.learnora-ab2.pages.dev/ai-literacy/verify-ai
- Preview homepage and revised lesson fetched successfully; the page contains the new claim-checking workflow, lateral reading, four evidence statuses, worked examples, practice answers, worksheet answer key and source section.
- Static audit, legal readiness, preview resolution and security header/assets steps passed in run #42055587328. Playwright browser checks were still in progress; run #42055624934 was queued after the CI branch-name correction.
- No production merge/deployment.


## Checkpoint update — AI answer verification lesson QA passed (5 Nov 2026)

### Completed
- PR #61 updated `ai-literacy/verify-ai.html` on branch `qa-verify-ai-content-quality`.
- Added claim-by-claim checking, author/purpose/evidence/date/context/scope/fit checks, primary-vs-secondary source context, lateral reading, independent corroboration and four honest statuses: supported, contradicted, partly supported, unverified.
- Added worked examples, six common mistakes, five practice explanations, worksheet and suggested answer key.
- Added Digital Inquiry Group / Civic Online Reasoning and Purdue University OWL references after fetching and checking both.
- Inspected shared quiz map; five quiz keys match visible choices. Shared JS unchanged.
- Source-level checks passed: one H1, five quiz questions, canonical/OG match, robots index/follow, safe external-link rel attributes, no fabricated author/reviewer/credential/endorsement.
- Preview deployed and fetched successfully: https://qa-verify-ai-content-quality.learnora-ab2.pages.dev/ai-literacy/verify-ai.
- GitHub Actions run [#42055624934](https://github.com/com-orgs/learnora/actions/runs/42055624934) passed: static audit, legal/pre-monetisation audit, Cloudflare preview resolution, security headers/assets and Playwright/Chromium mobile, desktop and quiz browser tests.
- QA report: https://github.com/com-orgs/learnora/blob/main/PHASE14_VERIFY_AI_QA_2026-11-05.md.
- Draft PR #61: https://github.com/com-orgs/learnora/pull/61.

### AI Literacy draft PRs
- PR #59 AI Safety — draft, unmerged; CI/browser tests passed (run #42052324235).
- PR #60 How AI Works — draft, unmerged; CI/browser tests passed (run #42054837940).
- PR #61 How to Check AI Answers and Sources — draft, unmerged; CI/browser tests passed (run #42055624934).
- No production lesson changes or deployment have been made from these three PRs.

### Next action
- Continue auditing remaining AI Literacy lesson pages and their answer mappings.
- Then audit Computer Science and Financial Literacy lessons.
- Before any production release, review all three AI Literacy PRs together, check cross-links and sitemap integrity, then run a final combined regression test. Obtain release approval before merge/deployment.

### Current project tree
- `ai-literacy/ai-safety.html` — PR #59 preview branch
- `ai-literacy/how-ai-works.html` — PR #60 preview branch
- `ai-literacy/verify-ai.html` — PR #61 preview branch
- `scripts/pages/new-subject-lessons.js` — shared quiz answer map; inspected, unchanged
- `PHASE14_AI_SAFETY_QA_2026-11-05.md` — AI Safety QA
- `PHASE14_HOW_AI_WORKS_QA_2026-11-05.md` — How AI Works QA
- `PHASE14_VERIFY_AI_QA_2026-11-05.md` — AI answer verification QA
- `PROJECT_STATE.md` — resume checkpoint


## Checkpoint update — Algorithms and Flowcharts preview (5 Nov 2026)

### Completed
- Reviewed `computer-science/algorithms.html`; initial page lacked in-depth worked examples, practice answer reasoning, worksheet key and sources.
- Checked BBC Bitesize pages on algorithms, flowcharts and sequence/selection/iteration, plus Teach Computing / National Centre for Computing Education's flowcharts and pseudocode course.
- Updated the lesson on branch `qa-algorithms-content-quality`: clear/finite/testable algorithms, inputs-processes-outputs, decomposition, a validated pass-check algorithm, three control structures, loop types and trace table, labelled flowchart path, boundary tests, five practice explanations and worksheet answer key.
- Source-level QA passed: one H1, five quiz questions, all five existing answer keys match visible options, canonical/OG consistency, four relevant source references and safe external-link rel attributes. Shared quiz JS unchanged.
- Draft PR #62: https://github.com/com-orgs/learnora/pull/62.
- Cloudflare preview fetched successfully: https://qa-algorithms-content-qualit.learnora-ab2.pages.dev/computer-science/algorithms.
- Static website audit, legal/pre-monetisation audit, preview resolution and preview headers/assets passed in GitHub Actions run #42057241438. Playwright mobile/desktop/quiz checks were still in progress at checkpoint time.
- QA report: https://github.com/com-orgs/learnora/blob/main/PHASE14_ALGORITHMS_QA_2026-11-05.md.

### Release safety
- PR #62 is draft and unmerged. No production lesson changes or deployment.
- AI Literacy PRs #59, #60 and #61 also remain draft and unmerged.
- Do not describe preview-only lesson scores as a site-wide score.

### Next actions
- Confirm PR #62 browser test completion and update its QA report.
- Continue with `computer-science/python-basics.html`, then `computer-science/html-css.html`.
- Continue Financial Literacy pages after Computer Science.
- Run final combined regression tests and obtain release approval before merging/deploying.

### Project tree / branches
- `ai-literacy/ai-safety.html` — PR #59 preview
- `ai-literacy/how-ai-works.html` — PR #60 preview
- `ai-literacy/verify-ai.html` — PR #61 preview
- `computer-science/algorithms.html` — PR #62 preview
- `scripts/pages/new-subject-lessons.js` — shared quiz map, unchanged
- `PHASE14_ALGORITHMS_QA_2026-11-05.md` — Algorithms QA
- `PROJECT_STATE.md` — current resume checkpoint


## Checkpoint update — Indexing and live technical audit (5 Nov 2026)

### Completed
- Rechecked Google Indexing Tracker: 104 tracked URLs; 1 indexed (homepage), 103 not indexed; all 103 currently report "URL is unknown to Google", with no recorded indexing errors or warnings. Latest tracker check: 2026-11-05T16:21:18Z.
- Rechecked Google sitemap: `https://learnora-ab2.pages.dev/sitemap.xml` submitted 2026-11-05T16:21:51Z; currently pending download, with 0 warnings and 0 errors.
- Checked Google URL Inspection quota: 85 used / 2,000 daily; 1,915 remaining at time of check.
- Verified live `robots.txt`: allows all user agents, including OAI-SearchBot, and declares the sitemap.
- Verified live sitemap returns HTTP 200 and contains the Learnora URL set.
- Audited 10 representative homepage, subject, grade and lesson pages with GSC Wizard on-page audit: all 10 indexable; 0 critical, 0 high, 0 medium issues; 2 low-severity title-length notes (Algorithms and Flowcharts; Financial Literacy landing page).
- Firecrawl live fetch confirmed homepage, robots.txt, sitemap and sampled pages return HTTP 200. Representative pages have index,follow, self-referencing canonicals, one H1 and LearningResource JSON-LD on the Algorithms lesson. Homepage links directly to subject, grade and lesson URLs; Grade 6 and Science landing pages link to their lessons.
- Bing crawl-issue report returned 0 issue rows. Bing crawl-statistics endpoint currently returns no daily rows, so indexed-page count is not available from that report.
- IndexNow history has 447 records (many repeat submissions); previous sitemap reconciliation confirmed all 104 unique sitemap URLs were notified to Bing. Submission acceptance is not proof of indexing.
- Manual Google Search Console UI Request Indexing attempts previously completed for 10 URLs, representing 9 unique URLs (Fractions was submitted twice). These are requests only, not confirmed indexing.

### Interpretation / current blockers
- No confirmed robots, canonical, HTTP-status or noindex defect found in the sampled pages.
- The main current bottleneck is Google not yet knowing/crawling most URLs; sitemap status is still pending download. This may change after Google fetches the sitemap and crawls internal links.
- GSC URL Inspection API does not provide the manual Request Indexing action. Additional manual requests require the Search Console web interface; the earlier TinyFish UI run completed but its execution budget was exhausted before a broader batch.
- Do not repeat IndexNow for unchanged URLs or keep spending inspection quota on the same "unknown to Google" results. Wait for sitemap processing / crawl signals, then target pages that change status or have a specific diagnosed issue.
- Do not claim any of the not-indexed pages are indexed until Google URL Inspection or the Indexing report confirms it.

### Next actions
1. Recheck sitemap processing and URL Inspection status after Google has had time to fetch the sitemap.
2. Prioritise pages with actual user value and strong internal links; when UI automation budget is available, request indexing for a small next batch of important URLs that have not already been submitted.
3. Recheck tracker changes (newly indexed vs still unknown) and inspect only pages whose state changes or that show a specific coverage issue.
4. Consider shortening the two low-severity long titles during the next content QA pass; this is not an indexing blocker.
5. Continue the existing editorial QA / preview PR workflow; do not merge preview-only PRs or change production solely to chase indexing.

### Project tree / current release safety
- Live site: `https://learnora-ab2.pages.dev/`
- `robots.txt`, `sitemap.xml` — live, HTTP 200
- `PROJECT_STATE.md` — this resume checkpoint
- AI Literacy preview PRs #59, #60, #61 — draft/unmerged
- Algorithms preview PR #62 — draft/unmerged; browser CI completion still needs verification
- No production content edits, merge or deployment were made during this indexing audit.


## Checkpoint update — PR #62 mobile overflow found and fix submitted (6 Nov 2026)

### Completed
- Rechecked open preview PRs #59–#62. PRs #59, #60 and #61 each have successful GitHub Actions run conclusions. All four remain draft and unmerged.
- PR #62's earlier workflow run #42057241438 failed only at the Playwright browser-smoke stage after static audit, legal readiness, preview resolution, security headers/assets and Chromium setup had passed.
- Browser log identified one concrete defect: `/computer-science/algorithms` had horizontal overflow at 320px width, caused by the long pseudocode code block inside a `pre` element (document width 347px).
- Added narrow-screen CSS to wrap pseudocode safely and constrain the code block on the PR #62 preview branch. Commit: `4bf767d92c2e1e96a78a462ce5e619f6388bb680`.
- New GitHub Actions run #42146364198 was triggered for the fix and was still in progress at the time of this checkpoint.
- No production merge, deployment or live-site change.

### Next actions
1. Wait for run #42146364198 to complete; inspect Playwright results. If overflow persists, adjust CSS on the preview branch and rerun.
2. If PR #62 passes, keep it draft pending combined review/release approval; do not merge automatically.
3. Continue source and answer-key QA for Computer Science `python-basics.html`, then `html-css.html`, and Financial Literacy lessons.
4. Continue Google indexing monitoring separately; don't resubmit unchanged URLs repeatedly.

### Project tree / state
- `computer-science/algorithms.html` — mobile overflow fix committed on `qa-algorithms-content-quality` (PR #62); new CI pending.
- AI Literacy PRs #59–#61 — draft/unmerged, last known CI success.
- `PROJECT_STATE.md` — updated resume checkpoint.
- Production remains unchanged.


## Daily indexing and discovery checkpoint — 6 November 2026

### Completed
- Read the current PROJECT_STATUS.md and master roadmap, the full 104-row tracker, the complete 77-row URL Inspection history, Google sitemap status, Bing site/feed/quota/crawl endpoints and all 447 IndexNow history rows.
- Daily guard: 39 distinct tracker URLs have lastCheckAt on 6 Nov Pakistan date; URL Inspection history has 0 same-day rows. Union 39/10, overrun 29, remaining 0. No URL Inspection API or tracker-check action was called.
- Tracker is active and the connected GSC Wizard tools expose no pause/throttle action. Owner must pause/reduce the hourly checks in the UI.
- Live sitemap: 104 unique URLs; all 104 appear in IndexNow history; no new/historical-only URL. IndexNow submissions today: 0. Key and key file verified.
- Fresh on-page audit of 25 representative pages: 25/25 indexable, 0 critical/high/medium and 10 low notes. Live fetch verified robots policy and self-canonical/index-follow on eight hubs.
- Created detailed log: DAILY_INDEXING_LOG_2026-11-06.md. Updated PROJECT_STATUS.md and LEARNORA_MASTER_ROADMAP_2026-11-04.md.
- Rechecked PR #62 workflow run #42146364198: completed successfully. PR #62 remains draft/unmerged; PRs #59–#62 remain draft/unmerged.

### Current blockers / limitations
- GSC sitemap still pending (0 warnings/errors); 103 tracker URLs remain not indexed/unknown.
- Daily cap exceeded by 29 due to hourly background tracker checks. No more GSC inspections today.
- No manual Request Indexing request submitted; browser context unavailable and TinyFish strict UI automation requires beta. Existing project checkpoint records 10 manual attempts across 9 unique URLs (Fractions twice); exact per-URL manual history is not available from the API.
- Bing crawl stats return no dated rows; this is unavailable data, not proof of zero crawling.
- Full 104-page internal-link graph not recomputed because TinyFish rate limiting stopped the expanded fetch. Current live sample and 25-page on-page audit show no confirmed indexability blocker.
- Low on-page notes are title/description length and optional structured-data notes; no mass metadata changes made.

### Next actions
1. Owner pauses/reduces GSC hourly background tracker checks in the UI.
2. Owner checks manual Request Indexing history before using any candidate; skip previously requested URLs.
3. Wait for Google sitemap processing; do not re-inspect unchanged URLs or resubmit unchanged IndexNow URLs.
4. Complete full internal-link graph after fetch rate limit clears; continue Computer Science Python Basics, HTML/CSS and Financial Literacy QA in preview branches.
5. Keep PRs #59–#62 unmerged pending combined review and explicit release approval.

### Project tree / current state
- Production: https://learnora-ab2.pages.dev/
- math/grade-6/ — 23/23 Phase 2 lessons released
- ai-literacy/ — PRs #59–#61 preview only
- computer-science/algorithms.html — PR #62 preview only; CI success
- DAILY_INDEXING_LOG_2026-11-06.md — daily exact URL lists and evidence
- PROJECT_STATUS.md
- LEARNORA_MASTER_ROADMAP_2026-11-04.md
- PROJECT_STATE.md


## Checkpoint update — repository and content inventory (6 November 2026)

### Completed
- Verified current production sitemap: 104 unique URLs, zero duplicates; every URL maps to a file in current `main`.
- Enumerated 216 repository files, 105 HTML files and 77 lesson pages across six subject groups.
- Re-fetched all 77 lesson HTML files from `main` and mapped each to a relevant proposed built-in learning tool. The complete page-by-page map is in `LEARNORA_CONTENT_FEATURE_INVENTORY_2026-11-06.md`.
- Recounted dedicated Sources/Further Reading sections: 30/77 (Maths Grade 6 23/23; Maths Grade 7 0/12; Maths Grade 8 3/11; English 2/9; Science 2/13; Computer Science 0/3; AI Literacy 0/3; Financial Literacy 0/3). The 3 Nov count of 7/77 is stale after Grade 6 Phase 2 work; 47 pages remain in the source-section backlog.
- Verified latest PR #62 workflow run #42146364198: static audit 104 HTML pages, 0 warnings; legal/pre-monetisation checks passed; browser checks covered 104 pages at 320/390/768/desktop, 77 quiz submissions, 77 retakes, 79 worksheet print actions and 104 performance budgets. Preview CI only; not production release.
- Confirmed all 77 lesson pages are structurally covered by five-question quizzes and quiz answer-key mappings in the static audit; the current retake behaviour resets the fixed quiz and does not implement the planned larger fresh-question bank.
- Inspected production homepage, fractions, Algorithms and AI Safety pages, sitemap, robots and subject hubs. PR #59–#62 improvements remain preview-only.
- Identified a visual-system gap: homepage and many lesson pages use different palettes; the basic SVG logo asset is not referenced by the homepage.
- Read the deployment and PR audit workflows. Direct pushes to `main` trigger production deployment; all future changes must remain on preview branches and go through PR QA.

### Branch and repository state
- `main` head: `eb30ff69498c122d3670e15475430f4673265846`.
- Existing `strategy/learning-platform-redesign` diverged from main: 4 commits ahead, 6 behind; common base `7b4ab3206f8bbfbfb955ad824e6bf9714074432c`.
- Created fresh working branch from current main: `preview-learnora-redesign-inventory-2026-11-06`.
- Carried forward `LEARNORA_PLATFORM_REDESIGN_BLUEPRINT.md` from the old strategy branch.
- Added `LEARNORA_CONTENT_FEATURE_INVENTORY_2026-11-06.md` with all 77 lessons and proposed tool mappings.
- PR #57 merged; PRs #59–#62 remain draft/open/unmerged with successful latest recorded CI. No PR was merged and no production code/content was changed.

### Outstanding / next actions
1. Verify exceptional quiz structures and script mappings for every lesson; use the latest static audit as baseline and do not repeat Grade 6's completed 115-mapping review.
2. Update the old source-attribution report with the 30/77 recount and exact 47-page backlog.
3. Complete lesson-to-tool mapping and fractions pilot design.
4. Implement only on `preview-learnora-redesign-inventory-2026-11-06`, run PR QA and record exact commits/results.
5. Keep production unchanged until explicit user approval.

### Operational blocker
- The 6 Nov GSC daily guard recorded 39 distinct tracker URLs checked against a daily cap of 10 (29 over). Do not run more URL inspections until the user pauses/reduces the hourly tracker in its UI. This does not block repository inventory or content design.

### Project tree / current checkpoint
```text
learnora/
├── LEARNORA_PLATFORM_REDESIGN_BLUEPRINT.md
├── LEARNORA_CONTENT_FEATURE_INVENTORY_2026-11-06.md
├── PROJECT_STATE.md
└── [existing production source, lessons, scripts, assets, tests and workflows]
```


## Checkpoint update — source attribution recount (6 November 2026)

- Added `PHASE14_SOURCE_ATTRIBUTION_RECOUNT_2026-11-06.md` after rechecking all 77 lesson files.
- Current source-section count: 30/77; missing backlog: 47. This supersedes the historical 3 Nov snapshot of 7/77 because all 23 Grade 6 Maths pages gained source sections during the later Phase 2 QA work.
- Exact page-by-page source backlog is recorded in the new recount report. Do not bulk-add generic citations; verify each source against the claim.
- PRs #59–#62 are not included in current coverage because they remain draft/unmerged. Their preview changes would conditionally add four source sections if later merged.
- No production files were changed; documentation only on `preview-learnora-redesign-inventory-2026-11-06`.


## Checkpoint update — all open PRs reconciled (6 November 2026)

- Queried all open pull requests: **28 open** (23 draft, 5 not draft). This is broader than the previous handover's #59–#62-only list.
- Checked exact head SHA, changed files, draft/open state, mergeability and exact-head workflow result for all 28.
- Exact-head CI: 18 success, 2 failed at Cloudflare preview-URL resolution (#40 and #50), 8 with no workflow run found for the exact current head.
- Eleven PRs report `mergeable=false`; green CI does not equal mergeable or approval.
- Useful pending content work: #40–#43 Grade 6 Maths; #45–#55 Science; #16 Financial Literacy; #59–#62 AI Literacy/Computer Science. PRs #45–#55 cover all 11 current Science source gaps; #16 covers all three Financial Literacy source gaps.
- CI candidate: #56 adds exact-commit Cloudflare check-run fallback, but is not mergeable against current main. #59–#61 also touch the same workflow file with a smaller branch-name fix; consolidate rather than merge overlapping edits separately.
- Likely stale/superseded candidates: #3 (main has a different deployed IndexNow key and newer roadmap), #6 (old QA workflow), #7 (study plan/curriculum/workbook already on main through later releases), #18 (old checkpoint), #27 (the same three sources already exist in the current fractions lesson), and #44 (old 19/77 source count superseded by 30/77 recount). PR #2's production sitemap smoke-test script is a candidate for a fresh-base port, not a direct merge.
- Added `LEARNORA_OPEN_PR_RECONCILIATION_2026-11-06.md` with all 28 PRs, changed files, head branches, CI state and safe consolidation plan.
- No PR was merged or closed. Production remains unchanged.


## Documentation commit ledger — 6 November 2026

Working branch: `preview-learnora-redesign-inventory-2026-11-06` (created from main head `eb30ff69498c122d3670e15475430f4673265846`; 0 commits behind main at creation).

| Change | Commit |
|---|---|
| Carry forward platform redesign blueprint | `c37f2324ce6b3b15e2fa82c237280fffdbb15a88` |
| Add 77-page content and feature inventory | `1f535d2a1ba4daf71fb474c4a46215bfa20a8fa9` |
| Initial repository/content checkpoint | `b195b94e00452540d1212d8eec725526d4ee8052` |
| Add 30/77 source attribution recount | `2c4fb041850282f492180b5b54f6eccee66701d7` |
| Checkpoint source attribution recount | `484b4dfc9c70f9b101a49825d592311f1fd86689` |
| Add all-28-open-PR reconciliation | `3ec493372f0a19a519f8ac8680d3c850d18b9841` |
| Checkpoint PR reconciliation | `ced256921002ba90baed72804d7e88524ed8059d` |
| Remove repeated PR #27 row from reconciliation | `f60f466f7c0f5d06f240728107cdb4a65c162497` |

The current PR reconciliation contains one PR #27 entry. Documentation-only changes have been made on the preview branch; no website source, production branch, open PR state or deployment was changed.


## Final verification of PR reconciliation checkpoint — 6 November 2026

- Reconciliation table now contains exactly 28 unique open PR entries (no repeated PR numbers).
- Documentation-only report cleanup commits: `8c7a691496085a0e63561e2f3fbe71959a077d77` (intermediate formatting attempt), `f60f466f7c0f5d06f240728107cdb4a65c162497` (remove duplicate #27 row), and `3e0ff1d9aa13b4158348874ac9afc8f18612c73e` (remove duplicate #44 row).
- Previous full checkpoint commit: `c96da38eba9dbb40d2342c0e85f56fec3e0b7d40`.
- Final reconciliation report path: `LEARNORA_OPEN_PR_RECONCILIATION_2026-11-06.md`.
- No PR state changed. No production files changed. No merge/deployment occurred.


## Checkpoint update — fractions pilot specification (6 November 2026)

- Inspected the six Grade 6 fractions lesson pages and their linked scripts on current main.
- The 5 Nov fractions QA batch covered five lessons and 25/25 quiz mappings; it did not include the Multiplying/Dividing Fractions lesson in that specific batch. The broader Grade 6 Phase 2 QA still covers all 23 Grade 6 pages and 115 quiz mappings. The multiplication/division lesson needs a focused worked-example/practice/worksheet answer review before release.
- Confirmed the Understanding Fractions quiz uses a fixed five-question set; retake resets the same questions rather than drawing fresh questions from a bank.
- Added `LEARNORA_FRACTIONS_PILOT_SPEC_2026-11-06.md` with course/unit/skill architecture, shared fraction visualizer, exact-arithmetic requirements, accessible modes, question-bank/retake model, worksheet answer-key workflow, internal linking, implementation phases and acceptance tests.
- This is a design document only. No lesson HTML, quiz script, tool code, production branch, PR state or deployment was changed.

### Next action
Reconcile and port useful open content/CI patches onto the current preview branch in controlled subject batches, then implement the fractions pilot against the specification. Keep production unchanged.


## Final branch verification — 6 November 2026

- Before this final checkpoint, working branch `preview-learnora-redesign-inventory-2026-11-06` was 14 commits ahead of `main` and 0 commits behind it.
- Exactly six paths differ from `main`: `LEARNORA_CONTENT_FEATURE_INVENTORY_2026-11-06.md`, `LEARNORA_FRACTIONS_PILOT_SPEC_2026-11-06.md`, `LEARNORA_OPEN_PR_RECONCILIATION_2026-11-06.md`, `LEARNORA_PLATFORM_REDESIGN_BLUEPRINT.md`, `PHASE14_SOURCE_ATTRIBUTION_RECOUNT_2026-11-06.md`, and `PROJECT_STATE.md`.
- All changes are documentation. No lesson, script, sitemap, workflow, asset, production branch or deployment configuration changed.
- Previous project-state commit before this entry: `5e11651ba65ef7363f911fd32a287769fda385a3`.


## Checkpoint update — Grade 6 Maths batch and preview PR #63 (6 November 2026)

### Completed on the working branch
- Ported only scoped, reviewed changes from the original Maths PRs; deliberately did not copy unrelated metadata/table-layout changes present on some PR branches.
- `math/grade-6/algebraic-expressions.html`: clarified that like terms have the same variable part and powers, and that constants are like terms; replaced old source block with two relevant OpenStax Prealgebra 2e sections.
- `math/grade-6/integers-number-line.html`: replaced generic GeoGebra links with OpenStax Prealgebra 2e §3.1 reference for number lines, ordering, opposites and absolute value.
- `math/grade-6/order-of-operations.html`: clarified that multiplication/division share priority and addition/subtraction share priority; made clear that this introductory lesson postpones exponents; added OpenStax §2.1 reference.
- `math/grade-6/understanding-percentages.html`: added OpenStax Prealgebra 2e §6.2 application-of-percent reference.
- Verified the new OpenStax references against the publisher's live pages: §2.1 order of operations, §2.2 like terms and algebraic expressions, §3.1 integers, and §6.2 percent applications.
- Ported CI preview resolver fix into `.github/workflows/site-audit.yml`: use pull-request head branch/SHA, grant `checks: read`, and fall back to the exact commit's successful Cloudflare Pages check run instead of guessing a branch hostname.

### Preview and verification
- Created draft PR **#63**: https://github.com/com-orgs/learnora/pull/63
- Latest PR head before this checkpoint: `8e0c88a4d1f46e52ee395772c8ee8c3f84034185`.
- PR #63 is draft/open and GitHub reports it mergeable; no merge or production deployment was performed.
- CI run #42193457427 passed on the prior content/workflow head; after updating the PR reconciliation document, run #42193787095 also passed on the then-current head.
- Both successful runs included: static audit (104 HTML pages, 68 curriculum lesson files, 68 sitemap lesson URLs, 77 accessible quiz forms and 77 answer-key mappings), legal/pre-monetisation audit, exact-SHA Cloudflare preview resolution, security headers/CSP/assets/custom 404, and Playwright checks across 104 pages at 320/390/768/desktop widths, 77 quiz submissions, 77 retakes, 79 worksheet print actions, performance budgets and no third-party browser requests.
- Updated `LEARNORA_OPEN_PR_RECONCILIATION_2026-11-06.md` to include PR #63 and refresh the open/draft/CI counts: 29 open, 24 draft, 5 non-draft; exact-head workflow summary 19 success, 2 preview-resolution failures, 8 with no exact-head run found (the original 28 PRs plus new #63).
- Working branch comparison before this checkpoint: 20 commits ahead of `main`, 0 behind; 11 changed paths (four Grade 6 Maths lessons, site-audit workflow, five audit/specification documents and `PROJECT_STATE.md`).

### Safety / current state
- Production `main` remains unchanged. No PR has been merged or closed. No production deployment or AdSense/analytics activation occurred.
- PR #63 remains a draft for review and preview QA only. Do not merge or deploy without explicit user approval.

### Next actions
1. Re-run/confirm CI for the latest checkpoint commit after this state update.
2. Continue science content PR review in small batches. Start with source-only changes (#45, #46, #48, #53, #55); give deeper factual edits (#47, #49–#52, #54) separate scientific/answer-key review before porting.
3. After science, review Financial Literacy PR #16 and then AI Literacy/Computer Science PRs #59–#62.
4. Resume Fractions pilot implementation from `LEARNORA_FRACTIONS_PILOT_SPEC_2026-11-06.md`; first audit Multiplying/Dividing Fractions worked examples and worksheet answers.


## Checkpoint update — Science source batch ported (6 November 2026)

### Completed
- Confirmed the previous exact-head CI run `42194105507` completed successfully on commit `35db05352f2d9ace692c94c0ceeb3a61861d1900`.
- Ported source sections only from science PRs #45, #46, #48, #53 and #55 into the current preview branch; no full PR page was copied.
- Replaced the plant/animal-cell Khan Academy link with OpenStax Biology 2e §4.3 because the original Khan URL resolves into a Pakistan National Curriculum Grade 6 course path; OpenStax §4.3 directly covers eukaryotic cells and plant/animal comparisons.
- Verified the main source references for ecosystems, forces/friction/mass-weight, cells, electric circuits and Earth/Moon/space; recorded exact verification status and limitations in `PHASE15_SCIENCE_SOURCE_PORT_2026-11-06.md`.
- No production changes, merge, deployment or GSC indexing request.

### Current working branch
- Branch: `preview-learnora-redesign-inventory-2026-11-06`
- Latest content commit before this checkpoint update: `c77dbd8a407935a30b12d6998e8f1cd87a54c23a`.
- PR #63 remains draft/open; CI for the newly extended head must be checked before calling this batch green.

### QA limitations
- This was a scoped source-section port, not a new full scientific content audit or independent educator review.
- Direct page retrieval for Khan Academy Describing Motion was inconclusive; it was found via search and retained as a supplementary source.
- Browser interaction, screen-reader and print-preview checks remain release gates.

### Next actions
1. Check the exact-head workflow triggered by the latest PR #63 commit; resolve any failures before proceeding.
2. Continue source-only science PR review for #49, #50, #52, then examine content-correction PRs #47, #51 and #54 individually with claim-level verification.
3. Revisit the design-reference benchmark list during the platform redesign phase; use those sites for learning architecture and interaction patterns only, never to copy their wording/assets/code.

### Project tree
- `science/grade-7/` — ecosystems, forces and motion, introduction to cells
- `science/grade-8/` — electric circuits, Earth/Moon/space
- `PHASE15_SCIENCE_SOURCE_PORT_2026-11-06.md` — source verification record
- `LEARNORA_CONTENT_FEATURE_INVENTORY_2026-11-06.md` — 77-lesson source/feature inventory
- `LEARNORA_PLATFORM_REDESIGN_BLUEPRINT.md` — strategy and reference-platform research
- `LEARNORA_FRACTIONS_PILOT_SPEC_2026-11-06.md` — fractions pilot specification
- `PROJECT_STATE.md` — current resume checkpoint


## Checkpoint update — Science source coverage complete (6 November 2026)

### Completed
- Added source sections to the remaining Science lessons through carefully scoped ports from PRs #47, #49, #50, #51, #52, #54 and existing source-only ports #45, #46, #48, #53 and #55.
- Science source-section coverage is now **13/13**. Total site source-section coverage is **41/77**; **36/77** lessons still need a dedicated learner-facing source section.
- Heat Transfer: clarified heat as energy transfer due to a temperature difference and thermal energy as part of internal energy; added NASA, NOAA, National Geographic Education and U.S. DOE sources.
- Elements and Compounds: clarified mixture definition and included elements/compounds/both; added RSC and GOV.UK references.
- Waves, Sound and Light: corrected sound-speed explanation to account for both stiffness and density; added NASA and OpenStax sources.
- Digestive/Circulatory: clarified sequential protein digestion using proteases and peptidases; added OpenStax Anatomy and Physiology 2e §23.7.
- Full source review and limitations recorded in `PHASE15_SCIENCE_SOURCE_PORT_2026-11-06.md`.

### Current QA status
- Previous exact-head CI success #42194105507 applies to earlier commit `35db05352f2d9ace692c94c0ceeb3a61861d1900`, not to this science-expanded head.
- Recent workflow runs associated with intermediate science commits were cancelled; the current final head has no recorded successful exact-head workflow yet. Do not mark this batch green until a current-head run is confirmed.
- Source pages were reviewed with web search/open checks; RSC pages that returned method restrictions were not treated as broken links.
- No full fresh recalculation of every science example or quiz answer key was performed in this batch. Existing PR descriptions record earlier desk checks; independent educator review and manual browser/print/screen-reader checks remain outstanding.

### Next actions
1. Obtain and complete a fresh exact-head CI run for the current preview branch.
2. Update PR #63 body and status docs with the full science scope; keep it draft and unmerged.
3. Continue with Financial Literacy PR #16, then AI Literacy/Computer Science PRs #59–#62, before returning to the Grade 6 Fractions pilot's outstanding multiply/divide worked-example and worksheet audit.

### Project tree
- `science/grade-7/` — all Science Grade 7 lessons now have dedicated source sections
- `science/grade-8/` — all Science Grade 8 lessons now have dedicated source sections
- `PHASE15_SCIENCE_SOURCE_PORT_2026-11-06.md` — source and terminology verification record
- `LEARNORA_CONTENT_FEATURE_INVENTORY_2026-11-06.md` — 41/77 current source-section count
- `PROJECT_STATE.md` — current resume checkpoint


## Checkpoint update — Financial Literacy sources added (6 November 2026)

### Completed
- Ported only the reviewed source sections from PR #16 into:
  - `financial-literacy/budgeting.html`
  - `financial-literacy/savings-interest.html`
  - `financial-literacy/unit-prices.html`
- Added a careful scope note to the savings formula: I = P × r × t is a simplified fixed-principal model; actual savings accounts may calculate interest daily or compound it according to their terms.
- Verified CFPB budget/saving/compound-interest resources, the CFPB classroom borrowing formula PDF, FTC unit-pricing/shrinkflation advice and Consumer.gov shopping guidance.
- Spot-checked the displayed budget, savings-goal, simple-interest and unit-price calculations.
- Financial Literacy source coverage is now 3/3. Overall site coverage is **44/77**; **33/77** pages still need dedicated learner-facing sources.
- Full notes in `PHASE16_FINANCIAL_SOURCE_PORT_2026-11-06.md`.

### Current QA status
- PR #63 remains draft/open and unmerged.
- The last successful CI run (#42194105507) predates the current science and finance additions. Current head has no successful exact-head run.
- A strict browser workflow-dispatch attempt could not start because the account does not have the TinyFish beta required for strict mode. The tool instructed that a default-mode retry requires user approval; no workflow was dispatched.
- No production deployment or indexing request.

### Next actions
1. Ask whether to retry the GitHub Actions workflow dispatch in default browser mode (150-step limit); otherwise wait for a user-triggered run.
2. Continue AI Literacy and Computer Science PRs #59–#62, using source-only and content-accuracy checks.
3. Then resume the Grade 6 Fractions pilot and audit multiply/divide examples, worksheet answers and quiz mappings.

### Project tree
- `science/grade-7/` and `science/grade-8/` — all 13 Science lessons now have dedicated sources
- `financial-literacy/` — all 3 Financial Literacy lessons now have dedicated sources
- `PHASE15_SCIENCE_SOURCE_PORT_2026-11-06.md` — Science sources and terminology QA
- `PHASE16_FINANCIAL_SOURCE_PORT_2026-11-06.md` — Financial Literacy sources and calculation checks
- `LEARNORA_CONTENT_FEATURE_INVENTORY_2026-11-06.md` — 44/77 source-section count
- `PROJECT_STATE.md` — current resume checkpoint


## Checkpoint update — AI Literacy and Computer Science QA (6 November 2026)

### Completed
- Ported the reviewed lesson-page updates from PRs #59–#62:
  - `ai-literacy/ai-safety.html`
  - `ai-literacy/how-ai-works.html`
  - `ai-literacy/verify-ai.html`
  - `computer-science/algorithms.html`
- Excluded unrelated workflow edits from PRs #59–#61.
- Verified one H1 and five quiz questions on each page; canonical and Open Graph URLs match; shared quiz script references are unchanged; all five answer-key texts match visible options; external new-tab links use `noopener noreferrer`.
- Improved source-level accuracy labels: Microsoft Learn is marked intermediate/advanced; Purdue OWL is labelled university-level extension; BBC Bitesize links are labelled GCSE-level extension; Teach Computing is labelled a teacher subject-knowledge course.
- AI Literacy source coverage is now 3/3; Computer Science is 1/3. Total site coverage is **48/77**; **29/77** pages remain without dedicated sources.
- Full review and limitations recorded in `PHASE17_AI_COMPUTER_SOURCE_PORT_2026-11-06.md`.

### Current QA status
- PR #63 remains draft/open and unmerged.
- Latest successful CI still belongs to the older Grade 6 Maths-only head (#42194105507); the current science/finance/AI/CS head has no successful exact-head workflow.
- A browser-based workflow dispatch could not be started in strict mode because this account lacks the required beta. The tool asked for approval before trying default browser mode; no workflow was dispatched.
- GitHub's latest PR response reported `mergeable: false`; do not attempt a merge. Recheck the mergeability state after the final head and workflow are refreshed.
- No production deployment or indexing request.

### Next actions
1. Obtain approval to retry workflow dispatch in default browser mode, or have a user-triggered exact-head workflow run.
2. Continue the remaining Grade 7/8 Maths and English source sections; these are the largest remaining gaps.
3. Return to the Fractions pilot and complete multiply/divide worked-example, worksheet and quiz-answer audit.

### Project tree
- `science/grade-7/` and `science/grade-8/` — all 13 Science lessons sourced
- `financial-literacy/` — all 3 Financial Literacy lessons sourced
- `ai-literacy/` — all 3 AI Literacy lessons sourced
- `computer-science/algorithms.html` — updated with source section and responsive pseudocode layout
- `PHASE15_SCIENCE_SOURCE_PORT_2026-11-06.md`
- `PHASE16_FINANCIAL_SOURCE_PORT_2026-11-06.md`
- `PHASE17_AI_COMPUTER_SOURCE_PORT_2026-11-06.md`
- `LEARNORA_CONTENT_FEATURE_INVENTORY_2026-11-06.md` — 48/77 source-section count
- `PROJECT_STATE.md` — current resume checkpoint


## Checkpoint update — Exact-head CI green and Grade 7 Maths source batch (6 November 2026)

### CI verification
- GitHub Actions run **#983 / 42204323754** completed successfully on exact PR #63 head `5e91029e49c8a30802b971860902fdfefd2d3195`.
- Passed: static website audit, legal/pre-monetisation audit, exact Cloudflare preview resolution, preview headers/assets, Playwright/Chromium install and mobile/desktop/quiz browser checks.
- Cloudflare Pages preview check for that exact SHA succeeded at `https://068af1a2.learnora-ab2.pages.dev`; this is a preview deployment, not production.
- PR #63 was still draft/open and GitHub's direct API reported mergeable/clean at that point.

### Grade 7 Maths source batch
- Added source sections to four pages: Adding/Subtracting Integers; Ratios/Rates/Proportional Relationships; Fractions/Decimals/Percentages in Problem Solving; Two-Step Equations.
- Sources verified: OpenStax Prealgebra 2e §§3.2–3.3, 4.2, 5.3, 5.6, 6.1–6.2, 8.1–8.2 and Khan Academy Grade 7 proportional-relationships unit.
- No lesson explanations, worked examples, quiz forms, answer keys, scripts, canonical URLs, metadata or sitemap entries were changed.
- Grade 7 Maths source coverage is now 4/12. Overall site source-section coverage is **52/77**; **25/77** remain.

### Current QA status
- Run #983 applies to the earlier head `5e91029...`, before the four Grade 7 Maths additions.
- The new Grade 7 Maths head needs its own exact-head CI run. Do not treat run #983 as validation of these latest changes.
- PR #63 remains draft and unmerged; no production deployment or indexing request.

### Next actions
1. Confirm the current head's exact CI run and resolve any issues.
2. Continue Grade 7 Maths source gaps, then Grade 8 Maths and English.
3. After source coverage, return to the Fractions pilot for multiply/divide worked-example and worksheet-answer QA.

### Project tree
- `math/grade-7/` — four more source sections; 4/12 now sourced
- `PHASE18_GRADE7_MATH_SOURCE_PORT_2026-11-06.md` — source verification record
- `LEARNORA_CONTENT_FEATURE_INVENTORY_2026-11-06.md` — 52/77 structural coverage
- `PROJECT_STATE.md` — resume checkpoint


## Checkpoint update — English source pass completed (6 November 2026)

### Completed
- Added source sections to the seven previously unsourced English lessons:
  - Paragraph Writing
  - Parts of Speech
  - Punctuation and Capitalization
  - Reading Comprehension: Main Idea, Inference and Evidence
  - Sentence Types and Structure
  - Verb Tenses and Agreement
  - Vocabulary: Context Clues, Prefixes, Suffixes and Roots
- Verified the chosen Purdue OWL, British Council LearnEnglish and Reading Rockets references; advanced/university-level references are labelled optional extensions, not required grade-level reading.
- Checked all seven pages: one H1, canonical/OG match, balanced section tags and safe external new-tab links.
- Compared five answer-key labels with visible quiz choices on all seven pages; all match exactly. No quiz scripts were changed.
- English source coverage is now **9/9**. Overall site source coverage is **59/77**; **18/77** lessons remain.
- Full source review in `PHASE19_ENGLISH_SOURCE_PORT_2026-11-06.md`.

### CI status
- Exact-head run #989 passed on commit `08a04564b65857029c031abb8ee5215b9aa84d66`, including static/legal audits, Cloudflare preview resolution, headers/assets and Playwright mobile/desktop/quiz checks.
- The English source changes and documentation are newer than that run; the current head needs a fresh exact-head workflow before it is marked green.
- PR #63 remains draft/open and unmerged. No production deployment or indexing request.

### Next actions
1. Check exact-head CI for the English-expanded branch.
2. Finish the remaining Grade 7 Maths (8), Grade 8 Maths (8) and Computer Science (2) source gaps.
3. Then return to the Fractions pilot for the outstanding multiply/divide worked-example and worksheet-answer audit.

### Project tree
- `english/grade-6-8/` — all 9 English lessons now have dedicated sources
- `PHASE19_ENGLISH_SOURCE_PORT_2026-11-06.md` — source verification and QA record
- `LEARNORA_CONTENT_FEATURE_INVENTORY_2026-11-06.md` — 59/77 structural source coverage
- `PROJECT_STATE.md` — current resume checkpoint
