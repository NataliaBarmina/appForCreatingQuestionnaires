import classNames from "classnames";
import { UseFormRegister } from "react-hook-form";

export type TFields = {
  topicName?: string; //FormForCreatingQuestionsByAI
  linkToSource?: string; //FormForCreatingQuestionsByAI
  questionExample?: string; //QuestionsCreatedByAI
  answerExample1?: string; //QuestionsCreatedByAI
  answerExample2?: string; //QuestionsCreatedByAI
  answerExample3?: string; //QuestionsCreatedByAI
  selfWrittenTopicName?: string; //FormForCreatingQuestionsYourself
  selfWrittenQuestion?: string; //FormForCreatingQuestionsYourself
  selfWrittenAnswer1?: string; //FormForCreatingQuestionsYourself
  selfWrittenAnswer2?: string; //FormForCreatingQuestionsYourself
  selfWrittenAnswer3?: string; //FormForCreatingQuestionsYourself
  questionForEditing?: string; //QuestionList
  answerForEditing1?: string; //QuestionList
  answerForEditing2?: string; //QuestionList
  answerForEditing3?: string; //QuestionList
  CorrectnessOfAnswer?: string; //QuestionList
  questionFromSurvey?: string; // questionnaire
  questionForAnalysis?: string; //resultsOfTheQuestionnaire
  rightAnswerForAnalysis?: string; //resultsOfTheQuestionnaire
  wrongAnswerForAnalysis?: string; //resultsOfTheQuestionnaire
  stringRightAnswerForAnalysis?: string; //resultsOfTheQuestionnaire
  stringWrongAnswerForAnalysis?: string; //resultsOfTheQuestionnaire
};

interface MyProps {
  defaultValue: string; //?надо убрать
  placeholder: string;
  disabled: boolean;
  styles: string;
  fieldName: keyof TFields;
  register: UseFormRegister<TFields>;
}

interface MyPropsInput {
  type: string; //только инпут
}

export const Textarea = ({
  defaultValue = "", //надо убрать
  placeholder = "",
  disabled = false,
  fieldName,
  register,
  styles,
}: MyProps) => {
  return (
    <div>
      <textarea
        className={classNames(
          "w-[100%] bg-blue-100",
          "border-4 border-solid border-blue-200",
          "placeholder:font-bold placeholder:text-purple-900",
          "mb-2 p-1",
          "p-2 text-[120%]",
          styles,
        )}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        {...register(fieldName)}
      ></textarea>
    </div>
  );
};

export const Input = ({
  defaultValue = "", //надо убрать
  type = "text",
  placeholder = "",
  disabled = false,
  fieldName,
  register,
  styles,
}: MyProps & MyPropsInput) => {
  return (
    <div>
      <input
        className={classNames(
          "w-[100%] bg-blue-100",
          "border-4 border-solid border-blue-200",
          "placeholder:font-bold placeholder:text-purple-900",
          "mb-2 p-1",
          styles,
        )}
        defaultValue={defaultValue}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        {...register(fieldName)}
      />
    </div>
  );
};
