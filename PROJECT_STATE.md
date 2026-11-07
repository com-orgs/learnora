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


## Daily indexing checkpoint — 7 Nov 2026

### Completed
- Read all 104 tracker rows and all 77 URL Inspection history rows before the daily guard decision.
- Pakistan-date guard: 41 distinct tracker URLs with lastCheckAt today; 0 same-day inspection-history rows; union 41/10; overrun 31; remaining 0. No URL Inspection API or check_tracked_url_now call was made.
- Tracker: 104 total, 1 indexed, 103 not indexed, 0 pending/errors/warnings; latest check 2026-11-07T03:56:24.644Z (08:56:24 PKT).
- Live sitemap HTTP 200: 104 unique URLs, no duplicate entries, no lastmod fields. Google sitemap pending with 0 warnings/errors. robots.txt HTTP 200 and allows all agents/OAI-SearchBot.
- Bing verified; feed Success for 104 URLs, last crawled 3 Nov; quota 100/day, 2,400/month; no crawl issue URLs; crawl statistics unavailable.
- IndexNow key and key file verified; 447 history rows, 104 unique URLs, 343 repeat rows; 373 HTTP 200 / 74 HTTP 202. All 104 sitemap URLs already in history; no new/changed production URLs; 0 submissions today.
- Fresh 25-page audit: 25/25 HTTP 200/indexable/self-canonical; 0 noindex/redirect; internal links 7–47; 12 low notes only.
- GSC interactive browser check redirected to Google Sign-in; no authenticated Request Indexing UI. No manual request submitted.
- Detailed log: [DAILY_INDEXING_LOG_2026-11-07.md](DAILY_INDEXING_LOG_2026-11-07.md), including exact URL lists, duplicate counts, timestamps, evidence and next actions.

### Safety / blockers
- GSC hourly background checks exceed the 10-URL project cap; no pause/throttle control exposed by connector. Owner must pause/reduce the tracker.
- Google sitemap remains pending; no confirmed technical indexability blocker in the 25-page sample.
- Full 104-page internal-link graph remains incomplete.
- Manual GSC Request Indexing history is not exposed by API; owner must skip URLs already requested.
- No production code/content/metadata changed. No manual GSC request or IndexNow submission.

### Next action
- Owner pauses/reduces hourly GSC tracker; wait for sitemap processing; do not inspect more URLs until strict union is below 10 on a future Pakistan date. Continue full internal-link graph and preview-only Computer Science / Financial Literacy content QA.
