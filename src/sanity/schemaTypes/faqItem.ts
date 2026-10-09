import { defineField, defineType } from "sanity";

export const faqItem = defineType({
  name: "faqItem",
  title: "Въпрос (ЧЗВ)",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Въпрос",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Отговор",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required(),
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
    select: { title: "question" },
  },
});
