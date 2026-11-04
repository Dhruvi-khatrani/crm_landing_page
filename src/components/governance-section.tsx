const cards = [
  {
    title: "You Write The Answers",
    body: "The AI never hallucinates treatment plans. It strictly answers from your approved clinical protocols and service parameters.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "You Choose The Handoff",
    body: "Configure custom triggers that notify a human staff member instantly on their desktop when a patient request needs personal care.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "You Take The Payment",
    body: "Payments and booking deposits pass directly into your clinic's own Stripe account. No intermediary holding accounts.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
  },
];

export function GovernanceSection() {
  return (
    <section className="bg-bodybg py-20" data-purpose="clinic-control">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <span className="text-xs font-bold tracking-wider text-brand-600 uppercase">Total Clinic Governance</span>
          <h2 className="mt-2 text-3xl font-extrabold text-darktext sm:text-4xl">
            Let the receptionist prepare. <span className="text-brand-600">Keep the decisions.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={card.title}
              data-animate=""
              data-delay={String(index)}
              className="rounded-3xl border border-borderclr bg-white p-6 shadow-card"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 font-bold text-purple-700">
                {card.icon}
              </div>
              <h3 className="mb-2 text-base font-bold text-darktext">{card.title}</h3>
              <p className="text-xs leading-relaxed text-mutedtext">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
