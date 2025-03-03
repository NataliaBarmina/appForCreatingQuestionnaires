import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import Alert from "@commonComponents/alertDialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/form";
import { Textarea } from "@ui/textarea";

const schema = yup.object({
  selfWrittenTopicName: yup.string().required(),
  selfWrittenQuestion: yup.string().required(),
  selfWrittenAnswer1: yup.string().required(),
  selfWrittenAnswer2: yup.string().required(),
  selfWrittenAnswer3: yup.string().required(),
});

//TODO: здесь я должна получать из стэйта название курса и название темы
const nameOfCourse = "JavaScript";
const nameOfTheme = "";

const FormForCreatingQuestionsYourself = () => {
  const form = useForm({
    resolver: yupResolver(schema), //todo: здесь должно быть defaultValue
  });

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <div>
      <div className="p-8 text-[150%] font-bold">
        Форма для самостоятельного создания вопросов
      </div>

      <div
        className={classNames(
          "mx-auto mb-5 w-[100vw] bg-green-800 px-6 pt-10",
          "border-2 border-solid border-gray-600",
          "s:w-[90vw] s:rounded-2xl",
          "md:w-[65vw]",
          "lg:w-[55vw]",
          "xl:w-[50vw]",
          "2xl:w-[45vw]",
        )}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="selfWrittenTopicName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-yellow-50">ТЕМА</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Введите тему" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="selfWrittenQuestion"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel className="text-yellow-50">
                    ВВЕДИТЕ ВОПРОС
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="вопрос" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mx-auto w-[85%]">
              <FormField
                control={form.control}
                name="selfWrittenAnswer1"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel className="text-yellow-50">
                      ВВЕДИТЕ ПРАВИЛЬНЫЙ ОТВЕТ
                    </FormLabel>
                    <FormControl>
                      <Textarea placeholder="правильный ответ" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="selfWrittenAnswer2"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel className="text-yellow-50">
                      ВВЕДИТЕ НЕПРАВИЛЬНЫЙ ОТВЕТ
                    </FormLabel>
                    <FormControl>
                      <Textarea placeholder="неправильный ответ" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="selfWrittenAnswer3"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel className="text-yellow-50">
                      ВВЕДИТЕ НЕПРАВИЛЬНЫЙ ОТВЕТ
                    </FormLabel>
                    <FormControl>
                      <Textarea placeholder="неправильный ответ" {...field} />
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
                    "Внимательно проверьте вопросы и ответы. Правильный ответ должен находиться на первом месте"
                  }
                  alertDialogAction={"продолжить редактирование"}
                  alertDialogCancel={"сохранить вопрос"}
                  buttonName={"сохранить"}
                />
              </div>
              <div>
                <Alert
                  whatToDo={"очищаем форму"}
                  alertDialogTitle={"Вы уверены?"}
                  alertDialogDescription={
                    "Это действие нельзя отменить. Вопрос будет полностью удален."
                  }
                  alertDialogAction={"продолжить редактирование"}
                  alertDialogCancel={"удалить вопрос"}
                  buttonName={"очистить"}
                />
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default FormForCreatingQuestionsYourself;
