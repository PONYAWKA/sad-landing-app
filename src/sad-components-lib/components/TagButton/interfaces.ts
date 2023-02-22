export interface ITagButton {
  text: string;
  setSelected?: (element: string) => void;
  selected?: boolean;
  [index: string]: unknown;
}

export interface IStyledProps {
  checks?: boolean;
}
