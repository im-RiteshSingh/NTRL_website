import { createFileRoute } from "@tanstack/react-router";

import { ContactSection } from "@/components/site/ContactSection";
import { PageHero } from "@/components/site/PageHero";

const title = "Contact NTRL — Testing Laboratory in Patna, Bihar";
const description =
  "Contact Nirvan Testing & Research Laboratory Pvt. Ltd., North S.K. Puri, Patna for material testing, geotechnical investigation, NDT and environmental testing enquiries.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Get In Touch"
        title="Let's Discuss Your Testing Requirement"
        subtitle="Contact NTRL for testing, investigation and quality-assurance requirements."
      />
      <ContactSection />
    </>
  );
}
