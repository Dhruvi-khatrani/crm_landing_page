const reviews = [
  {
    quote:
      "We converted 35% more late-night inquiries into booked Monday consultations. It literally pays for itself within the first 48 hours of every month.",
    initials: "EK",
    initialsClass: "bg-brand-200 text-brand-800",
    name: "Dr. Elena Rostova",
    role: "Dental Director, Lumina Smile Studio",
  },
  {
    quote:
      "Our front-desk team was drowning in repetitive pricing messages on WhatsApp. Now they can focus completely on the patient sitting directly in front of them.",
    initials: "MT",
    initialsClass: "bg-indigo-200 text-indigo-800",
    name: "Marcus Thorne",
    role: "Operations Manager, City Health Clinic",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-bodybg py-20" data-purpose="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="text-xs font-bold tracking-wider text-brand-600 uppercase">Clinician Verified</span>
          <h2 className="mt-1 text-3xl font-extrabold text-darktext">From Our Clinics</h2>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              data-animate=""
              data-delay={String(index)}
              className="lift-card flex flex-col justify-between rounded-3xl border border-borderclr bg-white p-6 shadow-card"
            >
              <div className="space-y-3">
                <div className="flex text-sm text-amber-400">★★★★★</div>
                <p className="text-sm leading-relaxed text-darktext">&quot;{review.quote}&quot;</p>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${review.initialsClass}`}>
                  {review.initials}
                </div>
                <div>
                  <h5 className="text-xs font-bold text-darktext">{review.name}</h5>
                  <p className="text-[11px] text-mutedtext">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
