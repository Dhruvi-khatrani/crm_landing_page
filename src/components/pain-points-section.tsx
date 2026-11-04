const pains = [
  {
    label: "The Delay Trap",
    title: "Replies delayed by 45+ minutes",
    body: "When front desk staff is attending a physical check-in, messages wait. Prospective patients simply message the next clinic on Google.",
    answer: "Under 10-second response rate 24/7/365.",
  },
  {
    label: "Price Discrepancies",
    title: "Inconsistent rates quoted by temp staff",
    body: "Reception staff often quote outdated consultation charges or forget mandatory cancellation terms, leading to awkward check-out moments.",
    answer: "Strict adherence to your approved fee schedule.",
  },
  {
    label: "Unhappy Surprises",
    title: "Emergency patients left unattended",
    body: "High-urgency complaints get buried under routine parking and opening-hour questions on Sunday evenings.",
    answer: "Automated triage triggers urgent SMS alerts to on-call doctors.",
  },
];

export function PainPointsSection() {
  return (
    <section className="bg-bodybg py-20" data-purpose="pain-points-comparison">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <span className="text-xs font-bold tracking-wider text-brand-600 uppercase">Before vs. With AI Receptionist</span>
        <h2 className="mx-auto mt-2 max-w-2xl text-3xl leading-tight font-extrabold text-darktext sm:text-4xl">
          You shouldn’t have to <span className="text-brand-600">hold every WhatsApp chat</span> yourself.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 text-left md:grid-cols-3">
          {pains.map((pain, index) => (
            <div
              key={pain.title}
              data-animate=""
              data-delay={String(index)}
              className="lift-card flex flex-col justify-between rounded-3xl border border-borderclr bg-white p-6 shadow-card"
            >
              <div>
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-sm font-bold text-rose-600">
                  ✕
                </div>
                <span className="text-[11px] font-bold tracking-wider text-rose-500 uppercase">{pain.label}</span>
                <h3 className="mt-1 mb-2 text-base font-bold text-darktext">{pain.title}</h3>
                <p className="text-xs leading-relaxed text-mutedtext">{pain.body}</p>
              </div>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <span className="text-[11px] font-bold text-brand-600 uppercase">With AI Receptionist</span>
                <p className="mt-0.5 text-xs font-medium text-darktext">{pain.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
