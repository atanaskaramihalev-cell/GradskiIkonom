import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "./SectionHeading";
import { urlForImage } from "@/sanity/lib/image";
import type { Testimonial } from "@/sanity/lib/types";

function StarRow({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5 text-accent" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < rating ? "fill-current" : "fill-foreground/15"}`}
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ testimonial }: { testimonial: Testimonial }) {
  if (testimonial.photo) {
    return (
      <Image
        src={urlForImage(testimonial.photo).width(80).height(80).url()}
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover"
      />
    );
  }

  const initials = testimonial.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
      {initials}
    </span>
  );
}

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <Section className="bg-foreground/[0.02]">
      <SectionHeading
        eyebrow="Отзиви"
        title="Какво казват собствениците"
        align="center"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial._id}
            className="flex flex-col rounded-2xl border border-foreground/10 bg-background p-6"
          >
            <StarRow rating={testimonial.rating} />
            <blockquote className="mt-4 flex-1 text-sm leading-6 text-foreground/70">
              „{testimonial.quote}“
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <Avatar testimonial={testimonial} />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.name}
                </p>
                {testimonial.role ? (
                  <p className="text-xs text-foreground/50">{testimonial.role}</p>
                ) : null}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
