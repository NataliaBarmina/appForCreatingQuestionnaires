import Alert from "@commonComponents/alert";
import FormForEditingQuestions from "@commonComponents/formForEditingQuestions/formForEditingQuestions";
import BlockedFieldWithAnswersAndQuestions from "@commonComponents/blockedFieldWithAnswersAndQuestions";
import { TQuizData } from "@/common/dataExample";
import { useTranslation } from "react-i18next";
import HeadersBlock from "../commonComponents/headersBlock";
import { cn } from "@lib/utils";

const greenContainerStyles = cn(
  "mx-auto mb-8 w-[100vw] bg-green-800 px-8",
  "s:w-[90vw] s:rounded-2xl",
  "md:w-[65vw]",
  "lg:w-[55vw]",
  "xl:w-[50vw]",
  "2xl:w-[45vw]",
);

const QuestionList = ({ questionsList }: TQuizData) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="pb-1">
        <HeadersBlock
          questionsGeneratedByAIHeader={t("header.editQuestion")}
          courseHeader={t("header.course")}
          themeHeader={t("header.theme")}
        />

        {questionsList.map((item, index) => (
          <div key={index} className={greenContainerStyles}>
            <div className="py-6 text-lg font-bold text-blue-100">{`${t("header.questionNumber")} ${index + 1}`}</div>
            <BlockedFieldWithAnswersAndQuestions
              question={item.question}
              correctAnswer={item.answer_1}
              wrongAnswer1={item.answer_2}
              wrongAnswer2={item.answer_3}
            />
            <div className="mb-8 flex w-full justify-evenly py-10">
              <div>
                <FormForEditingQuestions
                  question={item.question}
                  correctAnswer={item.answer_1}
                  wrongAnswer1={item.answer_2}
                  wrongAnswer2={item.answer_3}
                />
              </div>
              <div>
                <Alert
                  whatToDo={"удаляем данные из стэйта"} //todo: потом удалить
                  alertDialogTitle={t("alert.title")}
                  alertDialogDescription={t("alert.deleteWarning")}
                  alertDialogAction={t("alert.continueEditing")}
                  alertDialogCancel={t("alert.deleteQuestion")}
                  buttonLabel={t("buttonLabel.delete")}
                  isFormValid={true}
                  isSubmitting={false}
                  onContinue={() => {}}
                  size="middle"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default QuestionList;
