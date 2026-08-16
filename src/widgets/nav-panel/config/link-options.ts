import { CreateIcon } from "../ui/create-icon";
import { EditIcon } from "../ui/edit-icon";
import { SurveyIcon } from "../ui/survey-icon";

export const linkOptions = [
  { icon: CreateIcon, path: "/create", buttonLabel: "navigation.creating" },
  { icon: EditIcon, path: "/edit", buttonLabel: "navigation.editing" },
  { icon: SurveyIcon, path: "/questionnaire", buttonLabel: "navigation.questionnaire" },
];
