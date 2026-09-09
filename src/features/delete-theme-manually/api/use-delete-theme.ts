import { db } from "@appFirebase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FirebaseError } from "firebase/app";
import { deleteDoc, doc } from "firebase/firestore";

export const deleteTheme = async (themeId: string) => {
  await deleteDoc(doc(db, "themes", themeId));
};

export const useDeleteTheme = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTheme,
    onSuccess: async () => await queryClient.invalidateQueries({ queryKey: ["themes"] }),
    onError: (error) => {
      if (error instanceof FirebaseError) {
        console.error(error.code, error.message);
        return;
      }
      console.error(error);
    },
  });
};
