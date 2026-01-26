import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/app";
import { RouterProvider } from "react-router-dom";
import { createHashRouter } from "react-router-dom";
import "./index.css";
import "./shared/ i18n/i18n";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { DefaultPage } from "./defaultPage";
import { Preloader } from "./shared/ui";
import { lazy, Suspense } from "react";

const Creating = lazy(() => import("./features/creating").then((m) => ({ default: m.Creating })));
const QuestionsCreatedByAI = lazy(() =>
  import("./features/creating").then((m) => ({ default: m.QuestionsCreatedByAI }))
);
const FormForCreatingQuestionsByAI = lazy(() =>
  import("./features/creating").then((m) => ({ default: m.FormForCreatingQuestionsByAI }))
);
const FormForCreatingQuestionsYourself = lazy(() =>
  import("./features/creating").then((m) => ({ default: m.FormForCreatingQuestionsYourself }))
);
const FormForCreatingTheme = lazy(() =>
  import("./features/creating").then((m) => ({ default: m.FormForCreatingTheme }))
);

const FormSelection = lazy(() =>
  import("./features/selecting").then((m) => ({ default: m.FormSelection }))
);
const CoursesSelection = lazy(() =>
  import("./features/selecting").then((m) => ({ default: m.CoursesSelection }))
);

const FormQuestionnaire = lazy(() =>
  import("./features/questionnaire").then((m) => ({ default: m.FormQuestionnaire }))
);
const ResultsOfTheQuestionnaire = lazy(() =>
  import("./features/questionnaire").then((m) => ({ default: m.ResultsOfTheQuestionnaire }))
);

const QuestionList = lazy(() => import("./features/editing/questionList"));

const root = createRoot(document.getElementById("root"));

const router = createHashRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/creating",
          element: (
            <Suspense fallback={<Preloader />}>
              <Creating />
            </Suspense>
          ),
        },
        {
          path: "/coursesSelection",
          element: (
            <Suspense fallback={<Preloader />}>
              <CoursesSelection />
            </Suspense>
          ),
        },
        {
          path: "/questionList",
          element: (
            <Suspense fallback={<Preloader />}>
              <QuestionList />
            </Suspense>
          ),
        },
        {
          path: "/questionnaire",
          element: (
            <Suspense fallback={<Preloader />}>
              <FormQuestionnaire />
            </Suspense>
          ),
        },
        {
          path: "/resultsOfTheQuestionnaire",
          element: (
            <Suspense fallback={<Preloader />}>
              <ResultsOfTheQuestionnaire />
            </Suspense>
          ),
        },

        {
          path: "/formForCreatingQuestionsByAI",
          element: (
            <Suspense fallback={<Preloader />}>
              <FormForCreatingTheme />
            </Suspense>
          ),
        },
        {
          path: "/questionsCreatedByAI",
          element: (
            <Suspense fallback={<Preloader />}>
              <QuestionsCreatedByAI />
            </Suspense>
          ),
        },
        {
          path: "/formForCreatingQuestionsYourself",
          element: (
            <Suspense fallback={<Preloader />}>
              <FormForCreatingQuestionsYourself />
            </Suspense>
          ),
        },
        {
          path: "/formSelection",
          element: (
            <Suspense fallback={<Preloader />}>
              <FormSelection />
            </Suspense>
          ),
        },
        {
          path: "/formForCreatingQuestionsByAI",
          element: (
            <Suspense fallback={<Preloader />}>
              <FormForCreatingQuestionsByAI />
            </Suspense>
          ),
        },
        {
          path: "/",
          element: <DefaultPage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true, // Enables relative paths in nested routes
      v7_fetcherPersist: true, // Retains fetcher state during navigation
      v7_normalizeFormMethod: true, // Normalizes form methods (e.g., POST or GET)
      v7_partialHydration: true, // Supports partial hydration for server-side rendering
      v7_skipActionErrorRevalidation: true, // Prevents revalidation when action errors occur
    },
  }
);

root.render(
  <Provider store={store}>
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  </Provider>
);
