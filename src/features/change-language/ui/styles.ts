import { cn } from "@shared/lib";

export const containerStyles = cn(
  "mr-4 flex overflow-hidden rounded-md",
  "border border-white/30",
  "bg-transparent",
  "md:mr-8",
  "lg:mr-4"
);

export const getLanguageButtonStyles = (isActive: boolean) =>
  cn(
    "flex min-w-12 items-center justify-center",
    "px-1 py-1 text-sm md:py-2 lg:text-md",
    "transition-colors duration-200",
    "hover:bg-white/10",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-[#FCA5A5]",
    "focus-visible:ring-inset",
    isActive ? "bg-[#FCA5A5] text-[#172626]" : "text-white/70"
  );
