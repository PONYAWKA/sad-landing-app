export interface IProps {
  title: string;
  elements: {
    to: string;
    title: string;
  }[];
  alt?: boolean;
}

export interface IStyledProps {
  isOpen?: boolean;
}
