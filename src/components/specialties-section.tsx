const specialties = [
  {
    tag: "Dental Practice",
    title: "Dental & Orthodontics",
    body: "Triages toothaches vs cleanings, handles crown quotes, and books panoramic X-ray appointments.",
    quote: '"Is the whitening done in one session or two?"',
  },
  {
    tag: "Aesthetics",
    title: "Dermatology & Skin",
    body: "Handles consultation intake, pre-laser treatment skin questions, and holds initial patch-test deposits.",
    quote: '"Can I do microneedling if I\'m currently using retinol?"',
  },
  {
    tag: "Primary Care",
    title: "General Medical Practice",
    body: "Filters acute cough/fever symptoms, routes lab report queries, and schedules checkups.",
    quote: '"Do I need to fast before my standard blood panel tomorrow?"',
  },
  {
    tag: "Family Care",
    title: "Pediatric Clinics",
    body: "Answers vaccination schedules, collects child age/weight details, and flags newborn fevers immediately.",
    quote: '"Which shots are required for the 6-month checkup?"',
  },
  {
    tag: "Specialist",
    title: "Physiotherapy & Sports",
    body: "Collects injury histories, routes patients to sports-specific therapists, and verifies insurance.",
    quote: '"Do you take direct billing for Bupa physiotherapy?"',
  },
  {
    tag: "Group Clinics",
    title: "Multi-Branch Groups",
    body: "Routes patients to their nearest clinic location automatically using WhatsApp location pins.",
    quote: '"Which of your 3 clinics has an ultrasound opening this week?"',
  },
];

export function SpecialtiesSection() {
  return (
    <section id="specialties" className="border-b border-borderclr bg-white py-20" data-purpose="specialty-fit">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <span className="text-xs font-bold tracking-wider text-brand-600 uppercase">Tailored for Clinical Workflows</span>
        <h2 className="mx-auto mt-2 max-w-2xl text-3xl leading-tight font-extrabold text-darktext sm:text-4xl">
          Built for the way your clinic <span className="text-brand-600">already talks to patients.</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
          {specialties.map((item, index) => (
            <div
              key={item.title}
              data-animate=""
              data-delay={String(index % 3)}
              className="lift-card rounded-2xl border border-borderclr bg-bodybg p-6"
            >
              <span className="rounded-full bg-brand-100 px-2.5 py-1 text-[10px] font-bold text-brand-800 uppercase">
                {item.tag}
              </span>
              <h4 className="mt-3 mb-1 text-base font-bold text-darktext">{item.title}</h4>
              <p className="mb-3 text-xs leading-relaxed text-mutedtext">{item.body}</p>
              <div className="rounded-lg border border-slate-200 bg-white p-2.5 text-[11px] text-slate-600 italic">{item.quote}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
