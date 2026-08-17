import { lazy, Suspense, type ReactNode } from "react";
import { createHashRouter, Navigate } from "react-router-dom";
import { Preloader } from "@shared/ui";
import { AppLayout } from "@app/layouts";
import { ProtectedRoute } from "./protected-route";

const AIQuestionsGenerationPage = lazy(() =>
  import("@pages/ai-questions-generation-page").then((m) => ({
    default: m.AIQuestionsGenerationPage,
  }))
);
const ManualQuestionCreationPage = lazy(() =>
  import("@pages/manual-question-creation-page").then((m) => ({
    default: m.ManualQuestionCreationPage,
  }))
);

const CourseThemeSelectionPage = lazy(() =>
  import("@pages/course-theme-selection-page").then((m) => ({
    default: m.CourseThemeSelectionPage,
  }))
);
const QuestionnairePage = lazy(() =>
  import("@pages/questionnaire-page").then((m) => ({ default: m.QuestionnairePage }))
);
const QuestionnaireResultPage = lazy(() =>
  import("@pages/questionnaire-result-page").then((m) => ({
    default: m.QuestionnaireResultPage,
  }))
);

const QuestionEditorPage = lazy(() =>
  import("@pages/question-editor-page").then((m) => ({
    default: m.QuestionEditorPage,
  }))
);

const ThemeEditorPage = lazy(() =>
  import("@pages/theme-editor-page").then((m) => ({
    default: m.ThemeEditorPage,
  }))
);

const DashboardPage = lazy(() =>
  import("@pages/dashboard-page").then((m) => ({ default: m.DashboardPage }))
);
const CourseSelectionPage = lazy(() =>
  import("@pages/course-selection-page").then((m) => ({ default: m.CourseSelectionPage }))
);

const LoginPage = lazy(() => import("@pages/login-page").then((m) => ({ default: m.LoginPage })));

const ContentCreationOptionPage = lazy(() =>
  import("@pages/content-creation-options-page").then((m) => ({
    default: m.ContentCreationOptionPage,
  }))
);
const AIGeneratedQuestionsPage = lazy(() =>
  import("@pages/ai-generated-questions-page").then((m) => ({
    default: m.AIGeneratedQuestionsPage,
  }))
);
const AIGeneratedThemesPage = lazy(() =>
  import("@pages/ai-generated-themes-page").then((m) => ({
    default: m.AIGeneratedThemesPage,
  }))
);
const ManualThemeCreationPage = lazy(() =>
  import("@pages/manual-theme-creation-page").then((m) => ({
    default: m.ManualThemeCreationPage,
  }))
);
const AIThemesGenerationPage = lazy(() =>
  import("@pages/ai-themes-generation-page").then((m) => ({
    default: m.AIThemesGenerationPage,
  }))
);
const ContentEditingOptionsPage = lazy(() =>
  import("@pages/content-editing-options-page").then((m) => ({
    default: m.ContentEditingOptionsPage,
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
        path: "login",
        element: withSuspense(<LoginPage />),
      },
      // Защищённая группа маршрутов
      {
        element: <ProtectedRoute />,

        children: [
          {
            index: true,
            element: <Navigate to="/dashboard" replace />,
          },
          {
            path: "dashboard",
            element: withSuspense(<DashboardPage />),
          },

          {
            path: "create",
            element: withSuspense(<ContentCreationOptionPage />),
          },
          {
            path: "create/theme",
            element: withSuspense(<ManualThemeCreationPage />), // вручную и ИИ
          },
          {
            path: "create/questions/manual",
            element: withSuspense(<ManualQuestionCreationPage />),
          },
          {
            path: "create/questions/ai",
            element: withSuspense(<AIQuestionsGenerationPage />),
          },
          {
            path: "create/themes/ai",
            element: withSuspense(<AIThemesGenerationPage />),
          },

          {
            path: "create/themes/ai-result",
            element: withSuspense(<AIGeneratedThemesPage />), // сгенерированные темы
          },
          {
            path: "create/questions/ai-result",
            element: withSuspense(<AIGeneratedQuestionsPage />), // сгенерированные вопросы
          },

          {
            path: "edit",
            element: withSuspense(<ContentEditingOptionsPage />),
          },
          {
            path: "edit/themes",
            element: withSuspense(<ThemeEditorPage />),
          },
          {
            path: "edit/questions",
            element: withSuspense(<QuestionEditorPage />),
          },

          {
            path: "select/course",
            element: withSuspense(<CourseSelectionPage />),
          },

          {
            path: "select/course-theme",
            element: withSuspense(<CourseThemeSelectionPage />),
          },

          {
            path: "questionnaire",
            element: withSuspense(<QuestionnairePage />),
          },
          {
            path: "questionnaire/results",
            element: withSuspense(<QuestionnaireResultPage />),
          },
        ],
      },
    ],
  },
]);
