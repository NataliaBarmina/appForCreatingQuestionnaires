import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import { EditAIGeneratedQuestions } from "@features/edit-questions-generated-with-ai";

export type TGeneratedQuestion = {
  answer_1: string;
  answer_2: string;
  answer_3: string;
  question: string;
};

export const AIGeneratedQuestionsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const location = useLocation();
  const { courseName, themeName, themeId } = location.state || {};

  const { data: questions = [] } = useQuery<TGeneratedQuestion[]>({
    queryKey: ["generatedQuestions", themeName],
    queryFn: async () => [],
    enabled: false,
  });

  function deleteQuestion(questionName: string) {
    queryClient.setQueryData<TGeneratedQuestion[]>(
      ["generatedQuestions", themeName],
      (prevQuestions = []) => prevQuestions.filter((question) => question.question !== questionName)
    );
  }

  useEffect(() => {
    if (!questions.length) navigate("/dashboard");
  }, [questions.length, navigate]);

  return (
    <div className="mb-10">
      <h1>{t("editQuestions.titleAI")} </h1>
      <h2 className="pb-8 pt-[4px] text-lg">
        {t("header.course", { courseName })} <br />
        {t("header.theme", { themeName })}
      </h2>
      <h4 className="pb-8 text-xl font-medium text-[#A6543E]">
        {t("editQuestions.unsavedWarning")}
      </h4>

      {questions?.map((item) => {
        return (
          <div key={item.question}>
            <EditAIGeneratedQuestions
              questionItem={item}
              deleteQuestion={deleteQuestion}
              courseName={courseName}
              themeName={themeName}
              themeId={themeId}
            />
          </div>
        );
      })}
    </div>
  );
};
