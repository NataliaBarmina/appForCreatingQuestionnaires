import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, FieldsError } from "@shared/ui";
import { createSchema } from "../model/questionnaire-schema";
import { TFormValues, TQuestion } from "../model/types";
import { QuestionItem } from "./question-item";

export const QuestionnaireForm = ({ questions }: { questions: TQuestion[] }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const schema = createSchema(questions.length);

  const form = useForm<TFormValues>({
    resolver: yupResolver(schema),
  });

  function onSubmit(data: TFormValues) {
    navigate("/questionnaire/results", {
      state: {
        answers: data.radioInputFromSurvey,
        questions,
      },
    });
  }

  const answersErrors = form.formState.errors.radioInputFromSurvey;
  const generalErrorMessage = answersErrors?.root?.message;

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pb-10">
        {questions.map((questionItem, index) => (
          <QuestionItem
            key={questionItem.id}
            questionItem={questionItem}
            index={index}
            errorMessage={answersErrors?.[index]?.message}
          />
        ))}

        {generalErrorMessage && <FieldsError message={generalErrorMessage} />}

        <Button type="submit" buttonLabel={t("buttonLabel.save")} />
      </form>
    </FormProvider>
  );
};
