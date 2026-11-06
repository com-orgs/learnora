# Phase 16 — Financial Literacy source port (6 November 2026)

## Scope
Ported only the reviewed learner-facing source sections from PR #16 into the preview branch. Also ported the narrowly scoped simple-interest explanation that makes clear the formula is a simplified fixed-principal classroom model. No complete PR page was copied.

## Files updated
- `financial-literacy/budgeting.html`
- `financial-literacy/savings-interest.html`
- `financial-literacy/unit-prices.html`

## Source verification
- Budgeting: CFPB's “Learning about budgets” and “Budgeting for needs and wants” activities were verified in search results as middle-school (Grades 6–8) financial education activities. The lesson uses fictional classroom units and says it is not personal financial advice.
- Savings: CFPB's “School-age children and saving” page was opened and checked; it discusses savings goals and age-appropriate saving. CFPB's compound-interest explanation was checked. The simple-interest formula source is a CFPB classroom activity about borrowing, not a savings-account formula; the lesson's source note explicitly says so. The lesson now labels I = P × r × t as a simplified fixed-principal model and warns that actual savings accounts may calculate interest daily or compound interest according to their terms.
- Unit pricing: FTC's “The case of the shrinking packaging” was checked; it explains why unit price helps compare the amount received for the price. Consumer.gov's “Saving Money When You Shop” PDF was checked and recommends comparing prices and considering whether a purchase is needed. The lesson uses fictional classroom units and does not recommend a specific shop or product.

## Calculation spot checks
- Budget example: 30 available − (12 transport + 8 supplies + 5 savings) = 5 unallocated.
- Savings goal: (60 target − 15 already saved) ÷ 9 weeks = 5 units per week.
- Simple interest classroom example: 100 × 0.05 × 2 = 10 units.
- Unit prices: 12 ÷ 4 = 3 per notebook; 15 ÷ 6 = 2.5 per notebook; 10 ÷ 5 = 2 per pen; 6 ÷ 2 kg = 3 per kg.

## Safety and release boundaries
- No bank, savings product, loan, investment, shop or brand is recommended.
- No personal financial details are requested; the examples remain fictional.
- No third-party scripts, analytics, ads, cookies, user data collection or quiz behaviour changes were introduced.
- The change is preview-only. No merge, production deployment or indexing request.
- Browser interaction, screen-reader and print-preview QA remain release gates.
