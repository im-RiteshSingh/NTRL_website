import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { DataIcon } from "./icons";
import type { Service } from "@/data/siteData";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card-hover">
      <span className="inline-flex size-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <DataIcon name={service.icon} className="size-5" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-foreground">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
      {service.categories?.length ? (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {service.categories.slice(0, 4).map((category) => (
            <li
              key={category}
              className="rounded border border-border bg-surface px-2 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {category}
            </li>
          ))}
        </ul>
      ) : null}
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
      >
        View service
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </article>
  );
}
