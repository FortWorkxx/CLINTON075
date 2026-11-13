import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Delivery & Returns Policy",
  description: "Fashion delivery timelines, costs and the Clinton 075 returns process.",
  alternates: { canonical: "/legal/delivery" },
};

export default function DeliveryPage() {
  return (
    <LegalPage
      title="Delivery & Returns"
      intro="Delivery timelines, costs and the returns process for fashion orders placed with Clinton 075."
      updated="13 November 2025"
      sections={[
        {
          heading: "1. Delivery timelines",
          list: [
            "Lagos mainland and island: 1–2 working days after dispatch.",
            "Other Nigerian states: 2–5 working days after dispatch.",
            "Bespoke and made-to-measure pieces: 7–14 working days, confirmed at order.",
            "International delivery: quoted per order; duties and taxes are the customer's responsibility.",
          ],
        },
        {
          heading: "2. Delivery costs",
          paragraphs: [
            "Standard delivery is ₦4,500 within Nigeria and free on orders over ₦150,000. Lagos express delivery is ₦8,000. Collection from our Lekki office is free and usually ready within one working day.",
          ],
        },
        {
          heading: "3. Dispatch and tracking",
          paragraphs: [
            "You receive a dispatch notification with tracking details when your order leaves us. Delivery windows are estimates and can be affected by courier or weather conditions outside our control.",
          ],
        },
        {
          heading: "4. Failed delivery",
          paragraphs: [
            "Please ensure someone is available at the delivery address. If a delivery fails because no one is available or the address is incorrect, a re-delivery fee may apply.",
          ],
        },
        {
          heading: "5. Returns — eligibility",
          list: [
            "Items must be unworn, unwashed and have original tags attached.",
            "Returns must be initiated within 14 days of delivery.",
            "Bespoke and made-to-measure items cannot be returned unless faulty.",
            "Accessories must be returned in their original packaging, including gift boxes.",
          ],
        },
        {
          heading: "6. How to return",
          paragraphs: [
            "Contact us with your order reference and the reason for return. We will confirm eligibility and provide return instructions. Do not send items back before receiving confirmation — unlogged returns can be delayed or refused.",
            "Once the item is received and inspected, refunds or exchanges are processed within 5–10 business days.",
          ],
        },
        {
          heading: "7. Faulty items",
          paragraphs: [
            "If an item arrives faulty or incorrect, contact us within 48 hours with photographs. We will arrange collection and cover return delivery for faulty or incorrect items.",
          ],
        },
      ]}
      image="/images/division-fashion.jpg"
    />
  );
}
