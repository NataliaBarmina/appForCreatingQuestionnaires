import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@shared/chadcn";

import { Button } from "./buttons";

export type TQuestion = {
  courseName?: string;
  themeName?: string;
  themeID?: string;
  questionID?: string;
  question?: string;
  answer_1?: string;
  answer_2?: string;
  answer_3?: string;
};

type TAlertProps = {
  handleCreateManualQuestion?: () => void;
  onDelete?: () => void;
  alertDialogTitle: string;
  alertDialogDescription: string;
  alertDialogAction: string;
  alertDialogCancel: string;
  buttonLabel: string;
  type?: "submit" | "reset" | "button";
  size: "middle" | "small" | "big";
  isFormValid?: boolean;
  isSubmitting?: boolean;
  item?: TQuestion;
  index?: number;
};
//todo - надо ли isFormValid && !isSubmitting - для редактирования вопросов точно не надо, а для остальных компонент?
export const Alert = ({
  alertDialogTitle,
  alertDialogDescription,
  alertDialogAction,
  alertDialogCancel,
  buttonLabel,
  type,
  size,
  isFormValid,
  isSubmitting,
  handleCreateManualQuestion,
  onDelete,
}: TAlertProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        buttonLabel={buttonLabel}
        size={size}
        disabled={false}
        type={type}
        onClick={() => setIsOpen(true)}
      />
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        {/* Показываем Alert только если форма валидна */}
        {isFormValid && !isSubmitting && (
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{alertDialogTitle}</AlertDialogTitle>
              <AlertDialogDescription>{alertDialogDescription}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handleCreateManualQuestion || onDelete}>
                {alertDialogCancel}
              </AlertDialogCancel>
              <AlertDialogAction>{alertDialogAction}</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        )}
      </AlertDialog>
    </>
  );
};
