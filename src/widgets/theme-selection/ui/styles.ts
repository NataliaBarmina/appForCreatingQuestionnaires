import { cn } from "@shared/lib";

export const mainContainerStyles = cn(
  "mx-auto w-full rounded-none bg-green-800",
  "px-0 py-[20px] pb-[25px]",
  "sm:w-[90%] sm:rounded-[15px]"
);

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
