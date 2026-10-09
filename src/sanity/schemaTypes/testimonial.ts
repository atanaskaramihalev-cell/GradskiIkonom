import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Отзив",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Име",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Сграда / квартал",
      description: 'Напр. "Председател на етажната собственост, ж.к. Гео Милев"',
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "Цитат",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Оценка (1-5)",
      type: "number",
      validation: (rule) => rule.min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: "photo",
      title: "Снимка (по желание)",
      type: "image",
      options: { hotspot: true },
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
    select: { title: "name", subtitle: "role" },
  },
});
