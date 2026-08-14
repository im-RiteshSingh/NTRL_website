import { DataIcon } from "./icons";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";
import { whyChooseUs } from "@/data/siteData";

export function WhyChooseUs() {
  return (
    <Section tone="navy">
      <SectionHeading
        eyebrow="Our Strengths"
        title="Why Choose NTRL?"
        subtitle="Accreditation, calibrated equipment and experienced technical professionals behind every test report."
        inverted
      />
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((item, i) => (
          <Reveal as="li" key={item.no} delay={(i % 3) * 90}>
            <div className="h-full rounded-lg border border-primary-foreground/12 bg-primary-foreground/5 p-6 transition-colors hover:border-highlight/50">
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex size-11 items-center justify-center rounded-md bg-highlight text-highlight-foreground">
                  <DataIcon name={item.icon} className="size-5" />
                </span>
                <span className="font-display text-2xl font-bold text-primary-foreground/25">
                  {item.no}
                </span>
              </div>
              <h3 className="mt-5 text-base font-bold text-primary-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
