import { cn } from "@shared/lib";

export const viewBoxStyles = cn(
  "block h-auto w-full max-w-[680px] overflow-visible ",
  "[filter:drop-shadow(0_18px_20px_rgba(0,0,0,0.22))]"
);

export const bigCircleStyles = "fill-green-800 stroke-green-800 [stroke-width:5px]";

export const sectorContentStyles = cn(
  "transition-transform duration-200 ease-out ",
  "group-hover:translate-x-[var(--sector-x)] ",
  "group-hover:translate-y-[var(--sector-y)] ",
  "group-focus-visible:translate-x-[var(--sector-x)] ",
  "group-focus-visible:translate-y-[var(--sector-y)]"
);

export const pathStyles = cn(
  "fill-[radial-gradient(circle_at_top,_#0f2d2a,_#071716)] ",
  "stroke-[#587b7b] ",
  "[stroke-linejoin:round] ",
  "[stroke-width:3px] ",
  "transition-colors duration-200 ",
  "group-hover:fill-[#223a36] ",
  "group-focus-visible:fill-[#223a36] ",
  "group-focus-visible:stroke-[#9fffd5] ",
  "group-active:fill-[#223a36]"
);

export const textStyles = "pointer-events-none select-none fill-[#fca5a5]/80 text-lg font-medium";

export const smallCircleStyles = cn(
  "pointer-events-none fill-[#5f8181] stroke-[#456c6b] ",
  "[stroke-width:3px] ",
  "[filter:drop-shadow(0_5px_4px_rgba(0,0,0,0.2))]"
);
