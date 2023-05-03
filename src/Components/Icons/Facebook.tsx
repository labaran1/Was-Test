import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill="#ccc"
      d="M11.683 6.38c-.085-.083-.17-.166-.256-.166H8.195V5.06c0-.247.086-.494.426-.494h2.551c.085 0 .255 0 .34-.165 0-.083.085-.165.085-.248v-3.3c0-.247-.17-.412-.425-.412H7.515c-4.082 0-4.423 3.382-4.423 4.372v1.402H.966c-.255 0-.425.165-.425.413v3.299c0 .247.17.412.425.412h2.126v9.486c0 .247.17.412.426.412H7.77c.255 0 .425-.165.425-.412v-9.486h2.892c.255 0 .425-.165.425-.33l.34-3.299c0-.165-.084-.247-.17-.33Z"
    />
  </svg>
);
export default SvgComponent;
