export interface IProps {
  title?: string;
  itemsToShow?: number;
  to?: string;
  items: {
    icon: string;
    title: string;
    pos: string;
    text: string;
  }[];
}

export interface IStyledProps {
  disabled?: boolean;
}
export interface IStyledNav {
  to?: string;
}
