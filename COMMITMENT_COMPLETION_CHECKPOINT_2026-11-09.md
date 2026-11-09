# Learnora — Commitment Completion Addendum
Date: 9 November 2026
Repository: https://github.com/com-orgs/learnora
Production: https://learnora-ab2.pages.dev/
Working branch: qa/phase14-cs-finlit-review-2026-11-09

## 1. Current PR reconciliation (fresh GitHub API read)

| PR | Current state | Draft | Base | Head branch | Current head SHA | CI evidence | Release note |
|---|---|---:|---|---|---|---|---|
| #59 | open | yes | main | qa-ai-safety-content-quality | d6cd6978aa6fe8778942f3f0fa50b955f9527a90 | Run 42052324235 success | Not mergeable; keep isolated |
| #60 | open | yes | main | qa-how-ai-works-content-quality | 66952df7c3c8e8af12537fc4fb440a1d5a4e306b | Run 42054837940 success | Not mergeable; keep isolated |
| #61 | open | yes | main | qa-verify-ai-content-quality | c5bf028a3e8b422aefe0984b5fee7b1a66a6856f | Run 42055624934 success | Not mergeable; keep isolated |
| #62 | open | yes | main | qa-algorithms-content-quality | 4bf767d92c2e1e96a78a462ce5e619f6388bb680 | Run 42146364198 success | Not mergeable; keep isolated |
| #63 | open | yes | main | preview-learnora-redesign-inventory-2026-11-06 | 31d7fb6150ed14cf15301508e8f48effffc57ee3 | Run 42208999954 success | Not mergeable; 66 changed files; large divergent branch |
| #64 | closed | no | main | qa-complete-five-lesson-improvements | ec2694bed9224c2f8a5e13da4ab3288a3d654c5f | Prior release record says CI passed | Merged |
| #65 | closed | no | main | feature/fractions-interactive-learning-lab | b852c18841aaf88b21b11420ba9fbc922d3e0acb | — | Merged |
| #66 | closed | no | main | feature/equivalent-fractions-learning-lab | 37bffb8317d0181f7a65c44a230d754b86408c36 | — | Merged |
| #67 | closed | no | main | feature/fraction-comparison-lab | cde57228a2cb1e9f1ec1425ba2ca5cedc4994e05 | — | Merged |
| #68 | open | yes | main | seo/sitewalk-remediation-2026-11-08 | 40aa783c1e28a45f71857e122a59051bb0c3f6a0 | Run 42487825482 success, BUT run head was dc23625652995985247219ff0d4c42a772b46064 | Current head has no matching successful PR workflow evidence |

Important correction: earlier 9 Nov checkpoint described #59–#62 as the open PR set and #64 as unmerged. That is stale. PRs #64–#67 are now closed/merged; #59–#63 and #68 remain open drafts.

## 2. Branch divergence and scope

- PR #68 comparison against the current default branch: diverged, 139 commits ahead and 6 behind; 109 files changed. It is currently marked mergeable by GitHub, but the branch is not current with main and the latest head has no matching successful PR workflow run.
- PR #63 comparison against current main: diverged, 116 commits ahead and 22 behind; 66 files changed. Its successful workflow run applies to the recorded head SHA only. Do not merge this broad branch as a unit.
- PRs #59–#62 each have a successful recorded workflow run, but GitHub currently reports mergeable=false. Their isolated lesson changes need reconciliation onto a current branch before any release candidate can be considered.
- PR #68 diff is predominantly page-level metadata/schema/social-card changes, _headers, optional llms.txt, and project documentation. Its PR description says lesson body content, quiz logic and worksheets were not intentionally changed. This is a description, not independent proof that every page's semantic content is unchanged.

## 3. Internal-link / orphan audit — exact capability boundary

The current scripts/audit-site.mjs was inspected directly from main.

What it DOES check:
- Scans same-origin anchor targets across every HTML file and reports broken internal links.
- Checks fragment anchors on each page.
- Checks sitemap/canonical consistency.
- Checks lesson links from selected subject/grade index pages and reports curriculum lessons not linked from those selected indexes.

What it DOES NOT do:
- It does not build an all-pages inbound-link graph.
- It does not calculate inbound-link counts for every one of the 104 sitemap pages.
- It does not detect every possible orphan page across policy, curriculum, worksheet, AI literacy, computer science and all other page types.
- The index-page check is limited to the configured Math/English/Science grade-index patterns; it is not a universal navigation graph.

Repository tree currently contains 105 HTML files including the custom 404 page; 104 are indexable/sitemap-target pages in the previously verified sitemap. A true 104-page graph therefore remains uncompleted. No claim of zero orphan pages is justified.

## 4. Crawler limitation

A new Sitewalk audit was attempted for the production domain on 9 Nov. Sitewalk rejected the request because the account reached its limit of five audits for the month. No new audit was started, no paid credits were purchased, and no alternative paid crawler was used. The Sitewalk monthly allowance must reset before a new full crawler run can be performed.

## 5. Final release decision

**HOLD — not ready for final release sign-off.**

Reasons:
1. Full 104-page inbound-link/orphan graph is not complete.
2. PR #68 latest head SHA has no matching successful CI run and is 6 commits behind current main.
3. PR #63 is a large, divergent draft branch and should not be merged as one unit.
4. PRs #59–#62 are open drafts with GitHub mergeable=false despite successful historical runs.
5. Manual screen-reader testing and actual print-preview/PDF visual checks remain open.
6. Legacy lesson source/claim review and genuine independent educator review remain open.
7. The current review did not perform a fresh production crawl; prior dated live evidence remains historical, not a new 9 Nov live recrawl.

## 6. Safe next steps

1. Wait for the Sitewalk monthly audit allowance to reset, then crawl the full production sitemap and export per-page inbound links/orphan findings.
2. Reconcile PR #59–#63 selectively; do not merge the divergent branches wholesale.
3. Rebase/reconcile PR #68 against current main, inspect its final 109-file diff, then run full CI on the exact resulting head SHA and re-audit its preview.
4. Perform manual screen-reader and browser print/PDF visual checks.
5. Prepare one consolidated release candidate and final report. Only after explicit owner approval may a PR be merged or Cloudflare production deployment be triggered.

## 7. Production / investment boundary

No merge, production edit or Cloudflare deployment was performed during this review. No paid service, subscription, crawler credit or add-on was purchased. No GSC URL Inspection action was run; the 9 Nov daily project cap remains exceeded by background tracker checks. Owner still needs to pause/reduce the hourly GSC Wizard tracker in its UI.

Production remains unchanged by this review.
