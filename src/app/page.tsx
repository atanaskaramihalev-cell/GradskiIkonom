import { Section } from "@/components/ui/Section";
import { CTAGroup } from "@/components/CTAGroup";
import { siteConfig } from "@/lib/constants";

export default function HomePage() {
  return (
    <Section className="py-24 sm:py-28 lg:py-36">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          {siteConfig.name}
        </p>
        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Професионално управление на етажната собственост
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground/70">
          {siteConfig.tagline}
        </p>
        <div className="mt-10">
          <CTAGroup />
        </div>
      </div>
    </Section>
  );
}
