import Link from "next/link";
import { site } from "@/data/site";

export default function Logo({
  tone = "light",
  compact = false,
}: {
  tone?: "light" | "dark";
  compact?: boolean;
}) {
  const textColor = tone === "light" ? "text-ivory" : "text-midnight";
  const subColor = tone === "light" ? "text-ivory/45" : "text-midnight/45";

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className="group flex items-center gap-3"
    >
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-sm border border-gold/50">
        <span className="absolute inset-0 bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20" />
        <span className="relative font-display text-lg font-semibold leading-none text-gold">
          {site.logoMark}
        </span>
        <span className="absolute right-1 top-1 h-1 w-1 bg-gold" />
        <span className="absolute bottom-1 left-1 h-1 w-1 bg-gold/60" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1rem] font-semibold tracking-[0.13em] sm:text-[1.08rem] ${textColor}`}
        >
          CLINTON<span className="text-gold"> GLOBAL</span>
        </span>
        {!compact && (
          <span
            className={`mt-1 text-[8.5px] font-medium uppercase tracking-[0.28em] ${subColor}`}
          >
            Investment · Nigeria
          </span>
        )}
      </span>
    </Link>
  );
}
