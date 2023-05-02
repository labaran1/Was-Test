import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={23}
    fill="none"
    {...props}
  >
    <g
      stroke="#0E061A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      filter="url(#a)"
      opacity={0.5}
    >
      <path d="M2.6 2.316h5.6v18.2H2.6z" />
      <path
        d="M0 0h5.917v15.497H0z"
        transform="matrix(.94476 -.32776 .32174 .94683 13.217 5.816)"
      />
      <path d="M8.2 9.316h5.599v11.2H8.2v-11.2Z" />
    </g>
    <defs>
      <filter
        id="a"
        width={25.287}
        height={22.295}
        x={0.552}
        y={0.269}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={0.649} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.054902 0 0 0 0 0.0235294 0 0 0 0 0.101961 0 0 0 0.5 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_258_1681"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_258_1681"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.649} />
        <feGaussianBlur stdDeviation={0.324} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend
          in2="shape"
          mode="soft-light"
          result="effect2_innerShadow_258_1681"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgComponent;
