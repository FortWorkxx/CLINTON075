import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "AI Video Portfolio — Campaign Work",
  description:
    "Selected AI-assisted video advertising campaigns: product commercials, property films and social video campaigns.",
  alternates: { canonical: "/ai-video/work" },
};

export default function AiWorkPage() {
  const list = projects.filter((p) => p.division === "AI Video");

  return (
    <>
      <PageHero
        eyebrow="AI Video · Portfolio"
        title={<>Campaign work.</>}
        description="Each project below shows the objective, deliverables and — where the client shared them — performance results. Visual references are illustrative where noted."
        image="/images/division-ai.jpg"
        crumbs={[{ label: "AI Video Advertising", href: "/ai-video" }, { label: "Work" }]}
      />

      <div className="shell py-14 lg:py-20">
        <div className="space-y-10">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <article className="grid gap-6 overflow-hidden rounded-2xl border border-midnight/10 bg-white lg:grid-cols-2">
                <div className="relative aspect-[16/10] lg:aspect-auto">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  <button className="absolute inset-0 grid place-items-center" aria-label={`Play ${p.title}`}>
                    <span className="grid h-16 w-16 place-items-center rounded-full border border-white/40 bg-midnight/40 text-xl text-ivory backdrop-blur transition hover:border-gold hover:text-gold">▶</span>
                  </button>
                </div>
                <div className="p-7 lg:p-9">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-midnight px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-gold">{p.year}</span>
                    <span className="text-[10px] uppercase tracking-[0.14em] text-midnight/40">{p.client}</span>
                  </div>
                  <h2 className="mt-3 font-display text-2xl leading-snug">{p.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-midnight/60">{p.summary}</p>
                  <dl className="mt-5 space-y-3 border-t border-midnight/10 pt-4 text-sm">
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.14em] text-midnight/40">Objective</dt>
                      <dd className="mt-0.5 text-midnight/65">{p.objective}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.14em] text-midnight/40">Deliverables</dt>
                      <dd className="mt-0.5 text-midnight/65">{p.deliverables}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.14em] text-midnight/40">Platforms</dt>
                      <dd className="mt-0.5 text-midnight/65">{p.platforms}</dd>
                    </div>
                  </dl>
                  <div className="mt-5 flex flex-wrap gap-6">
                    {p.metrics?.map((m) => (
                      <div key={m.label}>
                        <p className="font-display text-xl text-gold-dark">{m.value}</p>
                        <p className="text-[10px] uppercase tracking-[0.1em] text-midnight/40">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 rounded-xl border border-midnight/10 bg-white px-5 py-4 text-[11px] leading-relaxed text-midnight/45">
          Video previews are placeholders in this demo build pending final campaign files. Metrics are reported as
          supplied by clients and are not independently audited.
        </p>
        <div className="mt-10 text-center">
          <Link href="/ai-video/quote" className="btn-gold">Start your project</Link>
        </div>
      </div>
    </>
  );
}
