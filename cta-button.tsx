import Link from "next/link";

import { cn } from "@/lib/utils";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className
}: CtaButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300",
    variant === "primary"
      ? "bg-[var(--color-secondary)] text-[#11150d] shadow-[0_16px_40px_rgba(174,183,132,0.22)] hover:-translate-y-0.5 hover:bg-[#c5cea0]"
      : "border border-[var(--color-border)] bg-white/[0.04] text-white hover:border-[var(--color-secondary)] hover:bg-white/[0.08]",
    className
  );

  if (href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
