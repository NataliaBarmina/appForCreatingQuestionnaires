import classNames from "classnames";
import Alert from "@commonComponents/alert";
import FormForEditingQuestions from "@commonComponents/formForEditingQuestins";
import BlokedFieldWithAnswersAndQuestions from "@commonComponents/blokedFieldWithAnswersAndQuestions";

//TODO: получаем из какого-то хранилища  название курса, темы и массив с объектами вопросов
const nameOfCourse = "какой-то курс";
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
  return (
    <div className="pb-1">
      <div className="p-4 text-[150%] font-bold">
        Вопросы созданные нейросетью
      </div>

      <div className="p-4 text-xl font-bold">Курс {nameOfCourse}</div>
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
          <div className="py-6 text-lg font-bold text-blue-100">{`вопрос №${index + 1}`}</div>
          <div className="mx-auto w-[95%]">
            <BlokedFieldWithAnswersAndQuestions
              question={item.вопрос}
              correctAnswer={item.ответ_1}
              wrongAnswer1={item.ответ_2}
              wrongAnswer2={item.ответ_3}
            />
          </div>
          <div className="mb-8 flex w-full justify-around py-8">
            <div>
              <Alert
                whatToDo={"сохраняем данные в стэйт"}
                alertDialogTitle={"Вы уверены?"}
                alertDialogDescription={
                  "Внимательно проверьте полученные вопросы и ответы. Правильный ответ должен находиться на первом месте"
                }
                alertDialogAction={"продолжить редактирование"}
                alertDialogCancel={"сохранить вопрос"}
                buttonName={"сохранить"}
                isFormValid={true} //todo:????
                isSubmitting={true} //todo:????
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
                whatToDo={"удаляем данные из стэйта"}
                alertDialogTitle={"Вы уверены?"}
                alertDialogDescription={
                  "Это действие нельзя отменить. Вопрос будет полностью удален."
                }
                alertDialogAction={"продолжить редактирование"}
                alertDialogCancel={"удалить вопрос"}
                buttonName={"удалить"}
                isFormValid={true} //todo:????
                isSubmitting={true} //todo:????
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default QuestionsCreatedByAI;
