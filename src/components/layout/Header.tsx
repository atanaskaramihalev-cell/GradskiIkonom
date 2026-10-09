"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { primaryCta, primaryNav } from "@/lib/constants";
import type { SiteSettings } from "@/sanity/lib/types";

export function Header({ siteSettings }: { siteSettings?: SiteSettings | null }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setIsMenuOpen(false);
  const ctaLabel = siteSettings?.primaryCtaLabel ?? primaryCta.label;
  const ctaHref = siteSettings?.primaryCtaHref ?? primaryCta.href;

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/95 backdrop-blur-sm">
      <Container className="flex items-center justify-between py-5">
        <Logo />

        <nav
          aria-label="Основна навигация"
          className="hidden items-center gap-8 lg:flex"
        >
          {primaryNav.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive ? "text-accent" : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={ctaHref} variant="primary">
            {ctaLabel}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Затвори менюто" : "Отвори менюто"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            )}
          </svg>
        </button>
      </Container>

      {isMenuOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-foreground/10 bg-background lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={closeMenu}
                  className={`rounded-md px-3 py-2.5 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-foreground/80 hover:bg-foreground/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 px-3">
              <Button
                href={ctaHref}
                variant="primary"
                className="w-full"
                onClick={closeMenu}
              >
                {ctaLabel}
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
