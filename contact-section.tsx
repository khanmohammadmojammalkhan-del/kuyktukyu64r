"use client";

import { useState } from "react";

import { CtaButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";

const initialState = {
  name: "",
  email: "",
  message: ""
};

export function ContactSection() {
  const [formData, setFormData] = useState(initialState);

  const mailtoHref = `mailto:hello@faisalszone.design?subject=${encodeURIComponent(
    `Project inquiry from ${formData.name || "a potential client"}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject details:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="section-space">
      <div className="container-shell panel rounded-[2rem] p-8 md:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Contact"
            title="Share the project, timeline, and goals. Faisal will reply quickly."
            description="Use the form to prepare your inquiry, then send it through your email client with one click. This keeps the site lightweight while still making outreach easy."
          />

          <form className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-white">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                placeholder="Your name"
                className="rounded-2xl border border-white/[0.1] bg-[rgba(255,255,255,0.04)] px-4 py-3.5 text-white outline-none transition placeholder:text-white/[0.35] focus:border-[var(--color-secondary)]"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium text-white">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                placeholder="you@company.com"
                className="rounded-2xl border border-white/[0.1] bg-[rgba(255,255,255,0.04)] px-4 py-3.5 text-white outline-none transition placeholder:text-white/[0.35] focus:border-[var(--color-secondary)]"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium text-white">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                placeholder="Tell me what you need help with, what is not working, and your timeline."
                rows={6}
                className="rounded-2xl border border-white/[0.1] bg-[rgba(255,255,255,0.04)] px-4 py-3.5 text-white outline-none transition placeholder:text-white/[0.35] focus:border-[var(--color-secondary)]"
              />
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton href={mailtoHref} className="sm:min-w-44">
                Send Inquiry
              </CtaButton>
              <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                Prefer direct email? Reach out at <a href="mailto:hello@faisalszone.design" className="text-white">hello@faisalszone.design</a>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
