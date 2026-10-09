import Image from "next/image";
import { PortableText, type PortableTextComponents } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";
import type { PageContent } from "@/sanity/lib/types";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 font-serif text-2xl font-semibold text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 font-serif text-xl font-semibold text-foreground">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-4 text-base leading-7 text-foreground/70">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 border-accent pl-4 text-foreground/70 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground/70">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-foreground/70">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="text-foreground">{children}</strong>,
  },
  types: {
    image: ({ value }) => (
      <span className="mt-6 block overflow-hidden rounded-2xl">
        <Image
          src={urlForImage(value).width(1200).url()}
          alt=""
          width={1200}
          height={800}
          className="h-auto w-full object-cover"
        />
      </span>
    ),
  },
};

export function PortableTextContent({ body }: { body: PageContent["body"] }) {
  if (!body || body.length === 0) {
    return null;
  }

  return (
    <div className="max-w-2xl">
      <PortableText value={body} components={components} />
    </div>
  );
}
