import { About } from "@/pages/About";
import { Blog } from "@/pages/Blog";
import { BlogInfo } from "@/pages/BlogInfo";
import { Contacts } from "@/pages/Contacts";
import { FAQ } from "@/pages/FAQ";
import { Home } from "@/pages/Home/index";
import { NotFound } from "@/pages/NotFound";
import { OurTeamPage } from "@/pages/OurTeam";
import { OurTeamInfo } from "@/pages/OurTeamInfo";
import { Services } from "@/pages/Services";
import { ServicesInfo } from "@/pages/ServicesInfo";
import { Solutions } from "@/pages/Solutions";
import { SolutionInfo } from "@/pages/SolutionsInfo";

export const ROUTES = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "Services",
    element: <Services />,
  },
  {
    path: "Services/Info",
    element: <ServicesInfo />,
  },
  {
    path: "Blog/Info",
    element: <BlogInfo />,
  },
  {
    path: "Blog",
    element: <Blog />,
  },
  {
    path: "Contacts",
    element: <Contacts />,
  },
  {
    path: "OurTeam",
    element: <OurTeamPage />,
  },
  {
    path: "OurTeam/Info",
    element: <OurTeamInfo />,
  },
  {
    path: "FAQ",
    element: <FAQ />,
  },
  {
    path: "Solutions",
    element: <Solutions />,
  },
  {
    path: "Solutions/Info",
    element: <SolutionInfo />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const NAV_ROUTES = [
  {
    to: "/",
    name: "Home",
    children: null,
  },
  {
    to: "Solutions",
    name: "Solutions",
    children: null,
  },
  {
    to: "/",
    name: "Pages",
    children: [
      { name: "FAQ", to: "FAQ" },
      { name: "Services", to: "Services" },
      { name: "About", to: "About" },
    ],
  },
  {
    to: "Blog",
    name: "Blog",
    children: null,
  },
  {
    to: "Contacts",
    name: "Contacts",
    children: null,
  },
];

export const FOOTER_ROUTES = [
  {
    to: "",
    title: "Home",
  },
  {
    to: "Solutions",
    title: "Solutions",
  },
  {
    to: "Blog",
    title: "Blog",
  },
  {
    to: "Contacts",
    title: "Contacts",
  },
  {
    to: "OurTeam",
    title: "Our team",
  },
  {
    to: "About",
    title: "About Us",
  },
  {
    to: "Services",
    title: "Services",
  },
  {
    to: "FAQ",
    title: "FAQ",
  },
];

export const SERVICE_ROUTS = [
  {
    to: "",
    title: "Pages",
  },
  {
    to: "",
    title: "Elements",
  },
  {
    to: "",
    title: "Pricing",
  },
  {
    to: "",
    title: "FAQ",
  },
  {
    to: "",
    title: "Site map",
  },
];

export const CONTACT_INFO = [
  {
    to: "",
    title: "ensome@info.co.us",
  },
  {
    to: "",
    title: "+1 601-201-5580",
  },
  {
    to: "",
    title: "1642 Washington Avenue, Jackson, MS, Mississippi, 39201",
  },
];
