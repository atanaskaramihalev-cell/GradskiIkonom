import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/PageIntro";
import { ContentPlaceholder } from "@/components/ContentPlaceholder";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { client } from "@/sanity/lib/client";
import { galleryItemsQuery } from "@/sanity/lib/queries";
import type { GalleryItem } from "@/sanity/lib/types";

export const metadata: Metadata = buildMetadata({
  title: "Галерия",
  description: "Снимки преди и след намесата на Градски Иконом по нашите обекти.",
  path: "/galeriya",
});

export const revalidate = 60;

export default async function GalleryPage() {
  const items = await client.fetch<GalleryItem[]>(galleryItemsQuery);

  return (
    <PageIntro
      eyebrow="Галерия"
      title="Преди и след"
      description="Реални резултати от работата ни по входовете, които управляваме."
    >
      {items.length > 0 ? <GalleryGrid items={items} /> : <ContentPlaceholder />}
    </PageIntro>
  );
}
