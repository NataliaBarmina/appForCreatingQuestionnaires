import { TTopic } from "@common/dataExample";

export type TTabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};
export type THandleTabChange = (
  event: React.SyntheticEvent,
  newValue: number,
) => void;

export type TCoursesSelectionProps = {
  tabValue?: number;
  selectedCourseName?: string;
  courseThemes?: TTopic[];
  courseNames?: string[];
  handleChange?: THandleTabChange;
};
