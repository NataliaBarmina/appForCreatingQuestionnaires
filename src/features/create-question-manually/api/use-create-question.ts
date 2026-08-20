import { addDoc, collection } from "firebase/firestore";
import { db } from "@appFirebase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FirebaseError } from "firebase/app";

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

    onSuccess: async () =>
      await queryClient.invalidateQueries({
        queryKey: ["questions"],
      }),
    onError: (error) => {
      if (error instanceof FirebaseError) {
        console.error(error.code, error.message);
        return;
      }
      console.error(error);
    },
  });
};
