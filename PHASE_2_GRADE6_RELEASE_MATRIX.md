# Learnora Grade 6 Maths — Phase 2 Release Matrix

Date: 2026-11-05  
Branch: `phase-2-quality-fixes`  
Production deployment: **Not performed**

## Release status

This matrix separates checks that are complete from checks that still need real browser rendering or deeper academic review. A source-level pass is not a substitute for testing the deployed page on devices.

| Lesson | Five quiz keys checked | Detailed worked-example / practice / worksheet calculation review | Further-learning references | Metadata / schema | Mobile table handling |
|---|---:|---|---|---|---|
| Understanding Fractions | Pass | Reviewed | Pass | Pass | N/A |
| Equivalent Fractions | Pass | Reviewed | Pass | Pass | N/A |
| Comparing and Ordering Fractions | Pass | Reviewed | Pass | Pass | N/A |
| Adding and Subtracting Fractions | Pass | Reviewed | Pass | Pass | N/A |
| Introduction to Ratios | Pass | Pending detailed pass | Pass | Pass | Pass |
| Multiplying and Dividing Fractions | Pass | Reviewed | Pass | Pass | N/A |
| Mixed Numbers and Improper Fractions | Pass | Reviewed | Pass | Pass | Pass |
| Understanding Decimals | Pass | Reviewed | Pass | Pass | Pass |
| Adding and Subtracting Decimals | Pass | Reviewed | Pass | Pass | N/A |
| Understanding Percentages | Pass | Pending detailed pass | Pass | Pass | Pass |
| Percentage Increase and Decrease | Pass | Pending detailed pass | Pass | Pass | Pass |
| Multiplying and Dividing Decimals | Pass | Reviewed | Pass | Pass | Pass |
| Perimeter and Area of 2D Shapes | Pass | Reviewed | Pass | Pass | Pass |
| Volume of 3D Shapes | Pass | Reviewed | Pass | Pass | Pass |
| Metric Units and Conversions | Pass | Reviewed | Pass | Pass | Pass |
| Order of Operations | Pass | Reviewed | Pass | Pass | N/A |
| Angles and Triangles | Pass | Reviewed | Pass | Pass | Pass |
| Integers and the Number Line | Pass | Reviewed | Pass | Pass | N/A |
| Rates and Proportions | Pass | Reviewed | Pass | Pass | N/A |
| Factors, Multiples, HCF and LCM | Pass | Reviewed | Pass | Pass | Pass |
| Algebraic Expressions | Pass | Reviewed | Pass | Pass | Pass |
| Solving One-Step Equations | Pass | Reviewed | Pass | Pass | Pass |
| Data and Graphs | Pass | Reviewed | Pass | Pass | Pass |

## Cross-site checks completed

- All 23 lesson pages have five visible quiz questions and five matching answer-key entries; 115 answer mappings were compared with the visible options.
- All 23 corresponding quiz scripts contain submit handling, feedback text, a retake/reset handler and worksheet print handling.
- All 23 pages have a responsive breakpoint, print stylesheet, visible keyboard-focus styling, a labelled main navigation landmark, five quiz fieldsets and five corresponding legends.
- Every one of the 22 HTML tables across these lessons is now inside a keyboard-focusable responsive table region (18 `table-wrap` and 4 `table-scroll` wrappers). The shared `accessibility.css` adds a print override so table overflow does not clip printed output.
- All external links opened in a new tab have `rel="noopener noreferrer"`.
- All 23 pages have one canonical URL, matching Open Graph URL, `index,follow`, valid JSON-LD `BreadcrumbList`, and Open Graph title/description aligned with the page title/meta description.
- All 23 pages have at least one further-learning reference.
- 30 unique internal URL destinations were checked against the repository tree with no missing targets. All 23 page-specific scripts exist.
- The working-branch sitemap contains 104 URLs, including all 23 Grade 6 Maths lesson URLs.

## Still required before release

1. Deep academic review of the 12 lessons marked pending above, including worked reasoning, practice answers and worksheet keys.
2. Real rendered browser testing on desktop and narrow mobile widths. Static media-query checks do not prove the layout actually looks correct.
3. Live quiz interaction tests: submit correct/incorrect/unanswered combinations, verify feedback and score, retake, keyboard-only operation and focus order.
4. Print-preview tests for each worksheet layout and tables.
5. Accessibility checks with a real screen reader and automated accessibility tooling; source checks alone do not establish WCAG conformance.
6. Live URL HTTP/redirect/canonical verification and Google Rich Results/schema validation.
7. Review any remaining subject accuracy and source relevance with a qualified educator before claiming full academic verification.

## Important limitations

- The 115 quiz mappings are source-level verified against visible question options; this is not an external independent assessment of the whole lesson.
- The 11 detailed content reviews checked the listed calculations and answer keys, but are not a substitute for full subject-expert peer review.
- External references improve source transparency and further learning; they do not prove originality or that every sentence is independently verified.
- Google rankings, indexing, snippets and traffic cannot be guaranteed by these checks.
- No changes have been merged to `main` and no production deployment has been performed.
