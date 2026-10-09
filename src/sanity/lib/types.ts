import type { SanityImageSource } from "@sanity/image-url";
import type { PortableTextBlock } from "next-sanity";

export type SanityImage = SanityImageSource & { _type: "image" };

export type GalleryItem = {
  _id: string;
  type: "beforeAfter" | "single";
  title?: string;
  description?: string;
  image?: SanityImage;
  beforeImage?: SanityImage;
  afterImage?: SanityImage;
  order?: number;
};

export type Testimonial = {
  _id: string;
  name: string;
  role?: string;
  quote: string;
  rating?: number;
  photo?: SanityImage;
  order?: number;
};

export type FaqItem = {
  _id: string;
  question: string;
  answer: string;
  order?: number;
};

export type TrustBadge = {
  value?: string;
  label?: string;
};

export type SiteSettings = {
  _id: string;
  phone?: string;
  email?: string;
  address?: string;
  workingHours?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  trustBadges?: TrustBadge[];
};

export type PageContent = {
  _id: string;
  pageKey: "kak-rabotim" | "za-nas" | "remiox";
  title: string;
  description?: string;
  body?: PortableTextBlock[];
};
