import { Link } from "@tanstack/react-router";
import { ImageOff } from "lucide-react";
import { useState } from "react";

import galleryEquipment from "@/assets/gallery-equipment.jpg";
import galleryField from "@/assets/gallery-field.jpg";
import galleryInfra from "@/assets/gallery-infra.jpg";
import heroLab from "@/assets/hero-lab.jpg";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";
import { Button } from "@/components/ui/button";
import { galleryCategories } from "@/data/siteData";

type GalleryItem = {
  category: (typeof galleryCategories)[number];
  src?: string;
  alt: string;
  caption: string;
};

const items: GalleryItem[] = [
  {
    category: "Laboratory",
    src: heroLab,
    alt: "Materials testing laboratory interior with compression testing machine, sieve sets and steel workbenches",
    caption: "Laboratory interior and testing infrastructure",
  },
  {
    category: "Equipment",
    src: galleryEquipment,
    alt: "Concrete cube compression testing machine with digital control panel and concrete samples",
    caption: "Concrete compression testing equipment",
  },
  {
    category: "Field Testing",
    src: galleryField,
    alt: "Engineers carrying out on-site soil investigation with a field testing rig at a construction site",
    caption: "On-site soil investigation and field testing",
  },
  {
    category: "Construction Testing",
    src: galleryInfra,
    alt: "Highway and bridge infrastructure under construction",
    caption: "Construction and infrastructure project testing support",
  },
  {
    category: "Equipment",
    alt: "Placeholder for NTRL laboratory equipment photograph",
    caption: "[LABORATORY EQUIPMENT PHOTOS TO BE PROVIDED BY NTRL]",
  },
  {
    category: "Laboratory",
    alt: "Placeholder for NTRL bitumen and soil section photograph",
    caption: "[LABORATORY SECTION PHOTOS TO BE PROVIDED BY NTRL]",
  },
  {
    category: "Team",
    alt: "Placeholder for NTRL technical team photograph",
    caption: "[TEAM PHOTOS TO BE PROVIDED BY NTRL]",
  },
  {
    category: "Construction Testing",
    alt: "Placeholder for concrete cube testing activity photograph",
    caption: "[CONSTRUCTION TESTING PHOTOS TO BE PROVIDED BY NTRL]",
  },
];

export function GalleryGrid() {
  const [active, setActive] = useState<"All" | (typeof galleryCategories)[number]>("All");
  const filtered = active === "All" ? items : items.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery by category">
        {(["All", ...galleryCategories] as const).map((category) => (
          <Button
            key={category}
            size="sm"
            variant={active === category ? "default" : "outline"}
            aria-pressed={active === category}
            onClick={() => setActive(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, i) => (
          <Reveal as="li" key={`${item.category}-${item.caption}`} delay={(i % 3) * 80}>
            <figure className="h-full overflow-hidden rounded-lg border border-border bg-card shadow-card">
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              ) : (
                <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 bg-surface text-muted-foreground">
                  <ImageOff className="size-7" aria-hidden="true" />
                  <span className="px-4 text-center text-xs">Photograph pending</span>
                </div>
              )}
              <figcaption className="flex items-start justify-between gap-3 p-4">
                <span className="min-w-0 text-sm font-medium text-foreground">{item.caption}</span>
                <span className="shrink-0 rounded bg-primary/8 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {item.category}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
      <p className="mt-8 rounded-md border border-dashed border-border bg-surface p-4 text-xs leading-relaxed text-muted-foreground">
        Representative imagery is used where NTRL photographs are not yet available. All placeholder
        tiles will be replaced with the company&apos;s original laboratory, equipment, field-testing
        and team photographs once supplied.
      </p>
    </div>
  );
}

export function GalleryPreview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Inside The Laboratory"
        title="Laboratory & Equipment"
        subtitle="A modern materials testing laboratory equipped as per IS specifications and calibrated by NABL certified calibration agencies."
      />
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.slice(0, 3).map((item, i) => (
          <Reveal as="li" key={item.caption} delay={i * 90}>
            <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
              <img
                src={item.src}
                alt={item.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="p-4 text-sm font-medium text-foreground">
                {item.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
      <div className="mt-10">
        <Button asChild variant="outline" size="lg">
          <Link to="/gallery">View Gallery</Link>
        </Button>
      </div>
    </Section>
  );
}
