import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  crumbs = [],
  children,
  align = "left",
  tall = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  image: string;
  crumbs?: { label: string; href?: string }[];
  children?: ReactNode;
  align?: "left" | "center";
  tall?: boolean;
}) {
  return (
    <section
      className={`relative isolate overflow-hidden bg-midnight text-ivory ${
        tall ? "min-h-[38rem]" : "min-h-[26rem]"
      } flex items-end`}
    >
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover opacity-55 animate-slow-zoom"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-midnight via-midnight/75 to-midnight/45" />
      <div className="pointer-events-none absolute inset-0 -z-10 grain opacity-40" />

      <div className="shell w-full pb-12 pt-24 lg:pb-16 lg:pt-28">
        <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-ivory/40">
              <Link href="/" className="transition hover:text-gold">Home</Link>
              {crumbs.map((c) => (
                <span key={c.label} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {c.href ? (
                    <Link href={c.href} className="transition hover:text-gold">{c.label}</Link>
                  ) : (
                    <span className="text-ivory/70">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="display-xl mt-4 text-ivory">{title}</h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/65 sm:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
