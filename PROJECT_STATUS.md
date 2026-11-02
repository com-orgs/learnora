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

- Last recorded audit branch commit before the current inventory/QA changes: `69a1ba4228d4bef3bb6d31991289715af5f501be` (re-check latest HEAD after CI).
- Last known production/main commit: `cd3ee6e0600e56ffc9a00b1f6b8e1dc254462aec` (must re-check before any merge decision)
- Latest comparison before current phase-1 audit commits: audit branch ahead by 208 commits, behind by 0, 134 changed files (re-check after each phase).
- Main branch has not been merged or deployed from the audit branch.

## CI status (automatically refreshed by GitHub Actions)
- Last updated automatically: run #41463751438 on branch `audit/production-hardening-2026-11-02`.


- Status: failure.
- Tested commit: `6439123adb4e021e660ad3b018fa5e3b6e20aef6`
- Workflow: Learnora Site Audit (run [#41463751438](https://github.com/com-orgs/learnora/actions/runs/41463751438))
- Last known run: [41461081003](https://github.com/com-orgs/learnora/actions/runs/41461081003) — **success**.
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
- [x] Maths Grades 6–8: 46 lessons (last recorded count; re-count from sitemap before final report).
- [x] English: 5 lessons (last recorded count; re-count from sitemap before final report).
- [x] Science: 6 Grade 7 lessons, including States of Matter and Heat Transfer (last recorded count; re-count from sitemap before final report).
- [x] Science Grade 7 Heat Transfer: lesson, quiz JS, subject index card and sitemap entry.
- [x] Science Grade 7 States of Matter: lesson, quiz JS, subject index card and sitemap entry.
- [x] Science Grade 7 Forces & Motion scientific accuracy corrections.
- [x] English reading comprehension and punctuation/capitalization content additions (verify exact current inventory before adding overlapping topics).

### Quality assurance
- [x] Static audit previously reported 62 HTML pages, 62 canonical URLs, 52 quiz forms and 52 answer-key mappings (historical count; re-run for current totals).
- [x] Browser smoke coverage previously exercised mobile widths 320, 390, 768 and desktop, quiz submission/retake and print actions (historical 52-quiz run).
- [x] Latest known run 41461081003 passed every job step, including mobile/desktop/quiz browser checks.
- [x] Responsive table overflow fixes applied to Science Grade 7 States of Matter and Heat Transfer lessons.
- [x] Print styles hide worksheet answer keys where intended.

## Gmail / GitHub Actions failure investigation

- Gmail contained many GitHub Actions failure notifications for intermediate commits on the audit branch, plus some pull-request runs.
- The notification subjects reference commits such as `460f534`, `477dfe6`, `e0b100c`, `118b49a` and `9e6d646`.
- A representative failure was inspected directly: run [41441495924](https://github.com/com-orgs/learnora/actions/runs/41441495924), commit `9e6d64672bc161822c4ab5e383addb467ba1cfbb`. The static audit failed immediately at `scripts/audit-site.mjs:197` with `SyntaxError: Invalid regular expression flags`; the malformed regex contained doubled backslashes in a regex literal.
- Current audit-branch source was checked at the same section: the regex is now correctly written as `/<h2\\b[^>]*>([\\s\\S]*?)<\\/h2>/gi`, and the latest known complete run [41461081003](https://github.com/com-orgs/learnora/actions/runs/41461081003) passed all audit, preview and browser-test steps.
- Other Gmail failure notifications reference multiple intermediate commits and some PR runs. Do not assume a notification represents the current HEAD. Match each failed notification's commit SHA/run ID to the current branch and inspect its own failing step/logs if it remains relevant.
- Conclusion: at least one confirmed failure was a real static-audit regex defect (now corrected), while sequential commits also explain why notifications were generated for multiple intermediate snapshots.

## Remaining work — ordered queue

1. [x] Re-count current sitemap lesson inventory by subject/grade; add automated parity checks between lesson files, subject/grade index cards, sitemap URLs and quiz scripts. Await new CI result for the new checks.
2. [ ] Continue English curriculum expansion/review (especially Grade 7–8 grammar, writing and reading); avoid duplicate topics.
3. [ ] Continue Science Grade 8 curriculum expansion/review, checking factual accuracy and curriculum progression.
4. [ ] Audit all lessons for educational quality: age/grade suitability, learning objectives, explanations, worked examples, question correctness, answer keys, quiz feedback/retake and printable worksheet quality.
5. [ ] Audit accessibility: semantic structure, keyboard operation, focus visibility, labels, contrast, reduced motion and screen-reader feedback.
6. [ ] Audit SEO/content discoverability: titles, descriptions, canonical/OG, internal links, breadcrumbs, sitemap, robots, structured data where appropriate, indexability and duplicate/thin content.
7. [ ] Audit performance/responsiveness/security: image and asset loading, mobile layouts, CSP/security headers, error/404 behavior and external dependencies.
8. [ ] Audit legal/trust/AdSense readiness: privacy/cookie disclosures, contact/about/terms, original substantial content, navigation and ad placement readiness (no guarantee of AdSense approval).
9. [ ] Run complete final static + browser + accessibility + link/route verification on the final audit branch.
10. [ ] Produce final issue list and completion report; compare audit branch against main.
11. [ ] Only after explicit user approval: merge/deploy as the final phase; verify production after deployment.

## Phase completion details

### Phase 1 — Curriculum inventory and index reconciliation
- [x] GitHub repository directory listings independently confirm 46 Maths lesson files (Grade 6: 23; Grade 7: 12; Grade 8: 11), 5 English lesson files, and 6 Science Grade 7 lesson files.
- [x] Sitemap contains 67 URLs total, including 57 lesson URLs (Maths 46, English 5, Science 6).
- [x] Subject/grade indexes currently contain matching lesson cards: Maths grade indexes 46 combined, English 5, Science 6.
- [x] Lesson quiz JS files exist as a matching 57-file set in scripts/pages (plus shared homepage/index script).
- [x] Added permanent static-audit assertions: every lesson file must be in sitemap, every sitemap lesson must have a file, each lesson must load its expected JS quiz file, and every lesson must be linked from a subject/grade index.
- [ ] New CI run must pass before Phase 1 is marked fully verified.

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
