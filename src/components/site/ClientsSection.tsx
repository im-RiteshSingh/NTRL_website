import { Link } from "@tanstack/react-router";
import { Building2 } from "lucide-react";

import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";
import { Button } from "@/components/ui/button";
import { clients } from "@/data/siteData";

export function ClientGrid({ limit }: { limit?: number }) {
  const items = limit ? clients.slice(0, limit) : clients;
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((client, i) => (
        <Reveal as="li" key={client} delay={(i % 3) * 70}>
          <div className="flex h-full items-start gap-3 rounded-lg border border-border bg-card p-5 shadow-card transition-colors hover:border-primary/30">
            <Building2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <p className="min-w-0 text-sm font-semibold leading-snug text-foreground">{client}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

export function ClientsSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Trusted By"
        title="Our Valuable Clients"
        subtitle="Organisations listed in NTRL company documentation. Client logos will be displayed only once NTRL confirms permission and provides original files."
      />
      <div className="mt-10">
        <ClientGrid limit={9} />
      </div>
      <div className="mt-10">
        <Button asChild variant="outline" size="lg">
          <Link to="/clients">See All Clients</Link>
        </Button>
      </div>
    </Section>
  );
}
