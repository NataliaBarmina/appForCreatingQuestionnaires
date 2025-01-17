import { useForm, SubmitHandler } from "react-hook-form";
import { Textarea } from "../../common/createFields";
import { TFields } from "../../common/createFields";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  topicName: yup.string().required("Это поле обязательно"),
  linkToSource: yup.string(),
});

const FormForCreatingQuestionsByAI = () => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h1 2xl:py-[6vh]">
        Форма для создания вопросов нейросетью
      </div>

      <div className="container bg-green-800 2xl:min-h-[60vh] 2xl:p-[4vh]">
        <div className="mt-12 2xl:mb-[8vh]">
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
        <div className="mb-12 mt-12 2xl:mb-[8vh]">
          <Textarea
            placeholder="Введите ссылку на источник"
            register={register}
            fieldName="linkToSource"
            defaultValue=""
            disabled={false}
            styles=""
          />
        </div>
        <div className="mb-8">
          <button className="btn w-[20vw] p-2 text-[3vw] md:w-[25vh] md:text-[3vh]">
            Отправить
          </button>
        </div>
      </div>
    </form>
  );
};
export default FormForCreatingQuestionsByAI;
