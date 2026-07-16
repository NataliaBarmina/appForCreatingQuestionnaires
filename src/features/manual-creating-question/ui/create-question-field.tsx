import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@ui/form";
import { Textarea } from "@ui/textarea";
import { TField } from "../model/types";

export type TCreateQuestionField = TField & {
  name: "selfWrittenQuestion";
};

export const CreateQuestionField = ({
  control,
  disabled,
  name,
  formLabel,
  placeholder,
}: TCreateQuestionField) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="pt-8">
          <FormLabel className="text-lg text-yellow-50">{formLabel}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              disabled={disabled}
              className="text-center font-extrabold placeholder:text-sm placeholder:font-normal"
              style={{ fontSize: "1.25rem" }}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
