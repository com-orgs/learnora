# Learnora — Sitemap and Indexing Verification

**Verification date:** 3 November 2026  
**Production:** https://learnora-ab2.pages.dev/  
**GSC property:** https://learnora-ab2.pages.dev/  
**Repository:** https://github.com/com-orgs/learnora

## Current evidence

| Check | Latest result | Interpretation |
|---|---|---|
| Sitemap URL inventory | 104 unique URLs | Repository sitemap contains 104 production-host URLs |
| GSC sitemap submission | Last submitted 3 Nov 2026 15:07 UTC | Submission accepted; processing is still pending |
| GSC sitemap warnings/errors | 0 / 0 | No sitemap parsing warning or error reported |
| Google Indexing Tracker | 104 tracked | One URL is confirmed indexed; most have not yet been discovered/crawled |
| Indexed | 1 | Homepage only, with PASS / INDEXING_ALLOWED |
| URL unknown to Google | 87 | No Google crawl time recorded; discovery/crawl backlog, not proof of a technical block |
| Pending | 16 | No inspection result recorded yet |
| Tracker errors/warnings | 0 / 0 | No tracker-level error/warning reported |
| GSC performance | 4–31 Oct: 0 clicks, 0 impressions | No measurable organic search visibility in this period |
| Sitemap URL performance | 104 URLs; 0 URLs with impressions | No query/page performance signal yet |

## Interpretation

A live HTTP 200 page, a valid sitemap, accepted sitemap submission, IndexNow acceptance and Google indexing are separate states. Google can take time to discover and crawl submitted URLs. Do not call the 87 unknown URLs blocked or deindexed: their latest inspection state is `URL is unknown to Google`, verdict `NEUTRAL`, with no last crawl time and no canonical returned.

The 16 pending entries have not yet had their first inspection. The homepage is the only currently confirmed indexed URL and its Google-selected canonical matches the declared canonical.

## Search performance

The GSC Wizard 28-day report window was 4–31 October 2026. It returned zero clicks and zero impressions, with no query, page, country or device rows. This is an early-stage visibility baseline, not proof of a penalty or a ranking problem.

## Bing and field performance

- Bing recognizes the property. The latest crawl-stats request returned no dated rows; therefore pages-crawled and in-index counts are unavailable, not zero.
- Bing crawl-issues endpoint returned no reported issue URLs.
- CrUX / Core Web Vitals field data is not configured because the GSC Wizard has no CrUX API key. Do not infer real-user Core Web Vitals from this missing data.

## Safe next actions

1. Keep the sitemap URL and canonical URL structure unchanged.
2. Allow Google time to process the sitemap and discover URLs; avoid repeated manual indexing requests for recently checked URLs.
3. Recheck sitemap status and tracker after a reasonable crawl interval; prioritize new URLs and any future non-neutral error states.
4. Confirm internal links from subject hubs and homepage remain crawlable.
5. Do not change robots.txt, canonical tags or noindex directives without evidence of a specific defect.
6. Review Bing daily crawl data again once reporting rows become available.

## Sources and tools

- Google Search Console sitemap report and URL Inspection / Indexing Tracker via the connected GSC Wizard property.
- Repository sitemap: `sitemap.xml` (104 unique `<loc>` entries).
- Live production homepage, Privacy Policy and Grade 6 Fractions page were fetched on 3 November; none contained GA4 / Google Tag Manager scripts.
