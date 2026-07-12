import { Button } from "@shared/ui";
import { useTranslation } from "react-i18next";
import { QuestionItem } from "./question-item";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import shuffle from "lodash-es/shuffle";
import { useGetQuestions } from "../../pages/questionnaire/use-get-questions";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldsError } from "@shared/ui/fields-error";
import { LoadingError } from "@shared/ui/loading-error";

type TFormValues = {
  radioInputFromSurvey: string[];
};

const createSchema = (questionsCount: number) =>
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

export const FormQuestionnaire = ({ data }: { data: any }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const questionsList = useMemo(() => {
    return shuffle(data).slice(0, 10);
  }, [data]);

  const schema = useMemo(() => {
    return createSchema(questionsList.length);
  }, [questionsList.length]);

  const methods = useForm<TFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      radioInputFromSurvey: [],
    },
  });

  const {
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<TFormValues> = (formData) => {
    navigate("/resultsOfTheQuestionnaire", {
      state: {
        answers: formData.radioInputFromSurvey,
        questionsList,
      },
    });
  };
  const radioInputFromSurveyErrors = errors.radioInputFromSurvey;
  const rootError = radioInputFromSurveyErrors?.root;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="pb-10">
        <div className="px-4 py-7 text-[150%] font-bold">{t("header.answerToQuestion")}</div>

        {questionsList.map((item, index: number) => (
          <QuestionItem
            key={item.id}
            correctAnswer={item.answer_1}
            wrongAnswer_1={item.answer_2}
            wrongAnswer_2={item.answer_3}
            index={index}
            question={item.question}
            headerQuestionNumber={t("header.questionNumber")}
            errorMessage={radioInputFromSurveyErrors?.[index]?.message}
          />
        ))}
        {rootError && <FieldsError message={rootError?.message} />}
        <Button type="submit" buttonLabel={t("buttonLabel.save")} size="middle" />
      </form>
    </FormProvider>
  );
};
