import { useForm, SubmitHandler } from "react-hook-form";
import { Textarea } from "../../../common/createFields";
import { TFields } from "../../../common/createFields";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classNames from "classnames";

const schema = yup.object({
  topicName: yup.string().required("Это поле обязательно"),
  linkToSource: yup.string(),
});

//! Должен быть выбор курса
//! нужно получить название этого курса и отправить в стэйт

const FormForCreatingQuestionsByAI = () => {
  const nameOfCourse = "какой-то курс";
  const {
    register,
    handleSubmit,
    watch, // alert(watch("topicName")); // просмотреть входное значение, передав его имя
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TFields> = (data, isValid) => {
    console.log(data);
    if (isValid) {
      navigate("/questionsCreatedByAI");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto pb-6">
      <div
        className={classNames(
          "p-4 text-[150%] font-bold",
          "sm:pb-6 sm:pt-8",
          "md:pb-10 md:pt-12",
          "pb-16 2xl:pt-20",
        )}
      >
        Форма для создания вопросов нейросетью
      </div>
      <div
        className={classNames(
          "border-2 border-solid border-gray-400",
          "mx-auto bg-green-800",
          "xs:w-[100vw]",
          "s:w-[90vw] s:rounded-2xl",
          "md:w-[65vw]",
          "lg:w-[55vw]",
          "xl:w-[50vw]",
          "2xl:w-[45vw]",
        )}
      >
        <div className="mx-auto w-[90%]">
          <div className="p-8 text-lg font-bold text-blue-100">
            Курс {nameOfCourse}
          </div>
          <div className="mx-auto">
            <Textarea
              placeholder="Введите название темы"
              register={register}
              fieldName="topicName"
              defaultValue=""
              disabled={false}
              styles=""
            />

            <p className="mx-auto w-[90%] bg-blue-100 text-xl font-bold text-pink-900">
              {errors.topicName?.message}
            </p>
          </div>
          <div className="mt-12 2xl:mb-[8vh]">
            <Textarea
              placeholder="Введите ссылку на источник"
              register={register}
              fieldName="linkToSource"
              defaultValue=""
              disabled={false}
              styles=""
            />
          </div>
        </div>
        <div className="mb-10">
          <button
            className={classNames(
              //общие стили для всех кнопок:
              "mx-auto bg-salmon text-xl font-bold shadow-lg shadow-black",
              "rounded-lg border-2 border-solid border-gray-600",
              "hover:cursor-pointer hover:shadow-lg hover:shadow-pink-900",
              "hover:border hover:border-solid hover:border-pink-900",
              // меняющиеся стили:
              "p-2 xs:w-[31vw] xs:text-[5vw]",
              "s:w-[25vw] s:text-[3.8vw]",
              "sm:w-[20vw] sm:text-[3vw]",
              "md:w-[15vw] md:text-[2vw]",
              "lg:w-[10vw] lg:text-[1.6vw]",
              "xl:w-[10vw] xl:text-[1.6vw]",
              "2xl:w-[8vw] 2xl:text-[1.2vw]",
            )}
          >
            Отправить
          </button>
        </div>
      </div>
    </form>
  );
};
export default FormForCreatingQuestionsByAI;
