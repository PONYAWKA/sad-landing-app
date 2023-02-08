import { About } from "@/pages/About";
import { Blog } from "@/pages/Blog";
import { ContactsPage } from "@/pages/ContactsPage";
import { FAQ } from "@/pages/FAQ";
import { Home } from "@/pages/Home/index";
import { OurTeamPage } from "@/pages/OurTeam";
import { Services } from "@/pages/Services";
import { Solutions } from "@/pages/Solutions";
export const ROUTES = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "AboutUs",
    element: <About />,
  },
  {
    path: "Services",
    element: <Services />,
  },
  {
    path: "Blog",
    element: <Blog />,
  },
  {
    path: "Contacts",
    element: <ContactsPage />,
  },
  {
    path: "OurTeam",
    element: <OurTeamPage />,
  },
  {
    path: "FAQ",
    element: <FAQ />,
  },
  {
    path: "Solutions",
    element: <Solutions />,
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
      { name: "About Us", to: "/" },
      { name: "About Ussdafafdasf", to: "/" },
      { name: "About Ussdafafdas", to: "/" },
      { name: "About Ussdafafda", to: "/" },
    ],
  },
  {
    to: "Elements",
    name: "Elements",
    children: null,
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
    to: "AboutUs",
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
