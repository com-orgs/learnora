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
