import { TranslateFn } from "./types";
import { CreationModeButton } from "@shared/types/commonTypes";

export const getCircleConfig = (t: TranslateFn) => [
  {
    colSpan: "col-span-3",
    colStart: "col-start-2",
    rowSpan: "row-span-2",
    rowStart: "row-start-1",
    buttonLabel: t("buttonLabel.creating"),
    link: "/creating",
  },
  {
    colSpan: "col-span-2",
    colStart: "col-start-1",
    rowSpan: "row-span-3",
    rowStart: "row-start-4",
    buttonLabel: t("buttonLabel.editing"),
    buttonID: CreationModeButton.EDITING,
    link: "/coursesSelection",
  },
  {
    colSpan: "col-span-2",
    colStart: "col-start-4",
    rowSpan: "row-span-3",
    rowStart: "row-start-4",
    buttonLabel: t("buttonLabel.questionnaire"),
    link: "/questionnaire",
  },
];
