import type { Metadata } from "next";
import Link from "next/link";
import { DemoForm } from "@/components/demo-form";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Book a demo — AI Receptionist",
  description: "Tell us about your clinic. We’ll call you back, usually within one working day.",
};

const notes = [
  "Walk through a real booking on your schedule",
  "Check EMR or Google Calendar fit",
  "See triage and handoff before you commit",
];

export default function BookDemoPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Book a demo"
        title="Tell us about"
        highlight="your clinic."
        body="Share a few details and our team will call you back, usually within one working day. Prefer to self-serve? Start from pricing."
        secondary={{ href: "/pricing", label: "See pricing first" }}
      />
      <section className="bg-bodybg pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="space-y-6 lg:col-span-5" data-animate="">
            <h2 className="text-2xl font-extrabold text-darktext">What happens on the call</h2>
            <ul className="space-y-3">
              {notes.map((note) => (
                <li key={note} className="flex items-start gap-3 rounded-2xl border border-borderclr bg-white p-4 text-sm text-darktext">
                  <span className="mt-0.5 font-bold text-brand-600">✓</span>
                  {note}
                </li>
              ))}
            </ul>
            <p className="text-sm text-mutedtext">
              Already know the plan?{" "}
              <Link href="/pricing" className="font-semibold text-brand-700 transition-colors duration-300 hover:text-brand-600">
                Compare pricing →
              </Link>
            </p>
          </div>
          <div className="lg:col-span-7" data-animate="" data-delay="1">
            <DemoForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
