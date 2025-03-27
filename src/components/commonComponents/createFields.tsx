import classNames from "classnames";
import { UseFormRegister, FieldError } from "react-hook-form";

export type TFields = {
  topicName?: string; //FormForCreatingQuestionsByAI
  linkToSource?: string; //FormForCreatingQuestionsByAI
  selfWrittenTopicName?: string; //FormForCreatingQuestionsYourself
  selfWrittenQuestion?: string; //FormForCreatingQuestionsYourself
  selfWrittenAnswer1?: string; //FormForCreatingQuestionsYourself
  selfWrittenAnswer2?: string; //FormForCreatingQuestionsYourself
  selfWrittenAnswer3?: string; //FormForCreatingQuestionsYourself
  questionForEditing?: string; //QuestionList
  answerForEditing1?: string; //QuestionList
  answerForEditing2?: string; //QuestionList
  answerForEditing3?: string; //QuestionList
  questionFromSurvey?: string; // questionnaire
  styles?: string;
  value?: string;
  id?: string;
};

export type MyProps = {
  placeholder?: string;
  styles: string;
  fieldName: keyof TFields;
  register: UseFormRegister<TFields>;
  error?: FieldError;
};

export const Textarea = ({
  placeholder = "",
  fieldName,
  register,
  styles,
}: MyProps) => {
  return (
    <div>
      <textarea
        className={classNames(
          "w-[100%] bg-blue-100 font-bold italic",
          "placeholder:text-sm placeholder:text-purple-900",
          "border-4 border-solid border-blue-200",
          "mb-2 py-4 pl-4 text-[120%]",
          styles,
        )}
        placeholder={placeholder}
        {...register(fieldName)}
      ></textarea>
    </div>
  );
};

export const BlockedField = ({ styles, value, id }: TFields) => {
  return (
    <div
      id={id}
      className={classNames(
        "w-[100%] bg-blue-100 text-left",
        "rounded-md border-4 border-solid border-blue-200",
        "mb-2 px-4 py-3 text-[120%]",
        styles,
      )}
    >
      {value}
    </div>
  );
};
