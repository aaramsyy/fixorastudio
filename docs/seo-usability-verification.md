# SEO and usability verification ? 2026-11-27

## Changes
- Mobile and reduced-motion visits do not hydrate decorative canvas effects. Desktop keeps the existing visual effects.
- Native browser scrolling; no automatic language redirect.
- Portfolio renders as static HTML; removed unverified demo metrics.
- Visible telephone contact and ProfessionalService structured data with existing business address.
- Bilingual project preparation guidance and native FAQ disclosures. Contextual service links on the Indonesian homepage.
- Skip link, accessible language-switch label, responsive navigation, expandable service cards and vertically listed mobile services.

## Verification
- Production build: all four routes generated successfully.
- Chromium: four routes at 320, 375, 430, 768, 1024 and 1440 CSS px; no document horizontal overflow; one H1 each.
- Navigation and language control: no bounding-box overlap at 320, 768, 1024 or 1440 px.
- Keyboard: skip link focuses main; native FAQ toggles with Enter.
- Indonesian homepage: doubled paragraph/list/address/summary text at 320 px; no document overflow or clipped service cards. This is text stress testing, not a substitute for browser zoom or OS text scaling.
- Reduced-motion desktop: both decorative islands remain unhydrated.
- Homepage internal fragment destinations exist; structured data parses.
- Lighthouse local production mobile run: performance 82, LCP 1297 ms, TBT 744 ms, CLS 0. Results are lab measurements, not production field data; third-party analytics and machine load affect results.
- Final Indonesian homepage Lighthouse: accessibility 100, SEO 100, no failed audits. Automated scores do not establish full WCAG conformance.
- Desktop and mobile screenshots inspected.

## Remaining validation
- Real iPhone Duo / physical fold transitions, Safari, VoiceOver and TalkBack were not tested.
- Full browser zoom and real-user Core Web Vitals require further validation.
- GTM accounts for substantial remaining script execution. Review container tags without silently disabling tracking.
- Production redirect probe was blocked by local DNS resolution failure; no claim of end-to-end redirect verification.
- Search Console indexing, actual portfolio evidence, qualified backlinks and business-profile ownership need account data or business input.
