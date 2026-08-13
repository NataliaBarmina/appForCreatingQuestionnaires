import {
  // collection, // ссылка на коллекцию
  doc, // ссылка на конкретный документ по пути
  // query, // собрать запрос из collection + where/orderBy/limit и т.д.
  // where, // фильтр в запросе
  // getDocs, // выполнить запрос и получить список документов
  updateDoc, // обновить поля существующего документа
  deleteDoc, // удалить документ
} from "firebase/firestore";
import { db } from "@appFirebase"; // доступ к базе данных Firestore

export type TQuestion = {
  courseName?: string;
  themeName?: string;
  themeId?: string;
  questionID?: string;
  question?: string;
  answer_1?: string;
  answer_2?: string;
  answer_3?: string;
};

// // получаем вопросы по ID темы для редактирования
// export async function listQuestionsByTheme(themeId: string) {
//   const q = query(
//     collection(db, "questions"),
//     where("themeId", "==", themeId) //только те вопросы, у которых themeId равен выбранной теме
//   );
//   const questionsSnapshot = await getDocs(q);

//   return questionsSnapshot.docs.map((docSnap) => ({
//     questionID: docSnap.id,
//     ...docSnap.data(),
//   }));
// }

export async function deleteQuestion(questionID: string) {
  await deleteDoc(doc(db, "questions", questionID));
}

export async function editQuestion(questionID: string, patch: Partial<TQuestion>) {
  await updateDoc(doc(db, "questions", questionID), patch);
}
