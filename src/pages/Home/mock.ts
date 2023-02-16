import { cardEn, cardRu } from "@/constants/benefidsCard";

export const homeConfig = {
  en: {
    ElementsToShow: {
      mobile: 1,
      desktop: 3,
    },

    powerConfig: {
      title: `Find true power in your data with`,
      text: ` Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab
      illo inventore veritatis et quasi.`,
      buttonText: "Learn more",
    },

    newestConfig: {
      title: `business analytics platform`,
      titleArticle: "The",
      titleOutline: ` newest `,
      text: ` Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo.`,
      buttonText: `Discover more`,
    },

    solutionsConfig: {
      text: `  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo.`,
      title: ` Radically new solutions for data`,
      buttonText: `Learn more`,
    },

    successConfig: {
      title: "We provide services that guarantee your success",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.",
      items: [
        { title: "1830+", sub: "Project executed" },
        { title: "834+", sub: "Satisfied customers" },
        { title: "390", sub: "Data management" },
      ],
    },
    BenefitConfig: {
      title: "The benefits of Ensome",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      cards: cardEn,
    },

    priceCardsConfig: {
      title: "Our pricing",
      cards: [
        {
          name: "Free trial",
          mo: 1,
          yr: 12,
          plus: ["For small teams - 5 users", "Community support"],
        },
        {
          name: "Lite",
          mo: 99,
          yr: 1111,
          plus: [
            "For small teams - 15 users",
            "Individual support",
            "Individual data - 60GB",
          ],
        },
        {
          name: "Basic",
          mo: 199,
          yr: 2000,
          plus: [
            "For big teams - 30 users",
            "Individual support",
            "Individual data - 120GB",
            "Advanced permissions",
          ],
          priority: true,
        },
        {
          name: "f",
          mo: "Custom",
          yr: "Custom",
          plus: [
            "Unlimited team members",
            "Individual support",
            "Unlimited Individual data",
            "Advanced permissions",
            "Data history",
            "Audit log",
            "All functions included",
          ],
        },
      ],
    },
  },
  ru: {
    ElementsToShow: {
      mobile: 1,
      desktop: 3,
    },

    powerConfig: {
      title: `Откройте для себя истинную силу ваших данных с помощью`,
      text: ` Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab
      illo inventore veritatis et quasi.`,
      buttonText: "Learn more",
    },

    newestConfig: {
      title: `платформа бизнес-аналитики`,
      titleArticle: "",
      titleOutline: ``,
      text: ` Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo.`,
      buttonText: `Открой для себя больше`,
    },

    solutionsConfig: {
      text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo.`,
      title: `Принципиально новые решения для данных`,
      buttonText: `Узнать больше`,
    },

    successConfig: {
      title: "Мы предоставляем услуги, которые гарантируют ваш успех",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.",
      items: [
        { title: "1830+", sub: "Проект выполнен" },
        { title: "834+", sub: "Довольные клиенты" },
        { title: "390", sub: "Управление данными" },
      ],
    },
    BenefitConfig: {
      title: "Преимущества Ensome",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      cards: cardRu,
    },

    priceCardsConfig: {
      title: "Наши цены",
      cards: [
        {
          name: "Бесплатная пробная версия",
          mo: 1,
          yr: 12,
          plus: [
            "Для небольших команд - 5 пользователей",
            "Поддержка сообщества",
          ],
        },
        {
          name: "Lite",
          mo: 99,
          yr: 1111,
          plus: [
            "Для небольших команд - 15 пользователей",
            "Индивидуальное сопровождение",
            "Индивидуальные данные - 60Гб",
          ],
        },
        {
          name: "Basic",
          mo: 199,
          yr: 2000,
          plus: [
            "Для больших команд - 30 пользователей",
            "Индивидуальное сопровождение",
            "Индивидуальные данные - 120Гб",
            "Расширенные разрешения",
          ],
          priority: true,
        },
        {
          name: "f",
          mo: "Договор",
          yr: "Договор",
          plus: [
            "Неограниченное количество членов команды",
            "Индивидуальное сопровождение",
            "Неограниченные Индивидуальные данные",
            "Расширенные разрешения",
            "История данных",
            "Журнал аудита",
          ],
        },
      ],
    },
  },
};
