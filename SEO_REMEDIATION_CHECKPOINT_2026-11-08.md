# Learnora — Sitewalk SEO remediation checkpoint
Date: 8 November 2026
Production: https://learnora-ab2.pages.dev/
Repository: https://github.com/com-orgs/learnora
Working branch: seo/sitewalk-remediation-2026-11-08
Draft PR: https://github.com/com-orgs/learnora/pull/68

## Completed
- Initial Sitewalk production audit recorded 41/100; it flagged missing structured data, title/description lengths, Twitter metadata, duplicate curriculum pages, Article schema fields and other notices.
- Created an isolated remediation branch and kept production untouched.
- Added page-specific JSON-LD and social metadata across the crawled site; latest preview crawl detected structured data on 104/104 pages with no structured-data parsing/property problems.
- Normalized titles and descriptions; latest Sitewalk report no longer lists long-title, long-description, duplicate-content, missing-Twitter-card or missing-llms.txt findings.
- Added /llms.txt (Sitewalk confirms HTTP 200, 3,332 bytes, 25 links, zero broken links).
- GitHub Site Audit workflow for the metadata batch completed successfully.
- Latest Sitewalk preview audit: 104 pages crawled; health 74/100; 140/151 checks passed; 1 error, 4 warnings, 6 notices.
- Mobile Lighthouse samples: 100/100 for homepage, Contact and Grade 7 Maths; lab LCP 815 ms, 756 ms and 758 ms respectively. No real-user field data was available for those samples.
- Updated Grade 8 Pythagorean theorem meta description to a more useful 130+ character summary (branch only).

## Preview-only findings — do not treat as production defects
- Preview homepage returns X-Robots-Tag: noindex.
- Preview pages use production canonical URLs (https://learnora-ab2.pages.dev/).
- These are expected staging safeguards; do not remove noindex or rewrite canonicals based solely on the preview audit.
- Re-audit production after changes are approved and deployed.

## Remaining Sitewalk findings to review
1. Article schema missing datePublished on three curriculum pages. Do not invent publication dates; add only when a real publication date can be established.
2. Article schema missing representative image on three curriculum pages. Use only an image genuinely representing the visible article; do not substitute the brand logo.
3. Article schema missing dateModified on three pages. Add/update only when substantive content changes are documented.
4. Organization schema missing sameAs. Add only verified official profiles; none have been supplied/verified yet.
5. Contact page is 242 words. This may be appropriate for a contact page; do not add filler merely to reach 300 words.
6. CFPB youth financial education link was unreachable to Sitewalk (not confirmed broken). Manually verify before replacing.
7. Nine URLs exceed Sitewalk's 115-character heuristic. Do not rename established URLs without redirects and traffic/link review.
8. Preview canonical mismatch and preview noindex are intentional; preserve staging safeguards.

## QA and release gates
- PR #68 remains draft/unmerged; production has not been changed by this remediation branch.
- Re-run GitHub checks after the latest Pythagorean description commit.
- Confirm Cloudflare preview reflects the latest branch commit.
- Test lesson navigation, quiz feedback, worksheets, mobile and desktop interactions.
- Validate JSON-LD using Schema Markup Validator / Rich Results Test where applicable.
- Compare preview and production headers/canonicals separately.
- Only merge/deploy after checks pass and owner approves the release.

## Next action
Review the three curriculum Article objects and verify whether real publication dates and representative article images exist in the actual content/history. Resolve only fields supported by evidence; then repeat QA and Sitewalk preview audit.


## Checkpoint update — curriculum schema consistency and meta-description correction
- Confirmed the three curriculum guide pages have no representative in-page images. Their existing Learnora logo is branding, not an article-specific representative image.
- Did not invent publication dates or modified dates; no reliable public publication history was established in the page content.
- Replaced Article JSON-LD on the three curriculum guide pages with a consistent LearningResource schema. This avoids asserting Article publication dates or a representative image that the pages do not actually provide.
- Standardized the same schema type and properties across all three pages: name, description, URL, educational level, resource type, language, free-access status and Learnora provider.
- Expanded the Grade 8 Pythagorean theorem meta description to 152 characters. Its JSON-LD description remains the shorter accurate summary; the HTML meta description is the search snippet field.
- Changes are on branch `seo/sitewalk-remediation-2026-11-08` only. Production remains untouched.
- The earlier 74/100 Sitewalk report was generated before the last Pythagorean meta-description update and schema standardization. It is a baseline for this batch, not the final post-change score.
- Next: confirm Cloudflare preview deploy has reached latest branch HEAD; run fresh Sitewalk audit and GitHub workflow; verify no unintended page-body, canonical, or quiz changes; keep PR draft until mobile/desktop and interactive QA are complete.


## Latest continuation checkpoint — 8 November 2026
- Standardized all three curriculum guides to valid, consistent LearningResource JSON-LD; verified the JSON parses and each page has exactly one schema block.
- Aligned each page's HTML meta description, Open Graph description and Twitter description. Verified exact source strings match.
- Pythagorean lesson description is now 152 characters and its Open Graph/Twitter descriptions match.
- Latest Cloudflare immutable preview deployment for commit `0bcdd51`: https://8d43781d.learnora-ab2.pages.dev/
- Retrieved all four edited pages from that exact deployment. Page titles/descriptions and canonical targets were returned; robots metadata is index,follow on the preview pages. Preview remains separate from production.
- Verified CFPB youth financial education landing page and activities page are retrievable at their original URLs; Sitewalk's earlier external-link warning was not confirmed as a broken link.
- GitHub static audit workflow passed for commit `0bcdd51`; Cloudflare Pages deployment check passed.
- Sitewalk monthly audit allowance is exhausted (tool returned a hard limit of 5 audits this month). No further crawl was started. The 74/100 score is the previous preview audit baseline, not a post-latest-change score.
- PR #68 remains open, draft and unmerged. Production `main` and `https://learnora-ab2.pages.dev/` have not been changed by this remediation branch.
- Still outstanding: real mobile/desktop interaction QA, quiz feedback and worksheet interaction checks, a new Sitewalk re-audit when allowance resets, and explicit owner release approval.
- Do not merge or deploy to production until the remaining QA gates and owner approval are complete.


## Functional QA checkpoint — 9 November 2026
### Browser QA run 1 — homepage and Grade 6 fractions
- Preview tested: https://791c3327.learnora-ab2.pages.dev/
- Homepage load and desktop layout: PASS; no visible errors or overflow.
- Seven subject filters: PASS (All, Maths, English, Science, Computer Science, AI Literacy, Financial Literacy).
- Homepage 3-question quiz: PASS; answers enabled progression, results screen and restart.
- Grade 6 Understanding Fractions page: PASS.
- Fraction explorer denominator and numerator controls: PASS; graphic and labels update.
- Quick-choice feedback: PASS.
- Five-question quiz: PASS; known correct answers returned 5/5 with per-question explanations.
- Results remained inline without jumping to page top; Retake Quiz reset selections, feedback and score.
- Worksheet and Teacher/Parent Answer Key disclosure present; print action was tested and page remained stable.
- No visible JavaScript/runtime errors.
- Mobile width around 390px: first browser run reported no obvious horizontal overflow/clipped controls.

### Browser QA run 2 — English, Science, Financial Literacy and worksheet
- English Parts of Speech: PASS; page, navigation, content sections and five-question quiz feedback.
- Science Grade 7 Introduction to Cells: PASS; page, lesson content and five-question quiz feedback.
- Financial Literacy: initial test guessed /financial-literacy/needs-wants-simple-budgets and got 404. This is NOT a broken internal link: homepage source links to the actual route /financial-literacy/budgeting, whose H1 is “Needs, Wants and Simple Budgets”; that actual route loaded and its quiz passed.
- International Middle-School Maths worksheet: PASS; all four curriculum sections render; worked-answer disclosures expand/collapse; print control present and deliberately not clicked.
- No visible JavaScript errors in tested pages.
- Full mobile viewport test on this second batch could not be completed.

### PR change-scope review
- Compared PR base 2b6a750ea46aca274f139636600500c53479f65f to branch head 37016fc8d9eecc2dcd7e2619eda00b1470a08017.
- 104 HTML files appear in the PR diff. In available diff patches, no changed HTML body content was detected; changes are in document head metadata/schema and supporting headers/docs.
- PR #68 remains draft and unmerged. Production remains unchanged.
- GitHub checks and Cloudflare Pages deployment for the earlier commit 7c9fd8b succeeded; branch head now includes a later automated status/checkpoint commit and should be checked for its own completed workflows/deployment before any further action.

### Remaining QA gates
- Run a dedicated broken-internal-link audit over all local links and ensure every homepage card destination exists.
- Complete mobile QA on representative English, Science and worksheet pages.
- Confirm latest branch-head CI/deployment, not just the prior preview commit.
- Re-audit Sitewalk when monthly audit quota resets; current latest score 74/100 is a pre-functional-QA baseline only.
- Keep PR #68 draft/unmerged and production untouched pending all checks and explicit release approval.
