# Learnora — GA4 Privacy-Safe Implementation Plan

**Date:** 3 November 2026  
**Website:** https://learnora-ab2.pages.dev/  
**GA4 property:** Learnora Website (`562164102`)  
**Web stream:** `16264528436`  
**Measurement ID:** `G-0186E0KTH6`

## Decision: tracking remains disabled

The GA4 property and web stream are created and linked in GSC Wizard, but no GA4 / Google Tag Manager script is installed on the production website. The current GA4 API report returns zero sessions, users and events for 4–31 October 2026. This is consistent with the absence of a deployed tag and is intentional.

Live HTML checks on 3 November covered the homepage, Privacy Policy and Grade 6 Fractions lesson. No GA4 or Google Tag Manager code was present. The current Privacy Policy accurately says third-party analytics tags are not active. Do not change that disclosure until a compliant implementation is approved and ready.

## Audience and privacy gate

The owner has confirmed Learnora is intended for students, including children under 13, parents and teachers. Because the website offers Grades 6–8 educational content and is intended to serve under-13 learners as well as adults, a child-directed / mixed-audience assessment is a material prerequisite. Do not infer that a general cookie banner or an age checkbox alone resolves COPPA, GDPR/UK child privacy or other international requirements. Obtain qualified legal/privacy advice where appropriate before deciding whether and how analytics can be used on child-facing pages.

## Required design if GA4 is later approved

1. **No tag before permission:** use a blocking/basic-consent architecture so Google tags do not load and no analytics requests are sent before valid analytics consent. Do not default to advanced Consent Mode cookieless pings for this conservative child/mixed-audience design.
2. **Separate analytics from advertising:** analytics consent must not imply ad consent. No AdSense, Google Ads, remarketing, personalised advertising or ad measurement is included in this GA4 plan.
3. **No child profiling:** do not enable Google Signals, advertising personalisation, remarketing, User-ID, custom user properties or audience creation.
4. **No student-level events:** do not send names, email addresses, student IDs, class identifiers, free-text inputs, quiz answers, quiz scores or any other personal information to GA4. Do not create custom events from quiz responses.
5. **Minimal collection:** if permitted, begin with minimal page-level measurement only. Do not add extra dimensions/events unless there is a clear educational/business need and a documented privacy review.
6. **Choice and revocation:** provide an accessible, keyboard-operable privacy choice and a persistent way to change/revoke consent. A refusal must keep the analytics tag blocked. Consent state must be stored only as necessary and protected from accidental transmission.
7. **Accurate disclosures:** update the Privacy Policy before deployment to name Google Analytics, explain purposes and categories of data, relevant Google processing, retention/settings, choices and contact route. Do not claim a certified CMP unless the actual product and configuration meet Google's current certification requirements for the relevant advertising use case.
8. **Preserve security:** keep `script-src 'self'`, `script-src-attr 'none'`, existing browser third-party-request checks and the legal CI guard. Do not broadly allowlist Google domains or weaken CSP. Any narrowly scoped exception must be reviewed and tested first.
9. **Release verification:** test no Google requests before consent, no requests after rejection, consent grant/revoke behaviour, page navigation, mobile accessibility, no PII in network payloads, no CSP errors, and no change to page speed or quiz behaviour. Verify GA4 Realtime only after those tests pass.

## Important distinction

Google Consent Mode is a signalling mechanism for Google tags; it does not itself provide a consent banner, establish a legal basis, or satisfy parental-consent duties. Consent requirements depend on the site's audience, jurisdiction, technology and processing purposes.

## Current implementation checklist

- [x] GA4 property and web stream created.
- [x] GA4 property linked to the Learnora GSC Wizard property.
- [x] Confirmed current production pages do not load GA4 / Google Tag Manager scripts.
- [x] Confirmed current Privacy Policy says third-party analytics is inactive.
- [x] Confirmed intended audience includes under-13 students, parents and teachers.
- [ ] Document child-directed / mixed-audience classification with appropriate legal/privacy review.
- [ ] Confirm a lawful and age-appropriate analytics approach for every applicable jurisdiction.
- [ ] Design and review consent interface and revocation mechanism.
- [ ] Update Privacy Policy before adding any analytics tag.
- [ ] Configure GA4 privacy settings (Google Signals, ads personalisation, data sharing and retention) and verify the live property settings.
- [ ] Implement only after the above gates; preserve strict CSP and legal CI checks.
- [ ] Complete network, accessibility, privacy and performance QA before production deployment.
- [ ] Verify GA4 Realtime after a consented test visit.

## Rollback

The safest current rollback state is the production site as it stands: no analytics tag, no analytics cookies set by Learnora's page code, no new third-party requests, and the existing restrictive CSP unchanged. If a future GA4 release fails any test, revert the tag/consent commit and redeploy the last verified production build.
