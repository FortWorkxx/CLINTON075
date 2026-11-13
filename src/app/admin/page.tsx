import type { Metadata } from "next";
import Link from "next/link";
import { products, formatNaira } from "@/data/products";
import { properties } from "@/data/properties";
import { projects } from "@/data/projects";
import { divisions } from "@/data/site";

export const metadata: Metadata = {
  title: "Admin Dashboard (Preview)",
  description: "Preview of the Clinton 075 staff administration dashboard.",
  robots: { index: false, follow: false },
};

const modules = [
  { name: "Overview", note: "Sales, orders, enquiries and analytics", status: "Live" },
  { name: "Marine", note: "Services, bookings and equipment", status: "Live" },
  { name: "Fashion", note: "Products, stock and orders", status: "Live" },
  { name: "Real estate", note: "Properties, agents and inspections", status: "Live" },
  { name: "AI advertising", note: "Projects, packages and quotations", status: "Live" },
  { name: "Customers", note: "Profiles and enquiry history", status: "Draft" },
  { name: "Payments", note: "Transactions and payment status", status: "Draft" },
  { name: "Content", note: "Homepage, banners and articles", status: "Draft" },
  { name: "Reviews", note: "Customer testimonials", status: "Draft" },
  { name: "Reports", note: "Revenue and performance", status: "Planned" },
  { name: "Staff", note: "Accounts and permissions", status: "Planned" },
  { name: "Settings", note: "Company details and integrations", status: "Planned" },
];

const roles = [
  { role: "Super administrator", scope: "Full access to every module" },
  { role: "Marine manager", scope: "Marine services, bookings and parts" },
  { role: "Fashion manager", scope: "Store, stock and orders" },
  { role: "Real estate manager", scope: "Listings, enquiries and inspections" },
  { role: "Creative manager", scope: "AI video projects and quotations" },
  { role: "Customer support", scope: "Enquiries, orders and bookings (read/write, no finance)" },
  { role: "Finance administrator", scope: "Payments and financial reports only" },
];

const statusStyle: Record<string, string> = {
  Live: "bg-green-100 text-green-800",
  Draft: "bg-amber-100 text-amber-800",
  Planned: "bg-midnight/10 text-midnight/55",
};

export default function AdminPage() {
  const listedValue = properties
    .filter((p) => p.purpose !== "Rent" && p.priceUnit === undefined)
    .reduce((t, p) => t + p.price, 0);

  const kpis = [
    { label: "Fashion SKUs live", value: `${products.length}`, note: `${products.reduce((t, p) => t + p.stock, 0)} units in stock` },
    { label: "Property listings", value: `${properties.length}`, note: `${formatNaira(listedValue)} total asking value` },
    { label: "Portfolio projects", value: `${projects.length}`, note: "Across four divisions" },
    { label: "Divisions", value: `${divisions.length}`, note: "Marine, fashion, property, creative" },
  ];

  return (
    <div className="bg-ivory">
      <div className="shell py-10 lg:py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-gold px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-midnight">
                Staff preview
              </span>
              <span className="text-[10px] uppercase tracking-[0.14em] text-midnight/40">Not indexed</span>
            </div>
            <h1 className="display-md mt-3">Admin dashboard</h1>
            <p className="mt-2 max-w-xl text-sm text-midnight/55">
              A read-only preview of the planned staff interface. Live modules (overview, marine, fashion, property,
              creative) reflect the catalogue data in this build.
            </p>
          </div>
          <Link href="/" className="btn-outline !px-4 !py-2.5 !text-[11px]">Back to site</Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-xl border border-midnight/10 bg-white p-5">
              <p className="text-[10px] uppercase tracking-[0.14em] text-midnight/40">{k.label}</p>
              <p className="mt-2 font-display text-3xl text-midnight">{k.value}</p>
              <p className="mt-1 text-[11px] text-midnight/45">{k.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-xl border border-midnight/10 bg-white">
            <div className="flex items-center justify-between border-b border-midnight/10 px-5 py-4">
              <h2 className="font-display text-lg">Modules</h2>
              <p className="text-[10px] uppercase tracking-[0.12em] text-midnight/40">12 modules</p>
            </div>
            <ul className="divide-y divide-midnight/10">
              {modules.map((m) => (
                <li key={m.name} className="flex items-center justify-between gap-3 px-5 py-3.5">
                  <div>
                    <p className="text-sm font-medium text-midnight">{m.name}</p>
                    <p className="text-[11px] text-midnight/45">{m.note}</p>
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em] ${statusStyle[m.status]}`}>
                    {m.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div className="rounded-xl border border-midnight/10 bg-white p-5">
              <h2 className="font-display text-lg">Recent property pipeline</h2>
              <ul className="mt-3 space-y-2.5">
                {properties.slice(0, 5).map((p) => (
                  <li key={p.id} className="flex items-start justify-between gap-3 border-b border-midnight/10 pb-2.5 last:border-0 last:pb-0">
                    <div>
                      <p className="text-sm text-midnight">{p.title}</p>
                      <p className="text-[11px] text-midnight/45">{p.listingId} · {p.city}</p>
                    </div>
                    <span className={`shrink-0 text-[10px] font-semibold uppercase tracking-[0.08em] ${p.status === "Available" ? "text-green-700" : p.status === "Under offer" ? "text-amber-700" : "text-midnight/40"}`}>
                      {p.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-midnight/10 bg-white p-5">
              <h2 className="font-display text-lg">Stock alerts</h2>
              <ul className="mt-3 space-y-2">
                {products
                  .filter((p) => p.stock <= 10)
                  .slice(0, 5)
                  .map((p) => (
                    <li key={p.id} className="flex items-center justify-between text-sm">
                      <span className="text-midnight/70">{p.name}</span>
                      <span className="text-[11px] font-semibold text-amber-700">{p.stock} left</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-xl border border-midnight/10 bg-white p-5">
            <h2 className="font-display text-lg">Staff access levels</h2>
            <ul className="mt-3 divide-y divide-midnight/10">
              {roles.map((r) => (
                <li key={r.role} className="py-2.5">
                  <p className="text-sm font-medium text-midnight">{r.role}</p>
                  <p className="text-[11px] text-midnight/45">{r.scope}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-gold/40 bg-gold/[0.07] p-5">
            <h2 className="font-display text-lg">Production checklist</h2>
            <ul className="mt-3 space-y-2 text-sm text-midnight/70">
              {[
                "Replace this preview with a database-backed admin under authentication.",
                "Enforce role-based permissions server-side, not in the UI.",
                "Add audit logging for price, listing and order changes.",
                "Connect the payment gateway webhook to reconcile transactions.",
                "Enable staff MFA before granting finance access.",
              ].map((t) => (
                <li key={t} className="flex gap-2.5">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-gold-dark" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[11px] leading-relaxed text-midnight/50">
              This page is intentionally unauthenticated in the demo so it can be reviewed. Remove or protect it
              before deploying to production.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
