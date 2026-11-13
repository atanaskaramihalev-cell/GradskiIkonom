import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { primaryNav, siteConfig } from "@/lib/constants";
import { getLegalDetails, publicRegisteredAddress } from "@/lib/legal";
import type { SiteSettings } from "@/sanity/lib/types";

export function Footer({ siteSettings }: { siteSettings?: SiteSettings | null }) {
  const year = new Date().getFullYear();
  const phone = siteSettings?.phone?.trim();
  const email = siteSettings?.email?.trim();
  const address = siteSettings?.address?.trim();
  const legal = getLegalDetails(siteSettings);

  return (
    <footer className="border-t border-foreground/10 bg-foreground/[0.02]">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-serif text-lg font-semibold text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-foreground/70">
            {siteConfig.tagline}
          </p>
        </div>

        <nav aria-label="Навигация във футъра">
          <p className="text-sm font-semibold text-foreground">Навигация</p>
          <ul className="mt-4 space-y-2.5">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-foreground/70 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-foreground">Контакти</p>
          <ul className="mt-4 space-y-2.5 text-sm text-foreground/70">
            {phone ? <li>{phone}</li> : null}
            {email ? <li>{email}</li> : null}
            {address ? <li>{publicRegisteredAddress(address)}</li> : null}
            {!phone && !email && !address ? (
              <li>Данните за контакт все още не са публикувани.</li>
            ) : null}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">REMIOX</p>
          <p className="mt-4 text-sm leading-6 text-foreground/70">
            Дигиталната платформа зад модерното управление на етажна собственост.
          </p>
          <Link
            href="/remiox"
            className="mt-3 inline-block text-sm font-medium text-accent hover:text-accent-dark"
          >
            Научете повече →
          </Link>
        </div>
      </Container>

      <Container className="border-t border-foreground/10 py-6">
        <p className="text-xs text-foreground/50">
          © {year} {siteConfig.name}. Всички права запазени.
        </p>
        <p className="mt-2 text-xs leading-5 text-foreground/50">
          {legal.legalName} · ЕИК {legal.eik} · {publicRegisteredAddress(legal.registeredAddress)} · Управител: {legal.manager}
        </p>
        <Link href="/poveritelnost" className="mt-3 inline-block text-xs text-foreground/70 hover:text-accent">
          Политика за поверителност
        </Link>
      </Container>
    </footer>
  );
}
