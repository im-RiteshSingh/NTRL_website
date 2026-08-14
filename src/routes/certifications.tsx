import { createFileRoute } from "@tanstack/react-router";

import { CertificationCards } from "@/components/site/CertificationsSection";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { company } from "@/data/siteData";

const title = "Certifications & Accreditation — NABL & ISO 9001:2015 | NTRL";
const description =
  "NTRL is a NABL accredited laboratory (Lab Code T-8940, Certificate TC-17978) accredited to ISO/IEC 17025:2017 for testing, and a certified ISO 9001:2015 company.";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/certifications" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: CertificationsPage,
});

function CertificationsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Certifications"
        eyebrow="Credentials"
        title="Certifications & Accreditation"
        subtitle="Independent accreditation and certification supporting the credibility of every NTRL test report."
      />
      <Section>
        <CertificationCards />
      </Section>
      <Section tone="surface">
        <SectionHeading
          eyebrow="Accredited Facility"
          title="Accreditation details"
          subtitle="Accreditation applies to the laboratory facility named in the NABL certificate."
        />
        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Accredited Facility", value: company.nablAddress },
            { label: "Field", value: "Testing" },
            { label: "Standard", value: "ISO/IEC 17025:2017" },
            { label: "Legal Entity", value: "Nirvan Testing and Research Laboratory Private Limited" },
            { label: "CIN", value: "U74999BR2019PTC044363" },
            {
              label: "Scope of Accreditation",
              value: "As specified in the annexure to the NABL certificate.",
            },
          ].map((row) => (
            <div key={row.label} className="rounded-lg border border-border bg-card p-5 shadow-card">
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-brand">
                {row.label}
              </dt>
              <dd className="mt-2 text-sm font-semibold leading-relaxed text-foreground">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </Section>
      <CTASection primaryLabel="Request Testing Quote" />
    </>
  );
}
