import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/PageIntro";
import { PortableTextContent } from "@/components/PortableTextContent";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/home/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/icons";
import { client } from "@/sanity/lib/client";
import { pageByKeyQuery } from "@/sanity/lib/queries";
import { getSiteSettings } from "@/sanity/lib/data";
import type { PageContent } from "@/sanity/lib/types";
import { primaryCta } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Как работим",
  description:
    "Процесът на Градски Иконом за прозрачно и модерно управление на етажна собственост — стъпка по стъпка.",
  path: "/kak-rabotim",
});

export const revalidate = 60;

const steps = [
  {
    title: "Запознаване със сградата",
    description:
      "Разглеждаме входа на място — брой апартаменти, общи части, текущо състояние и специфичните му особености. Това ни дава реална представа, вместо да предполагаме.",
  },
  {
    title: "Преглед на текущото управление",
    description:
      "Оценяваме наличната документация, финансовото състояние и досегашната организация — независимо дали входът е имал домоуправител, или досега се е управлявал неформално.",
  },
  {
    title: "Предложение",
    description:
      "Изготвяме конкретно предложение, съобразено със ситуацията на входа — не универсален пакет, а план, който отговаря на реалното състояние и нужди.",
  },
  {
    title: "Предаване на управлението",
    description:
      "Организираме структуриран преход от предишното управление — приемане на налична документация и каса, и ясно разграничение между стария и новия период.",
  },
  {
    title: "Дигитализиране чрез REMIOX",
    description:
      "Входът получава достъп до REMIOX — дигиталната платформа, през която собствениците виждат такси, плащания, разходи и решения на едно място.",
  },
];

const switchingPoints = [
  "Прегледаме внимателно наличната документация и финансова история, преди да поемем входа.",
  "Комуникираме структурирано с досегашния домоуправител или фирма за предаване на документи и каса.",
  "Разграничаваме ясно стария период от периода на управление от Градски Иконом — не се създават документи със задна дата.",
  "Собствениците се уведомяват на всяка стъпка от прехода, за да няма изненади.",
];

export default async function KakRabotimPage() {
  const [page, siteSettings] = await Promise.all([
    client.fetch<PageContent | null>(pageByKeyQuery, { pageKey: "kak-rabotim" }),
    getSiteSettings(),
  ]);
  const ctaLabel = siteSettings?.primaryCtaLabel ?? primaryCta.label;
  const ctaHref = siteSettings?.primaryCtaHref ?? primaryCta.href;

  return (
    <>
      <PageIntro
        eyebrow="Как работим"
        title="Нашият процес на работа"
        description="Ясни и прозрачни стъпки — от първоначалния разговор до ежедневното управление на входа."
      >
        <div className="mt-10">
          <Button href={ctaHref} variant="primary">
            {ctaLabel}
          </Button>
        </div>
      </PageIntro>

      <Section>
        <SectionHeading eyebrow="Процес" title="Стъпка по стъпка" />

        <ol className="mt-12 space-y-10">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-6">
              <span className="font-serif text-3xl font-semibold text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 max-w-2xl text-base leading-7 text-foreground/70">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-foreground/[0.02]">
        <SectionHeading
          eyebrow="Смяна на домоуправител"
          title="Преминавате от друг домоуправител?"
          description="Прехвърлянето на управлението е една от най-честите причини за колебание. Ето как го правим последователно и без прекъсване."
        />

        <ul className="mt-10 max-w-2xl space-y-4">
          {switchingPoints.map((point) => (
            <li key={point} className="flex items-start gap-3 text-base text-foreground/75">
              <CheckIcon className="mt-1 h-5 w-5 flex-none text-accent" />
              {point}
            </li>
          ))}
        </ul>
      </Section>

      {page?.body ? (
        <Section>
          <PortableTextContent body={page.body} />
        </Section>
      ) : null}

      <Section className="text-center">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Готови ли сте да направим първата стъпка?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-foreground/70">
          Първият разговор е безплатен и не ви обвързва с договор.
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
