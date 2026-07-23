import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@ui/form";
import { TField } from "../model/types";

export type TCreateAnswerField = TField & {
  name: "selfWrittenAnswer1" | "selfWrittenAnswer2" | "selfWrittenAnswer3";
};

export const CreateAnswerField = ({
  control,
  name,
  placeholder,
  formLabel,
  disabled,
}: TCreateAnswerField) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="mt-4">
          <FormLabel className="text-lg text-yellow-50">{formLabel}</FormLabel>
          <FormControl>
            <input
              className="textarea-styles text-center"
              placeholder={placeholder}
              disabled={disabled}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
