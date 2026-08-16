import { useTranslation } from "react-i18next";

import { EditQuestionDialog } from "@features/edit-question";
import { DeleteQuestionDialog } from "@features/delete-question";
import { QuestionDetail, TQuestionList } from "@entities/question";

import { greenContainerStyles } from "./styles";

export const QuestionEditor = ({ data }: { data: TQuestionList[] }) => {
  const { t } = useTranslation();

  return (
    <>
      {data.map((item: any, index: number) => (
        <div key={item.id} className={greenContainerStyles}>
          <h3 className="py-6 text-lg font-bold text-blue-100">{`${t("header.questionNumber")} ${index + 1}`}</h3>

          <QuestionDetail questionItem={item} />

          <div className="mb-8 flex w-full justify-evenly py-10">
            <EditQuestionDialog questionItem={item} />

            <DeleteQuestionDialog questionID={item.id} />
          </div>
        </div>
      ))}
    </>
  );
};
