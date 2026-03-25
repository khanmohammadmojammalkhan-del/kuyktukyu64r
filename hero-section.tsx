import Image from "next/image";

import { CtaButton } from "@/components/cta-button";

export function HeroSection() {
  return (
    <section id="top" className="section-space overflow-hidden">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10">
          <span className="section-kicker">Creative Portfolio</span>
          <h1 className="heading-display mt-6 max-w-4xl text-5xl text-balance text-white sm:text-6xl xl:text-7xl">
            Faisal&apos;s Zone builds <span className="text-gradient">conversion-focused design</span> for brands that want to look premium and grow faster.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
            UI/UX, branding, graphic design, and high-performing web experiences that turn scattered visuals into a clear, trustworthy presence clients want to work with.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
            If your website feels outdated, your product feels clunky, or your brand does not reflect your actual value, this is where strategy and design come together.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <CtaButton href="#contact">Hire Me</CtaButton>
            <CtaButton href="#portfolio" variant="ghost">
              View Work
            </CtaButton>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-[var(--color-text-muted)]">
            <div>
              <span className="block text-2xl font-bold text-white">48+</span>
              Successful design projects
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">96%</span>
              Client satisfaction
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">Fast</span>
              First responses within 24 hours
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="fine-grid absolute inset-0 rounded-[2rem] opacity-30" />
          <div className="panel relative rounded-[2rem] p-4">
            <div className="rounded-[1.6rem] border border-white/[0.08] bg-[linear-gradient(160deg,rgba(174,183,132,0.18),rgba(255,255,255,0.04)_36%,rgba(65,67,27,0.5))] p-3">
              <Image
                src="/portfolio/hero-preview.svg"
                alt="Faisal's Zone featured project previews"
                width={780}
                height={740}
                priority
                className="h-auto w-full rounded-[1.25rem]"
              />
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.4rem] border border-white/[0.08] bg-white/[0.04] p-5">
                <p className="text-xs uppercase tracking-[0.26em] text-[var(--color-secondary)]">Primary Focus</p>
                <p className="mt-3 text-lg font-semibold text-white">Design systems that look bold and convert clearly.</p>
              </div>
              <div className="rounded-[1.4rem] border border-white/[0.08] bg-white/[0.04] p-5">
                <p className="text-xs uppercase tracking-[0.26em] text-[var(--color-secondary)]">Best Fit</p>
                <p className="mt-3 text-lg font-semibold text-white">Founders and teams ready for a stronger visual identity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
