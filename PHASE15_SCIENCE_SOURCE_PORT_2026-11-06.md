# Phase 15 — Science source-section port (6 November 2026)

## Scope
Ported only learner-facing source sections from existing science PRs #45, #46, #48, #53 and #55 into the current preview branch. No full PR file was copied. No lesson explanations, worked examples, quiz scripts, answer keys, metadata, canonical URLs or production files were intentionally changed.

## Files updated
- `science/grade-7/ecosystems-and-food-chains.html` — PR #45
- `science/grade-7/forces-and-motion.html` — PR #46
- `science/grade-7/introduction-to-cells.html` — PR #48
- `science/grade-8/electric-circuits-current-voltage-resistance.html` — PR #53
- `science/grade-8/earth-moon-and-space-patterns.html` — PR #55

## Source review
- Ecosystems: NGSS MS-LS2-3, U.S. National Park Service food-web lesson and National Geographic Education food-chain article. Opened the NGSS, NPS and National Geographic pages; their scope supports food webs, energy/matter transfer, producers, consumers and decomposers. NGSS is described as supplementary scope context only, not a Learnora curriculum alignment.
- Forces and motion: NASA Grades 5–8 Mass vs. Weight activities and NASA STEMonstrations: Friction were opened and verified. Khan Academy Describing Motion was found in search results and its summary supports distance/time average speed and the distinction between speed and velocity; direct page fetch was inconclusive. NGSS remains supplementary scope context only.
- Cells: Khan Academy Cell Theory was opened; OpenStax Biology 4.1 and Biology 2e 4.3 were verified through search results. The PR's Plant vs. Animal Cells Khan Academy URL was replaced with OpenStax Biology 2e §4.3 because the Khan URL resolves into a Pakistan National Curriculum Grade 6 course path, which was a less suitable global-first reference. OpenStax §4.3 directly covers plant/animal cell comparisons and organelle functions.
- Electric circuits: GOV.UK England science programme, official PhET Circuit Construction Kit: DC and OpenStax College Physics 2e §21.4 were checked. OpenStax is explicitly labelled optional extension reading. The learner-facing safety note says to use approved low-voltage classroom equipment and never household mains electricity.
- Earth, Moon and space: NASA Space Place pages on seasons, Moon phases and eclipses, NASA eclipse-viewing safety, NASA JPL Moon Phases lesson and NASA Grades 5–8 Sun–Earth–Moon activity guide were checked. The 27.3-day orbital period is distinguished from the approximately 29.5-day phase cycle; solar viewing safety is retained.

## Scope and limitations
- This batch is source-section coverage work, not a fresh educator review of every scientific claim or calculation on these five pages.
- PR descriptions record earlier desk QA for examples, practice, worksheet guidance and quiz answer mappings; this port does not claim independent educator approval.
- Direct page retrieval of Khan Academy Describing Motion was inconclusive; the page was identified through search and the source is retained as a supplementary reference. Recheck if it becomes unavailable.
- No design, wording, diagrams, screenshots, question banks or code were copied from benchmark platforms.
- Browser interaction, screen-reader and print-preview QA remain separate release gates.

## Release safety
- Preview branch only: `preview-learnora-redesign-inventory-2026-11-06`.
- PR #63 remains draft and unmerged.
- No production deployment, production content change or GSC indexing request was performed.
