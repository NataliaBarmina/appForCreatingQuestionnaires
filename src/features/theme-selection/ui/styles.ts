import { cn } from "@shared/shadcn";

export const headerClasses = cn(
  "p-4 text-[150%] font-bold",
  "sm:pb-6 sm:pt-8",
  "md:pb-10 md:pt-12",
  "pb-16 2xl:pt-20"
);

export const formContainerClasses = cn(
  "border-2 border-solid border-gray-400",
  "mx-auto bg-green-800",
  "xs:w-[100vw]",
  "s:w-[90vw] s:rounded-2xl",
  "md:w-[65vw]",
  "lg:w-[55vw]",
  "xl:w-[50vw]",
  "2xl:w-[45vw]"
);

export const mainContainerStyles = cn(
  "mx-auto w-full rounded-none bg-green-800",
  "px-0 py-[20px] pb-[25px]",
  "sm:w-[90%] sm:rounded-[15px]"
);

export const popoverTriggerStyles =
  "block py-3 px-2 mb-8 xs:text-[3vw] w-[40%] s:text-[2.5vw] sm:text-[2.1vw]  md:landscape:text-[1.5vw]  lg:landscape:text-[1.3vw]  xl:landscape:text-[1.1vw]  2xl:landscape:text-[0.8vw] mx-auto bg-stone-500  text-pink-100 font-bold shadow-lg shadow-stone-800 rounded-lg py-2 hover:cursor-pointer hover:shadow-xl hover:shadow-zinc-950 hover:border hover:border-solid hover:border-zinc-950";

export const listItemStyles = {
  border: "4px solid rgb(180, 209, 210)",
  bgcolor: "rgb(240,248,255)",
  width: "90%",
  margin: "0 auto",
  marginBottom: "20px",
  ":hover": {
    backgroundColor: "#e3b6a6",
    boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.5)",
  },
};
