import { About } from "@/pages/About";
import { Home } from "@/pages/Home/index";
export const HOME_PAGE = "";
export const ROUTES = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
];

export const NAV_ROUTES = [
  {
    to: "/",
    name: "Home",
    children: null,
  },
  {
    to: "/Solutions",
    name: "Solutions",
    children: null,
  },
  {
    to: "/",
    name: "Pages",
    children: null,
  },
  {
    to: "/Elements",
    name: "Elements",
    children: null,
  },
  {
    to: "/Contacts",
    name: "Contacts",
    children: null,
  },
];
