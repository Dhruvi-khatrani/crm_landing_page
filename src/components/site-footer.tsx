import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/product", label: "Features" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/pricing", label: "Pricing plans" },
      { href: "/book-demo", label: "Book a demo" },
    ],
  },
  {
    title: "Specialties",
    links: [
      { href: "/product#specialties", label: "Dental practices" },
      { href: "/product#specialties", label: "Dermatology clinics" },
      { href: "/product#specialties", label: "Physiotherapy" },
      { href: "/product#specialties", label: "General practice" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/#faq", label: "FAQ" },
      { href: "/book-demo", label: "Contact" },
      { href: "/pricing", label: "Start free trial" },
      { href: "/how-it-works", label: "See a walkthrough" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-white py-14" data-purpose="site-footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 border-b border-borderclr pb-12 md:grid-cols-5">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-darktext">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-xs text-white">AI</span>
              <span>AI Receptionist</span>
            </Link>
            <p className="max-w-sm text-xs leading-relaxed text-mutedtext">
              The dedicated WhatsApp receptionist for modern healthcare practices. Answering inquiries, scheduling
              patients, and preventing lost revenue.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-3 text-xs font-bold tracking-wider text-darktext uppercase">{column.title}</h4>
              <ul className="space-y-2 text-xs text-mutedtext">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link className="transition-colors duration-300 hover:text-brand-600" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs text-mutedtext sm:flex-row">
          <div>© 2025 AI Receptionist Technologies Inc. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link className="transition-colors duration-300 hover:text-brand-600" href="/book-demo">
              Book a demo
            </Link>
            <Link className="transition-colors duration-300 hover:text-brand-600" href="/pricing">
              Pricing
            </Link>
            <Link className="transition-colors duration-300 hover:text-brand-600" href="/product">
              Product
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
