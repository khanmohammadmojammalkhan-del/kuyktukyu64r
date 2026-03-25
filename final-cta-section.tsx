import { CtaButton } from "@/components/cta-button";

export function FinalCtaSection() {
  return (
    <section className="section-space pt-0">
      <div className="container-shell">
        <div className="panel rounded-[2rem] px-8 py-12 text-center md:px-12 md:py-16">
          <span className="section-kicker">Final CTA</span>
          <h2 className="mt-6 text-4xl font-black text-balance text-white md:text-5xl">
            Ready for design that looks premium and helps you convert better?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">
            Faisal&apos;s Zone takes on a limited number of projects at a time to keep quality high and communication fast. If your brand is ready for a sharper next step, now is a strong time to start.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton href="#contact">Start a Project</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
