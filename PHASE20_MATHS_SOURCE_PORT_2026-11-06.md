# Phase 20 — Grade 7/8 Mathematics source coverage (6 November 2026)

## Scope and files
Added dedicated, topic-specific source sections only to four existing lesson pages on the preview branch:
- `math/grade-7/transformations-and-symmetry.html`
- `math/grade-8/angle-relationships-and-parallel-lines.html`
- `math/grade-8/exponents-powers-and-scientific-notation.html`
- `math/grade-8/linear-functions-and-graphs.html`

No explanations, worked examples, practice items, quiz options, answer-key mappings, JavaScript, canonical URLs, metadata, sitemap entries or production files were changed.

## Source verification
- Transformations and symmetry: Khan Academy's Geometry Transformations unit was found through search and checked for scope coverage of rigid transformations, translations, rotations, reflections and line/rotational symmetry. The page did not expose readable lines to the browser fetcher, so verification is based on the search result summary, not a full page text inspection.
- Angle relationships and parallel lines: OpenStax Contemporary Mathematics §10.2 was opened and confirms the scope includes angle pairs formed by transversals crossing parallel lines. OpenStax Prealgebra 2e §9.3 supports supplementary/complementary angles and triangle angle facts. Khan Academy's Grade 8 alternate-interior-angle lesson was found through search; its direct page fetch returned a cache miss, so treat that link as a supplementary learning path rather than fully page-fetched evidence.
- Exponents and scientific notation: OpenStax Prealgebra 2e §10.5 was opened. Its learning objectives cover negative integer exponents, integer exponent simplification, and conversion between decimal and scientific notation. The section's key concepts also state the zero-exponent rule and the exponent properties. §10.2 supports repeated multiplication and product/power properties.
- Linear functions and graphs: OpenStax Prealgebra 2e §§11.2 and 11.4 were opened. §11.2 covers graphing linear equations by plotting points; §11.4 covers slope as rise/run, the two-point slope formula, and graphing from a point and slope. Khan Academy's Grade 8 linear equations/functions unit was found through search and covers slope, intercepts, slope-intercept form, function rules and interpreting linear models; the page had no readable lines in the browser fetcher.

## Coverage recount
A direct check of current preview-branch HTML found:
- Grade 7 Maths: 12/12 source sections (11 were already present; Transformations and Symmetry was the remaining gap and has now been filled).
- Grade 8 Maths: 6/11 source sections (3 were already present; the three additions above bring it to 6/11).
- Science: 13/13.
- English: 9/9.
- AI Literacy: 3/3.
- Financial Literacy: 3/3.
- Computer Science: 1/3.
- Total: **70/77** with **7 remaining gaps** (five Grade 8 Maths and two Computer Science).

This is a structural source-section count, not an academic quality score or independent educator sign-off. Existing source headings on other pages still need link relevance/currency checks and factual claims need topic-level review.

## CI and release safety
- Current PR #63 head after the four lesson updates: `36de89b85485b098defdfc0da905a853676b7b2c`.
- Exact-head GitHub Actions run #1007 / `42207367501` is pending/queued at checkpoint time. No green claim is made for this latest head.
- PR #63 remains draft/open and unmerged.
- No production deployment, GSC indexing request or change to `main` was made.
- No independent educator review is claimed.
