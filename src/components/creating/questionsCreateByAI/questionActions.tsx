import Alert from "@commonComponents/alert";
import FormForEditingQuestions from "@commonComponents/formForEditingQuestions";
import { useTranslation } from "react-i18next";

type TQuestionActions = {
  question: string;
  correctAnswer: string;
  wrongAnswer1: string;
  wrongAnswer2: string;
};

const QuestionActions = ({
  question,
  correctAnswer,
  wrongAnswer1,
  wrongAnswer2,
}: TQuestionActions) => {
  const { t } = useTranslation();
  return (
    <div className={"mb-8 flex w-full justify-around py-8"}>
      <div>
        <Alert
          whatToDo={
            //todo: потом удалить
            "сохраняем данные в стэйт и удаляем вопрос из временного хранилища"
          }
          alertDialogTitle={t("alert.title")}
          alertDialogDescription={t("alert.checkQuestions")}
          alertDialogAction={t("alert.continueEditing")}
          alertDialogCancel={t("alert.saveQuestion")}
          buttonLabel={t("buttonLabel.save")}
          isFormValid={true}
          isSubmitting={false}
          onContinue={() => {}}
          size="small"
        />
      </div>
      <div>
        <FormForEditingQuestions
          question={question}
          correctAnswer={correctAnswer}
          wrongAnswer1={wrongAnswer1}
          wrongAnswer2={wrongAnswer2}
        />
      </div>
      <div>
        <Alert
          whatToDo={"удаляем вопрос из временного хранилища"} //todo: потом удалить
          alertDialogTitle={t("alert.title")}
          alertDialogDescription={t("alert.deleteWarning")}
          alertDialogAction={t("alert.continueEditing")}
          alertDialogCancel={t("alert.deleteQuestion")}
          buttonLabel={t("buttonLabel.delete")}
          isFormValid={true}
          isSubmitting={false}
          onContinue={() => {}}
          size="small"
        />
      </div>
    </div>
  );
};
export default QuestionActions;
