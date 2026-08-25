import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

import { GenerationSettings } from "@entities/generation-settings";
import { useGetThemes } from "@entities/theme";
import { cn } from "@shared/lib";
import { LoadingError } from "@shared/ui";
import { generateThemes } from "../api/generate-themes";
import { LoadingModal } from "@shared/ui";

const TOPICS_COUNT = [2, 5, 10, 15, 20];

export const GenerateThemesForm = ({ courseName }: { courseName: string }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [count, onCountChange] = useState(10);
  const [instructions, onInstructionsChange] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { data } = useGetThemes(courseName);

  const existingThemes = data?.map((theme) => theme.themeName);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    setError("");

    try {
      const result = await generateThemes({ courseName, count, instructions, existingThemes });

      sessionStorage.setItem("generatedThemes", result);

      navigate("/create/themes/ai-result", { state: { courseName } });
    } catch (error) {
      console.error(error);

      setError(t("generateTheme.error"));
    } finally {
      setIsLoading(false);
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

      {isLoading && <LoadingModal message={t("generateTheme.generatingThemes")} />}

      <button
        type="submit"
        disabled={isLoading}
        className={cn(
          "transition duration-200 hover:-translate-y-0.5",
          "mx-auto block min-w-[340px]",
          "rounded-xl px-8 py-4",
          "text-lg font-semibold text-white",
          "bg-[#181313] shadow-[0_10px_22px_rgba(0,0,0,0.3)]",

          !isLoading &&
            "hover:-translate-y-0.5 hover:bg-[#372d2d] hover:shadow-[0_14px_26px_rgba(0,0,0,0.35)]",

          isLoading && "cursor-not-allowed opacity-60"
        )}
      >
        {isLoading ? t("generateTheme.generatingThemes") : t("generateTheme.generate")}
      </button>

      {error && <LoadingError message={error} />}
    </form>
  );
};
