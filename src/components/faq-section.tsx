import { ChevronDownIcon } from "@/components/icons";

const faqs = [
  {
    q: "Does the receptionist replace my current front-desk team?",
    a: "No, it acts as a co-pilot. It handles after-hours queries, routine price checks, and booking mechanics so your in-clinic staff can focus on patients physically present in your waiting room.",
    open: true,
  },
  {
    q: "What happens when a patient asks an emergency question?",
    a: "The system recognizes emergency keywords (e.g. shortness of breath, severe hemorrhage, acute trauma) and immediately advises the patient to call local emergency services, while notifying your on-call clinician via SMS.",
  },
  {
    q: "Can we connect our existing WhatsApp Business number?",
    a: "Yes! You do not need to purchase a new phone number. You can link your official WhatsApp Business phone number directly via the Meta Cloud API or QR web pairing.",
  },
  {
    q: "How does calendar synchronization work with our EMR?",
    a: "We provide native two-way sync with leading systems like Cliniko, Dentrix, Jane, and Google Calendar. When a time slot is reserved, it is blocked immediately to prevent overlaps.",
  },
  {
    q: "Is patient data kept private and compliant?",
    a: "Yes. All conversations are encrypted in transit and at rest. We never sell patient contact details or use proprietary clinic data to train public foundation models.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="border-b border-borderclr bg-white py-20" data-purpose="faq-accordion">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold tracking-wider text-brand-600 uppercase">Questions & Answers</span>
          <h2 className="mt-1 text-3xl font-extrabold text-darktext">Frequently asked questions.</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.q}
              data-animate=""
              data-delay={String(Math.min(index, 3))}
              className="faq-item group rounded-2xl border border-borderclr bg-bodybg p-5"
              open={faq.open}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-bold text-darktext">
                <span>{faq.q}</span>
                <span className="shrink-0 text-brand-600 transition-transform duration-300 ease-out group-open:rotate-180" aria-hidden="true">
                  <ChevronDownIcon className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-3 text-xs leading-relaxed text-mutedtext sm:text-sm">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
