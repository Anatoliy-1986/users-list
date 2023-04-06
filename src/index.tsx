import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UsersList } from "./components/UsersList";
import { ErrorPage } from "./components/ErrorPage";
import { UserCreation } from "./components/UserCreation";
import { store } from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <UserCreation />,
  },
  {
    path: "contacts/newUser",
    element: <UserCreation />,
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
