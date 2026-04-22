"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#stats", label: "Stats" },
  { href: "#clients", label: "Clients" },
  { href: "#accredian-edge", label: "Accredian Edge" },
  { href: "#cat", label: "CAT" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faqs", label: "FAQs" },
  { href: "#testimonials", label: "Testimonials" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#home" className="text-xl font-bold tracking-tight text-[#2a73db]">
          accredian
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          Menu
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-700 transition hover:text-[#2a73db]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-sm font-medium text-slate-700"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
