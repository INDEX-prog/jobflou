import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JobFlou - Crafting the perfect job descriptions for every candidate",
  description:
    "Generate job descriptions with just the right level of detail to attract top talent without scaring them away. Perfect for HR managers at tech startups.",
  keywords: [
    "job descriptions",
    "HR tools",
    "recruitment",
    "tech startups",
    "hiring",
  ],
  openGraph: {
    title: "JobFlou - Smart Job Descriptions for Tech Startups",
    description:
      "Generate job descriptions with adjustable clarity levels. 14-day free trial.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
