# Phase 22 — Grade 6 Fractions Multiplication/Division QA
**Date:** 6 November 2026  
**Branch:** `preview-learnora-redesign-inventory-2026-11-06`  
**File reviewed:** `math/grade-6/multiplying-dividing-fractions.html` and `scripts/pages/math-grade-6-multiplying-dividing-fractions.js`

## Scope
Focused audit of the previously outstanding multiplication/division fractions lesson: worked calculations, practice answers, five quiz answer mappings, worksheet answers, feedback/retake behavior, and source relevance. No production files or lesson content were changed in this pass.

## Calculation results

### Worked examples
| Example | Recalculation | Result |
|---|---|---|
| 3 × 1/4 | 3 × 1/4 | 3/4 — correct |
| 4 × 2/5 | 8/5 | 1 3/5 — correct |
| 2/3 × 3/5 | 6/15 | 2/5 — correct |
| 3/4 × 2/7 | 6/28 | 3/14 — correct |
| 4/9 × 3/8 | 12/72 | 1/6 — correct |
| 2/3 ÷ 4/5 | 2/3 × 5/4 = 10/12 | 5/6 — correct |
| 3/4 ÷ 1/2 | 3/4 × 2 = 6/4 | 3/2 = 1 1/2 — correct |
| 1/2 × 2/3 | 2/6 | 1/3 cup — correct |
| 3/4 ÷ 1/8 | 3/4 × 8 = 24/4 | 6 pieces — correct |
| Garden area 2/3 m × 3/5 m | 6/15 m² | 2/5 m² — correct |

### Practice exercise answer key
1. 3 × 2/7 = 6/7 — correct.
2. 2/5 × 3/4 = 6/20 = 3/10 — correct.
3. 5/6 × 3/10 = 15/60 = 1/4 — correct.
4. 1/2 ÷ 1/4 = 1/2 × 4 = 2 — correct.
5. 3/5 ÷ 2/3 = 3/5 × 3/2 = 9/10 — correct.
6. 4/7 ÷ 2/7 = 4/7 × 7/2 = 2 — correct.
7. Half of 3/4 cup = 3/8 cup — correct.
8. 2/3 ÷ 1/6 = 2/3 × 6 = 4 pieces — correct.

### Quiz mapping
| Question | Correct option in page | JS key | Recalculation | Status |
|---|---|---|---|---|
| 2/3 × 3/5 | A: 2/5 | a | 6/15 = 2/5 | Match |
| 3 × 1/4 | B: 3/4 | b | 3/4 | Match |
| Reciprocal of 2/7 | B: 7/2 | b | 7/2 | Match |
| 1/2 ÷ 1/4 | C: 2 | c | 2 | Match |
| 3/5 ÷ 2/3 | A: 9/10 | a | 9/10 | Match |

All five JS answer mappings match the visible options and mathematics.

### Worksheet answer key
1. 4 × 2/9 = 8/9 — correct.
2. 3/5 × 5/8 = 15/40 = 3/8 — correct.
3. 7/10 × 5/14 = 35/140 = 1/4 — correct.
4. 2/3 ÷ 1/6 = 2/3 × 6 = 4 — correct.
5. 5/8 ÷ 1/4 = 5/8 × 4 = 20/8 = 5/2 = 2 1/2 — correct.
6. 3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8 = 1 7/8 — correct.
7. Half of 2/3 cup = 1/3 cup — correct.
8. 3/4 ÷ 1/8 = 6 pieces — correct.

## Script and learner-experience observations
- Submit handling provides per-question correct/incorrect/unanswered feedback and a score out of five.
- Retake clears selections, feedback and score.
- Retake reuses the same fixed five questions; it does **not** yet select unseen questions from a question bank. This is a known product limitation in the Fractions Pilot specification, not a calculation defect.
- An unanswered question's correct answer is revealed after submission; this is consistent with the current practice/feedback pattern, but not a locked assessment mode.
- The existing answer-key mappings are accurate; no script change is required for correctness.

## Source relevance
The page's OpenStax Prealgebra 2e §4.2 source directly covers fraction simplification, multiplication, reciprocals and division. Illustrative Mathematics Grade 6 standard 6.NS.A.1 is relevant to fraction division and visual/word-problem interpretation. Khan Academy's conceptual division resource is a suitable supplementary explanation. OpenStax §4.2 was opened and its relevant learning objectives and explanations were inspected during this pass.

## Editorial issue to resolve before changing page metadata
The canonical path and breadcrumb hierarchy place this lesson under Grade 6, while the title, Open Graph title, breadcrumb label and lesson badge say “Grades 6–7”. This may be intentional cross-grade suitability, but it is inconsistent with the Grade 6 course path and the Fractions Pilot's Grade 6 cluster. Do not silently change it; decide whether to label the lesson Grade 6 or retain Grades 6–7 and explain its placement.

## Result
- Worked calculations: **10/10 correct**
- Practice answers: **8/8 correct**
- Quiz mappings: **5/5 match**
- Worksheet answers: **8/8 correct**
- Source relevance: relevant references found and checked
- Lesson/script changes: **none**
- Remaining pilot limitation: fixed-set retakes; no fresh question bank yet
- Remaining manual gates: keyboard/screen-reader review and print/PDF preview

