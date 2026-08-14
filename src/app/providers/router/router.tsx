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
const CreationThemePage = lazy(() =>
  import("@pages/creation-theme-page").then((m) => ({
    default: m.CreationThemePage,
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
            path: "dashboardPage",
            element: withSuspense(<DashboardPage />),
          },

          {
            path: "creationOptionsPage",
            element: withSuspense(<CreationOptionsPage />),
          },
          {
            path: "createTheme",
            element: withSuspense(<CreationThemePage />), //!для создания тем - переход на создание вручную и ИИ
          },
          {
            path: "manualCreatingPage",
            element: withSuspense(<ManualQuestionCreation />), //!для создания вопросов вручную
          },
          {
            path: "formForCreatingQuestionsByAI",
            element: withSuspense(<AIQuestionCreation />), //!для создания вопросов  ИИ
          },

          {
            path: "AICreatedThemes",
            element: withSuspense(<AICreatedThemesPage />), //! сгенерированные темы
          },
          {
            path: "questionsCreatedByAI",
            element: withSuspense(<QuestionsCreatedByAI />), //! сгенерированные вопросы
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
            path: "editingQuestions",
            element: withSuspense(<EditingQuestions />),
          },

          {
            path: "courseWheel",
            element: withSuspense(<CourseWheel />),
          },

          {
            path: "coursesThemesSelection",
            element: withSuspense(<CourseThemesPage />),
          },

          {
            path: "questionnaire",
            element: withSuspense(<Questionnaire />),
          },
          {
            path: "resultsOfTheQuestionnaire",
            element: withSuspense(<ResultsOfTheQuestionnaire />),
          },
        ],
      },
    ],
  },
]);
