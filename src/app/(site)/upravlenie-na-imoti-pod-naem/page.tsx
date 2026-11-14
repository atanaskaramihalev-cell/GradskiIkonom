import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/PageIntro";
import { Button } from "@/components/ui/Button";
import { finalPricesNote } from "@/data/current-offers";

export const metadata: Metadata = buildMetadata({
  title: "Управление на имоти под наем",
  description: "Управление на имоти за дългосрочен и краткосрочен наем в София и по Бургаското крайбрежие.",
  path: "/upravlenie-na-imoti-pod-naem",
});

const rentalServices = [
  { service: "Дългосрочен наем — управление", price: "12% от месечния наем", included: "Управление на наема" },
  { service: "Търсене на наемател", price: "30% от първия наем от наемодателя + 50% от първия наем от наемателя, еднократно", included: "Снимки на имота и реклама в сайтовете за имоти" },
  { service: "Почистване преди наемане", price: "По оферта след оглед на състоянието", included: "Според нуждата" },
  { service: "Майстори за освежаване или ремонт", price: "По оферта, според нуждата", included: "Организиране и контрол на работата" },
  { service: "Краткосрочен наем", price: "25% от приходите от нощувки", included: "Почистване след всеки гост; смяна на спално бельо на всеки 7 нощувки" },
  { service: "Допълнителна смяна на спално бельо", price: "Отделна такса", included: "По заявка на собственика" },
];

const vipServices = [
  "Посрещане на летището — Бургас или София (подарък, включен в цената, предварително уговорен със собственика)",
  "Лично настаняване и запознаване с имота",
  "Зареждане на бара и хладилника с предварително уговорени продукти",
  "Домашно приготвена храна",
  "Всичко друго по заявка",
];

export default function RentalManagementPage() {
  return (
    <PageIntro
      eyebrow="Имоти под наем"
      title="Управление на имоти под наем"
      description="Управляваме имоти за дългосрочен и краткосрочен наем — апартаменти и ваканционни имоти (вили на морето и в планината). Работим в София и по Бургаското крайбрежие от Слънчев бряг до Царево."
    >
      <section aria-labelledby="naem-uslugi" className="mt-12">
        <h2 id="naem-uslugi" className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">Услуги и цени</h2>
        <div className="mt-6 grid gap-4 md:hidden">
          {rentalServices.map((item) => (
            <article key={item.service} className="rounded-2xl border border-foreground/10 p-5">
              <h3 className="font-serif text-lg font-semibold">{item.service}</h3>
              <dl className="mt-4 space-y-3 text-sm"><div><dt className="text-foreground/60">Цена</dt><dd className="mt-1 font-medium">{item.price}</dd></div><div><dt className="text-foreground/60">Включено</dt><dd className="mt-1 text-foreground/75">{item.included}</dd></div></dl>
            </article>
          ))}
        </div>
        <div className="mt-6 hidden overflow-hidden rounded-2xl border border-foreground/10 md:block">
          <table className="w-full border-collapse text-left text-sm leading-6">
            <thead className="bg-foreground/[0.04]"><tr><th scope="col" className="w-1/4 p-4">Услуга</th><th scope="col" className="w-2/5 p-4">Цена</th><th scope="col" className="p-4">Включено</th></tr></thead>
            <tbody>{rentalServices.map((item) => (
              <tr key={item.service} className="border-t border-foreground/10 align-top"><th scope="row" className="p-4 font-medium">{item.service}</th><td className="p-4">{item.price}</td><td className="p-4">{item.included}</td></tr>
            ))}</tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-6 text-foreground/70">{finalPricesNote}</p>
      </section>

      <section aria-labelledby="vip-uslugi" className="mt-14 rounded-2xl border border-accent/20 bg-accent/[0.04] p-6 sm:p-8">
        <h2 id="vip-uslugi" className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">VIP услуги за вашите гости</h2>
        <p className="mt-3 text-base leading-7 text-foreground/70">За гостите можем да организираме всичко, от което имат нужда.</p>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-6 text-foreground/75 sm:text-base">
          {vipServices.map((service) => <li key={service}>{service}</li>)}
        </ul>
        <p className="mt-6 text-sm font-medium text-foreground/70">Само по предварителна заявка и с предварително плащане.</p>
        <div className="mt-8"><Button href="/kontakti">Поръчайте VIP услуга</Button></div>
      </section>
    </PageIntro>
  );
}
