"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import { divisionFilters, projects } from "@/data/projects";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.division === filter);

  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title={<>Projects across<br /><span className="italic text-gold">four disciplines.</span></>}
        description="Completed and current work across marine, fashion, real estate and AI video. Each entry states the objective, deliverables and any results reported by the client."
        image="/images/boat-cruise.jpg"
        crumbs={[{ label: "Portfolio" }]}
        tall
      />

      <section className="py-14 lg:py-20">
        <div className="shell">
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2">
            {divisionFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`shrink-0 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
                  filter === f ? "bg-midnight text-ivory" : "border border-midnight/15 text-midnight/60 hover:border-midnight/35"
                }`}
              >
                {f}
                <span className="ml-2 text-[10px] opacity-50">
                  {f === "All" ? projects.length : projects.filter((p) => p.division === f).length}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {list.map((p) => (
              <article key={p.id} className="group overflow-hidden rounded-2xl border border-midnight/10 bg-white">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-[1100ms] group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-midnight backdrop-blur">
                    {p.division}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-midnight/40">{p.client} · {p.year}</p>
                  <h2 className="mt-2 font-display text-xl leading-snug">{p.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-midnight/55">{p.summary}</p>
                  {p.metrics && (
                    <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-midnight/10 pt-4">
                      {p.metrics.map((m) => (
                        <div key={m.label}>
                          <dt className="text-[9px] uppercase leading-tight tracking-[0.1em] text-midnight/40">{m.label}</dt>
                          <dd className="mt-0.5 font-display text-base text-gold-dark">{m.value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 rounded-xl border border-midnight/10 bg-white px-5 py-4 text-[11px] leading-relaxed text-midnight/45">
            Some client names are withheld or shortened at the client&apos;s request. Images and metrics in this demo
            build are illustrative; final case studies are published with written client permission.
          </p>

          <div className="mt-10 rounded-2xl bg-midnight p-8 text-ivory sm:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <h2 className="display-md">
                Want to see work closer to<br />
                <span className="italic text-gold">your own brief?</span>
              </h2>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link href="/quote" className="btn-gold">Request a quote</Link>
                <Link href="/contact" className="btn-light">Talk to us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
