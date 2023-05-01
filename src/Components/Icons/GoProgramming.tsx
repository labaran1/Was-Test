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
      <path d="M4.671 16.944c-.08 0-.1-.046-.06-.114l.42-.618c.04-.069.14-.114.22-.114h7.146c.08 0 .1.068.06.137l-.34.595c-.04.068-.14.137-.2.137l-7.246-.023ZM1.653 19.046c-.08 0-.1-.046-.06-.115l.42-.617c.04-.069.14-.114.22-.114h9.127c.08 0 .12.068.1.137l-.16.549c-.02.091-.1.137-.18.137l-9.467.023ZM6.491 21.149c-.08 0-.1-.069-.06-.137l.28-.572c.04-.069.12-.137.2-.137h4.004c.08 0 .12.068.12.16l-.04.549c0 .091-.08.16-.14.16l-4.364-.023ZM27.262 16.53c-1.261.365-2.122.64-3.363 1.006-.3.091-.32.114-.58-.229-.3-.389-.52-.64-.941-.869-1.26-.709-2.482-.503-3.623.343-1.36 1.007-2.061 2.493-2.041 4.346.02 1.83 1.12 3.34 2.702 3.59 1.36.207 2.502-.342 3.402-1.509.18-.251.34-.526.54-.846h-3.862c-.42 0-.52-.297-.38-.686.26-.71.74-1.899 1.02-2.493.06-.137.2-.366.5-.366h7.286c-.04.617-.04 1.235-.12 1.852-.22 1.647-.76 3.157-1.641 4.483-1.441 2.173-3.323 3.523-5.704 3.889-1.962.297-3.783-.137-5.384-1.51-1.481-1.28-2.322-2.973-2.542-5.078-.26-2.493.38-4.734 1.701-6.701 1.421-2.127 3.303-3.477 5.604-3.957 1.882-.389 3.683-.137 5.304 1.12 1.06.801 1.821 1.9 2.322 3.226.12.206.04.32-.2.389Z" />
      <path d="M33.891 29.18c-1.821-.047-3.482-.641-4.883-2.014-1.181-1.166-1.922-2.653-2.162-4.414-.36-2.585.26-4.872 1.621-6.908 1.461-2.195 3.223-3.339 5.604-3.82 2.042-.411 3.963-.182 5.705 1.167 1.58 1.235 2.561 2.905 2.821 5.1.34 3.089-.44 5.605-2.301 7.755-1.321 1.532-2.942 2.493-4.804 2.927-.54.115-1.08.137-1.6.206Zm4.764-9.241c-.02-.298-.02-.526-.06-.755-.36-2.265-2.182-3.545-4.083-3.042-1.862.48-3.063 1.83-3.503 3.98-.36 1.784.4 3.59 1.841 4.323 1.101.548 2.202.48 3.263-.138 1.581-.938 2.442-2.401 2.542-4.368Z" />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={41.758} height={41.758} x={0.913} fill="#fff" rx={5.539} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
