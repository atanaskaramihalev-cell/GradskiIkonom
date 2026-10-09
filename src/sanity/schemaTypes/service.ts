import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Услуга",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заглавие",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Описание",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "icon",
      title: "Икона",
      type: "string",
      options: {
        list: [
          { title: "Отметка", value: "check" },
          { title: "Предупреждение", value: "alert" },
          { title: "Монета / финанси", value: "coin" },
          { title: "Документ", value: "document" },
          { title: "Часовник", value: "clock" },
          { title: "Гаечен ключ", value: "wrench" },
          { title: "Съобщение", value: "chat" },
          { title: "Ключ", value: "key" },
        ],
      },
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
    select: { title: "title", subtitle: "description" },
  },
});
