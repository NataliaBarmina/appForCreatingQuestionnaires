import { cn } from "@shared/lib/utils";

export const containerStyles = cn(
  "relative aspect-square w-[90%] max-w-[640px] ",
  "overflow-hidden rounded-full bg-green-800",
  "shadow-[0_8px_24px_rgba(0,0,0,0.3),inset_0_0_0_2px_rgba(0,0,0,0.1)]"
);

export const baseButtonStyles = `
    absolute
    bg-[#18211f]
    text-[#fca5a5]/80
    border-[5px]
    border-solid
    border-[#587b7b]
    shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]
    transition-all
    duration-200
    hover:bg-[#22312e]
    hover:brightness-110
    hover:shadow-[0_12px_30px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(167,243,208,0.25)]
   + h-[calc(50%_-_10px)]
   + w-[calc(50%_-_10px)]
  `;

export const centralCircleStyles = cn(
  "pointer-events-none absolute left-1/2 top-1/2 z-20",
  "aspect-square w-[30%]",
  "-translate-x-1/2 -translate-y-1/2",
  "rounded-full bg-[#547776]",
  "shadow-[0_8px_24px_rgba(0,0,0,0.3),inset_0_0_0_2px_rgba(0,0,0,0.1)]"
);
