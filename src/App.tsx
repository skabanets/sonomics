import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { SharedLayout } from "./layout";

import { routes } from "./constants";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Industries = lazy(() => import("./pages/Industries"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const About = lazy(() => import("./pages/About"));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path={routes.Services} element={<Services />} />
        <Route path={routes.Industries} element={<Industries />} />
        <Route path={routes.CaseStudy} element={<CaseStudy />} />
        <Route path={routes.About} element={<About />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
