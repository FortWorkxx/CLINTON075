"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { formatNaira, type Product } from "@/data/products";
import { useStore } from "@/components/store/StoreProvider";
import { site } from "@/data/site";

export default function ProductDetail({ product, related }: { product: Product; related: Product[] }) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const [size, setSize] = useState(product.sizes.length > 1 ? "" : product.sizes[0]);
  const [color, setColor] = useState(product.colors[0].name);
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState("");

  const wishlisted = isWishlisted(product.id);

  const handleAdd = () => {
    if (!size) {
      setError("Please select a size.");
      return;
    }
    setError("");
    addToCart(product, { size, color, qty });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2600);
  };

  return (
    <div className="shell py-10 lg:py-14">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-midnight/40">
        <Link href="/" className="hover:text-gold-dark">Home</Link>
        <span>/</span>
        <Link href="/fashion" className="hover:text-gold-dark">Fashion</Link>
        <span>/</span>
        <span className="text-midnight/70">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ivory">
            <Image
              src={product.images[activeImage] ?? product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {product.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-midnight/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur">
                {product.badge}
              </span>
            )}
          </div>
          <div className="mt-3 flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={img + i}
                onClick={() => setActiveImage(i)}
                aria-label={`View image ${i + 1}`}
                aria-pressed={activeImage === i}
                className={`relative h-20 w-16 overflow-hidden rounded-lg border-2 transition ${
                  activeImage === i ? "border-gold" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image src={img} alt="" fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gold-dark">{product.fabric} · {product.sku}</p>
          <h1 className="display-md mt-3">{product.name}</h1>
          <div className="mt-3 flex items-baseline gap-3">
            <p className="font-display text-2xl text-midnight">{formatNaira(product.price)}</p>
            {product.compareAt && (
              <>
                <span className="text-sm text-midnight/35 line-through">{formatNaira(product.compareAt)}</span>
                <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-gold-dark">
                  Save {formatNaira(product.compareAt - product.price)}
                </span>
              </>
            )}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-midnight/65">{product.description}</p>

          <div className="mt-7 space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <p className="label !mb-0">Colour</p>
                <p className="text-xs text-midnight/50">{color}</p>
              </div>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setColor(c.name)}
                    aria-pressed={color === c.name}
                    aria-label={c.name}
                    className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] transition ${
                      color === c.name ? "border-gold bg-gold/10 text-midnight" : "border-midnight/15 text-midnight/60 hover:border-midnight/30"
                    }`}
                  >
                    <span className="h-3 w-3 rounded-full ring-1 ring-midnight/15" style={{ background: c.hex }} />
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <p className="label !mb-0">Size</p>
                <Link href="/contact" className="text-[11px] text-midnight/45 underline decoration-gold/40 hover:text-gold-dark">
                  Size guide
                </Link>
              </div>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setSize(s); setError(""); }}
                    aria-pressed={size === s}
                    className={`min-w-[3rem] rounded-lg border px-3 py-2 text-xs font-medium transition ${
                      size === s ? "border-midnight bg-midnight text-ivory" : "border-midnight/15 text-midnight/70 hover:border-midnight/40"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-full border border-midnight/15">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity" className="grid h-11 w-11 place-items-center text-midnight/60 hover:text-midnight">−</button>
                <span className="w-8 text-center text-sm font-medium">{qty}</span>
                <button onClick={() => setQty((q) => Math.min(10, q + 1))} aria-label="Increase quantity" className="grid h-11 w-11 place-items-center text-midnight/60 hover:text-midnight">+</button>
              </div>
              <p className="text-[11px] uppercase tracking-[0.12em] text-midnight/45">
                {product.stock <= 10 ? `Only ${product.stock} left` : "In stock"}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button onClick={handleAdd} className="btn-dark flex-1">
                {added ? "Added to cart ✓" : "Add to cart"}
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`btn-outline ${wishlisted ? "!border-gold !text-gold-dark" : ""}`}
                aria-pressed={wishlisted}
              >
                {wishlisted ? "Saved" : "Wishlist"}
              </button>
            </div>

            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hello Clinton Global, I would like to order the ${product.name} (${product.sku}).`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-[11px] uppercase tracking-[0.14em] text-midnight/45 underline decoration-gold/40 hover:text-gold-dark"
            >
              Or order directly on WhatsApp
            </a>

            {added && (
              <div role="status" className="flex items-center justify-between rounded-xl border border-gold/40 bg-gold/10 px-4 py-3 text-sm">
                <span>Added to your cart.</span>
                <Link href="/cart" className="font-semibold text-gold-dark underline">View cart →</Link>
              </div>
            )}
          </div>

          <div className="mt-9 grid gap-px overflow-hidden rounded-xl border border-midnight/10 bg-midnight/10 sm:grid-cols-2">
            {[
              { t: "Delivery", d: "Rivers 1–2 working days. Nationwide 2–5 days. Free over ₦150,000." },
              { t: "Returns", d: "14 days on unworn pieces with tags. Bespoke items excluded." },
              { t: "Payment", d: "Card, bank transfer or USSD via our Nigerian gateway." },
              { t: "Care", d: "Care instructions are sewn into every garment." },
            ].map((b) => (
              <div key={b.t} className="bg-white p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-dark">{b.t}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-midnight/55">{b.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-midnight/45">Product details</p>
            <ul className="mt-3 space-y-2">
              {product.details.map((d) => (
                <li key={d} className="flex gap-2.5 text-sm text-midnight/65">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-20 border-t border-midnight/10 pt-14">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Complete the look</p>
            <h2 className="display-md mt-3">You may also like</h2>
          </div>
          <Link href="/fashion" className="btn-ghost hidden sm:inline-flex">All pieces <span>→</span></Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {related.map((p) => (
            <Link key={p.id} href={`/fashion/product/${p.slug}`} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ivory">
                <Image src={p.image} alt={p.name} fill sizes="25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="mt-3 text-sm font-medium text-midnight group-hover:text-gold-dark">{p.name}</h3>
              <p className="mt-1 text-sm text-midnight/55">{formatNaira(p.price)}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
