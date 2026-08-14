import { Link } from "@tanstack/react-router";
import { Award, FileText, ShieldCheck } from "lucide-react";
import { useState } from "react";

import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { credentials } from "@/data/siteData";

type Certificate = {
  title: string;
  icon: typeof ShieldCheck;
  rows: { label: string; value: string }[];
  body: string;
  placeholder: string;
};

const certificates: Certificate[] = [
  {
    title: "NABL Accredited Laboratory",
    icon: ShieldCheck,
    rows: [
      { label: "Laboratory Code", value: credentials.nabl.labCode },
      { label: "Certificate Number", value: credentials.nabl.certificateNo },
      { label: "Standard", value: credentials.nabl.standard },
      { label: "Field", value: "Testing — Mechanical and Chemical discipline" },
      { label: "Issue Date", value: credentials.nabl.issueDate },
      { label: "Valid Until", value: credentials.nabl.validUntil },
    ],
    body: "Accredited by the National Accreditation Board for Testing and Calibration Laboratories (NABL) in accordance with ISO/IEC 17025:2017, 'General Requirements for the Competence of Testing & Calibration Laboratories'. The scope of accreditation is defined in the annexure to the certificate.",
    placeholder: "[NABL CERTIFICATE PDF TO BE PROVIDED BY NTRL]",
  },
  {
    title: "ISO 9001:2015 Certified",
    icon: Award,
    rows: [
      { label: "Standard", value: credentials.iso.standard },
      { label: "Certification Body", value: "AIAO-BAR (USA) / World Registration Group (WRG)" },
      { label: "Certificate Number", value: "[ISO CERTIFICATE NUMBER TO BE PROVIDED BY NTRL]" },
    ],
    body: credentials.iso.note,
    placeholder: "[ISO CERTIFICATE PDF TO BE PROVIDED BY NTRL]",
  },
];

function CertificateCard({ certificate }: { certificate: Certificate }) {
  const [open, setOpen] = useState(false);
  const Icon = certificate.icon;

  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-card md:p-8">
      <span className="inline-flex size-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-xl font-bold text-foreground">{certificate.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{certificate.body}</p>
      <dl className="mt-6 divide-y divide-border border-y border-border">
        {certificate.rows.map((row) => (
          <div key={row.label} className="grid grid-cols-[minmax(0,9rem)_minmax(0,1fr)] gap-3 py-2.5">
            <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {row.label}
            </dt>
            <dd className="min-w-0 text-sm font-semibold text-foreground">{row.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-6">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">
              <FileText aria-hidden="true" />
              View Certificate
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{certificate.title}</DialogTitle>
              <DialogDescription>
                Certificate document viewer. Zoom, open and download options become available once
                NTRL supplies the original certificate file.
              </DialogDescription>
            </DialogHeader>
            <div className="flex min-h-64 flex-col items-center justify-center rounded-md border border-dashed border-border bg-surface p-8 text-center">
              <FileText className="size-8 text-muted-foreground" aria-hidden="true" />
              <p className="mt-4 text-sm font-semibold text-foreground">{certificate.placeholder}</p>
              <p className="mt-2 max-w-sm text-xs text-muted-foreground">
                Upload the certificate PDF or image and it will be displayed here in a zoomable
                viewer with download enabled, if permitted.
              </p>
            </div>
            <dl className="grid gap-2 text-sm sm:grid-cols-2">
              {certificate.rows.map((row) => (
                <div key={row.label} className="rounded-md bg-surface px-3 py-2">
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {row.label}
                  </dt>
                  <dd className="font-semibold text-foreground">{row.value}</dd>
                </div>
              ))}
            </dl>
          </DialogContent>
        </Dialog>
      </div>
    </article>
  );
}

export function CertificationCards() {
  return (
    <ul className="grid gap-6 lg:grid-cols-2">
      {certificates.map((certificate, i) => (
        <Reveal as="li" key={certificate.title} delay={i * 90}>
          <CertificateCard certificate={certificate} />
        </Reveal>
      ))}
    </ul>
  );
}

export function CertificationsSection() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow="Accreditation"
        title="Certifications & Accreditation"
        subtitle="Independent accreditation and certification supporting the credibility of every NTRL test report."
      />
      <div className="mt-10">
        <CertificationCards />
      </div>
      <div className="mt-10">
        <Button asChild variant="outline" size="lg">
          <Link to="/certifications">View Certifications</Link>
        </Button>
      </div>
    </Section>
  );
}
