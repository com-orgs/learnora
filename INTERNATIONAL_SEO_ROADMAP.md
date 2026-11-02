# Learnora — International Organic Search Roadmap

Last reviewed: 2 November 2026  
Production site: https://learnora-ab2.pages.dev/  
Primary markets: United States, United Kingdom, Canada  
Secondary markets: Australia, New Zealand and other English-speaking markets

## 1. Market and language strategy

Keep English as the core language. Do not create thin near-duplicate country pages or use geo-redirects. Localise terminology and examples where they genuinely help learners:

- United States: Grade 6, Grade 7, Grade 8; Common Core references only when the lesson is actually mapped to a named standard.
- United Kingdom: Year 7–9 and Key Stage 3 (KS3) terminology, using UK spelling where appropriate. Be clear when a resource is curriculum-neutral rather than an official KS3 resource.
- Canada: Grade 6–8 terminology, metric-first examples, and provincial curriculum references only when mapped to the relevant province.
- Australia: Year 7–9 terminology, metric-first examples, and Australian Curriculum references only when accurately mapped.

The current site is a single English-language, curriculum-neutral resource library. Do not add hreflang annotations until distinct, genuinely localised language/region versions exist. Avoid unsupported claims of official curriculum alignment.

## 2. Technical SEO baseline verified on 2 November 2026

- Homepage, robots.txt and sitemap.xml returned HTTP 200.
- robots.txt allows crawling and references the production sitemap.
- The live sitemap contains 75 URLs.
- All 64 lesson URLs were fetched successfully in the full crawl.
- All 64 lesson pages exposed canonical metadata and index,follow robots directives.
- Google Search Console accepted the sitemap submission; it was pending Google's fetch/processing at the time of review.
- GSC last-28-day data was zero clicks and zero impressions; there is not yet enough data to optimise by country or device.
- 75 sitemap URLs were added to the GSC Wizard Indexing Tracker; 10 priority URLs were inspected immediately. At that snapshot: homepage indexed, 9 sampled URLs unknown to Google, 65 URLs pending inspection, no inspection errors.
- Three GSC content groups and three topic clusters have been configured for Mathematics, English and Science.

## 3. International organic-search opportunities

These are qualitative long-tail opportunities from competitor and search-result research, not paid-tool keyword-volume estimates. Validate query demand and difficulty again when a suitable data plan is available.

| Market | Candidate query | Recommended content angle |
|---|---|---|
| US | 6th grade adding and subtracting fractions worksheet with answers | Visual models, worked examples, printable sheet, separate answer key and self-check quiz |
| US | 8th grade scatter plots practice quiz with answers | Original plots, correlation, outliers and trend-line interpretation with instant explanations |
| US | middle school forces and motion quiz with answer explanations | Misconception-first practice on balanced forces, friction, gravity and average speed |
| UK | KS3 percentage increase and decrease worksheet with answers | UK-English examples, discounts, price rises and fully worked answers |
| UK | Year 7 equivalent fractions quiz with printable worksheet | Visual bars and number lines, quiz feedback and printer-friendly practice |
| Canada | Grade 7 ratios and rates worksheet with answer key | Metric-first contexts, ratio tables, unit rates and provincial-neutral language |
| Canada | Grade 8 electric circuits practice test with diagrams and answers | Series/parallel circuit interpretation, vocabulary, diagrams and worked solutions |
| Australia | Year 8 linear equations practice test with answers | Year-level terminology, timed test, worked solutions and Australian spelling |
| Australia | Year 7 reading comprehension inference worksheet with answers | Original passage, evidence-based questions and teacher marking guidance |

## 4. Content quality audit — all 64 lesson pages

The 64 lesson URLs returned content. Extracted lesson length averaged approximately 1,015 words (range 709–1,821); no lesson was below 700 words. Source-level verification confirmed:

- All 64 lessons include an interactive quiz / knowledge check.
- All 64 lessons include a printable worksheet.
- All 64 lessons include an answer key or suggested-answer guidance.
- No lesson page exposed a named author/reviewer in the extracted metadata.
- 61 lessons had no explicit Sources / References / Further Reading section.

A first-pass text-extraction scan used narrow heading patterns and missed some quiz markup and answer-guidance formats. Those false positives were removed after inspecting the underlying HTML and external JavaScript.

The remaining editorial gap is source attribution and a truthful reviewer/corrections workflow. Add named reviewers only after real review; cite primary curriculum/science sources where factual claims or standards are discussed. Do not fabricate credentials or citations.

Tracked work: GitHub issue #4 — https://github.com/com-orgs/learnora/issues/4

## 5. Measurement and connected services

- Google Search Console: connected; sitemap submitted; content groups, topic clusters and URL indexing tracker configured.
- Google Analytics 4: not connected to the GSC Wizard account. Connect the Analytics scope and link the correct GA4 property before relying on sessions, engagement or country-level analytics.
- Bing Webmaster Tools: no API key configured in GSC Wizard. Add a Bing Webmaster Tools API key to enable Bing crawl/search reporting.
- Ahrefs: the connected plan returned "Insufficient plan" for keyword-volume requests. Do not treat unavailable data as zero demand or buy an upgrade without approval.
- IndexNow: an API key has been generated and its root key file has been added on a Cloudflare Pages preview branch. The production key file is not yet published or verified. Do not submit production URLs until the approved change is merged/deployed and the production key URL returns HTTP 200 with the exact plain-text key.

## 6. AdSense and student privacy gates

The site targets middle-school grades and may be used by children under 13. Before enabling ads, document the correct child-directed / mixed-audience classification and applicable age treatment. Do not enable interest-based advertising or remarketing for known under-13 users or child-directed pages. For EEA, UK and Switzerland traffic, configure the appropriate Google-certified CMP and consent flow before serving personalised ads where required.

Do not invent an AdSense publisher ID or publish placeholder ads.txt records. Add the real ads.txt line only after the publisher ID is verified from the actual AdSense account. Keep ad code disabled until privacy, consent and age-treatment requirements are reviewed.

## 7. Next implementation order

1. Resolve the three missing knowledge checks and seven answer-key gaps; add a content QA regression test.
2. Add a real author/reviewer and sources workflow without inventing credentials.
3. Expand the highest-opportunity pages into assessment-led formats with original diagrams, worked explanations and printable answers.
4. Connect GA4 and Bing Webmaster Tools for acquisition and crawl measurement.
5. Merge/deploy the IndexNow verification file only after the user approves production deployment; verify it on the production host and then submit important updated URLs.
6. Reinspect the sitemap and priority URLs in GSC; monitor country/device data once impressions exist.
7. Complete a full AdSense readiness review, including student privacy and consent gates, before applying or enabling advertising.

## Reference guidance

- Google Search Central — Helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Search Central — Localised versions and hreflang: https://developers.google.com/search/docs/specialty/international/localized-versions
- Google Search Central — SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- UK Department for Education — Key Stage 3 and 4: https://www.gov.uk/national-curriculum/key-stage-3-and-4
- Common Core State Standards — Grade 6 Mathematics: https://www.thecorestandards.org/Math/Content/6/introduction/
- Ontario Curriculum — Elementary Mathematics: https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics
