import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@appFirebase";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@shared/query-keys-factory";

export async function getThemes(courseName: string) {
  const themesQuery = query(collection(db, "themes"), where("courseName", "==", courseName));

  const snapshot = await getDocs(themesQuery);

  return snapshot.docs.map((document) => {
    const data = document.data();

    return {
      themeId: document.id,
      courseName: data.courseName,
      themeName: data.themeName,
    };
  });
}

export const useGetThemes = (selectedCourseName: string) => {
  return useQuery({
    queryKey: queryKeys.themesByCourse(selectedCourseName),
    queryFn: () => getThemes(selectedCourseName),
    enabled: Boolean(selectedCourseName),
  });
};
