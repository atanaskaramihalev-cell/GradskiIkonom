import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CTAGroup } from "@/components/CTAGroup";
import type { SiteSettings } from "@/sanity/lib/types";

export function Hero({ siteSettings }: { siteSettings?: SiteSettings | null }) {
  return (
    <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-background py-20 sm:min-h-[72vh] sm:py-24 lg:min-h-[80vh] lg:max-h-[880px] lg:py-0">
      <Image
        src="/images/hero-gradski-ikonom.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_center] sm:object-[76%_center] lg:object-right"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/15 sm:via-background/70 sm:to-transparent lg:via-background/55 lg:to-transparent"
      />

      <Container className="relative">
        <div className="max-w-xl lg:max-w-2xl">
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Професионално управление на етажната собственост. Ясно, прозрачно и
            модерно.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/70">
            Градски Иконом поема ежедневната организация, финансите, документите и
            комуникацията във вашата сграда, така че собствениците да имат повече
            яснота и по-малко проблеми.
          </p>
          <div className="mt-10">
            <CTAGroup siteSettings={siteSettings} />
          </div>
        </div>
      </Container>
    </section>
  );
}
