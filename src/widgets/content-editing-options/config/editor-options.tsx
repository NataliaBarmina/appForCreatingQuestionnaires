import { TopicsIcon, QuestionIcon } from "../ui/icons";
import { ThemeEditMode } from "@entities/theme";
import { QuestionEditMode } from "@entities/question";

export const editorOptions = [
  {
    header: "editQuestions.questions",
    text: "editQuestions.questionSurvey",
    Icon: QuestionIcon,
    path: "/select/course-theme",
    buttonID: QuestionEditMode.EDIT,
  },
  {
    header: "editTheme.themes",
    text: "editTheme.themesName",
    Icon: TopicsIcon,
    path: "/select/course",
    buttonID: ThemeEditMode.EDIT,
  },
];
