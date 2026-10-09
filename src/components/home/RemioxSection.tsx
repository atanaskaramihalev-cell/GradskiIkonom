import { Section } from "@/components/ui/Section";
import { SectionHeading } from "./SectionHeading";
import { CheckIcon } from "@/components/icons";

const categories = [
  "Задължения",
  "Плащания",
  "Формиране на таксите",
  "Разходи",
  "Ремонти",
  "Съобщения",
  "Решения",
  "Документи",
];

const breakdownItems = [
  { label: "Такса асансьор" },
  { label: "Фонд „Ремонт и обновяване“" },
  { label: "Текуща такса управление" },
];

export function RemioxSection() {
  return (
    <Section className="bg-foreground text-white">
      <SectionHeading
        eyebrow="REMIOX"
        title="Повече прозрачност с REMIOX"
        description="Всеки управляван от Градски Иконом вход може да получи дигитален достъп до информация за своето управление — на едно място, по всяко време."
        tone="inverted"
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-serif text-2xl leading-snug text-white/50 sm:text-3xl">
            Не просто: „Колко дължа?“
          </p>
          <p className="mt-2 font-serif text-2xl font-semibold leading-snug text-white sm:text-3xl">
            А: „За какво плащам?“
          </p>

          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4">
            {categories.map((category) => (
              <li key={category} className="flex items-start gap-2.5 text-sm text-white/80">
                <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-white/50" />
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
            Пример за разбивка на таксата
          </p>
          <p className="mt-2 text-lg font-medium text-white">3 ползватели над 7 години</p>

          <dl className="mt-6 divide-y divide-white/10 border-t border-white/10">
            {breakdownItems.map((item) => (
              <div key={item.label} className="flex items-center justify-between py-3.5">
                <dt className="text-sm text-white/80">{item.label}</dt>
                <dd className="text-sm text-white/40">включено</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-xs text-white/40">
            Това е демонстрационен пример, не реална сметка.
          </p>
        </div>
      </div>
    </Section>
  );
}
