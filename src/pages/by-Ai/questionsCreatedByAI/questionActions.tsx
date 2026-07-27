import { Alert } from "@shared/ui";
// import { EditQuestionDialog } from "@features/questions-list/ui/edit-question-dialog";
import { useTranslation } from "react-i18next";

export type TQuizQuestion = {
  question: string;
  correctAnswer: string;
  wrongAnswer1: string;
  wrongAnswer2: string;
};

export const QuestionActions = ({
  question,
  correctAnswer,
  wrongAnswer1,
  wrongAnswer2,
}: TQuizQuestion) => {
  const { t } = useTranslation();
  return (
    <div className={"mb-8 flex w-full justify-around py-8"}>
      <div>
        <Alert
          alertDialogTitle={t("alert.title")}
          alertDialogDescription={t("alert.checkQuestions")}
          alertDialogAction={t("alert.continueEditing")}
          alertDialogCancel={t("alert.saveQuestion")}
          buttonLabel={t("buttonLabel.save")}
          isFormValid={true}
          isSubmitting={false}
          size="small"
        />
      </div>
      <div>
        {/* <EditQuestionDialog
          question={question}
          correctAnswer={correctAnswer}
          wrongAnswer1={wrongAnswer1}
          wrongAnswer2={wrongAnswer2}
        /> */}
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
          size="small"
        />
      </div>
    </div>
  );
};
