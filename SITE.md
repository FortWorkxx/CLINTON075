# CLINTON GLOBAL INVESTMENT — Website implementation notes

Premium Nigerian multi-division website built with Next.js 15, React 19, Tailwind CSS, and the blueprint in `README.md`.

## Quick start

```bash
npm install
npm run dev
npm run build
```

## Current build

The app includes a cinematic corporate homepage, division directory, marine service and booking pages, property discovery and property details, fashion catalogue/cart/checkout/wishlist, quotation/contact flows, customer account preview, staff dashboard preview, legal drafts, search, insights, WhatsApp enquiry menu, and a guided assistant preview.

Division 04 is presented as **AI Operator**, matching the supplied blueprint. Its exact real-world scope remains unconfirmed, so the division is published as *proposed*:

- `/ai-operator` — status notice, five proposed capability areas (assistants, process automation, content operations, integrations, consulting/training), a four-step delivery sequence, engagement models with **no invented prices**, responsible-automation guardrails, a brief form, and division FAQs.
- `/ai-operator/quote` — a project brief covering systems, enquiry volume, budget band, timeline and data handling, with an explicit "what we will not promise" list.
- `/portfolio` also carries two honest internal AI Operator **concepts** (not client case studies).
- Historic `/ai-video/*` URLs permanently redirect to `/ai-operator`; the old AI Video page tree has been removed, and all site copy, careers, admin, legal and blog references now describe AI Operator instead of video advertising.

Nothing in this build claims delivered AI client work, published rates, testimonials or performance statistics. Those must be added only once substantiated.

## Brand tokens

| Token | Value |
| --- | --- |
| Midnight Navy | `#101C2A` |
| Champagne Gold | `#D4AF70` |
| Ivory White | `#F7F7F4` |
| Charcoal | `#272B30` |
| Display / navigation | Manrope Variable |
| Body | Inter Variable |

## Pre-launch verification required

Blueprint Section 16 contains business details that have not been confirmed. Do not treat content currently in the demo data layer as verified company information. Before public launch, review `src/data/site.ts`, `src/data/services.ts`, `src/data/products.ts`, `src/data/properties.ts`, `src/data/projects.ts`, `src/data/blog.ts`, and the contact/legal page copy. In particular confirm:

- Operating location, official contact details, company registration, domain, and social accounts.
- Which marine, property, fashion, and AI Operator services/products are genuinely offered, and where.
- Availability and accuracy of all product prices, stock, property listings, project examples, delivery terms, and operational claims.
- AI Operator's actual meaning and whether it is a service division at all.
- Nigerian data protection disclosures, terms, returns, property disclaimers, and division-specific conditions with qualified counsel.

Verified stats and customer testimonials are deliberately omitted from public components/data until substantiated and approved. Do not add estimates or placeholders as factual social proof.

## Demo limitations

- Cart, wishlist, orders, and account data persist only in browser `localStorage`; there is no real database or authentication.
- Checkout does not process payments. Integrate Paystack or Flutterwave with server-side verification and webhooks.
- Enquiries are not delivered to staff; connect a backend, CRM, and email/SMS provider.
- AI Operator engagement models show "quoted after scoping" deliberately. Do not publish rates until the division's scope and pricing are approved.
- `/admin` is an unauthenticated, read-only preview and must be protected or removed before production.
- The Clinton AI Assistant is a guided navigation preview, not an AI model or live customer-support connection. An assistant built for a client would follow the guardrails listed on `/ai-operator`.
- Legal copy is draft content, not legal advice.
