import { Section } from "@/components/ui/Section";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    title: "Запознаване със сградата",
    description: "Разглеждаме входа, броя апартаменти и специфичните му особености.",
  },
  {
    title: "Преглед на текущото управление",
    description: "Оценяваме наличната документация, финанси и организация до момента.",
  },
  {
    title: "Предложение",
    description: "Изготвяме конкретно предложение, съобразено със ситуацията на входа.",
  },
  {
    title: "Предаване на управлението",
    description: "Организираме структуриран преход от предишното управление.",
  },
  {
    title: "Дигитализиране чрез REMIOX",
    description: "Входът получава достъп до дигиталната платформа REMIOX.",
  },
];

export function ProcessSection() {
  return (
    <Section>
      <SectionHeading eyebrow="Процес" title="Как започваме" />

      <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {steps.map((step, index) => (
          <li key={step.title} className="flex flex-col">
            <span className="font-serif text-2xl font-semibold text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-base font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-foreground/60">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
