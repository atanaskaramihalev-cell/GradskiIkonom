import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/PageIntro";
import { PortableTextContent } from "@/components/PortableTextContent";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/home/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  CheckIcon,
  ClockIcon,
  CoinIcon,
  DocumentIcon,
  KeyIcon,
  WrenchIcon,
} from "@/components/icons";
import { client } from "@/sanity/lib/client";
import { pageByKeyQuery } from "@/sanity/lib/queries";
import { getSiteSettings } from "@/sanity/lib/data";
import type { PageContent } from "@/sanity/lib/types";
import { primaryCta } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Услуги",
  description:
    "Домоуправител, касиер и организатор в едно. Вие решавате на общото събрание, ние изпълняваме и отчитаме всичко.",
  path: "/uslugi",
});

export const revalidate = 60;

const includedServices = [
  {
    title: "Професионален домоуправител",
    description:
      "Представляваме етажната собственост и следим за спазването на правилника и решенията на общото събрание.",
    icon: KeyIcon,
  },
  {
    title: "Касиер и вноски",
    description:
      "Събираме вноските за управление и поддръжка и за фонд „Ремонт и обновяване“ по банков път или през REMIOX.",
    icon: CoinIcon,
  },
  {
    title: "Плащане на общите сметки",
    description:
      "Ток, вода, асансьор и почистване се плащат навреме от сметката на етажната собственост.",
    icon: CoinIcon,
  },
  {
    title: "Книга и отчетност",
    description:
      "Водим книгата на етажната собственост и отчетността според ЗУЕС. Всеки собственик вижда своя баланс.",
    icon: DocumentIcon,
  },
  {
    title: "Просрочени задължения",
    description:
      "Изпращаме напомняния, правим справки за неплатени вноски и следваме ясен процес, вместо неудобни разговори на стълбището.",
    icon: ClockIcon,
  },
  {
    title: "Общи събрания",
    description:
      "Свикваме, подготвяме и водим годишното общо събрание и до две извънредни годишно. Изготвяме протоколите.",
    icon: DocumentIcon,
  },
  {
    title: "Седмичен оглед",
    description:
      "Веднъж седмично обхождаме общите части и отбелязваме всичко в REMIOX: осветление, асансьор, врати, мазета.",
    icon: CheckIcon,
  },
  {
    title: "Фирми и ремонти",
    description:
      "Поръчваме и контролираме фирмите за поддръжка. Събираме оферти, представяме ги на събранието и приемаме ремонтите на място.",
    icon: WrenchIcon,
  },
  {
    title: "Годишен отчет и бюджет",
    description:
      "В края на годината получавате отчет за дейността и предложение за бюджет за следващата.",
    icon: DocumentIcon,
  },
];

const incidents = [
  {
    title: "Авариен",
    examples: "Теч, наводнение, повреда в таблото, блокиран асансьор с хора.",
    deadline:
      "Реакция до 2 часа: аварийната служба се уведомява и се вземат мерки за ограничаване на щетите. Аварийната линия работи денонощно.",
  },
  {
    title: "Спешен",
    examples: "Неработещ асансьор, повредена входна врата, тъмен етаж.",
    deadline: "Реакция до 24 часа в работни дни.",
  },
  {
    title: "Обичаен",
    examples: "Изгоряла лампа, дребен ремонт, справка.",
    deadline: "До 5 работни дни, обикновено при следващия седмичен оглед.",
  },
];

const extraServices = [
  "Почистване, охрана, озеленяване и снегопочистване (организираме ги, но се заплащат на изпълнителя)",
  "Допълнителни посещения по искане на собственик",
  "Извънредни общи събрания над включените две",
  "Организация и надзор на големи ремонти",
  "Документи за съдебно събиране на вземания",
];

export default async function UslugiPage() {
  const [page, siteSettings] = await Promise.all([
    client.fetch<PageContent | null>(pageByKeyQuery, { pageKey: "uslugi" }),
    getSiteSettings(),
  ]);
  const ctaLabel = siteSettings?.primaryCtaLabel ?? primaryCta.label;
  const ctaHref = siteSettings?.primaryCtaHref ?? primaryCta.href;

  return (
    <>
      <PageIntro
        eyebrow="Услуги"
        title="Какво поемаме, за да не го носите вие"
        description="Домоуправител, касиер и организатор в едно. Вие решавате на общото събрание, ние изпълняваме и отчитаме всичко."
      />

      <Section>
        <SectionHeading eyebrow="Включено" title="Включено в месечната такса" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {includedServices.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-foreground/10 p-6 transition-shadow hover:shadow-sm"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                <service.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-foreground/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-foreground/[0.02]">
        <SectionHeading
          eyebrow="Сигнали"
          title="Кой отговаря, когато нещо се счупи"
          description="Сигналите се подават през REMIOX или по телефона. Всеки сигнал има категория и срок."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {incidents.map((incident) => (
            <div
              key={incident.title}
              className="rounded-2xl border border-foreground/10 bg-background p-6"
            >
              <h3 className="text-base font-semibold text-foreground">{incident.title}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/60">{incident.examples}</p>
              <p className="mt-4 text-sm leading-6 text-foreground/70">{incident.deadline}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Срещу допълнително заплащане" />

        <ul className="mt-10 max-w-2xl space-y-4">
          {extraServices.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base text-foreground/75">
              <CheckIcon className="mt-1 h-5 w-5 flex-none text-accent" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-sm leading-6 text-foreground/60">
          Всяка допълнителна услуга се извършва само след писмено потвърждение от
          представителя на входа. Аварийните посещения не се заплащат допълнително.
        </p>
      </Section>

      {page?.body ? (
        <Section>
          <PortableTextContent body={page.body} />
        </Section>
      ) : null}

      <Section className="text-center">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Искате да видите какво би включвало за вашия вход?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-foreground/70">
          Първият разговор е безплатен и не ви обвързва.
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
