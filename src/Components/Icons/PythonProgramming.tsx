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
    <g fill="#FAFBFD" clipPath="url(#a)">
      <path d="M21.002 0a28.45 28.45 0 0 0-4.76.407c-4.217.744-4.982 2.303-4.982 5.179v3.796h9.962v1.266h-13.7c-2.896 0-5.431 1.74-6.224 5.051-.915 3.795-.956 6.163 0 10.125.708 2.95 2.399 5.05 5.295 5.05h3.425v-4.55c0-3.29 2.845-6.19 6.223-6.19h9.951c2.77 0 4.981-2.28 4.981-5.062V5.586c0-2.7-2.278-4.728-4.98-5.179A31.12 31.12 0 0 0 21.001 0Zm-5.388 3.054c1.029 0 1.87.854 1.87 1.905 0 1.046-.84 1.892-1.87 1.892a1.88 1.88 0 0 1-1.869-1.892c0-1.051.836-1.905 1.87-1.905Z" />
      <path
        d="M32.416 10.647v4.424c0 3.43-2.908 6.316-6.223 6.316h-9.951c-2.726 0-4.98 2.333-4.98 5.063v9.487c0 2.7 2.346 4.287 4.98 5.062 3.153.926 6.177 1.094 9.95 0 2.509-.727 4.982-2.188 4.982-5.062V32.14h-9.95v-1.267h14.931c2.895 0 3.975-2.019 4.982-5.05 1.04-3.12.995-6.122 0-10.125-.716-2.882-2.082-5.051-4.982-5.051h-3.739ZM26.82 34.671a1.88 1.88 0 0 1 1.87 1.893c0 1.05-.837 1.904-1.87 1.904-1.028 0-1.869-.855-1.869-1.904 0-1.047.84-1.893 1.87-1.893Z"
        opacity={0.5}
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={41.758} height={41.758} x={0.596} fill="#fff" rx={7.01} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
