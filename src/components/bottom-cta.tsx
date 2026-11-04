import Link from "next/link";

export function BottomCta() {
  return (
    <section className="border-b border-brand-100 bg-brand-50/70 py-20 text-center" data-purpose="secondary-cta">
      <div className="mx-auto max-w-3xl px-4" data-animate="">
        <h2 className="text-3xl font-extrabold text-darktext sm:text-4xl">
          Start with one conversation.
          <br />
          <span className="text-brand-600">See whether your patients get a faster answer.</span>
        </h2>
        <p className="mt-3 text-sm text-mutedtext">Setup takes less than 30 minutes. No technical background required.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            className="pressable w-full rounded-full bg-[#130E20] px-7 py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-black sm:w-auto"
            href="/pricing"
          >
            Start your 14-day trial
          </Link>
          <Link
            className="pressable w-full rounded-full border border-borderclr bg-white px-7 py-3 text-center text-sm font-semibold text-darktext hover:bg-slate-50 sm:w-auto"
            href="/book-demo"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
