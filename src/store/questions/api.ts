import {
  collection, // ссылка на коллекцию
  doc, // ссылка на конкретный документ по пути
  query, // собрать запрос из collection + where/orderBy/limit и т.д.
  where, // фильтр в запросе
  addDoc, // добавить новый документ в коллекцию
  getDocs, // выполнить запрос и получить список документов
  updateDoc, // обновить поля существующего документа
  deleteDoc, // удалить документ
} from "firebase/firestore";
import { db } from "@appFirebase"; // доступ к базе данных Firestore
import { TQuestion } from "@shared/types/commonTypes";

// создаем вопросы
export async function createQuestion(payload: TQuestion) {
  const docRef = await addDoc(collection(db, "questions"), payload);
  return { questionID: docRef.id, ...payload };
}

// получаем вопросы по ID темы для редактирования
export async function listQuestionsByTheme(themeID: string) {
  const q = query(
    collection(db, "questions"),
    where("themeID", "==", themeID) //только те вопросы, у которых themeID равен выбранной теме
  );
  const questionsSnapshot = await getDocs(q);

  return questionsSnapshot.docs.map((docSnap) => ({
    questionID: docSnap.id,
    ...docSnap.data(),
  }));
}

// получаем все вопросы для составления анкеты
export async function listAllQuestions() {
  const questionsSnapshot = await getDocs(collection(db, "questions"));
  return questionsSnapshot.docs.map((docSnap) => ({
    questionID: docSnap.id,
    ...docSnap.data(),
  }));
}

export async function deleteQuestion(questionID: string) {
  await deleteDoc(doc(db, "questions", questionID));
}

export async function editQuestion(questionID: string, patch: Partial<TQuestion>) {
  await updateDoc(doc(db, "questions", questionID), patch);
}
