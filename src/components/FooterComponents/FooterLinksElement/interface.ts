export interface IProps {
  title: string;
  elements: {
    to: string;
    title: string;
  }[];
}

export interface IStyledProps {
  isOpen?: boolean;
}
