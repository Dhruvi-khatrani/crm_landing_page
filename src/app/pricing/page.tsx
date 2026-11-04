import type { Metadata } from "next";
import { BottomCta } from "@/components/bottom-cta";
import { CalloutSection } from "@/components/callout-section";
import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { PricingSection } from "@/components/pricing-section";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Pricing — AI Receptionist",
  description: "Simple plans for solo clinics, multi-doctor practices, and multi-location groups. 14-day free trial.",
};

export default function PricingPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Pricing"
        title="A plan for the clinic"
        highlight="you run today."
        body="Toggle monthly or yearly. Start a trial, or book a walkthrough if you want help matching a plan to your schedule."
        primary={{ href: "/book-demo", label: "Start free trial" }}
        secondary={{ href: "/product", label: "Explore product" }}
      />
      <PricingSection />
      <CalloutSection />
      <FaqSection />
      <BottomCta />
    </SiteShell>
  );
}
