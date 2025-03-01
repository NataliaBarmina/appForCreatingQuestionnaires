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
} from "../../chadcnComponents/ui/alert-dialog";

type AlertProps = {
  //   onDelete: () => void; // Функция, которая будет вызываться при удалении
  //   onContinue: () => void; // Функция, которая будет вызываться при продолжении
  whatToDo: string;
  alertDialogTitle: string;
  alertDialogDescription: string;
  alertDialogAction: string;
  alertDialogCancel: string;
  buttonName: string;
};

const Alert = ({
  whatToDo,
  alertDialogTitle,
  alertDialogDescription,
  alertDialogAction,
  alertDialogCancel,
  buttonName,
  ...props
}: AlertProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button
          buttonName={buttonName}
          size="small"
          disabled={false}
          type="button"
          onclick={() => {}}
        />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{alertDialogTitle}</AlertDialogTitle>
          <AlertDialogDescription>
            {alertDialogDescription}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel data_what_to_do={whatToDo}>
            {alertDialogCancel}
          </AlertDialogCancel>
          <AlertDialogAction>{alertDialogAction}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default Alert;
