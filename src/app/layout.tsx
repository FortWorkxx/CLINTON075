import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import ClintonAssistant from "@/components/ClintonAssistant";
import CookieConsent from "@/components/CookieConsent";
import { StoreProvider } from "@/components/store/StoreProvider";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Marine, Real Estate, Fashion & AI Operator`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "outboard engine services Nigeria",
    "marine equipment Port Harcourt",
    "online fashion store Nigeria",
    "properties for sale in Nigeria",
    "AI business operations Nigeria",
    "real estate Port Harcourt",
    "marine services Port Harcourt",
    "Clinton Global Investment",
    "outboard engine Port Harcourt",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: site.name,
    title: `${site.name} — Expanding Possibilities. Delivering Excellence.`,
    description: site.description,
    images: [{ url: "/images/hero-marina.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Expanding Possibilities. Delivering Excellence.`,
    description: site.description,
    images: ["/images/hero-marina.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#101820",
  width: "device-width",
  initialScale: 1,
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 Creek Road",
    addressLocality: "Port Harcourt",
    addressRegion: "Rivers State",
    addressCountry: "NG",
  },
  sameAs: site.socials.map((s) => s.href),
  department: [
    { "@type": "Organization", name: "Clinton Global Marine Services" },
    { "@type": "Organization", name: "Clinton Global Fashion" },
    { "@type": "Organization", name: "Clinton Global Real Estate" },
    { "@type": "Organization", name: "Clinton Global AI Operator" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG">
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-midnight"
        >
          Skip to content
        </a>
        <StoreProvider>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppFab />
          <ClintonAssistant />
          <CookieConsent />
        </StoreProvider>
      </body>
    </html>
  );
}
