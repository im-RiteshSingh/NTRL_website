import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { company } from "@/data/siteData";

const title = "Terms & Conditions — NTRL, Patna";
const description =
  "Terms governing the use of the Nirvan Testing & Research Laboratory Pvt. Ltd. website and website enquiries.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero breadcrumb="Terms & Conditions" title="Terms & Conditions" />
      <Section>
        <div className="max-w-3xl space-y-5 leading-relaxed text-muted-foreground">
          <h2 className="text-xl font-bold text-foreground">Website content</h2>
          <p>
            Information on this website describes the services and credentials of {company.name}. The
            scope of any testing assignment is governed by the accepted quotation, the applicable
            specification and the laboratory&apos;s accredited scope.
          </p>
          <h2 className="pt-4 text-xl font-bold text-foreground">Enquiries</h2>
          <p>
            Submitting an enquiry does not create a contract. A testing assignment begins only after
            written confirmation between you and NTRL.
          </p>
          <h2 className="pt-4 text-xl font-bold text-foreground">Intellectual property</h2>
          <p>
            The NTRL name, logo and website content may not be reproduced without written permission.
          </p>
          <p className="rounded-md border border-dashed border-border bg-surface p-4 text-sm">
            [FULL TERMS &amp; CONDITIONS TEXT TO BE REVIEWED AND CONFIRMED BY NTRL]
          </p>
        </div>
      </Section>
    </>
  );
}
