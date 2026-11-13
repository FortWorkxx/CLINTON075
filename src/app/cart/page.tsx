"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/components/store/StoreProvider";
import { formatNaira } from "@/data/products";

export default function CartPage() {
  const { cart, cartSubtotal, updateQty, removeFromCart, applyDiscount, discount, discountRate, hydrated } = useStore();
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const delivery = cartSubtotal === 0 ? 0 : cartSubtotal >= 150_000 ? 0 : 4_500;
  const discountAmount = Math.round(cartSubtotal * discountRate);
  const total = cartSubtotal - discountAmount + delivery;

  if (!hydrated) {
    return <div className="shell py-24 text-center text-sm text-midnight/40">Loading your cart…</div>;
  }

  if (cart.length === 0) {
    return (
      <div className="shell py-20 lg:py-28">
        <div className="mx-auto max-w-lg text-center">
          <p className="eyebrow">Your cart</p>
          <h1 className="display-md mt-4">Nothing here yet</h1>
          <p className="mt-4 text-sm leading-relaxed text-midnight/55">
            Browse the collection and add pieces to your cart. Saved items stay in your wishlist until you are ready.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/fashion" className="btn-dark">Shop the collection</Link>
            <Link href="/wishlist" className="btn-outline">View wishlist</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shell py-14 lg:py-20">
      <p className="eyebrow">Checkout</p>
      <h1 className="display-md mt-3">Your cart</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        <div>
          <ul className="divide-y divide-midnight/10 border-y border-midnight/10">
            {cart.map((line) => (
              <li key={line.key} className="flex gap-4 py-5 sm:gap-6">
                <Link href={`/fashion/product/${line.slug}`} className="relative h-28 w-24 shrink-0 overflow-hidden rounded-lg bg-ivory sm:h-32 sm:w-28">
                  <Image src={line.image} alt={line.name} fill sizes="120px" className="object-cover" />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between gap-3">
                    <div>
                      <Link href={`/fashion/product/${line.slug}`} className="text-sm font-medium text-midnight hover:text-gold-dark sm:text-base">
                        {line.name}
                      </Link>
                      <p className="mt-1 text-xs text-midnight/45">{line.color} · Size {line.size}</p>
                    </div>
                    <p className="whitespace-nowrap text-sm font-medium text-midnight">{formatNaira(line.price * line.qty)}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div className="flex items-center rounded-full border border-midnight/15">
                      <button onClick={() => updateQty(line.key, line.qty - 1)} aria-label="Decrease quantity" className="grid h-9 w-9 place-items-center text-midnight/60 hover:text-midnight">−</button>
                      <span className="w-6 text-center text-sm">{line.qty}</span>
                      <button onClick={() => updateQty(line.key, line.qty + 1)} aria-label="Increase quantity" className="grid h-9 w-9 place-items-center text-midnight/60 hover:text-midnight">+</button>
                    </div>
                    <button onClick={() => removeFromCart(line.key)} className="text-[11px] uppercase tracking-[0.12em] text-midnight/40 transition hover:text-red-600">
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <Link href="/fashion" className="btn-ghost"><span>←</span> Continue shopping</Link>
            <p className="text-xs text-midnight/45">
              {delivery === 0 ? "Free delivery applied." : `Add ${formatNaira(150_000 - cartSubtotal)} for free delivery.`}
            </p>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-midnight/10 bg-white p-6">
            <h2 className="font-display text-xl">Order summary</h2>

            <div className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between text-midnight/65">
                <span>Subtotal</span>
                <span className="text-midnight">{formatNaira(cartSubtotal)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-gold-dark">
                  <span>Discount ({discount})</span>
                  <span>−{formatNaira(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-midnight/65">
                <span>Delivery</span>
                <span className="text-midnight">{delivery === 0 ? "Free" : formatNaira(delivery)}</span>
              </div>
              <div className="flex justify-between border-t border-midnight/10 pt-3 text-base font-semibold text-midnight">
                <span>Total</span>
                <span>{formatNaira(total)}</span>
              </div>
            </div>

            <div className="mt-5 border-t border-midnight/10 pt-5">
              <label htmlFor="discount" className="label">Discount code</label>
              <div className="flex gap-2">
                <input
                  id="discount"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="CLINTON10"
                  className="field"
                />
                <button
                  onClick={() => {
                    const res = applyDiscount(code);
                    setMsg({ ok: res.ok, text: res.message });
                  }}
                  className="shrink-0 rounded-xl bg-midnight px-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-ivory"
                >
                  Apply
                </button>
              </div>
              {msg && (
                <p className={`mt-2 text-xs ${msg.ok ? "text-green-700" : "text-red-600"}`}>{msg.text}</p>
              )}
              <p className="mt-2 text-[11px] text-midnight/40">Try CLINTON10 or WELCOME5 in this demo.</p>
            </div>

            <Link href="/checkout" className="btn-gold mt-6 w-full">
              Proceed to checkout
            </Link>

            <div className="mt-4 space-y-2 text-[11px] text-midnight/45">
              <p>✓ Secure card, transfer and USSD payment</p>
              <p>✓ 14-day returns on unworn pieces</p>
              <p>✓ Order updates by email and WhatsApp</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
