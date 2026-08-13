import { BarChart3, Leaf, Mountain } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@shared/lib";

import {
  sectionStyles,
  sectionTitleStyles,
  selectedButtonStyles,
  commonButtonStyles,
  optionButtonStyles,
  optionsGridStyles,
  unselectedButtonStyles,
} from "./styles";
import { TDifficulty } from "../model/types";

const DIFFICULTIES: {
  value: TDifficulty;
  label: string;
  icon: typeof Leaf;
}[] = [
  {
    value: "easy",
    label: "generateQuestions.difficulty.easy",
    icon: Leaf,
  },
  {
    value: "medium",
    label: "generateQuestions.difficulty.medium",
    icon: BarChart3,
  },
  {
    value: "hard",
    label: "generateQuestions.difficulty.hard",
    icon: Mountain,
  },
];

type TQuestionDifficulties = {
  difficulty: TDifficulty;
  setDifficulty: (difficulty: TDifficulty) => void;
};

export const QuestionDifficulties = ({ difficulty, setDifficulty }: TQuestionDifficulties) => {
  const { t } = useTranslation();
  return (
    <div className={sectionStyles}>
      <h3 className={sectionTitleStyles}>{t("generateQuestions.difficulty.title")}</h3>

      <div className={optionsGridStyles}>
        {DIFFICULTIES.map(({ value, label, icon: Icon }) => {
          const isSelected = difficulty === value;

          return (
            <button
              key={value}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setDifficulty(value)}
              className={cn(
                commonButtonStyles,
                optionButtonStyles,
                isSelected ? selectedButtonStyles : unselectedButtonStyles
              )}
            >
              <Icon size={30} strokeWidth={1.8} />

              <span>{t(label)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
