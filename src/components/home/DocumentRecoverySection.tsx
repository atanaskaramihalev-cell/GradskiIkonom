import { Section } from "@/components/ui/Section";
import { SectionHeading } from "./SectionHeading";
import { CheckIcon } from "@/components/icons";

const principles = [
  "Не се измислят документи.",
  "Не се създават документи със задна дата.",
  "Старият период и периодът на управление от „Градски Иконом“ се разграничават ясно.",
];

const statuses = [
  {
    label: "Потвърдена",
    dotClassName: "bg-accent",
    description: "Документът е наличен и съдържанието му е установено.",
  },
  {
    label: "Възстановена",
    dotClassName: "bg-amber-500",
    description: "Информацията е събрана и възстановена от наличните източници.",
  },
  {
    label: "Липсваща / непотвърдена",
    dotClassName: "bg-foreground/30",
    description: "Към момента документът липсва или статусът му не може да бъде потвърден.",
  },
];

export function DocumentRecoverySection() {
  return (
    <Section className="bg-foreground/[0.02]">
      <SectionHeading
        eyebrow="Стари документи"
        title="А ако старите документи не са изрядни?"
        description="Работим с това, което реално съществува, при ясни и последователни принципи."
      />

      <ul className="mt-10 space-y-3">
        {principles.map((principle) => (
          <li key={principle} className="flex items-start gap-3 text-sm text-foreground/75 sm:text-base">
            <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-accent" />
            {principle}
          </li>
        ))}
      </ul>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {statuses.map((status) => (
          <div
            key={status.label}
            className="rounded-2xl border border-foreground/10 bg-background p-6"
          >
            <span className="inline-flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${status.dotClassName}`} />
              <span className="text-sm font-semibold text-foreground">{status.label}</span>
            </span>
            <p className="mt-3 text-sm leading-6 text-foreground/60">
              {status.description}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-2xl text-xs text-foreground/45">
        Тази информация е ориентировъчна и не представлява правен съвет. Всеки случай се
        разглежда индивидуално.
      </p>
    </Section>
  );
}
