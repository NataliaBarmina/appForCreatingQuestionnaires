import { addDoc, collection, DocumentReference } from "firebase/firestore";
import { db } from "@appFirebase";

export type TTheme = {
  courseName: string;
  themeName: string;
  themeID: string;
};

export type TNewQuestion = Omit<TTheme, "themeID">;

export const addTheme = async ({ themeName, courseName }: TNewQuestion) => {
  return addDoc(collection(db, "themes"), { themeName, courseName });
};
