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
