export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
] as const;

export const serviceItems = [
  {
    title: "UI/UX Design",
    description: "Craft frictionless product flows that guide users naturally from interest to action.",
    benefit: "Increase clarity, retention, and conversions."
  },
  {
    title: "Graphic Design",
    description: "Design polished assets for campaigns, presentations, and social touchpoints that feel premium.",
    benefit: "Strengthen trust and perceived brand value."
  },
  {
    title: "Branding",
    description: "Shape memorable identities with consistent visuals, tone, and positioning that stand out.",
    benefit: "Create a brand people recognize and remember."
  },
  {
    title: "Web Design",
    description: "Turn strategy into high-performing page layouts built around storytelling and lead generation.",
    benefit: "Launch websites that feel modern and sell clearly."
  }
] as const;

export const painPoints = [
  "Visitors leave because the user journey feels confusing or outdated.",
  "Great offers underperform because visuals do not communicate value fast enough.",
  "Brand assets feel inconsistent, making the business look less credible than it is."
] as const;

export const solutions = [
  "I combine strategy, interface design, and brand storytelling so every page has a clear purpose.",
  "I design with conversion in mind, using hierarchy, trust signals, and focused calls to action.",
  "I deliver polished systems that look premium, feel intuitive, and help businesses win better clients."
] as const;

export const proofStats = [
  { value: "48+", label: "projects delivered across web, product, and visual identity" },
  { value: "96%", label: "client satisfaction from collaborative design partnerships" },
  { value: "72h", label: "average turnaround for first polished concept directions" },
  { value: "11", label: "ongoing brand retainers supported with design systems and assets" }
] as const;

export const logos = ["Northpeak", "LumaGrid", "Aster Labs", "Mintlane", "Crestline", "NovaLoop"] as const;

export const portfolioItems = [
  {
    title: "SaaS Dashboard Redesign",
    description: "A data-heavy platform rebuilt for clarity, trust, and faster trial-to-demo conversions.",
    cta: "View Case Study",
    image: "/portfolio/saas-dashboard.svg",
    metrics: ["+38% demo requests", "Sharper product hierarchy"]
  },
  {
    title: "Lifestyle Brand Identity",
    description: "A premium visual system with packaging, social templates, and a refined launch campaign.",
    cta: "View Case Study",
    image: "/portfolio/lifestyle-brand.svg",
    metrics: ["Consistent rollout assets", "Memorable premium positioning"]
  },
  {
    title: "Creative Agency Landing Page",
    description: "A conversion-focused web experience with stronger messaging and more persuasive social proof.",
    cta: "View Case Study",
    image: "/portfolio/agency-landing.svg",
    metrics: ["Lower bounce rate", "Stronger lead quality"]
  },
  {
    title: "Mobile Commerce UX",
    description: "A mobile-first shopping flow designed to reduce drop-off and improve checkout confidence.",
    cta: "View Case Study",
    image: "/portfolio/mobile-commerce.svg",
    metrics: ["Simplified checkout", "Improved purchase intent"]
  }
] as const;

export const testimonials = [
  {
    name: "Maya Rahman",
    role: "Founder, Northpeak Studio",
    quote:
      "Faisal transformed a scattered brand presence into a refined system that instantly made us look more credible. Clients started mentioning the site quality on sales calls.",
    result: "Helped improve qualified inbound leads within the first month."
  },
  {
    name: "Jared Lin",
    role: "Product Lead, LumaGrid",
    quote:
      "The redesign made complex workflows feel effortless. Faisal balanced product thinking with crisp visual execution better than most specialists we have hired.",
    result: "Boosted sign-up completion and reduced support questions."
  },
  {
    name: "Sadia Khan",
    role: "Marketing Manager, Aster Labs",
    quote:
      "We needed design that could sell, not just look nice. The landing pages, campaign graphics, and brand direction all felt intentionally conversion-driven.",
    result: "Created a stronger launch campaign with faster creative approvals."
  }
] as const;

export const processSteps = [
  {
    title: "Discovery",
    description: "Clarify goals, audience, offer, and friction points so the design solves the right problem."
  },
  {
    title: "Direction",
    description: "Develop visual concepts, messaging hierarchy, and structural decisions that shape the experience."
  },
  {
    title: "Design",
    description: "Turn strategy into polished interfaces, brand assets, and responsive layouts with conversion intent."
  },
  {
    title: "Delivery",
    description: "Ship organized files, guidance, and implementation-ready assets so momentum continues after handoff."
  }
] as const;

export const outcomes = [
  "A more premium first impression that builds confidence quickly.",
  "Clearer messaging and page structure that guides users toward action.",
  "Consistent branding across product, web, and marketing materials.",
  "Faster design workflows with reusable systems and organized assets.",
  "A partner who thinks beyond visuals and designs for business outcomes."
] as const;

export const faqItems = [
  {
    question: "What kinds of clients do you work with?",
    answer: "I work with startups, creative businesses, and growing brands that need sharper UX, branding, or conversion-focused web design."
  },
  {
    question: "Do you handle both product design and brand visuals?",
    answer: "Yes. Many projects combine interface design, landing pages, campaign graphics, and identity systems so the brand feels consistent everywhere."
  },
  {
    question: "How quickly can a project start?",
    answer: "Most projects can begin within one to two weeks depending on scope. Limited availability helps keep feedback cycles fast and focused."
  },
  {
    question: "What do you need from me to get started?",
    answer: "A quick project brief, your goals, target audience, any brand references, and access to existing assets are usually enough to begin."
  }
] as const;

export const socialLinks = [
  { label: "Behance", href: "https://www.behance.net/" },
  { label: "Dribbble", href: "https://dribbble.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" }
] as const;
