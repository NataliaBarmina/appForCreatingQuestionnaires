import { useTranslation } from "react-i18next";
import { cn } from "@shared/lib";

import { TQuestionsCount } from "../model/types";
import {
  sectionStyles,
  sectionTitleStyles,
  selectedButtonStyles,
  commonButtonStyles,
  unselectedButtonStyles,
} from "./styles";

const QUESTIONS_COUNT: TQuestionsCount[] = [5, 10, 15, 20];

type TQuestionsCountProps = {
  questionsCount: TQuestionsCount;
  setQuestionsCount: (questionsCount: TQuestionsCount) => void;
};

export const QuestionCount = ({ questionsCount, setQuestionsCount }: TQuestionsCountProps) => {
  const { t } = useTranslation();
  return (
    <div className={sectionStyles}>
      <h3 className={sectionTitleStyles}>{t("generateQuestions.questionsCount.title")}</h3>

      <div className="grid grid-cols-4 gap-5">
        {QUESTIONS_COUNT.map((count) => {
          const isSelected = questionsCount === count;

          return (
            <button
              key={count}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setQuestionsCount(count)}
              className={cn(
                commonButtonStyles,
                `h-13 rounded-full`,
                isSelected ? selectedButtonStyles : unselectedButtonStyles
              )}
            >
              {count}
            </button>
          );
        })}
      </div>
    </div>
  );
};
