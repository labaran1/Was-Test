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
            fill="#000"
            d="M35.176 53.364c11.344 0 20.54-9.118 20.54-20.364 0-11.247-9.196-20.364-20.54-20.364S14.636 21.753 14.636 33c0 11.246 9.196 20.364 20.54 20.364Z"
          />
          <path
            fill="#fff"
            d="M28.525 22.191c-.96-.034-2.014.295-3.438.967-1.516.488-2.383 1.806-.601 1.805l-.043 1.16-1.124.432-.042 1.127s-.173 1.31 1.254 1.234c-.186.045-.34.137-.132.346.387.386.897.257 2.745.3 1.849.043 2.048 2.1 2.048 2.1s.415 3.369.353 6.652c-2.002-1.066-4.002-2.01-4.623-1.873-1.376.3-2.551 1.658-1.376 3.61 1.076 1.787 2.893 3.06 4.724 4.207-.546.904-1.225 1.382-2.598 1.048-.69-.168-.634-.558-2.502-1.582-3.44-1.385-2.847-.397-2.002.419 1.773 1.264 2.646 2.413 3.958 2.95 1.29.527 3.017.47 5.218-1.411.036-.04.067-.078.103-.117-.025.029-.046.058-.071.087 2.816 1.752 6.32 2.296 9.55 1.58.158-.05.671-.117.628-.179l.076.01c.014-.084 3.224.345 5.591-.615 2.295-.93 3.792-2.671 4.109-4.479 1.304-7.428-6.08-8.018-7.048-8.32l-2.215-.6c-.42-1.048-.979-2.073-1.694-3.195a7.291 7.291 0 0 0-1.575-1.76l.006.003s.216-.685 1.042-1.396c.167-.133 2.947-2.256 8-.106l.357 3.444 2.296-.118-.277-4.672c-.812-.951-7.703-3.81-12.68-.014-.73.633-1.189 1.514-1.189 1.514.006.001.012.005.017.008a11.08 11.08 0 0 0-2.434-.553.25.25 0 0 1-.001-.008s-.966-2.66-2.726-3.547c-.566-.285-1.108-.437-1.684-.458Zm5.109 7.957c.007.003.014.008.021.01-.007 0-.014-.003-.02-.003l-.001-.007Zm-.21 4.695c.747 1.254 1.292 2.378 1.53 3.768-.117.845-.294 1.68-.55 2.469 0 0-.636-.386-1.551-.92.17-1.047.282-2.176.42-3.446.046-.605.099-1.243.151-1.87Zm8.304.446c.006.03.013.057.018.086.031.161.057.327.085.489.8.225 1.603.444 2.402.67 0 0 3.955.77 3.352 4.758-.568 3.755-6.234 3.459-6.214 3.333.678-4.24.812-7.007.357-9.336Z"
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
          result="effect1_dropShadow_218_3985"
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
          in2="effect1_dropShadow_218_3985"
          result="effect2_dropShadow_218_3985"
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
          in2="effect2_dropShadow_218_3985"
          result="effect3_dropShadow_218_3985"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect3_dropShadow_218_3985"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgComponent;
