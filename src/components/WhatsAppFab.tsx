"use client";

import { useState } from "react";
import { site, divisions } from "@/data/site";

const waLink = (msg: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export default function WhatsAppFab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {open && (
        <div className="w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-midnight/10 bg-white shadow-[0_30px_80px_-30px_rgba(16,24,32,0.5)]">
          <div className="flex items-center justify-between bg-midnight px-4 py-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold">Live enquiry</p>
              <p className="mt-0.5 text-sm font-semibold text-ivory">Chat with our team</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat options"
              className="grid h-7 w-7 place-items-center rounded-full text-ivory/60 transition hover:bg-white/10 hover:text-ivory"
            >
              ✕
            </button>
          </div>
          <div className="p-2">
            <a
              href={waLink("Hello Clinton Global, I would like to make a general enquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-midnight transition hover:bg-ivory"
            >
              <span>General enquiry</span>
              <span className="text-gold">→</span>
            </a>
            {divisions.map((d) => (
              <a
                key={d.slug}
                href={waLink(`Hello Clinton Global, I have an enquiry about ${d.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-midnight transition hover:bg-ivory"
              >
                <span className="text-midnight/75">{d.name}</span>
                <span className="text-gold">→</span>
              </a>
            ))}
          </div>
          <p className="border-t border-midnight/10 px-4 py-2.5 text-[11px] text-midnight/45">
            {site.hours}
          </p>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp menu" : "Open WhatsApp menu"}
        aria-expanded={open}
        className="group flex items-center gap-3 rounded-full bg-[#1FA855] py-3 pl-3 pr-4 text-white shadow-[0_18px_40px_-14px_rgba(31,168,85,0.7)] transition hover:bg-[#199247]"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.39.11-.51.11-.11.25-.29.37-.44.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.02 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29Z" />
          </svg>
        </span>
        <span className="text-[12px] font-semibold uppercase tracking-[0.14em]">
          {open ? "Close" : "WhatsApp"}
        </span>
      </button>
    </div>
  );
}
