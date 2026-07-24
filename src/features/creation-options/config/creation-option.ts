import { TCreationOption } from "../model/types";
import { AiIcon, PencilIcon } from "../ui/icons";
import { TCreationModeButton } from "@entities/model/creation-mode-button";

const translateRight = "hover:-translate-x-2 hover:-translate-y-2";
const translateLeft = "hover:-translate-y-2 hover:translate-x-2";

const top = "top-[8px]";
const left = "left-[8px]";
const right = "right-[8px]";
const bottom = "bottom-[8px]";

const roundedBL = "rounded-bl-3xl";
const roundedTR = "rounded-tr-3xl";
const roundedBR = "rounded-br-3xl";
const roundedTL = "rounded-tl-3xl";

export const creationOptions: TCreationOption[] = [
  {
    title: "buttonLabel.questions",
    subtitle: "buttonLabel.byAI",
    path: "/coursesThemesSelection",
    buttonID: TCreationModeButton.AI_QUESTIONS,
    Icon: AiIcon,
    positionClasses: `${left} ${top} ${roundedBL} rounded-tl-[100%] ${roundedTR} ${translateRight}`,
  },
  {
    title: "buttonLabel.questions",
    subtitle: "buttonLabel.yourself",
    path: "/coursesThemesSelection",
    buttonID: TCreationModeButton.MANUAL_QUESTIONS,
    Icon: PencilIcon,
    positionClasses: `${right} ${top} ${roundedBR} ${roundedTL} rounded-tr-[100%] ${translateLeft}`,
  },
  {
    title: "buttonLabel.themes",
    subtitle: "buttonLabel.byAI",
    path: "/themesCreation",
    buttonID: TCreationModeButton.AI_THEMES,
    Icon: AiIcon,
    positionClasses: `${bottom} ${left} rounded-bl-[100%] ${roundedBR} ${roundedTL} ${translateRight}`,
  },
  {
    title: "buttonLabel.themes",
    subtitle: "buttonLabel.yourself",
    path: "/themesCreation",
    buttonID: TCreationModeButton.MANUAL_THEMES,
    Icon: PencilIcon,
    positionClasses: `${bottom} ${right} ${roundedBL} rounded-br-[100%]  ${roundedTR} ${translateLeft}`,
  },
];
