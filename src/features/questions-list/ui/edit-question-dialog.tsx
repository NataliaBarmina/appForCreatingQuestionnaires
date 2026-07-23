import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@ui/dialog";

import { Button } from "@shared/ui";
import { EditQuestionForm } from "./edit-question-form";
import { TEditQuestionDialog } from "../model/types";

export const EditQuestionDialog = ({
  question,
  correctAnswer,
  wrongAnswer1,
  wrongAnswer2,
  questionID,
}: TEditQuestionDialog) => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false); // управление открытием/закрытием диалога

  const closeDialog = () => {
    setOpen(false);
  };

  return (
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
          correctAnswer={correctAnswer}
          wrongAnswer1={wrongAnswer1}
          wrongAnswer2={wrongAnswer2}
          questionID={questionID}
        />
      </DialogContent>
    </Dialog>
  );
};
