import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { marineServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Marine Services & Maintenance Packages",
  description:
    "Outboard engine servicing, repairs, diagnostics, spare parts and marine equipment supply in Lagos and coastal Nigeria.",
  alternates: { canonical: "/marine/services" },
};

export default function MarineServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Marine · Services"
        title={<>Marine service catalogue.</>}
        description="Eight service lines covering everything from engine sizing and supply to diagnostics, repairs and scheduled fleet maintenance."
        image="/images/boat-cruise.jpg"
        crumbs={[{ label: "Marine Services", href: "/marine" }, { label: "Services" }]}
      />

      <div className="shell py-14 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {marineServices.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <article className="h-full rounded-2xl border border-midnight/10 bg-white p-7">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-lg text-gold-dark">0{i + 1}</span>
                  <h2 className="font-display text-2xl">{s.title}</h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-midnight/60">{s.summary}</p>
                <ul className="mt-5 space-y-2 border-t border-midnight/10 pt-4">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-sm text-midnight/60">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl bg-midnight p-8 text-ivory sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow">Fleet & commercial operators</p>
              <h2 className="display-md mt-3 text-ivory">
                Maintenance contracts for<br />
                <span className="italic text-gold">three engines or more.</span>
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-ivory/55">
                A scheduled maintenance contract removes the guesswork from fleet uptime. We hold parts for your
                models, assign a named technician and provide a monthly condition report.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/marine/booking" className="btn-gold w-full">Request a fleet quote</Link>
              <Link href="/contact" className="btn-light w-full">Speak to our marine lead</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
