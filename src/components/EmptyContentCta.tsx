import { Button } from "@/components/ui/Button";

export function EmptyContentCta({ message }: { message: string }) {
  return (
    <div className="mt-12">
      <p className="max-w-2xl text-base leading-7 text-foreground/70">{message}</p>
      <Button href="/kontakti" className="mt-6">
        Свържете се с нас
      </Button>
    </div>
  );
}
