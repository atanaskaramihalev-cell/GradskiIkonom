import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/PageIntro";
import { Button } from "@/components/ui/Button";
import { EmptyContentCta } from "@/components/EmptyContentCta";
import { client } from "@/sanity/lib/client";
import { pricingPackagesQuery } from "@/sanity/lib/queries";
import type { PricingPackage } from "@/sanity/lib/types";

export const metadata: Metadata = buildMetadata({
  title: "Цени",
  description: "Информация за цените на услугите на Градски Иконом.",
  path: "/tseni",
});

export const revalidate = 60;

export default async function TseniPage() {
  const packages = await client.fetch<PricingPackage[]>(pricingPackagesQuery);

  return (
    <PageIntro
      eyebrow="Цени"
      title="Цени"
      description="Разгледайте ценовите пакети и се свържете с нас за подробности."
    >
      {packages.length > 0 ? (
        <>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((item) => (
              <li
                key={item._id}
                className={`rounded-2xl border p-6 ${item.highlighted ? "border-accent bg-accent/[0.04] shadow-sm" : "border-foreground/10"}`}
              >
                {item.highlighted ? (
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent">Препоръчан пакет</span>
                ) : null}
                <h2 className="mt-2 font-serif text-xl font-semibold text-foreground">{item.name}</h2>
                <p className="mt-5 text-2xl font-semibold text-foreground">
                  {item.price?.trim() || "Цена по запитване"}
                </p>
                {item.unit ? <p className="mt-1 text-sm text-foreground/60">{item.unit}</p> : null}
                {item.features?.length ? (
                  <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-6 text-foreground/70">
                    {item.features.map((feature, index) => <li key={`${index}-${feature}`}>{feature}</li>)}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="/kontakti">Свържете се с нас</Button>
          </div>
        </>
      ) : (
        <EmptyContentCta message="За информация за цените се свържете с нас." />
      )}
    </PageIntro>
  );
}
