import type { SVGProps } from "react";

/**
 * Bildmarke aus dem offiziellen Logo (public/logo-mark.svg),
 * inline eingebunden und über `currentColor` einfärbbar – damit die Marke
 * auf hellen wie dunklen Flächen sauber funktioniert.
 */
export function BrandMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 273.16 260.13"
      fill="currentColor"
      role="img"
      aria-label="Metallbau Erlenbusch Bildmarke"
      {...props}
    >
      <polygon points="229.24 25.39 136.61 78.88 0 0 0 32.1 136.61 110.97 229.24 57.49 229.24 166.88 273.16 141.52 273.16 .04 229.24 25.39" />
      <polygon points="44.02 174.61 44.02 149.86 136.63 203.32 136.61 171.25 44.02 117.8 44.02 96.38 136.61 149.84 136.61 118.31 44.02 64.86 44.02 64.86 0 39.44 0 181.26 44.02 206.67 136.61 260.13 273.16 181.29 273.16 149.24 136.61 228.08 44.02 174.61" />
    </svg>
  );
}
