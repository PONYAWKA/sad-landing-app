import { CONTACT_INFO } from "@/constants/contactInfo";

export const option = {
  en: {
    links: [
      {
        title: "Quick link",
        routs: [
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
        alt: false,
      },
      {
        title: "Service",
        routs: [
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
      { title: "Contact info", routs: CONTACT_INFO, alt: true },
    ],
  },
  ru: {
    links: [
      {
        title: "Ccылки",
        routs: [
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
        alt: false,
      },
      {
        title: "Сервисы",
        routs: [
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
      { title: "Контактная информация", routs: CONTACT_INFO, alt: true },
    ],
  },
};
