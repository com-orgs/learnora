# Learnora Daily Indexing & Discovery Log — 8 November 2026

Run snapshot: 8 November 2026 (Pakistan calendar date, Asia/Karachi). Daily GSC project cap: 10 distinct URLs across tracker `lastCheckAt` and URL Inspection `requested_at`.

## Repository, production and source-of-truth review

- Repository: https://github.com/com-orgs/learnora
- Latest main commit at review: `4625c15dbe7f26fd4c5ba217f9960d21eda56b10` — “Improve five lessons with worked examples and answer guides”; commit time `2026-11-07T06:49:48Z` (11:49:48 PKT).
- Production baseline: `66d163cd9f2c4d96e65a49bcc373725c0a9fa3f1`. Compare baseline → main: 41 commits ahead; 19 files changed. Five production lesson HTML files changed: `computer-science/html-css.html`, `computer-science/python-basics.html`, `financial-literacy/budgeting.html`, `financial-literacy/savings-interest.html`, `financial-literacy/unit-prices.html`. Other changes are documentation/QA. Live production fetch confirms all five updated pages are already live.
- Read current `PROJECT_STATUS.md` (blob `4d0752ac9ed3b3a4cc7fa508944704016aa3dfc8`) and `LEARNORA_MASTER_ROADMAP_2026-11-04.md` (blob `26f3c827da4f278d869017f8094bbc4775c4f9be`) before this run. Prior checkpoint in both files was dated 6 Nov; this log supersedes it.
- No production code, sitemap, robots, canonical or metadata was changed by this daily routine.

## Live production sitemap and robots

- Live sitemap fetch: Sitemap (104 URLs); 104 unique URLs; 0 duplicate entries; 0 fetch errors.
- Sitemap URL: https://learnora-ab2.pages.dev/sitemap.xml
- Exact sitemap URL inventory is represented by the 99 unchanged URLs skipped below plus the five materially changed URLs notified today; total 104/104.
- robots.txt fetch succeeded with no errors. Current content:
```text
User-agent: *
Allow: /

# Allow ChatGPT Search to discover and cite public Learnora pages.
User-agent: OAI-SearchBot
Allow: /

Sitemap: https://learnora-ab2.pages.dev/sitemap.xml
```
- No robots.txt disallow was found. OAI-SearchBot is explicitly allowed.
- Sitemap has no duplicate URL entries. The sitemap is readable by the fetch service; GSC still reports its submitted sitemap as pending, 0 warnings, 0 errors.

## Google Search Console — strict daily inspection guard

- Property: https://learnora-ab2.pages.dev/
- Tracker read: 104/104 rows (all pages); status counts: {"not_indexed":103,"indexed":1}; active=undefined; latest check timestamp: 2026-11-08T03:46:56.434+00:00 UTC (2026-11-08 08:46:56.434 PKT).
- Full URL Inspection history read: 77 rows; pagination hasMore=false; unique URL keys=42; repeated URL keys=19; extra historical repeat rows=35.
- Pakistan-date 8 Nov tracker rows: 39 distinct URLs.
- Pakistan-date 8 Nov URL Inspection history rows: 0; distinct URLs=0; same-day repeated inspection URLs=0.
- Daily union: 39/10; overrun=29; remaining allowance=0.
- No new inspection calls were made by this run: `inspect_url=0`, `bulk_inspect_urls=0`, `check_tracked_url_now=0`. All same-day tracker records below were background activity; this automation added no inspection rows.
- Google platform quota snapshot: 16/2000 used; 1984 platform inspections remain. The project cap of 10 is stricter and already exceeded; platform quota does not authorize more checks.
- Tracker is active. Connected GSC Wizard tools expose no pause/throttle control for the hourly background checks. Do not run any more GSC checks on 8 Nov. Owner must pause/reduce the hourly tracker in its UI.
- Exact distinct URLs whose latest tracker `lastCheckAt` falls on 8 Nov Pakistan date (UTC and PKT):
1. https://learnora-ab2.pages.dev/computer-science/
   - lastCheckAt: 2026-11-08T03:46:56.434+00:00 UTC; 2026-11-08 08:46:56.434 PKT; status=not_indexed; checkCount=5
2. https://learnora-ab2.pages.dev/english/grade-6-8/argument-writing-claims-reasons-evidence
   - lastCheckAt: 2026-11-08T03:44:25.693+00:00 UTC; 2026-11-08 08:44:25.693 PKT; status=not_indexed; checkCount=5
3. https://learnora-ab2.pages.dev/curriculum/uk-maths-curriculum
   - lastCheckAt: 2026-11-07T19:44:06.12+00:00 UTC; 2026-11-08 00:44:06.120 PKT; status=not_indexed; checkCount=6
4. https://learnora-ab2.pages.dev/curriculum/us-common-core-math
   - lastCheckAt: 2026-11-08T00:14:24.657+00:00 UTC; 2026-11-08 05:14:24.657 PKT; status=not_indexed; checkCount=6
5. https://learnora-ab2.pages.dev/curriculum/
   - lastCheckAt: 2026-11-07T19:28:20.116+00:00 UTC; 2026-11-08 00:28:20.116 PKT; status=not_indexed; checkCount=6
6. https://learnora-ab2.pages.dev/terms
   - lastCheckAt: 2026-11-07T23:23:53.809+00:00 UTC; 2026-11-08 04:23:53.809 PKT; status=not_indexed; checkCount=6
7. https://learnora-ab2.pages.dev/math/grade-6/perimeter-area-shapes
   - lastCheckAt: 2026-11-08T03:29:55.448+00:00 UTC; 2026-11-08 08:29:55.448 PKT; status=not_indexed; checkCount=6
8. https://learnora-ab2.pages.dev/math/grade-7/area-surface-area-volume
   - lastCheckAt: 2026-11-07T22:54:22.877+00:00 UTC; 2026-11-08 03:54:22.877 PKT; status=not_indexed; checkCount=6
9. https://learnora-ab2.pages.dev/math/grade-6/equivalent-fractions
   - lastCheckAt: 2026-11-08T00:26:32.963+00:00 UTC; 2026-11-08 05:26:32.963 PKT; status=not_indexed; checkCount=6
10. https://learnora-ab2.pages.dev/math/grade-7/two-step-equations
   - lastCheckAt: 2026-11-07T19:48:12.987+00:00 UTC; 2026-11-08 00:48:12.987 PKT; status=not_indexed; checkCount=6
11. https://learnora-ab2.pages.dev/math/grade-7/equations-and-inequalities
   - lastCheckAt: 2026-11-07T22:57:16.432+00:00 UTC; 2026-11-08 03:57:16.432 PKT; status=not_indexed; checkCount=6
12. https://learnora-ab2.pages.dev/math/grade-6/adding-subtracting-fractions
   - lastCheckAt: 2026-11-08T00:47:25.631+00:00 UTC; 2026-11-08 05:47:25.631 PKT; status=not_indexed; checkCount=6
13. https://learnora-ab2.pages.dev/privacy-policy
   - lastCheckAt: 2026-11-07T23:06:12.719+00:00 UTC; 2026-11-08 04:06:12.719 PKT; status=not_indexed; checkCount=6
14. https://learnora-ab2.pages.dev/english/grade-6-8/parts-of-speech
   - lastCheckAt: 2026-11-07T19:32:22.405+00:00 UTC; 2026-11-08 00:32:22.405 PKT; status=not_indexed; checkCount=6
15. https://learnora-ab2.pages.dev/math/grade-7/adding-subtracting-integers
   - lastCheckAt: 2026-11-07T20:53:09.236+00:00 UTC; 2026-11-08 01:53:09.236 PKT; status=not_indexed; checkCount=6
16. https://learnora-ab2.pages.dev/math/grade-6/multiplying-dividing-decimals
   - lastCheckAt: 2026-11-08T03:21:39.754+00:00 UTC; 2026-11-08 08:21:39.754 PKT; status=not_indexed; checkCount=6
17. https://learnora-ab2.pages.dev/math/grade-6/introduction-to-ratios
   - lastCheckAt: 2026-11-08T00:53:08.614+00:00 UTC; 2026-11-08 05:53:08.614 PKT; status=not_indexed; checkCount=6
18. https://learnora-ab2.pages.dev/math/grade-6/metric-units-and-conversions
   - lastCheckAt: 2026-11-08T03:42:10.989+00:00 UTC; 2026-11-08 08:42:10.989 PKT; status=not_indexed; checkCount=6
19. https://learnora-ab2.pages.dev/math/grade-6/percentage-increase-decrease
   - lastCheckAt: 2026-11-08T02:46:37.446+00:00 UTC; 2026-11-08 07:46:37.446 PKT; status=not_indexed; checkCount=6
20. https://learnora-ab2.pages.dev/math/grade-7/rational-numbers-and-operations
   - lastCheckAt: 2026-11-07T21:35:41.052+00:00 UTC; 2026-11-08 02:35:41.052 PKT; status=not_indexed; checkCount=6
21. https://learnora-ab2.pages.dev/math/grade-6/comparing-ordering-fractions
   - lastCheckAt: 2026-11-08T00:11:15.931+00:00 UTC; 2026-11-08 05:11:15.931 PKT; status=not_indexed; checkCount=6
22. https://learnora-ab2.pages.dev/math/grade-6/understanding-decimals
   - lastCheckAt: 2026-11-08T01:38:51.608+00:00 UTC; 2026-11-08 06:38:51.608 PKT; status=not_indexed; checkCount=6
23. https://learnora-ab2.pages.dev/math/grade-6/understanding-fractions
   - lastCheckAt: 2026-11-07T19:30:51.575+00:00 UTC; 2026-11-08 00:30:51.575 PKT; status=not_indexed; checkCount=6
24. https://learnora-ab2.pages.dev/math/grade-6/understanding-percentages
   - lastCheckAt: 2026-11-08T03:17:23.57+00:00 UTC; 2026-11-08 08:17:23.570 PKT; status=not_indexed; checkCount=6
25. https://learnora-ab2.pages.dev/science/grade-8/waves-sound-and-light
   - lastCheckAt: 2026-11-07T19:07:27.93+00:00 UTC; 2026-11-08 00:07:27.930 PKT; status=not_indexed; checkCount=5
26. https://learnora-ab2.pages.dev/math/grade-6/multiplying-dividing-fractions
   - lastCheckAt: 2026-11-08T01:02:03.907+00:00 UTC; 2026-11-08 06:02:03.907 PKT; status=not_indexed; checkCount=6
27. https://learnora-ab2.pages.dev/math/grade-6/adding-subtracting-decimals
   - lastCheckAt: 2026-11-08T02:37:07.341+00:00 UTC; 2026-11-08 07:37:07.341 PKT; status=not_indexed; checkCount=6
28. https://learnora-ab2.pages.dev/math/grade-6/mixed-numbers-improper-fractions
   - lastCheckAt: 2026-11-08T01:40:05.048+00:00 UTC; 2026-11-08 06:40:05.048 PKT; status=not_indexed; checkCount=6
29. https://learnora-ab2.pages.dev/science/grade-7/introduction-to-cells
   - lastCheckAt: 2026-11-07T19:20:51.494+00:00 UTC; 2026-11-08 00:20:51.494 PKT; status=not_indexed; checkCount=6
30. https://learnora-ab2.pages.dev/about
   - lastCheckAt: 2026-11-07T23:12:07.277+00:00 UTC; 2026-11-08 04:12:07.277 PKT; status=not_indexed; checkCount=6
31. https://learnora-ab2.pages.dev/math/grade-7/geometry-angles-scale-drawings
   - lastCheckAt: 2026-11-07T22:04:58.142+00:00 UTC; 2026-11-08 03:04:58.142 PKT; status=not_indexed; checkCount=6
32. https://learnora-ab2.pages.dev/math/grade-7/ratios-rates-proportional-relationships
   - lastCheckAt: 2026-11-07T22:05:06.275+00:00 UTC; 2026-11-08 03:05:06.275 PKT; status=not_indexed; checkCount=6
33. https://learnora-ab2.pages.dev/math/grade-7/simplifying-algebraic-expressions
   - lastCheckAt: 2026-11-07T21:20:33.311+00:00 UTC; 2026-11-08 02:20:33.311 PKT; status=not_indexed; checkCount=6
34. https://learnora-ab2.pages.dev/math/grade-6/
   - lastCheckAt: 2026-11-07T19:46:38.754+00:00 UTC; 2026-11-08 00:46:38.754 PKT; status=not_indexed; checkCount=7
35. https://learnora-ab2.pages.dev/math/grade-7/
   - lastCheckAt: 2026-11-07T19:47:52.808+00:00 UTC; 2026-11-08 00:47:52.808 PKT; status=not_indexed; checkCount=7
36. https://learnora-ab2.pages.dev/
   - lastCheckAt: 2026-11-07T19:06:14.929+00:00 UTC; 2026-11-08 00:06:14.929 PKT; status=indexed; checkCount=7
37. https://learnora-ab2.pages.dev/math/grade-8/
   - lastCheckAt: 2026-11-07T19:36:19.442+00:00 UTC; 2026-11-08 00:36:19.442 PKT; status=not_indexed; checkCount=6
38. https://learnora-ab2.pages.dev/english/
   - lastCheckAt: 2026-11-07T19:04:57.585+00:00 UTC; 2026-11-08 00:04:57.585 PKT; status=not_indexed; checkCount=7
39. https://learnora-ab2.pages.dev/science/
   - lastCheckAt: 2026-11-07T19:38:21.772+00:00 UTC; 2026-11-08 00:38:21.772 PKT; status=not_indexed; checkCount=7
- No URL Inspection history row is dated 8 Nov Pakistan time.
- Historical repeated URL keys (not same-day repeats):
- https://learnora-ab2.pages.dev/ai-literacy/how-ai-works — 2 rows (1 extra repeats)
- https://learnora-ab2.pages.dev/english/grade-6-8/parts-of-speech — 3 rows (2 extra repeats)
- https://learnora-ab2.pages.dev/science/grade-7/introduction-to-cells — 2 rows (1 extra repeats)
- https://learnora-ab2.pages.dev/math/grade-6/understanding-fractions — 5 rows (4 extra repeats)
- https://learnora-ab2.pages.dev/science/ — 3 rows (2 extra repeats)
- https://learnora-ab2.pages.dev/math/grade-8/ — 2 rows (1 extra repeats)
- https://learnora-ab2.pages.dev/english/ — 3 rows (2 extra repeats)
- https://learnora-ab2.pages.dev/math/grade-7/ — 2 rows (1 extra repeats)
- https://learnora-ab2.pages.dev/math/grade-6/ — 6 rows (5 extra repeats)
- https://learnora-ab2.pages.dev/ai-literacy/ — 3 rows (2 extra repeats)
- https://learnora-ab2.pages.dev/ — 6 rows (5 extra repeats)
- https://learnora-ab2.pages.dev/financial-literacy/ — 2 rows (1 extra repeats)
- https://learnora-ab2.pages.dev/computer-science/ — 2 rows (1 extra repeats)
- https://learnora-ab2.pages.dev/curriculum/us-common-core-math — 3 rows (2 extra repeats)
- https://learnora-ab2.pages.dev/curriculum/ — 2 rows (1 extra repeats)
- https://learnora-ab2.pages.dev/english/grade-6-8/parts-of-speech.html — 2 rows (1 extra repeats)
- https://learnora-ab2.pages.dev/math/grade-8/linear-equations-and-inequalities.html — 2 rows (1 extra repeats)
- https://learnora-ab2.pages.dev/science/grade-7/introduction-to-cells.html — 2 rows (1 extra repeats)
- https://learnora-ab2.pages.dev/math/grade-6/understanding-fractions.html — 2 rows (1 extra repeats)

## Google sitemap status

- Submitted sitemap: https://learnora-ab2.pages.dev/sitemap.xml
- Last submitted: 2026-11-05T16:21:51.927Z
- Pending: true; warnings=0; errors=0.
- This pending state is a discovery/processing backlog signal, not proof of a robots, canonical or fetch defect.

## Manual Google Request Indexing — separate from API inspection

- Read-only authenticated UI check was attempted with the saved TinyFish profile. It redirected to the public Search Console landing page; the profile is not currently authenticated. No property dashboard or URL Inspection interface appeared; no genuine Request Indexing control was available.
- No manual Request Indexing request was submitted. URL Inspection API checks are status-only and are not manual indexing requests.
- Existing project notes record 10 earlier manual attempts across 9 unique URLs, but GSC API does not expose a complete per-URL manual-request history. Owner must skip any candidate already requested manually.
- Owner review candidates (not submitted by this automation):
1. https://learnora-ab2.pages.dev/math/grade-6/
2. https://learnora-ab2.pages.dev/math/grade-7/
3. https://learnora-ab2.pages.dev/math/grade-8/
4. https://learnora-ab2.pages.dev/english/
5. https://learnora-ab2.pages.dev/curriculum/
6. https://learnora-ab2.pages.dev/science/grade-8/
7. https://learnora-ab2.pages.dev/math/grade-6/understanding-fractions
8. https://learnora-ab2.pages.dev/math/grade-6/solving-one-step-equations
9. https://learnora-ab2.pages.dev/math/grade-6/rates-and-proportions
10. https://learnora-ab2.pages.dev/math/grade-6/factors-multiples-hcf-lcm

## Bing Webmaster and IndexNow

### Bing property, feed, quota and crawl data

- Verified site: true.
- Feed: Success; URL=https://learnora-ab2.pages.dev/sitemap.xml; type=Sitemap; URL count=104; submitted=2026-11-03; last crawled=2026-11-03.
- Bing Webmaster URL-submission quota response: daily=100; monthly=2300. Direct Bing URL Submission action is not present in connected tools; IndexNow is the available notification route.
- Crawl issues: 0. Crawl statistics rows=0; latest date=not reported. No dated stats means unavailable, not zero crawling.

### Full IndexNow reconciliation

- Key configured=true; masked key=****5d92; key file verified=true; key file error=none.
- Before today's batch: 447 history rows, 104 unique URLs, 373 HTTP 200, 74 HTTP 202, 343 extra repeat rows.
- After today's batch: 452 history rows, 104 unique URLs, HTTP 200=378, HTTP 202=74, extra repeat rows=348.
- Compared every live sitemap URL against every stored IndexNow history URL: new sitemap URLs=0; history-only URLs=0. No new sitemap URLs existed.
- Of 104 sitemap URLs, 99 unchanged URLs were skipped because their prior notifications remain valid for the current unchanged content; exact list and previous history evidence below.
- Five pages had materially changed in main commit `4625c15` after their previous IndexNow notifications. Live production fetch confirmed the updates, self-canonical and `index,follow`; each previous IndexNow notification predates the 7 Nov content commit. Only those five were submitted today. The project cap is 100/day; this batch used 5.
- Submission batch: `12f9e86b-cc6f-4097-83c0-83da94d0220c`; attempted=5; submitted=5; failed=0; pending key validation=false. All five returned HTTP 200 (“submitted, key validated”). HTTP 200 is acceptance/key validation, not proof of indexing.
- Exact URLs submitted today:
- https://learnora-ab2.pages.dev/financial-literacy/unit-prices — HTTP 200; 2026-11-08T03:44:18.288004+00:00 UTC
- https://learnora-ab2.pages.dev/financial-literacy/savings-interest — HTTP 200; 2026-11-08T03:44:18.288004+00:00 UTC
- https://learnora-ab2.pages.dev/financial-literacy/budgeting — HTTP 200; 2026-11-08T03:44:18.288004+00:00 UTC
- https://learnora-ab2.pages.dev/computer-science/python-basics — HTTP 200; 2026-11-08T03:44:18.288004+00:00 UTC
- https://learnora-ab2.pages.dev/computer-science/html-css — HTTP 200; 2026-11-08T03:44:18.288004+00:00 UTC
- Changed-page evidence (previous submission timestamp is UTC; live word count is extracted text, not a ranking signal):
| # | URL | Previous IndexNow notification | Live extracted words | Today's result |
|---:|---|---|---:|---|
| 1 | https://learnora-ab2.pages.dev/computer-science/html-css | 2026-11-05T03:26:52.03061+00:00 | 632 | HTTP 200, key validated |
| 2 | https://learnora-ab2.pages.dev/computer-science/python-basics | 2026-11-05T03:26:52.03061+00:00 | 603 | HTTP 200, key validated |
| 3 | https://learnora-ab2.pages.dev/financial-literacy/budgeting | 2026-11-05T16:30:13.928306+00:00 | 533 | HTTP 200, key validated |
| 4 | https://learnora-ab2.pages.dev/financial-literacy/savings-interest | 2026-11-05T16:30:13.928306+00:00 | 591 | HTTP 200, key validated |
| 5 | https://learnora-ab2.pages.dev/financial-literacy/unit-prices | 2026-11-05T16:30:13.928306+00:00 | 635 | HTTP 200, key validated |
- Exact unchanged sitemap URLs skipped today (each has existing history; prior rows and most recent prior notification shown):
| # | URL | Prior history rows | Latest prior submission (UTC) |
|---:|---|---:|---|
| 1 | https://learnora-ab2.pages.dev/ | 4 | 2026-11-05T16:22:00.296442+00:00 |
| 2 | https://learnora-ab2.pages.dev/math/grade-6/ | 5 | 2026-11-05T16:22:00.296442+00:00 |
| 3 | https://learnora-ab2.pages.dev/math/grade-7/ | 5 | 2026-11-05T16:22:00.296442+00:00 |
| 4 | https://learnora-ab2.pages.dev/math/grade-7/two-step-equations | 5 | 2026-11-05T16:22:00.296442+00:00 |
| 5 | https://learnora-ab2.pages.dev/math/grade-7/adding-subtracting-integers | 4 | 2026-11-05T16:30:38.917251+00:00 |
| 6 | https://learnora-ab2.pages.dev/math/grade-7/simplifying-algebraic-expressions | 4 | 2026-11-05T16:30:38.917251+00:00 |
| 7 | https://learnora-ab2.pages.dev/math/grade-7/ratios-rates-proportional-relationships | 5 | 2026-11-05T16:30:38.917251+00:00 |
| 8 | https://learnora-ab2.pages.dev/math/grade-7/rational-numbers-and-operations | 4 | 2026-11-05T16:30:38.917251+00:00 |
| 9 | https://learnora-ab2.pages.dev/math/grade-7/equations-and-inequalities | 4 | 2026-11-05T16:30:38.917251+00:00 |
| 10 | https://learnora-ab2.pages.dev/math/grade-7/geometry-angles-scale-drawings | 4 | 2026-11-05T16:30:38.917251+00:00 |
| 11 | https://learnora-ab2.pages.dev/math/grade-7/area-surface-area-volume | 4 | 2026-11-05T16:30:38.917251+00:00 |
| 12 | https://learnora-ab2.pages.dev/privacy-policy | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 13 | https://learnora-ab2.pages.dev/about | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 14 | https://learnora-ab2.pages.dev/terms | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 15 | https://learnora-ab2.pages.dev/math/grade-6/understanding-fractions | 5 | 2026-11-05T16:22:00.296442+00:00 |
| 16 | https://learnora-ab2.pages.dev/math/grade-6/equivalent-fractions | 7 | 2026-11-05T16:30:13.928306+00:00 |
| 17 | https://learnora-ab2.pages.dev/math/grade-6/comparing-ordering-fractions | 6 | 2026-11-05T16:30:13.928306+00:00 |
| 18 | https://learnora-ab2.pages.dev/math/grade-6/adding-subtracting-fractions | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 19 | https://learnora-ab2.pages.dev/math/grade-6/introduction-to-ratios | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 20 | https://learnora-ab2.pages.dev/math/grade-6/multiplying-dividing-fractions | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 21 | https://learnora-ab2.pages.dev/math/grade-6/mixed-numbers-improper-fractions | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 22 | https://learnora-ab2.pages.dev/math/grade-6/understanding-decimals | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 23 | https://learnora-ab2.pages.dev/math/grade-6/adding-subtracting-decimals | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 24 | https://learnora-ab2.pages.dev/math/grade-6/understanding-percentages | 6 | 2026-11-05T16:30:13.928306+00:00 |
| 25 | https://learnora-ab2.pages.dev/math/grade-6/percentage-increase-decrease | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 26 | https://learnora-ab2.pages.dev/math/grade-6/multiplying-dividing-decimals | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 27 | https://learnora-ab2.pages.dev/math/grade-6/perimeter-area-shapes | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 28 | https://learnora-ab2.pages.dev/math/grade-6/volume-of-3d-shapes | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 29 | https://learnora-ab2.pages.dev/math/grade-6/metric-units-and-conversions | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 30 | https://learnora-ab2.pages.dev/math/grade-6/order-of-operations | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 31 | https://learnora-ab2.pages.dev/math/grade-6/angles-and-triangles | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 32 | https://learnora-ab2.pages.dev/math/grade-6/integers-number-line | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 33 | https://learnora-ab2.pages.dev/math/grade-6/rates-and-proportions | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 34 | https://learnora-ab2.pages.dev/math/grade-6/factors-multiples-hcf-lcm | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 35 | https://learnora-ab2.pages.dev/math/grade-6/algebraic-expressions | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 36 | https://learnora-ab2.pages.dev/math/grade-6/solving-one-step-equations | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 37 | https://learnora-ab2.pages.dev/math/grade-6/data-and-graphs | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 38 | https://learnora-ab2.pages.dev/english/grade-6-8/parts-of-speech | 5 | 2026-11-05T16:22:00.296442+00:00 |
| 39 | https://learnora-ab2.pages.dev/science/grade-7/introduction-to-cells | 6 | 2026-11-05T16:30:13.928306+00:00 |
| 40 | https://learnora-ab2.pages.dev/math/grade-7/statistics-probability-data-interpretation | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 41 | https://learnora-ab2.pages.dev/math/grade-7/transformations-and-symmetry | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 42 | https://learnora-ab2.pages.dev/math/grade-7/coordinate-geometry | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 43 | https://learnora-ab2.pages.dev/math/grade-7/fractions-decimals-and-percentages-in-problem-solving | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 44 | https://learnora-ab2.pages.dev/math/grade-8/ | 6 | 2026-11-05T16:22:00.296442+00:00 |
| 45 | https://learnora-ab2.pages.dev/math/grade-8/exponents-powers-and-scientific-notation | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 46 | https://learnora-ab2.pages.dev/math/grade-8/linear-equations-and-inequalities | 6 | 2026-11-05T16:30:13.928306+00:00 |
| 47 | https://learnora-ab2.pages.dev/math/grade-8/pythagorean-theorem-and-right-triangles | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 48 | https://learnora-ab2.pages.dev/math/grade-8/linear-functions-and-graphs | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 49 | https://learnora-ab2.pages.dev/math/grade-8/systems-of-linear-equations | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 50 | https://learnora-ab2.pages.dev/math/grade-8/transformations-congruence-and-similarity | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 51 | https://learnora-ab2.pages.dev/math/grade-8/volume-of-cylinders-cones-and-spheres | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 52 | https://learnora-ab2.pages.dev/math/grade-8/scatter-plots-and-data-relationships | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 53 | https://learnora-ab2.pages.dev/math/grade-8/probability-models-and-compound-events | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 54 | https://learnora-ab2.pages.dev/math/grade-8/square-roots-and-irrational-numbers | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 55 | https://learnora-ab2.pages.dev/math/grade-8/angle-relationships-and-parallel-lines | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 56 | https://learnora-ab2.pages.dev/english/ | 5 | 2026-11-05T16:22:00.296442+00:00 |
| 57 | https://learnora-ab2.pages.dev/science/ | 4 | 2026-11-05T16:22:00.296442+00:00 |
| 58 | https://learnora-ab2.pages.dev/contact | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 59 | https://learnora-ab2.pages.dev/english/grade-6-8/sentence-types-and-structure | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 60 | https://learnora-ab2.pages.dev/english/grade-6-8/verb-tenses-and-agreement | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 61 | https://learnora-ab2.pages.dev/science/grade-7/forces-and-motion | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 62 | https://learnora-ab2.pages.dev/science/grade-7/ecosystems-and-food-chains | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 63 | https://learnora-ab2.pages.dev/english/grade-6-8/punctuation-and-capitalization | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 64 | https://learnora-ab2.pages.dev/science/grade-7/states-of-matter-and-particle-model | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 65 | https://learnora-ab2.pages.dev/science/grade-7/mixtures-and-separation-techniques | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 66 | https://learnora-ab2.pages.dev/english/grade-6-8/reading-comprehension-main-idea-inference-evidence | 6 | 2026-11-05T16:30:13.928306+00:00 |
| 67 | https://learnora-ab2.pages.dev/science/grade-7/heat-transfer-conduction-convection-radiation | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 68 | https://learnora-ab2.pages.dev/english/grade-6-8/paragraph-writing-topic-sentences-supporting-details | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 69 | https://learnora-ab2.pages.dev/science/grade-8/elements-compounds-and-chemical-reactions | 5 | 2026-11-05T16:30:13.928306+00:00 |
| 70 | https://learnora-ab2.pages.dev/science/grade-8/ | 6 | 2026-11-05T16:30:13.928306+00:00 |
| 71 | https://learnora-ab2.pages.dev/english/grade-6-8/vocabulary-context-clues-prefixes-suffixes-roots | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 72 | https://learnora-ab2.pages.dev/science/grade-8/human-digestive-and-circulatory-systems | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 73 | https://learnora-ab2.pages.dev/science/grade-8/electric-circuits-current-voltage-resistance | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 74 | https://learnora-ab2.pages.dev/science/grade-8/waves-sound-and-light | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 75 | https://learnora-ab2.pages.dev/science/grade-8/earth-moon-and-space-patterns | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 76 | https://learnora-ab2.pages.dev/curriculum/ | 4 | 2026-11-05T16:22:00.296442+00:00 |
| 77 | https://learnora-ab2.pages.dev/curriculum/us-common-core-math | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 78 | https://learnora-ab2.pages.dev/curriculum/england-ks3-maths | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 79 | https://learnora-ab2.pages.dev/curriculum/canada-ontario-math | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 80 | https://learnora-ab2.pages.dev/curriculum/australia-year-7-8-maths | 4 | 2026-11-05T16:30:13.928306+00:00 |
| 81 | https://learnora-ab2.pages.dev/curriculum/uk-maths-curriculum | 3 | 2026-11-05T16:30:13.928306+00:00 |
| 82 | https://learnora-ab2.pages.dev/curriculum/canada-grade-6-8-math | 3 | 2026-11-05T16:30:13.928306+00:00 |
| 83 | https://learnora-ab2.pages.dev/curriculum/grade-6-8-maths-study-plan | 3 | 2026-11-05T16:30:13.928306+00:00 |
| 84 | https://learnora-ab2.pages.dev/worksheets/international-middle-school-maths | 3 | 2026-11-05T16:22:00.296442+00:00 |
| 85 | https://learnora-ab2.pages.dev/curriculum/international-english-guide | 3 | 2026-11-05T16:30:13.928306+00:00 |
| 86 | https://learnora-ab2.pages.dev/curriculum/international-science-guide | 3 | 2026-11-05T16:30:13.928306+00:00 |
| 87 | https://learnora-ab2.pages.dev/worksheets/international-english-science-practice | 3 | 2026-11-05T16:30:13.928306+00:00 |
| 88 | https://learnora-ab2.pages.dev/english/grade-6-8/argument-writing-claims-reasons-evidence | 3 | 2026-11-05T16:30:13.928306+00:00 |
| 89 | https://learnora-ab2.pages.dev/english/grade-6-8/text-structure-authors-purpose | 3 | 2026-11-05T16:30:13.928306+00:00 |
| 90 | https://learnora-ab2.pages.dev/science/grade-7/weather-climate-water-cycle | 3 | 2026-11-05T16:30:13.928306+00:00 |
| 91 | https://learnora-ab2.pages.dev/science/grade-8/earth-resources-sustainability-human-impact | 3 | 2026-11-05T16:30:13.928306+00:00 |
| 92 | https://learnora-ab2.pages.dev/editorial-policy | 2 | 2026-11-05T16:30:13.928306+00:00 |
| 93 | https://learnora-ab2.pages.dev/computer-science/ | 3 | 2026-11-05T16:22:00.296442+00:00 |
| 94 | https://learnora-ab2.pages.dev/ai-literacy/ | 3 | 2026-11-05T16:22:00.296442+00:00 |
| 95 | https://learnora-ab2.pages.dev/financial-literacy/ | 3 | 2026-11-05T16:22:00.296442+00:00 |
| 96 | https://learnora-ab2.pages.dev/computer-science/algorithms | 4 | 2026-11-05T16:22:00.296442+00:00 |
| 97 | https://learnora-ab2.pages.dev/ai-literacy/how-ai-works | 4 | 2026-11-05T16:22:00.296442+00:00 |
| 98 | https://learnora-ab2.pages.dev/ai-literacy/verify-ai | 4 | 2026-11-05T16:22:00.296442+00:00 |
| 99 | https://learnora-ab2.pages.dev/ai-literacy/ai-safety | 4 | 2026-11-05T16:22:00.296442+00:00 |

## Live fetch, canonical, robots and internal-link sample

- Ten representative pages were fetched successfully; no per-URL fetch errors. All ten had self-canonical and `index,follow`.
| URL | Extracted words | Internal links | Canonical | Robots |
|---|---:|---:|---|---|
| https://learnora-ab2.pages.dev/ | 1151 | 51 | self | index,follow |
| https://learnora-ab2.pages.dev/math/grade-6/ | 400 | 30 | self | index,follow |
| https://learnora-ab2.pages.dev/math/grade-7/ | 437 | 20 | self | index,follow |
| https://learnora-ab2.pages.dev/math/grade-8/ | 438 | 15 | self | index,follow |
| https://learnora-ab2.pages.dev/english/ | 494 | 16 | self | index,follow |
| https://learnora-ab2.pages.dev/science/ | 506 | 21 | self | index,follow |
| https://learnora-ab2.pages.dev/curriculum/ | 584 | 22 | self | index,follow |
| https://learnora-ab2.pages.dev/computer-science/algorithms | 323 | 8 | self | index,follow |
| https://learnora-ab2.pages.dev/computer-science/python-basics | 603 | 8 | self | index,follow |
| https://learnora-ab2.pages.dev/financial-literacy/budgeting | 533 | 8 | self | index,follow |
- No sampled page showed a canonical mismatch or noindex directive. The homepage and subject/grade hubs expose internal links; this is not a complete 104-page orphan-link proof.
- Algorithms is the shortest sampled content page at 323 extracted words. Treat this only as a content-depth review signal, not a Google word-count requirement. Review worked examples, independent practice, source attribution and useful internal links.
- Five materially changed pages were separately fetched live: HTML/CSS (632 words), Python Basics (603), Budgeting (533), Savings & Interest (591), Unit Prices (635). All were fetchable with self-canonical and `index,follow`; worked examples and answer guides were detected. The three Financial Literacy pages include CFPB source references.
- No confirmed robots, canonical or fetch blocker was found in the sampled pages. Google sitemap remains pending; 103 tracker URLs remain not indexed/unknown. Full internal-link graph across all 104 pages remains outstanding.

## Exact blockers, risks and next actions

1. **GSC tracker cap:** hourly tracker is active and has already recorded 39 distinct URLs today. Connector exposes no pause/throttle action. Owner must pause/reduce it in the GSC Wizard UI; no further inspections on 8 Nov.
2. **Google discovery:** sitemap is pending with 0 warnings/errors; tracker shows 103 not indexed/unknown and 1 indexed. No specific robots/canonical/noindex issue is established from the sample.
3. **Manual indexing:** saved Google sign-in may have expired. No Request Indexing control was available; no manual request submitted. Owner must reauthenticate and skip any URL already manually requested.
4. **Internal links:** 10-page sample shows internal links, but the complete 104-page inbound graph/orphan check is not complete.
5. **Content depth:** continue educator-led review of Algorithms and the recently improved Computer Science/Financial Literacy lessons; word count alone is not a quality threshold.
6. **Bing:** feed is Success, but last crawled 3 Nov; crawl statistics have no dated rows. Continue to notify only materially changed/new URLs.
7. No production code, sitemap, robots, canonical or metadata was changed by this daily routine. No manual deployment was initiated.

## Project tree

```text
Learnora
├── math/                         46 Maths lesson pages across Grades 6–8
├── english/                      9 English lesson pages
├── science/                      14 Science lesson pages
├── computer-science/             3 pages (HTML/CSS + Python updated)
├── ai-literacy/                  3 pages
├── financial-literacy/           3 pages (all three updated)
├── sitemap.xml                   104 unique URLs
├── robots.txt                    Allow all + OAI-SearchBot
├── PROJECT_STATUS.md
├── LEARNORA_MASTER_ROADMAP_2026-11-04.md
└── DAILY_INDEXING_LOG_2026-11-08.md
```
