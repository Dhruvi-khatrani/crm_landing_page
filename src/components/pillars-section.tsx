const pillars = [
  {
    title: "Your WhatsApp",
    body: "Operates on your existing clinical WhatsApp phone number without confusing patient migrations.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Your Information",
    body: "Learns your consultation fees, doctor availability, clinic policies, and precise pre-visit instructions.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Your Team Steps In",
    body: "Smooth instant handoff whenever an edge-case or delicate patient issue requires human bedside empathy.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
  },
];

export function PillarsSection() {
  return (
    <section className="border-y border-borderclr bg-white py-12" data-purpose="three-pillars">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              data-animate=""
              data-delay={String(index)}
              className="lift-card group flex flex-col gap-3 rounded-2xl border border-brand-100 bg-brand-50/50 p-6"
            >
              <div className="icon-pop flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 font-bold text-brand-700">
                {pillar.icon}
              </div>
              <h3 className="text-base font-bold text-darktext">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-mutedtext">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
