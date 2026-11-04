const modules = [
  { n: "01", title: "Clinic Profile", body: "Locations, parking instructions, transit access, and operating hours." },
  { n: "02", title: "Doctor Rosters", body: "Specialties, medical credentials, and individual shift patterns." },
  { n: "03", title: "Service Menu", body: "Procedure durations, requirements, and transparent price cards." },
  { n: "04", title: "Insurance & Billing", body: "Accepted insurance networks, co-pay policies, and direct claim steps." },
  { n: "05", title: "Triage Rules", body: "Emergency flags for chest pain, acute bleeding, or fever symptoms." },
  { n: "06", title: "Intake Questions", body: "Custom fields to collect before arrival (allergies, referring doctor)." },
  { n: "07", title: "Clinic Tone & Style", body: "Set the warmth, formality, and language preferences of your practice." },
  { n: "08", title: "Deposit Policies", body: "Require upfront slot deposits for surgical or high-demand appointments." },
];

export function KnowledgeSection() {
  return (
    <section className="border-b border-borderclr bg-white py-20" data-purpose="knowledge-system">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <span className="text-xs font-bold tracking-wider text-brand-600 uppercase">Effortless Knowledge Engine</span>
        <h2 className="mx-auto mt-2 max-w-xl text-3xl leading-tight font-extrabold text-darktext sm:text-4xl">
          You fill it in once. <span className="text-brand-600">The receptionist uses it every chat.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-mutedtext">
          Configure modular blocks that mirror your clinic&apos;s actual front-office protocol.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module, index) => (
            <div
              key={module.n}
              data-animate=""
              data-delay={String(index % 4)}
              className="rounded-2xl border border-borderclr bg-bodybg p-5 transition hover:border-brand-200"
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 text-xs font-bold text-brand-700">
                {module.n}
              </div>
              <h4 className="text-sm font-bold text-darktext">{module.title}</h4>
              <p className="mt-1 text-xs text-mutedtext">{module.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
