import { cn } from "@lib/utils";

export type TFields = {
  styles?: string;
  value?: string;
  id?: string;
};

const blockedFieldStyles = cn(
  "w-[100%] bg-blue-100 text-left",
  "rounded-md border-4 border-solid border-blue-200",
  "mb-2 px-4 py-3 text-[120%]",
);

const BlockedField = ({ styles, value, id }: TFields) => {
  return (
    <div id={id} className={cn(blockedFieldStyles, styles)}>
      {value}
    </div>
  );
};
export default BlockedField;
