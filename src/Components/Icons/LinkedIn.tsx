import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill="#ccc"
      d="M19.794 20.236h-4.099v-6.43c0-1.533-.027-3.507-2.131-3.507-2.135 0-2.462 1.67-2.462 3.396v6.54H7.004V7.014h3.934V8.82h.056a4.315 4.315 0 0 1 3.882-2.136c4.154 0 4.92 2.738 4.92 6.299l-.002 7.253ZM2.38 5.206A2.392 2.392 0 0 1 0 2.823 2.392 2.392 0 0 1 2.379.44a2.392 2.392 0 0 1 2.378 2.383A2.392 2.392 0 0 1 2.38 5.206Zm2.05 15.03H.324V7.013h4.103v13.223Z"
    />
  </svg>
);
export default SvgComponent;
