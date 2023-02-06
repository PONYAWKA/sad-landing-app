import * as React from "react";
import { SVGProps } from "react";

export const LeftSideArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M.733.707a.75.75 0 0 1 1.06.026l5.001 5.25a.75.75 0 0 1 0 1.035l-5 5.25a.75.75 0 1 1-1.087-1.034L5.217 6.5.706 1.766A.75.75 0 0 1 .732.706v.001Z" />
  </svg>
);
