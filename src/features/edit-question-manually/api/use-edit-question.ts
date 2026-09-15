import { db } from "@appFirebase";
import { doc, updateDoc } from "firebase/firestore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TQuestionItem } from "../model/types";
import { FirebaseError } from "firebase/app";
import { queryKeys } from "@shared/query-keys-factory";

type TEditQuestion = {
  id: string;
  data: TQuestionItem;
};

const editQuestion = async ({ id, data }: TEditQuestion) => {
  await updateDoc(doc(db, "questions", id), data);
};

export const useEditQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editQuestion,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: queryKeys.questions, refetchType: "all" });
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
