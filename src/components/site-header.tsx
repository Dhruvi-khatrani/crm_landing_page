"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoMark } from "@/components/icons";

const links = [
  { href: "/product", label: "Product" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/book-demo", label: "Book a demo" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-borderclr bg-white/85 backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto] items-center gap-3 px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <Link
          className="group flex min-w-0 shrink-0 items-center gap-2.5 justify-self-start text-base font-bold tracking-tight text-darktext sm:text-lg"
          href="/"
          onClick={() => setOpen(false)}
        >
          <span className="icon-pop flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white shadow-sm">
            <LogoMark />
          </span>
          <span className="truncate">AI Receptionist</span>
        </Link>

        <nav
          aria-label="Main Navigation"
          className="hidden items-center justify-center gap-5 text-sm font-medium whitespace-nowrap text-mutedtext lg:flex xl:gap-7"
        >
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                className={`nav-link ${active ? "is-active font-semibold text-brand-600" : "hover:text-brand-600"}`}
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center justify-self-end gap-2 sm:gap-4">
          <Link
            className="hidden px-3 py-1.5 text-sm font-medium text-darktext transition-colors duration-300 hover:text-brand-600 sm:inline"
            href="/book-demo"
          >
            Login
          </Link>
          <Link
            className="pressable rounded-full bg-[#130E20] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black sm:px-5 sm:py-2.5"
            href="/pricing"
          >
            Get Started
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-borderclr text-darktext transition-colors duration-300 hover:bg-brand-50 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeWidth="2" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeWidth="2" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" aria-label="Mobile Navigation" className="menu-in border-t border-borderclr bg-white/95 px-4 py-3 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  className={`rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-300 ${
                    active ? "bg-brand-50 text-brand-700" : "text-darktext hover:bg-brand-50 hover:text-brand-700"
                  }`}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-darktext transition-colors duration-300 hover:bg-brand-50 hover:text-brand-700 sm:hidden"
              href="/book-demo"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
