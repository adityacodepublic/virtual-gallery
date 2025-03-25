import { createBrowserRouter } from "react-router";
import App from "./App";
import Spliner from "./Spline";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/spline",
    Component: Spliner,
  },
]);

export default router;
