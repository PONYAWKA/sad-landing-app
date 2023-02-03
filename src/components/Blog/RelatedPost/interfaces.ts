export interface IRelatedPost {
  title?: string;
  hideId?: boolean;
  hiedText?: boolean;
  items: {
    icon?: string;
    info?: string;
    text?: string;
    heading?: string;
    to?: string;
  }[];
}
