import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={70}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <g clipPath="url(#b)">
        <rect width={56} height={56} x={7} y={5} fill="#FAFBFD" rx={12} />
        <g opacity={0.5}>
          <path fill="#FAFBFD" d="M7 5h56v56H7z" />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="m23.203 22.818 8.873 8.874-8.873 8.874M37.983 39.796h9.45"
          />
        </g>
      </g>
      <rect width={55} height={55} x={7.5} y={5.5} stroke="#FAFBFD" rx={11.5} />
    </g>
    <defs>
      <clipPath id="b">
        <rect width={56} height={56} x={7} y={5} fill="#fff" rx={12} />
      </clipPath>
      <filter
        id="a"
        width={69.265}
        height={69.265}
        x={0.368}
        y={0.176}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.272} />
        <feGaussianBlur stdDeviation={0.498} />
        <feColorMatrix values="0 0 0 0 0.137255 0 0 0 0 0.0627451 0 0 0 0 0.266667 0 0 0 0.0274 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_327_410" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.751} />
        <feGaussianBlur stdDeviation={1.377} />
        <feColorMatrix values="0 0 0 0 0.137255 0 0 0 0 0.0627451 0 0 0 0 0.266667 0 0 0 0.035 0" />
        <feBlend
          in2="effect1_dropShadow_327_410"
          result="effect2_dropShadow_327_410"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1.809} />
        <feGaussianBlur stdDeviation={3.316} />
        <feColorMatrix values="0 0 0 0 0.137255 0 0 0 0 0.0627451 0 0 0 0 0.266667 0 0 0 0.0426 0" />
        <feBlend
          in2="effect2_dropShadow_327_410"
          result="effect3_dropShadow_327_410"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect3_dropShadow_327_410"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgComponent;
