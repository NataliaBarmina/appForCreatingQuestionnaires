import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@shared/ui";

import { Button } from "@shared/ui";
import { EditQuestionForm } from "./edit-question-form";
import { TQuestionList } from "@entities/question";

export const EditQuestionDialog = ({ questionItem }: { questionItem: TQuestionList }) => {
  const { t } = useTranslation();
  const { question, answer_1, answer_2, answer_3, id } = questionItem;

  const [open, setOpen] = useState(false); // управление открытием/закрытием диалога

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            buttonLabel={t("buttonLabel.edit")}
            size="middle"
            disabled={false}
            type="button"
            onClick={() => {}}
          ></Button>
        </DialogTrigger>
        {/* Портал для рендеринга диалога в указанном контейнере */}
        <DialogContent>
          <DialogTitle className="sr-only">Редактирование вопроса</DialogTitle>
          <EditQuestionForm
            closeDialog={closeDialog}
            question={question}
            correctAnswer={answer_1}
            wrongAnswer1={answer_2}
            wrongAnswer2={answer_3}
            questionID={id}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
