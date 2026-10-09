import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`*[_type == "siteSettings"][0]`);

export const servicesQuery = defineQuery(
  `*[_type == "service"] | order(order asc)`,
);

export const pricingPackagesQuery = defineQuery(
  `*[_type == "pricingPackage"] | order(order asc)`,
);

export const pageByKeyQuery = defineQuery(
  `*[_type == "page" && pageKey == $pageKey][0]`,
);

export const galleryItemsQuery = defineQuery(
  `*[_type == "galleryItem"] | order(order asc)`,
);

export const testimonialsQuery = defineQuery(
  `*[_type == "testimonial"] | order(order asc)`,
);

export const faqItemsQuery = defineQuery(
  `*[_type == "faqItem"] | order(order asc)`,
);
