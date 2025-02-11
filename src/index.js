import React from "react";
import { createRoot } from "react-dom/client";
import App from "./myComponents/App";
import { RouterProvider } from "react-router-dom";
import { createHashRouter } from "react-router-dom";
import "./index.css";

import DefaultPage from "./myComponents/defaultPage";
import Preloader from "./common/preloader";

import { lazy, Suspense } from "react";

const Creating = lazy(() => import("./myComponents/creating/creating"));
const Questionnaire = lazy(
  () => import("./myComponents/questionnaire/questionnaire"),
);
const QuestionsCreatedByAI = lazy(
  () =>
    import(
      "./myComponents/creating/creatingQuestionsByAI/questionsCreatedByAI"
    ),
);
const FormForCreatingQuestionsYourself = lazy(
  () =>
    import(
      "./myComponents/creating/creatingQuestionsByYourself/formForCreatingQuestionsYourself"
    ),
);
const FormForCreatingQuestionsByAI = lazy(
  () =>
    import(
      "./myComponents/creating/creatingQuestionsByAI/formForCreatingQuestionsByAI"
    ),
);
const CourseSelection = lazy(
  () => import("./myComponents/editing/courseSelection"),
);
const CoursesSelection = lazy(
  () =>
    import(
      "./myComponents/creating/creatingQuestionsByYourself/coursesSelection"
    ),
);
const ThemeSelection = lazy(
  () => import("./myComponents/editing/themeSelection"),
);
const QuestionList = lazy(() => import("./myComponents/editing/questionList"));
const ResultsOfTheQuestionnaire = lazy(
  () => import("./myComponents/questionnaire/resultsOfTheQuestionnaire"),
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
