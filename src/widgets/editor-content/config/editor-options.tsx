import { EditMOde } from "@entities/theme";
import { TopicsIcon, QuestionIcon } from "../ui/icons";

export const editorOptions = [
  {
    header: "header.questions",
    text: "header.questionSurvey",
    Icon: QuestionIcon,
    path: "/coursesThemesSelection",
    buttonID: EditMOde.EDIT_QUESTIONS,
  },
  {
    header: "header.themes",
    text: "header.themesName",
    Icon: TopicsIcon,
    path: "/courseWheel",
    buttonID: EditMOde.EDIT_THEMES,
  },
];
