import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "@appFirebase";
import { useQuery } from "@tanstack/react-query";

export async function getQuestionsByTheme(themeID: string) {
  const questionsQuery = query(collection(db, "questions"), where("themeID", "==", themeID));

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

export const useGetQuestionsByTheme = (themeID: string) => {
  return useQuery({
    queryKey: ["questions", themeID],
    queryFn: () => getQuestionsByTheme(themeID),
  });
};
