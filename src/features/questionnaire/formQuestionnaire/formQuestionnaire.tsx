import Button from "../../../shared/ui/buttons";
import { useTranslation } from "react-i18next";
import { useFormConfig } from "./useFormConfig";
import QuestionItem from "./questionItem";
import { useSelector } from "react-redux";
// import { getQuestionnaire } from "@store/selectors";
import { FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { questionsList } from "@common/dataExample"; // todo - потом убрать

const FormQuestionnaire = () => {
  const { t } = useTranslation();

  // const questionsList = useSelector(getQuestionnaire);
  const navigate = useNavigate();

  const methods = useFormConfig(questionsList, navigate);

  const { handleSubmit, onSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="pb-10">
        <div className="px-4 py-7 text-[150%] font-bold">{t("header.answerToQuestion")}</div>

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

        <Button type="submit" buttonLabel={t("buttonLabel.save")} size="middle" />
      </form>
    </FormProvider>
  );
};
export default FormQuestionnaire;
