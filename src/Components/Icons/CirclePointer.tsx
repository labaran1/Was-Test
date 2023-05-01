import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={13}
    fill="none"
    {...props}
  >
    <path
      fill="#0F0518"
      d="M12 .758v9.617c0 .422-.168.827-.466 1.126-.993.992-2.69.308-2.718-1.095L8.743 6.62l-5.595 5.596A1.844 1.844 0 0 1 .538 9.61l5.648-5.668-3.826-.036C.965 3.892.276 2.206 1.262 1.219A1.574 1.574 0 0 1 2.375.758H12Z"
    />
  </svg>
);
export default SvgComponent;
