export const pageHeadConfig = (blog?: string) => ({
  title: "Blog",
  crumb: { curPage: blog ?? "Blog", links: [{ name: "Home", to: "/" }] },
});

export const categories = [
  { name: "Software development" },
  { name: "Information security" },
  { name: "Internet of things" },
  { name: "Digital transformation" },
  { name: "Healthcare it" },
];

export const tags = [
  "All topics",
  "App",
  "Management",
  "CMR",
  "Big data",
  "Media",
  "Future",
  "CIO",
  "Startup",
  "Team",
  "Data",
  "Data analytics",
  "Information security",
  "Proxy",
];

export const options = {
  en: {
    pageHeadConfig: (blog?: string) => ({
      title: "Blog",
      crumb: { curPage: blog ?? "Blog", links: [{ name: "Home", to: "/" }] },
    }),

    categories: [
      { name: "Software development" },
      { name: "Information security" },
      { name: "Internet of things" },
      { name: "Digital transformation" },
      { name: "Healthcare it" },
    ],

    tags: [
      "All topics",
      "App",
      "Management",
      "CMR",
      "Big data",
      "Media",
      "Future",
      "CIO",
      "Startup",
      "Team",
      "Data",
      "Data analytics",
      "Information security",
      "Proxy",
    ],
    relatedPosts: "Related Post",
    popularPosts: "Popular posts",
  },
  ru: {
    pageHeadConfig: (blog?: string) => ({
      title: "Блог",
      crumb: { curPage: blog ?? "Blog", links: [{ name: "Home", to: "/" }] },
    }),

    categories: [
      { name: "Разработка программного обеспечения" },
      { name: "Информационная безопасность" },
      { name: "Интернет вещей" },
      { name: "Цифровая трансформация" },
      { name: "Здравоохранение это" },
    ],

    tags: [
      "All topics",
      "App",
      "Management",
      "CMR",
      "Big data",
      "Media",
      "Future",
      "CIO",
      "Startup",
      "Team",
      "Data",
      "Data analytics",
      "Information security",
      "Proxy",
    ],
    relatedPosts: "Похожие посты",
    popularPosts: "Популярные",
  },
};
