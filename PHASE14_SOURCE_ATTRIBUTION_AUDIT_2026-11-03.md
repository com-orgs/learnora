# Learnora — Phase 14 Source Attribution Inventory

**Date:** 3 November 2026  
**Repository:** https://github.com/com-orgs/learnora  
**Production:** https://learnora-ab2.pages.dev/

## Scope and method

A structural inventory examined all 77 lesson HTML files in the current repository across six subject groups. The check looked for a dedicated learner-facing heading or section identifier indicating Sources, References or Further reading. The heading “How to Check AI Answers and Sources” is a lesson topic, not a reference list, and was excluded.

This is a preliminary source-section inventory only. It does not prove a lesson is inaccurate, nor does it prove that every lesson without a dedicated section has no external references anywhere in its body. It identifies where a learner-facing references section is not clearly present.

## Coverage

| Subject group | Lesson pages | Dedicated source sections | Missing section |
|---|---:|---:|---:|
| Mathematics | 46 | 3 | 43 |
| English | 9 | 2 | 7 |
| Science | 13 | 2 | 11 |
| Computer Science | 3 | 0 | 3 |
| AI Literacy | 3 | 0 | 3 |
| Financial Literacy | 3 | 0 | 3 |
| **Total** | **77** | **7** | **70** |

## Pages with a dedicated source section

- `english/grade-6-8/argument-writing-claims-reasons-evidence.html`
- `english/grade-6-8/text-structure-authors-purpose.html`
- `math/grade-8/linear-equations-and-inequalities.html`
- `math/grade-8/probability-models-and-compound-events.html`
- `math/grade-8/pythagorean-theorem-and-right-triangles.html`
- `science/grade-7/weather-climate-water-cycle.html`
- `science/grade-8/earth-resources-sustainability-human-impact.html`

## Missing dedicated source section

The remaining 70 pages are the backlog. Subject-level counts:

- Mathematics: 43
- English: 7
- Science: 11
- Computer Science: 3
- AI Literacy: 3
- Financial Literacy: 3

## Recommended review order

1. **Science (11):** validate factual claims, definitions, diagrams, safety notes and quiz keys against topic-specific primary sources (for example NASA, NOAA, USGS, EPA, NIST, NIH or equivalent public scientific institutions).
2. **Financial Literacy (3):** validate interest, savings, unit pricing, fees and consumer examples against official financial regulators or consumer-protection education resources. Keep examples currency-neutral unless a market is explicitly named.
3. **AI Literacy (3):** validate privacy, safety, bias and verification guidance against current official or research-backed AI safety and privacy guidance.
4. **Mathematics (43):** independently recompute every worked example and quiz key; use official curriculum standards for scope and reputable open educational references for explanations.
5. **English (7):** verify grammar, punctuation, comprehension and writing advice against reputable language-education or university writing resources.
6. **Computer Science (3):** verify HTML/CSS, Python and algorithm explanations against official documentation and trusted beginner education material.

## Source quality rules

- Prefer primary sources, official standards, public scientific agencies, government education resources, university writing centres and official software documentation.
- A curriculum framework supports learning scope/alignment context; it does not automatically substantiate every factual statement in a lesson.
- Every link must be checked for reachability, relevance, age suitability and currentness before publishing.
- Add citations close to the relevant claim where practical, then include a short Sources and further reading section.
- Do not invent authors, reviewers, qualifications, dates, citations or independent expert endorsement.
- Do not add generic sources solely to satisfy a checklist. If a claim cannot be reliably sourced, revise or remove it.
- This source inventory is not a legal review and does not guarantee AdSense approval.

## Completion criteria

A lesson can be marked source-reviewed only when:
1. Key factual claims and worked examples have been checked.
2. Quiz answer keys agree with the visible question and explanation.
3. At least one relevant, reliable reference is linked where an external source is appropriate.
4. All reference URLs are live and relevant.
5. The page remains accessible, mobile-friendly and free of broken links.
6. Any reviewer attribution is genuine and independently confirmed.


## Fresh complete inventory — 5 November 2026

**Scope:** All 77 lesson HTML files currently in the six subject groups. This is a fresh repository-main structural inventory, not a claim that the 77 pages are fully source-validated.

### Method

- Enumerated the Git tree recursively and selected the 77 lesson HTML files under Mathematics (46), English (9), Science (13), Computer Science (3), AI Literacy (3) and Financial Literacy (3). Subject index pages, curriculum pages, worksheets and policy pages were excluded.
- Checked for a dedicated section whose heading is Sources, References, Further Reading or Sources and Further Reading.
- Counted only external links inside that dedicated section. A general link in the navigation/body/footer does not count as a source section.
- Excluded lesson headings such as “How to Check AI Answers and Sources”; those are lesson topics, not reference lists.

### Updated coverage

| Subject group | Lesson pages | Dedicated source sections | Missing section |
|---|---:|---:|---:|
| Mathematics | 46 | 15 | 31 |
| English | 9 | 2 | 7 |
| Science | 13 | 2 | 11 |
| Computer Science | 3 | 0 | 3 |
| AI Literacy | 3 | 0 | 3 |
| Financial Literacy | 3 | 0 | 3 |
| **Total** | **77** | **19** | **58** |

The earlier 3 November snapshot (7/77) is retained above as historical evidence. The fresh count supersedes it for current planning. The increase reflects the more complete and current repository scan, not a same-day change to 12 lesson pages.

### Pages with dedicated source sections

**English (2)**
- `english/grade-6-8/argument-writing-claims-reasons-evidence.html` — 4 external links in section
- `english/grade-6-8/text-structure-authors-purpose.html` — 4 external links in section

**Mathematics (15)**
- `math/grade-6/adding-subtracting-decimals.html` — 3
- `math/grade-6/adding-subtracting-fractions.html` — 3
- `math/grade-6/comparing-ordering-fractions.html` — 3
- `math/grade-6/equivalent-fractions.html` — 3
- `math/grade-6/introduction-to-ratios.html` — 3
- `math/grade-6/mixed-numbers-improper-fractions.html` — 3
- `math/grade-6/multiplying-dividing-decimals.html` — 3
- `math/grade-6/multiplying-dividing-fractions.html` — 3
- `math/grade-6/percentage-increase-decrease.html` — 3
- `math/grade-6/understanding-decimals.html` — 3
- `math/grade-6/understanding-fractions.html` — 4
- `math/grade-6/understanding-percentages.html` — 3 on main at scan time; a fourth supplementary reference is proposed in unmerged PR #43
- `math/grade-8/linear-equations-and-inequalities.html` — 4
- `math/grade-8/probability-models-and-compound-events.html` — 4
- `math/grade-8/pythagorean-theorem-and-right-triangles.html` — 4

**Science (2)**
- `science/grade-7/weather-climate-water-cycle.html` — 4
- `science/grade-8/earth-resources-sustainability-human-impact.html` — 4

### Missing dedicated source sections — 58 pages

**AI Literacy (3)**
- `ai-literacy/ai-safety.html`
- `ai-literacy/how-ai-works.html`
- `ai-literacy/verify-ai.html`

**Computer Science (3)**
- `computer-science/algorithms.html`
- `computer-science/html-css.html`
- `computer-science/python-basics.html`

**English (7)**
- `english/grade-6-8/paragraph-writing-topic-sentences-supporting-details.html`
- `english/grade-6-8/parts-of-speech.html`
- `english/grade-6-8/punctuation-and-capitalization.html`
- `english/grade-6-8/reading-comprehension-main-idea-inference-evidence.html`
- `english/grade-6-8/sentence-types-and-structure.html`
- `english/grade-6-8/verb-tenses-and-agreement.html`
- `english/grade-6-8/vocabulary-context-clues-prefixes-suffixes-roots.html`

**Financial Literacy (3)**
- `financial-literacy/budgeting.html`
- `financial-literacy/savings-interest.html`
- `financial-literacy/unit-prices.html`

**Mathematics (31)**
- `math/grade-6/algebraic-expressions.html`
- `math/grade-6/angles-and-triangles.html`
- `math/grade-6/data-and-graphs.html`
- `math/grade-6/factors-multiples-hcf-lcm.html`
- `math/grade-6/integers-number-line.html`
- `math/grade-6/metric-units-and-conversions.html`
- `math/grade-6/order-of-operations.html`
- `math/grade-6/perimeter-area-shapes.html`
- `math/grade-6/rates-and-proportions.html`
- `math/grade-6/solving-one-step-equations.html`
- `math/grade-6/volume-of-3d-shapes.html`
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
- `math/grade-8/angle-relationships-and-parallel-lines.html`
- `math/grade-8/exponents-powers-and-scientific-notation.html`
- `math/grade-8/linear-functions-and-graphs.html`
- `math/grade-8/scatter-plots-and-data-relationships.html`
- `math/grade-8/square-roots-and-irrational-numbers.html`
- `math/grade-8/systems-of-linear-equations.html`
- `math/grade-8/transformations-congruence-and-similarity.html`
- `math/grade-8/volume-of-cylinders-cones-and-spheres.html`

**Science (11)**
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

### Important interpretation

A missing dedicated section is a citation/documentation gap, not proof that all page content is unsupported or wrong. Likewise, a page with a section is not automatically source-verified. Each reference still requires claim-level relevance, URL reachability, authority, age suitability and currentness checks. The PR #43 percentages addition is not merged and is not included in the main-branch count.

### Next execution order

1. Science: 11 pages, primary scientific sources and safety/health caveats.
2. Financial Literacy: 3 pages, official consumer-finance sources and transparent assumptions.
3. AI Literacy: 3 pages, official privacy/safety and research-backed guidance.
4. Mathematics: 31 pages, claim-level sources plus recomputation of worked examples and answer keys.
5. English: 7 pages, language/education references.
6. Computer Science: 3 pages, official language/platform documentation.

No production files were changed by this inventory. This task was a repository structure check; it did not make a fresh live crawl, test every link, validate every claim, or perform browser interaction QA.
