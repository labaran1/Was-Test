import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={37}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M16.548.182c-1.344.006-2.626.12-3.755.32-3.325.588-3.928 1.817-3.928 4.085V7.58h7.857v.998H5.916c-2.283 0-4.283 1.373-4.908 3.984-.722 2.993-.754 4.86 0 7.985.558 2.327 1.892 3.984 4.176 3.984h2.701v-3.59c0-2.593 2.244-4.88 4.909-4.88h7.848c2.184 0 3.928-1.8 3.928-3.994v-7.48c0-2.13-1.797-3.73-3.928-4.085a24.543 24.543 0 0 0-4.094-.321Zm-4.25 2.408c.812 0 1.475.674 1.475 1.502 0 .825-.662 1.493-1.474 1.493a1.482 1.482 0 0 1-1.474-1.493c0-.828.66-1.502 1.474-1.502Z"
    />
    <path
      fill="url(#b)"
      d="M25.55 8.579v3.49c0 2.704-2.294 4.98-4.909 4.98h-7.847c-2.15 0-3.929 1.84-3.929 3.993v7.482c0 2.13 1.851 3.382 3.928 3.992 2.487.731 4.873.864 7.849 0 1.977-.573 3.928-1.725 3.928-3.992V25.53h-7.848v-.998H28.5c2.283 0 3.134-1.592 3.929-3.983.82-2.461.785-4.828 0-7.985-.565-2.274-1.643-3.984-3.93-3.984H25.55Zm-4.414 18.947c.815 0 1.474.667 1.474 1.493 0 .828-.66 1.501-1.474 1.501-.812 0-1.474-.674-1.474-1.501 0-.826.662-1.493 1.474-1.493Z"
    />
    <path
      fill="url(#c)"
      d="M27.34 34.339c0 1.127-4.715 2.041-10.53 2.041-5.815 0-10.529-.914-10.529-2.041 0-1.128 4.714-2.042 10.53-2.042 5.814 0 10.529.914 10.529 2.042Z"
      opacity={0.444}
    />
    <defs>
      <linearGradient
        id="a"
        x1={-0.333}
        x2={17.789}
        y1={1.118}
        y2={16.572}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5A9FD4" />
        <stop offset={1} stopColor="#306998" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={24.607}
        x2={18.108}
        y1={26.178}
        y2={17.065}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFD43B" />
        <stop offset={1} stopColor="#FFE873" />
      </linearGradient>
      <radialGradient
        id="c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 -2.04219 8.97714 0 16.768 34.28)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B8B8B8" stopOpacity={0.498} />
        <stop offset={1} stopColor="#7F7F7F" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
export default SvgComponent;
