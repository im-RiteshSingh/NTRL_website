import { createFileRoute } from "@tanstack/react-router";

import { AboutSection } from "@/components/site/AboutSection";
import { CertificationsSection } from "@/components/site/CertificationsSection";
import { ClientsSection } from "@/components/site/ClientsSection";
import { ContactSection } from "@/components/site/ContactSection";
import { CTASection } from "@/components/site/CTASection";
import { GalleryPreview } from "@/components/site/GallerySection";
import { HeroSection } from "@/components/site/HeroSection";
import { IndustriesSection } from "@/components/site/IndustriesSection";
import { ProjectsSection } from "@/components/site/ProjectsSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { TrustStrip } from "@/components/site/TrustStrip";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { company, credentials } from "@/data/siteData";

const title = "NTRL — NABL Accredited Material Testing Laboratory in Patna";
const description =
  "Nirvan Testing & Research Laboratory Pvt. Ltd. (NTRL), Patna — NABL accredited, ISO 9001:2015 certified laboratory for building, road, soil, concrete, cement, bitumen, NDT and environmental testing.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TestingLab",
          name: company.name,
          alternateName: "NTRL",
          url: "/",
          telephone: company.phone,
          email: company.emails[0],
          address: {
            "@type": "PostalAddress",
            streetAddress: "4A/11, Jagdamba Path, North S.K. Puri, Boring Road",
            addressLocality: "Patna",
            postalCode: "800013",
            addressRegion: "Bihar",
            addressCountry: "IN",
          },
          hasCredential: [
            `NABL Accredited Laboratory — Certificate ${credentials.nabl.certificateNo}, Laboratory Code ${credentials.nabl.labCode}`,
            "ISO 9001:2015 Certified",
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <IndustriesSection />
      <GalleryPreview />
      <ProjectsSection />
      <ClientsSection />
      <CertificationsSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
