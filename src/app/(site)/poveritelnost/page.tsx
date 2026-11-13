import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/PageIntro";
import { PortableTextContent } from "@/components/PortableTextContent";
import { client } from "@/sanity/lib/client";
import { pageByKeyQuery } from "@/sanity/lib/queries";
import type { PageContent } from "@/sanity/lib/types";

export const metadata: Metadata = buildMetadata({
  title: "Политика за поверителност",
  description: "Политика за поверителност на Градски Иконом.",
  path: "/poveritelnost",
});

export const revalidate = 60;

export default async function PoveritelnostPage() {
  const page = await client.fetch<PageContent | null>(pageByKeyQuery, { pageKey: "poveritelnost" });

  return (
    <PageIntro
      eyebrow="Поверителност"
      title={page?.title || "Политика за поверителност"}
      description={page?.description || "Информация за обработването на лични данни."}
    >
      {page?.body?.length ? (
        <div className="mt-10"><PortableTextContent body={page.body} /></div>
      ) : (
        <p className="mt-10 text-base leading-7 text-foreground/70">
          Политиката за поверителност се подготвя.
        </p>
      )}
    </PageIntro>
  );
}
