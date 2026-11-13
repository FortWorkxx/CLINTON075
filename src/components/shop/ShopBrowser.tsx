"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { categories, products, type Product } from "@/data/products";

type Sort = "featured" | "price-asc" | "price-desc" | "newest";

export default function ShopBrowser({
  initialCategory = "all",
  limit,
}: {
  initialCategory?: string;
  limit?: number;
}) {
  const [category, setCategory] = useState<string>(initialCategory);
  const [query, setQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(250000);
  const [sort, setSort] = useState<Sort>("featured");
  const [onlyInStock, setOnlyInStock] = useState(false);

  const filtered = useMemo(() => {
    let list: Product[] = products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (p.price > maxPrice) return false;
      if (onlyInStock && p.stock < 1) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        );
      }
      return true;
    });

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "newest") list = [...list].sort((a, b) => (b.badge === "New" ? 1 : 0) - (a.badge === "New" ? 1 : 0));
    if (sort === "featured")
      list = [...list].sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0));

    return limit ? list.slice(0, limit) : list;
  }, [category, query, maxPrice, sort, onlyInStock, limit]);

  return (
    <div className="grid gap-10 lg:grid-cols-[15rem_1fr] lg:gap-14">
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="space-y-7">
          <div>
            <label htmlFor="shop-search" className="label">Search</label>
            <input
              id="shop-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Shirt, silk, leather…"
              className="field"
            />
          </div>

          <div>
            <p className="label">Category</p>
            <div className="flex flex-wrap gap-2 lg:flex-col lg:items-start">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCategory(c.id)}
                  aria-pressed={category === c.id}
                  className={`rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.1em] transition ${
                    category === c.id
                      ? "bg-midnight text-ivory"
                      : "bg-white text-midnight/60 hover:bg-midnight/5"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="price" className="label">Max price</label>
            <input
              id="price"
              type="range"
              min={25000}
              max={250000}
              step={5000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-gold-dark"
            />
            <p className="mt-1 text-xs text-midnight/50">
              Up to ₦{maxPrice.toLocaleString("en-NG")}
            </p>
          </div>

          <label className="flex cursor-pointer items-center gap-2.5 text-sm text-midnight/65">
            <input
              type="checkbox"
              checked={onlyInStock}
              onChange={(e) => setOnlyInStock(e.target.checked)}
              className="h-4 w-4 accent-gold-dark"
            />
            In stock only
          </label>

          <div className="rounded-xl border border-midnight/10 bg-white p-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-midnight/45">Delivery</p>
            <p className="mt-2 text-sm leading-relaxed text-midnight/60">
              Rivers 1–2 days · Nationwide 2–5 days. Free over ₦150,000.
            </p>
          </div>
        </div>
      </aside>

      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-midnight/10 pb-4">
          <p className="text-sm text-midnight/50">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <label className="flex items-center gap-2 text-sm text-midnight/50">
            Sort
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="rounded-lg border border-midnight/15 bg-white px-3 py-1.5 text-sm text-midnight outline-none focus:border-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="newest">Newest</option>
            </select>
          </label>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed border-midnight/20 py-20 text-center">
            <p className="font-display text-2xl text-midnight">No pieces match those filters</p>
            <p className="mt-2 text-sm text-midnight/50">Try widening the price range or clearing your search.</p>
            <button
              onClick={() => {
                setCategory("all");
                setQuery("");
                setMaxPrice(250000);
                setOnlyInStock(false);
              }}
              className="btn-dark mt-6"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
