import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={108}
    height={100}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <g clipPath="url(#b)">
        <rect width={64} height={56} x={22} y={16} fill="#FAFBFD" rx={12} />
        <g opacity={0.7}>
          <path fill="#FAFBFD" d="M22 16h64v56H22z" />
          <path
            fill="#019BC6"
            d="M71.188 39.916c-.229-1.488-1.173-2.762-2.887-3.931l-.984-.578-.662.861c-.836 1.11-1.268 2.656-1.133 4.132.068.52.256 1.452.864 2.266-.608.284-1.808.685-3.414.661H32.348l-.054.307c-.283 1.488-.283 6.115 3.157 9.68 2.617 2.703 6.53 4.084 11.656 4.084 11.09 0 19.292-4.462 23.137-12.583 1.511.023 4.762.012 6.435-2.786.04-.06.148-.236.432-.756l.162-.295-.945-.555c-1.011-.59-3.345-.802-5.14-.507ZM56.848 30h-4.655v3.707h4.654V30Zm0 4.45h-4.655v3.695h4.654V34.45Zm-5.505 0H46.69v3.695h4.654V34.45Zm-5.504 0h-4.654v3.695h4.654V34.45Zm-5.504 4.439H35.68v3.706h4.655V38.89Zm5.504 0h-4.654v3.706h4.654V38.89Zm5.504 0H46.69v3.706h4.654V38.89Zm5.504 0h-4.654v3.706h4.654V38.89Zm5.505 0h-4.655v3.706h4.655V38.89Z"
          />
        </g>
      </g>
      <rect
        width={63}
        height={55}
        x={22.5}
        y={16.5}
        stroke="#FAFBFD"
        rx={11.5}
      />
      <rect
        width={63}
        height={55}
        x={22.5}
        y={16.5}
        stroke="#0E061A"
        strokeOpacity={0.2}
        rx={11.5}
      />
    </g>
    <defs>
      <clipPath id="b">
        <rect width={64} height={56} x={22} y={16} fill="#fff" rx={12} />
      </clipPath>
      <filter
        id="a"
        width={108}
        height={100}
        x={0}
        y={0}
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
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_218_3924"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.751} />
        <feGaussianBlur stdDeviation={1.377} />
        <feColorMatrix values="0 0 0 0 0.137255 0 0 0 0 0.0627451 0 0 0 0 0.266667 0 0 0 0.035 0" />
        <feBlend
          in2="effect1_dropShadow_218_3924"
          result="effect2_dropShadow_218_3924"
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
          in2="effect2_dropShadow_218_3924"
          result="effect3_dropShadow_218_3924"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={6} />
        <feGaussianBlur stdDeviation={11} />
        <feColorMatrix values="0 0 0 0 0.137255 0 0 0 0 0.0627451 0 0 0 0 0.266667 0 0 0 0.05 0" />
        <feBlend
          in2="effect3_dropShadow_218_3924"
          result="effect4_dropShadow_218_3924"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect4_dropShadow_218_3924"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgComponent;
