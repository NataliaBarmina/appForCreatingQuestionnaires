import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TFields } from "@commonComponents/createFields";
import { TQuestion } from "@store/commonTypes";

export const useFormConfig = (
  questionsList: TQuestion[],
  navigate: (path: string, options?: any) => void, // тип навигации
) => {
  const schema = yup.object({
    radioInputFromSurvey: yup
      .array()
      .of(yup.string().required("Выберите вариант ответа")),
  });

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      radioInputFromSurvey: questionsList.map(() => ""),
    },
  });

  const onSubmit: SubmitHandler<TFields> = (data) => {
    console.log("Выбранные ответы:", data.radioInputFromSurvey);
    data.radioInputFromSurvey.forEach((answer, index) => {
      console.log(`Вопрос ${index + 1}: выбран ответ — ${answer}`);
    });

    navigate("/resultsOfTheQuestionnaire", {
      state: { answers: data.radioInputFromSurvey },
    });
  };

  return {
    ...methods,
    onSubmit,
  };
};
