import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function Icon({ children, className = "", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-5 w-5 ${className}`}
      {...props}
    >
      {children}
    </svg>
  );
}

export const Icons = {
  sun: (props: IconProps) => (
    <Icon {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </Icon>
  ),
  bolt: (props: IconProps) => (
    <Icon {...props}>
      <path d="M13 2 4 14h7l-1 8 10-13h-7l1-7Z" />
    </Icon>
  ),
  leaf: (props: IconProps) => (
    <Icon {...props}>
      <path d="M20 4c-7.5 0-13 4.8-13 11a5 5 0 0 0 5 5c6.2 0 8-8.5 8-16Z" />
      <path d="M4 20c3-6 7-9 13-11" />
    </Icon>
  ),
  chart: (props: IconProps) => (
    <Icon {...props}>
      <path d="M3 3v18h18" />
      <path d="m7 15 4-4 3 3 5-7" />
    </Icon>
  ),
  home: (props: IconProps) => (
    <Icon {...props}>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </Icon>
  ),
  building: (props: IconProps) => (
    <Icon {...props}>
      <path d="M4 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17" />
      <path d="M16 8h3a1 1 0 0 1 1 1v12" />
      <path d="M8 7h4M8 11h4M8 15h4" />
    </Icon>
  ),
  tractor: (props: IconProps) => (
    <Icon {...props}>
      <path d="M3 17h2" />
      <path d="M5 17a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" />
      <path d="M16 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
      <path d="M10 13V6h4l3 7" />
      <path d="M14 9h4" />
    </Icon>
  ),
  users: (props: IconProps) => (
    <Icon {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Icon>
  ),
  shield: (props: IconProps) => (
    <Icon {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-5" />
    </Icon>
  ),
  monitor: (props: IconProps) => (
    <Icon {...props}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
      <path d="m8 12 2-2 2 2 4-5" />
    </Icon>
  ),
  wrench: (props: IconProps) => (
    <Icon {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-3-3 2.4-2.4Z" />
    </Icon>
  ),
  map: (props: IconProps) => (
    <Icon {...props}>
      <path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
      <path d="M9 3v15" />
      <path d="M15 6v15" />
    </Icon>
  ),
  phone: (props: IconProps) => (
    <Icon {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.15 12 19.8 19.8 0 0 1 2.08 3.18 2 2 0 0 1 4.06 1h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.65 2.81a2 2 0 0 1-.45 2.11L8 8.91a16 16 0 0 0 7.09 7.09l1.27-1.27a2 2 0 0 1 2.11-.45c.91.3 1.85.52 2.81.65A2 2 0 0 1 22 16.92Z" />
    </Icon>
  ),
  menu: (props: IconProps) => (
    <Icon {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </Icon>
  ),
  x: (props: IconProps) => (
    <Icon {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </Icon>
  ),
  chevron: (props: IconProps) => (
    <Icon {...props}>
      <path d="m6 9 6 6 6-6" />
    </Icon>
  ),
  arrow: (props: IconProps) => (
    <Icon {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </Icon>
  ),
  star: (props: IconProps) => (
    <Icon {...props}>
      <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3L5.8 21 7 14.2 2 9.3l6.9-1L12 2Z" />
    </Icon>
  ),
};
