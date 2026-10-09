import { defineField, defineType } from "sanity";

export const pricingPackage = defineType({
  name: "pricingPackage",
  title: "Ценови пакет",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Име на пакета",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Цена",
      description: 'Напр. "0.80 лв" или "по договаряне"',
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "unit",
      title: "Мерна единица",
      description: 'Напр. "на апартамент / месец"',
      type: "string",
    }),
    defineField({
      name: "features",
      title: "Включва",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "highlighted",
      title: "Препоръчан пакет",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Ред на показване",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Ред на показване",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "price" },
  },
});
