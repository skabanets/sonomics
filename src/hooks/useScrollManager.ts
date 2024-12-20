import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem("scrollPosition", JSON.stringify(window.scrollY));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useLayoutEffect(() => {
    const savedPosition = sessionStorage.getItem("scrollPosition");
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo(0, JSON.parse(savedPosition));
      }, 250);
      sessionStorage.removeItem("scrollPosition");
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
};
