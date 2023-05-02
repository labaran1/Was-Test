import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={21}
    fill="none"
    {...props}
  >
    <path
      stroke="#0E061A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.402 14.378V.818M15.162 8.296l-5.76 6.082-5.76-6.082M1.4 19.819h16"
    />
  </svg>
);
export default SvgComponent;
