import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={21}
    fill="none"
    {...props}
  >
    <path
      stroke="#0E061A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.39 19.319-8.513-9.127A5.256 5.256 0 0 1 1.465 7.35a5.34 5.34 0 0 1 .467-3.157A5.163 5.163 0 0 1 3.456 2.33a4.964 4.964 0 0 1 2.179-.943 4.898 4.898 0 0 1 2.357.184 5.02 5.02 0 0 1 2.016 1.271L11.4 4.277l1.392-1.434a5.02 5.02 0 0 1 2.016-1.272 4.898 4.898 0 0 1 2.357-.184 4.964 4.964 0 0 1 2.18.943 5.164 5.164 0 0 1 1.523 1.863 5.34 5.34 0 0 1 .467 3.157 5.255 5.255 0 0 1-1.412 2.843c-2.744 2.943-8.533 9.127-8.533 9.127Z"
    />
  </svg>
);
export default SvgComponent;
