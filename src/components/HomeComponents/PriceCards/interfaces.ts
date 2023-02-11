export interface IPriceCards {
  title: string;
  clientId: string;
  cards: {
    name: string;
    mo: number | string;
    yr: number | string;
    plus: string[];
  }[];
}
