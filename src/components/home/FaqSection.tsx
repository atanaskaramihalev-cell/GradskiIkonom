import { Section } from "@/components/ui/Section";
import { SectionHeading } from "./SectionHeading";
import type { FaqItem } from "@/sanity/lib/types";

export function FaqSection({ items }: { items: FaqItem[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <Section>
      <SectionHeading eyebrow="ЧЗВ" title="Чести въпроси" />

      <div className="mt-10 max-w-3xl divide-y divide-foreground/10 border-t border-foreground/10">
        {items.map((item) => (
          <details key={item._id} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-foreground marker:content-none">
              {item.question}
              <span className="shrink-0 text-xl leading-none text-foreground/40 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-6 text-foreground/70">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
