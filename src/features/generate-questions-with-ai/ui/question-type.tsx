import { BookOpen, Code2, Shuffle } from "lucide-react";
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
import { TQuestionType } from "../model/types";

const QUESTION_TYPES: {
  value: TQuestionType;
  label: string;
  icon: typeof BookOpen;
}[] = [
  {
    value: "theory",
    label: "generateQuestions.questionType.theory",
    icon: BookOpen,
  },
  {
    value: "code",
    label: "generateQuestions.questionType.code",
    icon: Code2,
  },
  {
    value: "mixed",
    label: "generateQuestions.questionType.mixed",
    icon: Shuffle,
  },
];

type TQuestionProps = {
  questionType: TQuestionType;
  setQuestionType: (questionType: TQuestionType) => void;
};

export const QuestionType = ({ questionType, setQuestionType }: TQuestionProps) => {
  const { t } = useTranslation();

  return (
    <div className={sectionStyles}>
      <h3 className={sectionTitleStyles}>{t("generateQuestions.questionType.title")}</h3>

      <div className={optionsGridStyles}>
        {QUESTION_TYPES.map(({ value, label, icon: Icon }) => {
          const isSelected = questionType === value;

          return (
            <button
              key={value}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setQuestionType(value)}
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
