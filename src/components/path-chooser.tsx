import Link from "next/link";

const paths = [
  {
    eyebrow: "See the product",
    title: "Explore what the AI handles",
    body: "Answers, booking, triage, and handoff — with live chat previews you can click through.",
    href: "/product",
    cta: "View product →",
  },
  {
    eyebrow: "See the flow",
    title: "Watch a visit get confirmed",
    body: "Follow one patient conversation from the first message to a held appointment.",
    href: "/how-it-works",
    cta: "How it works →",
  },
  {
    eyebrow: "Ready to try",
    title: "Pick a plan or book a walkthrough",
    body: "Start a 14-day trial, or talk through your clinic schedule with our team first.",
    href: "/pricing",
    cta: "See pricing →",
  },
];

export function PathChooser() {
  return (
    <section className="border-y border-borderclr bg-white py-16" data-purpose="path-chooser">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center" data-animate="">
          <span className="text-xs font-bold tracking-wider text-brand-600 uppercase">Choose where to start</span>
          <h2 className="mt-2 text-3xl font-extrabold text-darktext sm:text-4xl">
            One website. <span className="text-brand-600">Clear next steps.</span>
          </h2>
          <p className="mt-3 text-sm text-mutedtext">Click into the page that matches what you need right now.</p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {paths.map((path, index) => (
            <Link
              key={path.href}
              href={path.href}
              data-animate=""
              data-delay={String(index)}
              className="lift-card group rounded-3xl border border-borderclr bg-bodybg p-6 hover:border-brand-200"
            >
              <span className="text-[11px] font-bold tracking-wider text-brand-600 uppercase">{path.eyebrow}</span>
              <h3 className="mt-2 text-lg font-bold text-darktext">{path.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mutedtext">{path.body}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-brand-700 transition-colors duration-300 group-hover:text-brand-600">
                <span className="cta-nudge">{path.cta}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
