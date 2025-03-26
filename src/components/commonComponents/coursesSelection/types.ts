import { ReactNode, SyntheticEvent } from "react";
import { TTopic, TSubject } from "@common/dataExample";

export type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};
export type HandleTabChange = (
  event: React.SyntheticEvent,
  newValue: number,
) => void;

export type CoursesSelectionProps = {
  tabValue?: number;
  selectedCourseName?: string;
  courseThemes?: TTopic[];
  courseNames?: string[];
  handleChange?: HandleTabChange;
};
