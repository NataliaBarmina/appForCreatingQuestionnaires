import { addDoc, collection } from "firebase/firestore";
import { db } from "@appFirebase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@shared/query-keys-factory";

export const createTheme = async ({
  themeName,
  courseName,
}: {
  courseName: string;
  themeName: string;
}) => {
  return addDoc(collection(db, "themes"), { themeName, courseName });
};

export const useCreateTheme = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTheme,

    onSuccess: (_, variables) =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.themesByCourse(variables.courseName),
      }),
  });
};
