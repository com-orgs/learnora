# Learnora — Project Status & Continuation Tracker

> **Single source of truth for all future chats and development sessions.**
> Before starting work, read this file and inspect the current audit-branch HEAD/CI. After every meaningful task, update the task log and next actions. The GitHub Actions workflow automatically refreshes the CI status block below after each run on a branch (not pull-request runs). No production deployment or merge is permitted without the user's explicit approval.

## Project identity

- Repository: https://github.com/com-orgs/learnora
- Working branch: `audit/production-hardening-2026-11-02`
- Production branch: `main`
- Production site: https://learnora-ab2.pages.dev/
- Preview site used by audit workflow: https://audit-production-hardening-2.learnora-ab2.pages.dev/
- Contact email used on site: Learnora.site@gmail.com
- Deployment policy: **Deployment is the final phase only. Do not deploy or merge until the user explicitly authorizes it.**
- User communication: Roman Urdu; beginner-friendly, direct. At the end of every `Continue` / `Next` response, include the project tree with completed, in-progress, and remaining work.

## Latest verified repository state

- Audit branch HEAD is checked at the start of each session; CI status is refreshed by the workflow after each branch run.
- Last known production/main commit: `cd3ee6e0600e56ffc9a00b1f6b8e1dc254462aec` (must re-check before any merge decision)
- Latest verified comparison before this update: audit branch ahead by 299 commits, behind by 0. Re-check after this update.
- Main branch has not been merged or deployed from the audit branch.

## CI status (automatically refreshed by GitHub Actions)
- Last updated automatically: run #41473241711 on branch `audit/production-hardening-2026-11-02`.


- Status: failure.
- Tested commit: `bf7f5a7b62f0f77dd3478c21c3965dc2d159fa33`
- Workflow: Learnora Site Audit (run [#41473241711](https://github.com/com-orgs/learnora/actions/runs/41473241711))
- Last known run: [41467406909](https://github.com/com-orgs/learnora/actions/runs/41467406909) — **success**.
- Last verified checks: static website audit, Cloudflare preview security headers/assets, Playwright/Chromium install, mobile/desktop/quiz browser checks all passed.

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
8. [ ] Phase 8 — legal/trust/AdSense readiness. In progress: updated Privacy Policy with Google advertising-cookie disclosures, opt-out links, Google partner-site data link, EEA/UK/Swiss certified-CMP requirement and child-directed/COPPA safeguards; added About editorial-independence/corrections policy and Terms advertising clause. Still must complete final originality/content-value review, child-directed/mixed-audience determination, real contact/ownership details, and prepare consent/ad setup only after account and publisher ID exist.
9. [ ] Phase 9 — final consolidated issue list, release report and final comparison against main.
10. [ ] Phase 10 — only after explicit user approval: merge/deploy as the final phase and verify production. Do not merge or deploy earlier.

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
