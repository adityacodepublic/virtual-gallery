import { createBrowserRouter } from "react-router";
import App from "./App";
import Globe from "./components/Globe";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/explore",
    Component: Globe,
  },
]);

export default router;
