# William's Pharmacy — website

Public, informational website for **William's Pharmacy**, Tower Road, Birkirkara
BKR 4018, Malta. No e-commerce. Built with Next.js (App Router), TypeScript and
Tailwind CSS, and intended to deploy on Vercel.

> **Everything is a placeholder.** All copy and images are provisional and clearly
> marked so the pharmacist can replace them before launch (see below).

## Run it

```bash
pnpm install
pnpm dev         # http://localhost:3000
pnpm build       # production build
pnpm lint        # ESLint
pnpm format      # Prettier (Tailwind class sorting)
```

## Routes

`/` · `/catalog` · `/about` · `/team` · `/gallery` · `/contact`
Plus generated `/(sitemap.xml)` and `/(robots.txt)`.

## Where to replace placeholders

| What                                                     | Where                                                                                                                  |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Business info (phone, email, URL, opening hours)         | `src/content/site.ts` — fields prefixed `PLACEHOLDER_`                                                                 |
| Navigation labels/order                                  | `src/content/site.ts` (`nav`)                                                                                          |
| Page copy (home, about, team, gallery, contact, catalog) | `src/content/pages.ts` — fields prefixed `PLACEHOLDER_`                                                                |
| Products                                                 | `src/data/products.ts` — always read via `getProducts()`, never the raw array                                          |
| Images                                                   | `public/images/**` — replace the placeholder SVGs (products, team, gallery, hero, storefront, Open Graph)              |
| SEO / structured data                                    | `src/lib/seo.ts` (metadata helper + Pharmacy JSON-LD)                                                                  |
| Contact form backend                                     | `src/app/contact/ContactForm.tsx` — currently shows a "not wired yet" note on submit                                   |
| Google Maps embed                                        | `src/app/contact/page.tsx` — placeholder box; add behind a cookie-consent gate, then allow the frame origin in the CSP |

## Design tokens

Colours and fonts live in **`src/app/globals.css`** under `@theme` (Tailwind v4
configures the theme in CSS, not `tailwind.config`).

- **Navy** (primary) `navy-50…900`, base `#152442`.
- **Gold** (accent) `gold-50…900`, base `#C4A157`. Accents and large headings
  only — never body text on white (contrast).
- Fonts: **Fraunces** (display, `font-display`) and **Inter** (body, `font-sans`),
  self-hosted via `next/font`.

## Notes

- Security headers, including a basic Content-Security-Policy, are set in
  `next.config.ts`.
- Accessibility target is WCAG 2.2 AA: semantic HTML, visible focus, alt text,
  and animations that respect `prefers-reduced-motion`.
- English only; no i18n library yet. Copy is centralised in `src/content/*` to
  make adding languages easier later.

See `CLAUDE.md` for the full conventions.
