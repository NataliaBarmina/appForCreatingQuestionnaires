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

export type TConfirmActionDialog = {
  onConfirm?: () => void;
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
