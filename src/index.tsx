import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UsersList } from "./pages/UsersListPage";
import { ErrorPage } from "./pages/ErrorPage";
import { setupStore } from "./store/store";
import { CreatePage } from "./pages/CreatePage";
import { UpdatePage } from "./pages/UpdatePage";

const store = setupStore();

const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:id",
    element: <UpdatePage />,
  },
  {
    path: "contacts/create",
    element: <CreatePage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
