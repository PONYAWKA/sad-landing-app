import * as React from "react";
import { SVGProps } from "react";

export const dataVisualization = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21.625 6.625A1.875 1.875 0 0 1 23.5 8.5v20h20a1.875 1.875 0 0 1 1.858 1.62l.017.255c0 12.425-10.075 21.25-22.5 21.25a22.5 22.5 0 0 1-22.5-22.5c0-12.425 8.825-22.5 21.25-22.5Zm7.5-6.25a22.5 22.5 0 0 1 22.5 22.5 1.875 1.875 0 0 1-1.875 1.875H29.125a1.875 1.875 0 0 1-1.875-1.875V2.25A1.875 1.875 0 0 1 29.125.375Z" />
  </svg>
);
