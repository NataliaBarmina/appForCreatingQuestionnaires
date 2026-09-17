import { cn } from "@shared/lib";

export const inputStyles =
  "rounded-md border bg-slate-50 px-4 py-4 border-2 border-[#8FB5B2] w-[80%] mb-20";

export const containerButtonStyles = "flex w-full justify-evenly gap-4";

export const buttonStyles =
  "rounded-md py-2 border-2 border-[#8FB5B2]/50 transition-colors text-sm";

export const showPasswordButtonStyles = cn(
  buttonStyles,
  "bg-[#416866]/30 text-[#243B3B]/80 hover:bg-[#416866] px-4"
);

export const submitButtonStyles = cn(
  buttonStyles,
  "bg-[#FCA5A5] hover:bg-[#F0A8AB]/80 px-8 text-[#243B3B]"
);

export const errorStyles = "bg-red-100 rounded-md";
