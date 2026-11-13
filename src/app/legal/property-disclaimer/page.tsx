import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Property Listing Disclaimer",
  description: "The basis on which Clinton Global Real Estate publishes property listing information.",
  alternates: { canonical: "/legal/property-disclaimer" },
};

export default function PropertyDisclaimerPage() {
  return (
    <LegalPage
      title="Property Listing Disclaimer"
      intro="The basis on which property information is published, and what buyers and tenants should verify independently."
      updated="13 November 2025"
      sections={[
        {
          heading: "1. Source of information",
          paragraphs: [
            "Property descriptions, prices, sizes and features are supplied by vendors and landlords, and are presented in good faith. Measurements are approximate. Photography may be representative and does not guarantee current condition.",
          ],
        },
        {
          heading: "2. Verification",
          paragraphs: [
            "We inspect listings and collect the documentation provided by the vendor. Where we state that a listing is verified, that means only that we have reviewed the documents supplied to us — it is not a title guarantee, a survey or a legal opinion.",
            "Availability can change without notice. A listing remaining on this website is not confirmation that a property is still available.",
          ],
        },
        {
          heading: "3. No legal advice",
          paragraphs: [
            "We are not a law firm and do not provide legal advice. You should instruct your own solicitor and obtain an independent land registry search before making any payment or signing any document.",
          ],
        },
        {
          heading: "4. Fees",
          paragraphs: [
            "Agency fees, legal fees and any documentation costs are disclosed before inspection or commitment. Never pay money to an account that is not confirmed in writing by us under our letterhead or an official invoice.",
          ],
        },
        {
          heading: "5. Inspection risk",
          paragraphs: [
            "Property inspections are arranged with the vendor's consent. Visitors attend at their own risk and should not enter unsafe or restricted areas. Access to exact addresses is typically shared once an inspection is scheduled.",
          ],
        },
        {
          heading: "6. Reporting a problem",
          paragraphs: [
            "If you believe a listing is inaccurate, duplicated or misrepresented, contact us immediately so we can investigate and, where appropriate, remove it. We do not knowingly publish listings we believe to be fraudulent.",
          ],
        },
      ]}
      image="/images/property-3.jpg"
    />
  );
}
