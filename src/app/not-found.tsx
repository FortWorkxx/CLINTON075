import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-midnight text-ivory">
      <Image src="/images/hero-marina.jpg" alt="" fill sizes="100vw" className="absolute inset-0 -z-20 object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-midnight via-midnight/85 to-midnight/60" />
      <div className="shell py-24">
        <p className="eyebrow">Error 404</p>
        <h1 className="display-xl mt-4">
          This page is<br />
          <span className="italic text-gold">not on the chart.</span>
        </h1>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory/55">
          The page you were looking for has moved or never existed. Here are the routes most visitors need.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn-gold">Back to homepage</Link>
          <Link href="/services" className="btn-light">Our divisions</Link>
          <Link href="/contact" className="btn-light">Contact us</Link>
        </div>
        <div className="mt-10 grid max-w-2xl gap-2 sm:grid-cols-2">
          {[
            { l: "Fashion store", h: "/fashion" },
            { l: "Property listings", h: "/real-estate" },
            { l: "Marine services", h: "/marine" },
            { l: "AI video advertising", h: "/ai-video" },
            { l: "Portfolio", h: "/portfolio" },
            { l: "Insights", h: "/blog" },
          ].map((l) => (
            <Link key={l.h} href={l.h} className="flex items-center justify-between rounded-lg border border-white/10 px-4 py-3 text-sm text-ivory/70 transition hover:border-gold/50 hover:text-gold">
              {l.l}<span>→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
