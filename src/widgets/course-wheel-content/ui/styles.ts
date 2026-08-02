import { cn } from "@shared/lib";

export const viewBoxStyles =
  "block h-auto w-full max-w-[680px] overflow-visible [filter:drop-shadow(0_18px_20px_rgba(0,0,0,0.22))]";
export const biCircleStyles = "fill-[#FCA5A5]/70 stroke-[#3e6867] [stroke-width:5px]";

export const pathStyles =
  "stroke-[#587b7b] transition-[fill,filter,stroke,stroke-width] duration-200 [stroke-linejoin:round] [stroke-width:5px] group-focus-visible:stroke-[#9fffd5] group-focus-visible:[stroke-width:5px]";

export const pathActiveStyles = cn(pathStyles, "fill-[#223a36]");
export const pathNotActiveStyles = cn(
  pathStyles,
  "fill-[#111e1c] group-hover:fill-[#1a2c29] group-hover:brightness-125 group-active:fill-[#223a36]"
);
export const textStyles = "pointer-events-none select-none fill-white text-lg font-semibold";
export const smallCircleStyles =
  "pointer-events-none fill-[#5f8181] stroke-[#456c6b] [filter:drop-shadow(0_5px_4px_rgba(0,0,0,0.2))] [stroke-width:3px]";
