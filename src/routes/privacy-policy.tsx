import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { company } from "@/data/siteData";

const title = "Privacy Policy — NTRL, Patna";
const description =
  "How Nirvan Testing & Research Laboratory Pvt. Ltd. handles information submitted through this website.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero breadcrumb="Privacy Policy" title="Privacy Policy" />
      <Section>
        <div className="max-w-3xl space-y-5 leading-relaxed text-muted-foreground">
          <p>
            This policy explains how {company.name} handles information submitted through this
            website.
          </p>
          <h2 className="pt-4 text-xl font-bold text-foreground">Information we collect</h2>
          <p>
            We collect only the details you provide in the testing enquiry form — your name,
            organisation, phone number, email address, project information and any document you
            choose to attach.
          </p>
          <h2 className="pt-4 text-xl font-bold text-foreground">How we use it</h2>
          <p>
            Enquiry details are used only to respond to your testing requirement and to prepare a
            quotation or technical clarification. We do not sell or rent your information.
          </p>
          <h2 className="pt-4 text-xl font-bold text-foreground">Contact</h2>
          <p>
            For any question about this policy, contact us at{" "}
            <a href={`mailto:${company.emails[0]}`} className="font-semibold text-primary hover:underline">
              {company.emails[0]}
            </a>
            .
          </p>
          <p className="rounded-md border border-dashed border-border bg-surface p-4 text-sm">
            [FULL PRIVACY POLICY TEXT TO BE REVIEWED AND CONFIRMED BY NTRL]
          </p>
        </div>
      </Section>
    </>
  );
}
