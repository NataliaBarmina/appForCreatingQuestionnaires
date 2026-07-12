import { collection, getDocs } from "firebase/firestore";
import { db } from "@appFirebase";
import { useQuery } from "@tanstack/react-query";

export type TQuestion = {
  id: string;
  answer_1: string;
  answer_2: string;
  answer_3: string;
  question: string;
};

type TQuestionData = Omit<TQuestion, "id">;

export async function getQuestions(): Promise<TQuestion[]> {
  const snapshot = await getDocs(collection(db, "questions"));

  return snapshot.docs.map((questionDoc) => {
    const data = questionDoc.data() as TQuestionData;

    return {
      id: questionDoc.id,
      ...data,
    };
  });
}

export const useGetQuestions = () => {
  return useQuery<TQuestion[]>({
    queryKey: ["questions"],
    queryFn: () => getQuestions(),
  });
};
