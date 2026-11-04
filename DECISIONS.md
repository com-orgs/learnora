# Learnora — Decisions & Operating Rules

## Product direction
- Brand: Learnora.
- Positioning: “Learn Better. Practice Smarter.”
- Audience: international-first; English language.
- Curriculum: international / curriculum-neutral.
- Core content identity: study notes, worked examples, quizzes and printable learning resources.
- Initial core subjects: Mathematics, English and Science.
- Initial middle-grade focus includes Grades 6–8; broader grade/subject expansion should be based on validated search demand and content quality.
- Development/deployment approach: GitHub + Cloudflare Pages.
- Budget: free-first; no paid service or resource without explicit approval.

## Quality and safety
- No thin, mass-produced SEO pages.
- Content must be accurate, age-appropriate, useful and reviewed.
- Every quiz must have functioning feedback and a verified answer key.
- Keep mobile usability, accessibility, performance, security and SEO technical hygiene.
- Do not damage working pages or replace whole files without first inspecting and backing them up / using an isolated branch.
- Do not deploy production changes without explicit release approval.

## SEO / keyword research
- The owner says 50 competitors were already compiled and a priority was selected.
- Preserve the original competitor set and priority; recover them from prior project history or files.
- Do not invent competitor names, search volumes, difficulty, ranking potential or the chosen priority.
- Do not restart the research or create pages until the previous decision and exact resume point are verified.
- Prioritize search intent, achievable competition, usefulness to learners, international relevance and content quality over raw volume alone.

## Continuity protocol
- `PROJECT_STATE.md` is the authoritative current snapshot and exact resume point.
- `TASK_LOG.md` is the chronological evidence trail.
- `DECISIONS.md` is the durable record of product constraints and decisions.
- Before every continuation, read all three and inspect actual repository/CI/live state relevant to the next action.
- After each meaningful task, update the log and state. Never rely on chat memory alone.
- If the session is interrupted mid-operation, record the task as IN PROGRESS / UNVERIFIED and verify before retrying.
- Never claim that a checkpoint is saved until the GitHub write succeeds and the resulting file is fetched back successfully.
