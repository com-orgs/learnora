# Phase 14 — Algorithms and Flowcharts QA

**Date:** 5 November 2026  
**Scope:** `computer-science/algorithms.html` and the existing shared quiz mapping.  
**Review type:** Editorial revision and source-level QA on a preview branch; not an independent educator review.

## Problems found
- The original page was very short and gave only brief definitions.
- No explanation of finite, unambiguous, testable steps or input/process/output decomposition.
- The examples lacked complete worked reasoning and boundary testing.
- Flowchart symbols were listed but the decision paths were not fully traced.
- No practice answer explanations, worksheet answer key or dedicated source section.

## Changes on preview branch
- Explain clear, ordered, finite and testable algorithms; identify inputs, processes and outputs; introduce decomposition.
- Add a worked pass-check algorithm that validates marks 0–100 before checking the pass threshold.
- Explain sequence, selection, count-controlled and condition-controlled iteration.
- Add a loop trace table and a step-by-step flowchart path with labelled decisions.
- Expand common mistakes and boundary-value testing.
- Add five practice tasks with suggested reasoning and a worksheet with answer key.
- Add references from BBC Bitesize and Teach Computing / National Centre for Computing Education.

## Sources checked
- [BBC Bitesize — How to follow and write algorithms](https://www.bbc.co.uk/bitesize/guides/z7kkw6f/revision/1): fetched; supports algorithm definition, decomposition, inputs/outputs and pseudocode.
- [BBC Bitesize — Flowcharts](https://www.bbc.co.uk/bitesize/guides/z7kkw6f/revision/3): fetched; supports flowchart use and symbols.
- [BBC Bitesize — Sequence, selection and iteration](https://www.bbc.co.uk/bitesize/guides/z7kkw6f/revision/6): fetched; supports the three control structures and iteration types.
- [Teach Computing / National Centre for Computing Education — Representing algorithms using flowcharts and pseudocode](https://teachcomputing.org/courses/CO420/representing-algorithms-using-flowcharts-and-pseudocode): fetched; course description confirms KS3/KS4 algorithmic thinking, flowchart and pseudocode learning.

## Source-level QA
- One H1; five quiz questions.
- Existing shared quiz mapping inspected; all five answer keys match visible answer choices. Shared JS unchanged.
- Worked examples, pseudocode, trace table, five practice answers and worksheet answer key included.
- Canonical URL matches Open Graph URL.
- Four relevant references included; new-tab external links use `rel="noopener noreferrer"`.
- No invented author/reviewer/credential or endorsement claims.

## Preview / CI
- Draft PR #62: https://github.com/com-orgs/learnora/pull/62
- Branch: `qa-algorithms-content-quality`
- Preview deployed and fetched successfully: https://qa-algorithms-content-qualit.learnora-ab2.pages.dev/computer-science/algorithms.
- GitHub Actions run [#42057241438](https://github.com/com-orgs/learnora/actions/runs/42057241438): static website audit, legal/pre-monetisation audit, preview resolution and preview headers/assets passed. Playwright mobile/desktop/quiz browser checks were still in progress at checkpoint time.

## Release limits
- Draft PR only; no merge or production deployment.
- No claim of independent educator review, ranking improvement, AI citation or AdSense approval.
- Manual screen-reader and print-preview checks remain part of broader QA.

## Next
- Confirm Playwright browser checks for PR #62.
- Continue with Python Variables/Input/Output and HTML/CSS lessons, then Financial Literacy.
- Review all pending subject lesson PRs together before production release and obtain release approval.
