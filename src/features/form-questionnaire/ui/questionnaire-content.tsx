import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import shuffle from "lodash-es/shuffle";

import { Button, FieldsError } from "@shared/ui";

import { createSchema } from "../model/questionnaire-schema";
import { TFormValues, TQuestion } from "../model/types";
import { QuestionItem } from "./question-item";

const QUESTIONS_LIMIT = 10;

export const QuestionnaireContent = ({ questions }: { questions: TQuestion[] }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [questionsList] = useState(() => shuffle(questions).slice(0, QUESTIONS_LIMIT));

  const [schema] = useState(() => createSchema(questionsList.length));

  const form = useForm<TFormValues>({
    resolver: yupResolver(schema),
  });

  const answersErrors = form.formState.errors.radioInputFromSurvey;

  const generalErrorMessage = answersErrors?.root?.message;

  function onSubmit(formData: TFormValues) {
    navigate("/resultsOfTheQuestionnaire", {
      state: {
        answers: formData.radioInputFromSurvey,
        questionsList,
      },
    });
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pb-10">
        {questionsList.map((item, index) => (
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
