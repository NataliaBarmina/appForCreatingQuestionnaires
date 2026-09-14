import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import shuffle from "lodash-es/shuffle";

import { Preloader, LoadingError, EmptyState } from "@shared/ui";
import { useGetQuestions } from "@entities/question";
import { QuestionnaireForm } from "@features/take-questionnaire";

const QUESTIONS_LIMIT = 10;

export const QuestionnairePage = () => {
  const { t } = useTranslation();

  const { data, isFetching, isError, error } = useGetQuestions();

  const questions = useMemo(() => shuffle(data).slice(0, QUESTIONS_LIMIT), [data]);

  if (isFetching) {
    return <Preloader />;
  }

  if (isError) {
    return <LoadingError message={error?.message || t("error.loadQuestionsFailed")} />;
  }

  if (!data?.length) {
    return <EmptyState message={t("emptyState.noQuestions")} />;
  }

  return (
    <>
      <h1 className="pb-6">{t("survey.title")}</h1>
      <QuestionnaireForm questions={questions} />
    </>
  );
};
