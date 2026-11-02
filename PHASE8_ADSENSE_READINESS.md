# Phase 8 — Legal, Privacy, COPPA and AdSense Readiness

Last reviewed: 2 November 2026  
Repository: `com-orgs/learnora`  
Working branch: `audit/production-hardening-2026-11-02`  
Production branch: `main`

## Current verified state

- The production Privacy Policy, Terms and About pages contain pre-monetisation disclosures and contact/editorial information.
- Advertising and analytics are not active on the production site code.
- The new CI legal-readiness guard scans every HTML page and fails if it finds active AdSense/advertising/analytics script tags. The existing browser/preview suite also checks for unexpected third-party requests.
- The Privacy Policy now identifies Cloudflare Pages and explains the categories of technical data Cloudflare may process, with a link to Cloudflare's privacy policy.
- No `ads.txt` file exists.
- No real AdSense publisher ID has been supplied or verified for this project.
- No CMP has been installed. This is intentional while no advertising/analytics technologies are active; a homemade banner must not be represented as a Google-certified CMP.
- The user explicitly authorised production merge/deployment on 2026-11-02. The privacy, terms, about and SEO updates have been deployed to `main`; advertising and analytics remain disabled.

## Work completed and deployed to production

- [x] Privacy Policy, Terms and About editorial-transparency pages updated and deployed.
- [x] Privacy Policy identifies Cloudflare Pages/network processing and links to Cloudflare's privacy policy.
- [x] Added `scripts/audit-legal-readiness.mjs` to verify required disclosures, contact details, Cloudflare hosting disclosure, and the absence of active ad/analytics scripts across all HTML pages.
- [x] Added the legal-readiness guard to `.github/workflows/site-audit.yml`; it runs on every audit-branch push and on `main`.
- [x] Kept ad/analytics code disabled; did not fabricate a publisher ID, CMP, or ads.txt record.

## CMP plan

For Google publisher ads served to users in the EEA, UK or Switzerland, Google requires a Google-certified CMP integrated with IAB TCF when serving personalised ads. Google's AdSense Privacy & Messaging European regulations message is listed by Google as certified for the TCF requirement. Once an AdSense account exists, evaluate and configure the built-in Google Privacy & Messaging option first; confirm it is available for the account, the current certification/listing, the required message types, and the actual site configuration before enabling ad requests.

Official reference:
- https://support.google.com/adsense/answer/13554116
- https://support.google.com/adsense/answer/10924669

Do not install a custom cookie banner and call it a certified CMP. Consent UI must reflect the actual vendors, purposes, storage, and choices used by the site. Do not load advertising or non-essential analytics technologies before the required consent flow is operational for applicable visitors.

## COPPA and age treatment gate

Learnora's current educational focus is Grades 6–8. Some learners in these grades may be under 13, and the site explicitly serves school-age students. This makes child-directed / mixed-audience classification a material launch decision, not a detail to defer until after ads are installed.

Before any Google advertising service is enabled:
1. Make and document a defensible audience classification for the whole site and any distinct sections, considering actual content, presentation, marketing and intended users. Obtain legal advice where appropriate.
2. If a site or section is covered by COPPA, notify Google using the supported site-level/Search Console method or apply the appropriate ad-request treatment.
3. Do not use interest-based advertising or remarketing based on activity by known under-13 users or on child-directed pages.
4. For Google ad requests, use the current Tag for Age Treatment (TFAT) guidance. Google documents CHILD as value 1 and TEEN as value 2; older TFCD/TFUA tags are deprecated. Do not add any tag until real ad code and the correct treatment decision exist.
5. Review other relevant age/privacy regimes for the intended international audience, including UK Age Appropriate Design Code and applicable local requirements.

Official references:
- https://support.google.com/publisherpolicies/answer/10436800
- https://support.google.com/adsense/answer/9009582
- https://support.google.com/webmasters/answer/3221080

## Publisher ID and ads.txt gate

Do not invent or publish a placeholder publisher ID. The real ID must be read from the actual AdSense account (format `pub-` followed by 16 digits). After the account is created and the user verifies the ID, create the root-level `ads.txt` entry exactly as supplied by AdSense, typically:

```text
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

Replace the X characters only with the verified 16-digit account identifier. Verify the live root URL returns the exact plain-text file after the approved deployment. Google's documentation says ads.txt is not a strict prerequisite for ads to serve, but it is recommended and can affect buyer eligibility.

Official references:
- https://support.google.com/adsense/answer/9785052
- https://support.google.com/adsense/answer/105516

## Content and site-value review — preliminary findings

A spot review of the homepage, About page, Grade 6 Fractions, English Reading Comprehension and two Grade 8 Science lesson pages found substantial lesson structure, learning outcomes, explanations, worked examples, independent practice, quizzes and printable resources. The sampled lesson text was approximately 1,000–1,600 words. The About page describes Learnora as an independent supplementary learning resource and explains its editorial/corrections approach.

This remains a preliminary sample, not a full originality or AdSense approval assessment. Some sampled lesson pages did not show a named author/reviewer or source/reference list. Phase 9 must complete a page-by-page originality, factual accuracy, source attribution, duplicated-template and user-value review. Avoid claiming that word count alone guarantees AdSense approval. Add real author/reviewer identities only when supplied and verified; never invent credentials.

Official references:
- https://support.google.com/adsense/answer/10502938
- https://adsense.google.com/intl/en_pk/start/resources/monetization-tips-to-optimize-google-adsense/
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content

## Phase 8 exit criteria

- [x] Privacy Policy, Terms and About / editorial transparency updated on audit branch.
- [x] Added an automated all-HTML-page guard against active AdSense/advertising/analytics script tags; CI will verify this on the audit branch.
- [x] Documented Cloudflare technical data processing in the Privacy Policy.
- [x] Confirm no placeholder ads.txt or fabricated publisher ID has been added.
- [x] Record CMP, COPPA and publisher-ID prerequisites and official references.
- [ ] Decide/document child-directed vs mixed/general audience classification.
- [ ] Create/verify the actual AdSense account and publisher ID, if the user chooses to apply.
- [ ] Configure and test the selected Google-certified TCF CMP for applicable regions before personalised ads.
- [ ] Add the exact verified ads.txt seller declaration after the publisher ID is available.
- [ ] Complete all-page originality, factual accuracy, attribution and low-value-content review (coordinate with Phase 9's consolidated release audit; automated quality checks do not prove originality).
- [ ] Run the full CI and live preview checks after any implementation changes.
- [ ] User explicitly confirms the advertising/CMP configuration before any ad code is enabled.

## User / account dependencies that prevent a truthful Phase 8 sign-off

The following cannot be completed by repository code alone and must not be guessed:

1. **Audience classification:** the owner must confirm whether Learnora intentionally targets children under 13, is a mixed-audience service, or is genuinely general-audience. The Grade 6–8 curriculum is a relevant child-directedness factor. A legal assessment may be needed; a simple age checkbox or a generic cookie banner does not settle COPPA.
2. **AdSense account:** the owner must create/use the actual AdSense account and provide the publisher ID shown in Account → Settings → Account information. Do not send passwords or account access codes.
3. **CMP configuration:** after an AdSense account exists, configure the currently certified Google Privacy & Messaging / another Google-certified TCF CMP and test applicable EEA/UK/Swiss consent behaviour before serving personalised ads. Google updates its certified CMP list, so verify it at setup time.
4. **ads.txt:** add only the exact seller line generated for the verified publisher account, then verify `/ads.txt` on the live domain after the approved deployment.

Until those owner/account decisions and verifications are completed, Phase 8 remains **blocked / not fully signed off**. The site is in a safe pre-monetisation state, not an AdSense-ready-for-ad-serving state.

## Safety / release hold

Until all relevant exit criteria are satisfied, keep ad code, analytics tags and non-essential tracking disabled. Do not add a fake CMP, guessed publisher ID, placeholder ads.txt row, or unapproved ad scripts. This document is an engineering readiness record, not legal advice and not a guarantee of AdSense approval.
