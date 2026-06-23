import { site } from "@/lib/site";

/**
 * Vollständiges Marken-Logo (public/logo.svg) – wird in Header und Footer
 * verwendet. `tone="light"` färbt es für dunkle Flächen weiß.
 */
export function BrandLogo({
  tone = "dark",
  className = "h-12 w-auto",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <a
      href="/"
      aria-label={`${site.name} – Startseite`}
      className="inline-block"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt={site.legalName}
        className={`${className} ${
          tone === "light" ? "[filter:brightness(0)_invert(1)]" : ""
        }`}
      />
    </a>
  );
}
