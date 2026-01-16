import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TFields } from "@/shared/createFields/textarea";
import { TQuestion } from "@shared/types/commonTypes";

export const useFormConfig = (
  questionsList: TQuestion[],
  navigate: (path: string, options?: any) => void
) => {
  const schema = yup.object({
    radioInputFromSurvey: yup
      .array()
      .of(yup.string().required("Выберите вариант ответа"))
      .required("Выберите хотя бы один ответ"),
  });

  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {
      radioInputFromSurvey: questionsList.map(() => ""),
    },
  });

  const onSubmit: SubmitHandler<TFields> = (data) => {
    navigate("/resultsOfTheQuestionnaire", {
      state: { answers: data.radioInputFromSurvey, questionsList },
    });
  };

  return {
    ...methods,
    onSubmit,
  };
};
