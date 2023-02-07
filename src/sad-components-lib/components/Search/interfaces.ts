export interface ISearch {
  onClick?: () => void;
  buttonText?: string;
  palaceHolder?: string;
  value?: string;
  onChange?: (e: IEvent) => void;
}

export interface IEvent {
  target: {
    value: string;
  };
}
