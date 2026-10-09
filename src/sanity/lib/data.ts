import { cache } from "react";
import { client } from "./client";
import { siteSettingsQuery } from "./queries";
import type { SiteSettings } from "./types";

export const getSiteSettings = cache(async (): Promise<SiteSettings | null> => {
  return client.fetch<SiteSettings | null>(siteSettingsQuery);
});
