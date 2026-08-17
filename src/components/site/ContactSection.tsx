import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";
import { EnquiryForm } from "./EnquiryForm";
import { company } from "@/data/siteData";

export function ContactCards() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Reveal as="li">
        <ContactCard icon={Phone} title="Phone">
          <a href={company.phoneHref} className="font-semibold text-primary hover:underline">
            {company.phone}
          </a>
        </ContactCard>
      </Reveal>
      <Reveal as="li" delay={80}>
        <ContactCard icon={Mail} title="Email">
          {company.emails.map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="block break-all font-semibold text-primary hover:underline"
            >
              {email}
            </a>
          ))}
        </ContactCard>
      </Reveal>
      <Reveal as="li" delay={160}>
        <ContactCard icon={MapPin} title="Address">
          <address className="not-italic">{company.address}</address>
        </ContactCard>
      </Reveal>
      <Reveal as="li" delay={80}>
        <ContactCard icon={Clock} title="Working Hours">
          <span className="text-muted-foreground">{company.workingHours}</span>
        </ContactCard>
      </Reveal>
    <Reveal as="li" delay={160}>
  <ContactCard icon={MessageCircle} title="WhatsApp">
    <a
      href={`https://wa.me/${company.whatsapp.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-primary hover:underline"
    >
      {company.whatsapp}
    </a>
  </ContactCard>
</Reveal>
      <Reveal as="li" delay={240}>
        <ContactCard icon={MapPin} title="Website">
          <a
            href={company.websiteUrl}
            className="font-semibold text-primary hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            {company.website}
          </a>
        </ContactCard>
      </Reveal>
    </ul>
  );
}

function ContactCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Phone;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full gap-4 rounded-lg border border-border bg-card p-5 shadow-card">
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-primary/8 text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">{title}</h3>
        <div className="mt-1.5 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export function ContactMap() {
  return (
    <div className="overflow-hidden rounded-lg border border-border shadow-card">
      <iframe
        title="NTRL laboratory location on Google Maps — North S.K. Puri, Patna"
        src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapsQuery)}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-80 w-full border-0 md:h-96"
      />
    </div>
  );
}

export function ContactSection() {
  return (
    <Section id="enquiry" tone="surface">
      <SectionHeading
        eyebrow="Contact NTRL"
        title="Let's Discuss Your Testing Requirement"
        subtitle="Contact NTRL for testing, investigation and quality-assurance requirements."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <EnquiryForm />
        <div className="space-y-4">
          <ContactCards />
          <ContactMap />
        </div>
      </div>
    </Section>
  );
}
