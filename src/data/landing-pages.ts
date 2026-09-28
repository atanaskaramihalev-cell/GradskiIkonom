export type LandingPage = {
  slug: string;
  title: string;
  description: string;
};

/**
 * Future SEO landing pages (districts / property-type variants).
 * Add an entry here to publish a new page at /<slug> — no new route file needed.
 */
export const landingPages: LandingPage[] = [
  {
    slug: "sofia",
    title: "Управление на етажна собственост в София",
    description:
      "Професионално управление на етажна собственост в София от Градски Иконом.",
  },
  {
    slug: "geo-milev",
    title: "Управление на етажна собственост в Гео Милев",
    description:
      "Професионално управление на етажна собственост в кв. Гео Милев от Градски Иконом.",
  },
  {
    slug: "slatina",
    title: "Управление на етажна собственост в Слатина",
    description:
      "Професионално управление на етажна собственост в район Слатина от Градски Иконом.",
  },
  {
    slug: "reduta",
    title: "Управление на етажна собственост в Редута",
    description:
      "Професионално управление на етажна собственост в кв. Редута от Градски Иконом.",
  },
  {
    slug: "yavorov",
    title: "Управление на етажна собственост в Яворов",
    description:
      "Професионално управление на етажна собственост в кв. Яворов от Градски Иконом.",
  },
  {
    slug: "novo-stroitelstvo",
    title: "Управление на етажна собственост за ново строителство",
    description:
      "Професионално управление на етажна собственост за новопостроени сгради от Градски Иконом.",
  },
];

export function getLandingPage(slug: string): LandingPage | undefined {
  return landingPages.find((page) => page.slug === slug);
}
