import Link from "next/link";

const chips = [
  { n: "01. Pick one number", body: "Test on a secondary line first" },
  { n: "02. Add real answers", body: "Set rules for 3 key procedures" },
  { n: "03. Watch one booking", body: "Monitor live handoff in real-time" },
];

export function CalloutSection() {
  return (
    <section className="bg-bodybg py-16" data-purpose="callout-banner">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-animate="" className="relative overflow-hidden rounded-3xl bg-darkpurple p-8 text-white shadow-2xl sm:p-14">
          <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-brand-600/30 blur-3xl glow-pulse" />
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold tracking-wider text-purple-300 uppercase">Zero Risk Implementation</span>
            <h2 className="mt-3 text-3xl leading-tight font-extrabold tracking-tight sm:text-5xl">
              Try it on one clinic. <br />
              <span className="text-brand-300">Not the whole company.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-purple-200/80">
              Test on a single doctor’s schedule or a secondary branch. Watch how patients react before rolling out
              across your entire healthcare group.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {chips.map((chip) => (
                <div key={chip.n} className="rounded-xl border border-white/10 bg-white/10 p-3">
                  <span className="block text-[11px] font-bold text-brand-300">{chip.n}</span>
                  <span className="text-xs text-purple-100">{chip.body}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                className="pressable rounded-full bg-white px-6 py-3 text-xs font-bold text-darkpurple shadow hover:bg-slate-100 sm:text-sm"
                href="/book-demo"
              >
                Start your 14-day trial
              </Link>
              <Link
                className="pressable rounded-full border border-purple-500/40 bg-purple-900/60 px-6 py-3 text-xs font-medium text-white hover:bg-purple-900 sm:text-sm"
                href="/how-it-works"
              >
                Book a walkthrough
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
