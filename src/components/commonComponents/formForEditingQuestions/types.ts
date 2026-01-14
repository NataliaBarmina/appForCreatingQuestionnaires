import { TFields } from "../createFields/createFields";
import { UseFormRegister, FieldErrors } from "react-hook-form";

export type TFormForEditingQuestions = {
  question?: string;
  correctAnswer?: string;
  wrongAnswer1?: string;
  wrongAnswer2?: string;
  course?: string;
  theme?: string;
  questionID?: string;
  closeDialog?: () => void;
};
export type TForm = {
  hasErrors?: boolean;
  onSubmit?: () => void;
  onDelete?: () => void;
  register?: UseFormRegister<TFields>;
  errors?: FieldErrors<TFields>;
  defaultValues?: TFields;
};
