import { addDoc, collection } from "firebase/firestore";
import { db } from "@appFirebase";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const addTheme = async ({
  themeName,
  courseName,
}: {
  courseName: string;
  themeName: string;
}) => {
  return addDoc(collection(db, "themes"), { themeName, courseName });
};

export const useAddTheme = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTheme,

    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["themes"],
      }),
  });
};
