import { Section } from "@/components/ui/Section";

const highlights = [
  "Ясни правила",
  "Отчетност",
  "Документация",
  "Комуникация",
  "Проследими решения",
  "Контрол на разходите",
];

export function ValueSection() {
  return (
    <Section className="text-center">
      <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        По-малко хаос. Повече яснота.
      </h2>

      <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium text-foreground/75"
          >
            {highlight}
          </li>
        ))}
      </ul>
    </Section>
  );
}
