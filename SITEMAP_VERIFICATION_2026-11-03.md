# Learnora — Sitemap and Indexing Verification

**Verification date:** 3 November 2026  
**Production:** https://learnora-ab2.pages.dev/  
**GSC property:** https://learnora-ab2.pages.dev/  
**Repository:** https://github.com/com-orgs/learnora

## Current evidence

| Check | Latest result | Interpretation |
|---|---|---|
| Sitemap URL inventory | 104 unique URLs | Repository sitemap contains 104 production-host URLs |
| Google sitemap submission | Last submitted 3 Nov 2026 15:07 UTC; processing pending | Google accepted the submission; processing is not yet complete |
| Google sitemap warnings/errors | 0 / 0 | No sitemap parsing warning or error reported |
| Google Indexing Tracker | 104 tracked | One URL confirmed indexed; most are not yet discovered/crawled |
| Indexed | 1 | Homepage only, PASS / INDEXING_ALLOWED |
| URL unknown to Google | 87 | No Google crawl time recorded; discovery/crawl backlog, not proof of a technical block |
| Pending | 16 | No inspection result recorded yet |
| Tracker errors/warnings | 0 / 0 | No tracker-level error/warning reported |
| GSC performance | 4–31 Oct: 0 clicks, 0 impressions | No measurable organic search visibility in this period |
| Sitemap URL performance | 104 URLs; 0 URLs with impressions | No query/page performance signal yet |
| Bing sitemap feed | Success; 104 URLs; last crawled 3 Nov 2026 | Bing fetched the sitemap successfully |
| Bing crawl issues | 0 reported URLs | No issue URLs were returned |
| Bing daily crawl/search data | No dated rows | Crawl volume and search-performance metrics are unavailable, not evidence of zero crawling |
| IndexNow | Key file verified; 296 submission records | Newest 200 returned records all have HTTP 200; notifications are not proof of indexing |

## Interpretation

A live HTTP 200 page, a valid sitemap, accepted Google sitemap submission, successful Bing sitemap fetch, IndexNow acceptance and Google indexing are separate states. Google can take time to discover and crawl submitted URLs. Do not call the 87 unknown URLs blocked or deindexed: their latest inspection state is `URL is unknown to Google`, verdict `NEUTRAL`, with no last crawl time and no canonical returned.

The 16 pending entries have not yet had their first inspection. The homepage is the only currently confirmed indexed URL and its Google-selected canonical matches the declared canonical.

## Search performance

The GSC Wizard 28-day report window was 4–31 October 2026. It returned zero clicks and zero impressions, with no query, page, country or device rows. Bing also returned no dated search-performance rows. This is an early-stage visibility baseline, not proof of a penalty or ranking problem.

## Safe next actions

1. Keep the sitemap URL and canonical URL structure unchanged.
2. Allow Google time to process the sitemap and discover URLs; avoid repeated manual indexing requests for recently checked URLs.
3. Recheck sitemap status and tracker after a reasonable crawl interval; prioritize new URLs and any future non-neutral error states.
4. Confirm internal links from subject hubs and homepage remain crawlable.
5. Do not change robots.txt, canonical tags or noindex directives without evidence of a specific defect.
6. Review Bing daily crawl and search reports again once reporting rows become available.

## Sources and tools

- Google Search Console sitemap report and URL Inspection / Indexing Tracker via the connected GSC Wizard property.
- Bing Webmaster Tools feed report, crawl issues, daily crawl and traffic endpoints.
- IndexNow settings and submission history.
- Repository sitemap: `sitemap.xml` (104 unique `<loc>` entries).
