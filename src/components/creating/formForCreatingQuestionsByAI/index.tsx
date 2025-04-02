import { SubmitHandler } from "react-hook-form";
import { TFields } from "@commonComponents/createFields";
import { useNavigate } from "react-router-dom";
import Button from "@commonComponents/buttons";
import { TQuizMetadata } from "@/common/dataExample";
import { useTranslation } from "react-i18next";
import { formContainerClasses, headerClasses } from "./styles";
import TextAreaBlock from "./textAreaBlock";
import useQuestionForm from "./useQuestionForm";

const FormForCreatingQuestionsByAI = ({ course, theme }: TQuizMetadata) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useQuestionForm({ topicName: theme }, t("required"));

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TFields> = (data) => {
    console.log(data);
    navigate("/questionsCreatedByAI");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto pb-6">
      <div className={headerClasses}>{t("header.formCreateByAI")}</div>
      <div className={formContainerClasses}>
        <div className="mx-auto w-[90%]">
          <div className="p-8 text-lg font-bold text-blue-100">
            {t("header.course")} {course}
          </div>
          <div className="mx-auto">
            <TextAreaBlock
              placeholder={t("placeholder.topic")}
              register={register}
              fieldName="topicName"
              styles=""
              error={errors.topicName}
            />
          </div>
          <div className="mt-12 2xl:mb-[8vh]">
            <TextAreaBlock
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
