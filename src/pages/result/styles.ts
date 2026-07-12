import { cn } from "@lib/utils";

export const percentageOfCorrectAnswersStyles = cn(
  "mb-3 px-6 py-4",
  "bg-beige  inline-block rounded-full",
  "border border-solid border-pink-900",
  "shadow-lg shadow-pink-900",
);
export const greenContainerStyles = cn(
  "mx-auto mb-8 w-[95%] bg-green-800",
  "rounded-2xl",
  "border-2 border-solid border-gray-600",
  "md:w-[85%]",
);
export const grayContainerStyles = "mx-auto w-full bg-gray-200 pb-1";

export const wrongAnswersAnalysisHeader =
  "mb-2 py-8 text-xl font-bold text-black";

export const questionNumberHeader = "mb-2 p-4 text-lg font-bold text-blue-100";

export const centeredContentStyles = "mx-auto w-[90%]";
