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

type MyProps = {
  defaultValue: string; //TODO:?надо убрать
  placeholder: string;
  disabled: boolean;
  styles: string;
  fieldName: keyof TFields;
  register: UseFormRegister<TFields>;
};

type MyPropsInput = {
  type: string; //только инпут
};
//todo: добавить rouded?, проверить паддинги и маржины
export const Textarea = ({
  defaultValue = "", //TODO:надо убрать
  placeholder = "",
  disabled = false, //TODO:надо убрать?
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
        defaultValue={defaultValue}
        disabled={disabled}
        {...register(fieldName)}
      ></textarea>
    </div>
  );
};

export const Input = ({
  defaultValue = "", //TODO:надо убрать
  type = "text",
  placeholder = "",
  disabled = false, //TODO:надо убрать?
  fieldName,
  register,
  styles,
}: MyProps & MyPropsInput) => {
  return (
    <div>
      <input
        className={classNames(
          "w-[100%] bg-blue-100 font-bold italic",
          "border-4 border-solid border-blue-200",
          "placeholder:text-sm placeholder:text-purple-900",
          "mb-2 py-2 pl-4",
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
