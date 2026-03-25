type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="section-kicker">{eyebrow}</span>
      <h2 className="mt-5 text-4xl font-black tracking-tight text-balance text-white md:text-5xl">
        {title}
      </h2>
      <p className="eyebrow-copy mt-5">{description}</p>
    </div>
  );
}
