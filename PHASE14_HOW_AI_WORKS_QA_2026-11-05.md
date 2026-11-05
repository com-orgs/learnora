# Phase 14 — How Artificial Intelligence Works QA

**Date:** 5 November 2026 (Pakistan time)  
**Scope:** `ai-literacy/how-ai-works.html` and shared `scripts/pages/new-subject-lessons.js`.  
**Review type:** Evidence-led editorial revision on a preview branch. Not an independent educator review.

## Problems identified in the original lesson
- AI and machine learning were not clearly distinguished.
- Dataset, feature, label, training and inference concepts were under-explained.
- No explicit distinction between training examples and separate test examples.
- The lesson had no substantive worked scenario or answer explanations for its practice prompts.
- The printable worksheet had no suggested answer key.
- No dedicated source section was present.
- The recap referred to worked examples that were not actually included.

## Changes on preview branch
- Explain AI as the broader field and machine learning as one approach; explicitly avoid implying all AI systems learn from examples.
- Define datasets, features, labels, training and inference in Grade 6–8 language.
- Explain why testing on examples not used for training matters.
- Add a clearly labelled illustrative school-message-filter example and human review.
- Introduce classification, regression, clustering and generative AI with simple examples.
- Expand misconceptions, five practice explanations and a worksheet with a suggested answer key.
- Add a dedicated sources section with Google for Developers, Microsoft Learn and Google Teachable Machine.

## Primary learning references checked
- [Google for Developers — What is Machine Learning?](https://developers.google.com/machine-learning/intro-to-ml/what-is-ml): fetched successfully; explains models, data, supervised and unsupervised learning, classification, regression and generative AI. Page indicates last updated 27 January 2026.
- [Microsoft Learn — Create machine learning models](https://learn.microsoft.com/en-us/training/paths/create-machine-learn-models/): fetched successfully; introductory learning path covering data, training, evaluation, regression, classification and clustering.
- [Google Teachable Machine](https://teachablemachine.withgoogle.com/): page fetched; describes a beginner-friendly tool to train and test simple image, sound and pose models. The FAQ content itself was not fully extracted, so the homepage is cited only as an exploratory tool, not for detailed claims.

## Source-level QA
- One H1 and five quiz fieldsets.
- Existing shared quiz script was inspected; all five answer keys match the visible options. Script was not changed.
- Canonical URL matches Open Graph URL.
- Three relevant learning references present.
- Worked example, five practice explanations and worksheet answer key present.
- No invented author/reviewer, qualification or endorsement claims.
- External new-tab links use `rel="noopener noreferrer"`.

## Preview and CI status
- Draft PR #60: https://github.com/com-orgs/learnora/pull/60
- Branch: `qa-how-ai-works-content-quality`
- Preview: https://qa-how-ai-works-content-qual.learnora-ab2.pages.dev/ai-literacy/how-ai-works
- Preview homepage and updated lesson both fetched successfully.
- Static website audit, legal/pre-monetisation audit, preview URL resolution, security headers and asset checks passed in GitHub Actions run [#42054837940](https://github.com/com-orgs/learnora/actions/runs/42054837940).
- Playwright mobile/desktop/quiz browser checks completed successfully.

## Release limits
- Draft PR only; no production merge or deployment.
- No independent educator review is claimed.
- No guarantee of search ranking, AI citations or AdSense approval.
- Next: complete browser checks, then continue with `ai-literacy/verify-ai.html` and verify claims about source quality, dates, citations and uncertainty.
