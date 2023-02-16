import { NotFound } from "sad-landing-lib";

import { About } from "@/pages/About";
import { Blog } from "@/pages/Blog";
import { BlogInfo } from "@/pages/BlogInfo";
import { Contacts } from "@/pages/Contacts";
import { FAQ } from "@/pages/FAQ";
import { Home } from "@/pages/Home/index";
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

export const options = {
  en: {
    NAV_ROUTES: [
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
          { name: "OurTeam", to: "OurTeam" },
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
    ],

    FOOTER_ROUTES: [
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
    ],

    SERVICE_ROUTS: [
      {
        to: "Nowhere",
        title: "Pages",
      },
      {
        to: "Nowhere",
        title: "Elements",
      },
      {
        to: "Nowhere",
        title: "Pricing",
      },
      {
        to: "Nowhere",
        title: "FAQ",
      },
      {
        to: "Nowhere",
        title: "Site map",
      },
    ],
  },
  ru: {
    NAV_ROUTES: [
      {
        to: "/",
        name: "Главная",
        children: null,
      },
      {
        to: "Solutions",
        name: "Решения",
        children: null,
      },
      {
        to: "/",
        name: "Страницы",
        children: [
          { name: "FAQ", to: "FAQ" },
          { name: "Сервисы", to: "Services" },
          { name: "О нас", to: "About" },
          { name: "Наша комманда", to: "OurTeam" },
        ],
      },
      {
        to: "Blog",
        name: "Блог",
        children: null,
      },
      {
        to: "Contacts",
        name: "Контакты",
        children: null,
      },
    ],

    FOOTER_ROUTES: [
      {
        to: "",
        title: "Главныя",
      },
      {
        to: "Solutions",
        title: "Решения",
      },
      {
        to: "Blog",
        title: "Блог",
      },
      {
        to: "Contacts",
        title: "Контакты",
      },
      {
        to: "OurTeam",
        title: "Наша комманда",
      },
      {
        to: "About",
        title: "О нас",
      },
      {
        to: "Services",
        title: "Сервисы",
      },
      {
        to: "FAQ",
        title: "FAQ",
      },
    ],

    SERVICE_ROUTS: [
      {
        to: "Nowhere",
        title: "Страницы",
      },
      {
        to: "Nowhere",
        title: "Элементы",
      },
      {
        to: "Nowhere",
        title: "Цены",
      },
      {
        to: "Nowhere",
        title: "FAQ",
      },
      {
        to: "Nowhere",
        title: "Карта сайта",
      },
    ],
  },
};

export const CONTACT_INFO = [
  {
    to: "mailto:ensome@info.co.us",
    title: "ensome@info.co.us",
  },
  {
    to: "tel:16012015580",
    title: "+1 601-201-5580",
  },
  {
    to: "",
    title: "1642 Washington Avenue, Jackson, MS, Mississippi, 39201",
  },
];
