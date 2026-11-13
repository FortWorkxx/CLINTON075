"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/components/store/StoreProvider";
import { formatNaira, products } from "@/data/products";
import { properties } from "@/data/properties";

const tabs = ["Overview", "Orders", "Enquiries", "Saved", "Profile"] as const;
type Tab = (typeof tabs)[number];

export default function Dashboard() {
  const { orders, enquiries, wishlist, savedProperties, hydrated, cart } = useStore();
  const [tab, setTab] = useState<Tab>("Overview");
  const [profile, setProfile] = useState({
    name: "Demo Customer",
    email: "demo@example.com",
    phone: "+234 800 000 0000",
    city: "Port Harcourt",
  });
  const [saved, setSaved] = useState(false);

  if (!hydrated) {
    return <div className="shell py-24 text-center text-sm text-midnight/40">Loading your account…</div>;
  }

  const orderValue = orders.reduce((t, o) => t + o.total, 0);
  const savedProps = properties.filter((p) => savedProperties.includes(p.id));

  return (
    <div className="shell py-12 lg:py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Customer dashboard</p>
          <h1 className="display-md mt-3">Welcome back, {profile.name.split(" ")[0]}</h1>
          <p className="mt-2 text-sm text-midnight/55">
            Orders, enquiries, saved items and profile in one place.
          </p>
        </div>
        <div className="flex gap-2">
          <Link href="/fashion" className="btn-outline !px-4 !py-2.5 !text-[11px]">Shop</Link>
          <Link href="/track" className="btn-dark !px-4 !py-2.5 !text-[11px]">Track an order</Link>
        </div>
      </div>

      <div className="no-scrollbar mt-8 flex gap-1 overflow-x-auto border-b border-midnight/10">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            aria-pressed={tab === t}
            className={`shrink-0 border-b-2 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
              tab === t ? "border-gold text-midnight" : "border-transparent text-midnight/40 hover:text-midnight/70"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {tab === "Overview" && (
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { k: orders.length, l: "Orders placed", href: "#" },
                { k: enquiries.length, l: "Enquiries & quotes", href: "#" },
                { k: wishlist.length, l: "Saved pieces", href: "/wishlist" },
                { k: savedProperties.length, l: "Saved properties", href: "/wishlist" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-midnight/10 bg-white p-5">
                  <p className="font-display text-3xl text-gold-dark">{s.k}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-midnight/45">{s.l}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
              <div className="rounded-xl border border-midnight/10 bg-white p-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-xl">Active cart</h2>
                  <Link href="/cart" className="text-[11px] uppercase tracking-[0.12em] text-gold-dark hover:underline">View cart</Link>
                </div>
                {cart.length === 0 ? (
                  <p className="mt-3 text-sm text-midnight/50">
                    Your cart is empty.{" "}
                    <Link href="/fashion" className="text-gold-dark underline">Browse the store</Link>
                  </p>
                ) : (
                  <ul className="mt-4 space-y-3">
                    {cart.slice(0, 3).map((l) => (
                      <li key={l.key} className="flex items-center gap-3">
                        <div className="relative h-12 w-10 overflow-hidden rounded bg-ivory">
                          <Image src={l.image} alt={l.name} fill sizes="40px" className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-midnight">{l.name}</p>
                          <p className="text-[11px] text-midnight/45">{l.color} · {l.size} · Qty {l.qty}</p>
                        </div>
                        <p className="text-sm text-midnight">{formatNaira(l.price * l.qty)}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="rounded-xl border border-midnight/10 bg-white p-6">
                <h2 className="font-display text-xl">Lifetime value</h2>
                <p className="mt-2 font-display text-3xl text-midnight">{formatNaira(orderValue)}</p>
                <p className="mt-1 text-[11px] text-midnight/45">Across {orders.length} order(s) in this browser.</p>
                <p className="mt-4 border-t border-midnight/10 pt-3 text-[11px] leading-relaxed text-midnight/45">
                  This dashboard is a front-end demo. Connect a database and authentication provider to persist
                  accounts across devices.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-midnight/10 bg-white p-6">
              <h2 className="font-display text-xl">Recent enquiries</h2>
              <ul className="mt-4 divide-y divide-midnight/10">
                {enquiries.slice(0, 3).map((e) => (
                  <li key={e.id} className="flex flex-wrap items-center justify-between gap-2 py-3">
                    <div>
                      <p className="text-sm text-midnight">{e.reference} <span className="text-[10px] uppercase tracking-[0.1em] text-midnight/40">· {e.type}</span></p>
                      <p className="text-[11px] text-midnight/45">{e.summary}</p>
                    </div>
                    <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-gold-dark">{e.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {tab === "Orders" && (
          <div>
            {orders.length === 0 ? (
              <div className="rounded-xl border border-dashed border-midnight/20 py-20 text-center">
                <p className="font-display text-2xl">No orders yet</p>
                <p className="mt-2 text-sm text-midnight/50">Orders you place will appear here with their status.</p>
                <Link href="/fashion" className="btn-dark mt-6">Start shopping</Link>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((o) => (
                  <div key={o.id} className="rounded-xl border border-midnight/10 bg-white p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-midnight/10 pb-3">
                      <div>
                        <p className="text-sm font-semibold text-midnight">{o.id}</p>
                        <p className="text-[11px] text-midnight/45">
                          {new Date(o.date).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" })} · {o.payment}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-gold-dark">{o.status}</span>
                        <p className="text-sm font-medium">{formatNaira(o.total)}</p>
                      </div>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {o.items.map((l) => (
                        <li key={l.key} className="flex items-center justify-between text-sm text-midnight/60">
                          <span>{l.name} <span className="text-[11px] text-midnight/35">({l.color}, {l.size}) × {l.qty}</span></span>
                          <span>{formatNaira(l.price * l.qty)}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-[11px] text-midnight/45">
                      Delivering to {o.customer.address || "pickup"}, {o.customer.lga} {o.customer.state}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "Enquiries" && (
          <div className="overflow-hidden rounded-xl border border-midnight/10 bg-white">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead>
                <tr className="border-b border-midnight/10 bg-ivory/60 text-[10px] uppercase tracking-[0.12em] text-midnight/45">
                  <th className="px-4 py-3 font-medium">Reference</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Summary</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-midnight/10">
                {enquiries.map((e) => (
                  <tr key={e.id}>
                    <td className="px-4 py-3 font-medium text-midnight">{e.reference}</td>
                    <td className="px-4 py-3 text-midnight/60">{e.type}</td>
                    <td className="px-4 py-3 text-midnight/50">{e.summary}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-gold-dark">{e.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === "Saved" && (
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-xl">Saved pieces ({wishlist.length})</h2>
              <ul className="mt-4 space-y-3">
                {products.filter((p) => wishlist.includes(p.id)).map((p) => (
                  <li key={p.id} className="flex items-center gap-3 rounded-xl border border-midnight/10 bg-white p-3">
                    <div className="relative h-16 w-14 overflow-hidden rounded bg-ivory">
                      <Image src={p.image} alt={p.name} fill sizes="56px" className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <Link href={`/fashion/product/${p.slug}`} className="text-sm font-medium text-midnight hover:text-gold-dark">{p.name}</Link>
                      <p className="text-[11px] text-midnight/45">{formatNaira(p.price)}</p>
                    </div>
                  </li>
                ))}
                {wishlist.length === 0 && <p className="text-sm text-midnight/50">Nothing saved yet.</p>}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl">Saved properties ({savedProps.length})</h2>
              <ul className="mt-4 space-y-3">
                {savedProps.map((p) => (
                  <li key={p.id} className="flex items-center gap-3 rounded-xl border border-midnight/10 bg-white p-3">
                    <div className="relative h-16 w-20 overflow-hidden rounded bg-ivory">
                      <Image src={p.image} alt={p.title} fill sizes="80px" className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <Link href={`/real-estate/${p.slug}`} className="text-sm font-medium text-midnight hover:text-gold-dark">{p.title}</Link>
                      <p className="text-[11px] text-midnight/45">{formatNaira(p.price)}</p>
                    </div>
                  </li>
                ))}
                {savedProps.length === 0 && <p className="text-sm text-midnight/50">No saved properties.</p>}
              </ul>
            </div>
          </div>
        )}

        {tab === "Profile" && (
          <div className="max-w-xl rounded-xl border border-midnight/10 bg-white p-6">
            <h2 className="font-display text-xl">Profile details</h2>
            <p className="mt-1 text-xs text-midnight/45">
              Saved locally in this demo. In production this is stored against your authenticated account.
            </p>
            <div className="mt-5 space-y-4">
              {[
                { k: "name", l: "Full name" },
                { k: "email", l: "Email address" },
                { k: "phone", l: "Phone / WhatsApp" },
                { k: "city", l: "City" },
              ].map((f) => (
                <div key={f.k}>
                  <label htmlFor={`pf-${f.k}`} className="label">{f.l}</label>
                  <input
                    id={`pf-${f.k}`}
                    className="field"
                    value={profile[f.k as keyof typeof profile]}
                    onChange={(e) => { setProfile((p) => ({ ...p, [f.k]: e.target.value })); setSaved(false); }}
                  />
                </div>
              ))}
              <button onClick={() => setSaved(true)} className="btn-dark w-full">
                {saved ? "Saved ✓" : "Save changes"}
              </button>
            </div>
            <div className="mt-6 border-t border-midnight/10 pt-4">
              <p className="text-[11px] leading-relaxed text-midnight/45">
                You can request a copy or deletion of your data at any time in line with the Nigeria Data Protection
                Act. See our <Link href="/legal/privacy" className="underline decoration-gold/40 hover:text-gold-dark">privacy policy</Link>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
