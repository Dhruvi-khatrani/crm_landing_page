import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons";

const steps = [
  {
    n: "1",
    title: "Create Your Clinic Profile",
    body: "Specify clinic branches, doctor specialties, consultation hours, and consultation pricing.",
    active: true,
  },
  {
    n: "2",
    title: "Teach the Receptionist",
    body: "Paste your FAQ, pre-treatment instructions (e.g., fasting rules), and intake questions.",
    active: false,
  },
  {
    n: "3",
    title: "Connect WhatsApp",
    body: "Scan a QR code from your existing WhatsApp Business app or connect via Cloud API.",
    active: false,
  },
  {
    n: "4",
    title: "Start Your 14-Day Free Trial",
    body: "Watch real patient bookings land directly on your calendar with full human override at any moment.",
    active: false,
  },
];

export function GettingStartedSection() {
  return (
    <section className="border-b border-borderclr bg-white py-20" data-purpose="implementation-steps">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5" data-animate="">
            <span className="text-xs font-bold tracking-wider text-brand-600 uppercase">Setup in 30 minutes</span>
            <h2 className="mt-2 text-3xl leading-tight font-extrabold text-darktext sm:text-4xl">Getting Started with Total Ease.</h2>
            <p className="mt-4 text-sm leading-relaxed text-mutedtext">
              No technical knowledge needed. Our clinical onboarding guides you through inputting your services and
              connects to your WhatsApp in a single click.
            </p>
            <div className="mt-6">
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-[#130E20] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-black"
                href="/book-demo"
              >
                Get started now
                <ChevronRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="space-y-4 lg:col-span-7">
            {steps.map((step, index) => (
              <div
                key={step.n}
                data-animate=""
                data-delay={String(Math.min(index, 3))}
                className={`flex items-start gap-4 rounded-2xl border p-5 ${
                  step.active ? "border-brand-100 bg-bodybg" : "border-borderclr bg-white"
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    step.active ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {step.n}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-darktext">{step.title}</h4>
                  <p className="mt-1 text-xs text-mutedtext">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
