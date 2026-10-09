import { defineType, defineArrayMember } from "sanity";

export const blockContent = defineType({
  name: "blockContent",
  title: "Съдържание",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Нормален текст", value: "normal" },
        { title: "Заглавие 2", value: "h2" },
        { title: "Заглавие 3", value: "h3" },
        { title: "Цитат", value: "blockquote" },
      ],
      lists: [
        { title: "Списък с точки", value: "bullet" },
        { title: "Номериран списък", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Удебелен", value: "strong" },
          { title: "Курсив", value: "em" },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
