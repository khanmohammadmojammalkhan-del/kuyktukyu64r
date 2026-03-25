import { SectionHeading } from "@/components/section-heading";
import { logos, proofStats } from "@/lib/data";

export function SocialProofSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Social Proof"
          title="Trusted by teams that care about both aesthetics and results."
          description="A strong visual identity should not just impress. It should make people feel more confident in the business behind it."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="panel rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-secondary)]">Selected Collaborations</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {logos.map((logo) => (
                <div
                  key={logo}
                  className="rounded-[1.25rem] border border-white/[0.08] bg-white/[0.04] px-5 py-6 text-center text-lg font-semibold text-white/[0.86]"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            {proofStats.map((item) => (
              <article key={item.label} className="panel rounded-[1.6rem] p-6">
                <div className="text-4xl font-black text-white">{item.value}</div>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
