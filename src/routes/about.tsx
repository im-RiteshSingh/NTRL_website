import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import galleryEquipment from "@/assets/gallery-equipment-01.jpg";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { TrustStrip } from "@/components/site/TrustStrip";
import { company } from "@/data/siteData";

const title = "About NTRL — Testing & Research Laboratory in Patna, Bihar";
const description =
  "NTRL is a NABL accredited, ISO 9001:2015 certified third-party infrastructure construction materials testing laboratory in Patna, Bihar, with advanced equipment and experienced technical professionals.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const expertise = [
  "Building material testing",
  "Road material testing",
  "Soil testing",
  "Concrete testing",
  "Cement testing",
  "Bitumen testing",
  "Geotechnical investigation",
  "Non-destructive testing",
  "Environmental testing",
  "Digital surveying",
  "Quality assurance",
];

const commitments = [
  {
    title: "Accuracy",
    body: "Tests are performed on calibrated equipment with documented procedures so results can be relied upon.",
  },
  {
    title: "Reliability",
    body: "Repeatable methods and trained personnel support consistent outcomes across projects.",
  },
  {
    title: "Quality",
    body: "An ISO 9001:2015 certified quality management approach governs laboratory operations.",
  },
  {
    title: "Technical Compliance",
    body: "Testing follows relevant specifications, or the requirements of the concerned department or client.",
  },
  {
    title: "Proper Testing Procedures",
    body: "Sample handling, testing and reporting follow the applicable procedure for each test.",
  },
  {
    title: "Independence",
    body: "As an independent third-party laboratory, NTRL reports results without commercial interest in the works.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="About Us"
        title="A trusted name in building & road material testing"
        subtitle="Nirvan Testing & Research Laboratory Pvt. Ltd. (NTRL), Patna — a NABL accredited and ISO 9001:2015 certified infrastructure construction materials testing laboratory."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="min-w-0">
            <SectionHeading eyebrow="Who We Are" title="An independent, third-party laboratory" />
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                NTRL is an independent third-party testing laboratory providing quality evaluation
                testing services in the field of building material, road material, bridge material,
                geotechnical investigation, non-destructive testing, environmental testing and
                digital surveying.
              </p>
              <p>
                Testing is carried out as per the relevant specification, as specified by Government
                and semi-Government departments, or as per client and customer requirements.
              </p>
              <p>
                The company is a NABL accredited laboratory (Laboratory Code T-8940, Accreditation
                Certificate No. TC-17978) for the mechanical and chemical disciplines, and is a
                certified ISO 9001:2015 company.
              </p>
            </div>
            <dl className="mt-8 grid gap-3 sm:grid-cols-3">
              {company.statutory.map((item) => (
                <div key={item.label} className="rounded-md border border-border bg-surface p-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-brand">
                    {item.label}
                  </dt>
                  <dd className="mt-1 break-all text-sm font-semibold text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <Reveal>
            <img
              src={galleryEquipment}
              alt="Concrete compression testing machine inside the materials testing laboratory"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-lg border border-border object-cover shadow-card"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Our Expertise"
          title="Testing and investigation capability"
          subtitle="NTRL's declared work areas cover laboratory and field activities for construction and infrastructure projects."
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, i) => (
            <Reveal as="li" key={item} delay={(i % 3) * 70}>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-card">
                <CheckCircle2 className="size-5 shrink-0 text-brand" aria-hidden="true" />
                <span className="text-sm font-semibold text-foreground">{item}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Our Laboratory</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                NTRL is well equipped with sophisticated equipment for infrastructure construction
                materials testing, including dedicated sections for soil, bitumen, concrete and
                chemical testing work.
              </p>
              <p>
                All equipment is highly advanced as per IS specifications and calibrated by NABL
                certified calibration agencies, giving the laboratory strong analytical capability to
                directly assist clients and support in-house quality assurance and research projects.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Technical Team</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                The laboratory is supported by experienced scientists, analysts, engineers and
                technical professionals, guided by the skill and experience of a retired Chief
                Engineer from the State Government.
              </p>
              <ul className="space-y-3">
                {company.leadership.map((person) => (
                  <li key={person.name} className="rounded-md border border-border bg-surface p-4">
                    <p className="font-semibold text-foreground">{person.name}</p>
                    <p className="text-sm text-muted-foreground">{person.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Quality Commitment"
          title="How we work"
          subtitle="Every assignment is handled with a focus on accuracy, reliability and technical compliance."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {commitments.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 3) * 80}>
              <div className="h-full rounded-lg border border-border bg-card p-6 shadow-card">
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <TrustStrip />
      <CTASection primaryLabel="Get a Consultation" />
    </>
  );
}
