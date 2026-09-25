import { useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@shared/lib";

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
            disabled={false}
            type="button"
            onClick={() => {}}
          ></Button>
        </DialogTrigger>

        {/* Портал для рендеринга диалога в указанном контейнере */}

        <DialogContent
          className={cn(
            "left-[50%] w-full md:w-[90%] lg:left-[55%] lg:w-[70%] 2xl:w-[60%] 3xl:w-[50%]"
          )}
        >
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
