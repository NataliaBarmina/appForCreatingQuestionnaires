import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createHashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@shared/MUI/themeForMaterialUI";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./index.css";
import "./shared/ i18n/i18n";

import { store } from "./store/store";
import { Preloader } from "./shared/ui";
import { MainPage } from "./app/mainPage";
import { ToastContainer } from "react-toastify";

// const QuestionCreationMethod = lazy(() =>
//   import("./pages/creating").then((m) => ({ default: m.QuestionCreationMethod }))
// );
const QuestionsCreatedByAI = lazy(() =>
  import("./pages/creating").then((m) => ({ default: m.QuestionsCreatedByAI }))
);
const FormForCreatingQuestionsByAI = lazy(() =>
  import("./pages/creating").then((m) => ({ default: m.FormForCreatingQuestionsByAI }))
);
const ManualQuestionCreation = lazy(() =>
  import("./pages/creating").then((m) => ({ default: m.ManualQuestionCreation }))
);
const FormForCreatingTheme = lazy(() =>
  import("./pages/creating").then((m) => ({ default: m.FormForCreatingTheme }))
);

const CourseThemesContainer = lazy(() =>
  import("./pages/course-theme-selection/course-theme-container").then((m) => ({
    default: m.CourseThemesContainer,
  }))
);

const Questionnaire = lazy(() =>
  import("./pages/questionnaire").then((m) => ({ default: m.Questionnaire }))
);
const ResultsOfTheQuestionnaire = lazy(() =>
  import("./pages/result").then((m) => ({ default: m.ResultsOfTheQuestionnaire }))
);

const QuestionList = lazy(() =>
  import("./pages/editing/questionList").then((m) => ({ default: m.QuestionList }))
);

const EditingQuestions = lazy(() =>
  import("./pages/editing/editing-questions").then((m) => ({ default: m.EditingQuestions }))
);
const AuthForm = lazy(() => import("./pages/auth").then((m) => ({ default: m.AuthForm })));
const DashboardPage = lazy(() =>
  import("./pages/dashboard").then((m) => ({ default: m.DashboardPage }))
);
const ThemesCreation = lazy(() =>
  import("./pages/themes-creation/themes-creation").then((m) => ({ default: m.ThemesCreation }))
);

const CreationOptionsPage = lazy(() =>
  import("./pages/creation-menu/creation-options-page").then((m) => ({
    default: m.CreationOptionsPage,
  }))
);

const root = createRoot(document.getElementById("root"));

const router = createHashRouter(
  [
    {
      path: "/",
      element: <MainPage />,
      children: [
        // {
        //   path: "/creatingQuestions",
        //   element: (
        //     <Suspense fallback={<Preloader />}>
        //       <QuestionCreationMethod />
        //     </Suspense>
        //   ),
        // },
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
          path: "/editingQuestions",
          element: (
            <Suspense fallback={<Preloader />}>
              <EditingQuestions />
            </Suspense>
          ),
        },
        {
          path: "/coursesThemesSelection",
          element: (
            <Suspense fallback={<Preloader />}>
              <CourseThemesContainer />
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
          path: "/formForCreatingTheme",
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
              <ManualQuestionCreation />
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: 1,
    },
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RouterProvider
            router={router}
            future={{
              v7_startTransition: true,
            }}
          />
          <ToastContainer position="top-right" autoClose={4000} />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
