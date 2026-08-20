import * as yup from "yup";

export const createSchema = () =>
  yup.object({
    radioInputFromSurvey: yup
      .array()
      .of(yup.string().required("Выберите вариант ответа"))
      .required(),
  });
