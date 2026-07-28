export type TTabPanelProps = {
  children: React.ReactNode;
  index: number;
  value: number;
};
export type THandleTabChange = (event: React.SyntheticEvent, newValue: number) => void;

export type TCourseSelection = {
  tabValue: number;
  courses: string[];
  handleChange: THandleTabChange;
};
