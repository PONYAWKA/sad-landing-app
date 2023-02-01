export interface IProps {
  title?: string;
  itemsToShow?: number;
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
