import { Section } from "@/components/ui/Section";
import { SectionHeading } from "./SectionHeading";
import {
  ChatIcon,
  ClockIcon,
  CoinIcon,
  DocumentIcon,
  KeyIcon,
  WrenchIcon,
} from "@/components/icons";

const services = [
  {
    title: "Професионален домоуправител",
    description:
      "Представлява входа ежедневно и следи за спазването на правилата и решенията на собствениците.",
    icon: KeyIcon,
  },
  {
    title: "Финансово управление",
    description:
      "Прозрачно събиране и разходване на средствата, с ясна структура на таксите.",
    icon: CoinIcon,
  },
  {
    title: "Документи и общи събрания",
    description:
      "Организиране на общи събрания, протоколи и подредена документация на входа.",
    icon: DocumentIcon,
  },
  {
    title: "Работа с просрочени задължения",
    description:
      "Последователен процес за проследяване и решаване на неплатени такси.",
    icon: ClockIcon,
  },
  {
    title: "Ремонти и поддръжка",
    description:
      "Планиране и координация на ремонти, вместо разпокъсани еднократни решения.",
    icon: WrenchIcon,
  },
  {
    title: "Комуникация със собствениците",
    description:
      "Единен и ясен канал за въпроси, съобщения и решения, достъпен за всички.",
    icon: ChatIcon,
  },
];

export function ServicesSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Услуги"
        title="Всичко, от което се нуждае вашият вход"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
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
  );
}
