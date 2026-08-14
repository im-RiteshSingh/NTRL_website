import { Link } from "@tanstack/react-router";
import { FileText } from "lucide-react";

/** Mobile-only persistent conversion CTA. */
export function FloatingQuoteButton() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <Link
        to="/contact"
        hash="enquiry"
        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-brand text-sm font-semibold text-brand-foreground shadow-card"
      >
        <FileText className="size-4" aria-hidden="true" />
        Request Testing Quote
      </Link>
    </div>
  );
}
