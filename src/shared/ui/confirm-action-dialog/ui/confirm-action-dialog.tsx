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
        disabled={false}
        type={type}
        onClick={() => setIsOpen(true)}
      />
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{alertDialogTitle}</AlertDialogTitle>
            <AlertDialogDescription>{alertDialogDescription}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={onConfirm}>{alertDialogCancel}</AlertDialogCancel>
            <AlertDialogAction>{alertDialogAction}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
