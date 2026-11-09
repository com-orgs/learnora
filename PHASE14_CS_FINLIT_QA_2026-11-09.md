# Phase 14 — Computer Science and Financial Literacy QA
Date: 9 November 2026
Repository: `com-orgs/learnora`
Branch: `qa/phase14-cs-finlit-review-2026-11-09`
Scope: source-level academic and structural review only; no production code changes.

## Scope and files

| Lesson | Source ref | Result |
|---|---|---|
| Algorithms and Flowcharts | `qa-algorithms-content-quality` (PR #62 preview branch) | Reviewed |
| Python Variables, Input and Output | `main` | Reviewed |
| HTML and CSS: How Web Pages Work | `main` | Reviewed |
| Needs, Wants and Simple Budgets | `main` | Reviewed |
| Savings Goals and Simple Interest | `main` | Reviewed |
| Compare Prices and Unit Rates | `main` | Reviewed |

The five Computer Science / Financial Literacy production lessons were read from the current `main` branch. Algorithms was read from its preview branch because the improved version is not yet merged into production.

## Structural and editorial checks

- All six pages have one visible H1, a learning-objectives section, sequential concept sections, a worked example or worked examples, common-mistake guidance, practice, a five-question knowledge check, a printable worksheet, an answer guide and a Sources and Further Reading section.
- Extracted lesson-body lengths were approximately 727 (Python), 772 (HTML/CSS), 751 (Budgeting), 787 (Savings/Interest), 821 (Unit Prices), and 1,663 (Algorithms) words. These are diagnostic counts only, not quality scores or ranking criteria.
- All six pages declare `index,follow`, self-referencing canonical URLs, matching Open Graph URL/title/description fields and LearningResource JSON-LD.
- All six pages load the shared quiz script `/scripts/pages/new-subject-lessons.js`.
- Source sections are relevant at the topic level: official Python documentation; MDN web-development documentation; CFPB youth financial education; OpenStax algebra/rates material; BBC Bitesize and Teach Computing for algorithms/flowcharts. This source-code pass did not independently re-fetch every external URL, so link availability is not certified here.
- No author, educator reviewer, endorsement or formal curriculum-alignment claim was added or inferred.

## Answer-key and calculation checks

- Quiz mapping consistency: 30/30 visible quiz answer mappings (five per lesson across six lessons) match the visible question options and their answer text.
- Python: verified the distinction between assignment (`=`) and equality (`==`), `input()` returning text, integer conversion before arithmetic, and the stated `int`, `float`, `str`, and `bool` examples.
- HTML/CSS: checked the semantic roles of `header`, `nav`, `main`, `article` and `footer`; the explanation of CSS presentation; responsive design; and informative-image alt text. Open-ended worksheet accepts equivalent semantic layouts.
- Budgeting: checked 30 − 10 − 8 − 5 = 7; 40 − 15 − 10 − 8 = 7; and the sample worksheet budget 18 + 12 + 10 + 5 = 45, leaving 5 from 50.
- Savings/interest: checked 60 − 15 = 45 and 45 ÷ 9 = 5 per week; 100 × 0.05 × 2 = 10; 120 × 0.04 × 2 = 9.6, giving 129.6 including principal; and 150 × 0.04 × 3 = 18.
- Unit prices: checked 12 ÷ 4 = 3; 15 ÷ 6 = 2.5; with a 6-unit delivery fee, (15 + 6) ÷ 6 = 3.5, while the first option remains 3 per item. The answer guide correctly changes the better-value choice to Option A.
- Algorithms: checked the 0–100 input validation before the pass threshold, boundary cases 49/50, the inclusive 2–4 and 1–6 loop traces, and the stated even/odd remainder test. The worksheet answer guide handles the equal-number branch and invalid marks.

## Findings and limitations

- No definite arithmetic error, visible quiz-key mismatch, or answer-guide contradiction was found in this six-page sample.
- This is repository-source review, not a live browser interaction test, screen-reader test, print-preview visual review, external-link uptime check, or independent educator review.
- The Algorithms improvement remains preview-only on PR #62; it must not be described as a production change.
- The five recently improved Python/HTML-CSS/Financial Literacy lessons are on main and were already part of the production content baseline recorded in the status tracker.
- No GSC URL Inspection, manual Request Indexing, IndexNow submission, merge, or deployment was performed as part of this QA batch.

## Next actions

1. Run the full combined PR review for the outstanding preview work, including PR #62 and the other open editorial/content PRs; confirm current PR and CI state before any release decision.
2. Complete the full 104-page internal-link/inbound-link and orphan-page graph when fetch capacity permits.
3. Re-fetch the external reference URLs and record status/redirect evidence before release.
4. Obtain genuine independent educator review where feasible; do not claim peer review until it occurs.
5. Keep the GSC daily inspection cap in force. The 9 November tracker/history union is already 34/10 due to background checks; no further daily inspection actions.
6. Do not merge or deploy without the user's explicit release approval.

## Production safety

No production files were modified by this QA batch. No merge or deployment was performed.
