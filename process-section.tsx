import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section id="process" className="section-space">
      <div className="container-shell panel rounded-[2rem] p-8 md:p-10 lg:p-14">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple design process built for momentum, clarity, and strong outcomes."
          description="Every step is structured to reduce guesswork, keep feedback cycles focused, and move from strategy to delivery without losing quality."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {processSteps.map((item, index) => (
            <article key={item.title} className="rounded-[1.7rem] border border-white/[0.08] bg-white/[0.04] p-6">
              <div className="text-sm uppercase tracking-[0.24em] text-[var(--color-secondary)]">Step 0{index + 1}</div>
              <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
