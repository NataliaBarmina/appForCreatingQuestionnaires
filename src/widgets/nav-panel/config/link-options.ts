import { CreateIcon } from "../ui/create-icon";
import { EditIcon } from "../ui/edit-icon";
import { SurveyIcon } from "../ui/survey-icon";

export const linkOptions = [
  { icon: CreateIcon, path: "/creationOptionsPage", buttonLabel: "buttonLabel.creating" },
  { icon: EditIcon, path: "/coursesThemesSelection", buttonLabel: "buttonLabel.editing" },
  { icon: SurveyIcon, path: "/questionnaire", buttonLabel: "buttonLabel.questionnaire" },
];
