import type { Metadata } from "next";
import Dashboard from "@/components/account/Dashboard";

export const metadata: Metadata = {
  title: "My Account — Orders, Enquiries & Saved Items",
  description: "View your Clinton Global orders, enquiries, quotations and saved properties.",
  robots: { index: false, follow: false },
};

export default function AccountPage() {
  return <Dashboard />;
}
