import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { TFields } from "@shared/createFields/textarea";
import { TQuestion } from "@shared/types/commonTypes";
import { NavigateFunction } from "react-router-dom";

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
import { useMemo } from "react";

export const useFormConfig = (questionsList: TQuestion[], navigate: NavigateFunction) => {
  const schema = useMemo(
    () =>
      yup.object({
        radioInputFromSurvey: yup
          .array()
          .of(yup.string().required("Выберите вариант ответа"))
          .min(questionsList.length, "Ответьте на все вопросы")
          .required("Выберите хотя бы один ответ"),
      }),
    [questionsList.length]
  );

  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TFields> = (data) => {
    navigate("/resultsOfTheQuestionnaire", {
      state: { answers: data.radioInputFromSurvey, questionsList },
    });
  };

  return {
    ...methods,
    onSubmit,
  };
};
