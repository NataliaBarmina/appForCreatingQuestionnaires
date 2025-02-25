import { Question } from "../../../common/dataExample";
// import ListOfQuestions from "../../../components/commonComponents/listOfQuestions";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import Alert from "../../commonComponents/alertDialog";
import FormForEditingQuestions from "../../commonComponents/formForEditingQuestins";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../chadcnComponents/ui/form";
import { Textarea } from "../../../chadcnComponents/ui/textarea";
// import { Topic } from "../../common/dataExample";

const schema = yup.object({
  questionExample: yup.string(),
  answerExample1: yup.string(),
  answerExample2: yup.string(),
  answerExample3: yup.string(),
});

//todo: типизация для пропсов, которые будут предаваться в QuestionsCreatedByAI
type QuestionsCreatedByAIProps = {
  nameOfCourse: string;
  theme: string;
  arr: Question[];
};

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
  //TODO: должно приходить в пропсах название курса и массив с объектами вопросов
  ///TODO: передавть в пропсах массив с объектами вопросов
  const form = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(values: any) {
    console.log(values);
  }
  return (
    <div className="pb-1">
      <div className="p-4 text-[150%] font-bold">
        Вопросы созданные нейросетью
      </div>

      <div className="p-4 text-xl font-bold">Курс {nameOfCourse}</div>
      <div className="mb-4 text-xl">{`Тема: ${theme}`}</div>
      {arr.map((item, index) => (
        <div
          className={classNames(
            "mx-auto mb-8 w-[100vw] bg-green-800 px-8",
            "s:w-[90vw] s:rounded-2xl",
            "md:w-[65vw]",
            "lg:w-[55vw]",
            "xl:w-[50vw]",
            "2xl:w-[45vw]",
          )}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="py-6 text-lg font-bold text-blue-100">{`вопрос №${index + 1}`}</div>
              <FormField
                control={form.control}
                name="questionExample"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        className="placeholder:text-black disabled:bg-pink-100 disabled:text-lg"
                        placeholder={item.вопрос}
                        disabled={true}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mx-auto w-[85%]">
                <FormField
                  control={form.control}
                  name="answerExample1"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel className="text-yellow-50">
                        ВВЕДИТЕ ПРАВИЛЬНЫЙ ОТВЕТ
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="disabled:text-md placeholder:text-black disabled:bg-pink-100"
                          placeholder={item.ответ_1}
                          disabled={true}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="answerExample2"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel className="text-yellow-50">
                        {" "}
                        ВВЕДИТЕ НЕПРАВИЛЬНЫЙ ОТВЕТ
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="disabled:text-md placeholder:text-black disabled:bg-pink-100"
                          placeholder={item.ответ_2}
                          disabled={true}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="answerExample3"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel className="text-yellow-50">
                        {" "}
                        ВВЕДИТЕ НЕПРАВИЛЬНЫЙ ОТВЕТ
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="disabled:text-md placeholder:text-black disabled:bg-pink-100"
                          placeholder={item.ответ_3}
                          disabled={true}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-8 flex w-full justify-evenly py-8">
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
            </form>
          </Form>
        </div>
      ))}
    </div>
  );
};
export default QuestionsCreatedByAI;
