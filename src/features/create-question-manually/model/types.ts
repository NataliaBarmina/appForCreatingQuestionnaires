import { Control } from "react-hook-form";

type TAnswerFieldName = "selfWrittenAnswer1" | "selfWrittenAnswer2" | "selfWrittenAnswer3";

export type TAnswerField = {
  name: TAnswerFieldName;
  placeholder: string;
  formLabel: string;
};

export type TQuestionFields = {
  selfWrittenQuestion: string;
  selfWrittenAnswer1: string;
  selfWrittenAnswer2: string;
  selfWrittenAnswer3: string;
};

export type TField = {
  control: Control<TQuestionFields>;
  disabled: boolean;
  formLabel: string;
  placeholder: string;
};
