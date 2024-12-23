import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Creating from "./components/creating/creating";
import Questionnaire from "./components/questionnaire/questionnaire";
import DefaultPage from "./components/defaultPage";
import TailwindSample from "./components/sample/tailwindSample";
import FormForCreatingQuestionsByAI from "./components/creating/formForCreatingQuestionsByAI";
import QuestionsCreatedByAI from "./components/creating/questionsCreatedByAI";
import FormForCreatingQuestionsYourself from "./components/creating/formForCreatingQuestionsYourself";
import CourseSelection from "./components/editing/courseSelection";
import ThemeSelection from "./components/editing/themeSelection";
import QuestionList from "./components/editing/questionList";
import ResultsOfTheQuestionnaire from "./components/questionnaire/resultsOfTheQuestionnaire";

const root = createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/creating",
        element: <Creating />,
      },
      {
        path: "/courseSelection",
        element: <CourseSelection />,
      },
      {
        path: "/questionList",
        element: <QuestionList />,
      },
      {
        path: "/themeSelection",
        element: <ThemeSelection />,
      },
      {
        path: "/questionnaire",
        element: <Questionnaire />,
      },
      {
        path: "/resultsOfTheQuestionnaire",
        element: <ResultsOfTheQuestionnaire />,
      },

      {
        path: "/formForCreatingQuestionsByAI",
        element: <FormForCreatingQuestionsByAI />,
      },
      {
        path: "/questionsCreatedByAI",
        element: <QuestionsCreatedByAI />,
      },
      {
        path: "/formForCreatingQuestionsYourself",
        element: <FormForCreatingQuestionsYourself />,
      },
      {
        path: "/",
        element: <DefaultPage />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);

// root.render(<App />)
