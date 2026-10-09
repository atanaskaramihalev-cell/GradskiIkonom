import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Настройки на сайта",
  type: "document",
  fields: [
    defineField({
      name: "phone",
      title: "Телефон",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Имейл",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Адрес",
      type: "string",
    }),
    defineField({
      name: "workingHours",
      title: "Работно време",
      type: "string",
    }),
    defineField({
      name: "primaryCtaLabel",
      title: "Основен бутон — текст",
      type: "string",
      initialValue: "Безплатна консултация",
    }),
    defineField({
      name: "primaryCtaHref",
      title: "Основен бутон — линк",
      type: "string",
      initialValue: "/kontakti",
    }),
    defineField({
      name: "secondaryCtaLabel",
      title: "Втори бутон — текст",
      type: "string",
      initialValue: "Вижте как работим",
    }),
    defineField({
      name: "secondaryCtaHref",
      title: "Втори бутон — линк",
      type: "string",
      initialValue: "/kak-rabotim",
    }),
    defineField({
      name: "trustBadges",
      title: "Числа за доверие",
      description:
        'Кратки статистики за началната страница, напр. "8" / "години опит". Оставете празно, за да не се показва секцията.',
      type: "array",
      of: [
        {
          type: "object",
          name: "trustBadge",
          fields: [
            defineField({ name: "value", title: "Стойност", type: "string" }),
            defineField({ name: "label", title: "Надпис", type: "string" }),
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        },
      ],
      validation: (rule) => rule.max(4),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Настройки на сайта" };
    },
  },
});
