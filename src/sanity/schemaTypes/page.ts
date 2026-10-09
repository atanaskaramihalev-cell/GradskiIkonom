import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Страница",
  type: "document",
  fields: [
    defineField({
      name: "pageKey",
      title: "Страница",
      description: "Към коя страница от сайта принадлежи това съдържание",
      type: "string",
      options: {
        list: [
          { title: "Как работим", value: "kak-rabotim" },
          { title: "За нас", value: "za-nas" },
          { title: "REMIOX", value: "remiox" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Заглавие",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Кратко описание",
      description: "Използва се под заглавието и за SEO",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "body",
      title: "Съдържание",
      type: "blockContent",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "pageKey" },
  },
});
