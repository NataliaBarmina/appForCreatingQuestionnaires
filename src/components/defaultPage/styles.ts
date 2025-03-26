import { cn } from "@lib/utils";

export const containerStyles =
  "grid grid-cols-5 grid-rows-7 items-center justify-items-center py-14";

export const bigCircleStyles = cn(
  "z-0 col-span-5 col-start-1 row-span-7 row-start-1 h-[70vw] w-[70vw]",
  "rounded-full border-8 border-dotted border-stone-700",
  "md:landscape:h-[55vw] md:landscape:w-[55vw]",
  "md:portrait:h-[60vh] md:portrait:w-[60vh]",
  "lg:landscape:h-[48vw] lg:landscape:w-[48vw]",
  "lg:portrait:h-[55vh] lg:portrait:w-[55vh]",
  "2xl:landscape:h-[38vw] 2xl:landscape:w-[38vw]",
  "2xl:portrait:h-[50vh] 2xl:portrait:w-[50vh]",
);
const baseCircleClasses =
  "flex items-center justify-center rounded-full bg-stone-700 text-pink-100 shadow-md shadow-stone-950";
const hoverCircleClasses =
  "hover:border-2 hover:border-solid hover:border-zinc-800 hover:cursor-pointer hover:shadow-xl hover:shadow-zinc-950";
const responsiveCircleSizes = {
  default: "h-[30vw] w-[30vw]",
  mdLandscape: "md:landscape:h-[20vw] md:landscape:w-[20vw]",
  mdPortrait: "md:portrait:h-[27vh] md:portrait:w-[27vh]",
  lgLandscape: "lg:landscape:h-[18vw] lg:landscape:w-[18vw]",
  lgPortrait: "lg:portrait:h-[24vh] lg:portrait:w-[24vh]",
  xlLandscape: "2xl:landscape:h-[14vw] 2xl:landscape:w-[14vw]",
  xlPortrait: "2xl:portrait:h-[20vh] 2xl:portrait:w-[20vh]",
};

export const smallCirclesStyles = cn(
  baseCircleClasses,
  hoverCircleClasses,
  responsiveCircleSizes.default,
  responsiveCircleSizes.mdLandscape,
  responsiveCircleSizes.mdPortrait,
  responsiveCircleSizes.lgLandscape,
  responsiveCircleSizes.lgPortrait,
  responsiveCircleSizes.xlLandscape,
  responsiveCircleSizes.xlPortrait,
);
export const circlesTextStyles = cn(
  "text-[3.5vw]",
  "md:portrait:text-[2.5vh] md:landscape:text-[2.3vw]",
  "lg:landscape:text-[2vw]",
  "2xl:landscape:text-[1.6vw]",
);
