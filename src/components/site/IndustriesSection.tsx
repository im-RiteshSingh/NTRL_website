import { Link } from "@tanstack/react-router";

import { DataIcon } from "./icons";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";
import { Button } from "@/components/ui/button";
import { industries } from "@/data/siteData";

export function IndustryGrid() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {industries.map((industry, i) => (
        <Reveal as="li" key={industry.slug} delay={(i % 3) * 80}>
          <div className="flex h-full gap-4 rounded-lg border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-brand/10 text-brand">
              <DataIcon name={industry.icon} className="size-5" />
            </span>
            <div className="min-w-0">
              <h3 className="text-base font-bold text-foreground">{industry.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{industry.body}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

export function IndustriesSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Sectors"
        title="Industries We Serve"
        subtitle="Testing and quality-assurance support across construction, transport, government and engineering sectors."
      />
      <div className="mt-10">
        <IndustryGrid />
      </div>
      <div className="mt-10">
        <Button asChild variant="outline" size="lg">
          <Link to="/industries">Explore Industries</Link>
        </Button>
      </div>
    </Section>
  );
}
