import { SubmitHandler } from "react-hook-form";
// import { TFields } from "@shared/createFields/textarea";
import { Button } from "@shared/ui";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import type { TTopic } from "@shared/types/commonTypes";

export const FormForCreatingQuestionsByAI = ({
  courseName,
  themeName,
  themeID, //todo - переписать код используя
}: TTopic) => {
  const { t } = useTranslation();

  // const { register, handleSubmit } = useForm<TFields>({
  //   mode: "onBlur",
  // });

  // const onSubmit: SubmitHandler<TFields> = (data) => {};

  return (
    <div>
      FORM
      {/* //{" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        // <div className="mt-4"></div>
        // <div>{`Курс ${courseName}`}</div> //todo - оформить и добавить выбор сколько вопросов //{" "}
        <div>{`Тема ${themeName}`}</div>
        //{" "}
        <div>
          // <Button buttonLabel={t("buttonLabel.send")} size="middle" />
          //{" "}
        </div>
        //{" "}
      </form> */}
    </div>
  );
};
