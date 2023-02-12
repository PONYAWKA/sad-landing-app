export interface ISuccess {
  title?: string;
  text?: string;
  hide?: boolean;
  center?: boolean;
  items?: {
    title: string;
    sub: string;
  }[];
}

export interface IStyledProps {
  center?: boolean;
}
