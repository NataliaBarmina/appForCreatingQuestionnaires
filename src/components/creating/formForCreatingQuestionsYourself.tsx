import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Textarea } from "../../common/createFields";
import { TFields } from "../../common/createFields";
import { RoundLabel } from "../../common/roundLabel";

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

  const style = errors ? "placeholder:font-bold placeholder:text-pink-900" : "";

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h1">Форма для самостоятельного создания вопросов</div>

      <div className="container bg-green-800">
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
            placeholder="Ввведите вопрос"
            register={register}
            fieldName="selfWrittenQuestion"
            defaultValue=""
            disabled={false}
            styles={
              errors.selfWrittenQuestion ? "placeholder:text-pink-900" : ""
            }
          />
        </div>
        <div className="ml-[2%] w-[98%]">
          <div className="flex">
            <div className="w-[10%]">
              <RoundLabel value="а" />
              <RoundLabel value="б" />
              <RoundLabel value="в" />
            </div>
            <div className="w-[90%]">
              <Input
                placeholder="Введите правильный ответ"
                register={register}
                fieldName="selfWrittenAnswer1"
                defaultValue=""
                disabled={false}
                type="text"
                styles={
                  errors.selfWrittenAnswer1 ? "placeholder:text-pink-900" : ""
                }
              />
              <Input
                placeholder="Введите неправильный ответ"
                register={register}
                fieldName="selfWrittenAnswer2"
                defaultValue=""
                disabled={false}
                type="text"
                styles={
                  errors.selfWrittenAnswer2 ? "placeholder:text-pink-900" : ""
                }
              />

              <Input
                placeholder="Введите неправильный ответ"
                register={register}
                fieldName="selfWrittenAnswer3"
                defaultValue=""
                disabled={false}
                type="text"
                styles={
                  errors.selfWrittenAnswer3 ? "placeholder:text-pink-900" : ""
                }
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
        <div className="mb-8 mt-8">
          <button className="btn w-[25vw] p-2 text-[3vw] md:w-[22vh] md:text-[2.5vh]">
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
