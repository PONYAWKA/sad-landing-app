export interface IPriceCards {
  title: string;
  cards: {
    name: string;
    mo: number | string;
    yr: number | string;
    plus: string[];
  }[];
}
