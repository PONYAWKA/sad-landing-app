import { ICurrentBlog } from "@/components/Blog/CurrentBlog/interfaces";

export const sortByPopular = (a: ICurrentBlog, b: ICurrentBlog) =>
  +a.views - +b.views;
