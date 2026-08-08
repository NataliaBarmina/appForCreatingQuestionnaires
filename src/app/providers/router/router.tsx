import { lazy, Suspense, type ReactNode } from "react";
import { createHashRouter, Navigate } from "react-router-dom";
import { Preloader } from "@shared/ui";
import { AppLayout } from "@app/layouts";
import { ProtectedRoute } from "./protected-route";

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

const EditThemesPage = lazy(() =>
  import("@pages/edit-themes-page").then((m) => ({
    default: m.EditThemesPage,
  }))
);

const DashboardPage = lazy(() =>
  import("@pages/dashboard-page").then((m) => ({ default: m.DashboardPage }))
);
const CourseWheel = lazy(() =>
  import("@pages/course-wheel-page").then((m) => ({ default: m.CourseWheel }))
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
const AICreatedThemesPage = lazy(() =>
  import("@pages/ai-created-themes-page").then((m) => ({
    default: m.AICreatedThemesPage,
  }))
);
const CreateThemePage = lazy(() =>
  import("@pages/create-theme-page").then((m) => ({
    default: m.CreateThemePage,
  }))
);
const EditorPage = lazy(() =>
  import("@pages/editor-page").then((m) => ({
    default: m.EditorPage,
  }))
);

function withSuspense(element: ReactNode) {
  return <Suspense fallback={<Preloader />}>{element}</Suspense>;
}

export const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "loginPage",
        element: withSuspense(<LoginPage />),
      },
      // Защищённая группа маршрутов
      {
        element: <ProtectedRoute />,

        children: [
          {
            index: true,
            element: <Navigate to="/dashboardPage" replace />,
          },
          {
            path: "editorPage",
            element: withSuspense(<EditorPage />),
          },
          {
            path: "editThemes",
            element: withSuspense(<EditThemesPage />),
          },
          {
            path: "createTheme",
            element: withSuspense(<CreateThemePage />),
          },
          {
            path: "creationOptionsPage",
            element: withSuspense(<CreationOptionsPage />),
          },
          {
            path: "courseWheel",
            element: withSuspense(<CourseWheel />),
          },
          {
            path: "AICreatedThemes",
            element: withSuspense(<AICreatedThemesPage />),
          },
          {
            path: "questionsCreatedByAI",
            element: withSuspense(<QuestionsCreatedByAI />),
          },
          {
            path: "coursesThemesSelection",
            element: withSuspense(<CourseThemesPage />),
          },
          {
            path: "editingQuestions",
            element: withSuspense(<EditingQuestions />),
          },
          {
            path: "questionnaire",
            element: withSuspense(<Questionnaire />),
          },
          {
            path: "resultsOfTheQuestionnaire",
            element: withSuspense(<ResultsOfTheQuestionnaire />),
          },
          {
            path: "manualCreatingPage",
            element: withSuspense(<ManualQuestionCreation />),
          },
          {
            path: "formForCreatingQuestionsByAI",
            element: withSuspense(<AIQuestionCreation />),
          },
          {
            path: "dashboardPage",
            element: withSuspense(<DashboardPage />),
          },
        ],
      },
    ],
  },
]);
