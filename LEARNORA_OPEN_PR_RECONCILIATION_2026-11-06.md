# Learnora — Open Pull Request Reconciliation
**Checked:** 6 November 2026  
**Repository:** `com-orgs/learnora`  
**Base:** current `main` at `eb30ff69498c122d3670e15475430f4673265846`

## Executive result

**Content reconciliation update:** PR #63 has since expanded beyond the initial four Grade 6 Maths pages. Its current preview branch has 77/77 lesson pages with source sections. The detailed source coverage count is in `LEARNORA_CONTENT_FEATURE_INVENTORY_2026-11-06.md`; the exact-head CI state is updated in the PR #63 row below.

GitHub currently reports **29 open pull requests**: 24 drafts and 5 non-drafts. This is more than the four PRs recorded in the previous handover. The original 28 were reconciled, and new PR #63 was checked separately for changed files, mergeability and exact-head CI.

| Exact-head CI result | PR count |
|---|---:|
| Successful latest recorded workflow | 18 |
| Failed at Cloudflare preview-URL resolution | 2 |
| No workflow run found for exact current PR head | 9 |
| **Total open PRs** | **29** |

Eleven PRs currently report `mergeable=false`. A green workflow does not mean a PR is mergeable or approved. Do not merge or close any PR as part of this reconciliation.

## 1. Current content improvements — retain and review
| PR | Scope / changed file(s) | State | Mergeable | Exact-head CI | Assessment |
|---:|---|---|---|---|---|
| #62 | Algorithms and Flowcharts — `computer-science/algorithms.html` | Draft/open | Yes | Success, run #42146364198 | Useful content deepening; preview QA passed. |
| #61 | AI answer verification — `ai-literacy/verify-ai.html` plus workflow | Draft/open | Yes | Success, #42055624934 | Useful source-literacy and practice expansion. Workflow change overlaps #59/#60. |
| #60 | How AI Works — `ai-literacy/how-ai-works.html` plus workflow | Draft/open | Yes | Success, #42054837940 | Useful content expansion; workflow change overlaps #59/#61. |
| #59 | AI Safety — `ai-literacy/ai-safety.html` plus workflow | Draft/open | Yes | Success, #42052324235 | Useful child-centred privacy/bias work; workflow change overlaps #60/#61. |
| #55 | Earth, Moon and Space — `science/grade-8/earth-moon-and-space-patterns.html` | Draft/open | Yes | Success, #42000803967 | Its source section has been selectively ported into PR #63; do not merge this branch wholesale. |
| #54 | Waves, Sound and Light — `science/grade-8/waves-sound-and-light.html` | Draft/open | Yes | Success, #41976035551 | Its source section is ported into PR #63; the sound-speed claim is already represented in the current lesson and needs no wholesale branch copy. |
| #53 | Electric Circuits — `science/grade-8/electric-circuits-current-voltage-resistance.html` | Draft/open | Yes | Success, #41975930512 | Its source section is ported into PR #63; use the current lesson version and do not merge the stale branch wholesale. |
| #52 | Digestive and Circulatory Systems — `science/grade-8/human-digestive-and-circulatory-systems.html` | Draft/open | Yes | Success, #41975835604 | Its source section is ported into PR #63; any protease wording change remains a separate content-review item. |
| #51 | Elements, Compounds and Chemical Reactions — `science/grade-8/elements-compounds-and-chemical-reactions.html` | Draft/open | Yes | Success, #41975684713 | Its source section is ported into PR #63; the current compound definition is already scientifically sound, so do not copy the stale branch wholesale. |
| #50 | States of Matter — `science/grade-7/states-of-matter-and-particle-model.html` | Draft/open | Yes | Failed, #41975567719 | Source section is ported into PR #63; this old workflow failure is not evidence of a content-audit failure. |
| #49 | Mixtures and Separation — `science/grade-7/mixtures-and-separation-techniques.html` | Draft/open | Yes | Success, #41975314111 | Covers one current science source gap. |
| #48 | Introduction to Cells — `science/grade-7/introduction-to-cells.html` | Draft/open | Yes | Success, #41971559564 | Covers one current science source gap. |
| #47 | Heat Transfer — `science/grade-7/heat-transfer-conduction-convection-radiation.html` | Draft/open | Yes | Success, #41971537938 | Its source section is ported into PR #63; the current heat/thermal-energy distinction was retained after claim-level review. |
| #46 | Forces and Motion — `science/grade-7/forces-and-motion.html` | Draft/open | Yes | Success, #41971517090 | Covers one current science source gap. |
| #45 | Ecosystems and Food Chains — `science/grade-7/ecosystems-and-food-chains.html` | Draft/open | Yes | Success, #41971498695 | Covers one current science source gap. |
| #43 | Understanding Percentages — `math/grade-6/understanding-percentages.html` | Draft/open | Yes | Success, #41971478262 | Adds a relevant OpenStax applications reference to an existing source section. |
| #42 | Order of Operations — `math/grade-6/order-of-operations.html` | Draft/open | No | Success, #41967265037 | Useful scope clarification and source addition; rebase/review before release. |
| #41 | Integers and Number Line — `math/grade-6/integers-number-line.html` | Draft/open | Yes | Success, #41967198913 | Adds an OpenStax reference to the existing source material. |
| #40 | Algebraic Expressions — `math/grade-6/algebraic-expressions.html` | Draft/open | No | Failed, #41967069950 | Corrects the definition of like terms and adds references. Failure occurred at preview-URL resolution; needs preview QA after resolver fix. |
| #16 | Financial Literacy — `budgeting.html`, `savings-interest.html`, `unit-prices.html` plus `PROJECT_STATUS.md` | Open, not draft | No | No exact-head run | All three Finance source sections are already ported into PR #63. Keep this older non-draft branch separate; do not merge it directly. |

**Coverage note (updated 6 November):** The source sections from selected Science PRs #45–#55 and Finance PR #16 have been selectively ported into PR #63. AI Literacy and Algorithms source updates from PRs #59–#62 are also included in the preview branch. Further scoped additions have closed the Grade 7/8 Maths and remaining Computer Science gaps. The current preview branch has structural source sections on all 77/77 lesson pages. These source additions do not authorize merging the older PR branches wholesale.

## 2. CI / release engineering
| PR | Changed files | State | Mergeable | Exact-head CI | Assessment |
|---:|---|---|---|---|---|
| #63 | `.github/workflows/site-audit.yml`; Grade 6–8 Maths, Science, English, Finance, AI Literacy and Computer Science lesson updates; source audits, inventory, redesign blueprint and checkpoints | Draft/open | Yes | Latest checked head `8086a02daaa7641180781e81fc966ba36529c043`: workflow #1018 / #42207970844 pending (no jobs started at last check) | Current preview branch has source sections on all 77/77 lesson pages. Includes selected content corrections and scoped source additions, plus exact-SHA Cloudflare preview resolver. This is structural source coverage, not independent educator approval. Do not claim latest CI green until run #1017 completes. No production merge/deploy without explicit approval. |
| #56 | `.github/workflows/site-audit.yml` | Draft/open | No | Success, #42002228194 | Valuable exact-commit Cloudflare check-run fallback. Rebase/port to current workflow; do not merge stale branch directly. |
| #2 | `.github/workflows/site-audit.yml`, `scripts/verify-production-sitemap.py`, `PROJECT_STATUS.md` | Open, not draft | No | No exact-head run | Candidate production sitemap/robots smoke test. The Python script is not present on current main. Review and port only if still compatible with the current workflow. |
| #6 | `.github/workflows/site-audit.yml`, `PROJECT_STATUS.md` | Open, not draft | No | No run on exact current head | Old QA-only branch. Its earlier green run tested a predecessor SHA; current main workflow and #56 are newer. Treat as superseded pending diff review. |

**Important CI finding:** PR #40 and PR #50 failed only at “Resolve the exact Cloudflare PR branch preview” because the expected Cloudflare bot comment was not found. PR #56 adds a fallback to the successful Cloudflare Pages check run for the exact PR head SHA. PRs #59–#61 each make a smaller `github.head_ref` workflow change. Consolidate these workflow edits into one reviewed fix instead of merging overlapping workflow changes independently.

## 3. Likely stale, duplicate or superseded work
| PR | Scope | State | Mergeable | Exact-head CI | Reason to avoid direct merge |
|---:|---|---|---|---|---|
| #44 | `PHASE14_EDUCATIONAL_QUALITY_AUDIT.md`, old source audit, `PROJECT_STATE.md`, `PROJECT_STATUS.md` | Draft/open | No | No exact-head run | Its 19/77 source count and 58-page backlog are historical. Current recount is 30/77 with 47 missing. Superseded by the new 6 Nov inventory/recount. |
| #27 | Grade 6 Comparing and Ordering Fractions plus `PROJECT_STATUS.md` | Open, not draft | No | No exact-head run | The current main lesson already contains the same DfE/NCETM, Khan Academy and Illustrative Mathematics references. Likely duplicate; verify full diff before closure. |
| #18 | `PROJECT_STATUS.md` only | Draft/open | No | No exact-head run | 4 Nov checkpoint is superseded by current main and the new 6 Nov checkpoint. |
| #7 | Curriculum guides, maths study-plan page, worksheet, sitemap and `PROJECT_STATUS.md` | Draft/open | No | No exact-head run | Current main already contains the maths study plan, curriculum pages and international maths worksheet through later merged release PRs #9/#10. Likely superseded. |
| #3 | Old IndexNow key, `INTERNATIONAL_SEO_ROADMAP.md`, `PROJECT_STATUS.md` | Open, not draft | No | No exact-head run | Current main already has a different deployed IndexNow verification file (`53dfa572750e069e6549b800c46f5d92.txt`) and a newer master roadmap. Do not add a second key without a deliberate rotation plan. |

## 4. Full current PR-state counts
- Open PRs: 29.
- Draft: 24.
- Not draft: 5 (#27, #16, #6, #3, #2).
- GitHub currently reports mergeable: 18; not mergeable: 11.
- Exact-head workflow: 19 success, 2 preview-resolution failures, 8 no run found (including PR #63's successful run #42193457427).
- No PR was merged or closed during this audit.

## 5. Safe consolidation plan
1. Keep all 29 open PRs untouched while inventory/review continues.
2. Rebase/port the CI preview resolver fix from #56 onto the current preview branch and test it. Consolidate the overlapping workflow edits from #59–#61.
3. Rebase the useful content patches onto the current preview branch in subject batches: Grade 6 Maths (#40–#43), Science (#45–#55), Financial Literacy (#16), AI/Computer Science (#59–#62).
4. Re-run static, legal, exact Cloudflare preview, browser, axe, quiz and print checks after consolidation.
5. Mark stale PRs for closure only after confirming their changes are fully present elsewhere and obtaining the owner's approval.
6. Do not merge to `main` or deploy without explicit user approval.

**This report is a status/reconciliation document only. No PR was merged or closed and no production files were changed.**
