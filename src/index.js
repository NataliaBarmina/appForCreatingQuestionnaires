import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { RouterProvider } from "react-router-dom";
import { createHashRouter } from "react-router-dom";
import "./index.css";

import DefaultPage from "./components/defaultPage";
import Preloader from "./common/preloader";

import { lazy, Suspense } from "react";

const Creating = lazy(() => import("./components/creating/creating"));
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
const CourseSelection = lazy(
  () => import("./components/editing/courseSelection"),
);
const ThemeSelection = lazy(
  () => import("./components/editing/themeSelection"),
);
const QuestionList = lazy(() => import("./components/editing/questionList"));
const ResultsOfTheQuestionnaire = lazy(
  () => import("./components/questionnaire/resultsOfTheQuestionnaire"),
);

const root = createRoot(document.getElementById("root"));

const router = createHashRouter([
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
]);

root.render(<RouterProvider router={router} />);
