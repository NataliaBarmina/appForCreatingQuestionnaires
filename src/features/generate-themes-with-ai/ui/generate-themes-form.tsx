import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

import { GenerationSettings } from "@entities/generation-settings";
import { useGetThemes } from "@entities/theme";
import { cn } from "@shared/lib";
import { LoadingError, LoadingModal } from "@shared/ui";
import { useGenerateThemes } from "../api/generate-themes";

const TOPICS_COUNT = [2, 5, 10, 15, 20];

export const GenerateThemesForm = ({ courseName }: { courseName: string }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [count, onCountChange] = useState(10);
  const [instructions, onInstructionsChange] = useState("");

  const { data: themes = [] } = useGetThemes(courseName);

  const existingThemes = themes?.map((theme) => theme.themeName);

  const { isFetching, refetch, isError, error } = useGenerateThemes({
    courseName,
    count,
    instructions,
    existingThemes,
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Не даём браузеру стандартно отправить форму

    const result = await refetch(); // Вручную запускаем query и ждём результат

    if (result.isSuccess) {
      return navigate("/create/themes/ai-result", { state: { courseName } });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="pt-0">{t("generateTheme.withAI")}</h2>

      <GenerationSettings
        generationCount={TOPICS_COUNT}
        count={count}
        onCountChange={onCountChange}
        onInstructionsChange={onInstructionsChange}
        instructions={instructions}
        countTitle={t("generateTheme.questionsCountTitle")}
        instructionPlaceholder={t("generateTheme.preferencesPlaceholder")}
      />

      {isFetching && <LoadingModal message={t("generateTheme.generatingTitle")} />}

      <button
        type="submit"
        disabled={isFetching}
        className={cn(
          "transition duration-200 hover:-translate-y-0.5",
          "mx-auto block min-w-[340px]",
          "rounded-xl px-8 py-4",
          "text-lg font-semibold text-white",
          "bg-[#181313] shadow-[0_10px_22px_rgba(0,0,0,0.3)]",

          !isFetching &&
            "hover:-translate-y-0.5 hover:bg-[#372d2d] hover:shadow-[0_14px_26px_rgba(0,0,0,0.35)]",

          isFetching && "cursor-not-allowed opacity-60"
        )}
      >
        {isFetching ? t("generateTheme.generatingTitle") : t("generateTheme.generate")}
      </button>

      {isError && <LoadingError message={error.message} />}
    </form>
  );
};
