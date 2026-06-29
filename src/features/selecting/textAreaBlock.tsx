import { Textarea } from "@shared/createFields";
import { UseFormRegister } from "react-hook-form";
import { FieldError } from "react-hook-form";
import { TTextArea } from "./formForCreatingTheme";

export type TTextarea = {
  placeholder?: string;
  styles: string;
  fieldName: keyof TTextArea;
  register: UseFormRegister<TTextArea>;
  error?: FieldError;
  disabled?: boolean;
};

export const TextAreaBlock = ({ placeholder, fieldName, register, error, disabled }: TTextarea) => {
  return (
    <div>
      <div className="mx-auto">
        <Textarea
          placeholder={placeholder}
          register={register}
          fieldName={fieldName}
          styles=""
          disabled={disabled}
        />

        {error && (
          <p className="mx-auto w-[90%] bg-blue-100 text-xl font-bold text-pink-900">
            {error.message}
          </p>
        )}
      </div>
    </div>
  );
};
