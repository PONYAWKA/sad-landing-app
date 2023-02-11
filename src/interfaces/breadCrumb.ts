export interface IBreadCrumb {
  curPage: string;
  links: { name: string; to: string }[];
  curPageColor?: string;
}
