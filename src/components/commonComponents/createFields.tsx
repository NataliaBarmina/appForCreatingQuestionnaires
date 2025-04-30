import { UseFormRegister, FieldError } from "react-hook-form";
import { cn } from "@lib/utils";

//todo: проверить какие поля используются для Textarea, неиспользующиеся разнести по компонентам
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
};

export type TTextarea = {
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
}: TTextarea) => {
  const textareaStyles = cn(
    "w-[100%] bg-blue-100 font-bold italic",
    "placeholder:text-sm placeholder:text-purple-900",
    "border-4 border-solid border-blue-200",
    "mb-2 py-4 pl-4 text-[120%]",
    styles,
  );

  return (
    <div>
      <textarea
        className={textareaStyles}
        placeholder={placeholder}
        {...register(fieldName)}
      ></textarea>
    </div>
  );
};
