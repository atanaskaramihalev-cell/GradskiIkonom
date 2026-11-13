import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/PageIntro";
import { PortableTextContent } from "@/components/PortableTextContent";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/home/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/icons";
import { PriceCalculator } from "@/components/PriceCalculator";
import { client } from "@/sanity/lib/client";
import { pageByKeyQuery, pricingPackagesQuery } from "@/sanity/lib/queries";
import { getSiteSettings } from "@/sanity/lib/data";
import type { PageContent, PricingPackage } from "@/sanity/lib/types";
import { primaryCta } from "@/lib/constants";
import { pricing } from "@/lib/business";

export const metadata: Metadata = buildMetadata({
  title: "Цени",
  description:
    "Една ясна цена на самостоятелен обект на месец. Без „от“ и без оглед, за да я научите.",
  path: "/tseni",
});

export const revalidate = 60;

const includedFeatures = [
  "Професионален домоуправител",
  "Касиер и банкови плащания",
  "Книга на ЕС и отчетност",
  "Работа с просрочени задължения",
  "Годишно и до 2 извънредни общи събрания",
  "Седмичен оглед на общите части",
  "Денонощна аварийна линия",
  "Достъп до REMIOX за всеки собственик",
];

const paymentPoints = [
  "Таксата се плаща веднъж месечно от банковата сметка на етажната собственост срещу фактура.",
  "Не се плаща от фонд „Ремонт и обновяване“.",
  "Цената се променя най-много веднъж годишно, с 30 дни предизвестие и само след одобрение от общото събрание.",
  "Договорът може да се прекрати с едномесечно писмено предизвестие. Няма дълго обвързване.",
];

export default async function TseniPage() {
  const [page, siteSettings, packages] = await Promise.all([
    client.fetch<PageContent | null>(pageByKeyQuery, { pageKey: "tseni" }),
    getSiteSettings(),
    client.fetch<PricingPackage[] | null>(pricingPackagesQuery),
  ]);
  const ctaLabel = siteSettings?.primaryCtaLabel ?? primaryCta.label;
  const ctaHref = siteSettings?.primaryCtaHref ?? primaryCta.href;
  const cmsPackages = packages ?? [];

  return (
    <>
      <PageIntro
        eyebrow="Цени"
        title="Една ясна цена. Без „от“ и без оглед, за да я научите."
        description="Плащате на самостоятелен обект на месец. Сумата за целия вход се смята веднага и не се променя след оглед."
      />

      <Section>
        {cmsPackages.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cmsPackages.map((pkg) => (
              <div
                key={pkg._id}
                className={`rounded-2xl border p-6 ${
                  pkg.highlighted
                    ? "border-accent"
                    : "border-foreground/10"
                }`}
              >
                <h2 className="text-lg font-semibold text-foreground">{pkg.name}</h2>
                <p className="mt-3 font-serif text-3xl font-semibold text-accent">
                  {pkg.price}
                </p>
                {pkg.unit ? (
                  <p className="mt-1 text-sm text-foreground/60">{pkg.unit}</p>
                ) : null}
                {pkg.features && pkg.features.length > 0 ? (
                  <ul className="mt-6 space-y-3">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-foreground/75"
                      >
                        <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-2xl rounded-2xl border-2 border-accent p-8 sm:p-10">
            <h2 className="text-lg font-semibold text-foreground">Управление и касиер</h2>
            <p className="mt-4 font-serif text-4xl font-semibold tracking-tight text-accent">
              {pricing.perUnitLabel}
            </p>
            <p className="mt-1 text-sm text-foreground/60">{pricing.unitLabel}</p>
            <p className="mt-4 text-base leading-7 text-foreground/70">{pricing.note}</p>
            <p className="mt-8 text-sm font-semibold text-foreground">Включва</p>
            <ul className="mt-4 space-y-3">
              {includedFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-foreground/75"
                >
                  <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={ctaHref} variant="primary">
                {ctaLabel}
              </Button>
            </div>
          </div>
        )}
      </Section>

      <Section className="bg-foreground/[0.02]">
        <SectionHeading eyebrow="Калкулатор" title="Колко прави това за вашия вход" />
        <PriceCalculator />
      </Section>

      <Section>
        <SectionHeading title="Как се плаща" />
        <ul className="mt-10 max-w-2xl space-y-4">
          {paymentPoints.map((point) => (
            <li key={point} className="flex items-start gap-3 text-base text-foreground/75">
              <CheckIcon className="mt-1 h-5 w-5 flex-none text-accent" />
              {point}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-foreground/[0.02]">
        <SectionHeading title="Защо не по-евтино, защо не по-скъпо" />
        <p className="mt-8 max-w-2xl text-base leading-7 text-foreground/70">
          Цената покрива реален човек, който познава входа ви, седмичен оглед и пълна
          прозрачност през REMIOX. Не продаваме евтин софтуер и не таксуваме марката на
          голяма верига. Плащате за свършена работа, която виждате.
        </p>
      </Section>

      {page?.body ? (
        <Section>
          <PortableTextContent body={page.body} />
        </Section>
      ) : null}

      <Section className="text-center">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Ще направим точна сметка за вашия вход
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-foreground/70">
          Без оглед, без ангажимент. Достатъчен е броят на апартаментите.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href={ctaHref} variant="primary">
            {ctaLabel}
          </Button>
        </div>
      </Section>
    </>
  );
}
