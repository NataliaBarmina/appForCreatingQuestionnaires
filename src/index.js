import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/index";
import { RouterProvider } from "react-router-dom";
import { createHashRouter } from "react-router-dom";
import "./index.css";
import "./i18n";

import DefaultPage from "./components/defaultPage/index";
import Preloader from "./components/commonComponents/preloader";

import { lazy, Suspense } from "react";

const Creating = lazy(() => import("./components/creating/creating"));
const FormSelection = lazy(
  () => import("./components/commonComponents/formSelection"),
);
const Questionnaire = lazy(
  () => import("./components/questionnaire/questionnaire"),
);
const QuestionsCreatedByAI = lazy(
  () => import("./components/creating/questionsCreatedByAI"),
);
const FormForCreatingQuestionsYourself = lazy(
  () => import("./components/creating/formForCreatingQuestionsYourself"),
);
const FormForCreatingQuestionsByAI = lazy(
  () => import("./components/creating/formForCreatingQuestionsByAI"),
);
const CoursesSelection = lazy(
  () => import("./components/commonComponents/coursesSelection/index"),
);

const QuestionList = lazy(() => import("./components/editing/questionList"));
const ResultsOfTheQuestionnaire = lazy(
  () => import("./components/questionnaire/resultsOfTheQuestionnaire"),
);

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
              <Questionnaire />
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
              <FormForCreatingQuestionsByAI />
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
  },
);

root.render(
  <RouterProvider
    router={router}
    future={{
      v7_startTransition: true,
    }}
  />,
);
