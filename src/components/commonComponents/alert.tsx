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
  whatToDo: string; //todo: потом удалить

  //   onDelete: () => void; //??todo: Функция, которая будет вызываться при удалении
  onContinue?: () => void;

  alertDialogTitle: string;
  alertDialogDescription: string;
  alertDialogAction: string;
  alertDialogCancel: string;

  buttonLabel: string;
  type?: "submit" | "reset" | "button";

  isFormValid?: boolean;
  isSubmitting?: boolean;
};

const Alert = ({
  whatToDo, //todo: потом удалить
  alertDialogTitle,
  alertDialogDescription,
  alertDialogAction,
  alertDialogCancel,
  buttonLabel,
  type,
  isFormValid,
  isSubmitting,
  onContinue,
}: AlertProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button
          buttonLabel={buttonLabel}
          size="small"
          disabled={false}
          type={type}
        />
      </AlertDialogTrigger>

      {/* Показываем Alert только если форма валидна */}
      {isFormValid && !isSubmitting && (
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{alertDialogTitle}</AlertDialogTitle>
            <AlertDialogDescription>
              {alertDialogDescription}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              data_what_to_do={whatToDo} //todo: потом удалить
              onContinue={onContinue}
            >
              {alertDialogCancel}
            </AlertDialogCancel>
            <AlertDialogAction>{alertDialogAction}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      )}
    </AlertDialog>
  );
};
export default Alert;
