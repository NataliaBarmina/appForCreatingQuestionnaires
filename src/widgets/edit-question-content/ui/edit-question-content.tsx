import { useTranslation } from "react-i18next";

import { EditQuestionDialog } from "@features/edit-question";
import { DeleteQuestionDialog } from "@features/delete-question-dialog";
import { useGetQuestionsByTheme, QuestionDetail } from "@entities/question";
import { LoadingError, Preloader, EmptyState } from "@shared/ui";

import { greenContainerStyles } from "./styles";

export const EditQuestionContent = ({ themeID }: { themeID: string }) => {
  const { t } = useTranslation();

  const { data = [], isLoading, isError, error } = useGetQuestionsByTheme(themeID);

  if (isLoading) return <Preloader />;
  if (isError) return <LoadingError message={error.message} />;

  return (
    <>
      {data.length === 0 ? (
        <EmptyState message={t("emptyState.noQuestions")} />
      ) : (
        data.map((item, index) => (
          <div key={item.id} className={greenContainerStyles}>
            <h3 className="py-6 text-lg font-bold text-blue-100">{`${t("header.questionNumber")} ${index + 1}`}</h3>

            <QuestionDetail questionItem={item} />

            <div className="mb-8 flex w-full justify-evenly py-10">
              <EditQuestionDialog questionItem={item} />

              <DeleteQuestionDialog questionID={item.id} />
            </div>
          </div>
        ))
      )}
    </>
  );
};
