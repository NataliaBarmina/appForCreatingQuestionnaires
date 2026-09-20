import { cn } from "@shared/lib";

export const containerStyles =
  "w-full grid md:w-[min(100%,75dvh)] grid-cols-5 grid-rows-7 items-center justify-items-center [container-type:inline-size] pt-[2cqw]";

export const bigCircleStyles = cn(
  "z-0 aspect-square w-[76cqw] rounded-full",
  "col-span-5 col-start-1",
  "row-span-7 row-start-1",
  "border-[6px] border-dotted border-stone-600"
);

export const smallCirclesStyles = cn(
  "aspect-square rounded-full bg-[#BCC8BE] lg:bg-stone-600",
  "shadow-md shadow-stone-950",
  "text-center leading-tight text-black/70 lg:text-pink-100",
  "text-[clamp(0.8rem,4cqw,1.2rem)]",
  "s:text-[clamp(0.875rem,3.2cqw,1.3rem)]",
  "transition-all duration-200 cursor-pointer",
  "hover:scale-105 hover:shadow-xl hover:shadow-zinc-950",
  "w-[35cqw]",
  "s:w-[30cqw]",
  "sm:w-[27cqw]"
);
