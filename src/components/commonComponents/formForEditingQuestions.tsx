import Button from "./buttons";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogPortal,
  DialogTitle,
  DialogOverlay,
  DialogDescription,
} from "@ui/dialog";
import { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Textarea, TFields } from "./createFields";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

type MyProps = {
  question?: string;
  correctAnswer?: string;
  wrongAnswer1?: string;
  wrongAnswer2?: string;
  closeDialog?: () => void;
};

function FormForEditingQuestions({
  question,
  correctAnswer,
  wrongAnswer1,
  wrongAnswer2,
}: MyProps) {
  const container = useRef(null);
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };
  const { t } = useTranslation();
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button
            buttonLabel={t("buttonLabel.edit")}
            size="small"
            disabled={false}
            type="button"
            onClick={() => {}}
          ></Button>
        </DialogTrigger>
        <DialogPortal container={container.current}>
          <DialogOverlay />
          <DialogContent>
            <DialogTitle />
            <DialogDescription />
            <form
              onSubmit={(event) => {
                event.preventDefault();
                closeDialog();
              }}
            >
              <button type="submit">Submit</button>
            </form>
            <Form
              closeDialog={closeDialog}
              question={question}
              correctAnswer={correctAnswer}
              wrongAnswer1={wrongAnswer1}
              wrongAnswer2={wrongAnswer2}
            />
          </DialogContent>
        </DialogPortal>
      </Dialog>

      <div ref={container} />
    </div>
  );
}
export default FormForEditingQuestions;

const Form = ({
  closeDialog,
  question,
  correctAnswer,
  wrongAnswer1,
  wrongAnswer2,
}: MyProps) => {
  const { t } = useTranslation();

  const requiredString = yup.string().required(t("required"));

  const schema = yup.object({
    questionForEditing: requiredString,
    answerForEditing1: requiredString,
    answerForEditing2: requiredString,
    answerForEditing3: requiredString,
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      questionForEditing: question,
      answerForEditing1: correctAnswer,
      answerForEditing2: wrongAnswer1,
      answerForEditing3: wrongAnswer2,
    },
  });

  const onSubmit: SubmitHandler<TFields> = (data, errors) => {
    console.log(data);
    alert("сохраняем вопрос"); //todo: need to remove
    closeDialog();
  };

  const handleDelete = () => {
    closeDialog();
  };

  const hasErrors =
    errors.questionForEditing ||
    errors.answerForEditing1 ||
    errors.answerForEditing2 ||
    errors.answerForEditing3;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={classNames(
          "mx-auto w-[100vw] bg-red-50",
          "border-2 border-solid border-gray-600",
          "s:rounded-2xl",
          "md:w-[90vw]",
          "lg:w-[75vw]",
          "xl:w-[70vw]",
          "2xl:w-[55vw]",
        )}
      >
        <div className="p-6 text-center text-[150%] font-bold">
          {t("header.changingQuestion")}
        </div>
        <div className="mx-auto w-[95%]">
          <div className="mb-3">
            <Textarea
              register={register}
              fieldName="questionForEditing"
              styles={
                errors.questionForEditing
                  ? "border-pink-900 border-[3.5px]"
                  : ""
              }
            />
          </div>
          <div className="s:ml-[2rem] s:w-[93%]">
            <div>{t("formLabel.correctAnswer").toLowerCase()}</div>
            <Textarea
              register={register}
              fieldName="answerForEditing1"
              styles={
                errors.answerForEditing1 ? "border-pink-900 border-[2px]" : ""
              }
            />
            <div>{t("formLabel.wrongAnswer").toLowerCase()}</div>
            <Textarea
              register={register}
              fieldName="answerForEditing2"
              styles={
                errors.answerForEditing2 ? "border-pink-900 border-[2px]" : ""
              }
            />
            <div>{t("formLabel.wrongAnswer").toLowerCase()}</div>
            <Textarea
              register={register}
              fieldName="answerForEditing3"
              styles={
                errors.answerForEditing3 ? "border-pink-900 border-[2px] " : ""
              }
            />
          </div>
        </div>
        <div className="mx-auto mb-12 mt-6 flex w-[80%] justify-between px-[4vw]">
          <Button
            buttonLabel={t("buttonLabel.save")}
            size="middle"
            disabled={!!hasErrors}
            type="button"
            onClick={handleSubmit(onSubmit)}
          />
          <Button
            buttonLabel={t("buttonLabel.closeForm")}
            size="middle"
            onClick={handleDelete}
            type="button"
          />
        </div>
      </div>
    </form>
  );
};
