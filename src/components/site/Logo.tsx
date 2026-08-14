import { Link } from "@tanstack/react-router";

import logo from "@/assets/ntrl-logo.png.asset.json";
import { company } from "@/data/siteData";
import { cn } from "@/lib/utils";

export function Logo({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      className="flex min-w-0 items-center gap-3"
      aria-label={`${company.shortName} — ${company.name}, home`}
    >
      <img
        src={logo.url}
        alt="NTRL — Nirvan Testing & Research Laboratory logo"
        width={64}
        height={64}
        className={cn(
          "shrink-0 object-contain transition-all",
          compact ? "h-9 w-9" : "h-11 w-11",
        )}
      />
      <span className="min-w-0">
        <span
          className={cn(
            "block font-display font-extrabold leading-none tracking-tight",
            compact ? "text-lg" : "text-xl",
            inverted ? "text-primary-foreground" : "text-primary",
          )}
        >
          NTRL
        </span>
        <span
          className={cn(
            "mt-0.5 hidden max-w-[15rem] truncate text-[11px] leading-tight sm:block lg:max-w-none",
            inverted ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          Nirvan Testing &amp; Research Laboratory Pvt. Ltd.
        </span>
      </span>
    </Link>
  );
}
