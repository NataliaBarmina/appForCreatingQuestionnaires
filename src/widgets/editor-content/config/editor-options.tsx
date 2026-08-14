import { TopicsIcon, QuestionIcon } from "../ui/icons";
import { ThemeEditMode } from "@entities/theme";
import { QuestionEditMode } from "@entities/question";

export const editorOptions = [
  {
    header: "editQuestions.questions",
    text: "editQuestions.questionSurvey",
    Icon: QuestionIcon,
    path: "/coursesThemesSelection",
    buttonID: QuestionEditMode.EDIT,
  },
  {
    header: "editTheme.themes",
    text: "editTheme.themesName",
    Icon: TopicsIcon,
    path: "/courseWheel",
    buttonID: ThemeEditMode.EDIT,
  },
];
