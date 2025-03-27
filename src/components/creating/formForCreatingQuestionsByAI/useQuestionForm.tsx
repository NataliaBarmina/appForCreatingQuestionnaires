import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TFields } from "@commonComponents/createFields";

const UseQuestionForm = (
  defaultValues: Partial<TFields>,
  requiredMessage: string,
) => {
  const schema = yup.object({
    topicName: yup.string().required(requiredMessage),
    linkToSource: yup.string(),
  });

  return useForm<TFields>({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues,
  });
};
export default UseQuestionForm;
