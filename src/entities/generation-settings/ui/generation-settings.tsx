import { useTranslation } from "react-i18next";
import { cn } from "@shared/lib";
import { TGenerationSettings } from "../model/types";
import {
  containerStyles,
  sectionStyles,
  titleStyles,
  countContainerStyles,
  countButtonStyles,
  countButtonSelectedStyles,
  countButtonDefaultStyles,
  instructionsStyles,
} from "./styles";

//! используется при генерации вопросов/тем. Выбор количества вопросов и дополнительные пожелания.

export const GenerationSettings = ({
  generationCount,
  count,
  onCountChange,
  onInstructionsChange,
  instructions,
  countTitle,
  instructionPlaceholder,
}: TGenerationSettings) => {
  const { t } = useTranslation();
  return (
    <div className={containerStyles}>
      <div className={sectionStyles}>
        <h3 className={titleStyles}>{countTitle}</h3>

        <div className={countContainerStyles}>
          {generationCount.map((item) => {
            const isSelected = count === item;

            return (
              <button
                key={item}
                type="button"
                aria-pressed={isSelected}
                onClick={() => onCountChange(item)}
                className={cn(
                  countButtonStyles,
                  isSelected ? countButtonSelectedStyles : countButtonDefaultStyles
                )}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className={sectionStyles}>
        <label htmlFor="additionalPrompt" className={titleStyles}>
          {t("generateQuestions.preferencesTitle")}
        </label>

        <textarea
          id="additionalPrompt"
          value={instructions}
          onChange={(event) => onInstructionsChange(event.target.value)}
          placeholder={instructionPlaceholder}
          className={instructionsStyles}
        />
      </div>
    </div>
  );
};
