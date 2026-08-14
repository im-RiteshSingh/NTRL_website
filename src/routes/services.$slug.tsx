import { createFileRoute, notFound } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { CTASection } from "@/components/site/CTASection";
import { DataIcon } from "@/components/site/icons";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { ServiceGrid } from "@/components/site/ServicesSection";
import { services } from "@/data/siteData";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((item) => item.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service unavailable — NTRL" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.service.title} — NTRL, Patna`;
    const description = loaderData.service.short;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetailPage,
});

function ServiceNotFound() {
  return (
    <Section>
      <h1 className="text-2xl font-bold text-foreground">Service not found</h1>
      <p className="mt-3 text-muted-foreground">
        The service you are looking for is not listed. Please browse all NTRL testing services.
      </p>
      <div className="mt-8">
        <ServiceGrid items={services.slice(0, 3)} />
      </div>
    </Section>
  );
}

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero breadcrumb={service.title} eyebrow="Service" title={service.title} subtitle={service.short} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div className="min-w-0 space-y-12">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="inline-flex size-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <DataIcon name={service.icon} className="size-6" />
                </span>
                <h2 className="text-2xl font-bold text-foreground">Overview</h2>
              </div>
              <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
                {service.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl font-bold text-foreground">Why It Matters</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{service.whyItMatters}</p>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl font-bold text-foreground">Applications</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.applications.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-card"
                  >
                    <CheckCircle2 className="size-5 shrink-0 text-brand" aria-hidden="true" />
                    <span className="text-sm font-semibold text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl font-bold text-foreground">The NTRL Approach</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{service.approach}</p>
            </Reveal>
          </div>

          <aside className="space-y-6">
            {service.categories?.length ? (
              <Reveal className="rounded-lg border border-border bg-surface p-6">
                <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-brand">
                  Included Scope
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-foreground">
                  {service.categories.map((category) => (
                    <li key={category} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                      {category}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-muted-foreground">
                  Detailed test parameters are confirmed against the accredited scope for each
                  assignment.
                </p>
              </Reveal>
            ) : null}
            <Reveal className="rounded-lg border border-border bg-card p-6 shadow-card">
              <h2 className="text-base font-bold text-foreground">Credentials</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>NABL accredited — Lab Code T-8940</li>
                <li>Accreditation Certificate No. TC-17978</li>
                <li>ISO 9001:2015 certified company</li>
                <li>Equipment calibrated by NABL certified agencies</li>
              </ul>
            </Reveal>
          </aside>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Related" title="Related Services" />
        <div className="mt-10">
          <ServiceGrid items={related} />
        </div>
      </Section>

      <CTASection primaryLabel={service.cta} />
    </>
  );
}
