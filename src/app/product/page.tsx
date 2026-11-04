import type { Metadata } from "next";
import { EcosystemSection } from "@/components/ecosystem-section";
import { FeatureTabsSection } from "@/components/feature-tabs-section";
import { GovernanceSection } from "@/components/governance-section";
import { KnowledgeSection } from "@/components/knowledge-section";
import { PageHero } from "@/components/page-hero";
import { PainPointsSection } from "@/components/pain-points-section";
import { PillarsSection } from "@/components/pillars-section";
import { SiteShell } from "@/components/site-shell";
import { SpecialtiesSection } from "@/components/specialties-section";
import { BottomCta } from "@/components/bottom-cta";

export const metadata: Metadata = {
  title: "Product — AI Receptionist",
  description: "See how AI Receptionist answers patients, books visits, triages urgency, and hands off to your team on WhatsApp.",
};

export default function ProductPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Product"
        title="The front desk work,"
        highlight="on the chat you already use."
        body="Click through Answers, Booking, Triage, and Handoff. Each tab shows a short example of what patients see and what your team gets."
        primary={{ href: "/how-it-works", label: "See how it works" }}
        secondary={{ href: "/book-demo", label: "Book a demo" }}
      />
      <PillarsSection />
      <FeatureTabsSection />
      <EcosystemSection />
      <PainPointsSection />
      <KnowledgeSection />
      <GovernanceSection />
      <SpecialtiesSection />
      <BottomCta />
    </SiteShell>
  );
}
