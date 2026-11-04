import Link from "next/link";
import { ArrowRightIcon, CheckIcon, ChevronRightIcon, PlayIcon } from "@/components/icons";
import { LiveThread, type LiveMessage } from "@/components/live-thread";

const history = [
  {
    icon: "🦷",
    iconClass: "bg-brand-100 text-brand-700",
    title: "Dental Cleaning & Checkup",
    meta: "Booked · 2m ago",
  },
  {
    icon: "🩺",
    iconClass: "bg-purple-100 text-purple-700",
    title: "Wisdom Tooth Consultation",
    meta: "Triage In-Progress",
  },
  {
    icon: "⚡",
    iconClass: "bg-emerald-100 text-emerald-700",
    title: "Pancake / Treatment Settings",
    meta: "Updated Fee Rules",
  },
];

const avatars = [
  { src: "/avatars/doctor-1.jpg", alt: "Doctor Avatar" },
  { src: "/avatars/doctor-2.jpg", alt: "Doctor Avatar" },
  { src: "/avatars/doctor-3.jpg", alt: "Dentist Avatar" },
];

const heroMessages: LiveMessage[] = [
  {
    id: "pain",
    align: "start",
    content: (
      <div className="rounded-2xl rounded-bl-sm bg-slate-100 px-4 py-3 leading-relaxed text-darktext">
        Hi, I have severe tooth pain since yesterday. Do you have an opening today with Dr. Croft?
        <span className="mt-1 block text-right text-[10px] text-slate-400">10:42 AM</span>
      </div>
    ),
  },
  {
    id: "offer",
    align: "end",
    content: (
      <div className="rounded-2xl rounded-br-sm bg-brand-600 px-4 py-3 leading-relaxed text-white shadow-sm">
        Hello! I&apos;m sorry to hear about your tooth pain. We have an emergency slot available today at{" "}
        <strong className="underline decoration-white/40">2:30 PM</strong> with Dr. Croft.
        <br />
        <br />
        Would you like me to hold that appointment for you right now?
        <span className="mt-1 block text-right text-[10px] text-brand-200">10:42 AM · Sent by AI Receptionist ✓✓</span>
      </div>
    ),
  },
  {
    id: "yes",
    align: "start",
    content: (
      <div className="rounded-2xl rounded-bl-sm bg-slate-100 px-4 py-3 leading-relaxed text-darktext">
        Yes please! 2:30 PM works perfectly.
        <span className="mt-1 block text-right text-[10px] text-slate-400">10:43 AM</span>
      </div>
    ),
  },
  {
    id: "booked",
    align: "end",
    content: (
      <div className="rounded-2xl rounded-br-sm bg-brand-600 px-4 py-3 leading-relaxed text-white shadow-sm">
        All set! You are booked for <strong>2:30 PM today</strong> at Dr. Croft Dental Care. I&apos;ve sent a calendar
        invite and intake form to your phone. See you soon!
        <span className="mt-1 block text-right text-[10px] text-brand-200">10:43 AM · Confirmed ✓✓</span>
      </div>
    ),
  },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50/80 via-bodybg to-bodybg pt-12 pb-24 sm:pt-16 sm:pb-32"
      data-purpose="hero-banner"
    >
      <div className="glow-pulse pointer-events-none absolute top-1/4 left-1/2 h-[480px] w-[650px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-tr from-brand-300/30 via-purple-400/20 to-indigo-300/20 blur-3xl sm:w-[900px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-20 mx-auto max-w-4xl text-center">
          <div className="hero-rise mx-auto mb-6 inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-brand-200/80 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-darktext shadow-soft backdrop-blur-md sm:px-4 sm:text-xs sm:tracking-wide">
            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full soft-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Elevate clinic engagement with AI
            </span>
            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              <span className="text-brand-400">·</span>
              <span className="font-bold text-brand-700">WhatsApp Booking</span>
            </span>
          </div>

          <h1 className="hero-rise mb-6 text-4xl leading-[1.12] font-extrabold tracking-tight text-darktext sm:text-5xl lg:text-6xl" style={{ animationDelay: "0.12s" }}>
            Enhance Patient Booking with AI Chat
            <br />
            <span className="bg-gradient-to-r from-brand-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              For Your Clinic
            </span>
          </h1>

          <p className="hero-rise mx-auto mb-8 max-w-2xl text-base leading-relaxed text-mutedtext sm:text-lg" style={{ animationDelay: "0.22s" }}>
            AI Receptionist transforms your clinic knowledge, services, and schedules into accurate, AI-powered WhatsApp
            responses, automating support and appointments while you&apos;re with patients.
          </p>

          <div className="hero-rise mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: "0.32s" }}>
            <Link
              className="pressable group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#130E20] px-7 py-3.5 text-sm font-medium text-white shadow-lg hover:bg-brand-950 sm:w-auto sm:text-base"
              href="/pricing"
            >
              <span>Try It Free</span>
              <span className="cta-nudge">
                <ArrowRightIcon className="h-4 w-4 text-purple-300" />
              </span>
            </Link>
            <a
              className="pressable inline-flex w-full items-center justify-center gap-2 rounded-full border border-borderclr bg-white/90 px-7 py-3.5 text-sm font-medium text-darktext shadow-sm backdrop-blur-sm hover:bg-slate-50 sm:w-auto sm:text-base"
              href="#sample-chat"
            >
              <PlayIcon className="h-4 w-4 text-brand-600" />
              <span>Watch Demo</span>
            </a>
          </div>

          <div className="hero-rise mb-8 flex items-center justify-center gap-3 pt-1 sm:mb-12" style={{ animationDelay: "0.42s" }}>
            <div className="flex -space-x-2.5">
              {avatars.map((avatar) => (
                <img
                  key={avatar.src}
                  alt={avatar.alt}
                  src={avatar.src}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />
              ))}
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-600 text-[10px] font-bold text-white">
                +2k
              </div>
            </div>
            <div className="text-left text-xs">
              <div className="flex items-center gap-1 leading-none font-bold text-amber-500">
                <span>★★★★★</span>
                <span className="ml-0.5 text-[11px] font-semibold text-darktext">4.9/5</span>
              </div>
              <p className="mt-0.5 text-[11px] text-mutedtext">
                Trusted by <strong className="font-semibold text-darktext">2,000+ clinics</strong> worldwide
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-4 max-w-5xl sm:mt-6">
          <div className="hero-card-left absolute -top-6 -left-12 z-30 hidden w-64 xl:block" style={{ animationDelay: "0.45s" }}>
            <div className="animate-float-slow rounded-2xl border border-brand-100 bg-white/95 p-4 shadow-glass backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-600" />
                <h5 className="text-xs font-bold text-darktext">Chat History</h5>
              </div>
              <span className="cursor-pointer text-[10px] font-semibold text-brand-600 hover:text-brand-700">See All</span>
            </div>
            <div className="mt-3 space-y-2">
              {history.map((item) => (
                <div
                  key={item.title}
                  className="group flex cursor-pointer items-center justify-between rounded-xl border border-transparent bg-bodybg p-2 transition hover:border-brand-200 hover:bg-brand-50/70"
                >
                  <div className="flex min-w-0 items-center gap-2">
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs ${item.iconClass}`}>
                      {item.icon}
                    </span>
                    <div className="min-w-0 text-left">
                      <p className="truncate text-[11px] font-semibold text-darktext">{item.title}</p>
                      <span className="text-[9px] text-mutedtext">{item.meta}</span>
                    </div>
                  </div>
                  <ChevronRightIcon className="h-3.5 w-3.5 shrink-0 text-slate-400 transition group-hover:text-brand-600" />
                </div>
              ))}
            </div>
            </div>
          </div>

          <div className="hero-card-left absolute bottom-8 -left-10 z-30 hidden xl:block" style={{ animationDelay: "0.62s" }}>
          <div className="animate-float-delayed flex items-center gap-3 rounded-full border border-brand-200/80 bg-white/95 py-2 pr-4 pl-2 shadow-glass backdrop-blur-md">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-brand-600 to-purple-500 text-white shadow-md">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
              </svg>
            </div>
            <div>
              <span className="block text-[11px] font-bold text-darktext">Unlock The Future Of Clinic WhatsApp!</span>
              <span className="block text-[9px] font-medium text-brand-600">Auto-transcribe & intelligent voice response</span>
            </div>
          </div>
          </div>

          <div className="hero-card-right absolute -top-8 -right-28 z-30 hidden w-72 xl:block" style={{ animationDelay: "0.45s" }}>
          <div className="animate-float-slow rounded-2xl border border-brand-100 bg-white/95 p-4 shadow-glass backdrop-blur-md">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-white shadow-sm">
                  <svg className="ml-0.5 h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </span>
                <div>
                  <h6 className="text-[11px] leading-tight font-bold text-darktext">Patient Voice Note</h6>
                  <span className="text-[9px] text-mutedtext">00:45 · WhatsApp Audio</span>
                </div>
              </div>
              <div className="flex h-6 items-center gap-1 rounded-lg bg-brand-50 px-2" aria-hidden="true">
                <span className="wave-bar wave-bar-1 bg-brand-500" />
                <span className="wave-bar wave-bar-2 bg-brand-600" />
                <span className="wave-bar wave-bar-3 bg-brand-400" />
                <span className="wave-bar wave-bar-4 bg-brand-600" />
                <span className="wave-bar wave-bar-5 bg-brand-500" />
                <span className="wave-bar wave-bar-6 bg-brand-600" />
                <span className="wave-bar wave-bar-7 bg-brand-400" />
              </div>
            </div>
            <div className="rounded-xl border border-brand-100 bg-brand-50/70 p-2.5">
              <p className="text-[11px] leading-relaxed font-medium text-darktext">
                &quot;Emergency appointment for today with Dr. Croft please&quot;
              </p>
              <span className="mt-1 block text-right text-[9px] font-bold text-brand-700">Transcribed · Matched slot ✓✓</span>
            </div>
          </div>
          </div>

          <div className="hero-card-right absolute -right-12 bottom-6 z-30 hidden w-64 xl:block" style={{ animationDelay: "0.62s" }}>
          <div className="animate-float-delayed rounded-2xl border border-brand-100 bg-white/95 p-4 shadow-glass backdrop-blur-md">
            <div className="mb-2 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="rounded-full border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold tracking-wider text-emerald-700 uppercase">
                Live Engine
              </span>
            </div>
            <h5 className="text-xs font-bold text-darktext">Triage To Booking</h5>
            <p className="mt-1 text-[11px] leading-snug text-mutedtext">
              Automated intake is simple and seamless across clinical schedules.
            </p>
            <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5">
              <span className="text-[10px] font-semibold text-brand-700">Ready in 30 mins</span>
              <Link
                className="rounded-full bg-darkpurple px-3 py-1.5 text-[10px] font-bold text-white shadow-sm transition duration-300 hover:bg-black"
                href="/book-demo"
              >
                Try Now →
              </Link>
            </div>
            </div>
          </div>

          <div
            id="sample-chat"
            className="hero-rise relative z-20 mx-auto max-w-2xl rounded-3xl border border-brand-200/90 bg-white/95 p-5 text-left shadow-float backdrop-blur-sm sm:p-7"
            style={{ animationDelay: "0.48s" }}
          >
            <div className="absolute -inset-0.5 -z-10 rounded-3xl bg-gradient-to-r from-brand-500/20 via-purple-500/10 to-indigo-500/20 opacity-75 blur" />
            <div className="mb-5 flex flex-col gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white shadow-sm">
                  DR
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-darktext">Dr. Croft Dental Care</h4>
                  <p className="flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                    <span className="relative flex h-1.5 w-1.5 shrink-0">
                      <span className="absolute inline-flex h-full w-full soft-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                    <span>Online · AI Receptionist Active</span>
                  </p>
                </div>
              </div>
              <span className="w-fit shrink-0 rounded-full border border-brand-100 bg-brand-50 px-2.5 py-1 text-[10px] font-medium text-brand-700 sm:text-xs">
                WhatsApp Verified
              </span>
            </div>

            <LiveThread messages={heroMessages} />
          </div>
        </div>

        <p className="hero-rise mt-8 flex flex-wrap items-center justify-center gap-2 px-2 text-center text-xs text-mutedtext" style={{ animationDelay: "0.62s" }}>
          <CheckIcon className="h-3.5 w-3.5 text-brand-600" />
          14-day free trial · Your words, your prices, your policies. No credit card upfront.
        </p>
      </div>
    </section>
  );
}
