import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@ui/form";
import { Textarea } from "@ui/textarea";
import { Control } from "react-hook-form";
import { TQuestionFields } from "./form-creating-questions-yourself";

export type TCreateAnswerField = {
  control: Control<TQuestionFields>;
  name: "selfWrittenAnswer1" | "selfWrittenAnswer2" | "selfWrittenAnswer3";
  placeholder: string;
  formLabel?: string;
};

export const CreateAnswerField = ({
  control,
  name,
  placeholder,
  formLabel,
}: TCreateAnswerField) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="mt-4">
          <FormLabel className="text-lg text-yellow-50">{formLabel}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              {...field}
              className="text-center placeholder:text-sm"
              style={{ fontSize: "1.2rem" }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
