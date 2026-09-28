import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/PageIntro";
import { placeholderContact } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Контакти",
  description: "Свържете се с Градски Иконом за безплатна консултация.",
  path: "/kontakti",
});

export default function KontaktiPage() {
  return (
    <PageIntro
      eyebrow="Контакти"
      title="Свържете се с нас"
      description="Заявете безплатна консултация или се свържете директно с нашия екип."
    >
      <dl className="mt-12 grid gap-8 sm:grid-cols-3">
        <div>
          <dt className="text-sm font-semibold text-foreground">Телефон</dt>
          <dd className="mt-2 text-sm text-foreground/60">{placeholderContact.phone}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-foreground">Имейл</dt>
          <dd className="mt-2 text-sm text-foreground/60">{placeholderContact.email}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-foreground">Адрес</dt>
          <dd className="mt-2 text-sm text-foreground/60">{placeholderContact.address}</dd>
        </div>
      </dl>
    </PageIntro>
  );
}
