import { Link } from "@tanstack/react-router";

import galleryInfra from "@/assets/gallery-infra.jpg";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="min-w-0">
          <SectionHeading eyebrow="Who We Are" title="About NTRL" />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Nirvan Testing &amp; Research Laboratory Pvt. Ltd. is a professional testing and
              research laboratory based in Patna, Bihar, providing testing and quality-assurance
              services for building, road and infrastructure-related projects.
            </p>
            <p>
              NTRL focuses on reliable laboratory and field testing supported by advanced equipment,
              experienced technical professionals and quality-oriented processes.
            </p>
            <p>
              The company supports clients with testing, analytical and research requirements
              associated with construction and infrastructure projects, as per relevant
              specifications or as specified by Government and semi-Government departments.
            </p>
          </div>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to="/about">Learn More About NTRL</Link>
            </Button>
          </div>
        </div>

        <Reveal className="relative">
          <div className="overflow-hidden rounded-lg border border-border shadow-card">
            <img
              src={galleryInfra}
              alt="Road and bridge infrastructure under construction, representative of the projects NTRL supports with material testing"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Third-party", value: "Independent testing" },
              { label: "Disciplines", value: "Mechanical & Chemical" },
              { label: "Incorporated", value: "December 2019" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-md border border-border bg-surface p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
