import React from "react";
import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Provider } from "react-redux";
import { store } from "./store/store";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@shared/MUI/themeForMaterialUI";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./index.css";
import "./shared/ i18n/i18n";
import { Preloader } from "./shared/ui";
import { MainPage } from "./app/mainPage";

const FormForCreatingQuestionsByAI = lazy(() =>
  import("./pages/by-Ai/formForCreatingQuestionsByAI").then((m) => ({
    default: m.FormForCreatingQuestionsByAI,
  }))
);
const ManualQuestionCreation = lazy(() =>
  import("./pages/manual-question-creation").then((m) => ({ default: m.ManualQuestionCreation }))
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

const EditingQuestions = lazy(() =>
  import("./pages/editing-question").then((m) => ({
    default: m.EditingQuestions,
  }))
);

const DashboardPage = lazy(() =>
  import("./pages/dashboard-page").then((m) => ({ default: m.DashboardPage }))
);
const ThemesCreation = lazy(() =>
  import("./pages/themes-creation").then((m) => ({ default: m.ThemesCreation }))
);

const LoginPage = lazy(() => import("./pages/login-page").then((m) => ({ default: m.LoginPage })));

const CreationOptionsPage = lazy(() =>
  import("./pages/creation-options-page").then((m) => ({
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
          path: "/coursesThemesSelection",
          element: (
            <Suspense fallback={<Preloader />}>
              <CourseThemesContainer />
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
              <FormForCreatingQuestionsByAI />
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
