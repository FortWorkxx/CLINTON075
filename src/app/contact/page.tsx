import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us — Lagos Head Office",
  description:
    "Contact Clinton Global Investment in Lekki, Lagos. Phone, WhatsApp, email and office visits for all four divisions.",
  alternates: { canonical: "/contact" },
};

const divisionContacts = [
  { d: "Marine Services", note: "Engine enquiries, servicing, spare parts" },
  { d: "Fashion", note: "Orders, sizing, bespoke appointments" },
  { d: "Real Estate", note: "Listings, inspections, management" },
  { d: "AI Video Advertising", note: "Campaign briefs and quotations" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let&apos;s talk.</>}
        description="One office, four teams. Call, message or visit — we answer technical questions without obligation."
        image="/images/hero-marina.jpg"
        crumbs={[{ label: "Contact" }]}
      />

      <div className="shell py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { l: "Head office", v: site.address, h: undefined },
                { l: "Phone", v: site.phone, h: `tel:${site.phoneHref}` },
                { l: "WhatsApp", v: "Message the team", h: `https://wa.me/${site.whatsapp}` },
                { l: "Email", v: site.email, h: `mailto:${site.email}` },
                { l: "Opening hours", v: site.hours, h: undefined },
                { l: "Registration", v: site.rc, h: undefined },
              ].map((c) => (
                <div key={c.l} className="rounded-xl border border-midnight/10 bg-white p-5">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-midnight/40">{c.l}</p>
                  {c.h ? (
                    <a href={c.h} target={c.h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="mt-1.5 block text-sm font-medium text-midnight transition hover:text-gold-dark">
                      {c.v}
                    </a>
                  ) : (
                    <p className="mt-1.5 text-sm text-midnight/70">{c.v}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-midnight/10 bg-white p-5">
              <p className="text-[10px] uppercase tracking-[0.16em] text-midnight/40">Division contacts</p>
              <ul className="mt-3 divide-y divide-midnight/10">
                {divisionContacts.map((d) => (
                  <li key={d.d} className="flex flex-wrap items-baseline justify-between gap-1 py-2.5">
                    <div>
                      <p className="text-sm font-medium text-midnight">{d.d}</p>
                      <p className="text-[11px] text-midnight/45">{d.note}</p>
                    </div>
                    <a
                      href={`mailto:${site.email}?subject=${encodeURIComponent(`${d.d} enquiry`)}`}
                      className="text-[11px] text-gold-dark hover:underline"
                    >
                      {site.email}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[10px] text-midnight/35">
                All division enquiries route to our main mailbox. Add division-specific addresses here once they
                exist.
              </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-midnight/10">
              <div className="relative grid h-64 place-items-center bg-[linear-gradient(135deg,#eae6dd_25%,#f4f2ed_25%,#f4f2ed_50%,#eae6dd_50%,#eae6dd_75%,#f4f2ed_75%)] bg-[length:28px_28px]">
                <div className="rounded-xl bg-white/95 px-6 py-5 text-center shadow-card">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-midnight/40">Head office</p>
                  <p className="mt-1 font-display text-lg text-midnight">Lekki Phase 1, Lagos</p>
                  <p className="mt-1 text-[11px] text-midnight/45">{site.address}</p>
                  <a
                    href="https://maps.google.com/?q=Admiralty+Way+Lekki+Phase+1+Lagos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-dark hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-midnight/10 bg-white p-6 sm:p-8">
            <h2 className="font-display text-2xl">Send us a message</h2>
            <p className="mt-2 text-sm text-midnight/55">
              Use the general form and we will route your enquiry to the right division.
            </p>
            <div className="mt-6">
              <EnquiryForm
                enquiryType="General"
                referencePrefix="CGI"
                submitLabel="Send message"
                tone="light"
                fields={[
                  { name: "name", label: "Full name", required: true },
                  { name: "email", label: "Email address", type: "email", required: true },
                  { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
                  { name: "company", label: "Company (optional)" },
                  { name: "division", label: "Division", type: "select", required: true, options: ["Marine Services", "Fashion", "Real Estate", "AI Video Advertising", "General / other"] },
                  { name: "subject", label: "Subject", required: true },
                  { name: "message", label: "Message", type: "textarea", required: true },
                ]}
              />
            </div>
            <p className="mt-6 border-t border-midnight/10 pt-4 text-[11px] leading-relaxed text-midnight/45">
              Prefer a faster route? WhatsApp is monitored during business hours and is usually the quickest way to
              reach a specific division. See our{" "}
              <Link href="/faqs" className="underline decoration-gold/40 hover:text-gold-dark">FAQs</Link> for
              common questions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
