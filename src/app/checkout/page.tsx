"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/components/store/StoreProvider";
import { formatNaira } from "@/data/products";

const nigerianStates = [
  "Lagos", "Abuja (FCT)", "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
  "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe",
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Nasarawa",
  "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba",
  "Yobe", "Zamfara",
];

const deliveryOptions = [
  { id: "standard", label: "Standard delivery", note: "2–5 working days", price: 4500 },
  { id: "express", label: "Lagos express", note: "Next working day in Lagos", price: 8000 },
  { id: "pickup", label: "Pick up at our Lekki office", note: "Ready in 1 working day", price: 0 },
];

const paymentOptions = [
  { id: "card", label: "Card payment", note: "Visa, Mastercard, Verve" },
  { id: "transfer", label: "Bank transfer", note: "Account details sent with your invoice" },
  { id: "ussd", label: "USSD", note: "Pay from your phone" },
];

export default function CheckoutPage() {
  const { cart, cartSubtotal, discountRate, discount, placeOrder, hydrated } = useStore();
  const [step, setStep] = useState<1 | 2>(1);
  const [delivery, setDelivery] = useState("standard");
  const [payment, setPayment] = useState("card");
  const [order, setOrder] = useState<{ id: string; total: number } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "", state: "Lagos", lga: "", notes: "",
  });

  const deliveryPrice = deliveryOptions.find((d) => d.id === delivery)?.price ?? 0;
  const discountAmount = Math.round(cartSubtotal * discountRate);
  const total = cartSubtotal - discountAmount + deliveryPrice;

  const set = (k: keyof typeof form, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  if (!hydrated) return <div className="shell py-24 text-center text-sm text-midnight/40">Loading…</div>;

  if (order) {
    return (
      <div className="shell py-20 lg:py-28">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-2xl text-gold-dark">✓</div>
          <h1 className="display-md mt-6">Order placed</h1>
          <p className="mt-3 text-sm leading-relaxed text-midnight/60">
            Thank you, {form.name.split(" ")[0] || "customer"}. Your order reference is{" "}
            <strong className="text-midnight">{order.id}</strong> for{" "}
            <strong className="text-midnight">{formatNaira(order.total)}</strong>.
          </p>
          <div className="mt-6 rounded-xl border border-midnight/10 bg-white p-5 text-left text-sm">
            <p className="text-[11px] uppercase tracking-[0.14em] text-midnight/40">What happens next</p>
            <ol className="mt-3 space-y-2.5 text-midnight/65">
              <li>1. You receive an email confirmation with payment instructions.</li>
              <li>2. We confirm payment before the order is packed.</li>
              <li>3. Dispatch notification with tracking is sent on the day of shipping.</li>
            </ol>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/account" className="btn-dark">View my account</Link>
            <Link href="/fashion" className="btn-outline">Continue shopping</Link>
          </div>
          <p className="mt-5 text-[11px] text-midnight/35">
            Demo checkout — no payment has been taken. Connect Paystack or Flutterwave to process live payments.
          </p>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="shell py-24 text-center">
        <h1 className="display-md">Your cart is empty</h1>
        <p className="mt-3 text-sm text-midnight/55">Add a piece to your cart before checking out.</p>
        <Link href="/fashion" className="btn-dark mt-7">Shop the collection</Link>
      </div>
    );
  }

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) next.email = "Enter a valid email.";
    if (form.phone.replace(/\D/g, "").length < 10) next.phone = "Enter a valid phone number.";
    if (delivery !== "pickup") {
      if (!form.address.trim()) next.address = "Enter your delivery address.";
      if (!form.lga.trim()) next.lga = "Enter your local government area.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const placed = placeOrder(
      { name: form.name, email: form.email, phone: form.phone, address: form.address, state: form.state, lga: form.lga },
      paymentOptions.find((p) => p.id === payment)?.label ?? "Card payment",
      deliveryPrice
    );
    setOrder({ id: placed.id, total: placed.total });
  };

  return (
    <div className="shell py-14 lg:py-20">
      <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-[0.14em] text-midnight/40">
        <Link href="/cart" className="hover:text-gold-dark">Cart</Link> <span className="mx-2">/</span>
        <span className="text-midnight/70">Checkout</span>
      </nav>
      <h1 className="display-md mt-4">Checkout</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
        <form onSubmit={submit} className="space-y-8">
          <section className="rounded-2xl border border-midnight/10 bg-white p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-midnight text-[11px] font-semibold text-gold">1</span>
              <h2 className="font-display text-xl">Contact & delivery</h2>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="c-name" className="label">Full name *</label>
                <input id="c-name" className="field" value={form.name} onChange={(e) => set("name", e.target.value)} />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="c-email" className="label">Email *</label>
                <input id="c-email" type="email" className="field" value={form.email} onChange={(e) => set("email", e.target.value)} />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="c-phone" className="label">Phone *</label>
                <input id="c-phone" type="tel" className="field" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="0800 000 0000" />
                {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="c-state" className="label">State</label>
                <select id="c-state" className="field" value={form.state} onChange={(e) => set("state", e.target.value)}>
                  {nigerianStates.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="c-lga" className="label">Local government area</label>
                <input id="c-lga" className="field" value={form.lga} onChange={(e) => set("lga", e.target.value)} placeholder="E.g. Eti-Osa" />
                {errors.lga && <p className="mt-1 text-xs text-red-600">{errors.lga}</p>}
              </div>
              <div>
                <label htmlFor="c-address" className="label">Delivery address</label>
                <input id="c-address" className="field" value={form.address} onChange={(e) => set("address", e.target.value)} placeholder="Street, building, landmark" />
                {errors.address && <p className="mt-1 text-xs text-red-600">{errors.address}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="c-notes" className="label">Delivery notes (optional)</label>
                <textarea id="c-notes" rows={3} className="field" value={form.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Gate code, preferred delivery time…" />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-midnight/10 bg-white p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-midnight text-[11px] font-semibold text-gold">2</span>
              <h2 className="font-display text-xl">Delivery method</h2>
            </div>
            <div className="mt-5 space-y-2">
              {deliveryOptions.map((d) => (
                <label key={d.id} className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${delivery === d.id ? "border-gold bg-gold/5" : "border-midnight/10 hover:border-midnight/25"}`}>
                  <input type="radio" name="delivery" checked={delivery === d.id} onChange={() => setDelivery(d.id)} className="h-4 w-4 accent-gold-dark" />
                  <span className="flex-1">
                    <span className="block text-sm font-medium text-midnight">{d.label}</span>
                    <span className="block text-xs text-midnight/50">{d.note}</span>
                  </span>
                  <span className="text-sm text-midnight">{d.price === 0 ? "Free" : formatNaira(d.price)}</span>
                </label>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-midnight/10 bg-white p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-midnight text-[11px] font-semibold text-gold">3</span>
              <h2 className="font-display text-xl">Payment</h2>
            </div>
            <div className="mt-5 space-y-2">
              {paymentOptions.map((p) => (
                <label key={p.id} className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${payment === p.id ? "border-gold bg-gold/5" : "border-midnight/10 hover:border-midnight/25"}`}>
                  <input type="radio" name="payment" checked={payment === p.id} onChange={() => setPayment(p.id)} className="h-4 w-4 accent-gold-dark" />
                  <span className="flex-1">
                    <span className="block text-sm font-medium text-midnight">{p.label}</span>
                    <span className="block text-xs text-midnight/50">{p.note}</span>
                  </span>
                </label>
              ))}
            </div>
            <p className="mt-4 rounded-lg bg-ivory px-4 py-3 text-[11px] leading-relaxed text-midnight/55">
              This demo does not collect card details. In production, card payments are processed on a PCI-compliant
              gateway (Paystack or Flutterwave) and verified before an order is marked paid.
            </p>
          </section>

          <button type="submit" className="btn-gold w-full">
            Place order · {formatNaira(total)}
          </button>
        </form>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-midnight/10 bg-white p-6">
            <h2 className="font-display text-xl">Your order</h2>
            <ul className="mt-5 space-y-4">
              {cart.map((l) => (
                <li key={l.key} className="flex gap-3">
                  <div className="relative h-16 w-14 shrink-0 overflow-hidden rounded-md bg-ivory">
                    <Image src={l.image} alt={l.name} fill sizes="60px" className="object-cover" />
                  </div>
                  <div className="flex flex-1 justify-between gap-2">
                    <div>
                      <p className="text-sm font-medium text-midnight">{l.name}</p>
                      <p className="text-[11px] text-midnight/45">{l.color} · {l.size} · Qty {l.qty}</p>
                    </div>
                    <p className="whitespace-nowrap text-sm text-midnight">{formatNaira(l.price * l.qty)}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-5 space-y-2.5 border-t border-midnight/10 pt-4 text-sm">
              <div className="flex justify-between text-midnight/60"><span>Subtotal</span><span className="text-midnight">{formatNaira(cartSubtotal)}</span></div>
              {discount && (
                <div className="flex justify-between text-gold-dark"><span>Discount ({discount})</span><span>−{formatNaira(discountAmount)}</span></div>
              )}
              <div className="flex justify-between text-midnight/60"><span>Delivery</span><span className="text-midnight">{deliveryPrice === 0 ? "Free" : formatNaira(deliveryPrice)}</span></div>
              <div className="flex justify-between border-t border-midnight/10 pt-3 text-base font-semibold"><span>Total</span><span>{formatNaira(total)}</span></div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
