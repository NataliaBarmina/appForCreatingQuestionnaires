import { db } from "@appFirebase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FirebaseError } from "firebase/app";
import { deleteDoc, doc } from "firebase/firestore";

import { getQuestionsByTheme } from "@entities/question";
import { deleteQuestion } from "@entities/question";
import { queryKeys } from "@shared/query-keys-factory";

export const deleteTheme = async (themeId: string) => {
  const questions = await getQuestionsByTheme(themeId);

  await Promise.all(questions.map((question) => deleteQuestion(question.id)));

  await deleteDoc(doc(db, "themes", themeId));
};

export const useDeleteTheme = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTheme,
    onSuccess: async (_, themeId) =>
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: queryKeys.themes }),
        queryClient.invalidateQueries({ queryKey: queryKeys.questions }),
      ]),
    onError: (error) => {
      if (error instanceof FirebaseError) {
        console.error(error.code, error.message);
        return;
      }
      console.error(error);
    },
  });
};
