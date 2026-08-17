import { Link } from "@tanstack/react-router";
import { ImageOff } from "lucide-react";
import { useState } from "react";

import galleryEquipment01 from "@/assets/gallery-equipment-01.jpg";
import galleryEquipment02 from "@/assets/gallery-equipment-02.jpg";
import galleryEquipment03 from "@/assets/gallery-equipment-03.jpg";
import galleryEquipment04 from "@/assets/gallery-equipment-04.jpg";
import galleryEquipment05 from "@/assets/gallery-equipment-05.jpg";
import galleryEquipment06 from "@/assets/gallery-equipment-06.jpg";
import galleryEquipment07 from "@/assets/gallery-equipment-07.jpg";
import galleryLaboratory01 from "@/assets/gallery-laboratory-01.jpg";
import galleryLaboratory02 from "@/assets/gallery-laboratory-02.jpg";
import galleryLaboratory03 from "@/assets/gallery-laboratory-03.jpg";
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
    src: galleryEquipment01,
    alt: "NTRL laboratory testing equipment",
    caption: "Laboratory testing equipment",
  },
  {
    category: "Equipment",
    src: galleryEquipment02,
    alt: "NTRL laboratory testing equipment",
    caption: "Advanced testing equipment",
  },
  {
    category: "Equipment",
    src: galleryEquipment03,
    alt: "NTRL laboratory testing equipment",
    caption: "Materials testing equipment",
  },
  {
    category: "Equipment",
    src: galleryEquipment04,
    alt: "NTRL laboratory testing equipment",
    caption: "Laboratory equipment and facilities",
  },
  {
    category: "Equipment",
    src: galleryEquipment05,
    alt: "NTRL laboratory testing equipment",
    caption: "Testing and measurement equipment",
  },
  {
    category: "Equipment",
    src: galleryEquipment06,
    alt: "NTRL laboratory testing equipment",
    caption: "Construction materials testing equipment",
  },
  {
    category: "Equipment",
    src: galleryEquipment07,
    alt: "NTRL laboratory testing equipment",
    caption: "Laboratory testing infrastructure",
  },
  {
    category: "Laboratory",
    src: galleryLaboratory01,
    alt: "NTRL laboratory testing facility",
    caption: "Laboratory testing facility",
  },
  {
    category: "Laboratory",
    src: galleryLaboratory02,
    alt: "NTRL laboratory testing facility",
    caption: "Laboratory testing section",
  },
  {
    category: "Laboratory",
    src: galleryLaboratory03,
    alt: "NTRL laboratory testing facility",
    caption: "Materials testing laboratory",
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
    category: "Team",
    alt: "Placeholder for NTRL technical team photograph",
    caption: "[TEAM PHOTOS TO BE PROVIDED BY NTRL]",
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
