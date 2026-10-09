import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/PageIntro";
import { ContentPlaceholder } from "@/components/ContentPlaceholder";

export const metadata: Metadata = buildMetadata({
  title: "Услуги",
  description:
    "Услугите на Градски Иконом за професионално управление на етажна собственост.",
  path: "/uslugi",
});

export default function UslugiPage() {
  return (
    <PageIntro
      eyebrow="Услуги"
      title="Услуги за управление на етажна собственост"
      description="Пълен обхват от услуги за администриране, поддръжка и прозрачно управление на входове и комплекси."
    >
      <ContentPlaceholder />
    </PageIntro>
  );
}
