import { site } from "@/lib/site";
import { BrandMark } from "@/components/brand/BrandMark";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const main = tone === "light" ? "text-white" : "text-steel-950";
  const sub = tone === "light" ? "text-steel-400" : "text-steel-500";

  return (
    <a
      href="/"
      className="group flex items-center gap-3"
      aria-label={`${site.name} – Startseite`}
    >
      <BrandMark
        className={`h-9 w-9 shrink-0 transition-colors group-hover:text-accent-600 ${main}`}
      />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-base font-semibold tracking-wide ${main}`}>
          Metallbau Erlenbusch
        </span>
        <span className={`mt-1 text-[11px] font-medium uppercase tracking-[0.18em] ${sub}`}>
          Meisterbetrieb
        </span>
      </span>
    </a>
  );
}
