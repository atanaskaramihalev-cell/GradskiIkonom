import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/PageIntro";
import { EmptyContentCta } from "@/components/EmptyContentCta";
import { client } from "@/sanity/lib/client";
import { servicesQuery } from "@/sanity/lib/queries";
import type { Service } from "@/sanity/lib/types";

export const metadata: Metadata = buildMetadata({
  title: "Услуги",
  description: "Услугите на Градски Иконом за професионално управление на етажна собственост.",
  path: "/uslugi",
});

export const revalidate = 60;

export default async function UslugiPage() {
  const services = await client.fetch<Service[]>(servicesQuery);

  return (
    <PageIntro
      eyebrow="Услуги"
      title="Услуги за управление на етажна собственост"
      description="Разгледайте услугите, които предлагаме за вашата сграда."
    >
      {services.length > 0 ? (
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service._id} className="rounded-2xl border border-foreground/10 p-6">
              <h2 className="font-serif text-xl font-semibold text-foreground">{service.title}</h2>
              {service.description ? (
                <p className="mt-3 text-sm leading-6 text-foreground/70">{service.description}</p>
              ) : null}
            </li>
          ))}
        </ul>
      ) : (
        <EmptyContentCta message="За информация за услугите ни се свържете с нас." />
      )}
    </PageIntro>
  );
}
