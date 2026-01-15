import { TTopic } from "@store/commonTypes";

export type TTabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};
export type THandleTabChange = (
  event: React.SyntheticEvent,
  newValue: number,
) => void;

export type TCoursesSelection = {
  tabValue?: number;
  courseName?: string;
  themeName?: string;
  courseNames?: string[];
  handleChange?: THandleTabChange;
};
