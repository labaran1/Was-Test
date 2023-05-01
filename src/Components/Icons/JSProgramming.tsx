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
    <path
      fill="#FAFBFD"
      fillRule="evenodd"
      d="M16.896 0h8.525c7.833 0 11.75 0 14.183 2.433 2.433 2.434 2.433 6.35 2.433 14.183v8.525c0 7.833 0 11.75-2.433 14.183-2.434 2.434-6.35 2.434-14.183 2.434h-8.525c-7.833 0-11.75 0-14.183-2.434C.279 36.891.279 32.974.279 25.141v-8.525c0-7.833 0-11.75 2.434-14.183C5.146 0 9.063 0 16.896 0ZM32.2 35.005c-1.935 0-3.03-1.01-3.87-2.383l-3.19 1.852c1.153 2.276 3.507 4.013 7.151 4.013 3.727 0 6.503-1.935 6.503-5.468 0-3.277-1.883-4.735-5.217-6.164l-.98-.42c-1.684-.73-2.414-1.206-2.414-2.384 0-.952.729-1.681 1.878-1.681 1.127 0 1.853.475 2.526 1.681l3.055-1.962c-1.292-2.273-3.086-3.141-5.58-3.141-3.505 0-5.747 2.24-5.747 5.183 0 3.195 1.88 4.706 4.712 5.912l.981.421c1.79.783 2.857 1.26 2.857 2.605 0 1.123-1.039 1.935-2.665 1.935Zm-15.207-.025c-1.348 0-1.909-.925-2.525-2.018l-3.194 1.933c.925 1.959 2.745 3.585 5.886 3.585 3.478 0 5.86-1.85 5.86-5.913V19.172h-3.924v13.342c0 1.962-.813 2.466-2.103 2.466Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
