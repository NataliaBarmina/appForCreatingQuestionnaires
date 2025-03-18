import classNames from "classnames";
import Alert from "@commonComponents/alert";
import FormForEditingQuestions from "@commonComponents/formForEditingQuestions";
import BlockedFieldWithAnswersAndQuestions from "@commonComponents/blockedFieldWithAnswersAndQuestions";
import { TQuizMetadata } from "@/common/dataExample";
import { useTranslation } from "react-i18next";

const QuestionList = ({ course, questionsList, theme }: TQuizMetadata) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="pb-1">
        <div className="p-4 text-[150%] font-bold">
          {t("header.editQuestion")}
        </div>

        <div className="p-4 text-xl font-bold">
          {t("header.course")} {course}
        </div>
        <div className="mb-4 text-xl">{`${t("header.theme")} ${theme}`}</div>
        {questionsList.map((item, index) => (
          <div
            key={index}
            className={classNames(
              "mx-auto mb-8 w-[100vw] bg-green-800 px-8",
              "s:w-[90vw] s:rounded-2xl",
              "md:w-[65vw]",
              "lg:w-[55vw]",
              "xl:w-[50vw]",
              "2xl:w-[45vw]",
            )}
          >
            <div className="py-6 text-lg font-bold text-blue-100">{`${t("header.questionNumber")} ${index + 1}`}</div>
            <BlockedFieldWithAnswersAndQuestions
              question={item.вопрос}
              correctAnswer={item.ответ_1}
              wrongAnswer1={item.ответ_2}
              wrongAnswer2={item.ответ_3}
            />
            <div className="mb-8 flex w-full justify-evenly py-10">
              <div>
                <FormForEditingQuestions
                  question={item.вопрос}
                  correctAnswer={item.ответ_1}
                  wrongAnswer1={item.ответ_2}
                  wrongAnswer2={item.ответ_3}
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
