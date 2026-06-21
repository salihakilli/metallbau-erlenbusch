import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const isCenter = align === "center";
  const titleColor = tone === "light" ? "text-white" : "text-steel-950";
  const introColor = tone === "light" ? "text-steel-300" : "text-steel-600";

  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
        <span className="h-px w-8 bg-accent-600" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        className={`mt-5 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${introColor}`}>{intro}</p>
      )}
    </div>
  );
}
