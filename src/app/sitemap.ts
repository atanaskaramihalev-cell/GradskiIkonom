import type { MetadataRoute } from "next";
import { siteConfig, primaryNav } from "@/lib/constants";
import { landingPages } from "@/data/landing-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = primaryNav.map((item) => ({
    url: new URL(item.href, siteConfig.url).toString(),
  }));

  const landingRoutes = landingPages.map((page) => ({
    url: new URL(`/${page.slug}`, siteConfig.url).toString(),
  }));

  return [...staticRoutes, ...landingRoutes];
}
