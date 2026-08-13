import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { TSelectedTheme } from "@entities/theme";
import { buttonStyles } from "./styles";
import { TQuestionsCount, TDifficulty, TQuestionType } from "../model/types";
import { QuestionCount } from "./question-count";
import { QuestionDifficulties } from "./question-difficulties";
import { QuestionType } from "./question-type";
import { AdditionalWishes } from "./additional-wishes";

// todo - должны отправляться существующие вопросы,  ИИ должен создавать айди вопросов
// todo - в запросе указать, чтобы искал в интернете наиболее часто всречающиеся вопросы на собеседованиях

export const GenerateQuestionsForm = ({ themeId, courseName, themeName }: TSelectedTheme) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [questionsCount, setQuestionsCount] = useState<TQuestionsCount>(10);

  const [difficulty, setDifficulty] = useState<TDifficulty>("medium");

  const [questionType, setQuestionType] = useState<TQuestionType>("mixed");

  const [additionalPrompt, setAdditionalPrompt] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      questionsCount,
      difficulty,
      questionType,
      additionalPrompt,
    };

    console.log(data);

    // TODO: запрос на генерацию вопросов
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto mb-6 w-[85%] text-lg font-medium text-white">
      <QuestionCount questionsCount={questionsCount} setQuestionsCount={setQuestionsCount} />

      <QuestionDifficulties difficulty={difficulty} setDifficulty={setDifficulty} />

      <QuestionType questionType={questionType} setQuestionType={setQuestionType} />

      <AdditionalWishes
        additionalPrompt={additionalPrompt}
        setAdditionalPrompt={setAdditionalPrompt}
      />

      <button
        type="submit"
        onClick={() =>
          navigate("/questionsCreatedByAI", { state: { themeId, courseName, themeName } })
        }
        className={buttonStyles}
      >
        {t("generateQuestions.generate")}
      </button>
    </form>
  );
};
