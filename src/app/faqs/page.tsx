import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { faqs, site } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQs — Orders, Bookings, Payments & Properties",
  description:
    "Answers to common questions about working with Clinton Global Investment: quotations, payments, delivery, bookings and property documentation.",
  alternates: { canonical: "/faqs" },
};

const grouped = [
  {
    group: "Working with us",
    items: faqs.slice(0, 3),
  },
  {
    group: "Payments & orders",
    items: [
      faqs[3],
      faqs[4],
      {
        q: "What is your returns policy?",
        a: "Unworn fashion pieces with tags can be returned within 14 days of delivery for a refund or exchange, excluding bespoke and made-to-measure items. Return delivery is at the customer's cost unless the item was faulty or incorrect. Full terms are on our delivery and returns page.",
      },
      {
        q: "Do you deliver outside Lagos?",
        a: "Yes. Fashion orders are delivered nationwide within 2–5 working days, and internationally on request. Marine and property services are limited to Lagos and the coastal states, while AI video production is location-independent.",
      },
    ],
  },
  {
    group: "Properties",
    items: [
      faqs[5],
      {
        q: "What fees should I expect on a property?",
        a: "Agency fees and any legal or documentation costs are disclosed before you inspect. We do not collect payment for a property without a written agreement and your solicitor's involvement.",
      },
      {
        q: "Can I inspect a property before paying anything?",
        a: "Yes. Inspections are booked and attended by our team. You pay no fee to inspect a listing; any agency fee applies only on a transaction you choose to proceed with, and is stated up front.",
      },
    ],
  },
];

export default function FaqsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow="Help centre"
        title={<>Frequently asked questions.</>}
        description="Clear answers on quotations, payments, delivery, bookings and property documentation. If something is still unclear, ask us directly."
        image="/images/division-marine.jpg"
        crumbs={[{ label: "FAQs" }]}
      />

      <div className="shell py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="space-y-10">
            {grouped.map((g) => (
              <section key={g.group}>
                <h2 className="font-display text-2xl">{g.group}</h2>
                <div className="mt-4 space-y-2">
                  {g.items.map((f) => (
                    <details key={f.q} className="group rounded-xl border border-midnight/10 bg-white p-5">
                      <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-medium text-midnight">
                        {f.q}
                        <span className="shrink-0 text-lg text-gold transition group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-midnight/60">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}

            <div className="rounded-xl border border-midnight/10 bg-white p-6">
              <h2 className="font-display text-xl">Still need an answer?</h2>
              <p className="mt-2 text-sm text-midnight/60">
                Message the team on WhatsApp or call the office. We answer technical questions without obligation.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-gold">WhatsApp us</a>
                <a href={`tel:${site.phoneHref}`} className="btn-outline">Call {site.phone}</a>
              </div>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-midnight/10 bg-white p-6">
              <h2 className="font-display text-xl">Ask a question</h2>
              <p className="mt-1.5 text-xs text-midnight/50">
                We will answer by email and, where useful, publish the answer here anonymously.
              </p>
              <div className="mt-4">
                <EnquiryForm
                  enquiryType="General"
                  referencePrefix="CGI-FAQ"
                  submitLabel="Send question"
                  tone="light"
                  compact
                  fields={[
                    { name: "name", label: "Full name", required: true },
                    { name: "email", label: "Email", type: "email", required: true },
                    { name: "division", label: "Related to", type: "select", options: ["Marine", "Fashion", "Real Estate", "AI Video", "General"] },
                    { name: "message", label: "Your question", type: "textarea", required: true },
                  ]}
                />
              </div>
            </div>
            <div className="rounded-xl border border-midnight/10 bg-white p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">Useful pages</p>
              <div className="mt-3 space-y-2">
                {[
                  { l: "Delivery & Returns", h: "/legal/delivery" },
                  { l: "Payment & Refund Policy", h: "/legal/payments" },
                  { l: "Property Disclaimer", h: "/legal/property-disclaimer" },
                  { l: "Privacy Policy", h: "/legal/privacy" },
                ].map((l) => (
                  <Link key={l.h} href={l.h} className="flex items-center justify-between rounded-lg border border-midnight/10 px-4 py-2.5 text-sm text-midnight/70 transition hover:border-gold hover:text-gold-dark">
                    {l.l}<span>→</span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
