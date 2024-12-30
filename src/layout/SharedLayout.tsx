import { Outlet, ScrollRestoration } from "react-router-dom";

import { Header, Footer } from "./index";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration getKey={({ key }) => key} />
    </>
  );
};
