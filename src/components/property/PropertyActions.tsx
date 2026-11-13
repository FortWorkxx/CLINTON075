"use client";

import { useStore } from "@/components/store/StoreProvider";
import { site } from "@/data/site";

export default function PropertyActions({ id, title, listingId }: { id: string; title: string; listingId: string }) {
  const { toggleSavedProperty, isPropertySaved } = useStore();
  const saved = isPropertySaved(id);
  const waMessage = `Hello Clinton Global, I am interested in ${title} (${listingId}).`;

  return (
    <div className="space-y-3">
      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(waMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold w-full"
      >
        Enquire on WhatsApp
      </a>
      <a href="#inspection" className="btn-dark w-full">
        Book an inspection
      </a>
      <button onClick={() => toggleSavedProperty(id)} className="btn-outline w-full" aria-pressed={saved}>
        {saved ? "Saved to your list ✓" : "Save this property"}
      </button>
      <a href={`tel:${site.phoneHref}`} className="block pt-1 text-center text-[11px] uppercase tracking-[0.14em] text-midnight/45 hover:text-gold-dark">
        Or call {site.phone}
      </a>
    </div>
  );
}
