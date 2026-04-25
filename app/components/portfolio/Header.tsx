"use client";

import { useState } from "react";

const HEADER_BG = "border-black/5 bg-[#DFF9E1]/90 backdrop-blur-md dark:border-black/5 dark:bg-[#DFF9E1]/90";

const nav = [
  { href: "#about", label: "About Me" },
  { href: "#experience", label: "Experiences" },
  { href: "#projects", label: "My Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Get in Touch" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "rounded-lg px-3 py-2 text-sm font-medium text-black/75 transition-colors hover:bg-black/5 hover:text-black dark:text-black/75 dark:hover:bg-black/5 dark:hover:text-black";

  return (
    <header className={`sticky top-0 z-50 shrink-0 border-b ${HEADER_BG}`}>
      <div className="mx-auto flex h-14 max-w-[90rem] items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5 text-black dark:text-black">
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white text-xs font-bold text-black"
            aria-hidden
          >
            S
          </span>
          <span className="text-sm font-bold uppercase tracking-wide">Soyeon's Portfolio</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-black md:hidden dark:text-black"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open menu</span>
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-black/10 bg-[#DFF9E1] px-4 py-3 dark:border-black/10 dark:bg-[#DFF9E1] md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-black/85 hover:bg-black/5 dark:text-black/85 dark:hover:bg-black/5"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
