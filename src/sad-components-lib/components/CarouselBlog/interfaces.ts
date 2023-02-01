export interface IProps {
  title?: string;
  itemsToShow?: number;
  items: {
    icon: string;
    info: string;
    heading: string;
    text: string;
    views: number;
    id: string;
  }[];
}

export interface IStyledProps {
  disabled?: boolean;
}
