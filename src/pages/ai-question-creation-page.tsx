import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { AIQuestionCreationContent } from "@features/ai-question-creation";

export const AIQuestionCreation = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const { courseName, themeName, themeID } = location.state || {};

  return (
    <>
      <h1>
        Сгенерируйте вопрос с помощью ИИ <br /> {` по курсу ${courseName}`}
      </h1>

      <h2>{`Тема ${themeName}`}</h2>

      <AIQuestionCreationContent themeID={themeID} />
    </>
  );
};
