import { updateDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "@appFirebase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@shared/query-keys-factory";

type TEditThemeData = {
  themeName: string;
};

const editTheme = async ({ themeId, data }: { themeId: string; data: TEditThemeData }) => {
  await updateDoc(doc(db, "themes", themeId), data);
};

export const useEditTheme = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editTheme,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: queryKeys.themes });
    },
  });
};
