import { type SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./siteSettings";
import { service } from "./service";
import { pricingPackage } from "./pricingPackage";
import { page } from "./page";
import { blockContent } from "./blockContent";
import { galleryItem } from "./galleryItem";
import { testimonial } from "./testimonial";
import { faqItem } from "./faqItem";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    service,
    pricingPackage,
    page,
    blockContent,
    galleryItem,
    testimonial,
    faqItem,
  ],
};
