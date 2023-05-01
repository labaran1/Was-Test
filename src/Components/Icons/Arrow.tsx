import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={34}
    fill="none"
    {...props}
  >
    <path
      fill="#FBFBFC"
      d="M12 9v9.617c0 .422-.168.828-.466 1.126-.993.993-2.69.308-2.718-1.095l-.073-3.786-5.595 5.596a1.844 1.844 0 0 1-2.61-2.606l5.648-5.668-3.826-.036c-1.395-.014-2.084-1.7-1.098-2.687A1.574 1.574 0 0 1 2.375 9H12Z"
    />
  </svg>
);
export default SvgComponent;
