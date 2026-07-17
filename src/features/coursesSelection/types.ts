export type TTabPanelProps = {
  children: React.ReactNode;
  index: number;
  value: number;
};
export type THandleTabChange = (event: React.SyntheticEvent, newValue: number) => void;

export type TTabsContainer = {
  tabValue: number;
  courseNames: string[];
  handleChange: THandleTabChange;
};
