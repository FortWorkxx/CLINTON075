import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import PropertyGallery from "@/components/property/PropertyGallery";
import PropertyActions from "@/components/property/PropertyActions";
import EnquiryForm from "@/components/EnquiryForm";
import { formatNaira } from "@/data/products";
import { getProperty, properties } from "@/data/properties";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) return { title: "Property not found" };
  return {
    title: `${property.title} — ${property.neighbourhood}, ${property.city}`,
    description: property.description.slice(0, 155),
    alternates: { canonical: `/real-estate/${property.slug}` },
    openGraph: { images: [{ url: property.image }] },
  };
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();

  const similar = properties
    .filter((p) => p.id !== property.id && (p.type === property.type || p.purpose === property.purpose))
    .slice(0, 3);

  const specs = [
    { label: "Property type", value: property.type },
    { label: "Purpose", value: property.purpose },
    ...(property.bedrooms ? [{ label: "Bedrooms", value: `${property.bedrooms}` }] : []),
    ...(property.bathrooms ? [{ label: "Bathrooms", value: `${property.bathrooms}` }] : []),
    ...(property.parking ? [{ label: "Parking", value: `${property.parking} cars` }] : []),
    { label: "Building size", value: property.buildingSize },
    { label: "Land size", value: property.landSize },
    { label: "Furnishing", value: property.furnished ? "Furnished" : "Unfurnished" },
    { label: "Status", value: property.status },
    { label: "Listing ID", value: property.listingId },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: property.description,
    image: [property.image],
    url: `/real-estate/${property.slug}`,
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "NGN",
      availability: property.status === "Available" ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: property.city,
      addressRegion: property.state,
      addressCountry: "NG",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow={`${property.type} · For ${property.purpose}`}
        title={property.title}
        description={`${property.neighbourhood}, ${property.city}, ${property.state}`}
        image={property.image}
        crumbs={[{ label: "Real Estate", href: "/real-estate" }, { label: property.listingId }]}
      />

      <div className="shell py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
          <div>
            <PropertyGallery images={property.gallery} title={property.title} />

            <div className="mt-9 flex flex-wrap items-end justify-between gap-4 border-b border-midnight/10 pb-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-midnight/40">{property.listingId}</p>
                <p className="mt-2 font-display text-3xl text-midnight">
                  {formatNaira(property.price)}
                  {property.priceUnit && <span className="text-base font-sans text-midnight/45">/{property.priceUnit}</span>}
                </p>
              </div>
              <span
                className={`rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                  property.status === "Available"
                    ? "bg-green-100 text-green-800"
                    : property.status === "Under offer"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-midnight/10 text-midnight/60"
                }`}
              >
                {property.status}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-midnight/10 bg-midnight/10 sm:grid-cols-3">
              {specs.map((s) => (
                <div key={s.label} className="bg-white p-4">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-midnight/40">{s.label}</p>
                  <p className="mt-1 text-sm font-medium text-midnight">{s.value}</p>
                </div>
              ))}
            </div>

            <section className="mt-10">
              <h2 className="font-display text-2xl">About this property</h2>
              <p className="mt-3 text-sm leading-relaxed text-midnight/65">{property.description}</p>
            </section>

            <section className="mt-9">
              <h2 className="font-display text-2xl">Features</h2>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {property.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-midnight/65">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {f}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-9 rounded-xl border border-midnight/10 bg-white p-5">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">
                Documentation & verification
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-midnight/65">{property.documentation}</p>
              <p className="mt-3 text-[11px] leading-relaxed text-midnight/45">
                We share documentation for your own legal review. We do not provide legal advice and we recommend
                an independent search and solicitor before any payment. Availability and pricing may change without
                notice.
              </p>
            </section>

            <section className="mt-9">
              <h2 className="font-display text-2xl">Location</h2>
              <p className="mt-2 text-sm text-midnight/55">
                {property.neighbourhood}, {property.city}, {property.state}
              </p>
              <div className="relative mt-4 grid h-64 place-items-center overflow-hidden rounded-xl border border-midnight/10 bg-[linear-gradient(135deg,#eae6dd_25%,#f4f2ed_25%,#f4f2ed_50%,#eae6dd_50%,#eae6dd_75%,#f4f2ed_75%)] bg-[length:28px_28px]">
                <div className="rounded-xl bg-white/95 px-5 py-4 text-center shadow-card">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-midnight/40">Approximate area</p>
                  <p className="mt-1 font-display text-lg text-midnight">
                    {property.neighbourhood}, {property.city}
                  </p>
                  <p className="mt-1 text-[11px] text-midnight/45">
                    Exact address shared after inspection is scheduled.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-midnight/10 bg-white p-6">
              <p className="text-[11px] uppercase tracking-[0.16em] text-midnight/40">Asking price</p>
              <p className="mt-1 font-display text-3xl text-midnight">
                {formatNaira(property.price)}
                {property.priceUnit && <span className="text-base font-sans text-midnight/45">/{property.priceUnit}</span>}
              </p>
              <div className="mt-5">
                <PropertyActions id={property.id} title={property.title} listingId={property.listingId} />
              </div>
            </div>

            <div id="inspection" className="scroll-mt-24 rounded-2xl border border-midnight/10 bg-white p-6">
              <h2 className="font-display text-xl">Request an inspection</h2>
              <p className="mt-1.5 text-xs leading-relaxed text-midnight/50">
                Confirm your preferred date and we will call you to arrange it.
              </p>
              <div className="mt-4">
                <EnquiryForm
                  enquiryType="Real Estate"
                  referencePrefix="CGI-RE"
                  submitLabel="Request inspection"
                  compact
                  fields={[
                    { name: "name", label: "Full name", required: true },
                    { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
                    { name: "email", label: "Email", type: "email", required: true },
                    { name: "date", label: "Preferred date", type: "date", required: true },
                    { name: "time", label: "Preferred time", type: "select", options: ["Morning (9–12)", "Afternoon (12–4)", "Evening (4–6)"] },
                    { name: "message", label: "Message", type: "textarea", placeholder: `${property.title} (${property.listingId})` },
                  ]}
                />
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-16 border-t border-midnight/10 pt-12">
          <div className="flex items-end justify-between">
            <h2 className="display-md">Similar properties</h2>
            <Link href="/real-estate" className="btn-ghost hidden sm:inline-flex">All listings <span>→</span></Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {(similar.length ? similar : properties.slice(0, 3)).map((p) => (
              <Link key={p.id} href={`/real-estate/${p.slug}`} className="group overflow-hidden rounded-xl border border-midnight/10 bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={p.image} alt={p.title} fill sizes="33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-midnight/40">{p.neighbourhood}, {p.city}</p>
                  <h3 className="mt-1.5 font-display text-lg leading-snug group-hover:text-gold-dark">{p.title}</h3>
                  <p className="mt-1.5 text-sm font-medium">{formatNaira(p.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
