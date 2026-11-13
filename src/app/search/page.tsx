"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { products, formatNaira } from "@/data/products";
import { properties } from "@/data/properties";
import { posts } from "@/data/blog";
import { marineServices, creativeServices } from "@/data/services";

type Result = {
  id: string;
  title: string;
  meta: string;
  href: string;
  image?: string;
  group: "Fashion" | "Properties" | "Services" | "Insights";
  price?: string;
  text: string;
};

const allResults: Result[] = [
  ...products.map((p) => ({
    id: `p-${p.id}`,
    title: p.name,
    meta: `${p.fabric} · ${p.sku}`,
    href: `/fashion/product/${p.slug}`,
    image: p.image,
    group: "Fashion" as const,
    price: formatNaira(p.price),
    text: `${p.name} ${p.description} ${p.fabric} ${p.category}`,
  })),
  ...properties.map((p) => ({
    id: `re-${p.id}`,
    title: p.title,
    meta: `${p.neighbourhood}, ${p.city} · For ${p.purpose}`,
    href: `/real-estate/${p.slug}`,
    image: p.image,
    group: "Properties" as const,
    price: formatNaira(p.price),
    text: `${p.title} ${p.description} ${p.neighbourhood} ${p.city} ${p.type} ${p.features.join(" ")}`,
  })),
  ...marineServices.map((s) => ({
    id: `m-${s.slug}`,
    title: s.title,
    meta: "Marine services",
    href: "/marine/services",
    image: "/images/division-marine.jpg",
    group: "Services" as const,
    text: `${s.title} ${s.summary} ${s.items.join(" ")}`,
  })),
  ...creativeServices.map((s) => ({
    id: `c-${s.title}`,
    title: s.title,
    meta: "AI Operator",
    href: "/ai-operator",
    image: "/images/division-ai.jpg",
    group: "Services" as const,
    text: `${s.title} ${s.body}`,
  })),
  ...posts.map((p) => ({
    id: `b-${p.slug}`,
    title: p.title,
    meta: `${p.division} · ${p.readTime}`,
    href: `/blog/${p.slug}`,
    image: p.image,
    group: "Insights" as const,
    text: `${p.title} ${p.excerpt} ${p.body.map((b) => b.paragraphs.join(" ")).join(" ")}`,
  })),
];

const groups = ["All", "Fashion", "Properties", "Services", "Insights"] as const;

const suggestions = ["outboard engine", "duplex Lekki", "agbada", "land", "video commercial", "servicing"];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<string>("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const terms = q.split(/\s+/).filter(Boolean);
    return allResults
      .map((r) => {
        const haystack = `${r.title} ${r.meta} ${r.text}`.toLowerCase();
        const score = terms.reduce((s, t) => (haystack.includes(t) ? s + 1 : s), 0);
        return { r, score };
      })
      .filter((x) => x.score > 0 && (group === "All" || x.r.group === group))
      .sort((a, b) => b.score - a.score)
      .map((x) => x.r);
  }, [query, group]);

  const grouped = groups.slice(1).map((g) => ({
    group: g,
    items: results.filter((r) => r.group === g),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="shell py-14 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Search</p>
        <h1 className="display-md mt-3">Search the group</h1>
        <p className="mt-3 text-sm leading-relaxed text-midnight/55">
          Search fashion pieces, property listings, marine and creative services, and our published guides in one place.
        </p>

        <div className="mt-7">
          <label htmlFor="gsearch" className="sr-only">Search</label>
          <div className="flex items-center gap-2 rounded-xl border border-midnight/15 bg-white px-4 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/20">
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-midnight/35" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4.5 4.5" />
            </svg>
            <input
              id="gsearch"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. outboard engine, duplex Lekki, agbada…"
              className="w-full bg-transparent py-3.5 text-sm text-midnight outline-none placeholder:text-slate/70"
            />
            {query && (
              <button onClick={() => setQuery("")} aria-label="Clear search" className="text-midnight/35 hover:text-midnight">✕</button>
            )}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.14em] text-midnight/35">Try:</span>
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => setQuery(s)}
                className="rounded-full border border-midnight/12 px-2.5 py-1 text-[11px] text-midnight/55 transition hover:border-gold hover:text-gold-dark"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="no-scrollbar mt-7 flex gap-2 overflow-x-auto border-b border-midnight/10 pb-3">
          {groups.map((g) => (
            <button
              key={g}
              onClick={() => setGroup(g)}
              aria-pressed={group === g}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] transition ${
                group === g ? "bg-midnight text-ivory" : "text-midnight/45 hover:text-midnight"
              }`}
            >
              {g}
              {g !== "All" && (
                <span className="ml-1.5 opacity-50">
                  {results.length && group === "All" ? results.filter((r) => r.group === g).length : ""}
                </span>
              )}
            </button>
          ))}
        </div>

        {!query.trim() ? (
          <div className="mt-10 rounded-xl border border-dashed border-midnight/20 py-16 text-center">
            <p className="font-display text-xl">Start typing to search</p>
            <p className="mt-2 text-sm text-midnight/45">
              Results are grouped by division so you can see where they come from.
            </p>
          </div>
        ) : results.length === 0 ? (
          <div className="mt-10 rounded-xl border border-dashed border-midnight/20 py-16 text-center">
            <p className="font-display text-xl">No results for “{query}”</p>
            <p className="mt-2 text-sm text-midnight/45">
              Try a shorter phrase, or{" "}
              <Link href="/contact" className="text-gold-dark underline">ask our team directly</Link>.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-10">
            <p className="text-xs uppercase tracking-[0.12em] text-midnight/40">
              {results.length} result{results.length === 1 ? "" : "s"} for “{query}”
            </p>
            {grouped.map((g) => (
              <section key={g.group}>
                <h2 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">
                  {g.group}
                  <span className="text-midnight/30">{g.items.length}</span>
                </h2>
                <ul className="mt-3 divide-y divide-midnight/10 border-y border-midnight/10">
                  {g.items.map((r) => (
                    <li key={r.id}>
                      <Link href={r.href} className="group flex items-center gap-4 py-3.5">
                        {r.image && (
                          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-ivory">
                            <Image src={r.image} alt="" fill sizes="56px" className="object-cover" />
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-midnight group-hover:text-gold-dark">{r.title}</p>
                          <p className="truncate text-[11px] text-midnight/45">{r.meta}</p>
                        </div>
                        {r.price && <p className="shrink-0 text-sm text-midnight/70">{r.price}</p>}
                        <span className="text-midnight/25 transition group-hover:translate-x-1 group-hover:text-gold-dark">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
