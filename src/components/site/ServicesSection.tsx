import { Link } from "@tanstack/react-router";

import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";
import { ServiceCard } from "./ServiceCard";
import { Button } from "@/components/ui/button";
import { services, type Service } from "@/data/siteData";

export function ServiceGrid({ items }: { items: Service[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service, i) => (
        <Reveal as="li" key={service.slug} delay={(i % 3) * 90}>
          <ServiceCard service={service} />
        </Reveal>
      ))}
    </ul>
  );
}

export function ServicesSection() {
  return (
    <Section tone="surface" id="services">
      <SectionHeading
        eyebrow="What We Do"
        title="Our Testing & Research Services"
        subtitle="Comprehensive testing and investigation solutions for construction, infrastructure and engineering projects."
      />
      <div className="mt-10">
        <ServiceGrid items={services.slice(0, 6)} />
      </div>
      <div className="mt-10">
        <Button asChild variant="outline" size="lg">
          <Link to="/services">View All Services</Link>
        </Button>
      </div>
    </Section>
  );
}
