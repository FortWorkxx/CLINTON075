import Link from "next/link";
import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  link,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  link?: { label: string; href: string };
  align?: "left" | "center" | "between";
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";
  return (
    <div
      className={`flex flex-col gap-6 ${
        align === "center"
          ? "items-center text-center"
          : align === "between"
            ? "md:flex-row md:items-end md:justify-between"
            : ""
      }`}
    >
      <div className={align === "center" ? "max-w-2xl" : "max-w-2xl"}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className={`display-lg mt-4 ${isLight ? "text-ivory" : "text-midnight"}`}>{title}</h2>
        {description && (
          <p className={`mt-5 text-base leading-relaxed sm:text-lg ${isLight ? "text-ivory/55" : "text-midnight/60"}`}>
            {description}
          </p>
        )}
      </div>
      {link && align !== "center" && (
        <Link
          href={link.href}
          className={`group inline-flex shrink-0 items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] transition ${
            isLight ? "text-gold hover:text-gold-light" : "text-midnight hover:text-gold-dark"
          }`}
        >
          {link.label}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      )}
    </div>
  );
}
