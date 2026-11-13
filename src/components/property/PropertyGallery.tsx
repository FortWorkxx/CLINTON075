"use client";

import Image from "next/image";
import { useState } from "react";

export default function PropertyGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-ivory">
        <Image
          src={images[active]}
          alt={`${title} — image ${active + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 70vw"
          className="object-cover"
        />
        <button
          onClick={() => setLightbox(true)}
          className="absolute bottom-4 right-4 rounded-full bg-midnight/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ivory backdrop-blur transition hover:bg-midnight"
        >
          View gallery
        </button>
      </div>
      <div className="mt-3 flex gap-3">
        {images.map((img, i) => (
          <button
            key={img + i}
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            className={`relative h-20 w-24 overflow-hidden rounded-lg border-2 transition ${
              active === i ? "border-gold" : "border-transparent opacity-65 hover:opacity-100"
            }`}
          >
            <Image src={img} alt="" fill sizes="96px" className="object-cover" />
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-midnight/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Property gallery"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={() => setLightbox(false)}
            aria-label="Close gallery"
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/25 text-ivory"
          >
            ✕
          </button>
          <div className="relative h-[70vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={images[active]} alt={title} fill sizes="100vw" className="object-contain" />
          </div>
          <div className="absolute bottom-6 flex gap-2">
            {images.map((img, i) => (
              <button
                key={img + "dot" + i}
                onClick={(e) => { e.stopPropagation(); setActive(i); }}
                aria-label={`Go to image ${i + 1}`}
                className={`h-2 w-2 rounded-full ${active === i ? "bg-gold" : "bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
