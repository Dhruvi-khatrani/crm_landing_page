"use client";

import { useState } from "react";
import { CheckIcon } from "@/components/icons";
import { LiveThread, type LiveMessage } from "@/components/live-thread";

const steps = [
  {
    n: "01",
    title: "Immediate Clarity",
    badge: "Answer",
    badgeClass: "bg-purple-100 text-purple-700",
    body: "Instant greetings and accurate answers regarding pricing, procedures, and insurance.",
  },
  {
    n: "02",
    title: "Triage & Intake",
    badge: "Collect",
    badgeClass: "bg-slate-100 text-slate-600",
    body: "Collects patient symptoms, medical background, and urgency indicators automatically.",
  },
  {
    n: "03",
    title: "Live Availability",
    badge: "Hold a Time",
    badgeClass: "bg-slate-100 text-slate-600",
    body: "Syncs direct with your EMR or Google Calendar to present 2-3 optimal open slots.",
  },
  {
    n: "04",
    title: "Locked & Loaded",
    badge: "Confirm",
    badgeClass: "bg-emerald-100 text-emerald-700",
    body: "Sends confirmation, prep instructions, location pin, and booking link to the roster.",
  },
];

const thread: LiveMessage[] = [
  {
    id: "ask",
    align: "start",
    content: (
      <div className="max-w-md rounded-xl bg-slate-50 p-4">
        <span className="mb-1 block text-[11px] font-semibold text-slate-700">Patient</span>
        How much is teeth whitening and do you have slots this Saturday morning?
      </div>
    ),
  },
  {
    id: "price",
    align: "end",
    content: (
      <div className="max-w-md rounded-xl bg-brand-600 p-4 text-white">
        <span className="mb-1 block text-[11px] font-semibold text-brand-200">AI Receptionist</span>
        In-clinic LED teeth whitening is $280, which includes a pre-clean inspection. We have Saturday at 9:30 AM or
        11:15 AM with Dr. Sarah. Would either work?
      </div>
    ),
  },
  {
    id: "pick",
    align: "start",
    content: (
      <div className="max-w-md rounded-xl bg-slate-50 p-4">
        <span className="mb-1 block text-[11px] font-semibold text-slate-700">Patient</span>
        11:15 AM works best for me!
      </div>
    ),
  },
  {
    id: "held",
    align: "start",
    content: (
      <div className="w-full rounded-xl border border-brand-200 bg-brand-50 p-4 text-brand-900">
        <div className="mb-1 flex items-center gap-2 text-xs font-bold text-brand-700">
          <CheckIcon className="h-4 w-4 text-emerald-600" />
          Appointment Held: Saturday 11:15 AM
        </div>
        <p className="text-xs text-brand-800">Assigned to: Dr. Sarah | Duration: 45 min | Prep notes sent</p>
      </div>
    ),
  },
];

export function ConversationSection() {
  const [step, setStep] = useState(0);

  return (
    <section className="bg-bodybg py-20" data-purpose="conversation-flow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14" data-animate="">
          <span className="text-xs font-bold tracking-wider text-brand-600 uppercase">Fast triage · Instant confirmation</span>
          <h2 className="mt-2 text-3xl font-extrabold text-darktext sm:text-4xl">
            One conversation. <span className="text-brand-600">A confirmed visit.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            {steps.map((item, index) => {
              const active = step === index;
              return (
                <div
                  key={item.n}
                  className={`flex items-start gap-4 rounded-2xl border bg-white p-5 shadow-sm transition-[border-color,box-shadow] duration-700 ease-out ${
                    active ? "border-brand-200 shadow-card" : "border-borderclr hover:border-brand-200"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors duration-700 ease-out ${
                      active ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {item.n}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm font-bold text-darktext">{item.title}</h4>
                      <span className={`rounded px-2 py-0.5 text-[10px] font-semibold ${item.badgeClass}`}>{item.badge}</span>
                    </div>
                    <p className="mt-1 text-xs text-mutedtext">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-3xl border border-borderclr bg-white p-6 shadow-card sm:p-8 lg:col-span-7" data-animate="" data-delay="1">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs text-slate-400">Patient Chat Session #4092</span>
                <h3 className="text-sm font-bold text-darktext">Consultation & Teeth Whitening Inquiry</h3>
              </div>
              <span
                className={`rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 transition-opacity duration-700 ease-out ${
                  step === 3 ? "opacity-100" : "opacity-40"
                }`}
              >
                Visit Booked
              </span>
            </div>
            <LiveThread messages={thread} minHeightClass="min-h-[320px] sm:min-h-[340px]" onIndex={setStep} />
          </div>
        </div>
      </div>
    </section>
  );
}
