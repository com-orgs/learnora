# Phase 14 — AI Bias, Privacy and Safe Use Content QA

**Date:** 5 November 2026 (Pakistan time)  
**Source page:** `ai-literacy/ai-safety.html`  
**Review type:** Evidence-led editorial update on a preview branch; source-level checks and live preview fetch. Not a legal review, independent child-safeguarding assessment or independent educator review.

## Problems identified in the original lesson
- Basic definitions were present, but the bias explanation lacked a concrete classroom scenario.
- Privacy guidance was limited to a short list of information not to share.
- The page had no dedicated primary-source section.
- Practice prompts were short and did not provide worked/suggested responses.
- The printable worksheet had no teacher/parent answer guidance.
- The recap claimed learners could revisit worked examples even though the original lesson did not contain a worked example.

## Changes proposed on preview branch
Branch: `qa-ai-safety-content-quality`  
Draft PR: https://github.com/com-orgs/learnora/pull/59  
Preview: https://qa-ai-safety-content-quality.learnora-ab2.pages.dev/ai-literacy/ai-safety

- Expanded the fairness explanation to distinguish data representation, system design, testing context and human interpretation.
- Added a fictional school reading-support scenario and a cautious investigation process; the example explicitly says a narrow sample is a warning, not proof of bias.
- Expanded privacy guidance to include identifying photos, private messages, school records, data retention and service-specific privacy terms.
- Added safe/ethical study steps, school-policy disclosure, age-rule caution and advice to seek trusted-adult support.
- Added three worked scenarios, independent practice with suggested answer features, and a five-question worksheet with a suggested answer key.
- Added a dedicated Sources and further reading section with UNICEF (2025), NIST AI RMF and UNESCO primary guidance.
- Corrected the recap so it reflects the actual learning content.

## Primary sources checked
- [UNICEF — Guidance on AI and children, Version 3.0 (2025)](https://www.unicef.org/innocenti/reports/policy-guidance-ai-children): published December 2025; covers child safety, children’s data/privacy, non-discrimination/fairness, transparency and accountability.
- [NIST — AI Risks and Trustworthiness, AI RMF Section 3](https://airc.nist.gov/airmf-resources/airmf/3-sec-characteristics/): explains trustworthy AI characteristics and systemic, computational/statistical and human-cognitive bias.
- [UNESCO — Guidance for generative AI in education and research](https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research): supports a human-centred, age-appropriate approach and privacy protection in educational use.

All three URLs were fetched successfully and the retrieved content supported the lesson topics. The guidance is presented as background, not as an endorsement of Learnora.

## Source-level QA
- One H1.
- Five visible quiz fieldsets.
- Shared quiz script contains the `ai-literacy/ai-safety` answer map; all five keys match the visible answer options.
- Canonical URL matches the Open Graph URL.
- Three topic-relevant primary references are present.
- Worksheet suggested answer key and practice answer features are present.
- No invented author, reviewer, qualification or endorsement.
- External links opened in a new tab use `rel="noopener noreferrer"`.

## Preview verification
- Cloudflare Pages preview homepage and updated AI Safety lesson both returned successfully.
- The extracted preview lesson contains the new bias scenario, privacy guidance, worked scenarios, practice responses, worksheet answer key and source section.
- GitHub Actions PR audit run [#42051906144](https://github.com/com-orgs/learnora/actions/runs/42051906144) was still in progress at the time this report was written. Static website audit and legal/pre-monetisation readiness steps had passed; preview headers/assets and browser checks were pending.

## Release status and limits
- Draft PR #59 is open and unmerged.
- No production HTML/JS changes or production deployment.
- No independent educator review or child-safeguarding expert review is claimed.
- This edit improves lesson quality and sourcing; it does not establish legal compliance for every jurisdiction or guarantee ranking, AI citations or AdSense approval.
- Next: complete CI/browser checks, then continue auditing the other short-form AI Literacy, Computer Science and Financial Literacy lessons.
