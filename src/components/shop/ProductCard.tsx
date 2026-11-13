"use client";

import Image from "next/image";
import Link from "next/link";
import { formatNaira, type Product } from "@/data/products";
import { useStore } from "@/components/store/StoreProvider";

export default function ProductCard({ product }: { product: Product }) {
  const { toggleWishlist, isWishlisted } = useStore();
  const wishlisted = isWishlisted(product.id);

  return (
    <article className="group relative">
      <Link href={`/fashion/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ivory">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {product.badge && (
            <span className="absolute left-3 top-3 rounded-full bg-midnight/85 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur">
              {product.badge}
            </span>
          )}
          {product.stock <= 10 && (
            <span className="absolute bottom-3 left-3 rounded-full bg-ivory/95 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-midnight/70 backdrop-blur">
              Only {product.stock} left
            </span>
          )}
        </div>
      </Link>

      <button
        onClick={() => toggleWishlist(product.id)}
        aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
        aria-pressed={wishlisted}
        className={`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full backdrop-blur transition ${
          wishlisted
            ? "bg-gold text-midnight"
            : "bg-white/85 text-midnight/60 opacity-0 hover:text-gold-dark group-hover:opacity-100 focus-visible:opacity-100"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill={wishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6">
          <path d="M12 20s-7.4-4.5-7.4-9.4A4.1 4.1 0 0 1 12 7.6a4.1 4.1 0 0 1 7.4 3c0 4.9-7.4 9.4-7.4 9.4Z" />
        </svg>
      </button>

      <div className="mt-3.5 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.16em] text-midnight/40">{product.fabric}</p>
          <h3 className="mt-1 truncate text-sm font-medium text-midnight transition group-hover:text-gold-dark">
            <Link href={`/fashion/product/${product.slug}`}>{product.name}</Link>
          </h3>
          <p className="mt-1.5 flex items-baseline gap-2 text-sm">
            <span className="font-medium text-midnight">{formatNaira(product.price)}</span>
            {product.compareAt && (
              <span className="text-xs text-midnight/35 line-through">{formatNaira(product.compareAt)}</span>
            )}
          </p>
        </div>
        <div className="mt-4 flex shrink-0 gap-1" aria-hidden="true">
          {product.colors.slice(0, 3).map((c) => (
            <span
              key={c.name}
              className="h-2.5 w-2.5 rounded-full ring-1 ring-midnight/15"
              style={{ background: c.hex }}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
