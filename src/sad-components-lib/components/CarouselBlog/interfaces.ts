import { IBlogItem } from "../BlogItem/interfaces";

export interface IProps {
  title?: string;
  itemsToShow?: number;
  items: IBlogItem[];
}

export interface IStyledProps {
  disabled?: boolean;
}
