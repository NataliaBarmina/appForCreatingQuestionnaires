import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { RouterProvider } from "react-router-dom";
import { createHashRouter } from "react-router-dom";
import "./index.css";

import DefaultPage from "./components/defaultPage";
import Preloader from "./components/commonComponents/preloader";

import { lazy, Suspense } from "react";

const Creating = lazy(() => import("./components/creating/creating"));
const Questionnaire = lazy(
  () => import("./components/questionnaire/questionnaire"),
);
const QuestionsCreatedByAI = lazy(
  () =>
    import("./components/creating/creatingQuestionsByAI/questionsCreatedByAI"),
);
const FormForCreatingQuestionsYourself = lazy(
  () =>
    import(
      "./components/creating/creatingQuestionsByYourself/formForCreatingQuestionsYourself"
    ),
);
const FormForCreatingQuestionsByAI = lazy(
  () =>
    import(
      "./components/creating/creatingQuestionsByAI/formForCreatingQuestionsByAI"
    ),
);
const CourseSelection = lazy(
  () => import("./components/editing/courseSelection"),
);
const CoursesSelectionWithMaterialUI = lazy(
  () =>
    import(
      "./components/creating/creatingQuestionsByYourself/coursesSelectionWithMaterialUI"
    ),
);

const CoursesSelectionWithShadcnUI = lazy(
  () =>
    import(
      "./components/creating/creatingQuestionsByAI/CoursesSelectionWithShadcnUI"
    ),
);

const ThemeSelection = lazy(
  () => import("./components/editing/themeSelection"),
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
          path: "/courseSelection",
          element: (
            <Suspense fallback={<Preloader />}>
              <CourseSelection />
            </Suspense>
          ),
        },
        {
          path: "/coursesSelectionWithShadcnUI",
          element: (
            <Suspense fallback={<Preloader />}>
              <CoursesSelectionWithShadcnUI />
            </Suspense>
          ),
        },
        {
          path: "/coursesSelectionWithMaterialUI",
          element: (
            <Suspense fallback={<Preloader />}>
              <CoursesSelectionWithMaterialUI />
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
          path: "/themeSelection",
          element: (
            <Suspense fallback={<Preloader />}>
              <ThemeSelection />
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
