import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Building2, FlaskConical, ShieldCheck } from "lucide-react";

import heroLab from "@/assets/hero-lab.jpg";
import { Button } from "@/components/ui/button";
import { company } from "@/data/siteData";

const indicators = [
  { icon: ShieldCheck, label: "NABL Accredited" },
  { icon: BadgeCheck, label: "ISO 9001:2015 Certified" },
  { icon: FlaskConical, label: "Professional Testing Laboratory" },
  { icon: Building2, label: "Construction & Infrastructure Testing" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary-deep text-primary-foreground">
      <div className="blueprint-grid absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="min-w-0">
          <p className="eyebrow text-highlight">{company.name}</p>
          <h1 className="mt-5 text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Reliable Testing. Trusted Results.{" "}
            <span className="text-highlight">Quality You Can Build On.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Professional testing, research and quality-assurance services for building, road,
            infrastructure and engineering projects — from a NABL accredited, ISO 9001:2015
            certified laboratory in Patna, Bihar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="brand" size="xl">
              <Link to="/contact" hash="enquiry">
                Request a Testing Quote
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="onNavy" size="xl">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>

          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {indicators.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm text-primary-foreground/85">
                <Icon className="size-4 shrink-0 text-highlight" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-primary-foreground/15 shadow-card-hover">
            <img
              src={heroLab}
              alt="Concrete compression testing machine and materials testing equipment inside an infrastructure construction materials laboratory"
              width={1600}
              height={1008}
              className="h-full w-full object-cover"
            />
          </div>
          <dl className="mt-4 grid grid-cols-2 gap-3 sm:mt-0 sm:absolute sm:-bottom-6 sm:left-6 sm:mt-0 sm:w-auto sm:grid-cols-2">
            <div className="rounded-md border border-border bg-card px-4 py-3 shadow-card">
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                NABL Lab Code
              </dt>
              <dd className="font-display text-lg font-bold text-primary">T-8940</dd>
            </div>
            <div className="rounded-md border border-border bg-card px-4 py-3 shadow-card">
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Certificate No.
              </dt>
              <dd className="font-display text-lg font-bold text-primary">TC-17978</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
