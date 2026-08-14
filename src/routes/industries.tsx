import { createFileRoute } from "@tanstack/react-router";

import { CTASection } from "@/components/site/CTASection";
import { IndustryGrid } from "@/components/site/IndustriesSection";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";

const title = "Industries We Serve — Construction, Roads, Railways | NTRL Patna";
const description =
  "NTRL supports construction, roads and highways, railways, government infrastructure, smart city, engineering consultancy and EPC companies with material testing and quality assurance.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Industries"
        eyebrow="Industries"
        title="Industries We Serve"
        subtitle="Testing and quality-assurance support for the sectors that build and maintain public and private infrastructure."
      />
      <Section>
        <SectionHeading
          eyebrow="Sectors"
          title="Where NTRL supports project teams"
          subtitle="Work is undertaken as per relevant specifications or as specified by the concerned department or client."
        />
        <div className="mt-10">
          <IndustryGrid />
        </div>
      </Section>
      <CTASection primaryLabel="Contact NTRL" />
    </>
  );
}
