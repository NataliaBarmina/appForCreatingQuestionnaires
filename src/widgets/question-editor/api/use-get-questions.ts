import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "@appFirebase";
import { useQuery } from "@tanstack/react-query";

export async function getQuestionsByTheme(themeName: string) {
  const questionsQuery = query(collection(db, "questions"), where("themeName", "==", themeName));

  const snapshot = await getDocs(questionsQuery);

  return snapshot.docs.map((questionDoc) => {
    const data = questionDoc.data();

    return {
      id: questionDoc.id,
      question: data.question,
      answer_1: data.answer_1,
      answer_2: data.answer_2,
      answer_3: data.answer_3,
    };
  });
}

export const useGetQuestions = (themeName: string) => {
  return useQuery({
    queryKey: ["questions", themeName],
    queryFn: () => getQuestionsByTheme(themeName),
  });
};
