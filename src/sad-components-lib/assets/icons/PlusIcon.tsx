import { SVGProps } from "react";

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    {...props}
  >
    <path d="M8.883.507 9 .5a1 1 0 0 1 .993.883L10 1.5v7h7a1 1 0 0 1 .993.883L18 9.5a1 1 0 0 1-.883.993L17 10.5h-7v7a1 1 0 0 1-.883.993L9 18.5a1 1 0 0 1-.993-.883L8 17.5v-7H1a1 1 0 0 1-.993-.883L0 9.5a1 1 0 0 1 .883-.993L1 8.5h7v-7a1 1 0 0 1 .883-.993L9 .5l-.117.007Z" />
  </svg>
);
