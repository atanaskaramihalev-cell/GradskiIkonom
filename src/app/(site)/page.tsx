import { Hero } from "@/components/home/Hero";
import { TrustBadgesSection } from "@/components/home/TrustBadgesSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { RemioxSection } from "@/components/home/RemioxSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { DocumentRecoverySection } from "@/components/home/DocumentRecoverySection";
import { WhoItsForSection } from "@/components/home/WhoItsForSection";
import { ValueSection } from "@/components/home/ValueSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { OrganizationJsonLd } from "@/components/home/OrganizationJsonLd";
import { client } from "@/sanity/lib/client";
import { testimonialsQuery, faqItemsQuery } from "@/sanity/lib/queries";
import { getSiteSettings } from "@/sanity/lib/data";
import type { Testimonial, FaqItem } from "@/sanity/lib/types";

export const revalidate = 60;

export default async function HomePage() {
  const [testimonials, faqItems, siteSettings] = await Promise.all([
    client.fetch<Testimonial[]>(testimonialsQuery),
    client.fetch<FaqItem[]>(faqItemsQuery),
    getSiteSettings(),
  ]);

  return (
    <>
      <OrganizationJsonLd siteSettings={siteSettings} />
      <Hero siteSettings={siteSettings} />
      <TrustBadgesSection badges={siteSettings?.trustBadges ?? []} />
      <ProblemSection />
      <ServicesSection />
      <RemioxSection />
      <ProcessSection />
      <DocumentRecoverySection />
      <WhoItsForSection />
      <ValueSection />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection items={faqItems} />
      <FinalCtaSection siteSettings={siteSettings} />
    </>
  );
}
