import { ContactSection } from "@/components/sections/ContactSection";
import { SITE_NAME } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE_NAME} for a packaging quote.`,
};

export default function ContactPage() {
  return (
    <div className="min-h-[60vh] bg-background">
      <ContactSection showTopBorder={false} />
    </div>
  );
}
