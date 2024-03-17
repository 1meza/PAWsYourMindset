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
import Questions2 from "./components/Questions2";
import Questions3 from "./components/Questions3";
import Questions4 from "./components/Questions4";
import Questions5 from "./components/Questions5";
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
  {
    path: "/Questions2",
    element: <Questions2 />,
  },
  {
    path: "/Questions3",
    element: <Questions3 />,
  },
  {
    path: "/Questions4",
    element: <Questions4 />,
  },
  {
    path: "/Questions5",
    element: <Questions5 />,
  },
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);