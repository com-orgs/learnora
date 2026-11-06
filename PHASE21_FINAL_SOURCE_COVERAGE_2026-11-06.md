# Phase 21 — Final Grade 8 Maths and Computer Science source coverage (6 November 2026)

## Scope
Added source sections to the final three lessons that were missing them on the current preview branch:
- `math/grade-8/volume-of-cylinders-cones-and-spheres.html`
- `computer-science/html-css.html`
- `computer-science/python-basics.html`

The previous Phase 20 batch added sources to scatter plots, square roots/irrational numbers, systems of equations and transformations/congruence/similarity. Together, these close the remaining Grade 8 Maths and Computer Science source-section gaps.

## Sources verified
- Volume of cylinders, cones and spheres:
  - OpenStax Prealgebra 2e §9.6 was opened and its learning objectives and text confirm the volume formulas for spheres, cylinders and cones.
  - Khan Academy Grade 8 Functions and Volume was found through search and includes lessons/practice on cylinder, cone and sphere volume.
- HTML and CSS:
  - MDN Web Docs HTML: Creating the Content was opened and confirms the scope of HTML structure, semantic content and image alternatives.
  - MDN Web Docs CSS: Styling the Content was opened and confirms CSS selectors, declarations and presentation concepts.
  - MDN HTML accessibility reference was found through search; direct fetch returned a cache miss, so its presence is recorded as a relevant supplementary resource, not full page verification.
- Python variables, input and output:
  - Python 3 tutorial introduction was opened and confirms assignment, numbers, integer and float types.
  - Python tutorial Input and Output was opened and covers the print function and output formatting.
  - Python built-in functions reference was opened; it explicitly documents that input() reads a line, converts it to a string, and returns it. It also documents int(), float() and print().
  - Python built-in types reference was opened and documents numeric and Boolean types.

## Final structural source-section count
- Mathematics Grade 6: 23/23
- Mathematics Grade 7: 12/12
- Mathematics Grade 8: 11/11
- English: 9/9
- Science: 13/13
- Financial Literacy: 3/3
- AI Literacy: 3/3
- Computer Science: 3/3
- **Total: 77/77 lesson pages**

## Scope limitations
- This closes the structural presence of a source section on every lesson page. It does not prove that every fact, calculation, quiz answer or worksheet answer across all 77 pages has been independently verified.
- The sources added in this phase are relevant to the concepts covered; some Khan Academy/MDN pages did not expose readable page text to the browser fetcher, as noted above.
- Independent educator review, manual screen-reader testing and real print/PDF preview remain separate quality gates.
- No external platform wording, diagrams, images, code or question banks were copied into Learnora.

## Release safety
- Preview branch only: `preview-learnora-redesign-inventory-2026-11-06`.
- PR #63 remains draft/open and unmerged.
- No production deployment, GSC indexing request or main-branch merge was performed.
