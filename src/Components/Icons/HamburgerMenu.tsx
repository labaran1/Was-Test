import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <g stroke="#0F0518" strokeLinecap="round" strokeWidth={2} opacity={0.8}>
      <path d="M1 6h20M1 16h20" />
    </g>
  </svg>
);
export default SvgComponent;
