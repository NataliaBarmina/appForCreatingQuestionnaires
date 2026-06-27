import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createHashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { lazy, Suspense } from "react";

import "./index.css";
import "./shared/ i18n/i18n";

import { store } from "./store/store";
import { Preloader } from "./shared/ui";
import { MainPage } from "./app/mainPage";

const Creating = lazy(() => import("./pages/creating").then((m) => ({ default: m.Creating })));
const QuestionsCreatedByAI = lazy(() =>
  import("./pages/creating").then((m) => ({ default: m.QuestionsCreatedByAI }))
);
const FormForCreatingQuestionsByAI = lazy(() =>
  import("./pages/creating").then((m) => ({ default: m.FormForCreatingQuestionsByAI }))
);
const ManualCreatingPage = lazy(() =>
  import("./pages/creating").then((m) => ({ default: m.ManualCreatingPage }))
);
const FormForCreatingTheme = lazy(() =>
  import("./pages/creating").then((m) => ({ default: m.FormForCreatingTheme }))
);

const FormSelection = lazy(() =>
  import("./widgets/selecting").then((m) => ({ default: m.FormSelection }))
);
const CoursesSelection = lazy(() =>
  import("./widgets/selecting").then((m) => ({ default: m.CoursesSelection }))
);

const FormQuestionnaire = lazy(() =>
  import("./pages/questionnaire").then((m) => ({ default: m.FormQuestionnaire }))
);
const ResultsOfTheQuestionnaire = lazy(() =>
  import("./pages/questionnaire").then((m) => ({ default: m.ResultsOfTheQuestionnaire }))
);

const QuestionList = lazy(() =>
  import("./pages/editing/questionList").then((m) => ({ default: m.QuestionList }))
);

const Editing = lazy(() => import("./pages/editing/editing").then((m) => ({ default: m.Editing })));
const AuthForm = lazy(() => import("./pages/auth").then((m) => ({ default: m.AuthForm })));
const DashboardPage = lazy(() =>
  import("./pages/dashboard").then((m) => ({ default: m.DashboardPage }))
);

const root = createRoot(document.getElementById("root"));

const router = createHashRouter(
  [
    {
      path: "/",
      element: <MainPage />,
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
          path: "/editing",
          element: (
            <Suspense fallback={<Preloader />}>
              <Editing />
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
          path: "/manualCreatingPage",
          element: (
            <Suspense fallback={<Preloader />}>
              <ManualCreatingPage />
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
          path: "/authForm",
          element: (
            <Suspense fallback={<Preloader />}>
              <AuthForm />
            </Suspense>
          ),
        },
        {
          path: "/dashboardPage",
          element: (
            <Suspense fallback={<Preloader />}>
              <DashboardPage />
            </Suspense>
          ),
        },
        {
          path: "/",
          element: <AuthForm />,
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
