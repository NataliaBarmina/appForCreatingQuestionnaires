import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "@shared/lib";

import { TSelectedTheme } from "@entities/theme";
import { GenerationSettings } from "@entities/generation-settings";

// todo - должны отправляться существующие вопросы,  ИИ должен создавать айди вопросов
// todo - в запросе указать, чтобы искал в интернете наиболее часто всречающиеся вопросы на собеседованиях
const QUESTIONS_COUNT = [5, 10, 15, 20];

export const GenerateQuestionsForm = ({ themeId, courseName, themeName }: TSelectedTheme) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [count, onCountChange] = useState(10);

  const [instructions, onInstructionsChange] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      count,
      instructions,
    };

    console.log(data);

    // TODO: запрос на генерацию вопросов

    navigate("/questionsCreatedByAI", { state: { themeId, courseName, themeName } });
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
          "hover:bg-[#372d2d] hover:shadow-[0_14px_26px_rgba(0,0,0,0.35)] active:translate-y-0"
        )}
      >
        {t("generateQuestions.generate")}
      </button>
    </form>
  );
};
