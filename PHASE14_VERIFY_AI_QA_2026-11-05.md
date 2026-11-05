# Phase 14 — How to Check AI Answers and Sources QA

**Date:** 5 November 2026 (Pakistan time)  
**Scope:** `ai-literacy/verify-ai.html` and shared `scripts/pages/new-subject-lessons.js`.  
**Review type:** Evidence-led editorial revision on a preview branch. Not an independent educator review.

## Problems identified in the original lesson
- The page described checking claims but did not teach a complete repeatable workflow.
- No explanation of lateral reading or checking an unfamiliar organisation beyond its own website.
- No clear distinction between primary and secondary sources or a caution that primary sources can still need context.
- No practical worked example, detailed practice responses, worksheet answer key or dedicated sources section.
- The recap referred to worked examples that were not present.

## Changes on preview branch
- Teach learners to split a broad AI response into checkable names, dates, numbers, scope, causal and quotation claims.
- Expand source evaluation to author/organisation, purpose, audience, evidence, date, context, scope and fit to the exact claim.
- Explain primary and secondary sources without treating either category as automatically trustworthy.
- Add lateral reading: leave an unfamiliar site and check independent sources about who is behind it.
- Teach four honest evidence statuses: supported, contradicted, partly supported and unverified.
- Explain independent corroboration and why copied/repeated pages are not necessarily independent confirmation.
- Add two worked examples, five practice scenarios with suggested reasoning and a worksheet answer key.
- Add verified learning guidance from Digital Inquiry Group / Civic Online Reasoning and Purdue University OWL.

## Sources checked
- [Digital Inquiry Group / Civic Online Reasoning — Teaching Lateral Reading](https://cor.inquirygroup.org/curriculum/collections/teaching-lateral-reading/): fetched successfully; explains lateral reading and why checking what other sources say about an unfamiliar website is more useful than relying only on the site's own description.
- [Purdue University OWL — Evaluating Sources: General Guidelines](https://owl.purdue.edu/owl/research_and_citation/conducting_research/evaluating_sources_of_information/general_guidelines.html): fetched successfully; covers author, intended audience, fact/opinion, evidence, cross-checking, timeliness and references.
- A Library of Congress primary-source guidance page was also checked as a candidate but the fetch was blocked; it was not included in the lesson's references.

## Source-level QA
- One H1 and five quiz fieldsets.
- Existing shared quiz script inspected; all five correct-answer keys match visible answer options. Shared script unchanged.
- Canonical URL matches Open Graph URL.
- Two topic-relevant sources verified and included.
- Worked examples, five practice explanations and worksheet suggested answer key present.
- No invented author/reviewer, credential or endorsement claims.
- External new-tab links use `rel="noopener noreferrer"`.

## Preview / CI status
- Draft PR #61: https://github.com/com-orgs/learnora/pull/61
- Branch: `qa-verify-ai-content-quality`
- Cloudflare branch preview deployed successfully and both the preview homepage and revised lesson were fetched successfully: https://qa-verify-ai-content-quality.learnora-ab2.pages.dev/ai-literacy/verify-ai.
- GitHub Actions run #42055587328 had passed static/legal/preview header checks and was running Playwright browser checks; the updated workflow run #42055624934 was queued at the time of this update.
- No production change or deployment.

## Release limits
- Draft PR only; no production merge or deployment.
- No independent educator review is claimed.
- No guarantee of ranking, AI citations or AdSense approval.
- Next: complete preview/browser QA, then audit the remaining Computer Science and Financial Literacy lesson templates.
