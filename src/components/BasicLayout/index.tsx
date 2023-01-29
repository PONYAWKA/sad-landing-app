import { Outlet } from "react-router-dom";

import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

export const BasicLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
