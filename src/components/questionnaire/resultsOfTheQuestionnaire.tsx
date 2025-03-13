import classNames from "classnames";
import { Label } from "@ui/label";
import { BlockedField } from "@commonComponents/createFields";

//todo: получить массив через пропсы из Questionnaire и массив ответов и сравнить их
const questionsList = [
  //todo: потом удалить
  {
    "К какому типу данных преобразует значение функция alert?": {
      1: "к строке",
      2: "к символу",
      3: "к числу",
    },
  },

  {
    "К какому типу данных преобразует значение математические операторы?": {
      1: "к числам",
      2: "undefined",
      3: "к нулю",
    },
  },

  {
    " Что нужно использовать, чтобы преобразовать значение к строке?": {
      1: "функцию String(value)",
      2: "оператор +",
      3: "заключить в кавычки",
    },
  },
];

const ResultsOfTheQuestionnaire = () => {
  const percentageOfCorrectAnswers = "95%";

  return (
    <div>
      <div className="p-8 text-[150%] font-bold">
        Поздравляем! <br /> Вы ответили на вопросы анкеты.
      </div>
      <div className="mb-1 text-xl">Процент правильных ответов</div>
      <div className="mb-10 inline-block rounded-full border border-solid border-pink-900 bg-beige px-6 py-4 shadow-lg shadow-pink-900">
        {percentageOfCorrectAnswers}
      </div>
      <div className={classNames("mx-auto w-full bg-gray-200 pb-1")}>
        <div className="mb-2 py-8 text-xl font-bold text-black">
          Анализ неправильных ответов:
        </div>

        {questionsList.map((item, index) => (
          <div
            key={index}
            className={classNames(
              "mx-auto mb-8 w-[95%] bg-green-800",
              "rounded-2xl",
              "border-2 border-solid border-gray-600",
              "md:w-[85%]",
            )}
          >
            <div className="mb-2 p-4 text-lg font-bold text-blue-100">{`вопрос №${index + 1}`}</div>
            <div className="mx-auto w-[90%]">
              <BlockedField
                styles="mb-6"
                value={`${Object.keys(item)}`}
                id={""}
              />
              <div className="mx-auto w-[90%]">
                <Label className="text-white" htmlFor="correctAnswer">
                  ПРАВИЛЬНЫЙ ОТВЕТ
                </Label>
                <BlockedField
                  styles="mb-6"
                  value={`${Object.values(item)[0][1]}`}
                  id={"correctAnswer"}
                />
                <Label className="text-white" htmlFor="yourAnswer">
                  ВАШ ОТВЕТ
                </Label>
                <BlockedField
                  styles="mb-8"
                  value={`${Object.values(item)[0][2]}`}
                  id={"yourAnswer"}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ResultsOfTheQuestionnaire;
