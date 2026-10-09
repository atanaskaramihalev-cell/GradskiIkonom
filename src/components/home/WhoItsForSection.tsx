import { Section } from "@/components/ui/Section";
import { SectionHeading } from "./SectionHeading";
import { CheckIcon } from "@/components/icons";

const audiences = [
  "Жилищни входове",
  "Големи жилищни сгради",
  "Сгради с проблемно събиране на такси",
  "Ново строителство",
  "Етажни собствености, търсещи повече прозрачност",
];

export function WhoItsForSection() {
  return (
    <Section>
      <SectionHeading eyebrow="За кого е" title="Подходящо за" />

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {audiences.map((audience) => (
          <li
            key={audience}
            className="flex items-start gap-3 rounded-xl border border-foreground/10 px-5 py-4 text-sm text-foreground/80 sm:text-base"
          >
            <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-accent" />
            {audience}
          </li>
        ))}
      </ul>
    </Section>
  );
}
