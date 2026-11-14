import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/PageIntro";
import { Button } from "@/components/ui/Button";
import { basicFeatures, plusFeatures } from "@/data/current-offers";
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
      <section className="mt-12" aria-labelledby="upravlenie-vhod">
        <h2 id="upravlenie-vhod" className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">Управление на етажна собственост</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-foreground/70">Два пакета според нуждите на входа — „Основен“ и „Плюс“.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-foreground/10 p-6">
            <h3 className="font-serif text-xl font-semibold">Основен</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-foreground/70">
              {basicFeatures.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.04] p-6">
            <h3 className="font-serif text-xl font-semibold">Плюс</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-foreground/70">
              {plusFeatures.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/tseni">Вижте цените</Button>
          <Button href="/upravlenie-na-imoti-pod-naem" variant="secondary">Управление на имоти под наем</Button>
        </div>
      </section>
      {services.length > 0 ? (
        <section className="mt-14" aria-labelledby="oshte-uslugi">
          <h2 id="oshte-uslugi" className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">Още за услугите</h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service._id} className="rounded-2xl border border-foreground/10 p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">{service.title}</h3>
                {service.description ? (
                  <p className="mt-3 text-sm leading-6 text-foreground/70">{service.description}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </PageIntro>
  );
}
