export const pageHeadConfig = (blog?: string) => ({
  title: "Blog",
  crumb: { curPage: blog ?? "Blog", links: [{ name: "Home", to: "/" }] },
});
