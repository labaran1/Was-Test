import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#ccc"
      fillRule="evenodd"
      d="M21.358.713a2.892 2.892 0 0 1 2.036 2.049c.48 1.806.48 5.576.48 5.576s0 3.771-.482 5.577a2.892 2.892 0 0 1-2.035 2.048c-1.795.485-8.994.485-8.994.485s-7.2 0-8.994-.485a2.892 2.892 0 0 1-2.035-2.048C.853 12.11.853 8.338.853 8.338s0-3.77.481-5.576A2.892 2.892 0 0 1 3.369.713C5.164.23 12.363.23 12.363.23s7.199 0 8.995.484Zm-5.314 7.625-5.983 3.475v-6.95l5.983 3.475Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
