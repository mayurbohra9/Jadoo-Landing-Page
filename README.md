# Jadoo landing page

A responsive travel landing page built with React, JavaScript, Vite, and Tailwind CSS 4, based on the supplied Jadoo design.

## Setup

Requires Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

Use the local URL printed by Vite. Build and preview the production version with:

```sh
npm run build
npm run preview
```

## Project structure

```text
public/                  Favicon
src/
  assets/                Images, icons, logos, decorations, and licensed fonts
  components/layout/     Sticky navigation and footer
  components/ui/         Shared headings, icons, dialogs, menus, and scroll reveals
  data/                  Repeated content and asset references
  sections/              Individual landing-page sections
  styles/                Tailwind theme and custom styles
  App.jsx                Page composition
  main.jsx               React entry point
docs/FINAL_CHECKS.md      Production verification results
```

The page includes a hero, services, destinations, booking steps, testimonials, partner logos, newsletter, and footer.

## Behavior

- The navbar stays sticky. Its background becomes compact after scrolling while the content keeps the same position and size.
- Both logos return to the top at `index.html` without a hash.
- Destinations and Bookings scroll to their sections. Hotels and Flights open themed search-preview dialogs with an explicit notice that live availability is unavailable. Footer Mobile scrolls to the app area.
- Login and Sign up open accessible demo dialogs with native validation, keyboard focus containment, Escape/backdrop dismissal, and focus restoration.
- Testimonial controls change the active quote; the heart toggles the saved trip state.
- The newsletter validates email input and displays a preview message.
- The language menu offers English only until translations are supplied.
- Destinations without supplied content or URLs remain non-interactive rather than redirecting to unrelated pages.

Account and newsletter forms are frontend demonstrations. They do not authenticate, create accounts, send requests, or store entered details. Submitted account fields are cleared. No booking, payment, mailing, or authentication backend is included. No demo video, translated copy, social-profile URLs, or app-store listings were supplied.

## Styling and performance

Tailwind handles responsive layout, spacing, typography, and theme colors. Custom CSS handles decorative shapes, layered shadows, and animation. Images use optimized WebP assets; the hero retains transparency. SVG icons and the supplied plus decorations preserve their original artwork. Poppins and Volkhov are served locally with their licenses included.

Scroll reveals use Intersection Observer and staggered CSS transitions. Observers disconnect after revealing content. Hover effects use transforms and opacity, and reduced-motion preferences disable decorative movement. Below-the-fold images are lazy-loaded.

## Formatting and verification

```sh
npx prettier --check .
npx prettier --write .
```

Production build, formatting, responsive layouts, images, navigation, forms, modal focus handling, and motion were verified in Microsoft Edge on Windows. Eight viewport widths from 320 to 1920 pixels were checked. Safari, Firefox, and physical mobile devices were not tested. See [verification results](docs/FINAL_CHECKS.md).

## Deployment

For Vercel or Netlify:

- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none required

Commit source files, required assets, configuration, `package.json`, `package-lock.json`, and public documentation. The ignore rules exclude dependencies, build output, caches, environment files, logs, local QA artifacts, reference screenshots, hosting state, and the private development guide.

The original supplied assets outside the project have not been modified.

Destination cards open accessible trip-details dialogs showing location, sample price, duration, and a CTA to the existing booking steps. Unavailable footer labels have no click action or hover animation. No video or verified social/app URLs have been supplied, so those controls remain inactive.
