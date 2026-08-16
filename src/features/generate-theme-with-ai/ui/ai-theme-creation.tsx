import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { cn } from "@shared/lib";

import { GenerationSettings } from "@entities/generation-settings";

// todo - должны отправляться существующие темы,  ИИ должен создавать айди тем
// todo - в запросе указать, чтобы искал в интернете наиболее часто всречающиеся темы на собеседованиях

const TOPICS_COUNT = [5, 10, 15, 20];

export const AIThemesCreation = ({ courseName }: { courseName: string }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [count, onCountChange] = useState(10);

  const [instructions, onInstructionsChange] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      count,
      instructions,
    };

    console.log(data);

    // TODO: запрос на генерацию

    navigate("/create/themes/ai-result", { state: { courseName } });
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
        {t("generateTheme.generate")}
      </button>
    </form>
  );
};
