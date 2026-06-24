import { cn } from "@lib/utils";

export const classesForContainer = cn(
  "mx-auto text-center",
  "md:min-h-dvh md:bg-black",
  "lg:w-[85%]",
  "xl:w-[80%]",
  "2xl:w-[70%]"
);

export const classesForOutlet = cn(
  "mx-auto w-screen bg-[#D3D6D6] text-center",
  "shadow-lg shadow-[#241515]",
  "md:inline-block md:min-h-[86vh] md:w-[70%]"
);
