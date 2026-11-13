import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import StatsRow from "@/components/StatsRow";
import { divisions, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us — One Company, Four Divisions",
  description:
    "Clinton 075 Group is a Nigerian multi-service company operating marine, fashion, real estate and AI video advertising divisions under one corporate identity.",
  alternates: { canonical: "/about" },
};

const team = [
  { name: "Marine division", role: "Engine technicians & service coordinators", detail: "Four-stroke specialists, diagnostics, rigging and fleet maintenance scheduling." },
  { name: "Fashion division", role: "Design, tailoring & store operations", detail: "Pattern development, made-to-measure fitting, quality control and dispatch." },
  { name: "Real estate division", role: "Listings, inspections & documentation", detail: "Vendor onboarding, buyer screening, inspection coordination and documentation packs." },
  { name: "Creative division", role: "Direction, production & post", detail: "Concept, script, AI generation, editing, sound design and voice-over." },
];

const values = [
  { t: "Accuracy over speed", d: "A written quote that holds is worth more than a fast estimate that changes. We would rather take a day longer and get the scope right." },
  { t: "Documented work", d: "Service reports, listing documents, production briefs. If we did something, there is a record of it you can keep." },
  { t: "Honest capability", d: "We say no to work we cannot deliver well. On every brief we will tell you what we can do, what we cannot, and where a specialist should be involved." },
  { t: "Client retention", d: "We measure success by whether clients come back for the second job, not by whether the first one closed." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Clinton 075"
        title={
          <>
            One company.<br />
            <span className="italic text-gold">Four disciplines.</span>
          </>
        }
        description="We were built to solve a specific problem: clients in Nigeria often need several unrelated services, and end up managing several unrelated vendors. Clinton 075 Group brings them under one accountable brand."
        image="/images/hero-marina.jpg"
        crumbs={[{ label: "About" }]}
        tall
      />

      <section className="py-16 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Built around the way clients actually buy."
              description="Marine work, fashion, property and advertising rarely appear on the same brief. But the same client often needs two or three of them — a property developer who needs a launch campaign, a resort that needs both engine service and staff uniforms."
            />
            <div className="mt-7 space-y-4 text-sm leading-relaxed text-midnight/65">
              <p>
                Rather than acting as a broker between unrelated vendors, each Clinton 075 division was built with
                its own capability in-house: its own technicians, tailors, listing coordinators and editors. What
                they share is a standard of administration — written quotations, documented delivery and a single
                accounts function.
              </p>
              <p>
                That structure means a client can call one number, get one invoice, and hold one company accountable
                — while still receiving specialist work from people who only do that work.
              </p>
              <p>
                We are deliberately transparent about scale. We are a growing Nigerian company, not a multinational.
                Every figure published on this site is one we can substantiate, and every listing or claim is
                qualified rather than exaggerated.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="btn-dark">Explore the divisions</Link>
              <Link href="/contact" className="btn-outline">Contact us</Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/division-realestate.jpg" alt="Modern duplex at dusk" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image src="/images/division-fashion.jpg" alt="Fashion editorial" fill sizes="20vw" className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image src="/images/division-marine.jpg" alt="Outboard engine" fill sizes="20vw" className="object-cover" />
              </div>
            </div>
            <div className="rounded-xl bg-midnight p-6 text-ivory">
              <p className="text-[11px] uppercase tracking-[0.16em] text-gold">Head office</p>
              <p className="mt-2 text-sm text-ivory/70">{site.address}</p>
              <p className="mt-1 text-sm text-ivory/50">{site.hours}</p>
              <p className="mt-3 text-[11px] text-ivory/35">{site.rc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-14 text-ivory">
        <div className="pointer-events-none absolute inset-0 grain opacity-40" />
        <div className="shell relative">
          <StatsRow />
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="shell grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-midnight/10 bg-white p-8">
              <p className="eyebrow">Mission</p>
              <h2 className="mt-3 font-display text-2xl leading-snug">
                To deliver specialist services across four industries with the professionalism, documentation and
                accountability of one corporate brand.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-2xl border border-midnight/10 bg-white p-8">
              <p className="eyebrow">Vision</p>
              <h2 className="mt-3 font-display text-2xl leading-snug">
                To become one of Nigeria&apos;s most trusted multi-industry companies — known less for what we sell
                and more for how reliably we deliver it.
              </h2>
            </div>
          </Reveal>
        </div>

        <div className="shell mt-14">
          <SectionHeading eyebrow="Our values" title="What we hold ourselves to" />
          <div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-midnight/10 bg-midnight/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.t} className="bg-white p-6">
                <span className="font-display text-sm text-gold-dark">0{i + 1}</span>
                <h3 className="mt-3 font-display text-lg">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-midnight/55">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-midnight/10 bg-white py-16 lg:py-20">
        <div className="shell">
          <SectionHeading eyebrow="Our structure" title="How the group is organised" description="Four operating divisions, each with its own team and specialism, supported by a shared corporate function." />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {team.map((t) => (
              <div key={t.name} className="flex gap-4 rounded-xl border border-midnight/10 p-5">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <div>
                  <p className="text-sm font-semibold text-midnight">{t.name}</p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-[0.12em] text-gold-dark">{t.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-midnight/55">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {divisions.map((d) => (
              <Link key={d.slug} href={d.href} className="group flex items-center justify-between rounded-xl border border-midnight/10 px-5 py-4 transition hover:border-gold hover:bg-ivory/40">
                <span className="flex items-center gap-3">
                  <span className="font-display text-xs text-gold-dark">{d.number}</span>
                  <span className="text-sm font-medium text-midnight">{d.name}</span>
                </span>
                <span className="text-midnight/30 transition group-hover:translate-x-1 group-hover:text-gold-dark">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="shell overflow-hidden rounded-2xl bg-midnight p-8 text-ivory sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow">Work with us</p>
              <h2 className="display-md mt-3">
                Tell us about the project.<br />
                <span className="italic text-gold">We will tell you how we would handle it.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/quote" className="btn-gold w-full">Request a quote</Link>
              <Link href="/careers" className="btn-light w-full">Join our team</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
