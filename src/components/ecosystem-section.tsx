import { LogoMark } from "@/components/icons";

const points = [
  "WhatsApp Business Cloud API Certified",
  "Syncs with Cliniko, Dentrix, Google Cal, Jane",
  "Direct Stripe deposit links for deposits",
];

const nodes = [
  {
    label: "WhatsApp API",
    dot: "bg-emerald-500",
    position: "bottom-[calc(50%+4.25rem)] left-1/2 -translate-x-1/2 sm:bottom-auto sm:top-0 sm:-translate-y-1/2",
  },
  {
    label: "EMR & Calendar",
    dot: "bg-indigo-500",
    position: "top-[calc(50%+4.25rem)] left-1/2 -translate-x-1/2 sm:top-auto sm:bottom-0 sm:translate-y-1/2",
  },
  {
    label: "Stripe Deposits",
    dot: "bg-brand-500",
    position: "top-1/2 right-[calc(50%+3.4rem)] -translate-y-1/2 sm:right-auto sm:left-0 sm:-translate-x-1/2",
  },
  {
    label: "Staff Handoff",
    dot: "bg-amber-500",
    position: "top-1/2 left-[calc(50%+3.4rem)] -translate-y-1/2 sm:left-auto sm:right-0 sm:translate-x-1/2",
  },
];

export function EcosystemSection() {
  return (
    <section className="overflow-x-clip border-b border-borderclr bg-white py-20" data-purpose="clinical-integrations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5" data-animate="">
            <span className="text-xs font-bold tracking-wider text-brand-600 uppercase">Zero Disruption</span>
            <h2 className="mt-2 text-3xl leading-tight font-extrabold text-darktext sm:text-4xl">
              AI Receptionist seamlessly runs across your clinical stack.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-mutedtext sm:text-base">
              Connects smoothly to your existing tools. No need to switch your practice management system, replace your
              calendar, or change clinic phone hardware.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-darktext">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:col-span-7" data-animate="" data-delay="1">
            <div className="relative flex aspect-square w-full max-w-[18rem] items-center justify-center sm:max-w-96">
              <div className="orbit-ring orbit-spin absolute inset-0" />
              <div className="orbit-ring orbit-spin-reverse absolute inset-6 sm:inset-8" />
              <div className="orbit-ring absolute inset-12 bg-brand-50/30 sm:inset-16" />
              <div className="pointer-events-none absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 sm:h-20 sm:w-20">
                <span className="radar-wave absolute inset-0 rounded-full bg-brand-400/45" />
                <span className="radar-wave radar-wave-delay absolute inset-0 rounded-full bg-brand-300/35" />
              </div>
              <div className="relative z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full border-4 border-white bg-brand-600 text-white shadow-lg sm:h-24 sm:w-24">
                <LogoMark className="mb-0.5 h-7 w-7 sm:h-8 sm:w-8" />
                <span className="text-[10px] font-bold sm:text-[11px]">AI Hub</span>
              </div>
              {nodes.map((node) => (
                <div key={node.label} className={`absolute z-20 ${node.position}`}>
                  <div
                    className={`flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold whitespace-nowrap text-slate-800 shadow-md sm:px-3 sm:text-xs ${
                      node.label === "EMR & Calendar" || node.label === "Stripe Deposits"
                        ? "animate-float-delayed"
                        : "animate-float-slow"
                    }`}
                  >
                    <span className={`h-2.5 w-2.5 rounded-full ${node.dot}`} />
                    {node.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
