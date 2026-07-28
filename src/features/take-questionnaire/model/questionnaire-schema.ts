import * as yup from "yup";

export const createSchema = (questionsCount: number) =>
  yup.object({
    radioInputFromSurvey: yup
      .array()
      .of(yup.string().required("Выберите вариант ответа"))
      .test("all-questions-answered", "Ответьте на все вопросы", (answers) => {
        return Array.from({ length: questionsCount }).every((_, index) =>
          Boolean(answers?.[index])
        );
      })
      .required("Ответьте на все вопросы"),
  });
