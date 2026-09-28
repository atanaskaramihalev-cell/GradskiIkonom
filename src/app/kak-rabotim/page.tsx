import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/PageIntro";
import { ContentPlaceholder } from "@/components/ContentPlaceholder";

export const metadata: Metadata = buildMetadata({
  title: "Как работим",
  description:
    "Процесът на Градски Иконом за прозрачно и модерно управление на етажна собственост.",
  path: "/kak-rabotim",
});

export default function KakRabotimPage() {
  return (
    <PageIntro
      eyebrow="Как работим"
      title="Нашият процес на работа"
      description="Ясни и прозрачни стъпки — от първоначалния разговор до ежедневното управление на входа."
    >
      <ContentPlaceholder />
    </PageIntro>
  );
}
