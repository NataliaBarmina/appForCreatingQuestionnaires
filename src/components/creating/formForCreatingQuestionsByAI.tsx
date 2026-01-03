import { SubmitHandler } from "react-hook-form";
import { TFields } from "@commonComponents/createFields";
import Button from "@commonComponents/buttons";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

type TFormForCreatingTheme = {
  course: string;
  theme: string;
};

const FormForCreatingQuestionsByAI = ({
  course,
  theme,
}: TFormForCreatingTheme) => {
  const { t } = useTranslation();

  const { register, handleSubmit } = useForm<TFields>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<TFields> = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-4"></div>
      <div>{`Курс ${course}`}</div> //todo - оформить и добавить выбор сколько
      вопросов
      <div>{`Тема ${theme}`}</div>
      <div>
        <Button buttonLabel={t("buttonLabel.send")} size="middle" />
      </div>
    </form>
  );
};
export default FormForCreatingQuestionsByAI;
