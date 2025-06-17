import { radioInputStyles } from "./styles";
import { forwardRef } from "react";

type TRadioInput = {
  value: string;
  name: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioInput = forwardRef<HTMLInputElement, TRadioInput>(
  ({ value, name, onChange }, ref) => {
    return (
      <div>
        <label className="mb-4 flex">
          <input
            type="radio"
            value={value}
            name={name}
            ref={ref}
            className="mt-2 h-8 w-8"
            onChange={onChange}
          />
          <div className={radioInputStyles}>{value}</div>
        </label>
      </div>
    );
  },
);
export default RadioInput;
