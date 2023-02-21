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
    path: "services",
    element: <Services />,
  },
  {
    path: "servicesInfo",
    element: <ServicesInfo />,
  },
  {
    path: "blogInfo",
    element: <BlogInfo />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "contacts",
    element: <Contacts />,
  },
  {
    path: "ourTeam",
    element: <OurTeamPage />,
  },
  {
    path: "ourTeamInfo",
    element: <OurTeamInfo />,
  },
  {
    path: "FAQ",
    element: <FAQ />,
  },
  {
    path: "solutions",
    element: <Solutions />,
  },
  {
    path: "solutionsInfo",
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
        to: "solutions",
        name: "Solutions",
        children: null,
      },
      {
        to: "/",
        name: "Pages",
        children: [
          { name: "FAQ", to: "FAQ" },
          { name: "Services", to: "services" },
          { name: "About", to: "about" },
          { name: "OurTeam", to: "ourTeam" },
        ],
      },
      {
        to: "blog",
        name: "Blog",
        children: null,
      },
      {
        to: "contacts",
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
        to: "solutions",
        title: "Solutions",
      },
      {
        to: "blog",
        title: "Blog",
      },
      {
        to: "contacts",
        title: "Contacts",
      },
      {
        to: "ourTeam",
        title: "Our team",
      },
      {
        to: "about",
        title: "About Us",
      },
      {
        to: "services",
        title: "Services",
      },
      {
        to: "FAQ",
        title: "FAQ",
      },
    ],

    SERVICE_ROUTS: [
      {
        to: "nowhere",
        title: "Pages",
      },
      {
        to: "nowhere",
        title: "Elements",
      },
      {
        to: "nowhere",
        title: "Pricing",
      },
      {
        to: "nowhere",
        title: "FAQ",
      },
      {
        to: "nowhere",
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
        to: "solutions",
        name: "Решения",
        children: null,
      },
      {
        to: "/",
        name: "Страницы",
        children: [
          { name: "FAQ", to: "FAQ" },
          { name: "Сервисы", to: "services" },
          { name: "О нас", to: "about" },
          { name: "Наша комманда", to: "ourTeam" },
        ],
      },
      {
        to: "blog",
        name: "Блог",
        children: null,
      },
      {
        to: "contacts",
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
        to: "solutions",
        title: "Решения",
      },
      {
        to: "blog",
        title: "Блог",
      },
      {
        to: "contacts",
        title: "Контакты",
      },
      {
        to: "ourTeam",
        title: "Наша комманда",
      },
      {
        to: "about",
        title: "О нас",
      },
      {
        to: "services",
        title: "Сервисы",
      },
      {
        to: "FAQ",
        title: "FAQ",
      },
    ],

    SERVICE_ROUTS: [
      {
        to: "nowhere",
        title: "Страницы",
      },
      {
        to: "nowhere",
        title: "Элементы",
      },
      {
        to: "nowhere",
        title: "Цены",
      },
      {
        to: "nowhere",
        title: "FAQ",
      },
      {
        to: "nowhere",
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
