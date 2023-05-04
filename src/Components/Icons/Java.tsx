import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={91}
    height={142}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <rect width={131} height={64} x={-79} y={30} fill="#FAFBFD" rx={12} />
      <rect
        width={131}
        height={64}
        x={-79}
        y={30}
        fill="#fff"
        fillOpacity={0.3}
        rx={12}
      />
      <path
        fill="#0E061A"
        d="M.9 67.695c2.01 0 3.615-1.14 3.615-3.375V57H2.79v7.32c0 1.08-.675 1.695-1.875 1.695-.96 0-1.56-.36-1.905-1.11l-1.485.87C-1.86 67.05-.63 67.695.9 67.695ZM12.264 60v1.065c-.57-.78-1.455-1.26-2.625-1.26-2.04 0-3.735 1.71-3.735 3.945 0 2.22 1.695 3.945 3.735 3.945 1.17 0 2.055-.48 2.625-1.275v1.08h1.62V60h-1.62Zm-2.37 6.15c-1.35 0-2.37-1.005-2.37-2.4s1.02-2.4 2.37-2.4 2.37 1.005 2.37 2.4-1.02 2.4-2.37 2.4ZM20.857 60l-2.085 5.7-2.1-5.7h-1.77l2.925 7.5h1.875l2.925-7.5h-1.77Zm8.443 0v1.065c-.57-.78-1.455-1.26-2.625-1.26-2.04 0-3.735 1.71-3.735 3.945 0 2.22 1.695 3.945 3.735 3.945 1.17 0 2.055-.48 2.625-1.275v1.08h1.62V60H29.3Zm-2.37 6.15c-1.35 0-2.37-1.005-2.37-2.4s1.02-2.4 2.37-2.4 2.37 1.005 2.37 2.4-1.02 2.4-2.37 2.4Z"
        opacity={0.5}
      />
      <rect
        width={130}
        height={63}
        x={-78.5}
        y={30.5}
        stroke="#FAFBFD"
        rx={11.5}
      />
      <rect
        width={130}
        height={63}
        x={-78.5}
        y={30.5}
        stroke="#0F071B"
        strokeOpacity={0.2}
        rx={11.5}
      />
    </g>
    <defs>
      <filter
        id="a"
        width={208.257}
        height={141.257}
        x={-117.629}
        y={0.286}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.404} />
        <feGaussianBlur stdDeviation={3.714} />
        <feColorMatrix values="0 0 0 0 0.137255 0 0 0 0 0.0627451 0 0 0 0 0.266667 0 0 0 0.01 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_218_3994"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1.116} />
        <feGaussianBlur stdDeviation={5.014} />
        <feColorMatrix values="0 0 0 0 0.137255 0 0 0 0 0.0627451 0 0 0 0 0.266667 0 0 0 0.015 0" />
        <feBlend
          in2="effect1_dropShadow_218_3994"
          result="effect2_dropShadow_218_3994"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2.687} />
        <feGaussianBlur stdDeviation={7.897} />
        <feColorMatrix values="0 0 0 0 0.137255 0 0 0 0 0.0627451 0 0 0 0 0.266667 0 0 0 0.05 0" />
        <feBlend
          in2="effect2_dropShadow_218_3994"
          result="effect3_dropShadow_218_3994"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={8.914} />
        <feGaussianBlur stdDeviation={19.314} />
        <feColorMatrix values="0 0 0 0 0.137255 0 0 0 0 0.0627451 0 0 0 0 0.266667 0 0 0 0.05 0" />
        <feBlend
          in2="effect3_dropShadow_218_3994"
          result="effect4_dropShadow_218_3994"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect4_dropShadow_218_3994"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgComponent;
