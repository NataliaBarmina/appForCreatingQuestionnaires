import { useTranslation } from "react-i18next";

import { LoadingError, Preloader, EmptyState, ConfirmActionDialog } from "@shared/ui";

import { useGetQuestionsByTheme } from "../api/use-editing-questions";
import { EditQuestionDialog } from "./edit-question-dialog";
import { BlockedFieldWithAnswersAndQuestions } from "./blocked-field-answers-questions";
import { greenContainerStyles } from "./styles";

export const EditQuestionContent = ({ themeID }: { themeID: string }) => {
  const { t } = useTranslation();
  const { data = [], isLoading, isError, error } = useGetQuestionsByTheme(themeID);

  // todo
  const onDelete = (id: string) => {
    console.log(id);
    alert("удалить вопрос");
  };

  const hasQuestions = data.length > 0;
  if (isLoading) <Preloader />;
  if (isError) <LoadingError message={error.message} />;

  const isEmptyState = !isError && !isLoading && !hasQuestions;

  return (
    <>
      {isEmptyState ? (
        <EmptyState message={t("emptyState.noQuestions")} />
      ) : (
        data.map((item, index) => (
          <div key={item.id} className={greenContainerStyles}>
            <h3 className="py-6 text-lg font-bold text-blue-100">{`${t("header.questionNumber")} ${index + 1}`}</h3>

            <BlockedFieldWithAnswersAndQuestions
              question={item.question}
              correctAnswer={item.answer_1}
              wrongAnswer1={item.answer_2}
              wrongAnswer2={item.answer_3}
            />
            <div className="mb-8 flex w-full justify-evenly py-10">
              <div>
                <EditQuestionDialog
                  question={item.question}
                  correctAnswer={item.answer_1}
                  wrongAnswer1={item.answer_2}
                  wrongAnswer2={item.answer_3}
                  questionID={item.id}
                />
              </div>
              <div>
                <ConfirmActionDialog
                  alertDialogTitle={t("alert.title")}
                  alertDialogDescription={t("alert.deleteWarning")}
                  alertDialogAction={t("alert.continueEditing")}
                  alertDialogCancel={t("alert.deleteQuestion")}
                  buttonLabel={t("buttonLabel.delete")}
                  size="middle"
                  onDelete={() => onDelete(item.id)}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};
