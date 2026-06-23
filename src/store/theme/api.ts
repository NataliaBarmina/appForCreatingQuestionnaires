import { collection, addDoc, getDocs, query } from "firebase/firestore";
import { db } from "@appFirebase";
import { TCreateTheme } from "./types";

// добавляем темы в fireStore
export async function createTheme({ themeName, courseName }: TCreateTheme) {
  const cleanName = themeName.trim();
  const ref = await addDoc(collection(db, "themes"), {
    themeName: cleanName,
    courseName,
  });

  return { themeID: ref.id, themeName: cleanName, courseName };
}
// получаем список тем из fireStore
export async function listThemes() {
  const q = query(collection(db, "themes"));
  const snap = await getDocs(q);

  return snap.docs.map((d) => ({
    themeID: d.id,
    ...d.data(),
  }));
}
