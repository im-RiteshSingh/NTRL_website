import { Link } from "@tanstack/react-router";
import { FileCheck2 } from "lucide-react";

import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";
import { Button } from "@/components/ui/button";
import { caseStudy, projects } from "@/data/siteData";

export function ProjectGrid({ limit }: { limit?: number }) {
  const items = limit ? projects.slice(0, limit) : projects;
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((project, i) => (
        <Reveal as="li" key={project.client} delay={(i % 3) * 80}>
          <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover">
            <span className="w-fit rounded bg-primary/8 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
              {project.sector}
            </span>
            <h3 className="mt-4 flex-1 text-base font-bold leading-snug text-foreground">
              {project.client}
            </h3>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <FileCheck2 className="size-4 shrink-0 text-brand" aria-hidden="true" />
              {project.scope}
            </p>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}

export function CaseStudyCard() {
  return (
    <Reveal className="rounded-lg border border-border bg-card p-6 shadow-card md:p-8">
      <p className="eyebrow">Project Case Study</p>
      <h3 className="mt-4 text-2xl font-bold text-foreground">{caseStudy.title}</h3>
      <dl className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Project
          </dt>
          <dd className="mt-1 font-semibold text-foreground">{caseStudy.project}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Reference
          </dt>
          <dd className="mt-1 font-semibold text-foreground">{caseStudy.client}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Documented Requirements
          </dt>
          <dd className="mt-2 flex flex-wrap gap-1.5">
            {caseStudy.requirements.map((item) => (
              <span
                key={item}
                className="rounded border border-border bg-surface px-2 py-1 text-xs font-medium text-foreground"
              >
                {item}
              </span>
            ))}
          </dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Mix Design Grades
          </dt>
          <dd className="mt-2 flex flex-wrap gap-1.5">
            {caseStudy.grades.map((grade) => (
              <span
                key={grade}
                className="rounded bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground"
              >
                {grade}
              </span>
            ))}
          </dd>
        </div>
      </dl>
      <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
        {caseStudy.note}
      </p>
    </Reveal>
  );
}

export function ProjectsSection() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow="Project Experience"
        title="Our Project Experience"
        subtitle="Testing and technical support across construction, infrastructure, railway and development projects."
      />
      <div className="mt-10">
        <ProjectGrid limit={6} />
      </div>
      <div className="mt-10">
        <Button asChild variant="outline" size="lg">
          <Link to="/projects">View Project Experience</Link>
        </Button>
      </div>
    </Section>
  );
}
