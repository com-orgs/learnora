# Learnora — Project State & Resume Checkpoint

Last verified: 2026-11-04 (UTC date; Pakistan local date)
Repository: https://github.com/com-orgs/learnora
Production site: https://learnora-ab2.pages.dev/
Default branch: main
Checkpoint branch: project-checkpoint-system-2026-11-04

## Mission and non-negotiable requirements
- International-first, English-language, curriculum-neutral education website.
- Core audience: students across education levels; current initial focus includes middle grades.
- Existing core subjects: Mathematics, English and Science.
- Prioritize accurate, age-appropriate, genuinely useful learning resources: clear explanations, worked examples, practice, verified answer keys and accessible quizzes.
- Quality is not to be compromised for speed or SEO volume.
- Keep the site static, lightweight, mobile-friendly and free to operate unless the owner explicitly approves a cost.
- Preserve SEO fundamentals, accessibility, security and the current working site.
- Do not merge or deploy to production without an explicit release decision.

## Verified project facts
- Repository is `com-orgs/learnora`; default branch is `main`.
- The repository README describes a static site with no build step and a Node.js 24+ audit script at `scripts/audit-site.mjs`.
- README documents GitHub Actions workflow `.github/workflows/site-audit.yml`.
- The live Pages URL is `https://learnora-ab2.pages.dev/`.
- On 2026-11-03, the owner confirmed the site was live and GitHub Actions showed a green tick / successful deployment.
- GitHub Secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` were reported as configured.
- The README says to review changes on an isolated branch and not merge/deploy to production without an explicit release decision.

## Current workstream — SEO / keyword research
- The owner reports that work had started on keyword research and that a list of 50 competitors had already been compiled.
- A prioritization decision was made from that competitor/keyword work; the owner then instructed that the selected priority be worked on first.
- IMPORTANT: The exact 50-competitor list, the chosen priority, and the precise last completed keyword-research operation were not found in the repository root files checked on 2026-11-04. Do not recreate the list, invent the priority, or restart the research.
- Recovery task: inspect prior conversation/project artifacts and existing repository branches/files for the original competitor list and priority decision. Continue from that exact point once recovered.
- Do not mark competitor research complete or publish SEO pages until the original data and decisions are verified.

## Current technical follow-ups (carried forward from 2026-11-03)
1. Re-test the automated GitHub Actions workflow after the latest successful run.
2. Verify sitemap URLs and sitemap accessibility.
3. Verify indexing / Search Console status where connector access permits.
4. Complete final technical QA (internal links, metadata/canonicals, accessibility, responsive behavior, quiz behavior, security headers and live HTTP checks).
5. Do not deploy production changes without explicit release approval.

## Exact resume instructions
1. Read this file, `TASK_LOG.md`, and `DECISIONS.md` before acting.
2. Verify the current GitHub repository and branch state; do not assume the last chat's operations succeeded.
3. Recover the original 50-competitor dataset and the user's selected priority from prior project context/files. Never rebuild it from scratch unless the owner explicitly asks.
4. Resume the selected keyword task at the last verified unfinished step.
5. Keep code/site changes isolated on a working branch; run the repository audit and review CI before proposing release.
6. After every meaningful operation, update `TASK_LOG.md` and this file with: completed action, evidence/result, files changed, verification, blockers, and the single next action.
7. If a step is interrupted, mark it `IN PROGRESS / UNVERIFIED`; on resume, inspect actual state before retrying.
8. At the end of each work session, leave an exact resume point and a compact project tree/status in the chat.

## Current exact resume point
- Checkpoint documentation (`PROJECT_STATE.md`, `TASK_LOG.md`, `DECISIONS.md`) was created and fetched back successfully on branch `project-checkpoint-system-2026-11-04`.
- The three files are committed on this isolated documentation branch; it has not been merged into `main` and no production release is authorized by this checkpoint.
- Next action: recover the original competitor list and selected keyword priority from prior work, then verify the last completed operation before continuing.

## 2026-11-04 continuation — original SEO research recovered

- [x] Recovered `COMPETITOR_KEYWORD_RESEARCH_2026-11-03.md` from PR #17 branch `research/competitor-keywords-2026-11-03`; exact 50 named benchmark domains and the 41-URL keyword map are present. Do not recreate this research.
- [x] Exact selected priority recovered: strengthen existing Grades 6–8 Maths lessons, practice questions, quizzes and worksheets first; then Grade 7–8 Science and middle-school English. The 50 domains are curated benchmarks, not verified Semrush organic competitors.
- [x] Validated all 41 keyword-map URL targets against the live 104-URL sitemap: 41/41 match, 0 duplicates, 0 missing.
- [x] Verified PR #17's three changed files are documentation only. Latest preview commit `24ad602`; Cloudflare Pages preview deployment succeeded. Preview homepage, robots.txt, Computer Science, AI Literacy and Financial Literacy hubs returned HTTP 200. PR checks show Cloudflare deployment succeeded, but full static/legal/browser QA is not independently confirmed; PR is not merged.
- [x] Rechecked GSC performance: 104 sitemap URLs, 0 with impressions, 0 clicks / 0 impressions for 5 Oct–1 Nov settled period. This is not an indexing verdict. Tracker: 1 indexed, 95 URL-unknown, 8 pending.
- [x] Latest 4 Nov PKT deduplication audit: 31 tracker URLs plus 5 unique URL Inspection history URLs, no overlap; 36 combined unique URLs, 1 duplicate history record. No additional inspection was run during this continuation; stop inspections for 4 Nov.
- [ ] Next: review the highest-priority existing Grade 6 Maths pages against the recovered map, identify specific teaching/on-page gaps, and prepare preview-only changes with full QA. Do not deploy without explicit release approval.

## 2026-11-04 — Grade 6 Maths on-page work started
- [x] Completed focused live audit of six high-priority Grade 6 Maths pages. All six are HTTP 200, indexable, self-canonical, and have one H1; 0 critical/high/medium findings. Eight low findings total: three missing structured data, two long descriptions, one long title (the audit counts remaining low items across pages).
- [x] Prepared small targeted changes on isolated branch `seo/grade6-maths-onpage-2026-11-04`: two meta-description trims, one decimals title refinement, and one duplicate heading clarification. No broad metadata edits or production changes.
- [x] Opened PR #19: https://github.com/com-orgs/learnora/pull/19; exactly three HTML files changed, head `5ac4a632be6ac4fe295a142574c5ecf7f2115bf6`.
- [ ] Preview QA pending: Cloudflare check still reported Building at last verified check; no exact preview URL yet. Do not merge until the exact preview is verified and static/legal/mobile/desktop/accessibility/quiz/worksheet QA passes.
- Next single action: recheck PR #19 Cloudflare deployment status, then test the exact preview pages and QA suite.

## PR #19 preview smoke-test result — 4 November 2026
- [x] Cloudflare Pages deployed code commit `5ac4a63`; verified exact preview https://seo-grade6-maths-onpage-2026.learnora-ab2.pages.dev/.
- [x] Three changed routes returned HTTP 200, one H1, `index,follow`, and production self-canonical:
  - Comparing and Ordering Fractions — title 59 chars, description 160.
  - Adding and Subtracting Fractions — title 59 chars, description 142.
  - Grade 6 Decimals — title 53 chars, description 159; second heading changed to Related Measurement Topics; duplicate Continue Learning heading removed.
- [ ] Full static/legal/browser/keyboard/accessibility/quiz/retake/worksheet-print QA remains unverified. Current repository workflow does not trigger on `seo/**`; only `main`, `audit/**` and manual dispatch are configured. PR #19 remains open/unmerged. Production untouched.
- Next: arrange full required QA for PR #19 before merge; no production release without explicit approval.


## 2026-11-04 continuation — PR #19 full-QA investigation

- [x] Re-read the existing GitHub Actions workflow, static audit script, legal-readiness script and browser-smoke script on PR #19 branch.
- [x] Confirmed PR #19 remains open/unmerged; current head is `ad4910efa833700c358390ccbb00c0127fc0732f`; Cloudflare comment reports successful deployment for that commit.
- [x] Retrieved authoritative commit-specific Cloudflare preview URL from the PR deployment comment: https://0b8f0f63.learnora-ab2.pages.dev/.
- [x] Verified homepage, all three changed Grade 6 Maths routes, sitemap.xml and robots.txt on that exact deployment. All returned HTTP 200; homepage and changed lessons are index,follow; lesson titles/content reflect intended edits.
- [x] Found the prior branch-preview alias `https://seo-grade6-maths-onpage-2026-11-04.learnora-ab2.pages.dev/` currently returns Cloudflare Deployment Not Found (HTTP 404). Do not use this stale alias as the authoritative preview. Use the unique deployment URL from the latest Cloudflare PR comment.
- [x] Identified workflow QA mismatch: workflow's preview-header step is hard-coded to an unrelated `audit-production-hardening-2` preview; browser-smoke step sets `LEARNORA_PREVIEW_URL` to production, while the script default is also a stale preview alias. Thus a green run from this workflow would not by itself validate PR #19's deployed preview.
- [ ] Full static/legal/Playwright browser QA remains unrun/unverified. No manual dispatch action was available through the connected GitHub tools. Do not merge or deploy production.
- Files inspected: `.github/workflows/site-audit.yml`, `scripts/audit-site.mjs`, `scripts/audit-legal-readiness.mjs`, `scripts/browser-smoke.mjs`, `PROJECT_STATUS.md`. No repository files changed in this QA investigation.
- Next single action: obtain a trustworthy way to run static/legal/browser checks against the exact PR #19 commit and commit-specific preview without triggering production deployment or misreporting QA.


## 2026-11-04 — isolated PR #19 QA run started
- [x] Created isolated audit-only branch `audit/pr19-full-qa-2026-11-04` from PR #19 head `ad4910efa833700c358390ccbb00c0127fc0732f`.
- [x] Updated only the workflow file on that audit branch so both the security-header/asset check and Playwright browser-smoke test target the verified PR #19 deployment URL `https://0b8f0f63.learnora-ab2.pages.dev`, not production or the stale branch alias.
- [x] Workflow commit: `61c518645a78f35e4e16d45e539d57fe4b804868`.
- [x] GitHub Actions run #665 / ID `41770292874` was created for the updated workflow commit. At last check it was pending and had no jobs yet; no test conclusion is available.
- [ ] Wait for run #665, inspect every job and step, retrieve logs for failures, and verify its actual target SHA/URL before recording QA as passed.
- Safety: audit branch only; no PR opened from it, no merge, no production code or deployment change. Cloudflare may create a preview for the audit branch; do not treat that as production.
- Next single action: poll run #665 and inspect results; do not merge PR #19 until all relevant QA is green.


## 2026-11-04 — browser QA execution in progress
- [x] Static website audit, legal/pre-monetisation readiness audit, preview headers/assets check, and Playwright/Chromium installation all completed successfully in GitHub Actions run #665.
- [ ] Playwright browser step is still running. It iterates all sitemap routes, checks 320/390/768px and desktop layout, Axe WCAG 2.1 A/AA, resource/performance budgets, homepage search/filter/quick-quiz, lesson quiz keyboard submission/feedback/retake, worksheet print handlers, and runtime/resource errors.
- Latest run status: `in_progress`; active step: `Run mobile, desktop and quiz browser checks against this commit`. No browser-test conclusion yet.
- Do not merge PR #19 until this step and tracker refresh complete successfully, and review any browser failures.


## 2026-11-04 — PR #19 full QA completed (latest authoritative checkpoint)

- [x] GitHub Actions run [#665](https://github.com/com-orgs/learnora/actions/runs/41770292874), ID `41770292874`, completed with conclusion `success` on isolated branch `audit/pr19-full-qa-2026-11-04`.
- [x] The audit branch was based on PR #19 head `ad4910efa833700c358390ccbb00c0127fc0732f`; only `.github/workflows/site-audit.yml` was adjusted to target the exact Cloudflare deployment `https://0b8f0f63.learnora-ab2.pages.dev`. The workflow's audit code therefore matches the PR #19 code head; the tested workflow commit was `61c518645a78f35e4e16d45e539d57fe4b804868`.
- [x] Static audit: 104 HTML pages, 68 curriculum lesson files and sitemap lesson URLs, 6 subject/grade indexes, 68 quiz script links, 104 canonical URLs, 77 accessible quiz forms and answer-key mappings, 72 JavaScript security scans and 80 same-origin JS assets; **0 warnings**.
- [x] Legal/pre-monetisation audit passed: policy pages, editorial transparency, contact details and children/COPPA disclosures present; no active AdSense or analytics script tags across 105 HTML pages.
- [x] Exact PR preview headers/assets and custom 404 checks passed.
- [x] Full Playwright browser suite passed against the exact PR preview: 104 sitemap pages checked at 320/390/768px and desktop; 77 quiz submissions; 77 retake actions; 79 worksheet print actions; 104 performance/resource checks; no horizontal overflow, keyboard quiz failure, quiz feedback failure, print-handler failure, third-party request or CSP/runtime error.
- [x] CI automatically refreshed `PROJECT_STATUS.md` on the isolated audit branch; latest audit-branch head after tracker refresh is `e4f12ac` (workflow also produced intermediate tracker commit `d591111`).
- [ ] PR #19 remains open and unmerged. GitHub currently reports mergeable=true but mergeable_state=`unstable`; do not merge based on the green isolated QA run alone. Review PR checks/status and release decision before any merge. Production remains unchanged.
- [ ] PR #17 (50-competitor keyword research + roadmap docs) remains open/unmerged; documentation-only preview smoke passed earlier, but no equivalent full QA run is recorded.
- [ ] Daily GSC inspection cap: do not run any more URL inspections on Pakistan local date 4 Nov 2026. On next PKT day, deduplicate tracker and inspection history first, then inspect at most 10 distinct URLs total.
- Exact next action: review PR #19's remaining check/status state and confirm no code drift from the tested PR head; if clean, prepare the next preview-only educational quality batch (structured data/source attribution for priority Grade 6 Maths pages), without merging/deploying production.


## 2026-11-05 — Daily indexing and discovery run completed

- Production sitemap was fetched live: HTTP 200, 104 unique same-host URLs, no duplicate entries.
- GSC full tracker: 104 URLs; 1 indexed, 103 URL-unknown, 0 pending/errors/warnings; only 1 URL has a crawl time. Full URL Inspection history: 67 rows, 41 distinct URLs, 15 historical repeated URLs / 26 extra rows.
- Strict Pakistan-date guard for 5 Nov: 31 distinct URLs already had tracker lastCheckAt today; URL Inspection history had 0 rows today; union=31, project cap=10, overrun=21. No inspection calls were made by this run. The tracker is active and the connector exposes no pause/throttle action for the hourly background process. Do not inspect more URLs on 5 Nov.
- GSC sitemap submitted 3 Nov, still pending, 0 warnings/errors. Settled sitemap performance 6 Oct–2 Nov: homepage had 1 impression, 0 clicks, average position 77. This is not an index-count or ranking guarantee.
- Bing verified property; feed Success, 104 URLs, last crawled 3 Nov; 0 crawl issues. Bing crawl/traffic reports had no dated rows. Direct Bing URL Submission action is not exposed.
- IndexNow key configured and key file verified. Compared all 104 live sitemap URLs with all 296 historical rows and GitHub main commits after the last submission (3 Nov 15:07 UTC). 42 materially changed URLs were eligible; 62 unchanged URLs were skipped. Batch `9bfc98cf-5d2d-432a-ae38-04bfd64e7047` submitted 42/42 with HTTP 200/key validated, 0 failed. History now 338 rows / 104 unique; 264 HTTP 200 and 74 HTTP 202. Acceptance does not prove indexing.
- Search Console interactive UI was not accessible through the connected browser context; no manual Request Indexing action was submitted. Ten uninspected, high-priority candidates were recorded in the GitHub status/roadmap for owner review; skip any already manually requested.
- Current production code commit recorded in the status file: `271ca6c89f26c5a562c180f758dcb0f5bb34c535`; main documentation HEAD after status/roadmap updates: `45c3d4b55fe8360612bbed41214ddbfaa41bd765`.
- `PROJECT_STATUS.md` and `LEARNORA_MASTER_ROADMAP_2026-11-04.md` updated on main with full exact URL lists, guard counts, IndexNow batch, historical duplicates, Bing/GSC evidence, blockers and next actions; post-update fetch verified both files.
- Page-level live robots/canonical/fetch checks were not repeated because Firecrawl balance was 0 and Browser access required its originating browser context. Latest known 4 Nov checks remain the baseline. Grade 8 Science missing Earth Resources link is resolved by PR #20.
- Content source coverage remains provisional: 11/77 after PR #26 plus four later source additions implies 15/77, 62 remaining; refresh full inventory before treating as exact. Independent subject-expert review remains open.
- No production code, sitemap or metadata was changed in this run. Only documentation and the 42 IndexNow notifications were updated.
- Next: maintain zero GSC inspections for 5 Nov; owner to locate any tracker pause control in GSC Wizard UI; next run must deduplicate before inspecting. Continue source attribution in preview-only batches and only notify IndexNow for new/materially changed pages.
