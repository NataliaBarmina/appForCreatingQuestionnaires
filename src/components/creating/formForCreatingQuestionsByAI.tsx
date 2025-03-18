import { useForm, SubmitHandler } from "react-hook-form";
import { Textarea, TFields } from "@commonComponents/createFields";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classNames from "classnames";
import Button from "@commonComponents/buttons";
import { TQuizMetadata } from "@/common/dataExample";
import { useTranslation } from "react-i18next";

const FormForCreatingQuestionsByAI = ({ course, theme }: TQuizMetadata) => {
  const { t } = useTranslation();

  const schema = yup.object({
    topicName: yup.string().required(t("required")),
    linkToSource: yup.string(),
  });

  const {
    register,
    handleSubmit,
    watch, // alert(watch("topicName")); // просмотреть входное значение, передав его имя
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: {
      topicName: theme,
    },
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
        {t("header.formCreateByAI")}
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
            {t("header.course")} {course}
          </div>
          <div className="mx-auto">
            <Textarea
              placeholder={t("placeholder.topic")}
              register={register}
              fieldName="topicName"
              styles=""
            />

            <p className="mx-auto w-[90%] bg-blue-100 text-xl font-bold text-pink-900">
              {errors.topicName?.message}
            </p>
          </div>
          <div className="mt-12 2xl:mb-[8vh]">
            <Textarea
              placeholder={t("placeholder.sourceLink")}
              register={register}
              fieldName="linkToSource"
              styles=""
            />
          </div>
        </div>
        <div className="mb-10">
          <Button buttonLabel={t("buttonLabel.send")} size="middle" />
        </div>
      </div>
    </form>
  );
};
export default FormForCreatingQuestionsByAI;
