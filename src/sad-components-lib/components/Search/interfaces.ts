export interface ISearch {
  onClick?: () => void;
  buttonText?: string;
  palaceHolder?: string;
}

export interface IEvent {
  target: {
    value: string;
  };
}
