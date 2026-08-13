import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { EditQuestionForm } from "@features/edit-question/ui/edit-question-form";
import { TQuestionList } from "@entities/question";

// todo - покидать эту страницу только после предупрtждения, что вопросы надо сохранить, иначе они будут потеряны

export const QuestionsCreatedByAI = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const { themeId, courseName, themeName } = location.state || {};

  const data: TQuestionList[] = [
    {
      answer_1: "string",
      answer_2: "string",
      answer_3: "string",
      id: "string",
      question: "string",
    },
    {
      answer_1: "s",
      answer_2: "s",
      answer_3: "s",
      id: "s",
      question: "s",
    },
  ]; //todo

  return (
    <div className="mb-10">
      <h1>{t("header.editQuestions")} </h1>
      <h2 className="pb-8 pt-[4px] text-lg">
        {t("header.questionsGeneratedByAI")} <br /> {t("header.byCourse")} {courseName} <br />
        {t("header.theme").toLowerCase()} {themeName}
      </h2>
      <h4 className="pb-8 text-xl font-medium text-[#A6543E]">{t("header.unsavedWarning")}</h4>

      {data.map((item) => (
        <div key={item.id}>
          <EditQuestionForm
            onDelete={() => alert(item)}
            question={item.question}
            correctAnswer={item.answer_1}
            wrongAnswer1={item.answer_2}
            wrongAnswer2={item.answer_3}
            questionID={item.id}
            mode="generated"
          />
        </div>
      ))}
    </div>
  );
};
