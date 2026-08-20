import { db } from "@appFirebase";
import { doc, updateDoc } from "firebase/firestore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TQuestionUpdate } from "../model/types";
import { FirebaseError } from "firebase/app";

type TEditQuestion = {
  id: string;
  data: TQuestionUpdate;
};
const editQuestion = async ({ id, data }: TEditQuestion) => {
  await updateDoc(doc(db, "questions", id), data);
};

export const useEditQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editQuestion,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["questions"] });
    },
    onError: (error) => {
      if (error instanceof FirebaseError) {
        console.error(error.code, error.message);
        return;
      }
      console.error(error);
    },
  });
};
