import { createFileRoute } from "@tanstack/react-router";

import { CTASection } from "@/components/site/CTASection";
import { GalleryGrid } from "@/components/site/GallerySection";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

const title = "Laboratory & Gallery — Testing Equipment | NTRL Patna";
const description =
  "See NTRL's laboratory, testing equipment, field investigation and construction testing activities supporting building and road material testing in Patna, Bihar.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        breadcrumb="Gallery"
        eyebrow="Laboratory"
        title="Laboratory & Gallery"
        subtitle="Laboratory infrastructure, testing equipment, field investigation and construction testing activities."
      />
      <Section>
        <GalleryGrid />
      </Section>
      <CTASection primaryLabel="Get a Consultation" />
    </>
  );
}
