# Learnora Grade 6 Maths — Phase 2 Release Matrix

Date: 2026-11-05  
Branch: `phase-2-quality-fixes` merged to `main` via [PR #57](https://github.com/com-orgs/learnora/pull/57)  
Production deployment: **Successful — 2026-11-05**  
Production commit: `66d163cd9f2c4d96e65a49bcc373725c0a9fa3f1`

## Release status

This matrix separates checks that are complete from checks that still need real browser rendering or deeper academic review. A source-level pass is not a substitute for testing the deployed page on devices.

| Lesson | Five quiz keys checked | Detailed worked-example / practice / worksheet calculation review | Further-learning references | Metadata / schema | Mobile table handling |
|---|---:|---|---|---|---|
| Understanding Fractions | Pass | Reviewed | Pass | Pass | N/A |
| Equivalent Fractions | Pass | Reviewed | Pass | Pass | N/A |
| Comparing and Ordering Fractions | Pass | Reviewed | Pass | Pass | N/A |
| Adding and Subtracting Fractions | Pass | Reviewed | Pass | Pass | N/A |
| Introduction to Ratios | Pass | Reviewed | Pass | Pass | Pass |
| Multiplying and Dividing Fractions | Pass | Reviewed | Pass | Pass | N/A |
| Mixed Numbers and Improper Fractions | Pass | Reviewed | Pass | Pass | Pass |
| Understanding Decimals | Pass | Reviewed | Pass | Pass | Pass |
| Adding and Subtracting Decimals | Pass | Reviewed | Pass | Pass | N/A |
| Understanding Percentages | Pass | Reviewed | Pass | Pass | Pass |
| Percentage Increase and Decrease | Pass | Reviewed | Pass | Pass | Pass |
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

## Release verification completed — 2026-11-05

- PR [#57](https://github.com/com-orgs/learnora/pull/57) merged successfully to `main`.
- Production main commit: `66d163cd9f2c4d96e65a49bcc373725c0a9fa3f1`.
- GitHub Actions production deployment workflow [run #67](https://github.com/com-orgs/learnora/actions/runs/42049423565) completed successfully; Cloudflare Pages deployment check also reported success.
- The exact same source tree was browser-tested on the PR preview before merge.
- Playwright/Chromium tested all 104 sitemap routes at 320px, 390px, 768px and desktop widths. All routes loaded and no horizontal overflow was found.
- 77 interactive quizzes were submitted; keyboard radio selection, feedback and retake/reset checks passed on all tested quiz forms.
- 79 worksheet print controls invoked the print handler successfully. This verifies the handler, not the visual output of a real print-preview/PDF workflow.
- Automated axe checks using WCAG 2.0/2.1 A/AA tags reported no violations. This is not a full WCAG conformance certification or a substitute for manual screen-reader testing.
- All 104 routes passed the configured first-party transfer/resource budgets; no third-party browser/CSP errors were reported.
- Preview HTTP/security checks passed: homepage HTTP 200, expected security headers/CSP, homepage script, Grade 6 fractions page and script, and custom 404 behaviour.
- Post-deployment live fetch verified the production homepage and Grade 6 Understanding Fractions page, their canonical/robots metadata, the 104-URL sitemap, and robots.txt sitemap reference.
- Production remains curriculum-neutral; no claim of independent educator peer review is made.

## Remaining post-release work (not a deployment blocker)

1. Arrange manual screen-reader testing with a real assistive-technology setup.
2. Review actual print-preview/PDF output for representative worksheets and tables; CI only verified print-handler invocation.
3. Obtain an independent educator/subject-expert review before describing the lessons as academically peer-reviewed.
4. Continue indexing and search-performance monitoring under the existing GSC daily inspection limits. Do not exceed the established daily cap.

## Important limitations

- Source-level review and answer-key consistency checks do not prove originality or independent academic peer review.
- Automated axe checks do not certify full WCAG conformance.
- Google rankings, indexing, snippets and traffic cannot be guaranteed by these checks.
- The deployment is live; future content changes should follow the same preview QA and production release workflow.

