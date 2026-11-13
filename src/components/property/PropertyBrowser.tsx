"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { formatNaira } from "@/data/products";
import { properties, propertyTypes, purposes } from "@/data/properties";

export default function PropertyBrowser({ compact = false }: { compact?: boolean }) {
  const [purpose, setPurpose] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [beds, setBeds] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(700_000_000);
  const [furnished, setFurnished] = useState(false);
  const [query, setQuery] = useState("");

  const cities = useMemo(
    () => Array.from(new Set(properties.map((p) => p.city))).sort(),
    []
  );

  const filtered = useMemo(
    () =>
      properties.filter((p) => {
        if (purpose && p.purpose !== purpose) return false;
        if (type && p.type !== type) return false;
        if (city && p.city !== city) return false;
        if (beds && (p.bedrooms ?? 0) < Number(beds)) return false;
        if (p.price > maxPrice) return false;
        if (furnished && !p.furnished) return false;
        if (query.trim()) {
          const q = query.toLowerCase();
          return (
            p.title.toLowerCase().includes(q) ||
            p.neighbourhood.toLowerCase().includes(q) ||
            p.city.toLowerCase().includes(q)
          );
        }
        return true;
      }),
    [purpose, type, city, beds, maxPrice, furnished, query]
  );

  const reset = () => {
    setPurpose("");
    setType("");
    setCity("");
    setBeds("");
    setMaxPrice(700_000_000);
    setFurnished(false);
    setQuery("");
  };

  return (
    <div>
      <div className="rounded-2xl border border-midnight/10 bg-white p-5 shadow-card sm:p-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label htmlFor="pb-purpose" className="label">Purpose</label>
            <select id="pb-purpose" value={purpose} onChange={(e) => setPurpose(e.target.value)} className="field">
              <option value="">Any</option>
              {purposes.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="pb-type" className="label">Property type</label>
            <select id="pb-type" value={type} onChange={(e) => setType(e.target.value)} className="field">
              <option value="">Any</option>
              {propertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="pb-city" className="label">Location</label>
            <select id="pb-city" value={city} onChange={(e) => setCity(e.target.value)} className="field">
              <option value="">All Lagos areas</option>
              {cities.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="pb-beds" className="label">Min. bedrooms</label>
            <select id="pb-beds" value={beds} onChange={(e) => setBeds(e.target.value)} className="field">
              <option value="">Any</option>
              {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}+</option>)}
            </select>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto]">
          <div>
            <label htmlFor="pb-max" className="label">
              Max price — {formatNaira(maxPrice)}
            </label>
            <input
              id="pb-max"
              type="range"
              min={40_000_000}
              max={700_000_000}
              step={5_000_000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-gold-dark"
            />
          </div>
          <div>
            <label htmlFor="pb-q" className="label">Keyword</label>
            <input
              id="pb-q"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Lekki, penthouse…"
              className="field"
            />
          </div>
          <div className="flex items-end gap-3">
            <label className="flex h-[3.1rem] cursor-pointer items-center gap-2 text-sm text-midnight/60">
              <input type="checkbox" checked={furnished} onChange={(e) => setFurnished(e.target.checked)} className="h-4 w-4 accent-gold-dark" />
              Furnished
            </label>
            <button onClick={reset} className="h-[3.1rem] rounded-xl px-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-midnight/50 transition hover:text-gold-dark">
              Reset
            </button>
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-midnight/50">
        {filtered.length} {filtered.length === 1 ? "property" : "properties"} matching your search
      </p>

      {filtered.length === 0 ? (
        <div className="mt-5 rounded-xl border border-dashed border-midnight/20 py-20 text-center">
          <p className="font-display text-2xl text-midnight">Nothing matches those filters</p>
          <p className="mt-2 text-sm text-midnight/50">Widen the price range or clear the location filter.</p>
          <button onClick={reset} className="btn-dark mt-6">Reset search</button>
        </div>
      ) : (
        <div className={`mt-5 grid gap-6 ${compact ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"}`}>
          {filtered.map((p) => (
            <Link
              key={p.id}
              href={`/real-estate/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-midnight/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 flex gap-2">
                  <span className="rounded-full bg-midnight/85 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur">
                    For {p.purpose}
                  </span>
                  {p.status !== "Available" && (
                    <span className="rounded-full bg-ivory/90 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-midnight/70 backdrop-blur">
                      {p.status}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[10px] uppercase tracking-[0.16em] text-midnight/40">
                  {p.neighbourhood}, {p.city}
                </p>
                <h3 className="mt-1.5 font-display text-xl leading-snug text-midnight group-hover:text-gold-dark">
                  {p.title}
                </h3>
                <p className="mt-2 font-medium text-midnight">
                  {formatNaira(p.price)}
                  {p.priceUnit && <span className="text-xs font-normal text-midnight/45">/{p.priceUnit}</span>}
                </p>
                <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 border-t border-midnight/10 pt-3 text-[11px] uppercase tracking-[0.1em] text-midnight/45">
                  {p.bedrooms ? <span>{p.bedrooms} bed</span> : null}
                  {p.bathrooms ? <span>{p.bathrooms} bath</span> : null}
                  <span>{p.buildingSize !== "—" ? p.buildingSize : p.landSize}</span>
                  {p.furnished && <span className="text-gold-dark">Furnished</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
