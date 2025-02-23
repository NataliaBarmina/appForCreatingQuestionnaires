import Button_3 from "../../../common/commonButtons";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
} from "../../../chadcnComponents/ui/dialog";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Textarea } from "../../../common/createFields";
import { TFields } from "../../../common/createFields";
import { Button_2 } from "../../../common/commonButtons";
import classNames from "classnames";

function FormForEditingQuestions() {
  const [container, setContainer] = useState(null);
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button_3 buttonName={"редактировать"}></Button_3>
        </DialogTrigger>
        <DialogPortal container={container}>
          <DialogOverlay />
          <DialogContent>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                closeDialog();
              }}
            >
              <button type="submit">Submit</button>
            </form>
            <Form closeDialog={closeDialog} />
          </DialogContent>
        </DialogPortal>
      </Dialog>

      <div ref={setContainer} />
    </div>
  );
}
export default FormForEditingQuestions;

const schema = yup.object({
  questionForEditing: yup.string().required("Вопрос обязателен"),
  answerForEditing1: yup.string().required("Ответ обязателен"),
  answerForEditing2: yup.string().required("Ответ обязателен"),
  answerForEditing3: yup.string().required("Ответ обязателен"),
});

const Form = ({ closeDialog }: { closeDialog: () => void }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TFields> = (data, errors) => {
    console.log(data);
    alert("сохраняем вопрос");
    closeDialog();
  };

  const handleDelete = () => {
    alert("Удаляем вопрос");
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
          Измените вопрос
        </div>
        <div className="mx-auto w-[95%]">
          <div className="mb-3">
            <Textarea
              placeholder="вопрос"
              register={register}
              fieldName="questionForEditing"
              defaultValue=""
              disabled={false}
              styles={
                errors.questionForEditing
                  ? "border-pink-900 border-[3.5px]"
                  : ""
              }
            />
          </div>
          <div className="s:ml-[2rem] s:w-[93%]">
            <div>правильный ответ</div>
            <Textarea
              placeholder="ответ"
              register={register}
              fieldName="answerForEditing1"
              defaultValue=""
              disabled={false}
              styles={
                errors.answerForEditing1 ? "border-pink-900 border-[2px]" : ""
              }
            />
            <div>неправильный ответ</div>
            <Textarea
              placeholder="ответ"
              register={register}
              fieldName="answerForEditing2"
              defaultValue=""
              disabled={false}
              styles={
                errors.answerForEditing2 ? "border-pink-900 border-[2px]" : ""
              }
            />
            <div>неправильный ответ</div>
            <Textarea
              placeholder="ответ"
              register={register}
              fieldName="answerForEditing3"
              defaultValue=""
              disabled={false}
              styles={
                errors.answerForEditing3 ? "border-pink-900 border-[2px] " : ""
              }
            />
          </div>
        </div>
        {hasErrors && (
          <div className="mx-auto block text-center text-xl text-pink-900">
            ПОЛЕ ОБЯЗАТЕЛЬНО
          </div>
        )}
        <div className="mx-auto mb-12 mt-6 flex w-[80%] justify-between px-[4vw]">
          <Button_2
            buttonName="сохранить"
            disabled={!!hasErrors}
            type="button"
            onclick={handleSubmit(onSubmit)}
          />
          <Button_2 buttonName="удалить" onclick={handleDelete} type="button" />
        </div>
      </div>
    </form>
  );
};
