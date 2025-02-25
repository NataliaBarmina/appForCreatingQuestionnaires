import { useForm, SubmitHandler } from "react-hook-form";
import { Textarea, Input } from "../../../common/createFields";
import { TFields } from "../../../common/createFields";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RoundLabel } from "../../../common/roundLabel";
import classNames from "classnames";
import { questionSet } from "../../../common/dataExample";
import Alert from "../../../components/alertDialog";
import FormForEditingQuestions from "./formForEditingQuestins";

const schema = yup.object({
  questionExample: yup.string(),
  answerExample1: yup.string(),
  answerExample2: yup.string(),
  answerExample3: yup.string(),
});

const QuestionsCreatedByAI = () => {
  //TODO: должно приходить в пропсах название курса
  const nameOfCourse = "какой-то курс";
  const theme = "ПРЕОБРАЗОВАНИЕ ТИПОВ";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TFields> = (data) => {
    console.log(data);
  };

  return (
    <div className="pb-1">
      <div className="p-4 text-[150%] font-bold">
        Вопросы созданные нейросетью
      </div>

      <div className="p-4 text-xl font-bold">Курс {nameOfCourse}</div>

      <div className="mb-4 text-xl">{`Тема: ${theme}`}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {questionSet.map((item, index) => (
          <div
            className={classNames(
              "mx-auto mb-8 bg-green-800 py-2",
              "xs:w-[100vw]",
              "sm:w-[95vw] sm:rounded-2xl",
              "md:w-[65vw]",
              "lg:w-[55vw]",
              "xl:w-[50vw]",
              "2xl:w-[45vw]",
            )}
          >
            <div className="mb-2 p-4 text-lg font-bold text-blue-100">{`вопрос №${index + 1}`}</div>
            <div className="mx-auto mb-8 w-[90%]">
              <Textarea
                placeholder=""
                register={register}
                fieldName="questionExample"
                defaultValue={`${Object.keys(item)}`}
                disabled={true}
                styles=""
              />
              <div className="flex flex-col">
                <div className="mx-auto w-[90%]">
                  <div className="text-center text-sm text-white">
                    правильный ответ
                  </div>
                  <Input
                    type="text"
                    placeholder=""
                    register={register}
                    fieldName="answerExample1"
                    defaultValue={`${Object.values(item)[0][1]}`}
                    disabled={true}
                    styles="mb-6 "
                  />
                  <div className="text-center text-sm text-white">
                    неправильный ответ
                  </div>
                  <Input
                    type="text"
                    placeholder=""
                    register={register}
                    fieldName="answerExample2"
                    defaultValue={`${Object.values(item)[0][2]}`}
                    disabled={true}
                    styles="bg-pink-100 mb-6"
                  />
                  <div className="text-center text-sm text-white">
                    неправильный ответ
                  </div>
                  <Input
                    type="text"
                    placeholder=""
                    register={register}
                    fieldName="answerExample3"
                    defaultValue={`${Object.values(item)[0][3]}`}
                    disabled={true}
                    styles="bg-pink-100"
                  />
                </div>
              </div>
            </div>
            <div className="mb-8 flex w-full justify-evenly">
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
                />
              </div>
              <div>
                <FormForEditingQuestions />
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
                />
              </div>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};
export default QuestionsCreatedByAI;
