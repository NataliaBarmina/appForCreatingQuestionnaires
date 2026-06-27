export type TNavigateToPage = (link: string, buttonLabel: string) => void;

export type TCircleProps = {
  colSpan: string;
  colStart: string;
  rowSpan: string;
  rowStart: string;
  buttonLabel: string;
  link: string;
  onClick: (link: string, buttonLabel: string) => void;
};
