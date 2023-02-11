export interface ISolutionsList {
  items: {
    img: string;
    heading: string;
    description: string;
    id: number;
    hide?: boolean;
  }[];
}
