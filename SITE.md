# Clinton 075 Group — Website

A production-ready **Next.js 15** marketing and commerce website for a Nigerian multi-service company, built to the specification in [`README.md`](./README.md).

One corporate brand. Four divisions: **Marine Services**, **Fashion**, **Real Estate**, **AI Video Advertising**.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

Requires Node 18.18+ (tested on Node 22).

---

## What is built

### Corporate
| Route | Purpose |
| --- | --- |
| `/` | Homepage — cinematic hero, division switcher, about, four divisions, why-us, featured products, featured properties, stats, portfolio, testimonials, insights, enquiry form, footer |
| `/about` | Company story, mission, vision, values, group structure |
| `/services` | Division comparison hub and engagement model |
| `/portfolio` | Filterable project portfolio (all four divisions) |
| `/testimonials` | Client feedback |
| `/faqs` | Grouped FAQ accordion + FAQPage structured data |
| `/careers` | Open roles + application form |
| `/contact` | Contact details, division emails, map panel, enquiry form |
| `/quote` | Unified quotation request across all divisions |
| `/search` | Site-wide grouped search (products, properties, services, articles) |
| `/admin` | Read-only staff dashboard preview (modules, KPIs, roles) |
| `/legal/*` | Privacy, terms, payments, delivery, cookies, property disclaimer |

### Marine (Division 01)
`/marine` · `/marine/services` · `/marine/engines` · `/marine/booking`
Service catalogue, engine table (25–400 HP), indicative service packages, full booking form with engine details, image upload and compatibility-check CTA.

### Fashion (Division 02)
`/fashion` · `/fashion/lookbook` · `/fashion/product/[slug]` · `/cart` · `/checkout` · `/wishlist`
Filterable shop (category, price, search, stock), product pages with colour/size/qty selection, wishlist, cart with discount codes, validated multi-step checkout, guest order confirmation.

### Real Estate (Division 03)
`/real-estate` · `/real-estate/[slug]`
Advanced property search (purpose, type, city, bedrooms, price, furnished, keyword), listing pages with gallery lightbox, specifications, documentation block, location panel, inspection booking form, WhatsApp enquiry and save-to-list.

### AI Video Advertising (Division 04)
`/ai-video` · `/ai-video/work` · `/ai-video/quote`
Creative services, case-study cards, three packages, detailed production brief form (audience, duration, style, platform, voice-over, budget, file upload).

### Customer account
`/account` — orders, enquiries/quotes, saved pieces, saved properties, profile.
`/track` — order tracking by reference.
Cart, wishlist, orders, enquiries and saved properties persist in `localStorage` via a React context store.

---

## Design system

| Token | Value |
| --- | --- |
| Midnight | `#101820` |
| Navy | `#253746` |
| Gold | `#D6B46A` (light `#E7D3A1`, dark `#A9873F`) |
| Ivory | `#F4F2ED` |
| Slate | `#777F85` |
| Display font | Cormorant Garamond (self-hosted via `@fontsource`) |
| Body font | Inter Variable (self-hosted) |

- Tailwind CSS with custom tokens in `tailwind.config.ts`, component classes (`.btn-gold`, `.field`, `.display-lg`…) in `src/app/globals.css`.
- Scroll-reveal animations use a small `IntersectionObserver` wrapper (`Reveal.tsx`) rather than an animation library — no extra runtime cost.
- Fully responsive, mobile drawer navigation, mega-menu on desktop, sticky WhatsApp floating action button with per-division deep links.
- Respects `prefers-reduced-motion`.

---

## Project structure

```
src/
  app/                 # App Router pages (47 routes, mostly static)
    layout.tsx         # Metadata, Organization schema, header/footer, store provider
    sitemap.ts robots.ts icon.svg
  components/
    Header.tsx Footer.tsx Logo.tsx PageHero.tsx SectionHeading.tsx
    Reveal.tsx StatsRow.tsx WhatsAppFab.tsx EnquiryForm.tsx LegalPage.tsx
    shop/              # ProductCard, ShopBrowser, ProductDetail
    property/          # PropertyBrowser, PropertyGallery, PropertyActions
    account/Dashboard.tsx
    store/StoreProvider.tsx
  data/                # Typed content layer (site, products, properties, services, projects, blog)
public/images/         # Generated brand imagery
```

All copy, pricing, listings and articles live in `src/data/*` as typed objects — edit content there without touching layout code.

---

## SEO & accessibility

- Per-page titles, descriptions, canonical URLs, Open Graph and Twitter cards.
- `Organization`, `Product`, `RealEstateListing`, `Article` and `FAQPage` JSON-LD.
- `sitemap.xml` and `robots.txt` generated from the data layer; account, cart, checkout and admin excluded.
- Descriptive image alt text, skip-to-content link, visible focus rings, labelled form fields with inline validation messages, semantic landmarks, `aria-pressed`/`aria-expanded` on interactive controls.

---

## Demo limitations (before going live)

These are deliberate, documented gaps in the static build:

1. **Persistence is browser-local.** Cart, wishlist, orders and enquiries use `localStorage`. Add PostgreSQL + an auth provider (e.g. NextAuth/Auth.js) for real accounts.
2. **Payments are not processed.** Checkout records an order and confirms it; no card data is collected. Integrate Paystack or Flutterwave with server-side verification and a webhook.
3. **Enquiries are not delivered.** The forms validate and show a reference, then store locally. Connect Resend (email), a CRM, or a database handler in `EnquiryForm.tsx`.
4. **Placeholder business details.** Phone, email, RC number, social handles and office address are in `src/data/site.ts` — replace with real ones. Add your logo file and favicon if you have brand assets.
5. **Placeholder media.** Images are AI-generated brand visuals; portfolio video previews are placeholders. Metrics and testimonials are illustrative and must be replaced with substantiated figures and written client permission.
6. **`/admin` is unauthenticated** for review. Protect or remove it before deployment.
7. **Legal pages are drafts.** Have them reviewed by a qualified Nigerian legal professional (NDPA 2023 compliance included).

---

## Recommended next integrations

| Need | Suggested |
| --- | --- |
| Database | PostgreSQL (Neon/Supabase) + Prisma |
| Auth | Auth.js with role-based access (see roles in `/admin`) |
| Payments | Paystack (primary), Flutterwave (fallback) |
| Email | Resend for transactional + enquiry notifications |
| Media | Cloudinary for product/gallery images and campaign video |
| Analytics | Google Analytics 4 + Search Console verification |
| Maps | Google Maps embed on contact and property pages |
| Monitoring | Sentry (errors) + uptime check |
