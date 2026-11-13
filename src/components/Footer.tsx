import Link from "next/link";
import Logo from "./Logo";
import { divisions, site } from "@/data/site";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Divisions", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
    { label: "Insights", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const platformLinks = [
  { label: "Fashion Store", href: "/fashion" },
  { label: "Properties", href: "/real-estate" },
  { label: "Marine Booking", href: "/marine/booking" },
  { label: "AI Operator", href: "/ai-operator" },
  { label: "Get a Quote", href: "/quote" },
  { label: "Track an Order", href: "/track" },
  { label: "My Account", href: "/account" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms & Conditions", href: "/legal/terms" },
  { label: "Payment & Refund", href: "/legal/payments" },
  { label: "Delivery & Returns", href: "/legal/delivery" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "Property Disclaimer", href: "/legal/property-disclaimer" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-midnight text-ivory">
      <div className="pointer-events-none absolute inset-0 grain opacity-60" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative border-b border-white/10">
        <div className="shell py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow">Let's work together</p>
              <h2 className="display-lg mt-4 max-w-xl text-ivory">
                Tell us what you need.<br />
                <span className="italic text-gold">We will scope it properly.</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/quote" className="btn-gold">
                Request a Quote
              </Link>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="shell relative grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/50">
            A Nigerian multi-service brand bringing marine, real estate, fashion and intelligent digital possibilities together.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <p className="text-ivory/70">{site.address}</p>
            <a href={`tel:${site.phoneHref}`} className="block text-ivory/70 transition hover:text-gold">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block text-ivory/70 transition hover:text-gold">
              {site.email}
            </a>
            <p className="text-ivory/40">{site.hours}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-ivory/60 transition hover:border-gold hover:text-gold"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Platform" links={platformLinks} />

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest2 text-gold">Divisions</p>
          <ul className="mt-5 space-y-3">
            {divisions.map((d) => (
              <li key={d.slug}>
                <Link href={d.href} className="group flex items-baseline gap-2 text-sm text-ivory/55 transition hover:text-ivory">
                  <span className="text-[10px] text-ivory/25">{d.number}</span>
                  <span className="link-underline">{d.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-xl border border-white/10 p-4">
            <p className="text-[11px] uppercase tracking-[0.16em] text-ivory/40">Company registration</p>
            <p className="mt-1.5 text-sm text-ivory/65">{site.rc}</p>
            <p className="mt-2 text-[11px] leading-relaxed text-ivory/35">
              Registered in Nigeria. Details displayed once final registration information is supplied.
            </p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="shell flex flex-col gap-4 py-6 text-[12px] text-ivory/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="transition hover:text-gold">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-widest2 text-gold">{title}</p>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-ivory/55 transition hover:text-ivory">
              <span className="link-underline">{l.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
