import { createFileRoute } from "@tanstack/react-router";

import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { ServiceGrid } from "@/components/site/ServicesSection";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { services } from "@/data/siteData";

const title = "Testing Services — Soil, Concrete, Cement, Bitumen & NDT | NTRL Patna";
const description =
  "NTRL provides building and road material testing, soil, concrete, cement and bitumen testing, geotechnical investigation, NDT, environmental testing, water testing, mix design and digital surveying in Patna, Bihar.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="Services"
        title="Our Testing & Research Services"
        subtitle="Comprehensive testing and investigation solutions for construction, infrastructure and engineering projects."
      />

      <Section>
        <SectionHeading
          eyebrow="Capability"
          title="Laboratory and field services"
          subtitle="Select a service to see its overview, applications and the NTRL approach."
        />
        <div className="mt-10">
          <ServiceGrid items={services} />
        </div>
      </Section>

      <WhyChooseUs />
      <CTASection primaryLabel="Submit Testing Requirement" />
    </>
  );
}
