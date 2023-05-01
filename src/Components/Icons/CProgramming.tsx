import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={43}
    height={42}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#FBFBFC"
        fillRule="evenodd"
        d="M5.168 32.101a3.61 3.61 0 0 1-1.805-3.068V12.79a3.61 3.61 0 0 1 1.805-3.14L19.607 1.49a3.61 3.61 0 0 1 3.61 0l14.436 8.157a3.61 3.61 0 0 1 1.805 3.068V28.96a3.61 3.61 0 0 1-1.805 3.14l-14.438 8.158a3.609 3.609 0 0 1-3.61 0L5.168 32.1ZM30.76 18.313h-5.613a3.357 3.357 0 0 0-3.664-2.798c-3.248 0-4.006 3.285-4.006 5.415 0 1.317.56 5.414 4.006 5.414a3.124 3.124 0 0 0 3.61-3.159h5.415c0 2.744-1.697 7.906-8.916 7.906A9.585 9.585 0 0 1 11.45 20.875a9.781 9.781 0 0 1 10.143-10.377 8.736 8.736 0 0 1 9.168 7.815Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M3.361 1.025h36.096v39.706H3.361z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
