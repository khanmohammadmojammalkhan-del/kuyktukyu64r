import { ChartIcon, LayersIcon, PenToolIcon, SparkIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { serviceItems } from "@/lib/data";

const icons = [SparkIcon, PenToolIcon, LayersIcon, ChartIcon];

export function ServicesSection() {
  return (
    <section id="services" className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Services"
          title="Everything needed to make your brand look sharper and perform better."
          description="Each service is designed to solve a real business problem, not just add another visual layer."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceItems.map((item, index) => {
            const Icon = icons[index];

            return (
              <article key={item.title} className="panel rounded-[1.8rem] p-7 transition duration-300 hover:-translate-y-1">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/[0.08] bg-[rgba(174,183,132,0.12)] text-[var(--color-secondary)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{item.description}</p>
                <p className="mt-5 text-sm font-medium text-[var(--color-secondary)]">{item.benefit}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
