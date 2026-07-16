import { addDoc, collection } from "firebase/firestore";
import { db } from "@appFirebase";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type TAddQuestion = {
  courseName: string;
  themeID: string;
  themeName: string;
  question: string;
  answer_1: string;
  answer_2: string;
  answer_3: string;
};

export const createQuestion = async ({
  courseName,
  themeID,
  themeName,
  question,
  answer_1,
  answer_2,
  answer_3,
}: TAddQuestion) => {
  return addDoc(collection(db, "questions"), {
    themeName,
    courseName,
    themeID,
    question,
    answer_1,
    answer_2,
    answer_3,
  });
};

export const useAddQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createQuestion,

    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["questions"],
      }),
  });
};
