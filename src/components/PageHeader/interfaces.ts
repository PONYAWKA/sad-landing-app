export interface PageHeaderProps {
  title?: string;
  crumb?: BreadCrumbProps;
}

interface BreadCrumbProps {
  curPage?: string;
  links?: { name: string; to: string }[];
  curPageColor?: string;
}
