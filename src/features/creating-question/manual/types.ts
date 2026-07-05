import { Control } from "react-hook-form";
import * as yup from "yup";
import { createQuestionSchema } from "./create-question-schema";

export type TAnswersField = {
  control: Control<TQuestionFields>;
  name: "selfWrittenAnswer1" | "selfWrittenAnswer2" | "selfWrittenAnswer3";
  placeholder: string;
  formLabel?: string;
};

export type TCustomTextAreaField = {
  control: Control<TQuestionFields>;
  disabled: boolean;
  name: "selfWrittenQuestion";
  formLabel: string;
  placeholder: string;
};

export type TFormAction = {
  onFormReset: () => void;
  handleCreateManualQuestion?: () => void;
  isFormValid: boolean;
  isSubmitting: boolean;
};

export type TFormForCreatingQuestionsYourself = {
  themeID: string;
  themeName: string;
  courseName: string;
};
export type TQuestionFields = yup.InferType<ReturnType<typeof createQuestionSchema>>;
