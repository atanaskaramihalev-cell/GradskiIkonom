import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/PageIntro";
import { Button } from "@/components/ui/Button";
import { StartOffer } from "@/components/StartOffer";
import { additionalServices, basicFeatures, finalPricesNote, packageRates, plusFeatures, promotionMinimumNote } from "@/data/current-offers";

export const metadata: Metadata = buildMetadata({
  title: "Цени",
  description: "Пакети и цени за управление на етажна собственост от Градски Иконом.",
  path: "/tseni",
});

export default function TseniPage() {
  return (
    <PageIntro
      eyebrow="Цени"
      title="Цени за управление на етажна собственост"
      description="Изберете пакет според нуждите на вашия вход. Всички цени са в евро."
    >
      <section aria-labelledby="paketi" className="mt-12">
        <h2 id="paketi" className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">Пакети</h2>
        <div className="mt-6 grid gap-4 sm:hidden">
          {(["basic", "plus"] as const).map((key) => (
            <div key={key} className="rounded-2xl border border-foreground/10 bg-background p-5">
              <h3 className="font-serif text-xl font-semibold">{key === "basic" ? "Основен" : "Плюс"}</h3>
              <dl className="mt-4 space-y-4">
                {packageRates.map((rate) => (
                  <div key={rate.label}>
                    <dt className="text-sm text-foreground/60">{rate.label}</dt>
                    <dd className="mt-1 font-semibold text-foreground">{rate[key]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        <div className="mt-6 hidden overflow-hidden rounded-2xl border border-foreground/10 sm:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-foreground/[0.04] text-foreground">
              <tr><th scope="col" className="p-4">Обект</th><th scope="col" className="p-4">Основен</th><th scope="col" className="p-4">Плюс</th></tr>
            </thead>
            <tbody>
              {packageRates.map((rate) => (
                <tr key={rate.label} className="border-t border-foreground/10">
                  <th scope="row" className="p-4 font-medium">{rate.label}</th>
                  <td className="p-4">{rate.basic}</td><td className="p-4">{rate.plus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-6 text-foreground/70">{promotionMinimumNote}</p>
        <p className="mt-2 text-sm leading-6 text-foreground/70">{finalPricesNote}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-foreground/10 p-6">
            <h3 className="font-serif text-xl font-semibold">Пакет „Основен“ включва</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-foreground/70">
              {basicFeatures.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-accent/30 bg-accent/[0.04] p-6">
            <h3 className="font-serif text-xl font-semibold">Пакет „Плюс“ включва</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-foreground/70">
              {plusFeatures.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-14"><StartOffer /></div>

      <section aria-labelledby="dopalnitelni" className="mt-14">
        <h2 id="dopalnitelni" className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">Допълнителни услуги</h2>
        <p className="mt-3 text-base leading-7 text-foreground/70">Тези услуги не са включени в месечната такса. Плащат се по ценоразпис след одобрение.</p>
        <dl className="mt-6 divide-y divide-foreground/10 rounded-2xl border border-foreground/10 sm:hidden">
          {additionalServices.map((item) => (
            <div key={item.service} className="p-5"><dt className="font-medium">{item.service}</dt><dd className="mt-2 text-sm text-foreground/70">{item.price}</dd></div>
          ))}
        </dl>
        <div className="mt-6 hidden overflow-hidden rounded-2xl border border-foreground/10 sm:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-foreground/[0.04]"><tr><th scope="col" className="w-2/3 p-4">Услуга</th><th scope="col" className="p-4">Цена</th></tr></thead>
            <tbody>{additionalServices.map((item) => (
              <tr key={item.service} className="border-t border-foreground/10"><th scope="row" className="p-4 font-medium">{item.service}</th><td className="p-4">{item.price}</td></tr>
            ))}</tbody>
          </table>
        </div>
      </section>
      <div className="mt-10"><Button href="/kontakti">Свържете се с нас</Button></div>
    </PageIntro>
  );
}
