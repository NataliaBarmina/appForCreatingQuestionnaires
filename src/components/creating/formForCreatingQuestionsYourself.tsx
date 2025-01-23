import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Textarea } from "../../common/createFields";
import { TFields } from "../../common/createFields";
import { RoundLabel } from "../../common/roundLabel";
import classNames from "classnames";

const schema = yup.object({
  selfWrittenTopicName: yup.string(),
  selfWrittenQuestion: yup.string().required(),
  selfWrittenAnswer1: yup.string().required(),
  selfWrittenAnswer2: yup.string().required(),
  selfWrittenAnswer3: yup.string().required(),
});

const FormForCreatingQuestionsYourself = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TFields> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-6">
      <div className="p-8 text-[150%] font-bold">
        Форма для самостоятельного создания вопросов
      </div>

      <div
        className={classNames(
          "mx-auto w-[100vw] bg-green-800",
          "border-2 border-solid border-gray-600",
          "s:w-[90vw] s:rounded-2xl",
          "md:w-[65vw]",
          "lg:w-[55vw]",
          "xl:w-[50vw]",
          "2xl:w-[45vw]",
        )}
      >
        <div className={classNames("mx-auto w-[95%]", "s:w-[90%]")}>
          <div className="mb-10 mt-12">
            <Textarea
              placeholder="Введите название темы"
              register={register}
              fieldName="selfWrittenTopicName"
              defaultValue=""
              disabled={false}
              styles=""
            />
          </div>
          <div className="mb-6">
            <Textarea
              placeholder="Введите вопрос"
              register={register}
              fieldName="selfWrittenQuestion"
              defaultValue=""
              disabled={false}
              styles={
                errors.selfWrittenQuestion ? "border-pink-900 border-[6px]" : ""
              }
            />
          </div>
          <div className="s:ml-[4%] s:w-[96%]">
            <div className="flex justify-between">
              <div className="w-[10%]">
                <RoundLabel value="а" />
                <RoundLabel value="б" />
                <RoundLabel value="в" />
              </div>
              <div className="w-[85%]">
                <Input
                  placeholder="Введите правильный ответ"
                  register={register}
                  fieldName="selfWrittenAnswer1"
                  defaultValue=""
                  disabled={false}
                  type="text"
                  styles={errors.selfWrittenAnswer1 ? "border-pink-900" : ""}
                />
                <Input
                  placeholder="Введите неправильный ответ"
                  register={register}
                  fieldName="selfWrittenAnswer2"
                  defaultValue=""
                  disabled={false}
                  type="text"
                  styles={errors.selfWrittenAnswer2 ? "border-pink-900" : ""}
                />

                <Input
                  placeholder="Введите неправильный ответ"
                  register={register}
                  fieldName="selfWrittenAnswer3"
                  defaultValue=""
                  disabled={false}
                  type="text"
                  styles={errors.selfWrittenAnswer3 ? "border-pink-900" : ""}
                />
              </div>
            </div>
            {(errors.selfWrittenQuestion ||
              errors.selfWrittenAnswer1 ||
              errors.selfWrittenAnswer2 ||
              errors.selfWrittenAnswer3) && (
              <div className="mx-auto mt-6">
                <span className="bg-blue-100 p-2 text-xl text-pink-900">
                  ПОЛЕ ОБЯЗАТЕЛЬНО
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="mb-8 mt-8">
          <button
            className={classNames(
              //общие стили для всех кнопок:
              "mx-auto bg-salmon text-xl font-bold shadow-lg shadow-black",
              "rounded-lg border-2 border-solid border-gray-600",
              "hover:cursor-pointer hover:shadow-lg hover:shadow-pink-900",
              "hover:border hover:border-solid hover:border-pink-900",
              // меняющиеся стили:
              "xs:w-[30vw] xs:p-2 xs:text-[4vw]",
              "s:w-[24vw] s:text-[2.8vw]",
              "md:w-[20vw] md:text-[2.2vw]",
              "lg:w-[14vw] lg:text-[1.6vw]",
              "xl:w-[11vw] xl:text-[1.2vw]",
              "2xl:w-[9vw] 2xl:text-[1vw]",
            )}
          >
            Сохранить
          </button>
          {/* ввести обработку онклик через конфирм? - убедитесь, что вы правильно
          ввели вопрос и ответы к нему, первое поле ответов(вариант а) должно содержать правильный
          ответ, остальные два(б,в) - неправильные ответы */}
        </div>
      </div>
    </form>
  );
};
export default FormForCreatingQuestionsYourself;
