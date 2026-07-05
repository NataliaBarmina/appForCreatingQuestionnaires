import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@ui/form";
import { Textarea } from "@ui/textarea";
import { textAreaBase, formLabelClasses } from "./styles";
import type { TAnswersField } from "./types";

export const AnswersField = ({ control, name, placeholder, formLabel }: TAnswersField) => {
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
