import type { Metadata } from "next";
import { Bungee, Inter } from "next/font/google";
import "@/styles/globals.css";

const headingFont = Bungee({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400"
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://faisalszone.design"),
  title: "Faisal's Zone | UI/UX & Graphic Designer Portfolio",
  description:
    "Faisal's Zone helps brands turn weak user experiences into polished, high-converting digital products through UI/UX design, graphic design, branding, and web design.",
  openGraph: {
    title: "Faisal's Zone | UI/UX & Graphic Designer Portfolio",
    description:
      "A conversion-focused portfolio for UI/UX and graphic design services built to turn visitors into project inquiries.",
    type: "website",
    url: "https://faisalszone.design",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Faisal's Zone portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Faisal's Zone | UI/UX & Graphic Designer Portfolio",
    description:
      "Modern UI/UX and graphic designer portfolio focused on stronger brands, smoother UX, and more client conversions.",
    images: ["/og-image.svg"]
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${headingFont.variable} ${bodyFont.variable} bg-[var(--color-bg)] text-[var(--color-text)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
