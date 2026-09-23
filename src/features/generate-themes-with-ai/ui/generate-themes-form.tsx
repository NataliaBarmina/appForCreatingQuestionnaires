import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

import { GenerationSettings } from "@entities/generation-settings";
import { useGetThemes } from "@entities/theme";
import { LoadingError } from "@shared/ui";
import { useGenerateThemes } from "../api/use-generate-themes";

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
      <GenerationSettings
        generationCount={TOPICS_COUNT}
        count={count}
        onCountChange={onCountChange}
        onInstructionsChange={onInstructionsChange}
        instructions={instructions}
        countTitle={t("generateTheme.questionsCountTitle")}
        instructionPlaceholder={t("generateTheme.preferencesPlaceholder")}
        isFetching={isFetching}
        loadingModalMessage={t("generateTheme.generatingTitle")}
      />

      {isError && <LoadingError message={error.message} />}
    </form>
  );
};
