import { cn } from "@lib/utils";

export const classesForLinks = cn(
  "block p-4 bg-black  w-[100%] mb-4",
  "text-center text-[140%] text-white",
  "shadow-lg shadow-stone-900",
  "hover:text-pink-900 focus:text-emerald-400",
  "md:mb-[8vh] md:shadow-none lg:mb-[11vh]"
);

export const classesForNavPanel = cn(
  "mx-auto block w-screen align-top",
  "shadow-lg shadow-[#241515]",
  "md:inline-block md:min-h-[86vh] md:w-[30%]",
  "lg:pt-[13vh]"
);

export const classesForFixingNavPanel = cn(
  "md:fixed md:left-0 md:top-[25vh] md:w-[30%]",
  "lg:left-[7.5vw] lg:w-[25.5vw]",
  "xl:left-[10vw] xl:w-[24vw]",
  "2xl:left-[15vw] 2xl:w-[20.5vw]"
);
