import { type ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "inverted";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "mx-auto text-center" : "text-left";
  const eyebrowColor = tone === "inverted" ? "text-white/70" : "text-accent";
  const titleColor = tone === "inverted" ? "text-white" : "text-foreground";
  const descriptionColor = tone === "inverted" ? "text-white/75" : "text-foreground/70";

  return (
    <div className={`max-w-2xl ${alignClasses}`}>
      {eyebrow ? (
        <p className={`text-sm font-semibold uppercase tracking-wide ${eyebrowColor}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-lg leading-8 ${descriptionColor}`}>{description}</p>
      ) : null}
    </div>
  );
}
