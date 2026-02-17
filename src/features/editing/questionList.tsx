import { Alert } from "@shared/ui";
import { FormForEditingQuestions } from "@shared/editingQuestions/formForEditingQuestions";
import { BlockedFieldWithAnswersAndQuestions } from "@shared/createFields";
import { useTranslation } from "react-i18next";
import { HeadersBlock } from "@shared/ui";
import { cn } from "@lib/utils";
import { useSelector } from "react-redux";
import { TRootState } from "@store/store";
import { useDispatch } from "react-redux";
import { deleteQuestion } from "@store/questions/questionsReducer";
import type { TQuestion } from "@shared/types/commonTypes";

const greenContainerStyles = cn(
  "mx-auto mb-8 w-[100vw] bg-green-800 px-8",
  "s:w-[90vw] s:rounded-2xl",
  "md:w-[65vw]",
  "lg:w-[55vw]",
  "xl:w-[50vw]",
  "2xl:w-[45vw]"
);

export const QuestionList = ({ courseName, themeName, themeID }: TQuestion) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const onDelete = (id: string) => {
    dispatch(
      deleteQuestion({
        questionID: id,
      })
    );
  };
  const objectQuestions = useSelector((state: TRootState) => state.questions.questions);
  const questions: TQuestion[] = Object.values(objectQuestions);
  const selectedQuestions = questions.filter((question) => question.themeID === themeID);

  return (
    <div>
      <div className="pb-1">
        <HeadersBlock
          questionsGeneratedByAIHeader={t("header.editQuestion")}
          courseHeader={t("header.course")}
          themeHeader={t("header.theme")}
          courseName={courseName}
          themeName={themeName}
        />

        {selectedQuestions.map((item, index) => (
          <div key={item.questionID} className={greenContainerStyles}>
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
                  questionID={item.questionID}
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
                  onDelete={() => onDelete(item.questionID)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default QuestionList;
