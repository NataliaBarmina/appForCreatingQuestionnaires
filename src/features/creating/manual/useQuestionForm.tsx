import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { TFields } from "@/shared/createFields/textarea";

export const useQuestionForm = (theme?: string, requiredText?: string) => {
  const requiredString = yup.string().required(requiredText);

  const schema = yup.object({
    selfWrittenTopicName: theme ? yup.string() : requiredString,
    selfWrittenQuestion: requiredString,
    selfWrittenAnswer1: requiredString,
    selfWrittenAnswer2: requiredString,
    selfWrittenAnswer3: requiredString,
  });
  return useForm<TFields>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      selfWrittenTopicName: theme || "",
    },
  });
};
