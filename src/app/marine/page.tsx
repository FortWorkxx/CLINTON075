import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { marineServices, marinePackages, engines } from "@/data/services";
import { faqs } from "@/data/site";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Marine Services — Outboard Engines, Repairs & Maintenance in Lagos",
  description:
    "Outboard engine sales, installation, diagnostics, servicing and genuine spare parts for boat owners and fleets in Lagos and coastal Nigeria.",
  alternates: { canonical: "/marine" },
};

const process = [
  { t: "Tell us the engine", d: "Model, horsepower and the symptoms — or send a photo on WhatsApp." },
  { t: "Written diagnosis & quote", d: "We inspect, then quote parts and labour in writing before work starts." },
  { t: "Service or repair", d: "Work is carried out at your jetty or in our workshop, with progress updates." },
  { t: "Sea trial & report", d: "We test on the water and hand over a written service report." },
];

export default function MarinePage() {
  const marineProjects = projects.filter((p) => p.division === "Marine");

  return (
    <>
      <PageHero
        eyebrow="Division 01 · Marine Services"
        title={
          <>
            Outboard engines,<br />
            <span className="italic text-gold">serviced properly.</span>
          </>
        }
        description="Sales, installation, diagnostics and maintenance for outboard engines from 2.5HP to 425HP. Private boat owners, charter operators and fleets across Lagos and the coastal states."
        image="/images/division-marine.jpg"
        crumbs={[{ label: "Divisions", href: "/services" }, { label: "Marine Services" }]}
        tall
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/marine/booking" className="btn-gold">Book a service</Link>
          <Link href="/marine/engines" className="btn-light">View engine range</Link>
        </div>
      </PageHero>

      <section className="border-b border-midnight/10 bg-white">
        <div className="shell grid divide-y divide-midnight/10 py-6 text-center text-[11px] uppercase tracking-[0.14em] text-midnight/50 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          <p className="py-2">4-stroke specialists</p>
          <p className="py-2">Genuine parts</p>
          <p className="py-2">Written service reports</p>
          <p className="py-2">Fleet contracts available</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/boat-cruise.jpg" alt="Speedboat on open water" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Why boat owners call us"
              title={<>Engine work with a paper trail.</>}
              description="Most marine engine failures we see are preventable — cooling, fuel and corrosion problems that a service schedule would have caught. We work to a documented process so you know what was done, what was replaced and what to watch."
            />
            <ul className="mt-7 space-y-4">
              {[
                "Diagnosis before quotation — no guesswork and no open-ended invoices.",
                "Genuine or OEM-compatible parts, verified against your engine's model and serial number.",
                "Service at your jetty or in our workshop, whichever gets you back on the water faster.",
                "A written report after every visit, including recommended next service interval.",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-relaxed text-midnight/65">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/marine/booking" className="btn-dark">Request a service</Link>
              <Link href="/marine/services" className="btn-outline">All marine services</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-midnight/10 bg-white py-16 lg:py-20">
        <div className="shell">
          <SectionHeading eyebrow="Our services" title="What we do on the water" link={{ label: "Service detail", href: "/marine/services" }} align="between" />
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-midnight/10 bg-midnight/10 sm:grid-cols-2 lg:grid-cols-3">
            {marineServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <div className="group h-full bg-white p-6 transition-colors hover:bg-ivory/60">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-sm text-gold-dark">0{i + 1}</span>
                    <span className="text-gold/50 transition group-hover:text-gold">⚓</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-midnight/55">{s.summary}</p>
                  <Link href="/marine/services" className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-dark hover:underline">
                    Details <span>→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="shell">
          <SectionHeading align="between" eyebrow="Engine catalogue" title="Popular outboard models" description="We supply new and certified pre-owned engines. Pricing is quotation-based because rigging and controls vary by boat." link={{ label: "Full engine range", href: "/marine/engines" }} />
          <div className="mt-10 overflow-x-auto rounded-xl border border-midnight/10 bg-white">
            <table className="w-full min-w-[42rem] text-left text-sm">
              <thead>
                <tr className="border-b border-midnight/10 bg-ivory/60 text-[10px] uppercase tracking-[0.14em] text-midnight/45">
                  <th className="px-5 py-3.5 font-medium">Model</th>
                  <th className="px-5 py-3.5 font-medium">Brand</th>
                  <th className="px-5 py-3.5 font-medium">Power</th>
                  <th className="px-5 py-3.5 font-medium">Stroke</th>
                  <th className="px-5 py-3.5 font-medium">Weight</th>
                  <th className="px-5 py-3.5 font-medium">Typical use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-midnight/10">
                {engines.slice(0, 6).map((e) => (
                  <tr key={e.name} className="transition hover:bg-ivory/40">
                    <td className="px-5 py-4 font-medium text-midnight">{e.name}</td>
                    <td className="px-5 py-4 text-midnight/60">{e.brand}</td>
                    <td className="px-5 py-4 text-midnight/60">{e.hp}</td>
                    <td className="px-5 py-4 text-midnight/60">{e.stroke}</td>
                    <td className="px-5 py-4 text-midnight/60">{e.weight}</td>
                    <td className="px-5 py-4 text-midnight/50">{e.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-midnight py-16 text-ivory lg:py-24">
        <div className="pointer-events-none absolute inset-0 grain opacity-40" />
        <div className="shell relative">
          <SectionHeading tone="light" align="between" eyebrow="Service packages" title="Transparent maintenance pricing" description="Indicative pricing for engines up to 250HP. Final quotations follow an inspection and depend on parts required." link={{ label: "Book a service", href: "/marine/booking" }} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {marinePackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col rounded-2xl border p-6 ${
                  pkg.highlight ? "border-gold/60 bg-gold/[0.06]" : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-2.5 left-6 rounded-full bg-gold px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-midnight">
                    Most requested
                  </span>
                )}
                <h3 className="font-display text-xl text-ivory">{pkg.name}</h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-ivory/40">{pkg.note}</p>
                <p className="mt-4 font-display text-2xl text-gold">{pkg.price}</p>
                <ul className="mt-5 flex-1 space-y-2.5 text-sm text-ivory/60">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <span className="mt-1 text-gold">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/marine/booking" className={`mt-6 w-full ${pkg.highlight ? "btn-gold" : "btn-light"}`}>
                  Book this package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="How it works" title="From call to sea trial" />
            <ol className="mt-8 space-y-5">
              {process.map((p, i) => (
                <li key={p.t} className="flex gap-4 border-t border-midnight/10 pt-5">
                  <span className="font-display text-lg text-gold-dark">0{i + 1}</span>
                  <div>
                    <p className="text-sm font-semibold text-midnight">{p.t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-midnight/55">{p.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeading eyebrow="Recent marine work" title="Projects completed" link={{ label: "Portfolio", href: "/portfolio" }} align="between" />
            <div className="mt-8 space-y-4">
              {marineProjects.map((p) => (
                <article key={p.id} className="flex gap-4 rounded-xl border border-midnight/10 bg-white p-3">
                  <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-lg">
                    <Image src={p.image} alt={p.title} fill sizes="112px" className="object-cover" />
                  </div>
                  <div className="py-1">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-midnight/40">{p.year} · {p.client}</p>
                    <h3 className="mt-1 font-display text-lg leading-snug">{p.title}</h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-midnight/55">{p.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-midnight/10 bg-white py-16 lg:py-20">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Marine FAQs" title="Common questions" description="If your question is not covered, message our marine team on WhatsApp — we answer technical questions without obligation." />
            <div className="mt-8 space-y-2">
              {faqs.slice(0, 3).map((f) => (
                <details key={f.q} className="group rounded-xl border border-midnight/10 p-4">
                  <summary className="flex cursor-pointer items-center justify-between gap-3 text-sm font-medium text-midnight">
                    {f.q}
                    <span className="text-gold transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-midnight/60">{f.a}</p>
                </details>
              ))}
            </div>
            <Link href="/faqs" className="btn-ghost mt-6">All FAQs <span>→</span></Link>
          </div>
          <div className="rounded-2xl border border-midnight/10 bg-ivory/60 p-6 sm:p-8">
            <p className="eyebrow">Marine enquiry</p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl">Request a marine service</h2>
            <p className="mt-2 text-sm leading-relaxed text-midnight/55">
              Send your engine details and we will come back with a diagnosis or quotation within one business day.
            </p>
            <div className="mt-6">
              <EnquiryForm
                enquiryType="Marine"
                referencePrefix="C075-MR"
                submitLabel="Request service"
                tone="light"
                fields={[
                  { name: "name", label: "Full name", required: true },
                  { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
                  { name: "email", label: "Email address", type: "email", required: true },
                  { name: "service", label: "Service required", type: "select", required: true, options: ["Outboard engine sales", "Engine installation", "Servicing & maintenance", "Repairs & diagnostics", "Spare parts", "Marine equipment", "Consultancy"] },
                  { name: "engine", label: "Engine make & model", placeholder: "E.g. Yamaha F150" },
                  { name: "hp", label: "Horsepower" },
                  { name: "location", label: "Location of service", placeholder: "Jetty / marina" },
                  { name: "message", label: "Describe the problem", type: "textarea", required: true },
                  { name: "file", label: "Photo or short video (optional)", type: "file" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
