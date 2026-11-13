import { siteConfig } from "@/lib/constants";
import { getLegalDetails } from "@/lib/legal";
import type { SiteSettings } from "@/sanity/lib/types";

export function OrganizationJsonLd({
  siteSettings,
}: {
  siteSettings?: SiteSettings | null;
}) {
  const legal = getLegalDetails(siteSettings);
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: legal.legalName,
    taxID: legal.eik,
    address: {
      "@type": "PostalAddress",
      streetAddress: legal.registeredAddress,
      addressCountry: "BG",
    },
    url: siteConfig.url,
    description: siteConfig.tagline,
    ...(siteSettings?.phone ? { telephone: siteSettings.phone } : {}),
    ...(siteSettings?.email ? { email: siteSettings.email } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
