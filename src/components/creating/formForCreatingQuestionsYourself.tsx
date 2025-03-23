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
import { TQuizMetadata } from "@/common/dataExample";
import { useTranslation } from "react-i18next";

const FormForCreatingQuestionsYourself = ({ course, theme }: TQuizMetadata) => {
  const { t } = useTranslation();
  // const required = t("required");
  // const headerCreateQuestion = t("header.headerCreateQuestion");
  // const labelTheme = t("formLabel.labelTheme");
  // const labelQuestion = t("formLabel.labelQuestion");
  // const addTheme = t("placeholder.addTheme");
  // const addQuestion = t("placeholder.addQuestion");
  // const addWrongAnswer = t("placeholder.addWrongAnswer");
  // const addCorrectAnswer = t("placeholder.addCorrectAnswer");
  // const labelAnswers = t("formLabel.labelAnswers");
  // const alertDialogTitle = t("alert.alertDialogTitle");
  // const alertDialogDescription = t("alert.alertDialogDescription");
  // const alertDialogAction = t("alert.alertDialogAction");
  // const alertDialogCancel = t("alert.alertDialogCancel");
  // const save = t("buttonLabel.save");
  // const reset = t("buttonLabel.reset");

  const requiredString = yup.string().required(t("required"));

  const schema = yup.object({
    selfWrittenTopicName: theme ? yup.string() : requiredString,
    selfWrittenQuestion: requiredString,
    selfWrittenAnswer1: requiredString,
    selfWrittenAnswer2: requiredString,
    selfWrittenAnswer3: requiredString,
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      selfWrittenTopicName: theme || "", // Если `theme` есть, подставляем его значение
    },
  });

  function onSubmit(values: any) {
    console.log("Сохраненные данные:", values); //todo- удалить или что-то сделать
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
        {t("header.headerCreateQuestion")} {course}
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
                    {t("formLabel.labelTheme")}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t("placeholder.addTheme")}
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
                    {t("formLabel.labelQuestion")}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t("placeholder.addQuestion")}
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
                      {t("formLabel.labelAnswers")}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("placeholder.addCorrectAnswer")}
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
                        placeholder={t("placeholder.addWrongAnswer")}
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
                        placeholder={t("placeholder.addWrongAnswer")}
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
                  alertDialogTitle={t("alert.alertDialogTitle")}
                  alertDialogDescription={t("alert.alertDialogDescription3")}
                  alertDialogAction={t("alert.alertDialogAction")}
                  alertDialogCancel={t("alert.alertDialogCancel")}
                  buttonLabel={t("buttonLabel.save")}
                  type="submit"
                  onContinue={() => formReset()}
                  isFormValid={isFormValid} //будем показывать Alert только если форма валидна
                  isSubmitting={isSubmitting} //будем показывать Alert только произошло событие submit
                />
              </div>
              <div>
                <Button
                  buttonLabel={t("buttonLabel.reset")}
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
