# Phase 2 — Grade 6 Mathematics QA Batch

Date: 2026-11-05
Repository: com-orgs/learnora
Branch: phase-2-quality-fixes
Scope: 23 Grade 6 Mathematics lesson pages and their quiz scripts

## What was checked
- Retrieved all 23 lesson HTML files from the Phase 2 branch.
- Confirmed each sampled lesson file has a title and one H1.
- Counted visible text approximately after stripping HTML, styles and scripts. These counts are diagnostic only; word count is not a quality target.
- Confirmed each of the 23 lessons contains a quiz form and worksheet material.
- Confirmed each quiz has five question records and a corresponding script answer key with five entries.
- Compared all 115 multiple-choice answer-key mappings against the visible question and option text.
- Confirmed the quiz scripts provide per-question feedback/explanations and retake functionality in the checked set.
- Counted external reference links in each page source. A zero means no external HTTP(S) links were found in the lesson source; it does not by itself mean the maths is incorrect or that every elementary fact needs a citation.

## Lesson inventory

| Lesson | Approx. visible words | External reference links | Quiz key check |
| --- | ---: | ---: | --- |
| Understanding Fractions | 1,195 | 4 | 5/5 matched |
| Equivalent Fractions | 1,117 | 3 | 5/5 matched |
| Comparing and Ordering Fractions | 1,554 | 3 | 5/5 matched |
| Adding and Subtracting Fractions | 1,489 | 3 | 5/5 matched |
| Introduction to Ratios | 1,366 | 3 | 5/5 matched |
| Multiplying and Dividing Fractions | 1,409 | 3 | 5/5 matched |
| Mixed Numbers and Improper Fractions | 1,340 | 3 | 5/5 matched |
| Understanding Decimals and Place Value | 1,393 | 3 | 5/5 matched |
| Adding and Subtracting Decimals | 1,326 | 3 | 5/5 matched |
| Understanding Percentages | 1,171 | 3 | 5/5 matched |
| Percentage Increase and Decrease | 1,304 | 3 | 5/5 matched |
| Multiplying and Dividing Decimals | 1,488 | 3 | 5/5 matched |
| Perimeter and Area of 2D Shapes | 1,253 | 0 | 5/5 matched |
| Volume of 3D Shapes | 1,078 | 0 | 5/5 matched |
| Metric Units and Conversions | 1,108 | 0 | 5/5 matched |
| Order of Operations | 974 | 0 | 5/5 matched |
| Angles and Triangles | 1,060 | 0 | 5/5 matched |
| Integers and the Number Line | 1,062 | 0 | 5/5 matched |
| Rates and Proportions | 1,249 | 0 | 5/5 matched |
| Factors, Multiples, HCF and LCM | 1,160 | 0 | 5/5 matched |
| Introduction to Algebraic Expressions | 1,030 | 0 | 5/5 matched |
| Solving One-Step Equations | 980 | 0 | 5/5 matched |
| Data and Graphs | 1,273 | 0 | 5/5 matched |

## Results
- Quiz answer-key verification: 23 lessons × 5 questions = 115 mappings checked against visible options; no mismatch found in this pass.
- Quiz and worksheet presence: confirmed in all 23 page sources.
- External source coverage: 12 lessons have 3–4 external reference links; 11 lessons currently have no external HTTP(S) reference links in their source.
- The 11 pages without external links are not automatically inaccurate. However, a curated, relevant “Sources and further reading” section can improve verifiability and provide useful next steps, especially where a claim, method, curriculum expectation or real-world application needs support.
- This was a source-level content/answer audit. It did not constitute a complete independent review of every paragraph, every worksheet answer, every rendered diagram, accessibility, mobile display, or live browser interaction.
- No Grade 6 Maths lesson content has been rewritten in this batch. No production deployment occurred.

## Next priorities
1. Conduct full lesson-by-lesson teaching-quality and factual review, including worked examples and worksheet answer keys.
2. Add carefully selected authoritative references to the 11 lessons where useful; do not add citations mechanically to simple facts.
3. Review examples for originality and educational value; do not claim plagiarism-free status without a proper comparison.
4. Verify rendered lesson UI, quiz feedback, worksheet printing, keyboard access and mobile layout.
5. Review internal links, title/meta descriptions and structured data page by page.


## Additional lesson QA — Angles, Integers, Order of Operations

Date: 2026-11-05

### Angles and Triangles
- Reviewed angle definitions and ranges, protractor instructions, triangle classification by sides and angles, triangle angle-sum examples, straight-line and around-a-point angle facts, seven practice answers, five quiz mappings and seven worksheet answer-key items.
- Recalculated the reviewed missing-angle answers: 70°, 55°, 60°, 48°, 50° and 140° where applicable. No mismatch found.
- Confirmed all five quiz answer mappings match the visible question options.
- Added a short explanation that side-based and angle-based triangle classifications are independent and can be combined (for example, a right-angled isosceles triangle).
- Added further-learning links to Math Is Fun's protractor and triangle references.
- Source-level structural verification: one H1, one canonical, five quiz questions, one “Continue Learning” section and one “Sources and Further Learning” section.

### Integers and the Number Line
- Reviewed integer definitions, number-line direction, comparisons and ordering, opposites, absolute value, temperature/floor/money examples, seven practice answers, five quiz mappings and seven worksheet answer-key items.
- Rechecked the ordering and absolute-value examples and the money-change calculations. No mismatch found.
- Confirmed all five quiz answer mappings match the visible question options.
- Added GeoGebra further-learning resources for integers, ordering integers on a number line and absolute value on a number line; these are identified as Grades 6–8 resources where the source does so.
- Source-level structural verification: one H1, one canonical, five quiz questions, one “Continue Learning” section and one “Sources and Further Learning” section.

### Order of Operations
- Reviewed the priority rules, left-to-right handling for operations of equal priority, worked examples, eight practice answers, five quiz mappings and eight worksheet answer-key items.
- Recalculated the mixed-operation examples and answer keys, including 24 ÷ 6 × 2 = 8 and 48 − 24 ÷ 4 × 2 = 36. No mismatch found.
- Confirmed all five quiz answer mappings match the visible question options.
- Clarified that some BIDMAS/PEMDAS versions include indices/exponents after brackets, while this introductory lesson focuses on brackets and the four basic operations.
- Added references from The Open University and the Australian Mathematical Sciences Institute (AMSI), including a Year 6 teaching resource.
- Source-level structural verification: one H1, one canonical, five quiz questions, one “Continue Learning” section and one “Sources and Further Learning” section.

### Scope and limitations
- This is a source-level review of the listed content and answer mappings. It does not prove plagiarism-free originality, complete academic peer review, mobile visual quality, accessibility conformance, or successful live browser interactions.
- Firecrawl retrieval was unavailable because the connected account had exhausted its daily MCP credit allowance. Source discovery used web search as a fallback; Firecrawl was not retried.
- No production deployment occurred. All edits remain on `phase-2-quality-fixes`.


## Additional lesson QA — Rates, Factors and Algebra

Date: 2026-11-05

### Rates and Proportions
- Reviewed rate and unit-rate definitions, unit conversion expectations, worked examples, equivalent ratios, missing-value proportions, three real-life examples, seven practice answers, five quiz mappings and six worksheet answer-key items.
- Recalculated the unit rates and proportion scale factors. No arithmetic mismatch found.
- Confirmed all five quiz answer mappings match the visible options.
- Added GeoGebra Grades 6–8 ratios/rates activities and an Oxford University Press teacher-guide reference.
- Source-level structure verified: one H1, one canonical, five quiz questions, one “Continue Learning” section, one source section; all new external links use `rel="noopener noreferrer"`.

### Factors, Multiples, HCF and LCM
- Reviewed factor and multiple definitions, prime/composite distinction, HCF and LCM methods, real-life grouping/repeating-event examples, eight practice answers, five quiz mappings and seven worksheet answer-key items.
- Found and corrected a factual overgeneralisation: the statement that every whole number greater than zero has at least two positive factors incorrectly included 1. It now says every whole number greater than 1 has at least two positive factors and explicitly identifies 1 as the exception.
- Rechecked HCF/LCM examples and worksheet calculations; no other mismatch found.
- Confirmed all five quiz answer mappings match the visible options.
- Added Math Is Fun, Khan Academy Grade 6 practice and Oxford University Press Pakistan teacher-guide references.
- Source-level structure verified: one H1, one canonical, five quiz questions, one “Continue Learning” section, one source section; all new external links use `rel="noopener noreferrer"`.

### Introduction to Algebraic Expressions
- Reviewed definitions of variables, constants, coefficients and terms; translating phrases; substitution; combining like terms; the pattern example; eight practice answers; five quiz mappings and seven worksheet answer-key items.
- Recalculated the evaluated expressions and simplifications. No mismatch found.
- Confirmed all five quiz answer mappings match the visible options.
- Added OpenStax and Alloprof references for expression vocabulary, substitution and like terms.
- Source-level structure verified: one H1, one canonical, five quiz questions, one “Continue Learning” section, one source section; all new external links use `rel="noopener noreferrer"`.

### Scope and limitations
- These are source-level checks. No claim is made that every sentence has received independent subject-expert review or that the lessons are plagiarism-free.
- Firecrawl remained unavailable due to exhausted connected-account daily MCP credits; web search was used as the fallback for source discovery. No retry was made.
- No production deployment occurred.


## Additional lesson QA — One-Step Equations and Data and Graphs

Date: 2026-11-05

### Solving One-Step Equations
- Reviewed the equation and inverse-operation explanations, balance principle, four worked examples, solution checks, two word problems, eight practice answers, five quiz mappings and eight worksheet answer-key items.
- Recalculated the reviewed solutions and substitutions. No arithmetic or answer-key mismatch found.
- Confirmed all five quiz answer mappings match the visible options.
- Added two Khan Academy Grade 6 references covering addition/subtraction and multiplication/division equations.
- Source-level structure verified: one H1, one canonical, five quiz questions, one “Continue Learning” section and one source section; both new external links use `rel="noopener noreferrer"`.

### Data and Graphs
- Reviewed data types and survey note, frequency table, bar-chart values and proportions, line-graph explanation, mean/median/mode/range examples, seven practice answers, five quiz mappings and seven worksheet answer-key items.
- Recalculated the table total (18), mean/median/range examples, frequency totals and worksheet measures. No arithmetic mismatch found.
- Confirmed all five quiz answer mappings match the visible options.
- Added Khan Academy Grade 6 data/statistics and line-graph learning references, plus a Pennsylvania SAS Grades 5–8 interactive mean/median/mode activity.
- Source-level structure verified: one H1, one canonical, five quiz questions, one “Continue Learning” section and one source section; all three new external links use `rel="noopener noreferrer"`.

### Updated Grade 6 reference coverage
- The original batch found 11 of 23 Grade 6 Maths lesson files without external HTTP(S) references.
- Relevant sources have now been added to those 11 pages: Perimeter and Area; Volume of 3D Shapes; Metric Units and Conversions; Angles and Triangles; Integers and the Number Line; Order of Operations; Rates and Proportions; Factors, Multiples, HCF and LCM; Algebraic Expressions; Solving One-Step Equations; and Data and Graphs.
- The 23-page source inventory now has at least one external reference link in every Grade 6 Maths lesson file. This improves further-reading and source discoverability; it does not independently prove every claim or establish plagiarism-free originality.
- No production deployment occurred.


## Grade 6 internal-link and sitemap cross-check

Date: 2026-11-05
- Retrieved the working-branch repository tree and checked the root-relative internal destinations used across all 23 Grade 6 Maths lesson pages.
- Checked 30 unique internal URL destinations against files in the branch. No missing repository targets were found.
- Verified that each of the 23 lesson pages references a matching page-specific JavaScript file and that all 23 corresponding scripts exist in the branch.
- Checked the working-branch `sitemap.xml`: it contains 104 URLs, including all 23 Grade 6 Maths lesson URLs.
- This is a repository-level path and sitemap membership check. It does not prove that every URL returns HTTP 200 in production, that redirects/canonicals behave correctly at runtime, or that browser rendering works.
- No sitemap or deployment changes were made.


## Grade 6 SEO metadata and structured-data audit

Date: 2026-11-05
- Inspected all 23 Grade 6 Maths lesson HTML files on the working branch.
- Every lesson has exactly one canonical link, and the canonical URL matches its Open Graph URL.
- All 23 pages declare `robots=index,follow`; no unintended noindex directive was found in this source-level check.
- All 23 pages contain one JSON-LD block. Each block parses as valid JSON and declares `BreadcrumbList`.
- All 23 pages' Open Graph titles now exactly match their HTML page titles; all Open Graph descriptions now exactly match the meta descriptions.
- Corrected social metadata mismatches on the affected lesson pages only. No canonical URLs, meta descriptions, content titles, or structured-data claims were changed.
- Meta description lengths across the inspected pages ranged from 132 to 160 characters. Length is a descriptive check only; Google may rewrite snippets and does not guarantee display of the supplied description.
- The structured data currently provides BreadcrumbList only. No unsupported author, reviewer, rating, course accreditation or learning-outcome claims were added.
- This is static source validation; no Google Rich Results Test, Schema Markup Validator, live crawler rendering, mobile screenshot or production URL response test was performed.
- No production deployment occurred.


## Static mobile, accessibility and quiz-script checks

Date: 2026-11-05
- Inspected all 23 lesson templates. Each includes a mobile-width media query, print stylesheet, visible keyboard-focus styling, labelled main navigation, five quiz fieldsets and five legends.
- Every table across the 23 lesson pages is now wrapped in a `div.table-wrap` region with `role="region"`, `aria-label="Scrollable table"` and `tabindex="0"`. There are 22 tables in total; all 22 wrappers and matching closing tags were re-fetched and counted.
- Updated shared `accessibility.css` with a print override that removes horizontal overflow clipping from table wrappers when printing.
- Every external link using `target="_blank"` in the inspected Grade 6 lessons also has `rel="noopener noreferrer"`.
- All 23 quiz scripts were source-checked for five answer entries, submit handling, `preventDefault`, feedback text, retake/reset handling, progress reset and worksheet print handling. The previously reviewed 115 answer mappings remain unchanged.
- These are static markup/script checks, not real browser interaction or accessibility certification. Screen-reader behaviour, focus order, actual mobile rendering, print preview and runtime JavaScript errors remain unverified.
- No production deployment occurred.

## Release matrix
- Created `PHASE_2_GRADE6_RELEASE_MATRIX.md` to distinguish all 23 pages' quiz-key, detailed academic review, reference, metadata/schema, mobile table and pending browser QA status.
- 11 pages have detailed worked-example/practice/worksheet calculation reviews recorded; the remaining 12 are explicitly marked for deeper review. This prevents the 115 quiz-key check from being misrepresented as a full academic audit.


## Deep content review — Understanding Fractions

Date: 2026-11-05
- Reviewed the complete lesson's definition of fractions, numerator/denominator, proper/improper/mixed forms, visual pizza model, three worked examples, common mistakes, five practice questions and answers, five quiz questions and answer key, eight worksheet questions and teacher key.
- Rechecked all worksheet responses: numerator/denominator (3 and 7), examples of proper/improper fractions, 4/9 as proper, 3/8 for the pizza, 2 1/3 for two wholes and one third, denominator as total equal parts, and 8/8 as improper. All supplied answers are correct.
- The five quiz mappings match the visible options; no mismatch found.
- Reviewed source references (OpenStax, BBC Bitesize, Math Learning Center and NRICH) for topic relevance. They support further learning and are not presented as formal curriculum alignment.
- Found missing closing `</body>` and `</html>` tags at the end of the source. Added both tags and re-fetched the file to verify the document now ends with the page script followed by the two closing tags.
- No other factual or arithmetic issue found in this focused pass. This remains a source-level review, not external subject-expert peer review or browser testing.


## Deep content review — Equivalent Fractions

Date: 2026-11-05
- Reviewed fraction equivalence definitions, visual bar model, multiplying/dividing rules, simplification, equivalence checks, common mistakes, three worked practice examples, six practice questions and answers, five quiz questions/answer keys, and seven worksheet items with teacher key.
- Recalculated the worked examples: 2/3 = 4/6; 12/18 = 2/3; 3/4 = 6/8; 3/8 = 9/24; 15/20 = 3/4; and 4/5 = 16/20. All are correct.
- Rechecked practice answers: 1/3 = 4/12; 2/5 = 8/20; 8/12 = 2/3; 18/24 = 3/4; 3/7 = 12/28; and 4/6 = 2/3. All are correct.
- Rechecked quiz answer mappings and worksheet keys, including 2/3 × 5/5 = 10/15, 3/4 = 12/16, 6/10 = 3/5 and 21/28 = 3/4. No mismatch found.
- Confirmed the visual model shades 1/2 in bars divided into 2, 4 and 6 equal parts.
- Reviewed OpenStax, BBC Bitesize and Math Learning Center references for relevance.
- No source-level factual or arithmetic error found in this focused review. This is not a substitute for subject-expert peer review or live browser testing.


## Deep content review — Comparing and Ordering Fractions

Date: 2026-11-05
- Reviewed same-denominator and same-numerator comparisons, common-denominator conversions, benchmark reasoning around 0, 1/2 and 1, ordering methods, common mistakes, worked examples, six practice answers, five quiz mappings and seven worksheet answer-key items.
- Recalculated 2/3 vs 3/4 (8/12 vs 9/12), 5/6 vs 7/9 (15/18 vs 14/18), benchmark example 3/8 vs 5/9, and ordering examples. All conclusions are correct.
- Rechecked all practice and worksheet answers, including descending order 7/8, 5/6, 3/4 and 2/3 vs 5/8 (16/24 vs 15/24). No mismatch found.
- Confirmed the five quiz answer mappings match visible options.
- Reviewed the UK Year 6 Mathematics Guidance, Khan Academy Class 6 Mathematics and Illustrative Mathematics common-denominator lesson as further-learning references. Their inclusion is not presented as Learnora curriculum accreditation or formal alignment.
- No source-level factual or arithmetic issue found in this focused pass. Browser rendering and live quiz interaction remain unverified.


## Deep content review — Adding and Subtracting Fractions

Date: 2026-11-05
- Reviewed same-denominator operations, common denominators, simplifying, four-step method, estimation, three real-life examples, five common mistakes, eight practice answers, five quiz mappings and eight worksheet answer-key items.
- Recalculated practice answers: 2/9 + 4/9 = 2/3; 7/10 − 3/10 = 2/5; 1/2 + 1/5 = 7/10; 3/4 − 1/8 = 5/8; 2/3 + 1/6 = 5/6; 5/6 − 1/4 = 7/12; 3/8 + 2/8 = 5/8; and 7/8 − 1/4 = 5/8. All are correct.
- Recalculated worksheet keys: 8/11; 4/12 = 1/3; 11/12; 7/12; 7/10; 3/8; 5/6 km; and 5/8 L. All are correct.
- Confirmed all five quiz mappings match visible options and their explanations.
- Reviewed OpenStax common-denominator/different-denominator lessons and Math Learning Center fraction-model resources for relevance.
- No source-level factual or arithmetic mismatch found in this focused review. Browser interaction and print preview remain unverified.


## Deep content review — Multiplying and Dividing Fractions

Date: 2026-11-05
- Reviewed multiplication by whole numbers, multiplying fractions, cross-cancellation, division meaning, reciprocal method, zero-divisor note, real-life problems, common mistakes, eight practice answers, five quiz mappings and eight worksheet answer-key items.
- Recalculated worked examples: 3 × 1/4 = 3/4; 2/3 × 3/5 = 2/5; 4/9 × 3/8 = 1/6; 2/3 ÷ 4/5 = 5/6; and 3/4 ÷ 1/2 = 3/2 = 1 1/2. All are correct.
- Recalculated word problems: half of 2/3 cup = 1/3 cup; 3/4 m divided into 1/8 m pieces = 6 pieces; 2/3 m × 3/5 m = 2/5 m². All are correct.
- Rechecked all practice answers, including 5/6 × 3/10 = 1/4, 3/5 ÷ 2/3 = 9/10, and 2/3 ÷ 1/6 = 4. All are correct.
- Rechecked worksheet answers, including 7/10 × 5/14 = 1/4, 5/8 ÷ 1/4 = 2 1/2, and 3/4 ÷ 2/5 = 1 7/8. All are correct.
- Confirmed all five quiz answer mappings match the visible options.
- Reviewed OpenStax, Illustrative Mathematics Grade 6 standard 6.NS.A.1 and Khan Academy fraction-division material for relevance.
- No source-level factual or arithmetic mismatch found in this focused review. Browser and print-preview behaviour remain unverified.


## Deep content review — Mixed Numbers and Improper Fractions

Date: 2026-11-05
- Reviewed proper/improper fraction definitions, mixed-number representation, both conversion methods, quick-reference table, comparing mixed and improper forms, common mistakes, seven practice answers, five quiz mappings and seven worksheet answer-key items.
- Recalculated conversions: 11/4 = 2 3/4; 17/5 = 3 2/5; 2 3/5 = 13/5; 4 1/3 = 13/3; 13/4 = 3 1/4; 2 2/3 = 8/3; 19/5 = 3 4/5; and 1 5/6 = 11/6. All are correct.
- Rechecked comparisons: 1 2/3 = 20/12 and 7/4 = 21/12, so the mixed number is smaller; 2 1/2 = 10/4, so 11/4 is greater. Correct.
- Rechecked practice and worksheet answers, including 22/6 = 3 2/3, 5 3/4 = 23/4, 23/6 = 3 5/6, and 4 3/8 = 35/8. No mismatch found.
- Confirmed all five quiz mappings match visible options.
- Reviewed Manitoba Education Grade 6 support material, Texas Instruments Grades 4–6 activity and Open University OpenLearn reference for relevance.
- No source-level factual or arithmetic issue found in this focused review. Browser and print-preview behaviour remain unverified.


## Deep content review — Understanding Decimals

Date: 2026-11-05
- Reviewed decimal place-value definitions, reading/writing decimals, zero placeholders, comparing and ordering, rounding, decimal/fraction equivalences, seven practice answers, five quiz mappings and eight worksheet answer-key items.
- Recalculated all reviewed values: 3.5 > 3.47; 0.65 < 0.705 < 0.8; 6.274 rounds to 6, 6.3 and 6.27 at the stated precisions; 5.284 rounds to 5.3; 3.846 rounds to 3.85; and 0.75 = 3/4. All are correct.
- Rechecked place-value statements (including 2.08 and 6.125), ordering practice, and worksheet comparisons/rounding. No mismatch found.
- Confirmed all five quiz answer mappings match visible options.
- Found four tables wrapped in two nested, separately focusable scroll regions. Removed the redundant inner wrappers and kept one keyboard-focusable `.table-scroll` region per table.
- Consolidated two overlapping related-learning sections into one section with four distinct lesson links.
- Updated shared print CSS to handle both `.table-wrap` and `.table-scroll` regions. Re-fetched the page and verified four tables, four scroll regions, no nested scroll regions, one related-learning section, and closing body/html tags.
- Reviewed OpenStax, Khan Academy Grade 6 WNCP and NCETM references for relevance.
- No source-level factual or arithmetic issue found in this focused review. Browser and print-preview behaviour remain unverified.


## Deep content review — Adding and Subtracting Decimals

Date: 2026-11-05
- Reviewed place-value alignment, placeholder zeros, addition, subtraction with regrouping, estimation, money/distance/measurement examples, common mistakes, eight practice answers, five quiz mappings and eight worksheet answer-key items.
- Recalculated worked examples: 12.45 + 3.70 = 16.15; 4.35 + 2.80 = 7.15; 0.76 + 0.19 = 0.95; 5.20 − 1.76 = 3.44; 4.30 − 1.85 = 2.45; and 8.72 + 3.19 = 11.91. All are correct.
- Rechecked all practice answers, including 7.02 − 1.80 = 5.22, 10.00 − 4.65 = 5.35, and 2.50 − 0.85 = 1.65 L. No mismatch found.
- Rechecked worksheet keys, including 7.08 + 0.95 = 8.03, 10.00 − 3.48 = 6.52 and 6.03 − 1.90 = 4.13. All are correct.
- Confirmed all five quiz answer mappings match visible options.
- Found repeated guidance in the “Common Mistakes” section. Consolidated it into five distinct reminders covering alignment, placeholder zeros, decimal-point placement, regrouping and estimation.
- Reviewed OpenStax Decimal Operations, Khan Academy Grade 6 arithmetic and Illustrative Mathematics’ Grade 6 money task as further-learning references.
- No source-level factual or arithmetic issue found in this focused review. Browser and print-preview behaviour remain unverified.
