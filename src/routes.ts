import { createBrowserRouter } from "react-router";
import App from "./App";
import Spliner from "./components/Spline";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/explore",
    Component: Spliner,
  },
]);

export default router;
