import { AiIcon, PencilIcon } from "../ui/icons";
import { ThemeCreationMode } from "@entities/theme";
import { QuestionCreationMode } from "@entities/question";

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

export const creationOptions = [
  {
    title: "creationOptions.questions",
    subtitle: "creationOptions.byAI",
    path: "/select/course-theme",
    buttonID: QuestionCreationMode.AI,
    Icon: AiIcon,
    positionClasses: `${left} ${top} ${roundedBL} rounded-tl-[100%] ${roundedTR} ${translateRight} pl-8`,
  },
  {
    title: "creationOptions.questions",
    subtitle: "creationOptions.manually",
    path: "/select/course-theme",
    buttonID: QuestionCreationMode.MANUAL,
    Icon: PencilIcon,
    positionClasses: `${right} ${top} ${roundedBR} ${roundedTL} rounded-tr-[100%] ${translateLeft} pr-8`,
  },
  {
    title: "creationOptions.themes",
    subtitle: "creationOptions.byAI",
    path: "/select/course",
    buttonID: ThemeCreationMode.AI,
    Icon: AiIcon,
    positionClasses: `${bottom} ${left} rounded-bl-[100%] ${roundedBR} ${roundedTL} ${translateRight} pl-8 pb-8`,
  },
  {
    title: "creationOptions.themes",
    subtitle: "creationOptions.manually",
    path: "/select/course",
    buttonID: ThemeCreationMode.MANUAL,
    Icon: PencilIcon,
    positionClasses: `${bottom} ${right} ${roundedBL} rounded-br-[100%]  ${roundedTR} ${translateLeft} pr-8 pb-8`,
  },
];
