import { Preloader } from "@shared/ui";
import { useGetQuestions } from "./use-get-questions";
import { LoadingError } from "@shared/ui/loading-error";
import { QuestionnaireForm } from "../../features/form-questionnaire/ui/questionnaire-form";
import { useTranslation } from "react-i18next";

export const Questionnaire = () => {
  const { t } = useTranslation();

  const { data = [], isLoading, isError, error } = useGetQuestions();

  if (isLoading) {
    return <Preloader />;
  }

  if (isError) {
    return <LoadingError message={error.message} />;
  }

  if (!data?.length) {
    return <LoadingError message={t("error.loadQuestionsFailed")} />;
  }

  return <QuestionnaireForm questions={data} />;
};
