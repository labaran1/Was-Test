import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={41}
    fill="none"
    {...props}
  >
    <path
      fill="#0F80CC"
      d="M20.686 31.306c-.02-.227-.03-.375-.03-.375s-.72-4.653-1.578-6.042c-.136-.22.014-1.124.393-2.463.221.367 1.156 1.935 1.343 2.44.212.572.256.735.256.735s-.512-2.525-1.353-4c.184-.595.404-1.254.653-1.958.319.535 1.081 1.831 1.25 2.281l.087.243.025-.13c-.192-.782-.57-2.144-1.088-3.15 1.148-5.728 5.066-13.383 9.082-16.798h-26.2C1.772 2.089.335 3.465.335 5.147v27.68c0 1.682 1.437 3.058 3.193 3.058h17.255a35.79 35.79 0 0 1-.096-4.579Z"
    />
    <path
      fill="url(#a)"
      d="M19.471 22.426c.222.366 1.156 1.935 1.344 2.44.21.571.255.735.255.735s-.512-2.526-1.353-4c.184-.596.405-1.254.654-1.958.29.49.953 1.614 1.192 2.147l.027-.301c-.212-.78-.534-1.802-.946-2.602 1.058-5.274 4.463-12.179 8.13-15.906H3.528c-1.247 0-2.261.971-2.261 2.166v25.66c5.718-2.102 12.613-4.024 18.547-3.942-.22-.814-.472-1.55-.735-1.976-.136-.22.015-1.124.393-2.463Z"
    />
    <path
      fill="#003B57"
      d="M35.838 1.188c-1.794-1.533-3.967-.918-6.111.905-.318.271-.636.572-.952.893-3.668 3.727-7.073 10.632-8.13 15.906.412.8.733 1.822.945 2.602a23.357 23.357 0 0 1 .286 1.172s-.033-.12-.168-.494c-.025-.072-.054-.15-.088-.243a2.839 2.839 0 0 0-.056-.134c-.24-.533-.902-1.658-1.193-2.147-.25.704-.47 1.362-.654 1.958.841 1.474 1.354 4 1.354 4s-.045-.164-.256-.735c-.188-.505-1.122-2.074-1.343-2.44-.379 1.339-.53 2.243-.394 2.463.264.426.515 1.162.735 1.976.498 1.833.843 4.065.843 4.065l.03.376c-.069 1.54-.027 3.136.097 4.579.165 1.91.475 3.55.871 4.429l.268-.14c-.58-1.73-.816-3.998-.713-6.613.156-3.996 1.116-8.816 2.89-13.84 2.997-7.583 7.155-13.668 10.961-16.574-3.469 3.001-8.163 12.715-9.569 16.313-1.573 4.028-2.688 7.808-3.36 11.43 1.16-3.396 4.908-4.855 4.908-4.855s1.84-2.173 3.988-5.276c-1.287.28-3.4.762-4.109 1.047-1.044.42-1.325.563-1.325.563s3.382-1.973 6.284-2.867c3.992-6.022 8.34-14.577 3.961-18.32Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={17.128}
        x2={17.128}
        y1={3.55}
        y2={29.259}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#97D9F6" />
        <stop offset={0.92} stopColor="#0F80CC" />
        <stop offset={1} stopColor="#0F80CC" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgComponent;
