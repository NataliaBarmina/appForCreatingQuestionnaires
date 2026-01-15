import Button from "../ui/buttons";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogPortal,
  DialogTitle,
  DialogOverlay,
  DialogDescription,
  DialogClose,
} from "@ui/dialog";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import Form from "./form";
import { TFormForEditingQuestions } from "./types";

const FormForEditingQuestions = ({
  question,
  correctAnswer,
  wrongAnswer1,
  wrongAnswer2,
  course,
  theme,
  questionID,
}: TFormForEditingQuestions) => {
  const container = useRef(null); // реф для контейнера, в котором будет рендериться диалог
  const [open, setOpen] = useState(false); // управление открытием/закрытием диалога

  const closeDialog = () => {
    setOpen(false);
  };
  const { t } = useTranslation();
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
        <DialogPortal container={container.current}>
          <DialogOverlay />
          <DialogContent>
            <DialogTitle />
            <DialogDescription />
            <Form
              closeDialog={closeDialog}
              question={question}
              correctAnswer={correctAnswer}
              wrongAnswer1={wrongAnswer1}
              wrongAnswer2={wrongAnswer2}
              course={course}
              theme={theme}
              questionID={questionID}
            />
          </DialogContent>
        </DialogPortal>
        {/* закрытие при клике вне области */}
        <DialogClose onClick={closeDialog} />
      </Dialog>
      {/* Контейнер, в котором будет рендериться диалог (через портал) */}
      <div ref={container} />
    </div>
  );
};
export default FormForEditingQuestions;
