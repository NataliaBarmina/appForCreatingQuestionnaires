import Alert from "@commonComponents/alert";
import FormForEditingQuestions from "@commonComponents/formForEditingQuestions/formForEditingQuestions";
import BlockedFieldWithAnswersAndQuestions from "@commonComponents/blockedFieldWithAnswersAndQuestions";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import HeadersBlock from "../commonComponents/headersBlock";
import { cn } from "@lib/utils";
import { useDispatch } from "react-redux";
// import { deleteQuestion } from "@reducers/actions";
import { useSelector } from "react-redux";
import { TRootState } from "@store/store";

const greenContainerStyles = cn(
  "mx-auto mb-8 w-[100vw] bg-green-800 px-8",
  "s:w-[90vw] s:rounded-2xl",
  "md:w-[65vw]",
  "lg:w-[55vw]",
  "xl:w-[50vw]",
  "2xl:w-[45vw]"
);

type TQuestion = {
  courseName: string;
  themeID: string;
  question: string;
  answer_1: string;
  answer_2?: string;
  answer_3?: string;
  id: string;
};

const QuestionList = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { course, theme, themeID } = location.state || {};

  // const dispatch = useDispatch();

  // const onDelete = (index: number) => {
  //   dispatch(
  //     deleteQuestion({
  //       course: course,
  //       topic: theme,
  //       questionIndex: index,
  //     }),
  //   );
  // };

  const objectQuestions = useSelector((state: TRootState) => state.addTheme.questions);
  const questions: TQuestion[] = Object.values(objectQuestions);
  const selectedQuestions = questions.filter((question) => question.themeID === themeID);

  return (
    <div>
      <div className="pb-1">
        <HeadersBlock
          questionsGeneratedByAIHeader={t("header.editQuestion")}
          courseHeader={t("header.course")}
          themeHeader={t("header.theme")}
          course={course}
          theme={theme}
        />

        {selectedQuestions.map((item, index) => (
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
                  course={course}
                  theme={theme}
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
                  // item={item}
                  index={index}
                  // onClick={() => onDelete(index)}
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
