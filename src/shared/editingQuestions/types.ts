import { UseFormRegister, FieldErrors } from "react-hook-form";

export type TFields = {
  topicName: string; //FormForCreatingTheme
  selfWrittenTopicName?: string; //FormForCreatingQuestionsYourself
  selfWrittenQuestion?: string; //FormForCreatingQuestionsYourself
  selfWrittenAnswer1?: string; //FormForCreatingQuestionsYourself
  selfWrittenAnswer2?: string; //FormForCreatingQuestionsYourself
  selfWrittenAnswer3?: string; //FormForCreatingQuestionsYourself
  questionForEditing?: string; //QuestionList
  answerForEditing1?: string; //QuestionList
  answerForEditing2?: string; //QuestionList
  answerForEditing3?: string; //QuestionList
  radioInputFromSurvey?: string[];
};

export type TFormForEditingQuestions = {
  question?: string;
  correctAnswer?: string;
  wrongAnswer1?: string;
  wrongAnswer2?: string;
  course?: string;
  theme?: string;
  questionID: string;
  closeDialog: () => void;
};
export type TForm = {
  hasErrors?: boolean;
  onSubmit?: () => void;
  onDelete?: () => void;
  register?: UseFormRegister<TFields>;
  errors?: FieldErrors<TFields>;
  defaultValues?: TFields;
};
