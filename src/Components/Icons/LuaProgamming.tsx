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
        <g opacity={0.7}>
          <path fill="#FCFCFE" d="M7 5h56v56H7z" />
          <path
            fill="navy"
            d="M48.492 34.277c0-8.149-6.615-14.764-14.764-14.764s-14.764 6.615-14.764 14.764c0 8.148 6.615 14.764 14.764 14.764 8.148 0 14.764-6.615 14.764-14.764Z"
          />
          <path
            fill="#fff"
            d="M44.168 28.159a4.325 4.325 0 0 0-4.323-4.323 4.325 4.325 0 0 0-4.323 4.323 4.325 4.325 0 0 0 4.323 4.323 4.325 4.325 0 0 0 4.323-4.323Z"
          />
          <path
            fill="navy"
            d="M52.814 19.509a4.325 4.325 0 0 0-4.323-4.324 4.325 4.325 0 0 0-4.323 4.324 4.323 4.323 0 1 0 8.646 0Z"
          />
          <path
            fill="#fff"
            d="M24.943 40.566h4.784v1.088h-6.02v-9.686h1.236v8.598ZM35.44 41.655v-.971c-.652.918-1.3 1.277-2.324 1.277-1.354 0-2.219-.743-2.219-1.901v-5.367h1.101v4.93c0 .837.56 1.371 1.436 1.371 1.154 0 1.9-.93 1.9-2.353v-3.948h1.102v6.962h-.995ZM44.532 41.842c-.36.094-.53.118-.759.118-.718 0-1.064-.318-1.142-1.023-.783.717-1.489 1.023-2.365 1.023-1.407 0-2.284-.795-2.284-2.06 0-.905.412-1.529 1.223-1.86.424-.17.665-.223 2.231-.423.877-.106 1.154-.306 1.154-.771v-.294c0-.664-.558-1.036-1.554-1.036-1.035 0-1.541.384-1.635 1.236h-1.118c.03-.69.16-1.089.478-1.448.465-.518 1.3-.811 2.312-.811 1.713 0 2.618.664 2.618 1.9v4.095c0 .347.212.546.6.546.065 0 .118 0 .24-.028v.836Zm-1.942-3.63c-.37.171-.612.224-1.782.383-1.183.172-1.676.547-1.676 1.277 0 .706.506 1.117 1.37 1.117.653 0 1.195-.211 1.648-.623.33-.306.44-.53.44-.906v-1.248Z"
          />
          <path
            stroke="gray"
            strokeDasharray="1.31 1.31"
            strokeMiterlimit={10}
            strokeWidth={0.348}
            d="M50.738 25.606a19.1 19.1 0 0 1 2.08 8.666c0 10.54-8.552 19.092-19.09 19.092-10.54 0-19.092-8.553-19.092-19.091 0-10.539 8.553-19.091 19.091-19.091 3.39 0 6.713.901 9.633 2.606"
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
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_218_4002"
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
          in2="effect1_dropShadow_218_4002"
          result="effect2_dropShadow_218_4002"
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
          in2="effect2_dropShadow_218_4002"
          result="effect3_dropShadow_218_4002"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect3_dropShadow_218_4002"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgComponent;
