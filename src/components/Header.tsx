"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { divisions, nav, site } from "@/data/site";
import { useStore } from "@/components/store/StoreProvider";

const divisionIcons: Record<string, string> = {
  marine: "⚓",
  fashion: "◈",
  "real-estate": "⌂",
  "ai-operator": "✳",
};

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const { cartCount, wishlist } = useStore();

  const isHome = pathname === "/";
  const solid = scrolled || !isHome || megaOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <div className="hidden border-b border-white/10 bg-midnight py-2 text-ivory/60 lg:block">
        <div className="shell flex items-center justify-between text-[11px] tracking-wide">
          <p className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-gold" />
            {site.tagline}
          </p>
          <div className="flex items-center gap-6">
            <a href={`tel:${site.phoneHref}`} className="transition hover:text-gold">
              {site.phone}
            </a>
            <span className="h-3 w-px bg-white/15" />
            <a href={`mailto:${site.email}`} className="transition hover:text-gold">
              {site.email}
            </a>
            <span className="h-3 w-px bg-white/15" />
            <Link href="/contact" className="transition hover:text-gold">
              Port Harcourt, Rivers
            </Link>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          solid
            ? "border-b border-white/10 bg-midnight/95 backdrop-blur-xl"
            : "bg-gradient-to-b from-midnight/70 to-transparent"
        }`}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div className="shell flex h-[4.5rem] items-center justify-between gap-6">
          <Logo tone="light" />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {nav.map((item) =>
              item.href === "/services" ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                >
                  <button
                    onClick={() => setMegaOpen((v) => !v)}
                    aria-expanded={megaOpen}
                    className={`flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.14em] transition-colors ${
                      megaOpen || pathname.startsWith("/marine") || pathname.startsWith("/fashion") || pathname.startsWith("/real-estate") || pathname.startsWith("/ai-operator")
                        ? "text-gold"
                        : "text-ivory/80 hover:text-gold"
                    }`}
                  >
                    Divisions
                    <svg
                      viewBox="0 0 12 12"
                      className={`h-2.5 w-2.5 transition-transform ${megaOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      <path d="M1 3.5 6 8.5l5-5" fill="none" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </button>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[12px] font-medium uppercase tracking-[0.14em] transition-colors ${
                    isActive(item.href) ? "text-gold" : "text-ivory/80 hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/search"
              aria-label="Search the site"
              className="hidden h-9 w-9 place-items-center rounded-full text-ivory/70 transition hover:bg-white/10 hover:text-gold sm:grid"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="6.4" />
                <path d="m15.8 15.8 4.4 4.4" />
              </svg>
            </Link>
            <Link
              href="/account"
              aria-label="Customer account"
              className="hidden h-9 w-9 place-items-center rounded-full text-ivory/70 transition hover:bg-white/10 hover:text-gold sm:grid"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="3.4" />
                <path d="M4.8 20a7.2 7.2 0 0 1 14.4 0" />
              </svg>
            </Link>
            <Link
              href="/wishlist"
              aria-label={`Wishlist, ${wishlist.length} items`}
              className="relative hidden h-9 w-9 place-items-center rounded-full text-ivory/70 transition hover:bg-white/10 hover:text-gold sm:grid"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 20s-7.4-4.5-7.4-9.4A4.1 4.1 0 0 1 12 7.6a4.1 4.1 0 0 1 7.4 3c0 4.9-7.4 9.4-7.4 9.4Z" />
              </svg>
              {wishlist.length > 0 && (
                <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 text-[9px] font-bold text-midnight">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link
              href="/cart"
              aria-label={`Cart, ${cartCount} items`}
              className="relative grid h-9 w-9 place-items-center rounded-full text-ivory/70 transition hover:bg-white/10 hover:text-gold"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 8h12l-1.2 11H7.2L6 8Z" />
                <path d="M9.2 8V6.4a2.8 2.8 0 0 1 5.6 0V8" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 text-[9px] font-bold text-midnight">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link href="/quote" className="btn-gold hidden !px-5 !py-2.5 !text-[11px] xl:inline-flex">
              Get a Quote
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-ivory lg:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mega menu */}
        <div
          className={`absolute inset-x-0 top-full hidden overflow-hidden border-b border-white/10 bg-midnight/95 backdrop-blur-xl transition-all duration-300 lg:block ${
            megaOpen ? "pointer-events-auto max-h-[30rem] opacity-100" : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div className="shell grid grid-cols-12 gap-8 py-9">
            <div className="col-span-3">
              <p className="eyebrow">Our divisions</p>
              <h3 className="mt-3 font-display text-2xl text-ivory">
                Four businesses.<br />One standard.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/50">
                Each division runs its own team and catalogue, backed by one corporate accounts and support function.
              </p>
              <Link href="/services" className="btn-ghost mt-5 !text-gold">
                Compare divisions
                <span>→</span>
              </Link>
            </div>
            <div className="col-span-9 grid grid-cols-2 gap-3">
              {divisions.map((d) => (
                <Link
                  key={d.slug}
                  href={d.href}
                  className="group flex gap-4 rounded-xl border border-white/10 p-4 transition hover:border-gold/40 hover:bg-white/[0.04]"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                    {divisionIcons[d.slug]}
                  </span>
                  <span>
                    <span className="flex items-baseline gap-2">
                      <span className="text-sm font-semibold text-ivory group-hover:text-gold">{d.name}</span>
                      <span className="text-[10px] text-ivory/30">{d.number}</span>
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-ivory/45">{d.tagline}</span>
                    <span className="mt-2 flex flex-wrap gap-1.5">
                      {d.highlights.slice(0, 2).map((h) => (
                        <span key={h} className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-ivory/40">
                          {h}
                        </span>
                      ))}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${mobileOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-midnight/70 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[min(22rem,88vw)] flex-col bg-midnight transition-transform duration-400 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <Logo tone="light" compact />
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-ivory"
            >
              ✕
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 py-6" aria-label="Mobile">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between rounded-lg px-3 py-3 text-sm transition ${
                      isActive(item.href) ? "bg-white/5 text-gold" : "text-ivory/80 hover:bg-white/5 hover:text-gold"
                    }`}
                  >
                    {item.label}
                    <span className="text-ivory/25">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="eyebrow mb-2 mt-7 px-3">Divisions</p>
            <ul className="space-y-1">
              {divisions.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={d.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ivory/70 transition hover:bg-white/5 hover:text-gold"
                  >
                    <span className="text-gold">{divisionIcons[d.slug]}</span>
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="eyebrow mb-2 mt-7 px-3">Account</p>
            <ul className="space-y-1">
              {[
                { label: "Search", href: "/search" },
                { label: "My dashboard", href: "/account" },
                { label: "Wishlist", href: "/wishlist" },
                { label: "Cart", href: "/cart" },
                { label: "Track an order", href: "/track" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="block rounded-lg px-3 py-2.5 text-sm text-ivory/70 transition hover:bg-white/5 hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-2 border-t border-white/10 p-5">
            <Link href="/quote" className="btn-gold w-full">
              Get a Quote
            </Link>
            <a href={`tel:${site.phoneHref}`} className="btn-light w-full">
              Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
