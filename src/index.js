import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { lazy, Suspense } from "react";
// import spinner from "./common/spinner.gif";

const Creating = lazy(() => import("./components/creating/creating"));
const Questionnaire = lazy(
  () => import("./components/questionnaire/questionnaire"),
);
const DefaultPage = lazy(() => import("./components/defaultPage"));
const FormForCreatingQuestionsByAI = lazy(
  () => import("./components/creating/formForCreatingQuestionsByAI"),
);
const QuestionsCreatedByAI = lazy(
  () => import("./components/creating/questionsCreatedByAI"),
);
const FormForCreatingQuestionsYourself = lazy(
  () => import("./components/creating/formForCreatingQuestionsYourself"),
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
{
  /* <img src={spinner} alt="#" />; */
}
const root = createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/creating",
        element: (
          <Suspense fallback={<div>PRELOADER</div>}>
            <Creating />
          </Suspense>
        ),
      },
      {
        path: "/courseSelection",
        element: (
          <Suspense fallback={<div>PRELOADER</div>}>
            <CourseSelection />
          </Suspense>
        ),
      },
      {
        path: "/questionList",
        element: (
          <Suspense fallback={<div>PRELOADER</div>}>
            <QuestionList />
          </Suspense>
        ),
      },
      {
        path: "/themeSelection",
        element: (
          <Suspense fallback={<div>PRELOADER</div>}>
            <ThemeSelection />
          </Suspense>
        ),
      },
      {
        path: "/questionnaire",
        element: (
          <Suspense fallback={<div>PRELOADER</div>}>
            <Questionnaire />
          </Suspense>
        ),
      },
      {
        path: "/resultsOfTheQuestionnaire",
        element: (
          <Suspense fallback={<div>PRELOADER</div>}>
            <ResultsOfTheQuestionnaire />
          </Suspense>
        ),
      },

      {
        path: "/formForCreatingQuestionsByAI",
        element: (
          <Suspense fallback={<div>PRELOADER</div>}>
            <FormForCreatingQuestionsByAI />
          </Suspense>
        ),
      },
      {
        path: "/questionsCreatedByAI",
        element: (
          <Suspense fallback={<div>PRELOADER</div>}>
            <QuestionsCreatedByAI />
          </Suspense>
        ),
      },
      {
        path: "/formForCreatingQuestionsYourself",
        element: (
          <Suspense fallback={<div>PRELOADER</div>}>
            <FormForCreatingQuestionsYourself />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<div>PRELOADER</div>}>
            <DefaultPage />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
