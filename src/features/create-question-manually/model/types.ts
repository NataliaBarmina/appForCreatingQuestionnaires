import { Control } from "react-hook-form";

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
