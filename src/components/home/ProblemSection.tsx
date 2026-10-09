import { Section } from "@/components/ui/Section";
import { SectionHeading } from "./SectionHeading";
import { AlertIcon } from "@/components/icons";

const problems = [
  {
    title: "Неплатени такси",
    description: "Просрочените задължения се натрупват без ясен процес за проследяване.",
  },
  {
    title: "Липсващи документи",
    description: "Протоколи, договори и решения се губят или не се съхраняват никъде.",
  },
  {
    title: "Неясни разходи",
    description: "Собствениците не виждат за какво точно отиват събраните средства.",
  },
  {
    title: "Ремонти без организация",
    description: "Дейностите по поддръжка се решават на момента, без план и приоритети.",
  },
  {
    title: "Лоша комуникация",
    description: "Важна информация стига до собствениците късно или изобщо не стига.",
  },
  {
    title: "Липса на отчетност",
    description: "Никой не може да каже с точност какво е свършено и какво предстои.",
  },
];

export function ProblemSection() {
  return (
    <Section className="bg-foreground/[0.02]">
      <SectionHeading
        eyebrow="Проблемът"
        title="Управлението на входа не трябва да бъде втора работа."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem) => (
          <div
            key={problem.title}
            className="rounded-2xl border border-foreground/10 bg-background p-6 transition-shadow hover:shadow-sm"
          >
            <AlertIcon className="h-6 w-6 text-accent-dark/70" />
            <h3 className="mt-4 text-base font-semibold text-foreground">
              {problem.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-foreground/60">
              {problem.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
