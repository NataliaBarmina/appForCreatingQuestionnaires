import { cn } from "@shared/lib";

export const pinkContainerStyles = cn(
  "w-full bg-[#ffa79c] px-2",
  "s:border-[3px] s:border-solid s:border-[#ff806d]",
  "rounded-xl"
);

export const buttonsContainerStyles = cn(
  "mx-auto my-2 flex w-full flex-row justify-between gap-4",
  "sm:w-[90%] sm:my-4",
  "md:w-[80%]",
  "lg:w-[60%]"
);

export const errorsStyles = "textarea-styles px-1 border-pink-900";

export const fieldStyles = cn(
  "textarea-styles border-none rounded-md",
  "text-[0.8rem] py-1 mb-0",

  "s:py-2  s:text-[0.9rem]",
  "sm:border-solid sm:border-[#ff806d]"
);
