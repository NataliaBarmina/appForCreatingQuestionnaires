import { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";
import { cn } from "@lib/utils";

export const radioInputStyles = cn(
  "w-[100%] bg-blue-100",
  "border-4 border-solid border-blue-200",
  "placeholder:text-purple-900",
  "ml-2 rounded-lg p-2 text-left"
);

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
