import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Съдържание")
    .items([
      S.listItem()
        .title("Настройки на сайта")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
      S.divider(),
      S.documentTypeListItem("service").title("Услуги"),
      S.documentTypeListItem("pricingPackage").title("Ценови пакети"),
      S.documentTypeListItem("page").title("Страници"),
      S.documentTypeListItem("galleryItem").title("Галерия"),
      S.documentTypeListItem("testimonial").title("Отзиви"),
      S.documentTypeListItem("faqItem").title("Чести въпроси"),
    ]);
