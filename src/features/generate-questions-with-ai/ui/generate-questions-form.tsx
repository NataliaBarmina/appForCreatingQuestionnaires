import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "@shared/lib";

import { GenerationSettings } from "@entities/generation-settings";
import { useGetQuestionsByTheme } from "@widgets/question-editor";
import { useGenerateQuestions } from "../api/use-generate-questions";
import { LoadingError, LoadingModal } from "@shared/ui";

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

  const { data } = useGetQuestionsByTheme(themeName);

  const existingQuestions = data?.map((question) => question.question);

  const { refetch, isError, error, isFetching } = useGenerateQuestions({
    courseName,
    themeName,
    count,
    instructions,
    existingQuestions,
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await refetch();

    if (result.isSuccess) {
      return navigate("/create/questions/ai-result", { state: { courseName, themeName, themeId } });
    }
  };

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
      />

      <button
        type="submit"
        className={cn(
          "transition duration-200 hover:-translate-y-0.5",
          "mx-auto block min-w-[340px]",
          "rounded-xl px-8 py-4",
          "text-lg font-semibold text-white",
          "bg-[#181313] shadow-[0_10px_22px_rgba(0,0,0,0.3)]",
          "hover:bg-[#372d2d] hover:shadow-[0_14px_26px_rgba(0,0,0,0.35)] active:translate-y-0",

          !isFetching &&
            "hover:-translate-y-0.5 hover:bg-[#372d2d] hover:shadow-[0_14px_26px_rgba(0,0,0,0.35)]",

          isFetching && "cursor-not-allowed opacity-60"
        )}
      >
        {isFetching ? t("generateQuestions.generatingTitle") : t("generateQuestions.generate")}
      </button>
      {isFetching && <LoadingModal message={t("generateQuestions.generatingTitle")} />}
      {isError && <LoadingError message={error.message} />}
    </form>
  );
};
