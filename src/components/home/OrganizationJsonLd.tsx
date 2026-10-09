import { siteConfig } from "@/lib/constants";
import type { SiteSettings } from "@/sanity/lib/types";

export function OrganizationJsonLd({
  siteSettings,
}: {
  siteSettings?: SiteSettings | null;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.tagline,
    ...(siteSettings?.phone ? { telephone: siteSettings.phone } : {}),
    ...(siteSettings?.email ? { email: siteSettings.email } : {}),
    ...(siteSettings?.address ? { address: siteSettings.address } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
