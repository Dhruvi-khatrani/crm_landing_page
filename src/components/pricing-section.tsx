"use client";

import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    audience: "1 Doctor",
    monthly: 99,
    blurb: "Ideal for solo practitioners and boutique private clinics.",
    features: [
      "1 Connected WhatsApp Number",
      "Up to 500 patient chats / month",
      "Google Calendar or ICS sync",
      "Business hours automated replies",
    ],
    cta: "Start 14-day trial",
    href: "/book-demo",
    highlighted: false,
  },
  {
    name: "Clinic Practice",
    audience: "Up to 6 Doctors",
    monthly: 219,
    blurb: "For active clinics handling daily incoming patient inquiries.",
    features: [
      "Multi-doctor schedule matching",
      "Up to 2,500 patient chats / month",
      "Cliniko, Jane, Dentrix & EMR integration",
      "Instant triage alert notifications",
      "Stripe deposit collection",
    ],
    cta: "Start 14-day trial",
    href: "/book-demo",
    highlighted: true,
  },
  {
    name: "Enterprise",
    audience: "Multi-Location",
    monthly: null as number | null,
    blurb: "For hospital networks and multi-location medical groups.",
    features: [
      "Unlimited doctors and branches",
      "Custom EMR API integration",
      "Dedicated account manager",
      "Custom HIPAA / GDPR compliance agreements",
    ],
    cta: "Speak with sales",
    href: "/book-demo",
    highlighted: false,
  },
];

export function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="border-y border-borderclr bg-white py-20" data-purpose="pricing-tables" id="pricing">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <span className="text-xs font-bold tracking-wider text-brand-600 uppercase">Simple, Transparent Pricing</span>
        <h2 className="mx-auto mt-2 max-w-xl text-3xl font-extrabold text-darktext sm:text-4xl">A plan for the clinic you run today.</h2>
        <p className="mt-2 text-sm text-mutedtext">14-day free trial on all plans. Switch or cancel at any time.</p>

        <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-borderclr bg-bodybg p-1.5" role="group" aria-label="Billing period">
          <button
            type="button"
            onClick={() => setYearly(false)}
            className={`chip-pop rounded-full px-4 py-2 text-xs font-bold ${
              !yearly ? "is-on bg-brand-600 text-white" : "text-mutedtext hover:bg-white"
            }`}
            aria-pressed={!yearly}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setYearly(true)}
            className={`chip-pop rounded-full px-4 py-2 text-xs font-bold ${
              yearly ? "is-on bg-brand-600 text-white" : "text-mutedtext hover:bg-white"
            }`}
            aria-pressed={yearly}
          >
            Yearly <span className="ml-1 font-semibold opacity-80">2 months free</span>
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-8 text-left md:grid-cols-3">
          {plans.map((plan, index) => {
            const price =
              plan.monthly == null
                ? "Custom"
                : yearly
                  ? `$${Math.round(plan.monthly * 10)}`
                  : `$${plan.monthly}`;
            const cadence = plan.monthly == null ? "/ tailored" : yearly ? "/ year" : "/ month";

            return (
              <div
                key={plan.name}
                data-animate=""
                data-delay={String(index)}
                className={`relative flex flex-col justify-between rounded-3xl bg-white p-7 ${
                  plan.highlighted ? "border-2 border-brand-600 shadow-float" : "lift-card border border-slate-200"
                }`}
              >
                {plan.highlighted ? <span className="popular-glow pointer-events-none absolute -inset-1 rounded-[1.7rem]" /> : null}
                {plan.highlighted ? (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
                    Most Popular
                  </div>
                ) : null}
                <div>
                  <div className={`flex items-center justify-between ${plan.highlighted ? "mt-1" : ""}`}>
                    <span className={`text-xs font-bold uppercase ${plan.highlighted ? "text-brand-700" : "text-slate-500"}`}>
                      {plan.name}
                    </span>
                    <span
                      className={`rounded px-2 py-0.5 text-[10px] font-semibold ${
                        plan.highlighted ? "bg-brand-100 text-brand-800" : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {plan.audience}
                    </span>
                  </div>
                  <div className="mt-4 mb-6">
                    <span className="text-4xl font-extrabold text-darktext transition-opacity duration-300">{price}</span>
                    <span className="text-xs text-mutedtext">{cadence}</span>
                    <p className="mt-1 text-xs text-mutedtext">{plan.blurb}</p>
                  </div>
                  <ul className="space-y-3 text-xs text-darktext">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  className={`pressable mt-8 block rounded-full px-4 text-center text-xs font-semibold ${
                    plan.highlighted
                      ? "bg-brand-600 py-3 font-bold text-white shadow-md hover:bg-brand-700"
                      : "border border-slate-300 py-2.5 text-darktext hover:border-slate-400"
                  }`}
                  href={plan.href}
                >
                  {plan.cta}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
