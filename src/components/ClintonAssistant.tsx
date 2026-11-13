"use client";

import Link from "next/link";
import { useState } from "react";

const topics = [
  { label: "Marine services", href: "/marine", reply: "Explore the marine division and use its enquiry form to discuss your engine or service needs." },
  { label: "Find a property", href: "/real-estate", reply: "Browse the property catalogue and contact the team about a listing or inspection." },
  { label: "Fashion store", href: "/fashion", reply: "Visit the fashion catalogue to explore products and current ordering information." },
  { label: "AI Operator", href: "/ai-operator", reply: "The AI Operator scope is still being confirmed. Visit the division page for its current status." },
  { label: "Contact the team", href: "/contact", reply: "Send a message using the contact form. A human team member will follow up." },
];

export default function ClintonAssistant() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<(typeof topics)[number] | null>(null);

  return (
    <div className="fixed bottom-5 left-4 z-40 sm:bottom-7 sm:left-7">
      {open && (
        <section className="mb-3 w-[min(21rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-midnight/10 bg-white shadow-[0_24px_70px_-24px_rgba(16,28,42,.5)]" aria-label="Clinton AI Assistant preview">
          <header className="bg-midnight px-4 py-4 text-ivory">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">Clinton AI Assistant</p>
            <h2 className="mt-1 font-display text-lg">How can we point you in the right direction?</h2>
          </header>
          <div className="p-4">
            <p className="mb-3 text-xs leading-relaxed text-midnight/55">Guided preview only — this is not connected to an AI model or a live support agent.</p>
            {selected && <p className="mb-3 rounded-xl bg-ivory p-3 text-sm leading-relaxed text-midnight/75">{selected.reply}</p>}
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <button key={topic.label} type="button" onClick={() => setSelected(topic)} className="rounded-full border border-midnight/15 px-3 py-2 text-xs text-midnight transition hover:border-gold hover:bg-ivory">
                  {topic.label}
                </button>
              ))}
            </div>
            {selected && <Link href={selected.href} onClick={() => setOpen(false)} className="mt-4 inline-flex text-xs font-semibold uppercase tracking-wider text-gold-dark">Open this section <span className="ml-2">→</span></Link>}
          </div>
        </section>
      )}
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close Clinton AI Assistant preview" : "Open Clinton AI Assistant preview"} className="flex items-center gap-2 rounded-full border border-gold/50 bg-midnight px-4 py-3 text-xs font-semibold uppercase tracking-wider text-ivory shadow-card transition hover:bg-navy">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-gold text-midnight" aria-hidden="true">✳</span>
        <span>{open ? "Close guide" : "Ask Clinton"}</span>
      </button>
    </div>
  );
}
