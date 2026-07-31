import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AppProviders } from "./providers/app-providers";
import { router } from "./providers/router";

export const App = () => {
  return (
    <AppProviders>
      <RouterProvider router={router} />

      <ToastContainer position="top-right" autoClose={4000} />
    </AppProviders>
  );
};
