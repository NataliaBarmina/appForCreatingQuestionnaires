import { Preloader } from "@shared/ui";
import { useGetQuestions } from "./use-get-questions";
import { LoadingError } from "@shared/ui/loading-error";
import { FormQuestionnaire } from "../../features/form-questionnaire/form-questionnaire";

export const Questionnaire = () => {
  const { data = [], isLoading, isError, error } = useGetQuestions();

  return (
    <div>
      {isLoading && <Preloader />}
      {isError && <LoadingError message={error.message} />}

      {!isLoading && !isError && <FormQuestionnaire data={data} />}
    </div>
  );
};
