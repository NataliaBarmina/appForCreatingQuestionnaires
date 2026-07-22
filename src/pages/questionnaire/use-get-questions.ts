import { collection, getDocs } from "firebase/firestore";
import { db } from "@appFirebase";
import { useQuery } from "@tanstack/react-query";

export async function getQuestions() {
  const snapshot = await getDocs(collection(db, "questions"));

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

export const useGetQuestions = () => {
  return useQuery({
    queryKey: ["questions"],
    queryFn: () => getQuestions(),
  });
};
