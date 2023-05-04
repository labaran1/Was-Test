import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#0E061A"
      d="M17.279 8.375s3.971-4.371 13.952-4.371a1.274 1.274 0 0 1 1.327 1.273v20.372a1.273 1.273 0 0 1-1.222 1.273 21.877 21.877 0 0 0-14.057 5.068 21.877 21.877 0 0 0-14.057-5.07A1.273 1.273 0 0 1 2 25.646V5.274a1.273 1.273 0 0 1 1.327-1.273c10.048 0 13.952 4.374 13.952 4.374Z"
    />
    <path
      fill="#F5F5F5"
      d="M30.123 7.2c-4.729.526-9.138 2.048-12 4.47V28c2.862-2.423 7.271-3.945 12-4.47V7.2Z"
    />
  </svg>
);
export default SvgComponent;
