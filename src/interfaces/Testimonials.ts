export interface ITestimonials {
  title: string;
  itemsToShow: number;
  items: {
    icon: string;
    pos: string;
    title: string;
    text: string;
  }[];
}
