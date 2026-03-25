import { ContactSection } from "@/sections/contact-section";
import { FaqSection } from "@/sections/faq-section";
import { FinalCtaSection } from "@/sections/final-cta-section";
import { HeroSection } from "@/sections/hero-section";
import { OutcomesSection } from "@/sections/outcomes-section";
import { PortfolioSection } from "@/sections/portfolio-section";
import { ProblemSection } from "@/sections/problem-section";
import { ProcessSection } from "@/sections/process-section";
import { ServicesSection } from "@/sections/services-section";
import { SocialProofSection } from "@/sections/social-proof-section";
import { SolutionSection } from "@/sections/solution-section";
import { TestimonialsSection } from "@/sections/testimonials-section";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <SocialProofSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ProcessSection />
        <OutcomesSection />
        <FaqSection />
        <ContactSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
