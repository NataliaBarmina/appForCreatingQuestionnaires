import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Button } from "@shared/ui";
import { greenContainerStyles } from "./styles";

//todo - оформить и добавить выбор сколько вопросов - shadcn

export const AIQuestionCreationContent = ({
  themeID,
  courseName,
  themeName,
}: {
  themeID: string;
  courseName: string;
  themeName: string;
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // const { register, handleSubmit } = useForm<TFields>({
  //   mode: "onBlur",
  // });

  // const onSubmit: SubmitHandler<TFields> = (data) => {};
  return (
    <div className={greenContainerStyles}>
      {" "}
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <Button
        buttonLabel={t("buttonLabel.send")}
        size="middle"
        onClick={() =>
          navigate("/questionsCreatedByAI", { state: { themeID, courseName, themeName } })
        }
      />
      {/* </form> */}
    </div>
  );
};
