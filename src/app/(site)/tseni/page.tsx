import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/PageIntro";
import { ContentPlaceholder } from "@/components/ContentPlaceholder";

export const metadata: Metadata = buildMetadata({
  title: "Цени",
  description: "Информация за цените на услугите на Градски Иконом.",
  path: "/tseni",
});

export default function TseniPage() {
  return (
    <PageIntro
      eyebrow="Цени"
      title="Прозрачни условия и цени"
      description="Индивидуален подход към всеки вход или комплекс, съобразен с реалните нужди."
    >
      <ContentPlaceholder />
    </PageIntro>
  );
}
