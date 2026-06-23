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
import { db } from "@appFirebase";

export type TQuestionFS = {
  courseName: string;
  themeName: string;
  themeID: string;
  question: string;
  answer_1: string;
  answer_2: string;
  answer_3: string;
};

// создаем вопросы
export async function fsCreateQuestion(payload: TQuestionFS) {
  const ref = await addDoc(collection(db, "questions"), payload);
  return { questionID: ref.id, ...payload };
}

// получаем вопросы по ID темы для редактирования
export async function fsListQuestionsByTheme(themeID: string) {
  const q = query(
    collection(db, "questions"),
    where("themeID", "==", themeID) //только те вопросы, у которых themeID равен выбранной теме
  );
  const snap = await getDocs(q);

  return snap.docs.map((d) => ({
    questionID: d.id,
    ...d.data(),
  }));
}

// получаем все вопросы для составления анкеты
export async function fsListAllQuestions() {
  const snap = await getDocs(collection(db, "questions"));
  return snap.docs.map((d) => ({
    questionID: d.id,
    ...d.data(),
  }));
}

export async function fsDeleteQuestion(questionID: string) {
  await deleteDoc(doc(db, "questions", questionID));
}

export async function fsUpdateQuestion(questionID: string, patch: Partial<TQuestionFS>) {
  await updateDoc(doc(db, "questions", questionID), patch);
}
