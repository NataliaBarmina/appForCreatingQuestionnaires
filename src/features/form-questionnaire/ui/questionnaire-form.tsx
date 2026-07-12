import { Button } from "@shared/ui";
import { useTranslation } from "react-i18next";
import { QuestionItem } from "../question-item";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import shuffle from "lodash-es/shuffle";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldsError } from "@shared/ui/fields-error";
import { createSchema } from "../model/questionnaire-schema";
import { TQuestion, TFormValues } from "../model/types";

const QUESTIONS_LIMIT = 10;

export const QuestionnaireForm = ({ questions }: { questions: TQuestion[] }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [questionsList] = useState(() => shuffle(questions).slice(0, QUESTIONS_LIMIT)); // перемешиваем вопросы и берем первые 10

  const schema = createSchema(questionsList.length); //создаём схему валидации для 10 ответов

  const form = useForm<TFormValues>({
    resolver: yupResolver(schema),
  }); // чтобы не передавать через props register, control и пр.Вложенный компонент получает методы формы через useFormContext

  const errors = form.formState.errors;

  function onSubmit(formData: TFormValues) {
    const answers = formData.radioInputFromSurvey;

    navigate("/resultsOfTheQuestionnaire", {
      state: {
        answers,
        questionsList,
      },
    });
  }

  const answersErrors = errors.radioInputFromSurvey;
  const generalErrorMessage = answersErrors?.root?.message;

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pb-10">
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
            errorMessage={answersErrors?.[index]?.message}
          />
        ))}

        {generalErrorMessage && <FieldsError message={generalErrorMessage} />}

        <Button type="submit" buttonLabel={t("buttonLabel.save")} size="middle" />
      </form>
    </FormProvider>
  );
};
