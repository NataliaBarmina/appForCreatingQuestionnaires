import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TFields } from "@commonComponents/createFields";

export const useFormConfig = () => {
  const schema = yup.object({
    questionFromSurvey: yup.string(),
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TFields> = (data) => {
    console.log(data);
  };
  return {
    handleSubmit,
    errors,
    onSubmit,
    control,
  };
};
