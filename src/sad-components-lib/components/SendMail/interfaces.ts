export interface IProps {
  value?: string;
  onChange?: (e: IEvent) => void;
  placeholder?: string;
  onClick?: () => void;
  error?: boolean;
  isMobile?: boolean;
}
interface IEvent {
  target: {
    value: string;
  };
}

export interface IError {
  error?: boolean;
}
