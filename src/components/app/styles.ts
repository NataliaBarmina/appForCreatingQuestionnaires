import { cn } from "@lib/utils";

export const classesForLinks = cn(
  "block p-4 bg-black  w-[100%] mb-4",
  "text-center text-[140%] text-white",
  "shadow-lg shadow-stone-900",
  "hover:text-pink-900 focus:text-emerald-400",
  "md:mb-[8vh] md:shadow-none lg:mb-[11vh]",
);

export const classesForContainer = cn(
  "mx-auto text-center",
  "md:min-h-dvh md:bg-black",
  "lg:w-[85%]",
  "xl:w-[80%]",
  "2xl:w-[70%]",
);
export const classesForHead = cn(
  "z-50 mb-2 h-[12vh] w-[100%]",
  "bg-green-800 shadow-lg shadow-stone-900",
  "md:fixed md:left-0 md:top-0",
  "lg:left-[7.5vw] lg:w-[85%]",
  "xl:left-[10vw] xl:w-[80%]",
  "2xl:left-[14.9vw] 2xl:w-[70%]",
);
export const classesForNavPanel = cn(
  "mx-auto block w-screen align-top",
  "shadow-lg shadow-[#241515]",
  "md:inline-block md:min-h-[86vh] md:w-[30%]",
  "lg:pt-[13vh]",
);
export const classesForFixingNavPanel = cn(
  "md:fixed md:left-0 md:top-[30vh] md:w-[30%]",
  "lg:left-[7.5vw] lg:w-[25.5vw]",
  "xl:left-[10vw] xl:w-[24vw]",
  "2xl:left-[15vw] 2xl:w-[20.5vw]",
);
export const classesForOutlet = cn(
  "mx-auto w-screen bg-[#D3D6D6] text-center",
  "shadow-lg shadow-[#241515]",
  "md:inline-block md:min-h-[86vh] md:w-[70%]",
);
