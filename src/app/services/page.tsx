import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { divisions } from "@/data/site";
import { marineServices, creativeServices } from "@/data/services";
import { properties } from "@/data/properties";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Our Divisions — Marine, Fashion, Real Estate & AI Video",
  description:
    "Compare the four Clinton 075 divisions: what each does, how each transaction works, and how to engage each team.",
  alternates: { canonical: "/services" },
};

const howToEngage = [
  { d: "Marine Services", t: "Service booking or written quotation", href: "/marine/booking", cta: "Book a service" },
  { d: "Fashion", t: "Direct purchase online, or bespoke by appointment", href: "/fashion", cta: "Shop the store" },
  { d: "Real Estate", t: "Property enquiry and inspection booking", href: "/real-estate", cta: "Browse properties" },
  { d: "AI Video Advertising", t: "Project quotation and consultation", href: "/ai-video/quote", cta: "Request a quote" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our divisions"
        title={
          <>
            Four businesses.<br />
            <span className="italic text-gold">One point of contact.</span>
          </>
        }
        description="Each division has its own team, catalogue and booking process. They share one corporate identity, one accounts function and one standard of service."
        image="/images/hero-marina.jpg"
        crumbs={[{ label: "Divisions" }]}
        tall
      />

      <section className="py-14 lg:py-20">
        <div className="shell space-y-6">
          {divisions.map((d, i) => (
            <Reveal key={d.slug} delay={i * 50}>
              <article className="grid overflow-hidden rounded-2xl border border-midnight/10 bg-white lg:grid-cols-[0.9fr_1.1fr]">
                <div className={`relative min-h-[16rem] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image src={d.image} alt={d.name} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-midnight/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur">
                    Division {d.number}
                  </span>
                </div>
                <div className="p-7 lg:p-10">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-gold-dark">{d.tagline}</p>
                  <h2 className="mt-2 font-display text-3xl">{d.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-midnight/60">{d.blurb}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {d.highlights.map((h) => (
                      <li key={h} className="rounded-full border border-midnight/10 px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-midnight/55">
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link href={d.href} className="btn-dark !px-5 !py-3 !text-[11px]">{d.cta}</Link>
                    <Link href={d.slug === "fashion" ? "/fashion" : d.slug === "real-estate" ? "/real-estate" : d.slug === "marine" ? "/marine/services" : "/ai-video/work"} className="btn-ghost">
                      View detail <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-midnight/10 bg-white py-16 lg:py-20">
        <div className="shell">
          <p className="eyebrow">How to engage</p>
          <h2 className="display-md mt-3">One transaction type per division</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-midnight/60">
            We deliberately did not force every division into one checkout. A marine service is booked and quoted; a
            fashion item is purchased; a property is inspected; a video project is scoped. Each flow is built for how
            that work is actually bought.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {howToEngage.map((h) => (
              <div key={h.d} className="flex flex-col rounded-xl border border-midnight/10 p-5">
                <p className="text-sm font-semibold text-midnight">{h.d}</p>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-midnight/55">{h.t}</p>
                <Link href={h.href} className="mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-dark hover:underline">
                  {h.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="shell grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="eyebrow">Catalogue snapshot</p>
            <h2 className="display-md mt-3">At a glance</h2>
            <p className="mt-3 text-sm leading-relaxed text-midnight/55">
              A quick view of what is currently live across the group.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-2">
            {[
              { k: marineServices.length, l: "Marine service lines", href: "/marine/services" },
              { k: products.length, l: "Fashion pieces in store", href: "/fashion" },
              { k: properties.length, l: "Property listings", href: "/real-estate" },
              { k: creativeServices.length, l: "Video production services", href: "/ai-video" },
              { k: 3, l: "Video packages", href: "/ai-video/quote" },
              { k: 4, l: "Business divisions", href: "/portfolio" },
            ].map((s) => (
              <Link key={s.l} href={s.href} className="group rounded-xl border border-midnight/10 bg-white p-5 transition hover:border-gold">
                <p className="font-display text-3xl text-gold-dark">{s.k}</p>
                <p className="mt-1 text-[11px] uppercase leading-relaxed tracking-[0.12em] text-midnight/45">{s.l}</p>
                <p className="mt-3 text-xs text-midnight/30 transition group-hover:text-gold-dark">View →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-midnight/10 py-16 lg:py-20">
        <div className="shell overflow-hidden rounded-2xl bg-midnight p-8 text-ivory sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow">Not sure which division you need?</p>
              <h2 className="display-md mt-3">
                Send one enquiry.<br />
                <span className="italic text-gold">We will route it internally.</span>
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-ivory/55">
                If your request crosses divisions — a property launch that needs video, or a fleet contract that
                needs uniforms — the general enquiry form reaches all four teams.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/quote" className="btn-gold w-full">Get a quote</Link>
              <Link href="/contact" className="btn-light w-full">Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
