import classNames from "classnames";

export type TFields = {
  styles?: string;
  value?: string;
  id?: string;
};

const BlockedField = ({ styles, value, id }: TFields) => {
  return (
    <div
      id={id}
      className={classNames(
        "w-[100%] bg-blue-100 text-left",
        "rounded-md border-4 border-solid border-blue-200",
        "mb-2 px-4 py-3 text-[120%]",
        styles,
      )}
    >
      {value}
    </div>
  );
};
export default BlockedField;
