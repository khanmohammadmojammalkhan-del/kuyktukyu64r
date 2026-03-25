import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Clients remember the polish, but they stay for the results."
          description="Placeholder testimonials written to feel credible, outcome-oriented, and aligned with the positioning of a premium design partner."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="panel rounded-[1.8rem] p-7">
              <p className="text-lg leading-8 text-[var(--color-text-muted)]">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-8 border-t border-white/[0.08] pt-5">
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                <p className="mt-1 text-sm text-[var(--color-secondary)]">{item.role}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{item.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
