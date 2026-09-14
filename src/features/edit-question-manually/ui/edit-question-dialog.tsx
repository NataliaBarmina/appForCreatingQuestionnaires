import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  Button,
  DialogDescription,
} from "@shared/ui";
import { TQuestionList } from "@entities/question";
import { EditQuestionForm } from "./edit-question-form";

export const EditQuestionDialog = ({ questionItem }: { questionItem: TQuestionList }) => {
  const { t } = useTranslation();

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
          <DialogDescription className="sr-only">
            Форма для редактирования вопроса и вариантов ответа
          </DialogDescription>

          <EditQuestionForm onClose={closeDialog} questionItem={questionItem} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
