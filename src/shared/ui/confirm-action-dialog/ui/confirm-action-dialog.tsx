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
} from "./alert-dialog";

import { Button } from "../../button/button";
import { TConfirmActionDialog } from "../model/types";

export const ConfirmActionDialog = ({
  alertDialogTitle,
  alertDialogDescription,
  alertDialogAction,
  alertDialogCancel,
  buttonLabel,
  isFormValid,
  isSubmitting,
  type,
  size,
  onConfirm,
}: TConfirmActionDialog) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        buttonLabel={buttonLabel}
        size={size}
        disabled={!isFormValid}
        type={type}
        onClick={() => setIsOpen(true)}
      />
      {isFormValid && !isSubmitting && (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{alertDialogTitle}</AlertDialogTitle>
              <AlertDialogDescription>{alertDialogDescription}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={onConfirm}>{alertDialogAction}</AlertDialogAction>
              <AlertDialogCancel>{alertDialogCancel}</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};
