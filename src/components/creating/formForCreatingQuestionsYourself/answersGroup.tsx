import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/form";
import { Textarea } from "@ui/textarea";
import { textAreaBase, formLabelClasses } from "./styles";
import { Control } from "react-hook-form";
import { TFields } from "@/components/commonComponents/createFields";

type TAnswersField = {
  control: Control<TFields>;
  name: "selfWrittenAnswer1" | "selfWrittenAnswer2" | "selfWrittenAnswer3";
  placeholder: string;
  formLabel?: string;
};

const AnswersField = ({
  control,
  name,
  placeholder,
  formLabel,
}: TAnswersField) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="mt-4">
          <FormLabel className={formLabelClasses}>{formLabel}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              {...field}
              className={textAreaBase}
              style={{ fontSize: "1.2rem" }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default AnswersField;
