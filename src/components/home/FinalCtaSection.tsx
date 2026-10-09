import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { placeholderContact, primaryCta } from "@/lib/constants";
import type { SiteSettings } from "@/sanity/lib/types";

export function FinalCtaSection({ siteSettings }: { siteSettings?: SiteSettings | null }) {
  const ctaLabel = siteSettings?.primaryCtaLabel ?? primaryCta.label;
  const ctaHref = siteSettings?.primaryCtaHref ?? primaryCta.href;
  const phone = siteSettings?.phone ?? placeholderContact.phone;
  const email = siteSettings?.email ?? placeholderContact.email;

  return (
    <Section className="text-center">
      <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Искате ли да видим какво може да се подобри във вашия вход?
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-foreground/70">
        Първият разговор не ви обвързва с договор.
      </p>

      <div className="mt-10 flex justify-center">
        <Button href={ctaHref} variant="primary">
          {ctaLabel}
        </Button>
      </div>

      <p className="mt-6 text-sm text-foreground/50">
        {phone} · {email}
      </p>
    </Section>
  );
}
