import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import Alert from "@commonComponents/alert";
import Button from "@commonComponents/buttons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/form";
import { Textarea } from "@ui/textarea";

type MyProps = {
  course: string;
  theme: string;
};

const FormForCreatingQuestionsYourself = ({ course, theme }: MyProps) => {
  const schema = yup.object({
    selfWrittenTopicName: yup
      .string()
      .required(theme ? undefined : "Это поле обязательно"), // Если `theme` передано, то не обязательное
    selfWrittenQuestion: yup.string().required("это поле обязательно"),
    selfWrittenAnswer1: yup.string().required("это поле обязательно"),
    selfWrittenAnswer2: yup.string().required("это поле обязательно"),
    selfWrittenAnswer3: yup.string().required("это поле обязательно"),
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      selfWrittenTopicName: theme || "", // Если `theme` есть, подставляем его значение
    },
  });

  function onSubmit(values: any) {
    console.log("Сохраненные данные:", values);
  }

  const isFormValid = form.formState.isValid; // Проверка на валидность формы
  const isSubmitting = form.formState.isSubmitting; // Чтобы избежать повторной отправки
  const formReset = () => {
    form.reset({
      selfWrittenTopicName: theme,
      selfWrittenQuestion: "",
      selfWrittenAnswer1: "",
      selfWrittenAnswer2: "",
      selfWrittenAnswer3: "",
    });
  };

  return (
    <div>
      <div className="p-8 text-[150%] font-bold">
        Создайте вопрос по курсу {course}
      </div>
      <div
        className={classNames(
          "mx-auto mb-5 w-[100vw] bg-green-800 px-6",
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
                <FormItem className="pt-8">
                  <FormLabel className="text-lg text-yellow-50">
                    Тема:
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="введите тему"
                      disabled={!!theme}
                      {...field}
                      className="text-center font-extrabold placeholder:text-sm placeholder:font-normal"
                      style={{ fontSize: "1.25rem" }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="selfWrittenQuestion"
              render={({ field }) => (
                <FormItem className="mt-8">
                  <FormLabel className="text-lg text-yellow-50">
                    Вопрос:
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="введите вопрос"
                      {...field}
                      className="text-center placeholder:text-sm"
                      style={{ fontSize: "1.2rem" }}
                    />
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
                  <FormItem className="mt-12">
                    <FormLabel className="text-lg text-yellow-50">
                      Ответы:
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="введите правильный ответ"
                        {...field}
                        className="text-center placeholder:text-sm"
                        style={{ fontSize: "1.2rem" }}
                      />
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
                    <FormControl>
                      <Textarea
                        placeholder="введите неправильный ответ"
                        {...field}
                        className="text-center placeholder:text-sm"
                        style={{ fontSize: "1.2rem" }}
                      />
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
                    <FormControl>
                      <Textarea
                        placeholder="введите неправильный ответ"
                        {...field}
                        className="text-center placeholder:text-sm"
                        style={{ fontSize: "1.2rem" }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-8 flex w-full justify-evenly pt-14">
              <div>
                <Alert
                  whatToDo={"сохраняем данные в стэйт "} //todo: потом удалить
                  alertDialogTitle={"Вы уверены?"}
                  alertDialogDescription={
                    "Внимательно проверьте вопросы и ответы. Правильный ответ должен находиться на первом месте"
                  }
                  alertDialogAction={"продолжить редактирование"}
                  alertDialogCancel={"сохранить вопрос"}
                  buttonName={"сохранить"}
                  type="submit"
                  onContinue={() => formReset()}
                  isFormValid={isFormValid} //будем показывать Alert только если форма валидна
                  isSubmitting={isSubmitting} //будем показывать Alert только произошло событие submit
                />
              </div>
              <div>
                <Button
                  buttonName="очистить форму"
                  size="small"
                  disabled={false}
                  type="reset"
                  onClick={() => formReset()}
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
