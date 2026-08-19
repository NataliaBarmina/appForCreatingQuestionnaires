import { db } from "@appFirebase";
import { FirebaseError } from "firebase/app";
import { doc, deleteDoc } from "firebase/firestore";

import { useMutation, useQueryClient } from "@tanstack/react-query";

export const deleteQuestion = async (questionId: string) => {
  const questionRef = doc(db, "questions", questionId);
  await deleteDoc(questionRef);
};

export const useDeleteQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteQuestion,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["questions"] });
    },
    onError: (error) => {
      if (error instanceof FirebaseError) {
        console.error(error.code);
        console.error(error.message);
      }
    },
  });
};
