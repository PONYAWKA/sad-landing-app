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
    children: [
      { name: "About Us", to: "/" },
      { name: "About Ussdafafdasf", to: "/" },
      { name: "About Ussdafafdas", to: "/" },
      { name: "About Ussdafafda", to: "/" },
    ],
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
