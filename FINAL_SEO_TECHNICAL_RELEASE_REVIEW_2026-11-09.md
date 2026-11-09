# Learnora — Final SEO & Technical Release Review
Date: 9 November 2026
Repository: `com-orgs/learnora`
Review branch: `qa/phase14-cs-finlit-review-2026-11-09`
Production: https://learnora-ab2.pages.dev/

## Executive decision

**Release sign-off: HOLD / not yet granted.** The evidence reviewed shows a sound technical SEO baseline and no confirmed critical, high or medium on-page issue in the latest 25-page sample. However, the final release gate is not complete: the full 104-page inbound-link/orphan graph, fresh full workflow evidence for the exact consolidated release candidate, manual assistive-technology/print review, and final current PR-state reconciliation are still outstanding. No production merge or deployment was performed.

This is not a claim that production is broken. It is a statement that a site-wide release sign-off cannot be honestly issued while the listed checks remain incomplete.

## 1. Sitemap and crawler directives

Current `main` source inspection:
- `sitemap.xml` contains 104 `<loc>` entries.
- 104 unique URLs; 0 duplicates.
- All entries use HTTPS and the production host `learnora-ab2.pages.dev`.
- No query strings or fragments were found in sitemap URLs.
- No `lastmod` values are present. This is optional; it is not, by itself, a sitemap error.
- All listed URLs are from the production host; the sitemap includes the homepage, subject/grade hubs, learning resources, worksheets, legal/trust pages and the editorial policy.

Current `robots.txt` source:
- `User-agent: *` allows `/`.
- `OAI-SearchBot` is explicitly allowed.
- Sitemap declaration points to `https://learnora-ab2.pages.dev/sitemap.xml`.

The 9 Nov daily indexing record reports the live sitemap at 104 entries / 104 unique / 0 duplicates and the live robots response with the same allow/sitemap directives. The web-fetch utility in this review could not independently retrieve Cloudflare Pages URLs, so this review relies on the repository source plus the timestamped live-fetch evidence already recorded in `DAILY_INDEXING_LOG_2026-11-09.md`.

## 2. Indexability and Search Console

Latest recorded 9 Nov checks:
- 25/25 sampled URLs returned HTTP 200 and were indexable.
- 25/25 self-canonical; no sampled noindex or redirect issue.
- Internal links on sampled pages: 11–47.
- Latest sample findings: 0 critical, 0 high, 0 medium; 12 low observations (10 long titles, 1 long meta description, 1 missing optional structured data).
- Full 104-page inbound-link/orphan graph is not yet complete.

Search Console record:
- 104 tracked URLs; 1 indexed, 103 not indexed / unknown; 0 pending, errors or warnings in the tracker snapshot.
- Google sitemap last submitted 5 Nov 2026 and still marked pending with 0 warnings/errors.
- A pending sitemap is not evidence of a crawl or technical failure. It means Google has not yet reported completion.
- The project daily inspection cap is 10. On 9 Nov, 34 distinct tracker URLs already had a same-day background check; 0 same-day URL Inspection history rows; union 34/10, remaining 0. No further inspection action is permitted in this checkpoint.
- The GSC Wizard hourly tracker is still active and its connector has no pause/throttle control. The owner must pause or reduce it in the GSC Wizard UI before future daily inspection work.

No manual Request Indexing action was submitted in this review. The URL Inspection API is status-only and does not submit manual requests or provide a complete manual-request history.

## 3. On-page metadata and structured data

- Homepage source includes a unique title, descriptive meta description, `index,follow`, self-canonical and matching Open Graph URL/title/description.
- Latest 25-page on-page audit reported self-canonicals and indexability on every sampled page.
- Static audit script `scripts/audit-site.mjs` checks title uniqueness, description duplication, canonical duplication, Open Graph consistency, sitemap parity, language, images, internal links/anchors, lesson/index/script inventory, quiz forms and answer-key mappings, same-origin JavaScript, security sinks and JavaScript syntax.
- The current 25-page audit's 12 low findings should be reviewed in preview only. Do not make bulk title/description/schema changes without page-specific evidence and a preview test.
- Missing `lastmod` is optional and not a blocker. Do not add artificial timestamps.

## 4. Security and technical safeguards

Current `_headers` source configures:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security: max-age=31536000`
- A restrictive Permissions Policy
- Content Security Policy with same-origin scripts/connections, no objects, no framing, self-only base/form destinations and inline script attributes blocked.

The audit code scans page scripts for unsafe dynamic code / HTML injection sinks. The legal/pre-monetisation audit checks for active ad/analytics tags and expected policy disclosures. No evidence in the inspected current source suggests active AdSense or analytics code.

No Cloudflare bot, Speed Brain, Page Shield, analytics, Google Tag or other optional paid/add-on setting was changed. Preserve current crawler-compatible settings until there is a specific tested reason to change them.

## 5. Trust, legal and monetisation separation

Source files present:
- `about.html`
- `contact.html`
- `privacy-policy.html`
- `terms.html`
- `editorial-policy.html`

The editorial policy has sections for content preparation, sources/curriculum scope, reviewer transparency, corrections, quizzes/worksheets and independence/contact. It explicitly avoids claiming independent subject-expert certification where none has occurred.

AdSense is intentionally disabled. `ads.txt` is absent by design; do not add a placeholder. The legal audit requires advertising inactivity, no active AdSense/analytics tags, child/COPPA and hosting disclosures. Monetisation remains blocked until the audience/child-directed assessment, actual verified publisher ID, applicable certified CMP configuration/testing and exact account-specific ads.txt declaration are completed. These are account/legal gates, not blockers to continuing the current ad-free website.

## 6. Workflow and release-candidate evidence

- Existing 9 Nov status records PRs #59–#62 as draft/unmerged.
- PR #62 workflow run [#42146364198](https://github.com/com-orgs/learnora/actions/runs/42146364198) was inspected at job/step level in this review: static website audit, legal/pre-monetisation audit, exact Cloudflare preview resolution, preview headers/assets, Playwright/Chromium setup and mobile/desktop/quiz browser checks all completed successfully.
- The workflow run is evidence for that PR #62 commit only. It is not evidence that every open PR or the final consolidated candidate has passed the complete suite.
- No complete current-state PR metadata listing was available through the connected GitHub search results in this review; the draft/unmerged state is therefore carried forward from the latest project tracker and must be refreshed before any release decision.
- No new full consolidated main-branch workflow was triggered by this review.

## 7. Remaining release risks / exit criteria

| Risk | Status | Required evidence to close |
|---|---|---|
| Full 104-page internal inbound-link graph and orphan detection | Open | Crawl all 104 sitemap URLs; report inbound counts and true orphans |
| Current PR #59–#62 state and combined diff | Open | Refresh PR metadata, changed files, review threads and exact head SHAs |
| Fresh full QA on exact consolidated release candidate | Open | Static + legal + preview headers/assets + browser/mobile/desktop/quiz/print checks all green |
| Live post-preview/production smoke test | Open for any future release | Fetch exact deployed host and verify changed routes, canonical, robots, sitemap and assets |
| Manual screen-reader review | Open | Genuine NVDA/VoiceOver or equivalent assistive-technology pass |
| Print output visual review | Open | Inspect actual browser print preview/PDF, not only handler invocation |
| Legacy lesson source attribution / independent academic review | Open | Subject-by-subject factual review and genuine qualified educator review; do not claim peer review early |
| Google indexing / sitemap processing | Monitoring | Wait for Google processing; do not exceed project inspection cap |
| AdSense monetisation | Blocked intentionally | Audience/COPPA assessment, publisher ID, applicable CMP, verified ads.txt seller line |

## 8. Zero-investment guardrails

- Use existing GitHub, Cloudflare Pages and already-connected read-only tools.
- Do not purchase Firecrawl credits, paid SEO subscriptions, premium themes, paid plugins or Cloudflare add-ons for this review.
- Do not enable ads, analytics, tracking pixels or optional Cloudflare features.
- Do not create placeholder publisher IDs or ads.txt entries.
- Do not run extra GSC URL inspections while the daily union is over the cap.
- Any scheduled weekly GSC monitoring should be read-only sitemap/tracker reporting, avoid URL Inspection actions, and be configured only after the owner pauses/reduces the current hourly tracker and explicitly approves the schedule.

## Production safety

No production HTML, JavaScript, CSS, sitemap, robots or headers were modified. No PR was merged. No Cloudflare deployment was triggered. Production remains unchanged.
