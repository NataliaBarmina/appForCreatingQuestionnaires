import { useTranslation } from "react-i18next";
import { Preloader, LoadingError } from "@shared/ui";

import { useGetQuestions } from "../api/use-get-questions";
import { QuestionnaireContent } from "./questionnaire-content";

export const QuestionnaireForm = () => {
  const { t } = useTranslation();

  const { data, isLoading, isError, error } = useGetQuestions();

  if (isLoading) {
    return <Preloader />;
  }

  if (isError) {
    return <LoadingError message={error?.message || t("error.loadQuestionsFailed")} />;
  }

  if (!data?.length) {
    return <LoadingError message={t("error.loadQuestionsFailed")} />;
  }

  return <QuestionnaireContent questions={data} />;
};
