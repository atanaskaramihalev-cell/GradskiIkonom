export const siteConfig = {
  name: "Градски Иконом",
  tagline: "Професионално управление на етажната собственост. Ясно, прозрачно и модерно.",
  url: "https://gradskiikonom.com",
  locale: "bg_BG",
} as const;

export const legalDefaults = {
  legalName: "„Градски Иконом“ ЕООД",
  eik: "208989397",
  registeredAddress: "гр. София, ул. „Хемус“, бл. 61, вх. Б, ет. 12, ап. 118",
  manager: "Атанас Карамихалев",
  vatRegistered: false,
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Начало", href: "/" },
  { label: "Услуги", href: "/uslugi" },
  { label: "Как работим", href: "/kak-rabotim" },
  { label: "Галерия", href: "/galeriya" },
  { label: "Цени", href: "/tseni" },
  { label: "REMIOX", href: "/remiox" },
  { label: "За нас", href: "/za-nas" },
  { label: "Контакти", href: "/kontakti" },
];

export const primaryCta = {
  label: "Безплатна консултация",
  href: "/kontakti",
};

export const secondaryCta = {
  label: "Вижте как работим",
  href: "/kak-rabotim",
};
