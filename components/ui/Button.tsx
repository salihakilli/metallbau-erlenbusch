import type { ComponentProps, ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-400 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  // Primär: kräftiges Schwarz mit rotem Text (Marken-Akzent)
  primary:
    "bg-steel-950 text-accent-500 shadow-sm hover:text-accent-400 hover:shadow-md focus-visible:ring-offset-white",
  // Outline: weiß mit Rahmen, roter Text – füllt sich beim Hover dunkel
  outline:
    "border border-steel-300 bg-white text-accent-700 hover:border-steel-950 hover:bg-steel-950 hover:text-white focus-visible:ring-offset-white",
  // Ghost: für dunkle Flächen
  ghost:
    "border border-steel-400/40 text-steel-800 hover:border-steel-950 hover:bg-steel-950 hover:text-white focus-visible:ring-offset-white",
};

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: Variant;
  withArrow?: boolean;
  children: ReactNode;
};

export function ButtonLink({
  variant = "primary",
  withArrow = false,
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={`${base} ${variants[variant]} group ${className}`} {...props}>
      {children}
      {withArrow && (
        <Icon
          name="arrow"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </a>
  );
}
