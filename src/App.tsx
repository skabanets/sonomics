import { lazy } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { SharedLayout } from "./layout";

import { routes } from "./constants";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Industries = lazy(() => import("./pages/Industries"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const About = lazy(() => import("./pages/About"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      { index: true, loader: getLoader, element: <Home /> },
      { path: routes.Services, loader: getLoader, element: <Services /> },
      { path: routes.Industries, loader: getLoader, element: <Industries /> },
      { path: routes.CaseStudy, loader: getLoader, element: <CaseStudy /> },
      { path: routes.About, loader: getLoader, element: <About /> },
    ],
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);

async function getLoader() {
  await new Promise((r) => setTimeout(r, 100));
  return { message: "Data Loaded" };
}

export const App = () => {
  return <RouterProvider router={router} />;
};
