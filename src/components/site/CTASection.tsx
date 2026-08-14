import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company } from "@/data/siteData";

export function CTASection({
  title = "Have a testing requirement for your project?",
  body = "Share your project details and testing scope. Our technical team will respond with the support you need.",
  primaryLabel = "Request Testing Quote",
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="blueprint-grid absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:py-16 lg:px-8">
        <div className="min-w-0">
          <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-primary-foreground/80">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="highlight" size="xl">
            <Link to="/contact" hash="enquiry">
              {primaryLabel}
            </Link>
          </Button>
          <Button asChild variant="onNavy" size="xl">
            <a href={company.phoneHref}>
              <Phone aria-hidden="true" />
              {company.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
