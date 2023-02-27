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
        to: "/",
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
        to: "our-team",
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
          { name: "Наша комманда", to: "our-team" },
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
        to: "our-team",
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
