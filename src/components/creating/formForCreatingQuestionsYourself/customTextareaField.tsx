import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/form";
import { Textarea } from "@ui/textarea";
import { formLabelClasses, textAreaBold } from "./styles";
import { Control } from "react-hook-form";
import { TFields } from "@/components/commonComponents/createFields";

type TCustomTextAreaField = {
  control: Control<TFields>;
  disabled: boolean;
  name: "selfWrittenTopicName" | "selfWrittenQuestion";
  formLabel: string;
  placeholder: string;
};

const CustomTextAreaField = ({
  control,
  disabled,
  name,
  formLabel,
  placeholder,
}: TCustomTextAreaField) => {
  return (
    <div>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="pt-8">
            <FormLabel className={formLabelClasses}>{formLabel}</FormLabel>
            <FormControl>
              <Textarea
                placeholder={placeholder}
                disabled={disabled}
                className={textAreaBold}
                style={{ fontSize: "1.25rem" }}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
export default CustomTextAreaField;
