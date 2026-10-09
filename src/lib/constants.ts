export const siteConfig = {
  name: "Градски Иконом",
  tagline: "Професионално управление на етажната собственост. Ясно, прозрачно и модерно.",
  url: "https://www.gradski-ikonom.bg",
  locale: "bg_BG",
} as const;

export const placeholderContact = {
  phone: "[телефон предстои]",
  email: "[имейл предстои]",
  address: "[адрес предстои]",
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
