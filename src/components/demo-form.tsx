"use client";

import { useState, type FormEvent } from "react";

const interests = [
  { id: "trial", label: "Start a free trial" },
  { id: "walkthrough", label: "Book a walkthrough" },
  { id: "pricing", label: "Talk through pricing" },
  { id: "integration", label: "EMR / calendar setup" },
];

export function DemoForm() {
  const [interest, setInterest] = useState("walkthrough");
  const [name, setName] = useState("");
  const [clinic, setClinic] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !clinic.trim()) {
      setError("Please add your name, clinic, and email so we can reply.");
      return;
    }
    if (!email.includes("@")) {
      setError("Enter a valid email address.");
      return;
    }

    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 700);
  }

  if (sent) {
    return (
      <div className="animate-fade-in rounded-3xl border border-emerald-100 bg-emerald-50/80 p-8 text-center sm:p-10">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</div>
        <h3 className="mt-4 text-xl font-bold text-darktext">Thanks, {name.split(" ")[0] || "there"}.</h3>
        <p className="mt-2 text-sm leading-relaxed text-mutedtext">
          We received your request for <strong className="text-darktext">{interests.find((item) => item.id === interest)?.label}</strong>.
          Our team usually replies within one working day.
        </p>
        <button
          type="button"
          className="mt-6 rounded-full border border-borderclr bg-white px-5 py-2.5 text-sm font-semibold text-darktext transition-colors duration-300 hover:bg-slate-50"
          onClick={() => {
            setSent(false);
            setMessage("");
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-borderclr bg-white p-6 shadow-card sm:p-8" noValidate>
      <div className="mb-6">
        <p className="text-xs font-bold tracking-wider text-brand-600 uppercase">What do you need?</p>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {interests.map((item) => {
            const selected = interest === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setInterest(item.id)}
                className={`chip-pop rounded-2xl border px-4 py-3 text-left text-sm font-semibold ${
                  selected
                    ? "is-on border-brand-300 bg-brand-50 text-brand-800"
                    : "border-borderclr bg-bodybg text-darktext hover:border-brand-200"
                }`}
                aria-pressed={selected}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block text-left">
          <span className="mb-1.5 block text-xs font-semibold text-darktext">Your name</span>
          <input
            className="w-full rounded-xl border border-borderclr bg-bodybg px-3.5 py-2.5 text-sm text-darktext outline-none transition-[border-color,box-shadow] duration-300 focus:border-brand-300 focus:shadow-soft"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            required
          />
        </label>
        <label className="block text-left">
          <span className="mb-1.5 block text-xs font-semibold text-darktext">Clinic name</span>
          <input
            className="w-full rounded-xl border border-borderclr bg-bodybg px-3.5 py-2.5 text-sm text-darktext outline-none transition-[border-color,box-shadow] duration-300 focus:border-brand-300 focus:shadow-soft"
            value={clinic}
            onChange={(event) => setClinic(event.target.value)}
            autoComplete="organization"
            required
          />
        </label>
        <label className="block text-left">
          <span className="mb-1.5 block text-xs font-semibold text-darktext">Email</span>
          <input
            type="email"
            className="w-full rounded-xl border border-borderclr bg-bodybg px-3.5 py-2.5 text-sm text-darktext outline-none transition-[border-color,box-shadow] duration-300 focus:border-brand-300 focus:shadow-soft"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />
        </label>
        <label className="block text-left">
          <span className="mb-1.5 block text-xs font-semibold text-darktext">Phone (optional)</span>
          <input
            type="tel"
            className="w-full rounded-xl border border-borderclr bg-bodybg px-3.5 py-2.5 text-sm text-darktext outline-none transition-[border-color,box-shadow] duration-300 focus:border-brand-300 focus:shadow-soft"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            autoComplete="tel"
          />
        </label>
      </div>

      <label className="mt-4 block text-left">
        <span className="mb-1.5 block text-xs font-semibold text-darktext">Anything we should know?</span>
        <textarea
          className="min-h-28 w-full rounded-xl border border-borderclr bg-bodybg px-3.5 py-2.5 text-sm text-darktext outline-none transition-[border-color,box-shadow] duration-300 focus:border-brand-300 focus:shadow-soft"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Doctors, EMR, WhatsApp number, or a specific booking problem…"
        />
      </label>

      {error ? <p className="mt-3 text-sm font-medium text-red-600">{error}</p> : null}

      <button
        type="submit"
        disabled={sending}
        className="pressable mt-6 w-full rounded-full bg-[#130E20] px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-black disabled:cursor-wait disabled:opacity-70 disabled:hover:transform-none"
      >
        {sending ? "Sending…" : "Send — we’ll call you back"}
      </button>
      <p className="mt-3 text-center text-[11px] text-mutedtext">
        Your details are used only to reply to this enquiry. No card needed for a trial.
      </p>
    </form>
  );
}
