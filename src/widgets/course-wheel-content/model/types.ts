import { type CSSProperties } from "react";
import { COURSES } from "@entities/course";

export type TCourse = (typeof COURSES)[number];

export type TSectorStyles = CSSProperties & {
  "--sector-x": string;
  "--sector-y": string;
};
