import * as yup from "yup";

export const createSchema = (questionsCount: number) =>
  yup.object({
    radioInputFromSurvey: yup
      .array()
      .of(yup.string().required("Выберите вариант ответа"))
      .required()
      .length(questionsCount, "Ответьте на все вопросы"),
  });
