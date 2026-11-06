# Learnora Fractions Pilot — Product and Implementation Specification
**Prepared:** 6 November 2026  
**Baseline:** current `main` at `eb30ff69498c122d3670e15475430f4673265846`  
**Working branch:** `preview-learnora-redesign-inventory-2026-11-06`  
**Status:** Design specification only; no lesson/tool source files changed.

## 1. Purpose
Build the first complete Learnora learning journey around Grade 6 fractions. The pilot must demonstrate that Learnora is a guided learning platform—not a set of disconnected notes and five-question quizzes.

Target journey:
**Understand → Explore → Practise → Check → Master → Revise → Progress**

The first release is free, client-side and curriculum-neutral. No paid API, external AI service, account system, advertising or third-party analytics is required.

## 2. Existing content to reuse
The current Grade 6 fractions cluster contains six lessons:

| Order | Existing lesson | Current extracted text length | Existing structure |
|---:|---|---:|---|
| 1 | Understanding Fractions | ~1,176 words | Outcomes, explanation, five example blocks, practice, five-question quiz, worksheet, sources, next links |
| 2 | Equivalent Fractions | ~1,083 words | Outcomes, explanation, examples, practice, five-question quiz, worksheet, sources, next links |
| 3 | Comparing and Ordering Fractions | ~1,441 words | Outcomes, comparison methods, benchmarks, ordering, practice, five-question quiz, worksheet, sources, next links |
| 4 | Adding and Subtracting Fractions | ~1,401 words | Outcomes, common/unlike denominators, worked methods, practice, five-question quiz, worksheet, sources, next links |
| 5 | Multiplying and Dividing Fractions | ~1,383 words | Outcomes, multiplication, reciprocal division, practice, five-question quiz, worksheet, sources, next links |
| 6 | Mixed Numbers and Improper Fractions | ~1,325 words | Outcomes, conversions, comparisons, practice, five-question quiz, worksheet, sources, next links |

These pages already have substantial content and dedicated sources. **Reuse and improve them; do not rewrite them from scratch without a demonstrated teaching gap.**

### Existing QA that must not be repeated unnecessarily
The 5 November fractions QA reviewed five lessons (Understanding, Equivalent, Comparing, Adding/Subtracting, Mixed/Improper): 25 visible quiz questions, 25/25 correct-answer mappings, and 5/5 source sections. It did **not** include the Multiplying/Dividing Fractions lesson in that specific QA batch. The broader Grade 6 Phase 2 record covers all 23 Grade 6 lessons and their 115 quiz mappings. Before release, do a focused check of the multiplication/division lesson's worked calculations, practice and worksheet answer key; do not repeat the other five pages' already-recorded mapping checks unless the implementation changes them.

### Current functional gap
The existing Understanding Fractions quiz script contains one fixed set of five questions. Its retake handler resets the same form, feedback and score. It does not choose unseen questions from a larger bank. The same limitation must be checked against the other five scripts before claiming the cluster has fresh retakes.

## 3. Course and skill architecture
```text
Mathematics
└── Grade 6
    └── Fractions
        ├── Unit 1 — Meaning and Models
        │   ├── Fraction as equal parts
        │   ├── Numerator and denominator
        │   └── Proper and improper fractions
        ├── Unit 2 — Equivalent Fractions
        │   ├── Build equivalent fractions
        │   └── Simplify fractions
        ├── Unit 3 — Compare and Order
        │   ├── Same numerator / denominator
        │   ├── Common denominators
        │   └── Benchmarks and ordering
        ├── Unit 4 — Add and Subtract
        │   ├── Like denominators
        │   └── Unlike denominators
        ├── Unit 5 — Multiply and Divide
        │   ├── Whole number × fraction
        │   ├── Fraction × fraction
        │   └── Divide using the reciprocal
        └── Unit 6 — Mixed and Improper
            ├── Convert improper to mixed
            └── Convert mixed to improper
```

The six existing lesson pages remain the canonical lesson destinations. Unit/skill pages can initially be navigation sections on a fractions course page; do not create six thin duplicate SEO pages.

## 4. Fraction visualizer and calculator
### Product behaviour
Create one shared fraction tool that can be opened as a dedicated Learnora tool page and embedded in compact form inside relevant lessons. The full tool and embedded widget must use the same calculation/visualization logic.

Suggested route and files:
- `tools/fraction-visualizer.html` — full tool page.
- `scripts/tools/fraction-visualizer.js` — calculation, rendering, validation and accessible interaction logic.
- `scripts/data/fractions-question-bank.js` — tagged question data, separate from the calculator.
- Reusable inline widget mount point in the six fractions lessons, only where it genuinely helps.

### Initial modes
1. **Visualise:** enter numerator and denominator; display a labelled fraction bar and number-line position.
2. **Equivalent fractions:** multiply/divide numerator and denominator by the same non-zero whole number; show why the value is unchanged.
3. **Compare:** compare two fractions using a visual model, common denominator and benchmark explanation.
4. **Add/subtract:** handle like and unlike denominators; show the common-denominator step before the final calculation.
5. **Multiply/divide:** show numerator/denominator multiplication; for division explain the reciprocal method.
6. **Convert:** improper ↔ mixed number; show quotient and remainder.
7. **Simplify:** calculate the greatest common factor and show each reduction step.

### Calculation rules
- Use exact integer arithmetic for the Grade 6 fraction operations; do not use floating-point rounding to decide equality or simplification.
- Validate inputs before calculating.
- Denominator must never be zero.
- Reject empty, non-integer, malformed and out-of-range input with a clear message.
- Start with non-negative Grade 6 examples; add negative rational numbers only in a later Grade 7 extension after separate teaching review.
- Keep numerator/denominator values within a documented safe input limit so very large values cannot freeze the browser.
- Explain whether a result is simplified; show the unsimplified and simplified forms where useful.
- Do not hide an incorrect or invalid input by silently changing it.

### Visual and accessible behaviour
- Use original SVG/CSS fraction bars and number-line diagrams; no copied competitor assets.
- Every visual must have an equivalent text explanation.
- Use labelled inputs, fieldsets/legends where appropriate, keyboard-accessible controls, visible focus, and an `aria-live` result region.
- Never require drag-and-drop as the only interaction.
- Support 320px mobile width, 200% zoom, high contrast and reduced motion.
- Provide Reset and Clear actions.
- Keep visual changes understandable without animation.

### Worked output format
For each operation, show:
1. The original expression.
2. What the learner should do first.
3. Each mathematical step.
4. The final exact answer.
5. A short reason or misconception warning.
6. A visual model where it improves understanding.

## 5. Practice and question-bank engine
### Data model
Every question should have:
- Stable unique ID.
- Subject, grade, unit and skill tags.
- Difficulty.
- Question type (MCQ, numeric entry, choose-the-model, compare/order, short explanation).
- Prompt and accessible text for any diagram.
- Options where relevant.
- Correct answer.
- Step-by-step explanation.
- One or more hints.
- Misconception tag.
- Source/reviewer metadata where appropriate.

### Bank size and attempt design
- Target 25–40 quality questions per foundational skill where justified; do not generate filler to reach a number.
- A normal short attempt selects five questions with a balanced skill/difficulty mix.
- Prefer unseen questions on retakes; do not repeat a question until the eligible bank is exhausted.
- When the bank is exhausted, explain that questions may repeat.
- Keep distractors tied to real misconceptions (e.g. adding denominators, comparing only numerators, forgetting to simplify, inverting the wrong fraction).
- Shuffle only where it cannot change the meaning or answer logic.
- Give feedback after submission; practice mode may reveal hints, assessment mode should not reveal answers before submission.
- Retake must reset selected answers, score and feedback and then load a new eligible set.

### Progress and privacy
- Start with local browser progress only; no account or cloud sync.
- Store only minimal progress/question IDs if persistence is needed. Do not store names, school details or other personal information.
- Include a clear progress-reset action and explain that local progress stays on the current browser/device.
- Do not claim cross-device progress.
- Do not load analytics or third-party trackers.

## 6. Worksheets and assessment ladder
Each unit should support:
1. Short concept check.
2. Guided practice with hints.
3. Independent practice.
4. Skill check.
5. Unit quiz.
6. Unit test.
7. Revision/mastery challenge.

Worksheet requirements:
- Original, varied questions with clear space to show working.
- A separate teacher/parent answer key with worked reasoning, not only final numbers.
- Student worksheet print should not expose the answer key by default.
- Provide a separate print-answer-key action.
- Use print CSS and page-break rules; manually inspect print preview/PDF before release.
- Tool use must be disabled in a skill assessment when it would undermine the skill being measured.

## 7. Navigation and internal linking
- Add a fractions course entry point that connects all six existing lessons.
- Add contextual “Try the fraction visualizer” links or compact widgets to the relevant lessons.
- Each lesson links to its prerequisite, related skill and next lesson.
- The course page should show the learner's next step without claiming mastery that has not been measured.
- Preserve current canonical lesson URLs; do not create near-duplicate pages for the same search intent.
- Add the tool URL to the sitemap only after it is functional and passes QA.
- Update sitemap, internal links, breadcrumbs and structured data only where eligible and accurate.

## 8. Implementation sequence
### P0 — complete pilot foundation
1. Verify all six lesson pages and scripts; specifically audit Multiplying/Dividing Fractions.
2. Build and unit-test exact fraction arithmetic functions.
3. Build the fraction bar and number-line visualizer.
4. Build equivalent-fraction and comparison modes.
5. Build addition/subtraction and conversion modes.
6. Build multiplication/division mode.
7. Create tagged question-bank structure and fresh retake selection.
8. Integrate compact widgets into the six lessons.
9. Add a course/skill navigation path and printable worksheet answer-key controls.

### P1 — polish and expansion
- Add saved local skill progress and a simple revision challenge.
- Add additional question types and skill-specific hints.
- Add more diagrams only where they improve comprehension.
- Extend to Grade 7 negative rational numbers only after a separate content/QA pass.

## 9. Testing and acceptance criteria
### Calculation tests
At minimum:
- Equivalent: 1/2 = 2/4 = 3/6.
- Simplify: 6/8 = 3/4.
- Compare: 2/3 > 3/5.
- Add: 1/2 + 1/3 = 5/6.
- Subtract: 3/4 − 1/4 = 1/2.
- Multiply: 2/3 × 3/5 = 2/5.
- Divide: 3/4 ÷ 1/2 = 3/2.
- Convert: 7/4 = 1 3/4.
- Convert: 2 1/3 = 7/3.
- Invalid: denominator 0, blank input, non-integer input and values outside the documented limit.
- Boundary: whole-number fractions, equal fractions, zero numerator, reducible and irreducible fractions.

### Browser and accessibility tests
- 320px, 390px, 768px and desktop widths.
- No horizontal overflow.
- Keyboard-only operation.
- Accessible names, labels, focus and live feedback.
- Axe scan and manual screen-reader review.
- Reset and retake load fresh questions and clear prior feedback.
- Print preview/PDF for student worksheet and answer key.
- No unexpected third-party requests or oversized assets.

### Content and release tests
- Recalculate every worked example and question answer.
- Confirm hints do not reveal the answer prematurely.
- Check source links and any factual claims.
- Confirm no unsupported curriculum alignment or educator-review claims.
- Run static site audit, legal audit, preview header/assets checks and full Playwright browser smoke.
- Keep all work on `preview-learnora-redesign-inventory-2026-11-06`; no merge or deployment without explicit user approval.

## 10. Out of scope for the first pilot
- AI tutor or paid external API.
- User accounts, cloud sync or personal learner profiles.
- Ad/analytics integration.
- Unrestricted code execution.
- Full Grade 7–8 rational-number system.
- Rewriting all 77 lessons at once.

**End of specification.**
