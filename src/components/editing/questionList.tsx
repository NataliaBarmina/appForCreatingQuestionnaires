import classNames from "classnames";
import { Question } from "@common/dataExample";
import Alert from "@commonComponents/alert";
import FormForEditingQuestions from "@commonComponents/formForEditingQuestins";
import BlokedFieldWithAnswersAndQuestions from "@commonComponents/blokedFieldWithAnswersAndQuestions";

type Theme = {
  вопрос: string;
  ответ_1: string;
  ответ_2: string;
  ответ_3: string;
};

type Myprops = {
  course?: string;
  questionsList?: Theme[];
  theme?: string;
};

const QuestionList = ({ course, questionsList, theme }: Myprops) => {
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
            <BlokedFieldWithAnswersAndQuestions
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
                  alertDialogTitle={"Вы уверены?"}
                  alertDialogDescription={
                    "Это действие нельзя отменить. Вопрос будет полностью удален."
                  }
                  alertDialogAction={"продолжить редактирование"}
                  alertDialogCancel={"удалить вопрос"}
                  buttonName={"удалить"}
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
