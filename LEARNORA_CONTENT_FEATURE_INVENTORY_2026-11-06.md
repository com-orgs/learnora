# Learnora — Content & Feature Inventory
**Audit date:** 6 November 2026  
**Baseline:** `main` at `eb30ff69498c122d3670e15475430f4673265846`  
**Working branch:** `preview-learnora-redesign-inventory-2026-11-06`  
**Production:** https://learnora-ab2.pages.dev/

## 1. Scope and method
This inventory is based on the current `main` repository, the live production sitemap and a source-level inspection of all 77 lesson HTML files. It distinguishes automated/structural evidence from academic review. It does not claim that all lesson content has been independently verified by an educator.

## 2. Verified platform snapshot
- Repository: 216 files; 105 HTML files (104 indexable sitemap pages plus the custom 404 page).
- Lesson files: **77** across six subject groups.
- Live sitemap: **104 unique URLs**, zero duplicates; every sitemap URL maps to a file in `main`.
- Robots: permits general crawling and explicitly allows `OAI-SearchBot`; declares the sitemap.
- Every lesson is structured around learning goals/outcomes, explanation, worked or guided examples, practice, a five-question quiz and a printable worksheet.
- The static audit checks canonical/meta/Open Graph consistency, language, images, internal links/anchors, sitemap coverage, accessible quiz fieldsets/labels, five answer-key mappings, same-origin scripts and JavaScript syntax.
- Latest PR #62 workflow run **#42146364198** passed. Its preview run checked all 104 sitemap pages at 320px, 390px, 768px and desktop widths; submitted 77 quizzes; checked 77 retakes; exercised 79 worksheet print actions; and checked 104 performance/resource budgets. It reported zero static-audit warnings and no horizontal overflow or third-party/CSP browser errors. **This was preview CI, not a production release.**
- The legal readiness audit passed and detected no active AdSense or analytics script tags across the 105 HTML files.

## 3. Lesson counts and current source-section coverage
| Subject / level | Lessons | Dedicated Sources / Further Reading sections | Current structural coverage |
|---|---:|---:|---:|
| Mathematics — Grade 6 | 23 | 23 | 23/23 |
| Mathematics — Grade 7 | 12 | 0 | 0/12 |
| Mathematics — Grade 8 | 11 | 3 | 3/11 |
| English — Grades 6–8 | 9 | 2 | 2/9 |
| Science — Grades 7–8 | 13 | 13 | 13/13 |
| Computer Science — Grades 6–8 | 3 | 0 | 0/3 |
| AI Literacy — Grades 6–8 | 3 | 0 | 0/3 |
| Financial Literacy — Grades 6–8 | 3 | 0 | 0/3 |
| **Total** | **77** | **41** | **41/77** |

**36 lessons remain without a dedicated learner-facing source section:** Grade 7 Maths (12), Grade 8 Maths (8), English (7), Science (0), Computer Science (3), AI Literacy (3) and Financial Literacy (3).

The 3 November source inventory recorded 7/77. That count is now stale: the subsequent Grade 6 Maths Phase 2 work added/reviewed source sections across all 23 Grade 6 lessons. The 30/77 figure above is a fresh repository recount, not a quality or ranking score. A source heading alone does not prove that every claim is supported; every link must still be checked for relevance and currency.

**6 November science batch update:** Source sections from preview PRs #45, #46, #48, #49, #50, #52, #53 and #55 have been ported to the current preview branch. Science coverage is now 13/13 and the overall structural count is 41/77.

**Second science QA update:** The remaining source gaps were filled on the preview branch through PR-derived, individually reviewed changes for Heat Transfer (#47), Elements and Compounds (#51), and Waves, Sound and Light (#54). These included terminology corrections for heat versus thermal energy, the definition of mixtures, and sound speed. The Digestive/Circulatory lesson (#52) also received a clearer protein-digestion sequence supported by OpenStax. Science now has dedicated source sections on all 13/13 lessons; overall coverage is 41/77, with 36 lesson pages still lacking a dedicated source section. These are source-heading counts, not a claim that every factual statement has been independently fact-checked. The scoped source verification is recorded in `PHASE15_SCIENCE_SOURCE_PORT_2026-11-06.md`.

## 4. Existing QA evidence — do not repeat unnecessarily
- **Grade 6 Maths:** all 23 lesson pages received a focused source-level content and answer-key review. All 115 quiz mappings were checked against visible options; all 23 pages have five quiz fieldsets, a source/further-learning section and a Continue Learning section. Worksheet answer keys and worked calculations were reviewed in the recorded Phase 2/Phase 14 work. This is not independent educator peer review.
- **English / Science Phase 13 sample:** Argument Writing, Text Structure and Author’s Purpose, Weather/Climate/Water Cycle, and Earth Resources/Sustainability/Human Impact have dedicated sources, worked examples, practice and five-question quizzes with answer feedback.
- **Grade 8 Maths sample:** Linear Equations and Inequalities, Probability Models and Compound Events, and Pythagorean Theorem and Right Triangles received a focused sample review with source links and quiz checks.
- **Computer Science / AI Literacy:** PRs #59–#62 contain preview-only improvements. Their latest recorded CI is successful, but they are still draft/unmerged. The live production pages therefore still show the older content.
- Manual screen-reader review, real print/PDF preview and independent educator review remain outstanding.

## 5. Page-by-page lesson-to-tool map
Every tool in this table is a **proposed learning aid**, not a claim that the tool already exists. Build only when it materially supports the lesson, with accessible controls, explanations, reset, edge-case tests and no paid API dependency.

| # | Subject | Level | Current lesson file | Relevant built-in tool to design | Implementation status |
|---:|---|---|---|---|---|
| 1 | Mathematics | Grade 6 | [math/grade-6/adding-subtracting-decimals.html](math/grade-6/adding-subtracting-decimals.html) | Decimal place-value calculator | Planned — not implemented |
| 2 | Mathematics | Grade 6 | [math/grade-6/adding-subtracting-fractions.html](math/grade-6/adding-subtracting-fractions.html) | Fraction visualizer + step calculator | Planned — not implemented |
| 3 | Mathematics | Grade 6 | [math/grade-6/algebraic-expressions.html](math/grade-6/algebraic-expressions.html) | Algebra step explainer | Planned — not implemented |
| 4 | Mathematics | Grade 6 | [math/grade-6/angles-and-triangles.html](math/grade-6/angles-and-triangles.html) | Geometry explorer / measurement calculator | Planned — not implemented |
| 5 | Mathematics | Grade 6 | [math/grade-6/comparing-ordering-fractions.html](math/grade-6/comparing-ordering-fractions.html) | Fraction visualizer + step calculator | Planned — not implemented |
| 6 | Mathematics | Grade 6 | [math/grade-6/data-and-graphs.html](math/grade-6/data-and-graphs.html) | Graph, statistics and probability explorer | Planned — not implemented |
| 7 | Mathematics | Grade 6 | [math/grade-6/equivalent-fractions.html](math/grade-6/equivalent-fractions.html) | Fraction visualizer + step calculator | Planned — not implemented |
| 8 | Mathematics | Grade 6 | [math/grade-6/factors-multiples-hcf-lcm.html](math/grade-6/factors-multiples-hcf-lcm.html) | Factors, HCF and LCM explorer | Planned — not implemented |
| 9 | Mathematics | Grade 6 | [math/grade-6/integers-number-line.html](math/grade-6/integers-number-line.html) | Interactive number line | Planned — not implemented |
| 10 | Mathematics | Grade 6 | [math/grade-6/introduction-to-ratios.html](math/grade-6/introduction-to-ratios.html) | Percentage / ratio / proportion helper | Planned — not implemented |
| 11 | Mathematics | Grade 6 | [math/grade-6/metric-units-and-conversions.html](math/grade-6/metric-units-and-conversions.html) | Metric unit converter | Planned — not implemented |
| 12 | Mathematics | Grade 6 | [math/grade-6/mixed-numbers-improper-fractions.html](math/grade-6/mixed-numbers-improper-fractions.html) | Fraction visualizer + step calculator | Planned — not implemented |
| 13 | Mathematics | Grade 6 | [math/grade-6/multiplying-dividing-decimals.html](math/grade-6/multiplying-dividing-decimals.html) | Decimal place-value calculator | Planned — not implemented |
| 14 | Mathematics | Grade 6 | [math/grade-6/multiplying-dividing-fractions.html](math/grade-6/multiplying-dividing-fractions.html) | Fraction visualizer + step calculator | Planned — not implemented |
| 15 | Mathematics | Grade 6 | [math/grade-6/order-of-operations.html](math/grade-6/order-of-operations.html) | Percentage / ratio / proportion helper | Planned — not implemented |
| 16 | Mathematics | Grade 6 | [math/grade-6/percentage-increase-decrease.html](math/grade-6/percentage-increase-decrease.html) | Percentage / ratio / proportion helper | Planned — not implemented |
| 17 | Mathematics | Grade 6 | [math/grade-6/perimeter-area-shapes.html](math/grade-6/perimeter-area-shapes.html) | Geometry explorer / measurement calculator | Planned — not implemented |
| 18 | Mathematics | Grade 6 | [math/grade-6/rates-and-proportions.html](math/grade-6/rates-and-proportions.html) | Percentage / ratio / proportion helper | Planned — not implemented |
| 19 | Mathematics | Grade 6 | [math/grade-6/solving-one-step-equations.html](math/grade-6/solving-one-step-equations.html) | Algebra step explainer | Planned — not implemented |
| 20 | Mathematics | Grade 6 | [math/grade-6/understanding-decimals.html](math/grade-6/understanding-decimals.html) | Decimal place-value calculator | Planned — not implemented |
| 21 | Mathematics | Grade 6 | [math/grade-6/understanding-fractions.html](math/grade-6/understanding-fractions.html) | Fraction visualizer + step calculator | Planned — not implemented |
| 22 | Mathematics | Grade 6 | [math/grade-6/understanding-percentages.html](math/grade-6/understanding-percentages.html) | Percentage / ratio / proportion helper | Planned — not implemented |
| 23 | Mathematics | Grade 6 | [math/grade-6/volume-of-3d-shapes.html](math/grade-6/volume-of-3d-shapes.html) | Geometry explorer / measurement calculator | Planned — not implemented |
| 24 | Mathematics | Grade 7 | [math/grade-7/adding-subtracting-integers.html](math/grade-7/adding-subtracting-integers.html) | Interactive number line | Planned — not implemented |
| 25 | Mathematics | Grade 7 | [math/grade-7/area-surface-area-volume.html](math/grade-7/area-surface-area-volume.html) | Geometry explorer / measurement calculator | Planned — not implemented |
| 26 | Mathematics | Grade 7 | [math/grade-7/coordinate-geometry.html](math/grade-7/coordinate-geometry.html) | Coordinate-plane plotter | Planned — not implemented |
| 27 | Mathematics | Grade 7 | [math/grade-7/equations-and-inequalities.html](math/grade-7/equations-and-inequalities.html) | Algebra step explainer | Planned — not implemented |
| 28 | Mathematics | Grade 7 | [math/grade-7/fractions-decimals-and-percentages-in-problem-solving.html](math/grade-7/fractions-decimals-and-percentages-in-problem-solving.html) | Fraction visualizer + step calculator | Planned — not implemented |
| 29 | Mathematics | Grade 7 | [math/grade-7/geometry-angles-scale-drawings.html](math/grade-7/geometry-angles-scale-drawings.html) | Geometry explorer / measurement calculator | Planned — not implemented |
| 30 | Mathematics | Grade 7 | [math/grade-7/rational-numbers-and-operations.html](math/grade-7/rational-numbers-and-operations.html) | Percentage / ratio / proportion helper | Planned — not implemented |
| 31 | Mathematics | Grade 7 | [math/grade-7/ratios-rates-proportional-relationships.html](math/grade-7/ratios-rates-proportional-relationships.html) | Percentage / ratio / proportion helper | Planned — not implemented |
| 32 | Mathematics | Grade 7 | [math/grade-7/simplifying-algebraic-expressions.html](math/grade-7/simplifying-algebraic-expressions.html) | Algebra step explainer | Planned — not implemented |
| 33 | Mathematics | Grade 7 | [math/grade-7/statistics-probability-data-interpretation.html](math/grade-7/statistics-probability-data-interpretation.html) | Graph, statistics and probability explorer | Planned — not implemented |
| 34 | Mathematics | Grade 7 | [math/grade-7/transformations-and-symmetry.html](math/grade-7/transformations-and-symmetry.html) | Geometry explorer / measurement calculator | Planned — not implemented |
| 35 | Mathematics | Grade 7 | [math/grade-7/two-step-equations.html](math/grade-7/two-step-equations.html) | Algebra step explainer | Planned — not implemented |
| 36 | Mathematics | Grade 8 | [math/grade-8/angle-relationships-and-parallel-lines.html](math/grade-8/angle-relationships-and-parallel-lines.html) | Geometry explorer / measurement calculator | Planned — not implemented |
| 37 | Mathematics | Grade 8 | [math/grade-8/exponents-powers-and-scientific-notation.html](math/grade-8/exponents-powers-and-scientific-notation.html) | Scientific notation / square-root helper | Planned — not implemented |
| 38 | Mathematics | Grade 8 | [math/grade-8/linear-equations-and-inequalities.html](math/grade-8/linear-equations-and-inequalities.html) | Algebra step explainer | Planned — not implemented |
| 39 | Mathematics | Grade 8 | [math/grade-8/linear-functions-and-graphs.html](math/grade-8/linear-functions-and-graphs.html) | General arithmetic practice tool | Planned — not implemented |
| 40 | Mathematics | Grade 8 | [math/grade-8/probability-models-and-compound-events.html](math/grade-8/probability-models-and-compound-events.html) | Graph, statistics and probability explorer | Planned — not implemented |
| 41 | Mathematics | Grade 8 | [math/grade-8/pythagorean-theorem-and-right-triangles.html](math/grade-8/pythagorean-theorem-and-right-triangles.html) | Geometry explorer / measurement calculator | Planned — not implemented |
| 42 | Mathematics | Grade 8 | [math/grade-8/scatter-plots-and-data-relationships.html](math/grade-8/scatter-plots-and-data-relationships.html) | Graph, statistics and probability explorer | Planned — not implemented |
| 43 | Mathematics | Grade 8 | [math/grade-8/square-roots-and-irrational-numbers.html](math/grade-8/square-roots-and-irrational-numbers.html) | Percentage / ratio / proportion helper | Planned — not implemented |
| 44 | Mathematics | Grade 8 | [math/grade-8/systems-of-linear-equations.html](math/grade-8/systems-of-linear-equations.html) | Algebra step explainer | Planned — not implemented |
| 45 | Mathematics | Grade 8 | [math/grade-8/transformations-congruence-and-similarity.html](math/grade-8/transformations-congruence-and-similarity.html) | Geometry explorer / measurement calculator | Planned — not implemented |
| 46 | Mathematics | Grade 8 | [math/grade-8/volume-of-cylinders-cones-and-spheres.html](math/grade-8/volume-of-cylinders-cones-and-spheres.html) | Geometry explorer / measurement calculator | Planned — not implemented |
| 47 | English | Grade 6 | [english/grade-6-8/argument-writing-claims-reasons-evidence.html](english/grade-6-8/argument-writing-claims-reasons-evidence.html) | Writing planner and evidence organiser | Planned — not implemented |
| 48 | English | Grade 6 | [english/grade-6-8/paragraph-writing-topic-sentences-supporting-details.html](english/grade-6-8/paragraph-writing-topic-sentences-supporting-details.html) | Writing planner and evidence organiser | Planned — not implemented |
| 49 | English | Grade 6 | [english/grade-6-8/parts-of-speech.html](english/grade-6-8/parts-of-speech.html) | Grammar and sentence analyser | Planned — not implemented |
| 50 | English | Grade 6 | [english/grade-6-8/punctuation-and-capitalization.html](english/grade-6-8/punctuation-and-capitalization.html) | Grammar and sentence analyser | Planned — not implemented |
| 51 | English | Grade 6 | [english/grade-6-8/reading-comprehension-main-idea-inference-evidence.html](english/grade-6-8/reading-comprehension-main-idea-inference-evidence.html) | Reading annotation and text-structure tool | Planned — not implemented |
| 52 | English | Grade 6 | [english/grade-6-8/sentence-types-and-structure.html](english/grade-6-8/sentence-types-and-structure.html) | Grammar and sentence analyser | Planned — not implemented |
| 53 | English | Grade 6 | [english/grade-6-8/text-structure-authors-purpose.html](english/grade-6-8/text-structure-authors-purpose.html) | Reading annotation and text-structure tool | Planned — not implemented |
| 54 | English | Grade 6 | [english/grade-6-8/verb-tenses-and-agreement.html](english/grade-6-8/verb-tenses-and-agreement.html) | Grammar and sentence analyser | Planned — not implemented |
| 55 | English | Grade 6 | [english/grade-6-8/vocabulary-context-clues-prefixes-suffixes-roots.html](english/grade-6-8/vocabulary-context-clues-prefixes-suffixes-roots.html) | Vocabulary flashcards | Planned — not implemented |
| 56 | Science | Grade 7 | [science/grade-7/ecosystems-and-food-chains.html](science/grade-7/ecosystems-and-food-chains.html) | Food-web and energy-flow explorer | Planned — not implemented |
| 57 | Science | Grade 7 | [science/grade-7/forces-and-motion.html](science/grade-7/forces-and-motion.html) | Forces and motion simulator | Planned — not implemented |
| 58 | Science | Grade 7 | [science/grade-7/heat-transfer-conduction-convection-radiation.html](science/grade-7/heat-transfer-conduction-convection-radiation.html) | Heat-transfer visual simulation | Planned — not implemented |
| 59 | Science | Grade 7 | [science/grade-7/introduction-to-cells.html](science/grade-7/introduction-to-cells.html) | Cell structure explorer | Planned — not implemented |
| 60 | Science | Grade 7 | [science/grade-7/mixtures-and-separation-techniques.html](science/grade-7/mixtures-and-separation-techniques.html) | Separation-method virtual lab | Planned — not implemented |
| 61 | Science | Grade 7 | [science/grade-7/states-of-matter-and-particle-model.html](science/grade-7/states-of-matter-and-particle-model.html) | Particle-model simulator | Planned — not implemented |
| 62 | Science | Grade 7 | [science/grade-7/weather-climate-water-cycle.html](science/grade-7/weather-climate-water-cycle.html) | Weather and water-cycle visualizer | Planned — not implemented |
| 63 | Science | Grade 8 | [science/grade-8/earth-moon-and-space-patterns.html](science/grade-8/earth-moon-and-space-patterns.html) | Sun–Earth–Moon orbit model | Planned — not implemented |
| 64 | Science | Grade 8 | [science/grade-8/earth-resources-sustainability-human-impact.html](science/grade-8/earth-resources-sustainability-human-impact.html) | Sustainability scenario simulator | Planned — not implemented |
| 65 | Science | Grade 8 | [science/grade-8/electric-circuits-current-voltage-resistance.html](science/grade-8/electric-circuits-current-voltage-resistance.html) | Circuit simulator | Planned — not implemented |
| 66 | Science | Grade 8 | [science/grade-8/elements-compounds-and-chemical-reactions.html](science/grade-8/elements-compounds-and-chemical-reactions.html) | Periodic table and reaction model | Planned — not implemented |
| 67 | Science | Grade 8 | [science/grade-8/human-digestive-and-circulatory-systems.html](science/grade-8/human-digestive-and-circulatory-systems.html) | Human body systems diagram | Planned — not implemented |
| 68 | Science | Grade 8 | [science/grade-8/waves-sound-and-light.html](science/grade-8/waves-sound-and-light.html) | Wave, sound and light visualizer | Planned — not implemented |
| 69 | Computer Science | Grades 6–8 | [computer-science/algorithms.html](computer-science/algorithms.html) | Algorithm and flowchart visualizer | Planned — not implemented |
| 70 | Computer Science | Grades 6–8 | [computer-science/html-css.html](computer-science/html-css.html) | HTML/CSS live preview sandbox | Planned — not implemented |
| 71 | Computer Science | Grades 6–8 | [computer-science/python-basics.html](computer-science/python-basics.html) | Safe code trace playground (not unrestricted execution) | Planned — not implemented |
| 72 | AI Literacy | Grades 6–8 | [ai-literacy/ai-safety.html](ai-literacy/ai-safety.html) | Privacy-safe scenario simulator | Planned — not implemented |
| 73 | AI Literacy | Grades 6–8 | [ai-literacy/how-ai-works.html](ai-literacy/how-ai-works.html) | AI training-data and model-pattern simulator | Planned — not implemented |
| 74 | AI Literacy | Grades 6–8 | [ai-literacy/verify-ai.html](ai-literacy/verify-ai.html) | Source-verification workspace | Planned — not implemented |
| 75 | Financial Literacy | Grades 6–8 | [financial-literacy/budgeting.html](financial-literacy/budgeting.html) | Budget planner | Planned — not implemented |
| 76 | Financial Literacy | Grades 6–8 | [financial-literacy/savings-interest.html](financial-literacy/savings-interest.html) | Savings and interest calculator | Planned — not implemented |
| 77 | Financial Literacy | Grades 6–8 | [financial-literacy/unit-prices.html](financial-literacy/unit-prices.html) | Unit-price comparison calculator | Planned — not implemented |

## 6. Cross-cutting feature gaps
1. **Fresh retakes / question bank:** current lessons use fixed five-question quizzes. Existing retake checks confirm that the quiz resets; they do not establish a larger question bank or unseen questions on every attempt. The blueprint target is a tagged bank (typically 25–40 quality questions per foundational skill where justified) with explanations and misconception tags.
2. **Standalone learning tools:** no dedicated tools directory or standalone calculator/simulation pages are present in the current sitemap. Static lesson diagrams and the homepage quick quiz are not substitutes for the planned fraction, percentage, ratio and unit-conversion tools.
3. **Progress and mastery:** a full skill-progress, diagnostic, mastery and spaced-revision system is not yet implemented. Do not claim cross-device sync or cloud accounts.
4. **Worksheets:** all 77 lesson pages expose printable worksheet material and CI exercises print handlers. Manual print layout/PDF output and the quality/completeness of every worksheet answer key still need human review.
5. **Sources:** 47 source-section gaps remain. Prioritise science factual/safety claims, AI privacy/bias, financial concepts, then Grade 7/8 Maths and English. Do not bulk-add generic references.
6. **Visual identity:** a basic open-book SVG and favicon exist, but the homepage does not currently reference the wordmark asset. The homepage uses a newer palette (`#102b3f`, `#087e80`, `#fbf8f1`) while many lesson pages retain the earlier navy/teal palette (`#173b63`, `#117454`, `#f4f7fb`). The homepage also still contains emoji-style symbols. A unified, approved design system is not yet in place.
7. **Content depth:** Grade 6 Maths has the strongest recorded review. Several CS, AI and Financial Literacy production lessons are materially shorter (roughly 528–581 extracted words) than the Maths/English/Science lessons. This is an editorial signal, not a Google word-count rule. PRs #59–#62 propose improvements to some of these pages.
8. **Human review:** no named independent educator review is currently claimed. Manual screen-reader testing and actual print/PDF inspection remain open.

## 7. Sitemap inventory
The live sitemap has 104 unique URLs:
- Home: 1
- Maths: 49 (46 lessons + 3 grade hubs)
- English: 10 (9 lessons + subject hub)
- Science: 15 (13 lessons + Grade 8 and subject hubs)
- Computer Science: 4
- AI Literacy: 4
- Financial Literacy: 4
- Curriculum: 10
- Worksheets: 2
- About, Contact, Privacy, Terms and Editorial Policy: 5

All 104 URLs map to repository files. This is a repository/sitemap consistency check; it is not proof that Google has indexed every URL or that all 104 live URLs were manually HTTP-tested during this inventory.

## 8. SEO, indexing and release guardrails
- Technical metadata, canonical/OG, internal links, sitemap and robots checks passed in the latest PR preview CI.
- Current recorded GSC snapshot: 104 tracked URLs; one known indexed and 103 unknown/not indexed at the last check; sitemap processing was still pending. Treat this as a dated historical snapshot and do not repeat inspections of unchanged URLs.
- On 6 November the hourly GSC tracker had already checked 39 distinct URLs against a daily cap of 10 (29 over); no further URL inspections were made. The owner must pause/reduce the hourly tracker in its UI before more inspection work.
- No active AdSense or analytics scripts. Do not enable tracking or advertising before the child/mixed-audience privacy, consent and policy review.
- `.github/workflows/deploy-pages.yml` deploys on pushes to `main`. Never push project changes directly to `main`.
- Pull-request workflow runs static, legal, Cloudflare preview, Playwright and axe checks. Keep all redesign work on preview branches and require explicit approval before production merge/deployment.

## 9. Repository and PR checkpoint
- Production branch: `main`, current head `eb30ff69498c122d3670e15475430f4673265846`.
- Existing strategy branch `strategy/learning-platform-redesign` is **4 commits ahead and 6 commits behind** `main`; its common base is `7b4ab3206f8bbfbfb955ad824e6bf9714074432c`. Do not continue from it as if it were current.
- A fresh working branch was created from current `main`: `preview-learnora-redesign-inventory-2026-11-06`. The redesign blueprint is being carried forward onto this branch.
- PR #57 is merged. PRs #59, #60, #61 and #62 remain draft/open/unmerged; the latest recorded CI for each is successful. PR #62 run #42146364198 passed after the 320px pseudocode overflow fix.
- No PR was merged and no production content/code change was made during this inventory.

## 10. Recommended next actions
1. Finish the page-by-page feature mapping review and confirm any exceptional lesson structures against source HTML/scripts.
2. Update the stale source-attribution audit with the 30/77 recount and the exact 47-page backlog.
3. Map the existing fractions course into a complete course → unit → skill → lesson → practice → quiz → worksheet pathway.
4. Design the first pilot: fraction visualizer/calculator, worked steps, fresh question bank, worksheet/answer key and next-skill recommendations.
5. Implement on this preview branch only; run static, legal, mobile, accessibility, quiz and print checks.
6. Present a release report and wait for explicit approval before any production merge/deployment.

---
**End of inventory.**
