import Link from "next/link";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  highlight,
  body,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: ReactNode;
  highlight?: string;
  body: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-bodybg to-bodybg pt-14 pb-12 sm:pt-20 sm:pb-16">
      <div className="soft-glow pointer-events-none absolute top-0 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <span className="hero-rise text-xs font-bold tracking-wider text-brand-600 uppercase">{eyebrow}</span>
        <h1 className="hero-rise mt-3 text-4xl font-extrabold tracking-tight text-darktext sm:text-5xl" style={{ animationDelay: "0.1s" }}>
          {title}
          {highlight ? (
            <>
              {" "}
              <span className="bg-gradient-to-r from-brand-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">{highlight}</span>
            </>
          ) : null}
        </h1>
        <p className="hero-rise mx-auto mt-4 max-w-2xl text-base leading-relaxed text-mutedtext sm:text-lg" style={{ animationDelay: "0.2s" }}>
          {body}
        </p>
        {(primary || secondary) && (
          <div className="hero-rise mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: "0.3s" }}>
            {primary ? (
              <Link
                href={primary.href}
                className="pressable inline-flex w-full items-center justify-center rounded-full bg-[#130E20] px-7 py-3.5 text-sm font-medium text-white shadow-lg hover:bg-brand-950 sm:w-auto"
              >
                {primary.label}
              </Link>
            ) : null}
            {secondary ? (
              <Link
                href={secondary.href}
                className="pressable inline-flex w-full items-center justify-center rounded-full border border-borderclr bg-white/90 px-7 py-3.5 text-sm font-medium text-darktext shadow-sm hover:bg-slate-50 sm:w-auto"
              >
                {secondary.label}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
