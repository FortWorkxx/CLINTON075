import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PropertyBrowser from "@/components/property/PropertyBrowser";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Real Estate — Properties, Land & Commercial Space in Lagos",
  description:
    "Browse documented property listings across Lagos: duplexes, apartments, land and commercial space. Book an inspection and review documentation with our team.",
  alternates: { canonical: "/real-estate" },
};

const propertyServices = [
  { title: "Residential sales", body: "Duplexes, terraces, bungalows and apartments, marketed with accurate photography and disclosed documentation." },
  { title: "Rentals & short stays", body: "Tenant sourcing, tenancy agreements and serviced short-let management for landlords." },
  { title: "Land sales", body: "Serviced and unserviced plots with survey plans and a registry search before any commitment." },
  { title: "Commercial property", body: "Offices, shops and warehouses for lease or purchase, with fit-out and parking details confirmed." },
  { title: "Property management", body: "Rent collection, maintenance coordination and periodic condition reporting for owners." },
  { title: "Investment advisory", body: "Yield modelling, corridor analysis and exit planning for individual and corporate investors." },
];

export default function RealEstatePage() {
  return (
    <>
      <PageHero
        eyebrow="Division 03 · Real Estate"
        title={
          <>
            Property transactions<br />
            <span className="italic text-gold">handled with documentation.</span>
          </>
        }
        description="Residential and commercial sales, rentals, land and advisory across Lagos. Every listing is inspected, fees are disclosed before inspection, and we recommend independent legal review on every transaction."
        image="/images/division-realestate.jpg"
        crumbs={[{ label: "Divisions", href: "/services" }, { label: "Real Estate" }]}
        tall
      >
        <div className="flex flex-wrap gap-3">
          <Link href="#listings" className="btn-gold">Browse properties</Link>
          <Link href="#inspection" className="btn-light">Book an inspection</Link>
        </div>
      </PageHero>

      <section className="border-b border-midnight/10 bg-white py-10">
        <div className="shell grid gap-6 text-center sm:grid-cols-3">
          {[
            { k: "Documentation first", v: "We review the vendor's documents before listing, and share what we have for your lawyer to check." },
            { k: "Fees disclosed up front", v: "Agency and legal fee expectations are stated before you inspect — not at the point of payment." },
            { k: "Independent legal review", v: "We recommend your own solicitor on every purchase. We do not act as your lawyer." },
          ].map((b) => (
            <div key={b.k} className="border-l-2 border-gold/40 pl-4 text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-dark">{b.k}</p>
              <p className="mt-2 text-sm leading-relaxed text-midnight/60">{b.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="listings" className="scroll-mt-24 py-16 lg:py-20">
        <div className="shell">
          <SectionHeading
            eyebrow="Available now"
            title="Property listings"
            description="Filter by purpose, type, location and budget. Each listing shows its reference number so you can ask us directly."
          />
          <div className="mt-10">
            <PropertyBrowser />
          </div>
          <p className="mt-8 rounded-xl border border-midnight/10 bg-white px-5 py-4 text-[11px] leading-relaxed text-midnight/50">
            <strong className="text-midnight/70">Listing disclaimer:</strong> prices, availability and
            descriptions are provided by vendors and are subject to change without notice. Images may be
            representative. We only describe a listing as verified where documentation review has been
            completed. Always conduct your own inspection and legal search before payment.
          </p>
        </div>
      </section>

      <section className="border-y border-midnight/10 bg-white py-16 lg:py-20">
        <div className="shell">
          <SectionHeading eyebrow="What we do" title="Our real estate services" />
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-midnight/10 bg-midnight/10 sm:grid-cols-2 lg:grid-cols-3">
            {propertyServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="h-full bg-white p-7">
                  <p className="font-display text-sm text-gold-dark">0{i + 1}</p>
                  <h3 className="mt-3 font-display text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-midnight/55">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-midnight py-16 text-ivory lg:py-24">
        <Image src="/images/property-2.jpg" alt="" fill sizes="100vw" className="absolute inset-0 -z-20 object-cover opacity-20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-midnight via-midnight/95 to-midnight/60" />
        <div className="shell relative grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Before you buy</p>
            <h2 className="display-lg mt-4">
              Five documents<br />
              <span className="italic text-gold">we check first.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory/55">
              In Nigerian real estate the title is the asset. This is the order of review we recommend — and the
              same order we follow before advertising a listing.
            </p>
            <ol className="mt-8 space-y-4">
              {[
                { t: "Root of title", d: "Certificate of Occupancy or a registered deed of assignment, traced to the current vendor." },
                { t: "Registered survey plan", d: "Coordinates matched against the physical beacons on site." },
                { t: "Land registry search", d: "An independent search confirming encumbrances and the registered owner." },
                { t: "Building approval", d: "For developed property, the approval and evidence that levies are paid." },
                { t: "Contract of sale", d: "Reviewed by your own solicitor before any balance is paid." },
              ].map((d, i) => (
                <li key={d.t} className="flex gap-4 border-t border-white/10 pt-4">
                  <span className="font-display text-lg text-gold/70">0{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium text-ivory">{d.t}</p>
                    <p className="mt-1 text-xs leading-relaxed text-ivory/45">{d.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div id="inspection" className="scroll-mt-24 rounded-2xl border border-white/10 bg-midnight/60 p-6 backdrop-blur-sm sm:p-8">
            <p className="eyebrow">Inspection request</p>
            <h2 className="mt-3 font-display text-2xl text-ivory sm:text-3xl">Book a property inspection</h2>
            <p className="mt-2 text-sm leading-relaxed text-ivory/50">
              Tell us which property interests you and when you would like to view it. We confirm by phone within
              one business day.
            </p>
            <div className="mt-6">
              <EnquiryForm
                tone="dark"
                enquiryType="Real Estate"
                referencePrefix="C075-RE"
                submitLabel="Request inspection"
                fields={[
                  { name: "name", label: "Full name", required: true },
                  { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
                  { name: "email", label: "Email address", type: "email", required: true },
                  { name: "property", label: "Property of interest", required: true, placeholder: "Title or listing ID" },
                  { name: "date", label: "Preferred date", type: "date", required: true },
                  { name: "time", label: "Preferred time", type: "select", options: ["Morning (9–12)", "Afternoon (12–4)", "Evening (4–6)"] },
                  { name: "visitors", label: "Number of visitors", type: "number", placeholder: "1" },
                  { name: "message", label: "Additional message", type: "textarea", placeholder: "Anything we should know before the inspection." },
                ]}
              />
            </div>
            <p className="mt-4 text-[11px] text-ivory/30">
              Or call {site.phone} · {site.hours}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
