import { addDoc, collection } from "firebase/firestore";
import { db } from "@appFirebase";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type TCreateQuestion = {
  courseName: string;
  themeId: string;
  themeName: string;
  question: string;
  answer_1: string;
  answer_2: string;
  answer_3: string;
};

export const createQuestion = async (questionData: TCreateQuestion) => {
  return addDoc(collection(db, "questions"), questionData);
};

export const useCreateQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createQuestion,

    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["questions"],
      }),
  });
};
