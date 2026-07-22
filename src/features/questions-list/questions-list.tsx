import { useTranslation } from "react-i18next";
import { cn } from "@lib/utils";

import { Alert, BlockedFieldWithAnswersAndQuestions } from "@shared/ui";

import { FormForEditingQuestions } from "@features/questions-list/form-editing-questions/formForEditingQuestions";

const greenContainerStyles = cn(
  "mx-auto mb-8 w-[100vw] bg-green-800 px-8",
  "s:w-[90vw] s:rounded-2xl",
  "md:w-[65vw]",
  "lg:w-[55vw]",
  "xl:w-[50vw]",
  "2xl:w-[45vw]"
);
export type TQuestionList = {
  answer_1: string;
  answer_2: string;
  answer_3: string;
  id: string;
  question: string;
};

export const QuestionsList = ({ data }: { data: TQuestionList[] }) => {
  const { t } = useTranslation();

  const onDelete = (id: string) => {
    console.log(id);
    alert("удалить вопрос");
  };
  return (
    <>
      {data.map((item, index) => (
        <div key={item.id} className={greenContainerStyles}>
          <div className="py-6 text-lg font-bold text-blue-100">{`${t("header.questionNumber")} ${index + 1}`}</div>
          <BlockedFieldWithAnswersAndQuestions
            question={item.question}
            correctAnswer={item.answer_1}
            wrongAnswer1={item.answer_2}
            wrongAnswer2={item.answer_3}
          />
          <div className="mb-8 flex w-full justify-evenly py-10">
            <div>
              <FormForEditingQuestions
                question={item.question}
                correctAnswer={item.answer_1}
                wrongAnswer1={item.answer_2}
                wrongAnswer2={item.answer_3}
                questionID={item.id}
              />
            </div>
            <div>
              <Alert
                alertDialogTitle={t("alert.title")}
                alertDialogDescription={t("alert.deleteWarning")}
                alertDialogAction={t("alert.continueEditing")}
                alertDialogCancel={t("alert.deleteQuestion")}
                buttonLabel={t("buttonLabel.delete")}
                isFormValid={true}
                isSubmitting={false}
                size="middle"
                onDelete={() => onDelete(item.id)}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
