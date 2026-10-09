import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import type { GalleryItem } from "@/sanity/lib/types";

function BeforeAfterCard({ item }: { item: GalleryItem }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-foreground/10">
      <div className="grid grid-cols-2">
        <div className="relative aspect-[4/3]">
          {item.beforeImage ? (
            <Image
              src={urlForImage(item.beforeImage).width(600).height(450).url()}
              alt={item.title ? `${item.title} — преди` : "Преди"}
              fill
              sizes="(min-width: 640px) 25vw, 50vw"
              className="object-cover"
            />
          ) : null}
          <span className="absolute left-2 top-2 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground">
            Преди
          </span>
        </div>
        <div className="relative aspect-[4/3]">
          {item.afterImage ? (
            <Image
              src={urlForImage(item.afterImage).width(600).height(450).url()}
              alt={item.title ? `${item.title} — сега` : "Сега"}
              fill
              sizes="(min-width: 640px) 25vw, 50vw"
              className="object-cover"
            />
          ) : null}
          <span className="absolute right-2 top-2 rounded-full bg-accent/90 px-2.5 py-1 text-xs font-medium text-white">
            Сега
          </span>
        </div>
      </div>
      {item.title || item.description ? (
        <div className="p-5">
          {item.title ? (
            <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
          ) : null}
          {item.description ? (
            <p className="mt-1 text-sm leading-6 text-foreground/60">
              {item.description}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function SingleImageCard({ item }: { item: GalleryItem }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-foreground/10">
      <div className="relative aspect-[4/3]">
        {item.image ? (
          <Image
            src={urlForImage(item.image).width(800).height(600).url()}
            alt={item.title ?? ""}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : null}
      </div>
      {item.title || item.description ? (
        <div className="p-5">
          {item.title ? (
            <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
          ) : null}
          {item.description ? (
            <p className="mt-1 text-sm leading-6 text-foreground/60">
              {item.description}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="mt-12 grid gap-8 sm:grid-cols-2">
      {items.map((item) =>
        item.type === "beforeAfter" ? (
          <BeforeAfterCard key={item._id} item={item} />
        ) : (
          <SingleImageCard key={item._id} item={item} />
        ),
      )}
    </div>
  );
}
