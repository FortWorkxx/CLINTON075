import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Clinton Global Investment uses cookies and similar technologies.",
  alternates: { canonical: "/legal/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="What cookies and similar technologies this website uses, and how you can control them."
      updated="13 November 2025"
      sections={[
        {
          heading: "1. What cookies are",
          paragraphs: [
            "Cookies are small text files stored on your device. They allow a website to remember your actions and preferences between visits — such as the contents of your cart.",
          ],
        },
        {
          heading: "2. Cookies we use",
          list: [
            "Essential cookies: required for the cart, saved items and account features to work. These cannot be turned off without breaking functionality.",
            "Analytics cookies: help us understand which pages are used and where visitors struggle. We only set these with consent.",
            "Marketing cookies: used only where you consent, to measure campaign effectiveness.",
            "Local storage: this demo stores cart, wishlist and order data in your browser only. It is not transmitted to a server.",
          ],
        },
        {
          heading: "3. Third parties",
          paragraphs: [
            "Where we embed analytics, payment or video services, those providers may set their own cookies governed by their policies. We limit these to providers we actually use and disclose them on this page when they are activated.",
          ],
        },
        {
          heading: "4. Managing cookies",
          paragraphs: [
            "You can clear or block cookies in your browser settings. Blocking essential cookies may prevent the cart and account features from functioning. Clearing site data will remove the locally stored demo cart, wishlist and orders.",
          ],
        },
        {
          heading: "5. Changes",
          paragraphs: [
            "If we add new categories of cookies, we will update this page and, where required, ask for consent again.",
          ],
        },
      ]}
      image="/images/division-ai.jpg"
    />
  );
}
