import Button from "./buttons";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@ui/alert-dialog";

type AlertProps = {
  //   onDelete: () => void; // Функция, которая будет вызываться при удалении
  //   onContinue: () => void; // Функция, которая будет вызываться при продолжении
  whatToDo: string;
  alertDialogTitle: string;
  alertDialogDescription: string;
  alertDialogAction: string;
  alertDialogCancel: string;
  buttonName: string;
  type?: "submit" | "reset" | "button";
  isFormValid?: boolean;
  isSubmitting?: boolean;
  onClick?: () => void;
};

const Alert = ({
  whatToDo,
  alertDialogTitle,
  alertDialogDescription,
  alertDialogAction,
  alertDialogCancel,
  buttonName,
  type,
  isFormValid,
  isSubmitting,
  onClick,
  ...props
}: AlertProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button
          buttonName={buttonName}
          size="small"
          disabled={false}
          type={type}
        />
      </AlertDialogTrigger>
      {/* Показываем Alert только если форма валидна */}
      {isFormValid && !isSubmitting && (
        <div>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{alertDialogTitle}</AlertDialogTitle>
              <AlertDialogDescription>
                {alertDialogDescription}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel data_what_to_do={whatToDo} onClick={onClick}>
                {alertDialogCancel}
              </AlertDialogCancel>
              <AlertDialogAction>{alertDialogAction}</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </div>
      )}
    </AlertDialog>
  );
};
export default Alert;
