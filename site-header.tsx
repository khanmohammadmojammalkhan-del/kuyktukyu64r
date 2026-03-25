"use client";

import Link from "next/link";
import { useState } from "react";

import { CtaButton } from "@/components/cta-button";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { navItems } from "@/lib/data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[rgba(7,9,7,0.74)] backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between gap-6 py-4">
        <Link href="#top" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-[var(--color-border)] bg-[rgba(174,183,132,0.1)] text-sm font-black text-[var(--color-secondary)]">
            FZ
          </span>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
              Faisal&apos;s Zone
            </div>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">UI/UX and graphic design for growth-minded brands</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-text-muted)] transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaButton href="#contact">Hire Me</CtaButton>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-border)] bg-white/[0.05] text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-white/[0.06] bg-[rgba(8,10,8,0.98)] lg:hidden">
          <div className="container-shell flex flex-col gap-2 py-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-transparent px-4 py-3 text-sm text-[var(--color-text-muted)] transition hover:border-[var(--color-border)] hover:bg-white/[0.04] hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <CtaButton href="#contact" className="mt-3 w-full">
              Start a Project
            </CtaButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
