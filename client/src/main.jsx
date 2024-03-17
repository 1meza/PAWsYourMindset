import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Questions from "./components/Questions"
import Versus from "./components/Versus";
import Team from "./components/Team";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ]
  },
  {
    path: "/Questions",
    element: <Questions />,
  },
  {
    path: "/Versus",
    element: <Versus />,
  },
  {
    path: "/Team",
    element: <Team />,
  },
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);