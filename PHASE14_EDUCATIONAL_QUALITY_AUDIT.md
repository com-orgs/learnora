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


## Grade 7 Science — Heat Transfer (5 November 2026)

- Reviewed `science/grade-7/heat-transfer-conduction-convection-radiation.html` and `scripts/pages/science-grade-7-heat-transfer-conduction-convection-radiation.js`.
- Checked all 5 practice answers, all 6 worksheet suggested answers (including the challenge) and all 5 quiz mappings against the visible choices; the reviewed answers are consistent.
- Identified a terminology improvement: the original introductory wording blurred the distinction between heat and thermal energy. Revised it to define heat as energy transferred between systems because of a temperature difference, while describing thermal energy as part of a system’s internal energy. Updated the hero summary to use the more precise “heat is transferred” wording.
- Desk-reviewed the explanations of conduction, convection, radiation, insulation, temperature and everyday examples. No other correction was required in this review.
- Added four supplementary sources: NASA STEMonstrations: Thermal Energy (Grades 5–8), NOAA The Transfer of Heat Energy, National Geographic Education Energy Transfers and Transformations (Grade 6 reading level), and U.S. Department of Energy Heat Flow.
- Preview branch: `qa/science-grade7-heat-transfer-sources-2026-11-05`. Quiz JavaScript unchanged. No production edit or deployment; browser interaction QA and independent educator review remain outstanding.
