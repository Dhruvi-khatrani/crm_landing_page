"use client";

import { useEffect, useState } from "react";

const features = [
  {
    id: "answers",
    pill: "Answers",
    kicker: "Instant Calendar Booking",
    title: "Patient self-selection without phone tag.",
    body: 'Instead of sending five back-and-forth messages asking "are you free Tuesday morning?", the AI surfaces exact available slots from your schedule.',
    bullets: [
      "Direct calendar lock prevents double booking",
      "Doctor-specific buffer rules respected",
      "Automatic ICS calendar invite via WhatsApp",
    ],
    messages: [
      { from: "patient", text: "Can I come in tomorrow after 4pm for a consultation?" },
      {
        from: "ai",
        text: "Tomorrow we have:\n• 4:15 PM with Dr. Evans\n• 5:00 PM with Dr. Evans\nWhich one would you like to secure?",
      },
    ],
  },
  {
    id: "booking",
    pill: "Booking",
    kicker: "Confirmed Visits",
    title: "A held time, before the chat ends.",
    body: "The receptionist offers real open slots, locks the one the patient chooses, and sends the invite without a second call from the front desk.",
    bullets: [
      "Offers two or three real openings, not a guess",
      "Holds the slot the moment the patient confirms",
      "Sends prep notes with the calendar invite",
    ],
    messages: [
      { from: "patient", text: "How much is teeth whitening and do you have slots this Saturday morning?" },
      {
        from: "ai",
        text: "In-clinic LED whitening is $280. Saturday is open at 9:30 AM or 11:15 AM with Dr. Sarah. Which should I hold?",
      },
    ],
  },
  {
    id: "triage",
    pill: "Triage",
    kicker: "Urgency First",
    title: "Routine questions wait. Urgent ones do not.",
    body: "Emergency language is caught in the same thread as parking questions, then routed to the on-call clinician with the details already collected.",
    bullets: [
      "Flags pain, bleeding, fever, and trauma keywords",
      "Collects symptoms before a human joins",
      "Sends an SMS alert to the on-call doctor",
    ],
    messages: [
      { from: "patient", text: "I have severe tooth pain since yesterday. Is anyone available today?" },
      {
        from: "ai",
        text: "I’m sorry you’re in pain. I can hold an emergency slot today at 2:30 PM with Dr. Croft, and I’ve marked this chat as urgent.",
      },
    ],
  },
  {
    id: "handoff",
    pill: "Handoff",
    kicker: "Your Team Steps In",
    title: "The receptionist prepares. A person decides.",
    body: "You choose the moments a human should take over. The chat arrives with the history, the slot, and the reason it was escalated.",
    bullets: [
      "Custom triggers for complaints, refunds, and clinical questions",
      "Desktop alert for the role you name",
      "Full transcript stays attached to the handoff",
    ],
    messages: [
      { from: "patient", text: "I need to speak with a person about a refund for last week’s visit." },
      {
        from: "ai",
        text: "I’ve paused booking and notified the front desk. A teammate will join this chat shortly with your visit details.",
      },
    ],
  },
] as const;

type FeatureId = (typeof features)[number]["id"];

export function FeatureTabsSection() {
  const [active, setActive] = useState<FeatureId>("answers");
  const [panelId, setPanelId] = useState<FeatureId>("answers");
  const [visible, setVisible] = useState(true);
  const feature = features.find((item) => item.id === panelId) ?? features[0];

  useEffect(() => {
    if (active === panelId) return;
    setVisible(false);
    const timer = window.setTimeout(() => {
      setPanelId(active);
      setVisible(true);
    }, 280);
    return () => window.clearTimeout(timer);
  }, [active, panelId]);

  return (
    <section className="bg-bodybg py-20" data-purpose="feature-showcase">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="text-xs font-bold tracking-wider text-brand-600 uppercase">Features on Demand</span>
          <h2 className="mt-2 text-3xl font-extrabold text-darktext sm:text-4xl">
            The work of the front desk. <span className="text-brand-600">On the chat you already use.</span>
          </h2>
          <div className="mx-auto mt-6 w-full max-w-xl overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:w-fit [&::-webkit-scrollbar]:hidden">
            <div className="mx-auto flex w-max items-center gap-2 rounded-full border border-borderclr bg-white p-1.5 shadow-sm" role="tablist" aria-label="Product features">
              {features.map((item) => {
                const selected = item.id === active;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    className={`chip-pop rounded-full px-4 py-1.5 text-xs font-bold ${
                      selected ? "is-on bg-brand-600 text-white" : "text-mutedtext hover:bg-slate-100"
                    }`}
                    onClick={() => setActive(item.id)}
                  >
                    {item.pill}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-brand-100 bg-white p-6 shadow-card transition-shadow duration-500 sm:p-10">
          <div
            className={`grid grid-cols-1 items-center gap-8 transition-[opacity,transform] duration-300 ease-out md:grid-cols-2 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
            }`}
          >
          <div>
            <span className="text-xs font-bold text-brand-600 uppercase">{feature.kicker}</span>
            <h3 className="mt-1 mb-4 text-2xl font-bold text-darktext">{feature.title}</h3>
            <p className="mb-6 text-sm leading-relaxed text-mutedtext">{feature.body}</p>
            <ul className="space-y-3 text-xs font-medium text-darktext sm:text-sm">
              {feature.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2">
                  <span className="font-bold text-brand-600">✓</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="mb-3 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">Live Interactive Preview</div>
            <div className="space-y-3 text-xs">
              {feature.messages.map((message) =>
                message.from === "patient" ? (
                  <div key={message.text} className="rounded-xl border border-slate-100 bg-white p-3 text-slate-700 shadow-sm">
                    {message.text}
                  </div>
                ) : (
                  <div key={message.text} className="rounded-xl bg-brand-600 p-3.5 whitespace-pre-line text-white shadow-sm">
                    {message.from === "ai" && feature.id === "answers" ? (
                      <>
                        Tomorrow we have:
                        <br />• <strong>4:15 PM</strong> with Dr. Evans
                        <br />• <strong>5:00 PM</strong> with Dr. Evans
                        <br />
                        Which one would you like to secure?
                      </>
                    ) : (
                      message.text
                    )}
                  </div>
                ),
              )}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
