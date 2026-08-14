import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { company, nav } from "@/data/siteData";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-primary-deep text-primary-foreground lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 text-xs sm:px-6 lg:px-8">
          <p className="min-w-0 truncate text-primary-foreground/80">
            NABL Accredited (Lab Code {"T-8940"}) &middot; ISO 9001:2015 Certified &middot; Patna, Bihar
          </p>
          <a
            href={company.phoneHref}
            className="inline-flex shrink-0 items-center gap-2 font-medium hover:text-highlight"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            {company.phone}
          </a>
        </div>
      </div>

      <div
        className={cn(
          "border-b border-border bg-background/95 backdrop-blur transition-all",
          scrolled ? "shadow-card" : "",
        )}
      >
        <div
          className={cn(
            "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 transition-all sm:px-6 lg:px-8",
            scrolled ? "py-2" : "py-3",
          )}
        >
          <Logo compact={scrolled} />

          <div className="flex items-center gap-2">
            <nav aria-label="Main navigation" className="hidden xl:block">
              <ul className="flex items-center gap-1">
                {nav.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      activeOptions={{ exact: item.to === "/" }}
                      activeProps={{ className: "text-brand" }}
                      inactiveProps={{ className: "text-foreground/75" }}
                      className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-brand"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Button asChild variant="brand" className="hidden md:inline-flex">
              <Link to="/contact" hash="enquiry">
                Request Testing Quote
              </Link>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="xl:hidden"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="max-h-[calc(100vh-6rem)] overflow-y-auto border-b border-border bg-background shadow-card xl:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <ul className="divide-y divide-border">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "text-brand" }}
                    className="block py-3 text-base font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="grid gap-2 py-4">
              <Button asChild variant="brand" size="lg">
                <Link to="/contact" hash="enquiry" onClick={() => setOpen(false)}>
                  Request Testing Quote
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={company.phoneHref}>Call {company.phone}</a>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
