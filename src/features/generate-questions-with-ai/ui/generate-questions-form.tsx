import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { GenerationSettings } from "@entities/generation-settings";
import { useGetQuestionsByTheme } from "@entities/question";
import { useGenerateQuestions } from "../api/use-generate-questions";
import { LoadingError, Preloader } from "@shared/ui";

const QUESTIONS_COUNT = [2, 5, 10, 15, 20];

export const GenerateQuestionsForm = ({
  courseName,
  themeName,
  themeId,
}: {
  courseName: string;
  themeName: string;
  themeId: string;
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [count, onCountChange] = useState(10);
  const [instructions, onInstructionsChange] = useState("");

  const { data, isPending, isError, error } = useGetQuestionsByTheme(themeId);

  const existingQuestions = data?.map((question) => question.question);

  const { refetch, isFetching } = useGenerateQuestions({
    courseName,
    themeName,
    count,
    instructions,
    existingQuestions,
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!data || isFetching) return;

    const result = await refetch();

    if (result.isSuccess) {
      return navigate("/create/questions/ai-result", { state: { courseName, themeName, themeId } });
    }
  };

  if (isPending) {
    return <Preloader />;
  }

  if (isError && !data) {
    return <LoadingError message={error.message} />;
  }

  return (
    <form onSubmit={onSubmit}>
      <GenerationSettings
        generationCount={QUESTIONS_COUNT}
        count={count}
        onCountChange={onCountChange}
        onInstructionsChange={onInstructionsChange}
        instructions={instructions}
        countTitle={t("generateQuestions.questionsCountTitle")}
        instructionPlaceholder={t("generateQuestions.preferencesPlaceholder")}
        isFetching={isFetching}
        loadingModalMessage={t("generateQuestions.generatingTitle")}
      />
    </form>
  );
};
