import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { site } from "@/data/site";
import { marinePackages } from "@/data/services";

export const metadata: Metadata = {
  title: "Book a Marine Service — Outboard Engine Servicing",
  description:
    "Book outboard engine servicing, repair or installation. Provide your engine details and location, and our marine team will confirm within one business day.",
  alternates: { canonical: "/marine/booking" },
};

export default function MarineBookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Marine · Booking"
        title={<>Book a marine service.</>}
        description="Tell us about your engine and where the boat is kept. We confirm availability, then inspect and quote in writing before any work begins."
        image="/images/boat-cruise.jpg"
        crumbs={[{ label: "Marine Services", href: "/marine" }, { label: "Booking" }]}
      />

      <div className="shell py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="rounded-2xl border border-midnight/10 bg-white p-6 sm:p-8">
            <h2 className="font-display text-2xl">Service request form</h2>
            <p className="mt-2 text-sm text-midnight/55">
              Fields marked * are required. Include the engine's model and serial number where you can — it lets us
              check parts availability before we visit.
            </p>
            <div className="mt-7">
              <EnquiryForm
                enquiryType="Marine"
                referencePrefix="CGI-MR"
                submitLabel="Submit booking request"
                tone="light"
                fields={[
                  { name: "name", label: "Full name", required: true },
                  { name: "phone", label: "Phone number", type: "tel", required: true },
                  { name: "email", label: "Email address", type: "email", required: true },
                  { name: "service", label: "Service required", type: "select", required: true, options: ["Essential service", "Full service", "Repairs & diagnostics", "Engine installation", "Spare parts", "Marine equipment", "Fleet contract", "Consultancy"] },
                  { name: "boatType", label: "Boat type", type: "select", options: ["Speedboat", "Cabin cruiser", "Rigid inflatable (RIB)", "Fishing boat", "Tender", "Crew / patrol boat", "Other"] },
                  { name: "engineMake", label: "Engine manufacturer", type: "select", options: ["Yamaha", "Suzuki", "Mercury", "Honda", "Tohatsu", "Other"] },
                  { name: "engineModel", label: "Engine model", placeholder: "E.g. F150" },
                  { name: "hp", label: "Horsepower", placeholder: "E.g. 150" },
                  { name: "location", label: "Location of service", required: true, placeholder: "Marina, jetty or address" },
                  { name: "date", label: "Preferred service date", type: "date" },
                  { name: "problem", label: "Describe the problem or request", type: "textarea", required: true, placeholder: "Symptoms, when they started, and anything already attempted." },
                  { name: "file", label: "Photo or video of the engine (optional)", type: "file" },
                  { name: "notes", label: "Additional information", type: "textarea" },
                ]}
              />
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-midnight/10 bg-white p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">Packages</p>
              <ul className="mt-4 space-y-4">
                {marinePackages.map((p) => (
                  <li key={p.name} className="border-b border-midnight/10 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="text-sm font-medium text-midnight">{p.name}</p>
                      <p className="whitespace-nowrap text-xs text-gold-dark">{p.price}</p>
                    </div>
                    <p className="mt-0.5 text-[11px] text-midnight/45">{p.note}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-midnight/10 bg-white p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">Engine compatibility check</p>
              <p className="mt-2 text-sm leading-relaxed text-midnight/60">
                Buying an engine or parts? Send us your existing engine's model and serial number and we will
                confirm compatibility before you order — at no cost.
              </p>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Clinton Global, I would like an engine compatibility check. My engine details are:")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark mt-4 w-full"
              >
                Send engine details
              </a>
            </div>

            <div className="rounded-2xl bg-midnight p-6 text-ivory">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">Urgent?</p>
              <p className="mt-2 text-sm leading-relaxed text-ivory/60">
                Breakdowns at the jetty are treated as priority. Call us directly and we will tell you honestly
                whether we can attend today.
              </p>
              <a href={`tel:${site.phoneHref}`} className="btn-gold mt-4 w-full">
                Call {site.phone}
              </a>
              <p className="mt-3 text-[11px] text-ivory/35">{site.hours}</p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
