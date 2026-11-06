# Learnora — Source Attribution Recount
**Date:** 6 November 2026  
**Baseline:** `main` at `eb30ff69498c122d3670e15475430f4673265846`  
**Scope:** All 77 current lesson HTML files across six subject groups.

## Result
A fresh source-level recount finds **30 of 77 lessons (39.0%)** with a dedicated learner-facing Sources, References, Further Reading or Further Learning section. **47 lessons (61.0%)** do not currently show such a dedicated section.

This is a structural presence check only. It does not prove that every statement on a page is correct, that every listed source supports the relevant claim, or that a lesson has been independently reviewed by a qualified educator.

## Coverage
| Subject / level | Lessons | Dedicated source sections | Missing |
|---|---:|---:|---:|
| Mathematics — Grade 6 | 23 | 23 | 0 |
| Mathematics — Grade 7 | 12 | 0 | 12 |
| Mathematics — Grade 8 | 11 | 3 | 8 |
| English — Grades 6–8 | 9 | 2 | 7 |
| Science — Grades 7–8 | 13 | 2 | 11 |
| Computer Science — Grades 6–8 | 3 | 0 | 3 |
| AI Literacy — Grades 6–8 | 3 | 0 | 3 |
| Financial Literacy — Grades 6–8 | 3 | 0 | 3 |
| **Total** | **77** | **30** | **47** |

## Pages with a dedicated source section (30)
### Mathematics — Grade 6 (23)
All 23 Grade 6 Maths pages have a Sources and Further Reading / Further Learning section. The Phase 2 QA record states that all 23 pages received focused source-level review and all 115 quiz answer mappings were checked.

### Mathematics — Grade 8 (3)
- `math/grade-8/linear-equations-and-inequalities.html`
- `math/grade-8/probability-models-and-compound-events.html`
- `math/grade-8/pythagorean-theorem-and-right-triangles.html`

### English (2)
- `english/grade-6-8/argument-writing-claims-reasons-evidence.html`
- `english/grade-6-8/text-structure-authors-purpose.html`

### Science (2)
- `science/grade-7/weather-climate-water-cycle.html`
- `science/grade-8/earth-resources-sustainability-human-impact.html`

## Missing dedicated source sections (47)
### Mathematics — Grade 7 (12)
- `math/grade-7/adding-subtracting-integers.html`
- `math/grade-7/area-surface-area-volume.html`
- `math/grade-7/coordinate-geometry.html`
- `math/grade-7/equations-and-inequalities.html`
- `math/grade-7/fractions-decimals-and-percentages-in-problem-solving.html`
- `math/grade-7/geometry-angles-scale-drawings.html`
- `math/grade-7/rational-numbers-and-operations.html`
- `math/grade-7/ratios-rates-proportional-relationships.html`
- `math/grade-7/simplifying-algebraic-expressions.html`
- `math/grade-7/statistics-probability-data-interpretation.html`
- `math/grade-7/transformations-and-symmetry.html`
- `math/grade-7/two-step-equations.html`

### Mathematics — Grade 8 (8)
- `math/grade-8/angle-relationships-and-parallel-lines.html`
- `math/grade-8/exponents-powers-and-scientific-notation.html`
- `math/grade-8/linear-functions-and-graphs.html`
- `math/grade-8/scatter-plots-and-data-relationships.html`
- `math/grade-8/square-roots-and-irrational-numbers.html`
- `math/grade-8/systems-of-linear-equations.html`
- `math/grade-8/transformations-congruence-and-similarity.html`
- `math/grade-8/volume-of-cylinders-cones-and-spheres.html`

### English (7)
- `english/grade-6-8/paragraph-writing-topic-sentences-supporting-details.html`
- `english/grade-6-8/parts-of-speech.html`
- `english/grade-6-8/punctuation-and-capitalization.html`
- `english/grade-6-8/reading-comprehension-main-idea-inference-evidence.html`
- `english/grade-6-8/sentence-types-and-structure.html`
- `english/grade-6-8/verb-tenses-and-agreement.html`
- `english/grade-6-8/vocabulary-context-clues-prefixes-suffixes-roots.html`

### Science (11)
- `science/grade-7/ecosystems-and-food-chains.html`
- `science/grade-7/forces-and-motion.html`
- `science/grade-7/heat-transfer-conduction-convection-radiation.html`
- `science/grade-7/introduction-to-cells.html`
- `science/grade-7/mixtures-and-separation-techniques.html`
- `science/grade-7/states-of-matter-and-particle-model.html`
- `science/grade-8/earth-moon-and-space-patterns.html`
- `science/grade-8/electric-circuits-current-voltage-resistance.html`
- `science/grade-8/elements-compounds-and-chemical-reactions.html`
- `science/grade-8/human-digestive-and-circulatory-systems.html`
- `science/grade-8/waves-sound-and-light.html`

### Computer Science (3)
- `computer-science/algorithms.html`
- `computer-science/python-basics.html`
- `computer-science/html-css.html`

### AI Literacy (3)
- `ai-literacy/how-ai-works.html`
- `ai-literacy/verify-ai.html`
- `ai-literacy/ai-safety.html`

### Financial Literacy (3)
- `financial-literacy/budgeting.html`
- `financial-literacy/savings-interest.html`
- `financial-literacy/unit-prices.html`

## Reconciliation with earlier audit
The 3 November report recorded 7/77 pages. That snapshot predates the subsequent Grade 6 Maths Phase 2 source work. The current Grade 6 QA record explicitly states that all 23 Grade 6 lessons now contain a source/further-learning section. The 7/77 report must therefore be treated as historical and superseded by this 30/77 recount.

PRs #59–#62 contain preview-only source improvements for three AI Literacy pages and Algorithms. They are not included in the current production/main count because those PRs remain draft and unmerged. If all four source additions are eventually merged, the count would be expected to rise to 34/77; that is a conditional projection, not current status.

## Review order
1. Science: validate factual claims, diagrams, safety and health-related explanations against topic-specific official sources.
2. AI Literacy: validate privacy, bias, verification and responsible-use guidance.
3. Financial Literacy: verify interest, savings, price comparisons, fees and consumer examples.
4. Grade 7–8 Mathematics: independently recompute worked examples, practice answers and quiz keys.
5. English: review grammar, comprehension and writing guidance against reputable educational references.
6. Computer Science: verify Python, HTML/CSS and algorithm explanations against official documentation and trusted educational resources.

## Completion criteria
A lesson is source-reviewed only after:
1. Key factual claims, definitions, worked examples and calculations are checked.
2. Quiz answer keys match the visible questions and explanations.
3. Each external reference is live, relevant, age-appropriate and current.
4. Sources are placed close to claims where practical.
5. The lesson remains accessible and its internal/external links work.
6. Any reviewer attribution is genuine and independently approved.

Do not add generic sources solely to satisfy a count. A curriculum framework supports scope/alignment context but does not automatically substantiate every factual claim. Do not claim formal curriculum alignment, expert endorsement or independent review unless documented.
