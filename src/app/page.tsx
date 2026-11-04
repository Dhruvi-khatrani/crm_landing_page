import { BottomCta } from "@/components/bottom-cta";
import { ConversationSection } from "@/components/conversation-section";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { PathChooser } from "@/components/path-chooser";
import { PillarsSection } from "@/components/pillars-section";
import { SiteShell } from "@/components/site-shell";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function HomePage() {
  return (
    <SiteShell>
      <HeroSection />
      <PillarsSection />
      <PathChooser />
      <ConversationSection />
      <TestimonialsSection />
      <FaqSection />
      <BottomCta />
    </SiteShell>
  );
}
