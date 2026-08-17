import { useTranslation } from "react-i18next";
import { cn } from "@shared/lib";

type TGenerationSettingsProps = {
  generationCount: number[];
  count: number;
  onCountChange: (count: number) => void;
  instructions: string;
  onInstructionsChange: (instructions: string) => void;
  countTitle: string;
  instructionPlaceholder: string;
};

export const sectionStyles =
  "mb-8 rounded-2xl bg-green-800 px-8 pt-8 pb-10 shadow-[0_12px_30px_rgba(0,0,0,0.2)] ";

export const sectionTitleStyles = "pb-6 text-xl font-semibold";

//! используется при генерации вопросов/тем. Выбор количества вопросов и дополнительные пожелания.

export const GenerationSettings = ({
  generationCount,
  count,
  onCountChange,
  onInstructionsChange,
  instructions,
  countTitle,
  instructionPlaceholder,
}: TGenerationSettingsProps) => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto mb-6 w-[85%] text-lg font-medium text-white">
      <div className={sectionStyles}>
        <h3 className={sectionTitleStyles}>{countTitle}</h3>

        <div className="flex justify-evenly rounded-2xl border-2 border-white/20 bg-[#0000001A] py-8">
          {generationCount.map((item) => {
            const isSelected = count === item;

            return (
              <button
                key={item}
                type="button"
                aria-pressed={isSelected}
                onClick={() => onCountChange(item)}
                className={cn(
                  "h-12 w-24 rounded-full border-2 transition duration-200 hover:-translate-y-0.5",
                  isSelected
                    ? "border-[#e3a0a7] bg-[#0000001A] text-[#efb0b6]"
                    : "border-white/20 bg-transparent text-white/90 hover:border-[#e3a0a7]/60"
                )}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className={sectionStyles}>
        <label htmlFor="additionalPrompt" className={sectionTitleStyles}>
          {t("generateQuestions.preferencesTitle")}
        </label>

        <textarea
          id="additionalPrompt"
          value={instructions}
          onChange={(event) => onInstructionsChange(event.target.value)}
          placeholder={instructionPlaceholder}
          className={cn(
            "mt-6 min-h-[130px] w-full bg-[#0000001A] px-5 py-4",
            "resize-y outline-none transition",
            "rounded-2xl border-2 border-white/20",
            "text-base leading-7 text-white",
            "placeholder:text-white/40 focus:border-[#e3a0a7]"
          )}
        />
      </div>
    </div>
  );
};
