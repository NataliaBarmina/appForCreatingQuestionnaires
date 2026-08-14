import { CreateIcon } from "../ui/create-icon";
import { EditIcon } from "../ui/edit-icon";
import { SurveyIcon } from "../ui/survey-icon";

export const linkOptions = [
  { icon: CreateIcon, path: "/creationOptionsPage", buttonLabel: "navigation.creating" },
  { icon: EditIcon, path: "/editorPage", buttonLabel: "navigation.editing" },
  { icon: SurveyIcon, path: "/questionnaire", buttonLabel: "navigation.questionnaire" },
];
