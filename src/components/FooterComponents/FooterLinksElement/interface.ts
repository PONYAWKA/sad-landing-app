export interface IProps {
  title: string;
  routs: {
    to: string;
    title: string;
  }[];
  alt?: boolean;
}

export interface IStyledProps {
  isOpen?: boolean;
}
