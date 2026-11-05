# Phase 14 — Educational quality desk-audit log

**Date:** 3 November 2026  
**Scope:** Four lessons introduced in Phase 13.  
**Review type:** Editorial/technical desk audit with primary-source comparison. This is not an independent subject-expert review.

| Lesson | Sources added | Quiz feedback change | Expert review |
|---|---|---|---|
| Argument Writing: Claims, Reasons and Evidence | Common Core ELA; England English; Ontario Language; Australian Curriculum English | Correct answer text shown after incorrect or unanswered attempt | Not claimed |
| Text Structure and Author’s Purpose | Common Core ELA; England English; Ontario Language; Australian Curriculum English | Correct answer text shown after incorrect or unanswered attempt | Not claimed |
| Weather, Climate and the Water Cycle | NASA water-cycle education; NOAA weather/climate explainer; NGSS; England Science curriculum | Correct answer text shown after incorrect or unanswered attempt | Not claimed |
| Earth’s Resources, Sustainability and Human Impact | US EPA waste-management hierarchy; NGSS; England Science curriculum; Australian Curriculum Science | Correct answer text shown after incorrect or unanswered attempt | Not claimed |

## Findings and limits
- All four pages include objectives, explanations, worked examples, five-question quizzes, printable worksheets and suggested answers.
- Source links provide reference material; curriculum links do not certify formal alignment.
- Quiz scripts now store and reveal the visible correct option text for incorrect and unanswered attempts.
- Automated answer-key mapping and browser checks do not prove subject matter is error-free.
- No named reviewer has been invented or claimed. Independent review by qualified educators remains outstanding.

## Remaining backlog
- Extend explicit source sections to the remaining legacy lessons.
- Verify mathematical worked calculations and answer keys topic by topic.
- Review science claims against topic-specific primary scientific sources.
- Review English examples and explanations for ambiguity and age suitability.
- Obtain genuine subject-expert reviews before publishing named reviewer attribution.


## Additional mathematics sample — 3 November 2026

Three Grade 8 lessons were desk-checked: Pythagorean theorem and right triangles; linear equations and inequalities; probability models and compound events. Worked examples and quiz keys were compared with the displayed questions. The sampled calculations and keyed options were consistent. Official Common Core, England, Ontario and Australian mathematics framework links were added with a clear non-alignment disclaimer. The three quiz scripts now identify the correct option text when a learner answers incorrectly or leaves a question blank. This is a sample desk check, not a complete mathematics audit or independent expert review.

- Added a three-task independent-practice section with suggested responses to the Grade 8 sustainability lesson, covering resource classification, a measurable school waste plan and sustainability trade-offs.

- Added independent-practice activities and suggested responses to Argument Writing, Text Structure and Author’s Purpose, and Weather, Climate and the Water Cycle. All four Phase 13 lessons now have an explicit independent-practice section.
- Aligned the Grade 8 probability quiz's correct-answer text with the visible option and audit schema.


## Legacy quiz feedback and audit-rule remediation — 3 November 2026

- The preceding static audit emitted 165 quiz-feedback warnings across 33 legacy lessons. A review separated pages that already displayed a correct-answer label from pages that only showed a generic explanation.
- Added correct-option text and explicit incorrect-answer feedback to 19 legacy lesson scripts (95 quiz questions): three English lessons, three Grade 7 mathematics lessons, eight Grade 8 mathematics lessons, two Grade 7 science lessons and three Grade 8 science lessons.
- Fourteen other flagged lessons already had a `label` field and displayed the correct option; the static audit now recognizes that existing correct-answer label rather than producing a false warning.
- Fixed the footer audit to recognize both clean routes (`/contact`, `/privacy-policy`, `/terms`) and explicit `.html` paths, resolving 273 false-positive warnings without changing every page footer.
- Added the editorial policy link on About and Contact and included its clean URL in the sitemap.
- Verified all ten official source URLs cited by the four Phase 13 lessons were reachable at audit time. Curriculum references are context only and do not certify formal curriculum alignment.
- An earlier run [#41635673927](https://github.com/com-orgs/learnora/actions/runs/41635673927) passed static, legal and preview checks; it was superseded by the final zero-warning browser run recorded below.


## Footer and full QA closure — 3 November 2026

- Added the missing Terms link to nine curriculum/worksheet page footers identified by the audit.
- Latest branch workflow [#41636282293](https://github.com/com-orgs/learnora/actions/runs/41636282293) completed successfully on commit `94a93b1554558934a140ab109b78ad438dd71e88`.
- Final static audit: 68 sitemap lesson URLs, 92 canonical pages, 68 accessible quiz forms, 68 quiz answer-key mappings and **zero warnings**.
- Legal/pre-monetisation checks and Cloudflare preview headers, CSP, lesson assets and custom 404 checks passed.
- Browser QA passed 92 pages at 320px, 390px, 768px and desktop widths; 68 quiz submissions; 68 retakes; 70 worksheet print actions; 92 performance/resource checks; no horizontal overflow or third-party/CSP errors.
- This closes the first Phase 14 remediation batch, not the entire academic audit. Subject-by-subject content verification and genuine independent educator review remain open work.


## Production deployment verification — 3 November 2026

- PR [#12](https://github.com/com-orgs/learnora/pull/12) was squash-merged to `main` as `97640771c2700345152c359f96c369f9ed675755`.
- Cloudflare Pages check reported **Deployed successfully** for the merge commit (deployment preview `https://f267dd92.learnora-ab2.pages.dev`).
- Independently fetched the production alias `https://learnora-ab2.pages.dev`: the Editorial and Corrections Policy, About, Contact and all four Phase 13 lesson pages returned successfully with canonical URLs and `index,follow`.
- Production sitemap reports 92 URLs and includes the Editorial and Corrections Policy page.
- All four Phase 13 lessons expose their Sources and further reading and independent-practice sections; deployed sample quiz scripts for English, Maths and Science contain explicit correct-answer feedback.
- Main workflow [#41636821146](https://github.com/com-orgs/learnora/actions/runs/41636821146) passed its static and legal/pre-monetisation checks.
- The first Phase 14 remediation batch is live. Phase 14 remains in progress because the remaining legacy source attribution, complete subject-by-subject academic verification and genuine independent educator review have not been completed.

## Full sitemap on-page SEO audit — 3 November 2026

- Audited all 104 URLs from the live repository sitemap in five batches (21, 21, 21, 21 and 20 URLs) using the connected Search Console on-page auditor.
- Result: 104/104 pages fetched and indexable; 0 critical, 0 high, 18 medium and 159 low findings (177 total). The audit reported no non-indexable page.
- The 18 medium findings were all an `Organization` node missing its `logo` property in existing JSON-LD: the Grade 6–8 maths study plan; two international worksheets; international English and Science guides; four Phase 13 lessons; and nine Computer Science / AI Literacy / Financial Literacy lessons.
- Low findings mainly reflect optional structured data absence, heuristic title length (~60 characters), heuristic meta description length (~160 characters), and the Contact page's 242-word count. These are not automatically ranking penalties. Do not truncate useful copy mechanically or add irrelevant schema just to silence a tool.
- Remediation prepared on `audit/seo-ga4-safety-2026-11-03`: added a square 512×512 Learnora SVG and attached it as an `ImageObject` logo to existing `Organization` nodes in the 18 affected pages. This does not alter visible content or external script behaviour. Verify the new logo URL and rerun the 18-page on-page audit after production deployment.
- The complete sitemap audit is recorded in `ONPAGE_SEO_AUDIT_2026-11-03.md`.
- This technical audit does not replace Phase 14's academic review. Subject-expert accuracy review, legacy lesson source attribution and independent educator review remain outstanding.

## Post-deployment SEO metadata verification — 3 November 2026

- PR #15 merged to production as `4360fc43b47b5d7a0d7d13b5387e5e58320cb276`; Cloudflare Pages deployment succeeded.
- All 18 pages previously flagged for missing Organization logos were retested: 18/18 indexable, 0 medium findings, 23 low findings.
- Full post-deployment on-page audit was rerun across all 104 sitemap URLs: 104/104 indexable, 0 critical, 0 high, 0 medium and 159 low findings.
- The first medium-severity metadata remediation batch is closed. Remaining low findings are optional structured data, title/meta-length heuristics and minor content recommendations; do not make mechanical edits solely to clear heuristic warnings.
- Academic review remains open: full subject-by-subject accuracy verification, legacy source attribution and independent educator review are not completed.

## Legacy lesson source-section inventory — 3 November 2026

- A repository-wide inventory examined all 77 lesson HTML files across Maths (46), English (9), Science (13), Computer Science (3), AI Literacy (3) and Financial Literacy (3).
- Seven pages have a dedicated Sources/References/Further reading list: two English lessons, three Grade 8 Maths lessons and two Science lessons. The lesson section titled “How to Check AI Answers and Sources” is a teaching topic, not a references list, and was not counted as a source list.
- Seventy lessons do not currently show a dedicated source/reference section in the HTML: Maths 43, English 7, Science 11, Computer Science 3, AI Literacy 3 and Financial Literacy 3.
- This is a preliminary structural inventory, not a finding that all 70 lessons are factually wrong or contain no useful external references. It checks for an explicit, learner-facing source section and must be followed by page-by-page claim verification.
- Backlog recorded in `PHASE14_SOURCE_ATTRIBUTION_AUDIT_2026-11-03.md`. Add topic-specific official or reputable educational sources only after checking that each URL is live and genuinely supports the lesson. Do not bulk-add generic curriculum links as if they substantiate every factual claim.
- Prioritise Science, Financial Literacy and AI Literacy safety/privacy claims; then verify Maths worked examples and answer keys; then English language and writing guidance. Independent educator review remains required and must not be invented.


## Additional Grade 6 and Grade 7 source QA batch — 5 November 2026

### Grade 6 mathematics
- **Algebraic Expressions (PR #40):** checked the lesson, practice and worksheet answers and five quiz mappings; clarified like terms as terms with matching variable parts and exponents (constants are like terms); added two relevant OpenStax Prealgebra 2e references. Draft only; no merge/deployment.
- **Integers and the Number Line (PR #41):** checked worked comparisons, practice and worksheet answers and five quiz mappings; added a relevant OpenStax Prealgebra 2e reference. Draft only; no merge/deployment.
- **Order of Operations (PR #42):** checked eight practice answers, eight worksheet answers and five quiz mappings; clarified that exponents/indices are outside this introductory page’s stated scope; added OpenStax Prealgebra 2e Section 2.1. Draft only; no merge/deployment.
- **Understanding Percentages (PR #43):** checked seven practice answers, seven worksheet answer-key items and five quiz mappings; added OpenStax Prealgebra 2e Section 6.2 as an extra application reference. This page already had a dedicated source section; the addition does not reduce the missing-section count. Draft only; no merge/deployment.

### Grade 7 Science
- **Ecosystems and Food Chains (PR #45):** checked six practice answers, six worksheet answer-key items and five quiz mappings; added NGSS MS-LS2-3, National Park Service “Spinning a Food Web” (Grades 6–8) and National Geographic Education “Food Chain”.
- **Forces and Motion (PR #46):** recomputed three worked examples and six practice/worksheet answers and checked five quiz mappings; added NGSS Middle School Forces and Interactions, NASA Mass vs. Weight Activities (Grades 5–8), NASA STEMonstrations: Friction (Grades 5–8) and Khan Academy Describing Motion.
- **Heat Transfer (PR #47):** checked five practice answers, six worksheet answers and five quiz mappings; clarified heat as energy transferred due to a temperature difference versus thermal energy as part of a system’s internal energy; added NASA STEMonstrations: Thermal Energy, NOAA heat-transfer resource, National Geographic Education Grade 6 reading-level resource and U.S. Department of Energy Heat Flow.
- **Introduction to Cells (PR #48):** checked seven practice answers, seven worksheet answer-key items and five quiz mappings; reviewed cell theory, organelle functions, plant/animal comparisons, specialised-cell adaptations and microscope guidance; added Khan Academy Cell Theory, Khan Academy Plant vs. Animal Cells Review and OpenStax Biology Section 4.1.

### Limits and release gate
- These are repository-based editorial desk checks, not independent educator reviews or exhaustive scientific certification.
- Quiz scripts were unchanged in the four Grade 7 Science source PRs. No production files were changed and no production deployment was performed by these PRs.
- All PRs #40–#43 and #45–#48 remain separate draft proposals unless their live GitHub status says otherwise. Browser interaction QA and genuine independent educator review remain release gates.

 
## Grade 7 Science — Mixtures and Separation Techniques QA (5 Nov 2026)

- Reviewed `science/grade-7/mixtures-and-separation-techniques.html` and `scripts/pages/science-grade-7-mixtures-and-separation-techniques.js`.
- Checked all 5 independent-practice answers, all 6 worksheet suggested answers (including the iron/sand/salt separation challenge), and all 5 quiz answer mappings against the visible questions/options. All reviewed answers and mappings are consistent; quiz JavaScript required no change.
- Desk-reviewed definitions and explanations for pure substances, mixtures, solutions, solutes/solvents, solubility, sieving, filtration, evaporation, crystallisation, simple distillation, chromatography and magnetic separation. No factual correction was identified in the reviewed content.
- Added a dedicated Sources and Further Reading section with four relevant Royal Society of Chemistry education resources covering separation principles, mixtures, distillation and supervised practical separation activities. Added explicit adult-supervision/laboratory safety guidance for heating and distillation.
- Draft PR #49: https://github.com/com-orgs/learnora/pull/49 on `qa/science-grade7-mixtures-separation-sources-2026-11-05`. PR changed only the lesson HTML; quiz JS unchanged. The PR was created as draft. CI/Cloudflare preview had not yet appeared at checkpoint time.
- This is a repository-based editorial desk review, not independent educator review, live browser interaction QA or exhaustive scientific certification. No merge, production edit/deployment, or GSC indexing request was made.
- Next: continue Grade 7 Science with `states-of-matter-and-particle-model.html`, then remaining Science lessons; keep changes preview-only and update this consolidated audit branch only for tracker changes.

- Follow-up verification: Cloudflare Pages check for commit `978fc083c52fc3abac095de956e20a67bd80051f` completed successfully. Preview URL: https://4e4d2fcc.learnora-ab2.pages.dev/science/grade-7/mixtures-and-separation-techniques ; branch preview: https://qa-science-grade7-mixtures-s.learnora-ab2.pages.dev/science/grade-7/mixtures-and-separation-techniques . This confirms preview deployment only; interactive browser QA was not performed.

 
## Grade 7 Science — States of Matter and Particle Model QA (5 Nov 2026)

- Reviewed `science/grade-7/states-of-matter-and-particle-model.html` and `scripts/pages/science-grade-7-states-of-matter-and-particle-model.js`.
- Checked all 5 independent-practice answers, all 6 worksheet suggested answers (including the cool-day evaporation challenge), and all 5 quiz answer mappings against visible questions/options. All reviewed answers and mappings are consistent; quiz JavaScript required no change.
- Desk-reviewed the particle model, particle arrangement and movement in solids/liquids/gases, shape/volume/compressibility, heating and cooling, melting, freezing, evaporation, boiling, condensation and physical changes. The constant-temperature explanation during phase changes is appropriately qualified for a pure substance at constant pressure.
- Added age-appropriate RSC resources for particle theory, particle models and states of matter (11–14 years), plus an optional, clearly labelled advanced OpenStax phase-transitions reference.
- Draft PR #50: https://github.com/com-orgs/learnora/pull/50 on `qa/science-grade7-states-matter-sources-2026-11-05`. Only lesson HTML changed; quiz JS unchanged. Cloudflare preview deployment completed successfully for commit `6c88edc4df2d4acfe5c688cb450407e4b23f4555`; preview URL: https://ddb72f71.learnora-ab2.pages.dev/science/grade-7/states-of-matter-and-particle-model . This is preview only; interactive browser QA not performed.
- This remains a repository-based desk review, not independent educator review or exhaustive scientific certification. No production merge/deployment or GSC indexing request was made.

 
## Grade 8 Science — Elements, Compounds and Chemical Reactions QA (5 Nov 2026)

- Reviewed `science/grade-8/elements-compounds-and-chemical-reactions.html` and `scripts/pages/science-grade-8-elements-compounds-and-chemical-reactions.js`.
- Checked the worked mass example (12 g carbon + 32 g oxygen = 44 g product mass in a closed system), five practice prompts for conceptual alignment, all five worksheet suggested-answer features, and all five quiz answer mappings. The calculation and answer mappings are consistent; quiz JavaScript required no change. The practice section has no separate suggested-answer block, so none was invented.
- Desk-reviewed element/compound/mixture definitions, atoms rearranging in reactions, possible evidence of chemical change, rusting, physical vs chemical changes, and conservation of mass in a closed system.
- Clarified the mixture definition: components are physically combined and a mixture may contain elements, compounds or both. Added RSC resources for ages 11–14 and the official England science programme of study, with an explicit statement that Learnora does not claim formal curriculum accreditation.
- Draft PR #51: https://github.com/com-orgs/learnora/pull/51 on `qa/science-grade8-elements-compounds-sources-2026-11-05`. Only the lesson HTML changed; quiz JS unchanged. Cloudflare Pages and repository audit checks were still in progress at checkpoint time; no preview URL claimed.
- This is a repository-based editorial desk review, not independent educator review or exhaustive chemistry certification. No merge, production deployment or GSC indexing request was made.

- Follow-up deployment verification: Cloudflare Pages completed successfully for PR #51 commit `c601c8bb74eb3b7c00803b4e0ccfd71dfbe7252a`. Preview URL: https://3e54180e.learnora-ab2.pages.dev/science/grade-8/elements-compounds-and-chemical-reactions ; branch preview: https://qa-science-grade8-elements-c.learnora-ab2.pages.dev/science/grade-8/elements-compounds-and-chemical-reactions . The separate repository audit check was still in progress; this is preview deployment only, not browser interaction QA or production deployment.

 
## Grade 8 Science — Human Digestive and Circulatory Systems QA (5 Nov 2026)

- Reviewed `science/grade-8/human-digestive-and-circulatory-systems.html` and `scripts/pages/science-grade-8-human-digestive-and-circulatory-systems.js`.
- Desk-reviewed digestive organs, mechanical and chemical digestion, amylase/proteases/lipase, bile and emulsification, villi and nutrient absorption, lacteals, heart chambers and pulmonary/systemic circuits, arteries/veins/capillaries, blood components and the relationship between digestion and circulation.
- Checked all four worked examples, five independent-practice prompts for conceptual alignment, all six worksheet suggested-answer features and all five quiz answer mappings. All reviewed answer features and quiz mappings are consistent; the practice section has no separate answer block. No quiz JavaScript change required.
- Improved the protease table to distinguish proteases that form shorter peptides from enzymes that further break peptides into amino acids.
- Added official NIDDK digestive-system and NHLBI heart/blood-flow references, plus an optional advanced OpenStax heart-anatomy reference.
- Draft PR #52: https://github.com/com-orgs/learnora/pull/52 on `qa/science-grade8-digestive-circulatory-sources-2026-11-05`. Only lesson HTML changed. Cloudflare Pages and repository audit checks were still in progress at checkpoint time; no preview URL claimed.
- This is a repository-based editorial desk review, not independent educator review or medical advice. No merge, production deployment or GSC indexing request was made.

 
## Grade 8 Science — Electric Circuits, Current, Voltage and Resistance QA (5 Nov 2026)

- Reviewed `science/grade-8/electric-circuits-current-voltage-resistance.html` and `scripts/pages/science-grade-8-electric-circuits-current-voltage-resistance.js`.
- Recalculated all six worked examples and all numerical practice/worksheet answers: 12 C / 4 s = 3 A; 6 V × 2 C = 12 J; 6 V / 3 Ω = 2 A; 2 Ω + 4 Ω = 6 Ω; 15 C / 5 s = 3 A; 12 V / 4 Ω = 3 A; 20 C / 4 s = 5 A; 10 V / 5 Ω = 2 A.
- Checked five independent-practice prompts, six worksheet suggested-answer features and all five quiz mappings; all reviewed calculations and mappings are consistent.
- Desk-reviewed circuit completeness, current, potential difference, resistance, Ohm's law conditions, series/parallel behaviour, ammeter/voltmeter connections and low-voltage safety. No factual correction was needed.
- Added the official England KS3 science programme, PhET's free Circuit Construction Kit: DC Virtual Lab, and OpenStax ammeter/voltmeter guidance.
- Draft PR #53: https://github.com/com-orgs/learnora/pull/53 on `qa/science-grade8-electric-circuits-sources-2026-11-05`. Only lesson HTML changed; quiz JS unchanged. Cloudflare Pages and repository audit checks were still in progress at checkpoint time; no preview URL claimed.
- This is a repository-based desk review, not independent educator review or live browser interaction QA. No merge, production deployment or GSC indexing request was made.
