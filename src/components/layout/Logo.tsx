import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="font-serif text-lg font-semibold tracking-tight text-foreground sm:text-xl"
    >
      Градски Иконом
    </Link>
  );
}
