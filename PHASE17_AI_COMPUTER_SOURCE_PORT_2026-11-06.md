# Phase 17 — AI Literacy and Computer Science lesson QA (6 November 2026)

## Scope
Ported the lesson-page updates from PRs #59–#62 after reviewing the content, references, canonical/OG metadata, shared quiz script references and answer mappings. Workflow-file edits from PRs #59–#61 were intentionally excluded.

## Files updated
- `ai-literacy/ai-safety.html` — PR #59
- `ai-literacy/how-ai-works.html` — PR #60
- `ai-literacy/verify-ai.html` — PR #61
- `computer-science/algorithms.html` — PR #62

## Content and source review
- AI Bias, Privacy and Safe Use: UNICEF's AI and children guidance v3.0 (2025), NIST AI RMF Section 3, and UNESCO's guidance for generative AI in education. UNICEF supports child-centred safety, privacy, fairness and accountability. NIST Section 3 supports trustworthiness characteristics and its fairness discussion of computational/statistical and human-cognitive bias. UNESCO supports a human-centred, age-appropriate approach and data-privacy safeguards. The lesson correctly avoids implying one universal age threshold or identical privacy rules across all services.
- How Artificial Intelligence Works: Google for Developers' ML introduction and Google Teachable Machine were checked. Microsoft Learn's path is intermediate and assumes basic mathematics and some Python, so it is explicitly labelled optional advanced extension reading for older learners or teachers. Teachable Machine is described as an optional hands-on tool; the lesson warns not to upload private or identifying material.
- How to Check AI Answers and Sources: Digital Inquiry Group's Teaching Lateral Reading collection and Purdue OWL's source-evaluation guidance were checked. Purdue OWL is labelled a university-level extension reference for use with teacher guidance. The lesson distinguishes supported, contradicted, partly supported and unverified claims, and correctly warns that repeated copies of one source are not independent corroboration.
- Algorithms and Flowcharts: BBC Bitesize references are GCSE Edexcel extension reading, not required Grade 6–8 material. Direct official BBC pages were blocked to automated retrieval by robots policy; their indexed page titles/content were found, but this is a limitation of the source check. Teach Computing / National Centre for Computing Education is a teacher subject-knowledge course and is labelled primarily for teachers.

## Structural and quiz checks
- Each of the four pages has exactly one H1 and five quiz fieldsets.
- Canonical and Open Graph URLs match on all four pages.
- Shared quiz script references are unchanged; no new third-party script or tracker was added.
- The shared answer-key map was checked against visible quiz options: all five mapped correct-answer texts are present on each of the four pages.
- Every external new-tab source link has `rel="noopener noreferrer"`.
- PR #62 includes a small responsive CSS rule so pseudocode `pre` blocks wrap safely on narrow screens; its canonical URL and script references are unchanged.

## Release and review limitations
- This is a source/content QA port, not an independent educator sign-off.
- Browser interaction, responsive screenshot review, keyboard/screen-reader checks and print preview still need to run against the final PR head.
- No workflow edits from PRs #59–#61 were copied.
- No production deployment, merge or indexing request.
