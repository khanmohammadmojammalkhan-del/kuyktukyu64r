import { SectionHeading } from "@/components/section-heading";
import { outcomes } from "@/lib/data";

export function OutcomesSection() {
  return (
    <section className="section-space">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeading
          eyebrow="Benefits"
          title="The outcome is not just a prettier interface. It is a stronger business impression."
          description="When design, messaging, and structure work together, prospects trust faster and decision-making gets easier."
        />
        <div className="grid gap-4">
          {outcomes.map((item) => (
            <div key={item} className="panel rounded-[1.5rem] px-6 py-5 text-base leading-7 text-[var(--color-text-muted)]">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
