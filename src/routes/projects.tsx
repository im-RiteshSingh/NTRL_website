import { createFileRoute } from "@tanstack/react-router";

import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { CaseStudyCard, ProjectGrid } from "@/components/site/ProjectsSection";
import { Section, SectionHeading } from "@/components/site/Section";

const title = "Project Experience — Infrastructure Testing | NTRL Patna";
const description =
  "NTRL project experience across smart city, railway, government infrastructure, highway and EPC construction projects, including concrete mix design and water testing work.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Projects"
        eyebrow="Our Work"
        title="Our Project Experience"
        subtitle="Testing and technical support across construction, infrastructure, railway and development projects."
      />
      <Section>
        <SectionHeading
          eyebrow="Portfolio"
          title="Client and project references"
          subtitle="References below are drawn from NTRL company documentation. Where detailed project information is not available, only the client or project name and the nature of support are shown."
        />
        <div className="mt-10">
          <ProjectGrid />
        </div>
      </Section>
      <Section tone="surface">
        <CaseStudyCard />
      </Section>
      <CTASection primaryLabel="Enquire Now" />
    </>
  );
}
