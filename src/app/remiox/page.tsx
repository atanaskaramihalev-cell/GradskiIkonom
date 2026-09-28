import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/PageIntro";
import { ContentPlaceholder } from "@/components/ContentPlaceholder";

export const metadata: Metadata = buildMetadata({
  title: "REMIOX",
  description:
    "REMIOX — дигиталната платформа зад модерното управление на етажна собственост от Градски Иконом.",
  path: "/remiox",
});

export default function RemioxPage() {
  return (
    <PageIntro
      eyebrow="REMIOX"
      title="REMIOX — дигиталната платформа зад управлението"
      description="REMIOX е технологичната платформа, която прави управлението на Градски Иконом видимо и лесно достъпно — самостоятелен продукт, който стои зад модерния подход на компанията."
    >
      <ContentPlaceholder />
    </PageIntro>
  );
}
