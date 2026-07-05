import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@appFirebase";

type TThemes = { themeID: string; courseName: string; themeName: string };

export async function getThemesByCourse(courseName: string): Promise<TThemes[]> {
  const themesQuery = query(collection(db, "themes"), where("courseName", "==", courseName));

  const snapshot = await getDocs(themesQuery);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...(document.data() as Omit<TThemes, "id">),
  }));
}
