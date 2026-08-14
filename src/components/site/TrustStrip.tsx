import { Award, FlaskConical, ShieldCheck, Users } from "lucide-react";

import { Reveal } from "./Reveal";
import { credentials } from "@/data/siteData";

const items = [
  {
    icon: ShieldCheck,
    title: "NABL Accredited",
    body: `Accredited to ${credentials.nabl.standard} for testing — Laboratory Code ${credentials.nabl.labCode}, Certificate No. ${credentials.nabl.certificateNo}.`,
  },
  {
    icon: Award,
    title: "ISO 9001:2015",
    body: "A certified ISO 9001:2015 company with a documented quality management approach.",
  },
  {
    icon: FlaskConical,
    title: "Advanced Laboratory",
    body: "Highly advanced equipment as per IS specifications, calibrated by NABL certified calibration agencies.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    body: "Experienced scientists, analysts and engineers supporting laboratory and technical activities.",
  },
];

export function TrustStrip() {
  return (
    <section className="border-b border-border bg-surface py-12 md:py-14" aria-label="Credentials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 80}>
              <div className="h-full rounded-lg border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover">
                <span className="inline-flex size-11 items-center justify-center rounded-md bg-primary/8 text-primary">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
