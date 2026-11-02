# Phase 8 — Legal, Privacy, COPPA and AdSense Readiness

Last reviewed: 2 November 2026  
Repository: `com-orgs/learnora`  
Working branch: `audit/production-hardening-2026-11-02`  
Production branch: `main`

## Current verified state

- The audit-branch Privacy Policy, Terms and About page have been updated.
- Advertising and analytics are not active on the current site code.
- No AdSense ad tag or analytics tag was found in the inspected homepage and policy files; the existing site audit/preview checks also passed without third-party page requests.
- No `ads.txt` file exists.
- No real AdSense publisher ID has been supplied or verified for this project.
- No CMP has been installed. This is intentional while no advertising/analytics technologies are active; a homemade banner must not be represented as a Google-certified CMP.
- Production `main` is unchanged. Do not merge or deploy without the user's explicit approval.

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

This is a preliminary sample, not a full originality or AdSense approval assessment. Some sampled lesson pages did not show a named author/reviewer or source/reference list. Phase 9 must complete a page-by-page originality, factual accuracy, source attribution, duplicated-template and user-value review. Avoid claiming that word count alone guarantees AdSense approval. Add real author/reviewer identities only when supplied and verified; never invent credentials.

Official references:
- https://support.google.com/adsense/answer/10502938
- https://adsense.google.com/intl/en_pk/start/resources/monetization-tips-to-optimize-google-adsense/
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content

## Phase 8 exit criteria

- [x] Privacy Policy, Terms and About / editorial transparency updated on audit branch.
- [x] Confirm no active AdSense or analytics tags in inspected site code; automated preview checks show no third-party requests.
- [x] Confirm no placeholder ads.txt or fabricated publisher ID has been added.
- [x] Record CMP, COPPA and publisher-ID prerequisites and official references.
- [ ] Decide/document child-directed vs mixed/general audience classification.
- [ ] Create/verify the actual AdSense account and publisher ID, if the user chooses to apply.
- [ ] Configure and test the selected Google-certified TCF CMP for applicable regions before personalised ads.
- [ ] Add the exact verified ads.txt seller declaration after the publisher ID is available.
- [ ] Complete all-page originality, factual accuracy, attribution and low-value-content review.
- [ ] Run the full CI and live preview checks after any implementation changes.
- [ ] User explicitly confirms the advertising/CMP configuration before any ad code is enabled.

## Safety / release hold

Until all relevant exit criteria are satisfied, keep ad code, analytics tags and non-essential tracking disabled. Do not add a fake CMP, guessed publisher ID, placeholder ads.txt row, or unapproved ad scripts. This document is an engineering readiness record, not legal advice and not a guarantee of AdSense approval.
