import { Control } from "react-hook-form";

export type TQuestionFields = {
  selfWrittenQuestion: string;
  selfWrittenAnswer1: string;
  selfWrittenAnswer2: string;
  selfWrittenAnswer3: string;
};

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
