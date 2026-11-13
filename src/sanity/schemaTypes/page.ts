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
          { title: "Политика за поверителност", value: "poveritelnost" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL адрес)",
      description: 'За „За нас“ използвайте za-nas, а за политиката — poveritelnost.',
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.custom((value, context) => {
        const pageKey = (context.document as { pageKey?: string } | undefined)?.pageKey;
        if (pageKey === "za-nas" || pageKey === "poveritelnost") {
          return value?.current ? true : "Добавете slug за тази страница.";
        }
        return true;
      }),
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
