import { radioInputStyles } from "./styles";

type MyProps = {
  value: string;
  name: string;
};

const RadioInput = ({ value, name }: MyProps) => {
  return (
    <div>
      <label className="mb-4 flex">
        <input type="radio" name={name} className="mt-2 h-8 w-8" />
        <div className={radioInputStyles}>{value}</div>
      </label>
    </div>
  );
};
export default RadioInput;
