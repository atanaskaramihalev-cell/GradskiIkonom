import { Container } from "@/components/ui/Container";
import type { TrustBadge } from "@/sanity/lib/types";

export function TrustBadgesSection({ badges }: { badges: TrustBadge[] }) {
  const items = badges.filter((badge) => badge.value && badge.label);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="border-y border-foreground/10 bg-background py-10">
      <Container>
        <div className="grid grid-cols-2 gap-y-8 divide-foreground/10 sm:grid-cols-4 sm:divide-x">
          {items.map((badge) => (
            <div key={badge.label} className="text-center">
              <p className="font-serif text-3xl font-semibold text-accent sm:text-4xl">
                {badge.value}
              </p>
              <p className="mt-1 text-sm text-foreground/60">{badge.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
