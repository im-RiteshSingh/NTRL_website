import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary-deep text-primary-foreground">
      <div className="blueprint-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div
        className="absolute inset-y-0 right-0 w-1/3 bg-brand/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-5 text-xs text-primary-foreground/65">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link to="/" className="hover:text-highlight">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-3.5" />
            </li>
            <li className="text-primary-foreground/90">{breadcrumb}</li>
          </ol>
        </nav>
        {eyebrow ? (
          <p className="eyebrow text-highlight">{eyebrow}</p>
        ) : null}
        <h1 className="mt-4 max-w-4xl text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h1>
        {subtitle ? (
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
