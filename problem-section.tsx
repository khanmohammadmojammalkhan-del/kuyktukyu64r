import { SectionHeading } from "@/components/section-heading";
import { painPoints } from "@/lib/data";

export function ProblemSection() {
  return (
    <section className="section-space">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeading
          eyebrow="The Problem"
          title="Good businesses lose trust when the design experience feels weak."
          description="Most brands do not have a product or service issue. They have a communication and experience issue that quietly reduces conversions."
        />
        <div className="grid gap-5">
          {painPoints.map((item, index) => (
            <article key={item} className="panel rounded-[1.7rem] p-6">
              <div className="text-sm uppercase tracking-[0.25em] text-[var(--color-secondary)]">0{index + 1}</div>
              <p className="mt-4 text-lg leading-8 text-[var(--color-text-muted)]">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
