import { Button } from "@shared/ui";
import { useTranslation } from "react-i18next";
import { useFormConfig } from "./useFormConfig";
import { QuestionItem } from "./questionItem";
import { useSelector } from "react-redux";
import { FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TRootState } from "@store/store";
import type { TQuestion } from "@shared/types/commonTypes";
import { useMemo, useEffect } from "react";
import shuffle from "lodash-es/shuffle";

export const FormQuestionnaire = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const questions = useSelector((state: TRootState) => state.questions.questions);

  const questionsList = useMemo(() => shuffle(Object.values(questions)).slice(0, 10), [questions]);

  useEffect(() => {
    if (!questionsList?.length) navigate("/creating");
  }, [questionsList, navigate]);

  const methods = useFormConfig(questionsList, navigate);

  const { handleSubmit, onSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="pb-10">
        <div className="px-4 py-7 text-[150%] font-bold">{t("header.answerToQuestion")}</div>

        {questionsList.map((item: TQuestion, index: number) => (
          <QuestionItem
            key={item.questionID}
            correctAnswer={item.answer_1}
            wrongAnswer_1={item.answer_2}
            wrongAnswer_2={item.answer_3}
            index={index}
            question={item.question}
            headerQuestionNumber={t("header.questionNumber")}
          />
        ))}

        <Button type="submit" buttonLabel={t("buttonLabel.save")} size="middle" />
      </form>
    </FormProvider>
  );
};
