import type { ComponentProps, ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-600 text-white shadow-sm hover:bg-accent-700 hover:shadow-md focus-visible:ring-offset-white",
  outline:
    "border border-steel-300 text-steel-900 hover:border-steel-900 hover:bg-steel-900 hover:text-white focus-visible:ring-offset-white",
  ghost:
    "border border-white/25 text-white hover:bg-white hover:text-steel-950 focus-visible:ring-offset-steel-950",
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
