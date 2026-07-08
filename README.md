# BTech — Digital Solutions Agency Website

> "Transforming Ideas Into Digital Experiences"

A premium, production-ready, multilingual agency website built with React 19, TypeScript, Vite, and Tailwind CSS v4. Designed to showcase a digital agency's services, portfolio, and process while converting visitors into clients.

---

## ✨ Highlights

- **Full agency site** — Hero, About, Services, Process, Portfolio (filterable + modal), Pricing (3 tiers), Why Choose Us, Testimonials, Technologies, FAQ, and Contact, plus a deliberately minimal Navbar (Home, Services, Portfolio, Pricing, Contact) and Footer.
- **Full-page scroll-snap on desktop** — each section settles into place as you scroll on large screens, with natural scrolling preserved on tablet/mobile and automatic fallback for `prefers-reduced-motion`.
- **Trilingual**: English, French, and Arabic — powered by `i18next`, with automatic **RTL layout** for Arabic (handled globally via `dir`/`lang` on `<html>`, not per component).
- **Dark / light mode** with system-preference detection and persistence.
- **Smooth, purposeful animation** throughout via Framer Motion (fade/slide/scale, stagger, hover-lift, scroll reveal, count-up stats, marquee).
- **Accessible & responsive** — semantic markup, keyboard navigation, visible focus states, ARIA attributes on interactive widgets (modal, accordion, menus).
- **Type-safe, validated contact form** using React Hook Form + Zod, with MUI Snackbar/Alert for submit feedback.
- **Clean, scalable architecture** — typed data files, reusable UI primitives, section components, custom hooks, and animation variants.
- **Performance-minded** — route-level code splitting, a hand-written icon registry (no barrel-import of the entire icon set), manual vendor chunking, and lazy-loaded pages.

---

## 🧱 Tech Stack

| Category           | Tools                                                    |
| ------------------ | -------------------------------------------------------- |
| Core               | React 19, TypeScript, Vite                               |
| Styling            | Tailwind CSS v4 (CSS-based theme, no config file needed) |
| Animation          | Framer Motion                                            |
| Forms & Validation | React Hook Form, Zod                                     |
| UI                 | Material UI (Snackbar/Alert only), Lucide React icons    |
| Routing            | React Router DOM                                         |
| i18n               | i18next, react-i18next, i18next-browser-languagedetector |
| Quality            | ESLint 9 (flat config), Prettier, TypeScript strict mode |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Type-check the project
npm run typecheck

# Lint the project
npm run lint

# Format with Prettier
npm run format

# Build for production
npm run build

# Preview the production build
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

---

## 📁 Project Structure

```
src/
├── animations/           # Reusable Framer Motion variants (fadeUp, staggerContainer, etc.)
├── components/
│   ├── common/            # Seo, LoadingScreen, ErrorBoundary, ScrollProgressBar, BackToTop
│   ├── layout/             # Navbar, Footer, LanguageSwitcher, ThemeToggle
│   ├── sections/           # One component per homepage section (Hero, About, Services, ...)
│   └── ui/                 # Design-system primitives: Button, Card, Badge, Modal, Accordion, Icon...
├── constants/             # Site-wide constants (nav items, languages, stats)
├── contexts/              # ThemeContext (light/dark) + its context object
├── data/                  # Typed, structured fake data (services, portfolio, testimonials, ...)
├── hooks/                 # useTheme, useLocaleDirection, useActiveSection, useCountUp, ...
├── i18n/
│   └── locales/
│       ├── en/translation.json
│       ├── fr/translation.json
│       └── ar/translation.json
├── layouts/               # MainLayout (Navbar + Outlet + Footer + floating UI)
├── lib/                   # utils.ts (cn, scrollToId), validation.ts (Zod schemas)
├── pages/                 # Home, NotFound — lazy-loaded route targets
├── routes/                # AppRoutes (React Router + Suspense)
├── styles/                # Tailwind v4 theme & global CSS
├── theme/                 # MUI theme matching the brand palette
├── types/                 # Shared TypeScript types
├── App.tsx
└── main.tsx
```

This mirrors a standard enterprise front-end layout: **data** is separated from **presentation**, **UI primitives** are separated from **page sections**, and **cross-cutting concerns** (theme, i18n, animation variants) live in their own dedicated folders.

---

## 🖱️ Full-Page Scroll Snapping (Desktop)

On large screens (`≥1024px`) the page uses CSS Scroll Snap so each major section settles into place as you scroll, similar to premium storytelling sites. This is implemented purely in CSS (`.snap-root` on `<html>`, `.snap-section` on each section — see `src/styles/index.css`) and:

- **Disables itself automatically** below `1024px`, so tablets and phones get natural, unrestricted scrolling.
- **Respects `prefers-reduced-motion`** — snapping and the Hero's floating background/tile animations pause automatically when the user has reduced motion enabled, or when the section scrolls out of view.
- Uses `scroll-snap-type: y mandatory` with `scroll-snap-align: start`, so short sections feel like discrete "pages" while longer sections (Services, Portfolio) can still be scrolled through freely before snapping to the next section.

## 🌍 Internationalization & RTL

- Language is controlled by `i18next`, initialized in `src/i18n/index.ts` with English, French, and Arabic resources.
- `useLocaleDirection()` (in `src/hooks`) is called once, at the app root, and sets `document.documentElement.dir` and `lang` whenever the active language changes. Because this is applied at the document root rather than per-component, **all layout mirroring (RTL) is handled natively by the browser** using Tailwind's logical properties (`ps-`, `pe-`, `start-`, `end-`, `rtl:` variants), so components don't need RTL-specific branching.
- The language switcher lives in the navbar and persists the choice to `localStorage`.

## 🌓 Dark Mode

`ThemeContext` (in `src/contexts`) detects the system preference on first load, persists the user's choice, and toggles a `dark` class on `<html>`. Tailwind v4's `dark:` variant (configured via `@custom-variant dark`) styles every component accordingly.

---

## 🧩 Replacing the Placeholder Content

All content is intentionally kept in typed data files so it can be swapped without touching components:

- `src/data/services.ts` — services grid
- `src/data/portfolio.ts` — portfolio projects (images use placeholder URLs — swap `image`/`gallery` with real asset paths)
- `src/data/testimonials.ts` — client testimonials
- `src/data/technologies.ts` — tech stack marquee
- `src/data/process.ts` — process timeline steps
- `src/data/values.ts` — company values, timeline years, "why choose us" items, FAQ ids
- `src/i18n/locales/*/translation.json` — all UI copy and long-form text, per language

The contact form in `src/components/sections/ContactForm.tsx` currently simulates a network request. Wire it up to your backend/email provider inside the `onSubmit` handler.

---

## ✅ Code Quality

- **TypeScript strict mode** is enabled (`noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`, etc.) — the project builds with zero type errors.
- **ESLint 9** flat config combines `@typescript-eslint`, `react-hooks`, `react-refresh`, and `jsx-a11y` recommended rule sets — the project lints with zero errors or warnings.
- **Prettier** is configured for consistent formatting (no semicolons, single quotes, trailing commas).

---

## ⚡ Performance Notes

- Pages (`Home`, `NotFound`) are lazy-loaded via `React.lazy` + `Suspense`, so the initial JS payload only includes what's needed for the first paint.
- Icons are imported individually into a small, explicit registry (`src/components/ui/Icon.tsx`) rather than importing the entire `lucide-react` icon set, keeping the main bundle lean.
- Vendor code is split into dedicated chunks (`vendor-react`, `vendor-motion`, `vendor-mui`, `vendor-i18n`) for better long-term caching.
- Images use `loading="lazy"` and are served at reasonable placeholder resolutions — replace with an image CDN or next-gen formats (WebP/AVIF) in production.
- Respect for `prefers-reduced-motion` is built into the global stylesheet.

---

## 📦 Deployment

The app builds to static files in `dist/` and can be deployed to any static host:

```bash
npm run build
# then upload the `dist/` folder to Vercel, Netlify, Cloudflare Pages, S3 + CloudFront, etc.
```

No server-side runtime is required.

---

## 📄 License

This project is a client deliverable template for **BTech**. Replace placeholder content, images, and legal pages before production use.
#   b t e c h  
 