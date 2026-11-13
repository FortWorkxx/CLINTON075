import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Get a Quote — All Four Divisions",
  description:
    "Request a written quotation for marine services, fashion, real estate or the proposed AI Operator division. One form covers all four Clinton Global divisions.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Quotation request"
        title={<>Get a written quote.</>}
        description="One form for all four divisions. We acknowledge every request within one business day, ask any clarifying questions, then issue a written quotation with scope, timeline and payment terms."
        image="/images/division-realestate.jpg"
        crumbs={[{ label: "Get a Quote" }]}
      />

      <div className="shell py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="rounded-2xl border border-midnight/10 bg-white p-6 sm:p-8">
            <h2 className="font-display text-2xl">Tell us what you need</h2>
            <p className="mt-2 text-sm text-midnight/55">
              Include as much detail as you can about scope, quantity and timeline. Rough budget guidance helps us
              propose the right option rather than the most expensive one.
            </p>
            <div className="mt-7">
              <EnquiryForm
                enquiryType="Quotation"
                referencePrefix="CGI-QT"
                submitLabel="Request quotation"
                tone="light"
                fields={[
                  { name: "name", label: "Full name", required: true },
                  { name: "company", label: "Company (if applicable)" },
                  { name: "email", label: "Email address", type: "email", required: true },
                  { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
                  { name: "division", label: "Which division?", type: "select", required: true, options: ["Marine Services", "Fashion", "Real Estate", "AI Operator", "Two or more divisions"] },
                  { name: "service", label: "Service required", type: "select", options: ["Engine sales", "Engine servicing / repair", "Spare parts", "Marine equipment", "Fashion order (retail)", "Bespoke tailoring", "Property purchase", "Property rental", "Property management", "AI Operator enquiry (scope to confirm)", "Other"] },
                  { name: "timeline", label: "Timeline", type: "select", options: ["Immediately", "Within 2 weeks", "Within 1 month", "1–3 months", "Exploring options"] },
                  { name: "budget", label: "Budget range", type: "select", options: ["Under ₦100,000", "₦100,000 – ₦500,000", "₦500,000 – ₦2m", "₦2m – ₦10m", "Above ₦10m", "Prefer to discuss"] },
                  { name: "message", label: "Scope and requirements", type: "textarea", required: true, placeholder: "Describe the work, quantities, location and any constraints." },
                  { name: "file", label: "Attach a document or photo (optional)", type: "file" },
                ]}
              />
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-midnight/10 bg-white p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">What happens next</p>
              <ol className="mt-4 space-y-3 text-sm text-midnight/60">
                <li className="flex gap-3"><span className="font-display text-gold-dark">1</span> Acknowledgement within one business day.</li>
                <li className="flex gap-3"><span className="font-display text-gold-dark">2</span> A short scoping call or site visit where needed.</li>
                <li className="flex gap-3"><span className="font-display text-gold-dark">3</span> Written quotation with scope, timeline and payment terms.</li>
                <li className="flex gap-3"><span className="font-display text-gold-dark">4</span> Work begins once terms are accepted in writing.</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-midnight/10 bg-white p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">Division-specific forms</p>
              <p className="mt-2 text-sm leading-relaxed text-midnight/55">
                Some jobs need more detail up front. Use these instead of the general form:
              </p>
              <div className="mt-4 space-y-2">
                {[
                  { l: "Marine booking & engine enquiry", h: "/marine/booking" },
                  { l: "Property inspection request", h: "/real-estate" },
                  { l: "AI Operator enquiry", h: "/ai-operator" },
                  { l: "Bespoke fashion appointment", h: "/contact" },
                ].map((l) => (
                  <Link key={l.h} href={l.h} className="flex items-center justify-between rounded-lg border border-midnight/10 px-4 py-2.5 text-sm text-midnight/70 transition hover:border-gold hover:text-gold-dark">
                    {l.l}
                    <span>→</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-midnight p-6 text-ivory">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">Rather talk it through?</p>
              <p className="mt-2 text-sm leading-relaxed text-ivory/60">
                Call or WhatsApp us. For complex briefs a five-minute conversation usually saves a day of email.
              </p>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-gold mt-4 w-full">
                Message on WhatsApp
              </a>
              <a href={`tel:${site.phoneHref}`} className="btn-light mt-2 w-full">Call {site.phone}</a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
