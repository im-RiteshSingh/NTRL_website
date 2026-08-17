import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import logo from "@/assets/logo.png";
import { company, nav, services } from "@/data/siteData";

const footerServices = services.slice(0, 9);

export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="NTRL logo"
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-12 shrink-0 rounded bg-background object-contain p-1"
              />
              <span className="font-display text-xl font-extrabold">NTRL</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
              {company.name} is a NABL accredited and ISO 9001:2015 certified infrastructure
              construction materials testing laboratory in Patna, Bihar, providing independent
              third-party testing, investigation and quality-assurance services.
            </p>
            <dl className="mt-5 space-y-1 text-xs text-primary-foreground/60">
              {company.statutory.map((item) => (
                <div key={item.label} className="flex gap-2">
                  <dt className="font-semibold">{item.label}:</dt>
                  <dd className="min-w-0 break-all">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <nav aria-label="Quick links">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-highlight">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-primary-foreground/75 transition-colors hover:text-highlight"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-highlight">
              Services
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="text-primary-foreground/75 transition-colors hover:text-highlight"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-highlight">
              Contact
            </h2>
            <ul className="mt-4 space-y-4 text-sm text-primary-foreground/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-highlight" aria-hidden="true" />
                <address className="not-italic">{company.address}</address>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-highlight" aria-hidden="true" />
                <a href={company.phoneHref} className="hover:text-highlight">
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-highlight" aria-hidden="true" />
                <span className="min-w-0">
                  {company.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block break-all hover:text-highlight"
                    >
                      {email}
                    </a>
                  ))}
                </span>
              </li>
              <li>
  <a
    href={`https://wa.me/${company.whatsapp.replace(/\D/g, "")}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Chat with NTRL on WhatsApp at ${company.whatsapp}`}
    className="inline-flex w-full items-center gap-3 rounded-lg border border-primary-foreground/15 px-3 py-2.5 text-sm text-primary-foreground/80 transition-all hover:border-highlight/40 hover:bg-primary-foreground/5 hover:text-highlight sm:w-auto"
  >
    <MessageCircle
      className="size-5 shrink-0 text-highlight"
      aria-hidden="true"
    />

    <span className="min-w-0">
      <span className="block text-xs text-primary-foreground/50">
        WhatsApp
      </span>

      <span className="block break-all font-medium">
        {company.whatsapp}
      </span>
    </span>
  </a>
</li>
            </ul>
          
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-primary-foreground/65 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>&copy; 2026 {company.name} All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-highlight">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-highlight">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
