import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/PageIntro";
import { PortableTextContent } from "@/components/PortableTextContent";
import { EmptyContentCta } from "@/components/EmptyContentCta";
import { client } from "@/sanity/lib/client";
import { pageByKeyQuery } from "@/sanity/lib/queries";
import type { PageContent } from "@/sanity/lib/types";

export const metadata: Metadata = buildMetadata({
  title: "За нас",
  description: "Научете повече за Градски Иконом.",
  path: "/za-nas",
});

export const revalidate = 60;

export default async function ZaNasPage() {
  const page = await client.fetch<PageContent | null>(pageByKeyQuery, { pageKey: "za-nas" });

  return (
    <PageIntro
      eyebrow="За нас"
      title={page?.title || "За нас"}
      description={page?.description || "Научете повече за Градски Иконом."}
    >
      {page?.body?.length ? (
        <div className="mt-10"><PortableTextContent body={page.body} /></div>
      ) : (
        <EmptyContentCta message="За повече информация за нас се свържете с екипа ни." />
      )}
    </PageIntro>
  );
}
