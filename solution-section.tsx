import { SectionHeading } from "@/components/section-heading";
import { solutions } from "@/lib/data";

export function SolutionSection() {
  return (
    <section className="section-space">
      <div className="container-shell panel rounded-[2rem] p-8 md:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="The Solution"
            title="Design decisions rooted in clarity, credibility, and business results."
            description="Faisal's Zone helps brands move from inconsistent visuals and friction-heavy experiences to polished systems that feel intentional and trustworthy."
          />
          <div className="grid gap-5">
            {solutions.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.04] p-6">
                <p className="text-lg leading-8 text-[var(--color-text-muted)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
