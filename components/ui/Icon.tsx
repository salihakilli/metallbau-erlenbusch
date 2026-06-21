import type { SVGProps } from "react";

export type IconName =
  | "railing"
  | "roof"
  | "blueprint"
  | "weld"
  | "repair"
  | "phone"
  | "mail"
  | "pin"
  | "clock"
  | "arrow"
  | "check"
  | "menu"
  | "close"
  | "spark";

const paths: Record<IconName, React.ReactNode> = {
  railing: (
    <>
      <path d="M3 20h18" />
      <path d="M5 20V8m4 12V8m4 12V8m4 12V8" />
      <path d="M4 8l16-4" />
      <path d="M4 12h16" />
    </>
  ),
  roof: (
    <>
      <path d="M3 11l9-6 9 6" />
      <path d="M5 10v10m14-10v10" />
      <path d="M5 20h14" />
      <path d="M9 20v-5h6v5" />
    </>
  ),
  blueprint: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
      <path d="M3 9h18M9 3v18" />
      <path d="M13 13h5v5" />
    </>
  ),
  weld: (
    <>
      <path d="M14 3l-3.5 9H14l-4 9 1.5-7H8l3-8z" />
      <path d="M18 14c1.5 1 1.5 3 0 4m2.5-6c2.5 1.6 2.5 4.4 0 6" />
    </>
  ),
  repair: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6z" />
    </>
  ),
  phone: (
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M4 12l5 5L20 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  spark: <path d="M12 3v4m0 10v4m9-9h-4M7 12H3m13.5-6.5l-2.8 2.8m-5.4 5.4l-2.8 2.8m11 0l-2.8-2.8M8.3 8.3 5.5 5.5" />,
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
