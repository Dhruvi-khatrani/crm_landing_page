import type { Metadata } from "next";
import { BottomCta } from "@/components/bottom-cta";
import { ConversationSection } from "@/components/conversation-section";
import { GettingStartedSection } from "@/components/getting-started-section";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "How it works — AI Receptionist",
  description: "Follow one WhatsApp conversation from the first patient message to a confirmed clinic visit.",
};

export default function HowItWorksPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="How it works"
        title="One conversation."
        highlight="A confirmed visit."
        body="Watch the AI greet, answer, offer real slots, and hold the appointment — while the side steps light up with each message."
        primary={{ href: "/pricing", label: "See pricing" }}
        secondary={{ href: "/book-demo", label: "Book a walkthrough" }}
      />
      <ConversationSection />
      <GettingStartedSection />
      <BottomCta />
    </SiteShell>
  );
}
