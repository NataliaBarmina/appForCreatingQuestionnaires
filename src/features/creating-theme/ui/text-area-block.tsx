import { Textarea } from "@shared/ui";
import { FieldsError } from "@shared/ui/fields-error";
import { FieldError, FieldPath, UseFormRegister } from "react-hook-form";
import { TCreateThemeForm } from "./form-for-creating-theme";

export type TTextarea = {
  placeholder: string;
  styles: string;
  fieldName: FieldPath<TCreateThemeForm>;
  register: UseFormRegister<TCreateThemeForm>;
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

        <FieldsError message={error?.message} />
      </div>
    </div>
  );
};
