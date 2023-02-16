import solutions1 from "@/assets/icons/solutions/solutions1.svg";
import solutions2 from "@/assets/icons/solutions/solutions2.svg";
import solutions3 from "@/assets/icons/solutions/solutions3.svg";
import solutions4 from "@/assets/icons/solutions/solutions4.svg";
import solutions5 from "@/assets/icons/solutions/solutions5.svg";
import solutions6 from "@/assets/icons/solutions/solutions6.svg";

export const options = {
  en: {
    pageHeaderConfig: {
      text: "Solutions",
      title: "Data analytics solutions",
      subtext:
        "Getting ready for your success, we provide truly outstanding IT solutions.",
    },

    breadCrumb: {
      curPage: "Solutions",
      links: [{ name: "Home", to: "/" }],
    },

    advantagesConfig: {
      title: `Why choose us?`,
      items: [
        {
          heading: "Machine learning",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
        },
        {
          heading: "Embed analytics",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
        },
        {
          heading: "Access control",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
        },
      ],
    },

    solutionsItems: [
      {
        id: 0,
        img: solutions1,
        heading: "Data integration",
        description:
          "Extract, transform, load (ETL) or extract, load, transform (ELT); data governance (security, availability, quality) implementation.",
      },
      {
        id: 1,
        img: solutions2,
        heading: "Data integration",
        description:
          "Data preparation and management; machine learning (ML); designing and implanting artificial intelligence (AI) solutions.",
      },
      {
        id: 2,
        img: solutions3,
        heading: "Big data",
        description:
          "Big data infrastructure setup and support.; big data quality and security management; big data capture, analysis and reporting.",
      },
      {
        id: 3,
        img: solutions4,
        heading: "Data warehousing",
        description:
          "The process of constructing and using a data warehouse. Data warehouse and data marts design and implementation.",
      },
      {
        id: 4,
        img: solutions5,
        heading: "Self-service BI",
        description:
          "Business intelligence; data analytics infrastructure design and implementation; scheduled analytics querying and reporting.",
      },
      {
        id: 5,
        img: solutions6,
        heading: "Data visualization",
        description:
          "Interactive dashboarding; custom and pre-built visuals; multiple visualization techniques (symbol maps, line charts, pie charts...)",
      },
    ],
  },
  ru: {
    pageHeaderConfig: {
      text: "Решения",
      title: "Решения для анализа данных",
      subtext:
        "Готовясь к вашему успеху, мы предоставляем действительно выдающиеся ИТ-решения.",
    },

    breadCrumb: {
      curPage: "Solutions",
      links: [{ name: "Home", to: "/" }],
    },

    advantagesConfig: {
      title: `Почему выбрали нас?`,
      items: [
        {
          heading: "Машинное обучение",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
        },
        {
          heading: "Встроить аналитику",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
        },
        {
          heading: "Контроль доступа",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
        },
      ],
    },

    solutionsItems: [
      {
        id: 0,
        img: solutions1,
        heading: "Интеграция данных",
        description:
          "Извлечение, преобразование, загрузка (ETL) или извлечение, загрузка, преобразование (ELT); реализация управления данными (безопасность, доступность, качество).",
      },
      {
        id: 1,
        img: solutions2,
        heading: "Интеграция данных",
        description:
          "Подготовка и управление данными; машинное обучение (МО); разработка и внедрение решений искусственного интеллекта (ИИ).",
      },
      {
        id: 2,
        img: solutions3,
        heading: "Большие данные",
        description:
          "Настройка и поддержка инфраструктуры больших данных; управление качеством и безопасностью больших данных; сбор больших данных, анализ и отчетность.",
      },
      {
        id: 3,
        img: solutions4,
        heading: "Хранилище данных",
        description:
          "Процесс построения и использования хранилища данных. Проектирование и внедрение хранилища данных и киосков данных.",
      },
      {
        id: 4,
        img: solutions5,
        heading: "BI самообслуживания",
        description:
          "Бизнес-аналитика; проектирование и внедрение инфраструктуры аналитики данных; запланированные аналитические запросы и отчеты.",
      },
      {
        id: 5,
        img: solutions6,
        heading: "Визуализация данных",
        description:
          "интерактивная информационная панель; настраиваемые и готовые визуальные эффекты; несколько методов визуализации (карты символов, линейные диаграммы, круговые диаграммы...)",
      },
    ],
  },
};
