import { collection, addDoc, getDocs, query } from "firebase/firestore";
import { db } from "@appFirebase";

// добавляем темы в fireStore
export async function fsCreateTheme({
  themeName,
  courseName,
}: {
  themeName: string;
  courseName: string;
}) {
  const cleanName = themeName.trim();
  const ref = await addDoc(collection(db, "themes"), {
    themeName: cleanName,
    courseName,
  });

  return { themeID: ref.id, themeName: cleanName, courseName };
}
// получаем список тем из fireStore
export async function fsListThemes() {
  const q = query(collection(db, "themes"));
  const snap = await getDocs(q);

  return snap.docs.map((d) => ({
    themeID: d.id,
    ...d.data(),
  }));
}
