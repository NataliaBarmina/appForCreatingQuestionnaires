import { cn } from "@lib/utils";

export const containerStyle = "pb-6";

export const headerStyle = "pb-8 pt-12 text-[150%] font-bold";

export const circleStyles = cn(
  "mx-auto rounded-full bg-[rgb(48,80,80)]/85",
  "h-[80vw] w-[80vw]",
  "s:h-[65vw] s:w-[65vw]",
  "md:landscape:h-[60vw] md:landscape:w-[60vw]",
  "lg:landscape:h-[48vw] lg:landscape:w-[48vw]",
  "xl:landscape:h-[40vw] xl:landscape:w-[40vw]",
  "2xl:landscape:h-[32vw] 2xl:landscape:w-[32vw]"
);
export const flexContainer = "flex h-[100%] w-[100%] flex-col justify-evenly";
