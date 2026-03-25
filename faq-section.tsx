"use client";

import { useState } from "react";

import { SectionHeading } from "@/components/section-heading";
import { faqItems } from "@/lib/data";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Quick answers for clients comparing designers or planning their next launch."
          description="A few of the most common questions answered clearly so the next step feels easy."
        />
        <div className="mt-10 grid gap-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={item.question} className="panel overflow-hidden rounded-[1.5rem]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-white">{item.question}</span>
                  <span className="text-2xl leading-none text-[var(--color-secondary)]">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen ? (
                  <div className="border-t border-white/[0.08] px-6 py-5 text-sm leading-7 text-[var(--color-text-muted)]">
                    {item.answer}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
