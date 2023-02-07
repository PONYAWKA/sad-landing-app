export interface BreadCrumbProps {
  curPage?: string;
  links?: { name: string; to: string }[];
  curPageColor?: string;
}

export interface IStyled {
  curPageColor?: string;
}
