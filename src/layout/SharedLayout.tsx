import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "./index";
import { Loader } from "../components";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
