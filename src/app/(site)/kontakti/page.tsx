import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/PageIntro";
import { getLegalDetails } from "@/lib/legal";
import { getSiteSettings } from "@/sanity/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Контакти",
  description: "Свържете се с Градски Иконом за безплатна консултация.",
  path: "/kontakti",
});

export const revalidate = 60;

export default async function KontaktiPage() {
  const siteSettings = await getSiteSettings();
  const phone = siteSettings?.phone?.trim();
  const email = siteSettings?.email?.trim();
  const address = siteSettings?.address?.trim();
  const legal = getLegalDetails(siteSettings);

  return (
    <PageIntro
      eyebrow="Контакти"
      title="Свържете се с нас"
      description="Заявете безплатна консултация или се свържете директно с нашия екип."
    >
      <dl className="mt-12 grid gap-8 sm:grid-cols-3">
        {phone ? (
          <div>
            <dt className="text-sm font-semibold text-foreground">Телефон</dt>
            <dd className="mt-2 text-sm text-foreground/60">{phone}</dd>
          </div>
        ) : null}
        {email ? (
          <div>
            <dt className="text-sm font-semibold text-foreground">Имейл</dt>
            <dd className="mt-2 text-sm text-foreground/60">{email}</dd>
          </div>
        ) : null}
        {address ? (
          <div>
            <dt className="text-sm font-semibold text-foreground">Адрес</dt>
            <dd className="mt-2 text-sm text-foreground/60">{address}</dd>
          </div>
        ) : null}
        {siteSettings?.workingHours ? (
          <div>
            <dt className="text-sm font-semibold text-foreground">Работно време</dt>
            <dd className="mt-2 text-sm text-foreground/60">{siteSettings.workingHours}</dd>
          </div>
        ) : null}
      </dl>
      {!phone && !email && !address ? (
        <p className="mt-8 text-sm text-foreground/60">
          Данните за контакт все още не са публикувани.
        </p>
      ) : null}

      <section className="mt-14 border-t border-foreground/10 pt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Фирмени данни</h2>
        <dl className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-semibold">Фирма</dt>
            <dd className="mt-2 text-sm text-foreground/70">{legal.legalName}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold">ЕИК</dt>
            <dd className="mt-2 text-sm text-foreground/70">{legal.eik}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold">Седалище и адрес на управление</dt>
            <dd className="mt-2 text-sm text-foreground/70">{legal.registeredAddress}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold">Управител</dt>
            <dd className="mt-2 text-sm text-foreground/70">{legal.manager}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold">Регистрация по ЗДДС</dt>
            <dd className="mt-2 text-sm text-foreground/70">
              {legal.vatRegistered ? "Регистрирана" : "Не е регистрирана"}
            </dd>
          </div>
        </dl>
      </section>
    </PageIntro>
  );
}
