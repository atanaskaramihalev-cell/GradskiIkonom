import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">
        Грешка 404
      </p>
      <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground">
        Страницата не е намерена
      </h1>
      <p className="mx-auto mt-6 max-w-md text-lg leading-8 text-foreground/70">
        Съдържанието, което търсите, не съществува или е било преместено.
      </p>
      <div className="mt-10 flex justify-center">
        <Button href="/" variant="primary">
          Обратно към началото
        </Button>
      </div>
    </Section>
  );
}
