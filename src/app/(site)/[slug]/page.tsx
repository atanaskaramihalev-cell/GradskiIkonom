import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { getLandingPage, landingPages } from "@/data/landing-pages";
import { PageIntro } from "@/components/PageIntro";
import { ContentPlaceholder } from "@/components/ContentPlaceholder";

export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);

  if (!page) {
    return {};
  }

  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.slug}`,
  });
}

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getLandingPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <PageIntro eyebrow="Градски Иконом" title={page.title} description={page.description}>
      <ContentPlaceholder />
    </PageIntro>
  );
}
