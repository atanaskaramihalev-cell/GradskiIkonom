import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/PageIntro";
import { ContentPlaceholder } from "@/components/ContentPlaceholder";

export const metadata: Metadata = buildMetadata({
  title: "За нас",
  description: "Мисията и подходът на Градски Иконом към управлението на етажна собственост.",
  path: "/za-nas",
});

export default function ZaNasPage() {
  return (
    <PageIntro
      eyebrow="За нас"
      title="Кой стои зад Градски Иконом"
      description="Екип, посветен на професионалното, прозрачно и модерно управление на етажна собственост."
    >
      <ContentPlaceholder />
    </PageIntro>
  );
}
