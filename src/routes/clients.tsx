import { createFileRoute } from "@tanstack/react-router";

import { ClientGrid } from "@/components/site/ClientsSection";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";

const title = "Our Valuable Clients — Government & Infrastructure | NTRL Patna";
const description =
  "Organisations NTRL has supported with testing and technical services, including government corporations, railways, consultancies and infrastructure contractors.";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/clients" },
    ],
    links: [{ rel: "canonical", href: "/clients" }],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Clients"
        eyebrow="Clients"
        title="Our Valuable Clients"
        subtitle="Client organisations listed in NTRL company documentation."
      />
      <Section>
        <SectionHeading
          eyebrow="Client List"
          title="Organisations we have supported"
          subtitle="Client logos will be published only after NTRL confirms which names and logos may be displayed publicly and provides the original logo files."
        />
        <div className="mt-10">
          <ClientGrid />
        </div>
      </Section>
      <CTASection primaryLabel="Contact NTRL" />
    </>
  );
}
