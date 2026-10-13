# Final verification

The deployable `dist` build was checked in Microsoft Edge using Playwright. Source formatting and the Vite production build pass.

## Responsive checks

| Viewport   | Result |
| ---------- | ------ |
| 1920 × 864 | Pass   |
| 1492 × 692 | Pass   |
| 1440 × 900 | Pass   |
| 1280 × 720 | Pass   |
| 1024 × 600 | Pass   |
| 768 × 900  | Pass   |
| 390 × 844  | Pass   |
| 320 × 568  | Pass   |

No horizontal overflow or broken images was found. The full desktop hero artwork and actions fit within the tested desktop viewports. The enlarged desktop heading retains its intended three lines. Desktop and mobile screenshots were visually reviewed.

## Interaction checks

- Sticky navigation works, with unchanged content coordinates before and after scrolling; the background changes independently.
- Destinations scrolls to the destination cards. Hotels and Flights open search-preview dialogs. Section links target existing IDs.
- Both logos return to the top at `index.html` without a hash.
- The complete heart icon clears the floating Rome card, and save/unsave works at desktop, tablet, and mobile widths.
- Login and Sign up open and validate frontend demo forms. Submitted fields are cleared without sending requests or storing credentials.
- Account dialogs close with Escape, the close button, or a backdrop click. Focus stays inside the dialog with Tab and Shift+Tab, and closing restores focus. Body scrolling is restored.
- Language selection updates the displayed preference. Testimonial arrows and dots update the active content.
- Newsletter email validation blocks invalid input and displays the correct demo feedback for valid input.
- Unavailable destinations remain non-interactive, with no placeholder external redirects.
- Scroll reveals and the service-card hover layering work with motion enabled. Reduced motion keeps content visible without entrance animation.
- The page title uses a regular hyphen.
- No browser JavaScript errors, console errors, or failed resource requests were observed in the production checks.

## Fixes made during final review

The account dialog now explicitly wraps keyboard focus in both directions. The desktop hero text column was widened slightly so the increased heading size does not create an unwanted fourth line. Account fields use a single input focus outline; the duplicate outline around their labels has been removed and verified.

## Repository preparation

Temporary verification scripts and screenshots, the local npm cache, and unused decorative code/assets were removed. Git ignore rules were checked using a temporary repository; they exclude dependencies, build output, caches, reference screenshots, environment files, hosting state, and the local development guide. The project folder itself has not been initialized as a Git repository or pushed.

## Verification limits

Browser checks were performed in Microsoft Edge on Windows. Safari, Firefox, and physical mobile devices were not tested. No Lighthouse score or WCAG conformance certification is claimed.

Account and newsletter functionality remains a frontend demo. Translated content, a demo video, actual social-profile URLs, and app-store listings were not supplied. These are documented scope limits rather than connected services.

Latest interaction update: destination cards show trip-details dialogs with sample price, location, duration, and a booking-steps CTA. Language choices are limited to English. Unavailable footer labels remain static; Mobile remains a working section link.
