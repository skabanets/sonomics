import { Outlet, ScrollRestoration } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";

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
      <ToastContainer autoClose={2500} transition={Slide} />
    </>
  );
};
