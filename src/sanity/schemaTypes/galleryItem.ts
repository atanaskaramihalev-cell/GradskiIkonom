import { defineField, defineType } from "sanity";

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Галерия — снимка",
  type: "document",
  fields: [
    defineField({
      name: "type",
      title: "Тип",
      type: "string",
      options: {
        list: [
          { title: "Двойка Преди / Сега", value: "beforeAfter" },
          { title: "Единична снимка", value: "single" },
        ],
        layout: "radio",
      },
      initialValue: "single",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Заглавие / надпис",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Кратко описание",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "image",
      title: "Снимка",
      type: "image",
      options: { hotspot: true },
      hidden: ({ document }) => document?.type !== "single",
      validation: (rule) =>
        rule.custom((value, context) => {
          if (context.document?.type === "single" && !value) {
            return "Задължително за единична снимка";
          }
          return true;
        }),
    }),
    defineField({
      name: "beforeImage",
      title: "Снимка „Преди“",
      type: "image",
      options: { hotspot: true },
      hidden: ({ document }) => document?.type !== "beforeAfter",
      validation: (rule) =>
        rule.custom((value, context) => {
          if (context.document?.type === "beforeAfter" && !value) {
            return "Задължително за двойка преди/сега";
          }
          return true;
        }),
    }),
    defineField({
      name: "afterImage",
      title: "Снимка „Сега“",
      type: "image",
      options: { hotspot: true },
      hidden: ({ document }) => document?.type !== "beforeAfter",
      validation: (rule) =>
        rule.custom((value, context) => {
          if (context.document?.type === "beforeAfter" && !value) {
            return "Задължително за двойка преди/сега";
          }
          return true;
        }),
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
    select: { title: "title", type: "type", media: "image" },
    prepare({ title, type, media }) {
      return {
        title: title || (type === "beforeAfter" ? "Преди / Сега" : "Снимка"),
        subtitle: type === "beforeAfter" ? "Преди / Сега" : "Единична снимка",
        media,
      };
    },
  },
});
