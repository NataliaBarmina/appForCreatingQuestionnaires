import { QueryClient } from "@tanstack/react-query";
import { FirebaseError } from "firebase/app";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: 1,
    },
    // дефолтный обработчик ошибок
    mutations: {
      onError: (error) => {
        if (error instanceof FirebaseError) {
          console.error(error.code, error.message);
          return;
        }

        console.error(error);
      },
    },
  },
});
