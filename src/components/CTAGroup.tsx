import { Button } from "@/components/ui/Button";
import { primaryCta, secondaryCta } from "@/lib/constants";
import type { SiteSettings } from "@/sanity/lib/types";

export function CTAGroup({ siteSettings }: { siteSettings?: SiteSettings | null }) {
  const primaryLabel = siteSettings?.primaryCtaLabel ?? primaryCta.label;
  const primaryHref = siteSettings?.primaryCtaHref ?? primaryCta.href;
  const secondaryLabel = siteSettings?.secondaryCtaLabel ?? secondaryCta.label;
  const secondaryHref = siteSettings?.secondaryCtaHref ?? secondaryCta.href;

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Button href={primaryHref} variant="primary">
        {primaryLabel}
      </Button>
      <Button href={secondaryHref} variant="secondary">
        {secondaryLabel}
      </Button>
    </div>
  );
}
