import classNames from "classnames";
import Alert from "@commonComponents/alert";
import FormForEditingQuestions from "@commonComponents/formForEditingQuestions";
import BlockedFieldWithAnswersAndQuestions from "@commonComponents/blockedFieldWithAnswersAndQuestions";
import { useTranslation } from "react-i18next";

//TODO: получаем из какого-то хранилища  название курса, темы и массив с объектами вопросов
const course = "какой-то курс";
const theme = "ПРЕОБРАЗОВАНИЕ ТИПОВ";
const arr = [
  {
    вопрос: "К какому типу данных преобразует значение функция alert?",
    ответ_1: "к строке",
    ответ_2: "к числу",
    ответ_3: "к символу",
  },
  {
    вопрос:
      "К какому типу данных преобразует значение математические операторы?",
    ответ_1: "к числам",
    ответ_2: "undefined",
    ответ_3: "к нулю",
  },
];

const QuestionsCreatedByAI = () => {
  const { t } = useTranslation();
  return (
    <div className="pb-1">
      <div className="p-4 text-[150%] font-bold">
        {t("header.questionsGeneratedByAI")}
      </div>

      <div className="p-4 text-xl font-bold">
        {t("header.course")} {course}
      </div>
      <div className="mb-4 text-xl">{`Тема: ${theme}`}</div>
      {arr.map((item, index) => (
        <div
          key={index}
          className={classNames(
            "mx-auto mb-8 w-[100vw] bg-green-800",
            "xs:px-0",
            "s:w-[90vw] s:rounded-2xl s:px-8",
            "md:w-[65vw]",
            "lg:w-[55vw]",
            "xl:w-[50vw]",
            "2xl:w-[45vw]",
          )}
        >
          <div className="py-6 text-lg font-bold text-blue-100">
            {t("header.questionNumber")} {index + 1}
          </div>
          <div className="mx-auto w-[95%]">
            <BlockedFieldWithAnswersAndQuestions
              question={item.вопрос}
              correctAnswer={item.ответ_1}
              wrongAnswer1={item.ответ_2}
              wrongAnswer2={item.ответ_3}
            />
          </div>
          <div className="mb-8 flex w-full justify-around py-8">
            <div>
              <Alert
                whatToDo={
                  //todo: потом удалить
                  "сохраняем данные в стэйт и удаляем вопрос из временного хранилища"
                }
                alertDialogTitle={t("alert.title")}
                alertDialogDescription={t("alert.checkQuestions")}
                alertDialogAction={t("alert.continueEditing")}
                alertDialogCancel={t("alert.saveQuestion")}
                buttonLabel={t("buttonLabel.save")}
                isFormValid={true}
                isSubmitting={false}
                onContinue={() => {}}
              />
            </div>
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
                whatToDo={"удаляем вопрос из временного хранилища"} //todo: потом удалить
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
  );
};
export default QuestionsCreatedByAI;
