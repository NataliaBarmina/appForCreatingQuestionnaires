import { TopicsIcon, QuestionIcon } from "../ui/icons";
import { ThemeEditMode } from "@entities/theme";
import { QuestionEditMode } from "@entities/question";

export const editorOptions = [
  {
    header: "header.questions",
    text: "header.questionSurvey",
    Icon: QuestionIcon,
    path: "/coursesThemesSelection",
    buttonID: QuestionEditMode.EDIT,
  },
  {
    header: "header.themes",
    text: "header.themesName",
    Icon: TopicsIcon,
    path: "/courseWheel",
    buttonID: ThemeEditMode.EDIT,
  },
];
