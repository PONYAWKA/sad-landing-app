export interface IProps {
  value?: string;
  onChange?: (e: IEvent) => void;
  placeholder?: string;
  onClick?: () => void;
}
interface IEvent {
  target: {
    value: string;
  };
}
