import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import Alert from "../../components/alertDialog";
import FormForEditingQuestions from "../../components/creating/creatingQuestionsByAI/formForEditingQuestins";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../chadcnComponents/ui/form";
import { Textarea } from "../../chadcnComponents/ui/textarea";
import { Topic } from "../../common/dataExample";

const schema = yup.object({
  questionExample: yup.string(),
  answerExample1: yup.string(),
  answerExample2: yup.string(),
  answerExample3: yup.string(),
});

export const ListOfQuestions: React.FC<Topic> = ({ arr = [] }) => {
  const form = useForm({
    resolver: yupResolver(schema),
    // defaultValues: {
    //   questionExample: "",
    //   answerExample1: "",
    //   answerExample2: "",
    //   answerExample3: "",
    // },
  });

  function onSubmit(values: any) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {arr.map((item, index) => (
          <div
            className={classNames(
              "mx-auto w-[100vw] bg-green-800 px-8",
              "s:w-[90vw] s:rounded-2xl",
              "md:w-[65vw]",
              "lg:w-[55vw]",
              "xl:w-[50vw]",
              "2xl:w-[45vw]",
            )}
          >
            <div className="mb-2 p-4 text-lg font-bold text-blue-100">{`вопрос №${index + 1}`}</div>
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
                      ВВЕДИТЕ ПРАВИЛЬНЫЙ ВОПРОС
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
                      ВВЕДИТЕ НЕПРАВИЛЬНЫЙ ВОПРОС
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
                      ВВЕДИТЕ НЕПРАВИЛЬНЫЙ ВОПРОС
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
          </div>
        ))}
      </form>
    </Form>
  );
};
// placeholder={Object.keys(item).join(" ")}
// placeholder={`${Object.values(item)[0][3]}`}
export default ListOfQuestions;
