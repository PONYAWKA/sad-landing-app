export interface IRelatedPost {
  title?: string;
  hideId?: boolean;
  hiedText?: boolean;
  items: IPost[];
}

interface IPost {
  icon?: string;
  info?: string;
  text?: string;
  heading?: string;
  to?: string;
}
