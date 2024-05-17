
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Crime_Info from "./pages/Crime_Info";
import Crime_Predict from "./pages/Crime_Predict";
import Crime_Analysis from "./pages/Crime_Analysis";
import AboutUs from "./pages/AboutUs";
import SignIn from"./pages/SignIn";
import SignUp from "./pages/SignUp";
import Chat from "./pages/chat";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Crime_Info",
    element: <Crime_Info />,
  },
  {
    path: "Crime_Analysis",
    element: <Crime_Analysis />,
  },
  {
    path: "Crime_Predict",
    element: <Crime_Predict />,
  },

  {
    path: "AboutUs",
    element: <AboutUs />,
  },
  
  {
    path: "SignIn",
    element: <SignIn />,
  },
  {
    path: "SignUp",
    element: <SignUp />,
  },

  {
    path: "chat",
    element: <Chat />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
