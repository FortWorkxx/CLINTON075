"use client";

import Link from "next/link";
import { useState } from "react";
import { formatNaira } from "@/data/products";
import { useStore } from "@/components/store/StoreProvider";

const stages = ["Processing", "Packed", "In transit", "Delivered"] as const;

export default function TrackPage() {
  const { orders } = useStore();
  const [ref, setRef] = useState("");
  const [result, setResult] = useState<null | { found: boolean; searched: string }>(null);

  const order = orders.find((o) => o.id.toLowerCase() === result?.searched.toLowerCase());
  const stageIndex = order ? stages.indexOf(order.status) : -1;

  return (
    <div className="shell py-14 lg:py-20">
      <div className="mx-auto max-w-2xl">
        <p className="eyebrow">Order tracking</p>
        <h1 className="display-md mt-3">Track your order</h1>
        <p className="mt-3 text-sm leading-relaxed text-midnight/55">
          Enter the order reference from your confirmation email. In this demo, references from orders placed in this
          browser will be found.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setResult({ found: orders.some((o) => o.id.toLowerCase() === ref.trim().toLowerCase()), searched: ref.trim() });
          }}
          className="mt-7 flex flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="ref" className="sr-only">Order reference</label>
          <input
            id="ref"
            value={ref}
            onChange={(e) => setRef(e.target.value)}
            placeholder="e.g. CGI-482913"
            className="field"
            required
          />
          <button type="submit" className="btn-dark shrink-0">Track order</button>
        </form>

        {orders.length > 0 && (
          <p className="mt-3 text-[11px] text-midnight/40">
            Your references: {orders.map((o) => o.id).join(", ")}
          </p>
        )}

        {result && (
          <div className="mt-8 rounded-2xl border border-midnight/10 bg-white p-6">
            {!result.found ? (
              <>
                <h2 className="font-display text-xl">No order found for “{result.searched}”</h2>
                <p className="mt-2 text-sm text-midnight/55">
                  Check the reference and try again, or contact us and we will look it up. If you have not placed an
                  order in this browser, tracking data will not exist in this demo.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-outline !px-4 !py-2.5 !text-[11px]">Contact support</Link>
                  <Link href="/account" className="btn-dark !px-4 !py-2.5 !text-[11px]">Go to dashboard</Link>
                </div>
              </>
            ) : order ? (
              <>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-midnight/40">Order</p>
                    <h2 className="font-display text-xl">{order.id}</h2>
                    <p className="mt-1 text-[11px] text-midnight/45">
                      Placed {new Date(order.date).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" })}
                    </p>
                  </div>
                  <p className="font-medium text-midnight">{formatNaira(order.total)}</p>
                </div>

                <ol className="mt-7 space-y-4">
                  {stages.map((s, i) => {
                    const done = i <= stageIndex;
                    return (
                      <li key={s} className="flex items-start gap-4">
                        <span className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border text-[10px] ${done ? "border-gold bg-gold text-midnight" : "border-midnight/20 text-midnight/30"}`}>
                          {done ? "✓" : i + 1}
                        </span>
                        <div>
                          <p className={`text-sm ${done ? "font-medium text-midnight" : "text-midnight/40"}`}>{s}</p>
                          <p className="text-[11px] text-midnight/40">
                            {i === 0 && "Order received and payment being confirmed"}
                            {i === 1 && "Packed and awaiting dispatch"}
                            {i === 2 && "With our delivery partner"}
                            {i === 3 && "Delivered to your address"}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>

                <ul className="mt-6 space-y-2 border-t border-midnight/10 pt-4 text-sm text-midnight/60">
                  {order.items.map((l) => (
                    <li key={l.key} className="flex justify-between">
                      <span>{l.name} × {l.qty}</span>
                      <span>{formatNaira(l.price * l.qty)}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-lg bg-ivory px-4 py-3 text-[11px] text-midnight/50">
                  Demo tracking: status is stored locally and does not change automatically. Connect an order
                  management backend for live updates.
                </p>
              </>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
