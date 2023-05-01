import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#F5BB00"
      d="M9.333.758c.45-1.01 1.884-1.01 2.334 0l2.063 4.628c.186.417.58.703 1.034.75l5.04.533c1.099.116 1.542 1.48.72 2.22l-3.764 3.393c-.339.305-.49.768-.395 1.214l1.052 4.957c.23 1.082-.93 1.925-1.889 1.373l-4.39-2.532a1.278 1.278 0 0 0-1.277 0l-4.39 2.532c-.957.552-2.118-.29-1.888-1.373l1.051-4.957a1.278 1.278 0 0 0-.394-1.215L.475 8.89c-.821-.74-.378-2.104.722-2.22l5.04-.532a1.278 1.278 0 0 0 1.032-.75L9.333.756Z"
    />
  </svg>
);
export default SvgComponent;
