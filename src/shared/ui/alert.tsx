import { Button } from "./buttons";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@ui/alert-dialog";
import { useState } from "react";
import { TQuestion } from "../types/commonTypes";

type TAlertProps = {
  onClick?: () => void;
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
  onClick,
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
              <AlertDialogCancel onClick={onClick}>{alertDialogCancel}</AlertDialogCancel>
              <AlertDialogAction>{alertDialogAction}</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        )}
      </AlertDialog>
    </>
  );
};
