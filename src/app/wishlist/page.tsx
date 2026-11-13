"use client";

import Link from "next/link";
import ProductCard from "@/components/shop/ProductCard";
import { useStore } from "@/components/store/StoreProvider";
import { products } from "@/data/products";
import { properties } from "@/data/properties";
import { formatNaira } from "@/data/products";
import Image from "next/image";

export default function WishlistPage() {
  const { wishlist, savedProperties, hydrated, toggleSavedProperty } = useStore();
  const saved = products.filter((p) => wishlist.includes(p.id));
  const savedProps = properties.filter((p) => savedProperties.includes(p.id));

  if (!hydrated) return <div className="shell py-24 text-center text-sm text-midnight/40">Loading…</div>;

  return (
    <div className="shell py-14 lg:py-20">
      <p className="eyebrow">Saved</p>
      <h1 className="display-md mt-3">Your wishlist</h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-midnight/55">
        Pieces and properties you have saved. Items stay here until you remove them or add them to your cart.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl">Fashion pieces</h2>
        {saved.length === 0 ? (
          <div className="mt-4 rounded-xl border border-dashed border-midnight/20 py-16 text-center">
            <p className="text-sm text-midnight/55">No saved pieces yet.</p>
            <Link href="/fashion" className="btn-dark mt-5">Browse the store</Link>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 lg:grid-cols-4">
            {saved.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </section>

      <section className="mt-16 border-t border-midnight/10 pt-12">
        <h2 className="font-display text-2xl">Saved properties</h2>
        {savedProps.length === 0 ? (
          <div className="mt-4 rounded-xl border border-dashed border-midnight/20 py-16 text-center">
            <p className="text-sm text-midnight/55">No saved properties yet.</p>
            <Link href="/real-estate" className="btn-dark mt-5">Browse properties</Link>
          </div>
        ) : (
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {savedProps.map((p) => (
              <div key={p.id} className="overflow-hidden rounded-xl border border-midnight/10 bg-white">
                <Link href={`/real-estate/${p.slug}`} className="relative block aspect-[4/3]">
                  <Image src={p.image} alt={p.title} fill sizes="33vw" className="object-cover" />
                </Link>
                <div className="p-4">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-midnight/40">{p.neighbourhood}, {p.city}</p>
                  <h3 className="mt-1 font-display text-lg leading-snug">{p.title}</h3>
                  <p className="mt-1 text-sm font-medium">{formatNaira(p.price)}</p>
                  <div className="mt-3 flex justify-between text-[11px] uppercase tracking-[0.1em]">
                    <Link href={`/real-estate/${p.slug}`} className="text-gold-dark hover:underline">View listing</Link>
                    <button onClick={() => toggleSavedProperty(p.id)} className="text-midnight/40 hover:text-red-600">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
