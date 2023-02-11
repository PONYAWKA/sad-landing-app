export interface ICategoriesElement {
  name: string;
  onClick?: (id: number) => () => void;
  id?: number;
}
