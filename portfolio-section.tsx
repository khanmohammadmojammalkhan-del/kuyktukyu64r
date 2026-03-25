import Image from "next/image";

import { ArrowUpRightIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { portfolioItems } from "@/lib/data";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Featured Work"
          title="Case studies that combine polished visuals with conversion thinking."
          description="A curated snapshot of interfaces, brand systems, and landing experiences designed to communicate value quickly."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {portfolioItems.map((item) => (
            <article key={item.title} className="panel group rounded-[2rem] p-4 md:p-5">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/[0.08]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={760}
                  height={540}
                  className="h-auto w-full transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="px-2 pb-2 pt-6">
                <div className="flex flex-wrap items-center gap-3">
                  {item.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.22em] text-[var(--color-secondary)]"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">{item.description}</p>
                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)] transition group-hover:gap-3"
                >
                  {item.cta}
                  <ArrowUpRightIcon className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
