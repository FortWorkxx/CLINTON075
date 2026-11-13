"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "clintonglobal.cookie-consent.v1";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(KEY)) {
        const t = window.setTimeout(() => setVisible(true), 1200);
        return () => window.clearTimeout(t);
      }
    } catch {
      /* storage blocked — do not show a banner that cannot be dismissed */
    }
  }, []);

  const decide = (choice: "essential" | "all") => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify({ choice, date: new Date().toISOString() }));
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-3 bottom-3 z-[55] mx-auto max-w-3xl rounded-2xl border border-white/15 bg-midnight/97 p-5 text-ivory shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:inset-x-6 sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.18em] text-gold">Your privacy</p>
          <p className="mt-2 text-sm leading-relaxed text-ivory/65">
            We use essential cookies to run the cart, wishlist and account features. Analytics cookies are only set
            with your consent, in line with the Nigeria Data Protection Act. Read our{" "}
            <Link href="/legal/cookies" className="underline decoration-gold/50 hover:text-gold">
              cookie policy
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button onClick={() => decide("essential")} className="btn-light !px-4 !py-2.5 !text-[10px]">
            Essential only
          </button>
          <button onClick={() => decide("all")} className="btn-gold !px-4 !py-2.5 !text-[10px]">
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
