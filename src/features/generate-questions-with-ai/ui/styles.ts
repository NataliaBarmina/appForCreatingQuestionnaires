import { cn } from "@shared/lib";

export const sectionStyles =
  "mb-5 rounded-2xl bg-green-800 px-8 pt-6 pb-8 shadow-[0_12px_30px_rgba(0,0,0,0.2)] ";

export const sectionTitleStyles = "pb-6 text-xl font-semibold";

export const buttonHoverStyles = "transition duration-200 hover:-translate-y-0.5";

export const commonButtonStyles = cn("border-2", buttonHoverStyles);

export const optionButtonStyles = `flex min-h-[105px] flex-col items-center justify-center gap-3 rounded-2xl`;

export const selectedButtonStyles = `border-[#e3a0a7] bg-[#0000001A] text-[#efb0b6]`;

export const unselectedButtonStyles = `border-white/20 bg-transparent text-white/90 hover:border-[#e3a0a7]/60`;

export const optionsGridStyles = "mt-2 grid grid-cols-3 gap-5";

export const buttonStyles = cn(
  buttonHoverStyles,
  "mx-auto block min-w-[340px]",
  "rounded-xl px-8 py-4",
  "text-lg font-semibold text-white",
  "bg-[#181313] shadow-[0_10px_22px_rgba(0,0,0,0.3)]",
  "hover:bg-[#372d2d] hover:shadow-[0_14px_26px_rgba(0,0,0,0.35)] active:translate-y-0"
);
