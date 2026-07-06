import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@appFirebase";
import { useQuery } from "@tanstack/react-query";

export async function getThemesByCourse(courseName: string) {
  const themesQuery = query(collection(db, "themes"), where("courseName", "==", courseName));

  const snapshot = await getDocs(themesQuery);

  return snapshot.docs.map((themeDoc) => ({
    id: themeDoc.id,
    ...themeDoc.data(),
  }));
}

export const useGetThemes = (selectedCourseName: string) => {
  return useQuery({
    queryKey: ["themes", selectedCourseName],
    queryFn: () => getThemesByCourse(selectedCourseName),
    enabled: Boolean(selectedCourseName),
  });
};
