import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/PageIntro";
import { PortableTextContent } from "@/components/PortableTextContent";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/home/SectionHeading";
import { Button } from "@/components/ui/Button";
import { client } from "@/sanity/lib/client";
import { pageByKeyQuery } from "@/sanity/lib/queries";
import { getSiteSettings } from "@/sanity/lib/data";
import type { PageContent } from "@/sanity/lib/types";
import { primaryCta } from "@/lib/constants";
import { companyInfo } from "@/lib/business";

export const metadata: Metadata = buildMetadata({
  title: "За нас",
  description:
    "Градски Иконом е създаден от човек, който години наред е бил касиер на етажната собственост, в която живее.",
  path: "/za-nas",
});

export const revalidate = 60;

const beliefs = [
  {
    title: "Прозрачност по подразбиране",
    description: "Собствениците виждат приходите, разходите и своя баланс, без да питат.",
  },
  {
    title: "Един човек, който познава входа",
    description:
      "Не сте номер в списък от стотици сгради. Знаем кой живее на кой етаж и какво се е случило миналия месец.",
  },
  {
    title: "Без документи със задна дата",
    description:
      "Работим с това, което реално съществува, и разграничаваме ясно стария период от нашия.",
  },
  {
    title: "Без дълго обвързване",
    description:
      "Едномесечно предизвестие. Оставате, защото работи, а не защото договорът ви държи.",
  },
];

const companyRows = [
  { label: "Фирма", value: companyInfo.legalName },
  { label: "ЕИК", value: companyInfo.eik },
  { label: "№ в регистъра на МРРБ", value: companyInfo.mrrbNumber },
  { label: "Адрес", value: companyInfo.address },
  { label: "Управител", value: companyInfo.manager },
].filter((row) => row.value);

export default async function ZaNasPage() {
  const [page, siteSettings] = await Promise.all([
    client.fetch<PageContent | null>(pageByKeyQuery, { pageKey: "za-nas" }),
    getSiteSettings(),
  ]);
  const ctaLabel = siteSettings?.primaryCtaLabel ?? primaryCta.label;
  const ctaHref = siteSettings?.primaryCtaHref ?? primaryCta.href;

  return (
    <>
      <PageIntro
        eyebrow="За нас"
        title="Започнахме от собствения си вход"
        description="Градски Иконом е създаден от човек, който години наред е бил касиер на етажната собственост, в която живее. Знаем отвътре какво не работи."
      />

      <Section>
        <SectionHeading title="Историята" />
        <div className="mt-8 max-w-2xl space-y-4 text-base leading-7 text-foreground/70">
          <p>
            Години наред водехме касата на собствения си вход в София: 62 апартамента на 16
            етажа. Видяхме всичко, което прави управлението на входа втора работа: тетрадки
            със сметки, изгубени протоколи, неудобни разговори за неплатени такси и ремонти,
            които се решават на стълбището.
          </p>
          <p>
            Затова създадохме REMIOX, собствена система, в която всеки собственик вижда
            таксите, плащанията и разходите на входа. А около нея изградихме Градски Иконом:
            професионално управление, при което всяко решение и всяко евро са проследими.
          </p>
          <p>
            Първо тестваме всичко в собствения си вход. Предлагаме на други само това, което
            вече работи при нас.
          </p>
        </div>
      </Section>

      <Section className="bg-foreground/[0.02]">
        <SectionHeading title="В какво вярваме" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {beliefs.map((belief) => (
            <div
              key={belief.title}
              className="rounded-2xl border border-foreground/10 bg-background p-6"
            >
              <h3 className="text-base font-semibold text-foreground">{belief.title}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/60">{belief.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Нашата технология е наша" />
        <p className="mt-8 max-w-2xl text-base leading-7 text-foreground/70">
          REMIOX е разработена от нас, специално за управлението на етажна собственост в
          България. Развиваме я според реалните нужди на входовете, които управляваме.
        </p>
        <div className="mt-8">
          <Button href="/remiox" variant="secondary">
            Вижте REMIOX
          </Button>
        </div>
      </Section>

      {companyInfo.eik ? (
        <Section className="bg-foreground/[0.02]">
          <SectionHeading title="Фирмени данни" />
          <dl className="mt-8 max-w-2xl space-y-4">
            {companyRows.map((row) => (
              <div key={row.label}>
                <dt className="text-sm font-semibold text-foreground">{row.label}</dt>
                <dd className="mt-1 text-sm text-foreground/60">{row.value}</dd>
              </div>
            ))}
          </dl>
        </Section>
      ) : null}

      {page?.body ? (
        <Section>
          <PortableTextContent body={page.body} />
        </Section>
      ) : null}

      <Section className="text-center">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Нека се запознаем
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-foreground/70">
          Разкажете ни за вашия вход. Първият разговор е безплатен.
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
