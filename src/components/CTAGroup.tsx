import { Button } from "@/components/ui/Button";
import { primaryCta, secondaryCta } from "@/lib/constants";

export function CTAGroup() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Button href={primaryCta.href} variant="primary">
        {primaryCta.label}
      </Button>
      <Button href={secondaryCta.href} variant="secondary">
        {secondaryCta.label}
      </Button>
    </div>
  );
}
