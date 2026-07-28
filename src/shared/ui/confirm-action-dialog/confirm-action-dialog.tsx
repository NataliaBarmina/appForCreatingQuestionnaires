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

import { Button } from "../button/button";

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

type TConfirmActionDialog = {
  handleCreateManualQuestion?: () => void;
  onDelete?: () => void;
  alertDialogTitle: string;
  alertDialogDescription: string;
  alertDialogAction: string;
  alertDialogCancel: string;
  buttonLabel: string;
  type?: "submit" | "reset" | "button";
  size: "middle" | "small" | "big";
  item?: TQuestion;
  index?: number;
};

export const ConfirmActionDialog = ({
  alertDialogTitle,
  alertDialogDescription,
  alertDialogAction,
  alertDialogCancel,
  buttonLabel,
  type,
  size,
  handleCreateManualQuestion,
  onDelete,
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
            <AlertDialogCancel onClick={handleCreateManualQuestion || onDelete}>
              {alertDialogCancel}
            </AlertDialogCancel>
            <AlertDialogAction>{alertDialogAction}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
