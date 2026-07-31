import { lazy, Suspense } from "react";
import { createHashRouter } from "react-router-dom";
import { Preloader } from "@shared/ui";
import { AppLayout } from "@app/layouts";

const AIQuestionCreation = lazy(() =>
  import("@pages/ai-question-creation-page").then((m) => ({
    default: m.AIQuestionCreation,
  }))
);
const ManualQuestionCreation = lazy(() =>
  import("@pages/manual-question-creation-page").then((m) => ({
    default: m.ManualQuestionCreation,
  }))
);

const CourseThemesPage = lazy(() =>
  import("@pages/course-theme-page").then((m) => ({
    default: m.CourseThemesPage,
  }))
);
const Questionnaire = lazy(() =>
  import("@pages/questionnaire-page").then((m) => ({ default: m.Questionnaire }))
);
const ResultsOfTheQuestionnaire = lazy(() =>
  import("@pages/result-questionnaire-page").then((m) => ({
    default: m.ResultsOfTheQuestionnaire,
  }))
);

const EditingQuestions = lazy(() =>
  import("@pages/question-editor-page").then((m) => ({
    default: m.EditingQuestions,
  }))
);

const DashboardPage = lazy(() =>
  import("@pages/dashboard-page").then((m) => ({ default: m.DashboardPage }))
);
const ThemesCreation = lazy(() =>
  import("@pages/themes-creation-page").then((m) => ({ default: m.ThemesCreation }))
);

const LoginPage = lazy(() => import("@pages/login-page").then((m) => ({ default: m.LoginPage })));

const CreationOptionsPage = lazy(() =>
  import("@pages/creation-options-page").then((m) => ({
    default: m.CreationOptionsPage,
  }))
);
const QuestionsCreatedByAI = lazy(() =>
  import("@pages/ai-created-questions-page").then((m) => ({
    default: m.QuestionsCreatedByAI,
  }))
);

export const router = createHashRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Preloader />}>
              <LoginPage />
            </Suspense>
          ),
        },
        {
          path: "/loginPage",
          element: (
            <Suspense fallback={<Preloader />}>
              <LoginPage />
            </Suspense>
          ),
        },
        {
          path: "/creationOptionsPage",
          element: (
            <Suspense fallback={<Preloader />}>
              <CreationOptionsPage />
            </Suspense>
          ),
        },
        {
          path: "/themesCreation",
          element: (
            <Suspense fallback={<Preloader />}>
              <ThemesCreation />
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
          path: "/coursesThemesSelection",
          element: (
            <Suspense fallback={<Preloader />}>
              <CourseThemesPage />
            </Suspense>
          ),
        },
        {
          path: "/editingQuestions",
          element: (
            <Suspense fallback={<Preloader />}>
              <EditingQuestions />
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
          path: "/manualCreatingPage",
          element: (
            <Suspense fallback={<Preloader />}>
              <ManualQuestionCreation />
            </Suspense>
          ),
        },
        {
          path: "/formForCreatingQuestionsByAI",
          element: (
            <Suspense fallback={<Preloader />}>
              <AIQuestionCreation />
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
      ],
    },
  ]
  // {
  // future: {
  // v7_relativeSplatPath: true, // Enables relative paths in nested routes
  // v7_fetcherPersist: true, // Retains fetcher state during navigation
  // v7_normalizeFormMethod: true, // Normalizes form methods (e.g., POST or GET)
  // v7_partialHydration: true, // Supports partial hydration for server-side rendering
  // v7_skipActionErrorRevalidation: true, // Prevents revalidation when action errors occur
  // },
  // }
);
