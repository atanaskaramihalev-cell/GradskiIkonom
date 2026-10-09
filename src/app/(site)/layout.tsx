import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { siteConfig } from "@/lib/constants";
import { getSiteSettings } from "@/sanity/lib/data";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Професионално управление на етажна собственост`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
};

export const revalidate = 60;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const siteSettings = await getSiteSettings();

  return (
    <html
      lang="bg"
      className={`${inter.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SkipLink />
        <Header siteSettings={siteSettings} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer siteSettings={siteSettings} />
      </body>
    </html>
  );
}
