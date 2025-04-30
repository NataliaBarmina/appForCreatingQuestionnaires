import { useNavigate } from "react-router-dom";
import Button from "@commonComponents/buttons";
import { questionsList } from "@common/dataExample";
import { useTranslation } from "react-i18next";
import { useFormConfig } from "./useFormConfig";
import QuestionItem from "./questionItem";

//todo: получить массив перемешанных вопросов, в анкете должно быть 10 вопросов

const FormQuestionnaire = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { handleSubmit, onSubmit, errors } = useFormConfig();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-10">
      <div className="px-4 py-7 text-[150%] font-bold">
        {t("header.answerToQuestion")}
      </div>

      {questionsList.map((item, index) => (
        <QuestionItem
          key={index}
          answer_1={item.answer_1}
          answer_2={item.answer_2}
          answer_3={item.answer_3}
          index={index}
          question={item.question}
          questionNumber={t("header.questionNumber")}
        />
      ))}

      <Button
        buttonLabel={t("buttonLabel.save")}
        size="middle"
        onClick={() => navigate("/resultsOfTheQuestionnaire")}
      />
    </form>
  );
};
export default FormQuestionnaire;
