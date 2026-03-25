import Link from "next/link";

import { socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-lg">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)]">Faisal&apos;s Zone</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Design that makes brands feel sharper and sell better.</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
            Available for selected freelance projects, website redesigns, product UX work, and brand identity systems.
          </p>
        </div>

        <div className="space-y-3 text-sm text-[var(--color-text-muted)]">
          <p>hello@faisalszone.design</p>
          <p>Dhaka, Bangladesh · Remote worldwide</p>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
