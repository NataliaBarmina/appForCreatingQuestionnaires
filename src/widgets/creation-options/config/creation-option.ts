import { TCreationOption } from "../model/types";
import { AiIcon, PencilIcon } from "../ui/icons";
import { CreationMode } from "@entities/theme/model/creation-mode-button";

const translateRight = "hover:-translate-x-2 hover:-translate-y-2";
const translateLeft = "hover:-translate-y-2 hover:translate-x-2";

const top = "top-[9px]";
const left = "left-[9px]";
const right = "right-[9px]";
const bottom = "bottom-[9px]";

const roundedBL = "rounded-bl-3xl";
const roundedTR = "rounded-tr-3xl";
const roundedBR = "rounded-br-3xl";
const roundedTL = "rounded-tl-3xl";

export const creationOptions: TCreationOption[] = [
  {
    title: "buttonLabel.questions",
    subtitle: "buttonLabel.byAI",
    path: "/coursesThemesSelection",
    buttonID: CreationMode.AI_QUESTIONS,
    Icon: AiIcon,
    positionClasses: `${left} ${top} ${roundedBL} rounded-tl-[100%] ${roundedTR} ${translateRight} pl-8`,
  },
  {
    title: "buttonLabel.questions",
    subtitle: "buttonLabel.yourself",
    path: "/coursesThemesSelection",
    buttonID: CreationMode.MANUAL_QUESTIONS,
    Icon: PencilIcon,
    positionClasses: `${right} ${top} ${roundedBR} ${roundedTL} rounded-tr-[100%] ${translateLeft} pr-8`,
  },
  {
    title: "buttonLabel.themes",
    subtitle: "buttonLabel.byAI",
    path: "/courseWheel",
    buttonID: CreationMode.AI_THEMES,
    Icon: AiIcon,
    positionClasses: `${bottom} ${left} rounded-bl-[100%] ${roundedBR} ${roundedTL} ${translateRight} pl-8 pb-8`,
  },
  {
    title: "buttonLabel.themes",
    subtitle: "buttonLabel.yourself",
    path: "/courseWheel",
    buttonID: CreationMode.MANUAL_THEMES,
    Icon: PencilIcon,
    positionClasses: `${bottom} ${right} ${roundedBL} rounded-br-[100%]  ${roundedTR} ${translateLeft} pr-8 pb-8`,
  },
];
