import classNames from "classnames";
import Alert from "@commonComponents/alert";
import FormForEditingQuestions from "@commonComponents/formForEditingQuestions";
import BlockedFieldWithAnswersAndQuestions from "@commonComponents/blockedFieldWithAnswersAndQuestions";
import { TQuizData } from "@/common/dataExample";

const QuestionList = ({ course, questionsList, theme }: TQuizData) => {
  return (
    <div>
      <div className="pb-1">
        <div className="p-4 text-[150%] font-bold">
          Измените необходимый вопрос
        </div>

        <div className="p-4 text-xl font-bold">Курс {course}</div>
        <div className="mb-4 text-xl">{`Тема: ${theme}`}</div>
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
            <div className="py-6 text-lg font-bold text-blue-100">{`вопрос №${index + 1}`}</div>
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
                  alertDialogTitle={"Вы уверены?"}
                  alertDialogDescription={
                    "Это действие нельзя отменить. Вопрос будет полностью удален."
                  }
                  alertDialogAction={"продолжить редактирование"}
                  alertDialogCancel={"удалить вопрос"}
                  buttonLabel={"удалить"}
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
