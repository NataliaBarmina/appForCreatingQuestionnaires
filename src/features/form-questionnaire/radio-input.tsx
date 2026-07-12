import { radioInputStyles } from "./styles";
import { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";

type TRadioInput = {
  value: string;
  name: string;
  checked?: boolean;
  register: UseFormRegister<any>;
};

export const RadioInput = forwardRef<HTMLInputElement, TRadioInput>(
  ({ value, name, register }, ref) => (
    <div>
      <label className="mb-4 flex">
        <input
          className="mt-2 h-8 w-8"
          type="radio"
          value={value}
          {...register(name, { required: true })}
        />
        <div className={radioInputStyles}>{value}</div>
      </label>
    </div>
  )
);
