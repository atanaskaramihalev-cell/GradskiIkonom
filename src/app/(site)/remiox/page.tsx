import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/PageIntro";
import { PortableTextContent } from "@/components/PortableTextContent";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/home/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  ChatIcon,
  CoinIcon,
  DocumentIcon,
  KeyIcon,
  WrenchIcon,
  CheckIcon,
  AlertIcon,
} from "@/components/icons";
import { client } from "@/sanity/lib/client";
import { pageByKeyQuery } from "@/sanity/lib/queries";
import { getSiteSettings } from "@/sanity/lib/data";
import type { PageContent } from "@/sanity/lib/types";
import { primaryCta } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "REMIOX",
  description:
    "REMIOX — дигиталната платформа зад модерното управление на етажна собственост от Градски Иконом.",
  path: "/remiox",
});

export const revalidate = 60;

const features = [
  {
    title: "Задължения",
    description: "Виждате точно какво дължите и за кой период — без да чакате обаждане.",
    icon: AlertIcon,
  },
  {
    title: "Плащания",
    description: "История на извършените плащания на едно място, по всяко време.",
    icon: CoinIcon,
  },
  {
    title: "Формиране на таксите",
    description: "Ясна разбивка как се формира месечната такса — не просто сума, а логиката зад нея.",
    icon: DocumentIcon,
  },
  {
    title: "Разходи",
    description: "Преглед на извършените разходи по входа — от дребни поправки до по-големи инвестиции.",
    icon: CoinIcon,
  },
  {
    title: "Ремонти",
    description: "Статус на планирани и текущи ремонти, вместо да разпитвате съседи какво се случва.",
    icon: WrenchIcon,
  },
  {
    title: "Съобщения",
    description: "Обявления от домоуправителя достигат директно до вас.",
    icon: ChatIcon,
  },
  {
    title: "Решения",
    description: "Взетите решения от общото събрание — архивирани и достъпни по всяко време.",
    icon: CheckIcon,
  },
  {
    title: "Документи",
    description: "Протоколи, договори и друга документация — вместо да се търсят в папки.",
    icon: KeyIcon,
  },
];

const faqs = [
  {
    question: "Трябва ли да инсталирам приложение?",
    answer:
      "Не е задължително — REMIOX е достъпен през браузър, без инсталация. Ако предпочитате, можете да го ползвате и през мобилен телефон по същия начин.",
  },
  {
    question: "Всеки собственик ли получава достъп?",
    answer:
      "Достъпът се предоставя на входовете, управлявани от Градски Иконом, като част от начина, по който организираме управлението.",
  },
  {
    question: "REMIOX замества ли домоуправителя?",
    answer:
      "Не. REMIOX е инструментът, който прави работата на домоуправителя видима и проследима — хората от Градски Иконом продължават да отговарят за реалното управление на входа.",
  },
];

export default async function RemioxPage() {
  const [page, siteSettings] = await Promise.all([
    client.fetch<PageContent | null>(pageByKeyQuery, { pageKey: "remiox" }),
    getSiteSettings(),
  ]);
  const ctaLabel = siteSettings?.primaryCtaLabel ?? primaryCta.label;
  const ctaHref = siteSettings?.primaryCtaHref ?? primaryCta.href;

  return (
    <>
      <PageIntro
        eyebrow="REMIOX"
        title="REMIOX — дигиталната платформа зад управлението"
        description="REMIOX прави управлението на Градски Иконом видимо и лесно достъпно — вместо да се доверявате на думи, виждате какво точно се случва с вашия вход."
      >
        <div className="mt-10">
          <Button href={ctaHref} variant="primary">
            {ctaLabel}
          </Button>
        </div>
      </PageIntro>

      <Section>
        <SectionHeading eyebrow="Възможности" title="Какво виждате в REMIOX" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-foreground/10 p-6 transition-shadow hover:shadow-sm"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                <feature.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-foreground/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {page?.body ? (
        <Section>
          <PortableTextContent body={page.body} />
        </Section>
      ) : null}

      <Section className="bg-foreground/[0.02]">
        <SectionHeading eyebrow="ЧЗВ" title="Въпроси за REMIOX" />

        <div className="mt-10 max-w-3xl divide-y divide-foreground/10 border-t border-foreground/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-foreground marker:content-none">
                {faq.question}
                <span className="shrink-0 text-xl leading-none text-foreground/40 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-foreground/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Искате ли REMIOX и за вашия вход?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-foreground/70">
          Заявете безплатна консултация и разберете как Градски Иконом може да поеме управлението.
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
