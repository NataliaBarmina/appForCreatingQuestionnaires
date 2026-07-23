import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@ui/form";
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
            <input
              className="textarea-styles text-center"
              placeholder={placeholder}
              disabled={disabled}
              {...field}
            ></input>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
