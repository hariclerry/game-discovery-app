import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Layout from "./Pages/Layout";
import GameDetailPage from "./Pages/GameDetailPage";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
