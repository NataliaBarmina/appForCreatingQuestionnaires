import { Textarea } from "@shared/createFields";
import { UseFormRegister } from "react-hook-form";
import { FieldError } from "react-hook-form";

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

export type TTextarea = {
  placeholder?: string;
  styles: string;
  fieldName: keyof TFields;
  register: UseFormRegister<TFields>;
  error?: FieldError;
  disabled?: boolean;
};

export const TextAreaBlock = ({ placeholder, fieldName, register, error, disabled }: TTextarea) => {
  return (
    <div>
      <div className="mx-auto">
        <Textarea
          placeholder={placeholder}
          register={register}
          fieldName={fieldName}
          styles=""
          disabled={disabled}
        />

        {error && (
          <p className="mx-auto w-[90%] bg-blue-100 text-xl font-bold text-pink-900">
            {error.message}
          </p>
        )}
      </div>
    </div>
  );
};
